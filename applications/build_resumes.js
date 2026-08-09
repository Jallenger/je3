const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, BorderStyle, AlignmentType, LevelFormat, ShadingType,
  PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader,
} = require("docx");

const INK = "1B2A3A";
const GREY = "55606B";
const RULE = "B3BAC2";
const SERIF = "Cambria";

const PAGE_W = 11906;          // A4 width in DXA
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

const name = (t) => new Paragraph({
  spacing: { after: 40 },
  children: [new TextRun({ text: t, font: SERIF, size: 44, bold: true, color: INK, characterSpacing: 24 })],
});

const contact = (t) => new Paragraph({
  spacing: { after: 200 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 8 } },
  children: [new TextRun({ text: t, font: SERIF, size: 18, color: GREY })],
});

const section = (t) => new Paragraph({
  spacing: { before: 280, after: 120 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 4 } },
  children: [new TextRun({ text: t.toUpperCase(), font: SERIF, size: 19, bold: true, color: INK, characterSpacing: 40 })],
});

const body = (t, opts = {}) => new Paragraph({
  spacing: { after: opts.after === undefined ? 100 : opts.after, line: 264 },
  alignment: AlignmentType.JUSTIFIED,
  children: [new TextRun({ text: t, font: SERIF, size: 20, color: INK })],
});

// Role heading with the date range pushed hard right.
const role = (title, org, dates) => new Paragraph({
  spacing: { before: 180, after: 20 },
  children: [
    new TextRun({ text: title, font: SERIF, size: 21, bold: true, color: INK }),
    new TextRun({ text: `, ${org}`, font: SERIF, size: 21, color: INK }),
    new TextRun({
      font: SERIF, size: 19, color: GREY,
      children: [
        new PositionalTab({
          alignment: PositionalTabAlignment.RIGHT,
          relativeTo: PositionalTabRelativeTo.MARGIN,
          leader: PositionalTabLeader.NONE,
        }),
        dates,
      ],
    }),
  ],
});

const subline = (t) => new Paragraph({
  spacing: { after: 80 },
  children: [new TextRun({ text: t, font: SERIF, size: 18, italics: true, color: GREY })],
});

const bullet = (t) => new Paragraph({
  numbering: { reference: "dash", level: 0 },
  spacing: { after: 70, line: 264 },
  children: [new TextRun({ text: t, font: SERIF, size: 20, color: INK })],
});

// Two-column label / detail grid, no visible borders.
const grid = (rows) => {
  const L = 2750, R = CONTENT_W - L;
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return new Table({
    columnWidths: [L, R],
    width: { size: CONTENT_W, type: WidthType.DXA },
    borders: { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none },
    rows: rows.map(([label, detail]) => new TableRow({
      children: [
        new TableCell({
          width: { size: L, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill: "FFFFFF" },
          margins: { top: 40, bottom: 40, left: 0, right: 160 },
          children: [new Paragraph({ children: [new TextRun({ text: label, font: SERIF, size: 20, bold: true, color: INK })] })],
        }),
        new TableCell({
          width: { size: R, type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill: "FFFFFF" },
          margins: { top: 40, bottom: 40, left: 0, right: 0 },
          children: [new Paragraph({ children: [new TextRun({ text: detail, font: SERIF, size: 20, color: INK })] })],
        }),
      ],
    })),
  });
};

const HEADER = [
  name("JONAH WILLIAMS"),
  contact("Canberra, ACT  ·  0435 018 197  ·  jonahwilliams13@gmail.com  ·  linkedin.com/in/jonah-williams"),
];

const ESRI = [
  role("Senior Business Development Manager", "Esri Australia", "Jul 2019 – Mar 2021"),
  subline("Canberra, ACT  ·  Enterprise GIS software and consulting"),
  bullet("Ran the major account portfolio across 13 federal government departments, advising at executive level on enterprise technology adoption and implementation."),
  bullet("Designed enterprise solutions that combined software integration, advisory consulting and capability training rather than licence sales alone."),
  bullet("Used executive roadmapping and sustained stakeholder engagement to support platform adoption, account expansion and multi-year retention."),
];

const AIRBUS = [
  role("Regional Sales Manager, Northern and Eastern Australia", "Airbus Defence and Space", "Dec 2017 – Jun 2019"),
  subline("Canberra, ACT  ·  Satellite imagery and geospatial intelligence"),
  bullet("Owned the commercial territory for satellite imagery across Northern and Eastern Australia, selling into a broad spread of commercial sectors."),
  role("Customer Service and Account Manager", "Airbus Defence and Space", "Nov 2016 – Dec 2017"),
  bullet("Managed high value key accounts, covering delivery operations, client satisfaction and contract fulfilment for specialised data products."),
];

const EDUCATION = [
  section("Education"),
  new Paragraph({
    spacing: { after: 40 },
    children: [
      new TextRun({ text: "Bachelor of Interdisciplinary Studies (Sustainability)", font: SERIF, size: 20, bold: true, color: INK }),
      new TextRun({ text: ", Australian National University", font: SERIF, size: 20, color: INK }),
      new TextRun({
        font: SERIF, size: 19, color: GREY,
        children: [new PositionalTab({ alignment: PositionalTabAlignment.RIGHT, relativeTo: PositionalTabRelativeTo.MARGIN, leader: PositionalTabLeader.NONE }), "2016"],
      }),
    ],
  }),
  new Paragraph({
    children: [
      new TextRun({ text: "Diploma of Spatial Information Services", font: SERIF, size: 20, bold: true, color: INK }),
      new TextRun({ text: ", Canberra Institute of Technology", font: SERIF, size: 20, color: INK }),
      new TextRun({
        font: SERIF, size: 19, color: GREY,
        children: [new PositionalTab({ alignment: PositionalTabAlignment.RIGHT, relativeTo: PositionalTabRelativeTo.MARGIN, leader: PositionalTabLeader.NONE }), "2016"],
      }),
    ],
  }),
];

const docShell = (children) => new Document({
  numbering,
  styles: { default: { document: { run: { font: SERIF, size: 20, color: INK } } } },
  sections: [{
    properties: { page: { margin: { top: 900, right: MARGIN, bottom: 900, left: MARGIN } } },
    children,
  }],
});

/* ------------------------------------------------------------------ */
/* 1. Tailored: Marketsoft executive specialist network                */
/* ------------------------------------------------------------------ */

const tailored = docShell([
  ...HEADER,

  section("Profile"),
  body("Operations executive with close to ten years in enterprise technology, most recently as Chief Operations Officer of a Canberra consulting firm that grew from roughly $1M to more than $10M in revenue and from five staff to thirty. My work sits where commercial ownership meets data. I have built an enterprise Power BI reporting layer from the data model up, written the governance and risk frameworks that held delivery together through fast growth, and carried senior client relationships across federal government and the private sector. I am looking for senior advisory and specialist consulting engagements where a client needs someone who can read the business and the data at the same time.", { after: 60 }),

  section("Where I add value on client engagements"),
  grid([
    ["Data and analytics", "Power BI architecture, data modelling, DAX, API integration, executive and board reporting packs"],
    ["Governance", "Operational standards, compliance frameworks, risk protocols, delivery assurance"],
    ["Digital and process", "Workflow design and automation, SharePoint based tracking, systems that replace manual reporting"],
    ["Client leadership", "Federal and enterprise stakeholder management, executive roadmapping, account retention"],
    ["Commercial", "Go to market strategy, brand and positioning, capacity and resource planning"],
  ]),

  section("Experience"),

  role("Chief Operations Officer", "Onneer", "Jul 2023 – Aug 2026"),
  subline("Canberra, ACT  ·  Specialised GIS and ArcGIS consulting"),
  bullet("Held full operational accountability for the firm after two years running its sales and marketing function. Revenue grew from about $1M to more than $10M across the two roles, with headcount going from around five to thirty."),
  bullet("Built the enterprise reporting layer myself, from the relationship model and solution architecture through the API integrations to every measure and visual. It reported down to individual staff level and became the basis for board decisions, resourcing calls and annual financial planning."),
  bullet("Extended that architecture into capacity planning, delivery efficiency, project completion and margin dashboards, then into reporting packs written for specific clients and projects."),
  bullet("Set the operational standards, compliance frameworks and risk protocols the business ran on, and built SharePoint workflow tracking so delivery followed one consistent process instead of thirty personal ones."),
  bullet("Positioned the brand in a way that held the firm's largest client relationship at a point where the client could reasonably have moved to a larger supplier."),
  bullet("Co-led recruitment and workforce planning through the whole growth cycle. Fewer than five people resigned voluntarily across that period."),

  role("Business Manager", "Onneer", "Apr 2021 – Jul 2023"),
  bullet("Owned sales and marketing, building the go to market approach and market presence that moved a five person firm into contention as an enterprise supplier."),
  bullet("Started the reporting function that later became the company's business intelligence layer."),

  ...ESRI,
  ...AIRBUS,

  ...EDUCATION,

  section("Availability"),
  body("Available now for senior advisory, interim and project based engagements. Based in Canberra and comfortable working with Sydney and interstate clients, on site or remote.", { after: 0 }),
]);

/* ------------------------------------------------------------------ */
/* 2. Generalist                                                       */
/* ------------------------------------------------------------------ */

const generalist = docShell([
  ...HEADER,

  section("Profile"),
  body("Operations executive with close to ten years in enterprise technology, having moved from regional sales through federal account management into business operations and then the Chief Operations Officer seat. Most recently led a specialised consulting firm through growth from roughly $1M to more than $10M in revenue and from five staff to thirty. I am strongest where commercial ownership and operational systems meet: building the reporting an organisation actually runs its decisions on, and holding the market position that wins and keeps the accounts that matter.", { after: 60 }),

  section("Core strengths"),
  grid([
    ["Operational leadership", "Business operations, governance and risk frameworks, compliance, delivery standards"],
    ["Commercial ownership", "Sales and marketing leadership, go to market strategy, brand positioning, key account retention"],
    ["Business intelligence", "Power BI architecture, data modelling, DAX, API integration, board and executive reporting"],
    ["People and planning", "Recruitment, workforce and capacity planning, retention, mentoring technical teams"],
    ["Sector experience", "Federal government, defence and intelligence adjacent, enterprise technology, geospatial"],
  ]),

  section("Experience"),

  role("Chief Operations Officer", "Onneer", "Jul 2023 – Aug 2026"),
  subline("Canberra, ACT  ·  Specialised GIS and ArcGIS consulting"),
  bullet("Ran operations for the firm after two years leading its sales and marketing. Revenue grew from about $1M to more than $10M across the two roles, and headcount from around five to thirty."),
  bullet("Designed and built the company's enterprise Power BI reporting: relationship model, solution architecture, API integrations, and every measure and visual. Metrics ran down to individual staff level and fed board decisions, resourcing and annual financial planning."),
  bullet("Reused that architecture for capacity planning, delivery efficiency, project completion and profit margin dashboards, as well as client and project specific reporting."),
  bullet("Wrote and enforced the operational standards, compliance frameworks and risk protocols, and built SharePoint based workflow tracking to standardise internal delivery."),
  bullet("Built the brand and market position, which was central to retaining the firm's largest client through a period of rapid scaling."),
  bullet("Co-led recruitment and workforce planning during that growth. Fewer than five voluntary resignations across the entire cycle."),

  role("Business Manager", "Onneer", "Apr 2021 – Jul 2023"),
  bullet("Owned sales and marketing for the business, building the brand presence and go to market strategy behind its shift from a five person firm to a credible enterprise supplier."),
  bullet("Laid the groundwork for the reporting function later built out in the Chief Operations Officer role."),

  ...ESRI,
  ...AIRBUS,

  ...EDUCATION,
]);

/* ------------------------------------------------------------------ */

const out = "/home/user/je3/applications";
Packer.toBuffer(tailored).then((b) => fs.writeFileSync(`${out}/Jonah Williams - Resume - Marketsoft Senior Consulting.docx`, b));
Packer.toBuffer(generalist).then((b) => fs.writeFileSync(`${out}/Jonah Williams - Resume - General.docx`, b));
