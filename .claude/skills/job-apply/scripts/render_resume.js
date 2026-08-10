#!/usr/bin/env node
/*
 * Render a resume from a JSON content file into a .docx.
 *
 *   node render_resume.js content.json "Jane Citizen - Resume.docx"
 *
 * The template is deliberately conservative: serif body, hairline rules under
 * section headings, dates on a right positional tab, no icons or colour
 * blocks. See ../references/writing-rules.md for why.
 */

const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, AlignmentType, LevelFormat, ShadingType,
  PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader,
} = require("docx");

const INK = "1B2A3A";
const GREY = "55606B";
const RULE = "B3BAC2";
const SERIF = "Cambria";

const PAGE_W = 11906;            // A4 width in DXA
const MARGIN = 1000;
const CONTENT_W = PAGE_W - MARGIN * 2;

const numbering = {
  config: [{
    reference: "dash",
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: "–",
      alignment: AlignmentType.LEFT,
      style: {
        paragraph: { indent: { left: 260, hanging: 180 } },
        run: { color: GREY, font: SERIF },
      },
    }],
  }],
};

const rightTab = (text) => new TextRun({
  font: SERIF, size: 19, color: GREY,
  children: [
    new PositionalTab({
      alignment: PositionalTabAlignment.RIGHT,
      relativeTo: PositionalTabRelativeTo.MARGIN,
      leader: PositionalTabLeader.NONE,
    }),
    text,
  ],
});

const nameLine = (t) => new Paragraph({
  spacing: { after: 40 },
  children: [new TextRun({ text: t, font: SERIF, size: 44, bold: true, color: INK, characterSpacing: 24 })],
});

const contactLine = (t) => new Paragraph({
  spacing: { after: 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 8 } },
  children: [new TextRun({ text: t, font: SERIF, size: 18, color: GREY })],
});

const heading = (t) => new Paragraph({
  spacing: { before: 280, after: 120 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 4 } },
  children: [new TextRun({ text: t.toUpperCase(), font: SERIF, size: 19, bold: true, color: INK, characterSpacing: 40 })],
});

const prose = (t, after = 100) => new Paragraph({
  spacing: { after, line: 264 },
  alignment: AlignmentType.JUSTIFIED,
  children: [new TextRun({ text: t, font: SERIF, size: 20, color: INK })],
});

const roleLine = (title, org, dates) => new Paragraph({
  spacing: { before: 180, after: 20 },
  keepNext: true,
  children: [
    new TextRun({ text: title, font: SERIF, size: 21, bold: true, color: INK }),
    org ? new TextRun({ text: `, ${org}`, font: SERIF, size: 21, color: INK }) : new TextRun(""),
    dates ? rightTab(dates) : new TextRun(""),
  ],
});

const subline = (t) => new Paragraph({
  spacing: { after: 80 },
  keepNext: true,
  children: [new TextRun({ text: t, font: SERIF, size: 18, italics: true, color: GREY })],
});

const bullet = (t) => new Paragraph({
  numbering: { reference: "dash", level: 0 },
  spacing: { after: 70, line: 264 },
  children: [new TextRun({ text: t, font: SERIF, size: 20, color: INK })],
});

const grid = (rows) => {
  const L = 2750, R = CONTENT_W - L;
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  const cell = (w, children) => new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, fill: "FFFFFF" },
    margins: { top: 40, bottom: 40, left: 0, right: w === L ? 160 : 0 },
    children,
  });
  return new Table({
    columnWidths: [L, R],
    width: { size: CONTENT_W, type: WidthType.DXA },
    borders: { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none },
    rows: rows.map(([label, detail]) => new TableRow({
      children: [
        cell(L, [new Paragraph({ children: [new TextRun({ text: label, font: SERIF, size: 20, bold: true, color: INK })] })]),
        cell(R, [new Paragraph({ children: [new TextRun({ text: detail, font: SERIF, size: 20, color: INK })] })]),
      ],
    })),
  });
};

const entry = ({ bold, rest, right }) => new Paragraph({
  spacing: { after: 40 },
  children: [
    new TextRun({ text: bold, font: SERIF, size: 20, bold: true, color: INK }),
    rest ? new TextRun({ text: rest, font: SERIF, size: 20, color: INK }) : new TextRun(""),
    right ? rightTab(right) : new TextRun(""),
  ],
});

function build(spec) {
  const children = [nameLine(spec.name), contactLine(spec.contact)];

  for (const s of spec.sections) {
    if (s.heading) children.push(heading(s.heading));

    switch (s.type) {
      case "prose":
        children.push(prose(s.text, s.after));
        break;
      case "grid":
        children.push(grid(s.rows));
        break;
      case "experience":
        for (const r of s.roles) {
          children.push(roleLine(r.title, r.org, r.dates));
          if (r.subline) children.push(subline(r.subline));
          for (const b of r.bullets || []) children.push(bullet(b));
        }
        break;
      case "entries":
        for (const e of s.entries) children.push(entry(e));
        break;
      default:
        throw new Error(`Unknown section type: ${s.type}`);
    }
  }

  return new Document({
    numbering,
    styles: { default: { document: { run: { font: SERIF, size: 20, color: INK } } } },
    sections: [{
      properties: { page: { margin: { top: 900, right: MARGIN, bottom: 900, left: MARGIN } } },
      children,
    }],
  });
}

const [, , contentPath, outPath] = process.argv;
if (!contentPath || !outPath) {
  console.error("usage: render_resume.js <content.json> <out.docx>");
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(contentPath, "utf8"));
Packer.toBuffer(build(spec)).then((buf) => {
  fs.mkdirSync(path.dirname(path.resolve(outPath)), { recursive: true });
  fs.writeFileSync(outPath, buf);
  console.log(`wrote ${outPath}`);
});
