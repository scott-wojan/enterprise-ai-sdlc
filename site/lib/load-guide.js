import fs from "node:fs";
import path from "node:path";
import { phases, references } from "../content/navigation.js";

const GUIDE_ROOT = path.join(process.cwd(), "..", "docs", "guide");

function inline(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const out = [];
  let list = null;
  const closeList = () => {
    if (list) out.push(`</${list}>`);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { closeList(); continue; }
    if (/^# /.test(line)) continue;
    if (/^### /.test(line)) { closeList(); out.push(`<h3>${inline(line.slice(4))}</h3>`); continue; }
    if (/^## /.test(line)) { closeList(); out.push(`<h2>${inline(line.slice(3))}</h2>`); continue; }
    if (/^> /.test(line)) { closeList(); out.push(`<blockquote>${inline(line.slice(2))}</blockquote>`); continue; }
    const ordered = line.match(/^\d+\.\s+(.+)/);
    const bullet = line.match(/^[-*]\s+(.+)/);
    if (ordered || bullet) {
      const wanted = ordered ? "ol" : "ul";
      if (list !== wanted) { closeList(); out.push(`<${wanted}>`); list = wanted; }
      out.push(`<li>${inline((ordered || bullet)[1])}</li>`);
      continue;
    }
    closeList();
    out.push(`<p>${inline(line).replace(/  $/, "<br>")}</p>`);
  }
  closeList();
  return out.join("\n");
}

function loadPage(phase, slug, label) {
  const markdown = fs.readFileSync(path.join(GUIDE_ROOT, phase, `${slug}.md`), "utf8");
  const title = markdown.match(/^#\s+(.+)$/m)?.[1] || label;
  const owner = markdown.match(/\*\*Owner:\*\*\s*(.+)/)?.[1]?.trim();
  const participants = markdown.match(/\*\*Participants:\*\*\s*(.+)/)?.[1]?.trim();
  const time = markdown.match(/\*\*Time:\*\*\s*(.+)/)?.[1]?.trim();
  const leaveWith = markdown.match(/\*\*Leave with:\*\*\s*(.+)/)?.[1]?.trim();
  const body = markdown
    .replace(/^\*\*(Owner|Participants|Time|Bring|Leave with):\*\*.*$/gm, "")
    .replace(/^\*\*(Previous|Next):\*\*.*$/gm, "")
    .replace(/^For the governing.*$/gm, "");
  return { id: `${phase}/${slug}`, phase, slug, label, title, owner, participants, time, leaveWith, html: markdownToHtml(body) };
}

export function loadGuide() {
  const pages = phases.flatMap(phase => phase.pages.map(([slug, label]) => loadPage(phase.id, slug, label)));
  const referencePages = references.map(([slug, label]) => loadPage("reference", slug, label));
  return { phases, pages, referencePages };
}
