"use client";

import { useEffect, useMemo, useState } from "react";
import { roleStarts } from "../content/navigation.js";

const PROGRESS_KEY = "enterprise-ai-sdlc-progress-v1";
const WORKBOOK_KEY = "enterprise-ai-sdlc-workbook-v1";

const workbookFields = [
  ["intent", "Pilot intent", "We are considering a controlled pilot to learn whether..."],
  ["owner", "Pilot lead", "Name and role"],
  ["team", "Team and product", "One stable delivery team"],
  ["useCase", "Primary use case", "Repeatable, reviewable work"],
  ["exclusions", "Explicit exclusions", "Production access, sensitive data, release authority..."],
  ["baseline", "Baseline measures", "Flow, quality, operations and team experience"],
  ["decisionDate", "Decision date", "When evidence will be reviewed"],
  ["notes", "Current notes and decisions", "Record only what another person needs to act or decide"]
];

function workbookMarkdown(values) {
  return `# Enterprise AI SDLC Pilot Workbook\n\n${workbookFields.map(([key, label]) => `## ${label}\n\n${values[key] || "Not completed"}`).join("\n\n")}\n`;
}

export default function GuideExperience({ guide }) {
  const [activeId, setActiveId] = useState(guide.pages[0].id);
  const [completed, setCompleted] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [workbookOpen, setWorkbookOpen] = useState(false);
  const [workbook, setWorkbook] = useState({});

  useEffect(() => {
    try {
      setCompleted(JSON.parse(localStorage.getItem(PROGRESS_KEY) || "[]"));
      setWorkbook(JSON.parse(localStorage.getItem(WORKBOOK_KEY) || "{}"));
    } catch { /* ignore invalid local state */ }
  }, []);

  const active = useMemo(() => guide.pages.find(page => page.id === activeId) || guide.pages[0], [activeId, guide.pages]);
  const activeIndex = guide.pages.findIndex(page => page.id === active.id);
  const percent = Math.round((completed.length / guide.pages.length) * 100);

  function select(id) {
    setActiveId(id);
    setMenuOpen(false);
    setDetailsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleComplete() {
    const next = completed.includes(active.id) ? completed.filter(id => id !== active.id) : [...completed, active.id];
    setCompleted(next);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
  }

  function updateWorkbook(key, value) {
    const next = { ...workbook, [key]: value };
    setWorkbook(next);
    localStorage.setItem(WORKBOOK_KEY, JSON.stringify(next));
  }

  function downloadWorkbook() {
    const blob = new Blob([workbookMarkdown(workbook)], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "enterprise-ai-sdlc-pilot-workbook.md";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle guide menu">Menu</button>
        <a className="brand" href="#top"><span className="brand-mark">AI</span><span>Enterprise AI SDLC</span></a>
        <button className="workbook-button" onClick={() => setWorkbookOpen(true)}>Open pilot workbook</button>
      </header>

      <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="progress-card">
          <div><strong>Your pilot path</strong><span>{completed.length} of {guide.pages.length} steps</span></div>
          <div className="progress-track"><span style={{ width: `${percent}%` }} /></div>
        </div>
        <nav aria-label="Pilot playbook">
          {guide.phases.map(phase => (
            <section className="nav-phase" key={phase.id}>
              <p>{phase.label}</p>
              {phase.pages.map(([slug, label]) => {
                const id = `${phase.id}/${slug}`;
                return <button className={activeId === id ? "active" : ""} key={id} onClick={() => select(id)}><span className={completed.includes(id) ? "check done" : "check"}>✓</span>{label}</button>;
              })}
            </section>
          ))}
        </nav>
      </aside>

      <main id="top" className="main">
        <section className="hero">
          <p className="eyebrow">PILOT EDITION · VENDOR NEUTRAL</p>
          <h1>Adopt AI-assisted delivery without betting the enterprise.</h1>
          <p className="hero-copy">A practical path for one team to run a controlled pilot, learn from real work and make an evidence-based decision about what comes next.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => select(guide.pages[0].id)}>Start the pilot path</button>
            <button className="secondary" onClick={() => setWorkbookOpen(true)}>Set up the workbook</button>
          </div>
        </section>

        <section className="orientation" aria-labelledby="orientation-title">
          <div><p className="section-kicker">The operating model</p><h2 id="orientation-title">Four phases. One controlled decision.</h2></div>
          <div className="phase-grid">
            {guide.phases.map(phase => <button key={phase.id} onClick={() => select(`${phase.id}/${phase.pages[0][0]}`)}><strong>{phase.label}</strong><span>{phase.promise}</span></button>)}
          </div>
        </section>

        <section className="role-section">
          <p className="section-kicker">Where do I start?</p>
          <h2>Find your role, then act.</h2>
          <div className="role-grid">{roleStarts.map(([role, action]) => <article key={role}><h3>{role}</h3><p>{action}</p></article>)}</div>
        </section>

        <section className="task-section">
          <div className="task-heading">
            <div><p className="section-kicker">{active.phase} · step {activeIndex + 1} of {guide.pages.length}</p><h2>{active.title}</h2></div>
            <button className={completed.includes(active.id) ? "complete completed" : "complete"} onClick={toggleComplete}>{completed.includes(active.id) ? "Completed ✓" : "Mark complete"}</button>
          </div>

          <div className="at-a-glance">
            {active.owner && <div><span>Owner</span><strong>{active.owner}</strong></div>}
            {active.participants && <div><span>Participants</span><strong>{active.participants}</strong></div>}
            {active.time && <div><span>Time</span><strong>{active.time}</strong></div>}
            {active.leaveWith && <div><span>Outcome</span><strong>{active.leaveWith}</strong></div>}
          </div>

          <article className={`guidance ${detailsOpen ? "show-all" : ""}`} dangerouslySetInnerHTML={{ __html: active.html }} />
          <button className="details-toggle" onClick={() => setDetailsOpen(!detailsOpen)}>{detailsOpen ? "Show the concise view" : "Show all guidance and stop conditions"}</button>

          <div className="step-controls">
            <button disabled={activeIndex === 0} onClick={() => select(guide.pages[activeIndex - 1]?.id)}>Previous</button>
            <span>{percent}% of the pilot path complete</span>
            <button disabled={activeIndex === guide.pages.length - 1} onClick={() => select(guide.pages[activeIndex + 1]?.id)}>Next step</button>
          </div>
        </section>

        <section className="reference-section">
          <p className="section-kicker">Use when needed</p><h2>Workbook and deeper reference</h2>
          {guide.referencePages.map(page => <details key={page.id}><summary>{page.title}</summary><article className="guidance show-all" dangerouslySetInnerHTML={{ __html: page.html }} /></details>)}
        </section>
      </main>

      {workbookOpen && <div className="modal-backdrop" role="presentation" onMouseDown={() => setWorkbookOpen(false)}>
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="workbook-title" onMouseDown={event => event.stopPropagation()}>
          <div className="modal-head"><div><p className="section-kicker">Saved in this browser</p><h2 id="workbook-title">Pilot workbook</h2></div><button onClick={() => setWorkbookOpen(false)} aria-label="Close workbook">Close</button></div>
          <p>Capture the minimum information the pilot needs. Export it as Markdown when you are ready to commit it to your own repository or records system.</p>
          <div className="workbook-fields">{workbookFields.map(([key, label, placeholder]) => <label key={key}><span>{label}</span><textarea value={workbook[key] || ""} placeholder={placeholder} onChange={event => updateWorkbook(key, event.target.value)} /></label>)}</div>
          <div className="modal-actions"><button className="secondary" onClick={() => setWorkbook({})}>Clear view</button><button className="primary" onClick={downloadWorkbook}>Export Markdown</button></div>
        </section>
      </div>}
    </div>
  );
}
