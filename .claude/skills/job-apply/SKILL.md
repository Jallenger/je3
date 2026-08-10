---
name: job-apply
description: Produce a tailored resume, a generalist resume, and a cover letter for a specific job advertisement, as polished executive Word documents that do not read or look machine-written. Use when the user shares a job ad (a SEEK, LinkedIn, or company careers URL, or pasted ad text) and wants to apply, or asks for a resume or cover letter targeted at a named role or employer. Also use when they ask to retarget an existing resume at a different job.
---

# Job application documents

Produces three things from a job ad: a **tailored resume**, a **generalist
resume**, and a **cover letter**. All as `.docx`, all built through the
renderer in `scripts/`, so wording and layout stay separate and either can be
changed without touching the other.

## Before anything else: get the ad

The ad is the only input that cannot be guessed. Do not start drafting without
it.

1. `WebFetch` the URL.
2. If egress is blocked (SEEK and most AU job boards are blocked in Claude Code
   on the web), say so plainly and ask the user to paste the ad text or put it
   in a Google Doc. Do not infer the ad's content from the job title and the
   employer's website — a resume tailored to a guess is worse than a generalist
   one, because it reads as confidently off-target.
3. Read the employer too, when reachable: what they sell, who their clients
   are, whether they are public sector, their size. This shapes emphasis, not
   claims.

From the ad, pull out: the actual responsibilities, the stated selection
criteria, the words the employer uses for things (mirror their vocabulary, not
your own), and whether this is a defined role or an expression of interest for
a talent pool. Those two need different documents — an EOI wants breadth and an
availability statement, a defined role wants depth against the criteria.

## Candidate history

`references/candidate-profile.md` holds the verified work history. Use it as
the source of truth. Never invent an achievement, a metric, a date, or a job
title, and never round a number in a flattering direction.

If something in the ad is important and the profile has nothing to match it,
say so to the user and ask. A gap named is a question they can answer; a gap
papered over is a document that falls apart at interview.

## Writing rules

Read `references/writing-rules.md` before drafting. It is the part of this
skill that matters most — an executive resume that reads as AI-written is worse
than a plain one, and the tells are specific and avoidable.

## Building the documents

`scripts/render_resume.js` takes a JSON content file and emits a `.docx` using
a conservative executive template (Cambria, rules under section headings, dates
pushed right on their own tab, no icons, no colour blocks, no rating dots).

```bash
node .claude/skills/job-apply/scripts/render_resume.js content.json "Out.docx"
```

Content JSON shape:

```json
{
  "name": "JANE CITIZEN",
  "contact": "City, STATE  ·  0400 000 000  ·  jane@example.com",
  "sections": [
    { "type": "prose", "heading": "Profile", "text": "..." },
    { "type": "grid", "heading": "Core strengths",
      "rows": [["Label", "Detail"], ["Label", "Detail"]] },
    { "type": "experience", "heading": "Experience",
      "roles": [{ "title": "...", "org": "...", "dates": "Jul 2023 – Aug 2026",
                  "subline": "Optional context line", "bullets": ["..."] }] },
    { "type": "entries", "heading": "Education",
      "entries": [{ "bold": "Degree", "rest": ", Institution", "right": "2016" }] }
  ]
}
```

Working content files live in `content/`. Keep one per application so a past
application can be reproduced or adjusted later.

## Rendering a PDF to check the layout

Always look at the output before sending it. Layout faults — a role heading
stranded at a page break, a two-page resume spilling three lines onto a third —
are invisible in the JSON.

LibreOffice is the normal route:

```bash
soffice --headless --convert-to pdf --outdir <dir> <file>.docx
```

In Claude Code on the web this often fails with `source file could not be
loaded`, because the image ships `libreoffice-core` without
`libreoffice-writer`, so no `.docx` filter is registered. Check with
`dpkg -l | grep libreoffice`. Either install the writer package (needs the user's
approval) or render the same content through Chromium instead, which is already
present with Playwright configured.

## Sending

Send the `.docx` files with `SendUserFile`. Include a PDF alongside when one
was produced. Say what was tailored and on what evidence, and name anything you
assumed.
