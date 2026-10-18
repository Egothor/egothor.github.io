---
title: MethodAtlas
description: MethodAtlas turns existing test source into deterministic inventories, optional AI-assisted security classification and reproducible audit evidence across eight languages.
wide: true
page_class: project-detail project-methodatlas
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Software assurance · Open source</p>
    <div class="project-title-row"><img src="/assets/images/methodatlas-mark.svg" alt="" width="86" height="86"><h1>MethodAtlas</h1></div>
    <p class="page-lede">A source-level map of what a test suite actually contains, enriched—when useful—with security classification, control mapping and review evidence. The deterministic inventory remains separate from AI interpretation so the result can be inspected and reproduced.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://accenture.github.io/MethodAtlas/">Read documentation ↗</a><a class="button button--quiet" href="https://github.com/Accenture/MethodAtlas">GitHub repository ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>8</strong><span>languages</span><small>test discovery across mainstream, scripting and enterprise languages</small></div>
    <div><strong>SARIF 2.1</strong><span>CI output</span><small>first-class integration with security and developer tooling</small></div>
    <div><strong>170+</strong><span>credential patterns</span><small>deterministic secret-candidate catalog before optional AI triage</small></div>
    <div><strong>Signed</strong><span>evidence packs</span><small>tamper-evident review bundles with classical, PQC or hybrid signatures</small></div>
  </div>
</section>

## From source code to defensible evidence

A successful test run answers whether tests passed. Assurance work asks a different set of questions: **Which tests exist? Which ones exercise security properties? Which controls do they support? What changed since the last review? Can the evidence be reproduced?** MethodAtlas is built around that gap.

<div class="architecture-flow architecture-flow--five" aria-label="MethodAtlas evidence workflow">
  <span><b>Source tree</b><small>existing test code</small></span><i>→</i>
  <span><b>Discovery</b><small>deterministic parsers</small></span><i>→</i>
  <span><b>Enrichment</b><small>optional AI &amp; taxonomy</small></span><i>→</i>
  <span><b>Review</b><small>overrides &amp; drift checks</small></span><i>→</i>
  <span><b>Evidence</b><small>SARIF · coverage · signed packs</small></span>
</div>

The architecture deliberately makes **method discovery a structural source-analysis problem, not an AI problem**. AI can classify security relevance, suggest tags or help triage findings, but it is an explicit enrichment stage layered over a deterministic inventory.

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-methodatlas-team.png" alt="Software-assurance professionals reviewing test inventories, workflow stages and evidence dashboards in a modern office.">
    <figcaption><strong>Designed for review, not just automation.</strong> MethodAtlas is most useful when a team needs to explain how the output was produced and where human judgement entered the process.</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>Why this workflow is practical in regulated delivery</span>
      <ul>
        <li><strong>Existing tests stay valuable</strong> because the tool inventories what already exists.</li>
        <li><strong>AI remains optional</strong> rather than being the only way to get results.</li>
        <li><strong>Review is explicit</strong> before tags or evidence are treated as authoritative.</li>
        <li><strong>Output fits delivery pipelines</strong> through SARIF, CSV, coverage matrices and signed packs.</li>
      </ul>
    </div>
  </figure>
</div>

## Eight languages, one evidence model

<div class="language-matrix">
  <article><strong>Java</strong><span>JUnit 5 · JUnit 4 · TestNG</span><small>AST discovery · source write-back</small></article>
  <article><strong>C#</strong><span>xUnit · NUnit · MSTest</span><small>grammar-based discovery · source write-back</small></article>
  <article><strong>TypeScript / JavaScript</strong><span>Jest · Vitest · Mocha</span><small>plugin discovery</small></article>
  <article><strong>Go</strong><span>testing package</span><small>plugin discovery</small></article>
  <article><strong>Python</strong><span>pytest</span><small>plugin discovery</small></article>
  <article><strong>PowerShell</strong><span>Pester</span><small>plugin discovery</small></article>
  <article><strong>SAP ABAP</strong><span>ABAP Unit · ecATT</span><small>enterprise test inventory</small></article>
  <article><strong>COBOL</strong><span>MFUnit · COBOL-Check</span><small>enterprise test inventory</small></article>
</div>

The language plugins produce a common method-level record. That common shape lets the assurance workflow stay consistent even when a portfolio spans modern services, scripts and long-lived enterprise platforms.

## Evidence capabilities, not just classification

<div class="feature-grid feature-grid--three">
  <article><h3>Security taxonomy</h3><p>AI-assisted classification can map tests to a closed versioned security taxonomy or a custom taxonomy aligned with the organisation's own control framework.</p></article>
  <article><h3>Confidence and review queues</h3><p>Per-method confidence scores support thresholds and human-review queues instead of forcing a binary “AI says yes/no” operating model.</p></article>
  <article><h3>Content fingerprints</h3><p>SHA-256 source fingerprints let teams identify unchanged classes, reuse prior AI results and demonstrate whether evidence came from the same test content.</p></article>
  <article><h3>Delta reports</h3><p>Two inventories can be compared to show methods added, removed or modified—useful for release evidence and CI regression gates.</p></article>
  <article><h3>Control coverage</h3><p>Tags can be mapped to user-supplied control identifiers so the output highlights coverage gaps rather than treating raw test counts as assurance.</p></article>
  <article><h3>Reproducibility receipts</h3><p>Inputs that influenced a scan—including effective LLM prompt templates—can be fingerprinted so a future reviewer can reconstruct what produced the result.</p></article>
</div>

## AI is optional—and bounded

MethodAtlas supports local Ollama inference, cloud providers and a two-phase manual workflow for environments where source code cannot be sent to an external API. Human-reviewed overrides are persistent, and the source-writing workflow is deliberately separate from classification so changes can be reviewed before they reach code.

<div class="evidence-path">
  <article><span>01</span><div><strong>Deterministic baseline</strong><p>Discover test methods, framework metadata, locations and source identity without an LLM.</p></div></article>
  <article><span>02</span><div><strong>Optional interpretation</strong><p>Add security relevance, taxonomy tags, rationale and confidence using local, cloud or manual AI.</p></div></article>
  <article><span>03</span><div><strong>Human authority</strong><p>Review, override and persist decisions; detect drift between source annotations and later classification.</p></div></article>
  <article><span>04</span><div><strong>Auditable output</strong><p>Emit CI-friendly records, control coverage, receipts or tamper-evident evidence packages.</p></div></article>
</div>

## Credential detection as a separate deterministic signal

The same assurance pipeline can look for credential candidates in source. Candidate discovery uses a curated deterministic rule catalog with more than 170 vendor credential formats; values are masked by default. AI, when enabled, is used downstream to estimate credibility and relate a candidate to the endpoint it appears to authenticate against—not to invent the underlying match.

<div class="note-panel"><strong>Why the separation matters.</strong> In a regulated review, “the model found it” is weak provenance. MethodAtlas keeps deterministic discovery, optional probabilistic interpretation and human decisions as distinguishable stages so each can be challenged independently.</div>

## Interactive review for people who do not want a CLI-only workflow

The desktop GUI provides a reviewer-oriented workflow around the same model: source browsing, syntax highlighting, class/method result trees, tag decisions, staged changes and batch write-back. Review actions create evidence CSV records and persistent override data so a GUI decision is not merely transient state on one workstation.

<div class="feature-grid">
  <article><h3>Staged source changes</h3><p>Suggested annotations can be reviewed and staged in memory before a deliberate “Save All Changes” operation writes them back.</p></article>
  <article><h3>Audit trail</h3><p>Review decisions are recorded as timestamped evidence and reusable overrides, preserving the distinction between machine suggestion and human decision.</p></article>
  <article><h3>AI profiles</h3><p>Named provider profiles let an operator switch between local and remote inference without embedding that choice into the discovery engine.</p></article>
  <article><h3>Plugin selection</h3><p>Discovery plugins can be enabled per run so a reviewer can narrow a heterogeneous repository to the languages relevant to the task.</p></article>
</div>

## Evidence packs and ZeroEcho

Evidence packs bundle the scan output into a tamper-evident directory with a SHA-256 manifest. When signing is requested, MethodAtlas can use **ZeroEcho** to produce classical, post-quantum or hybrid signatures. This is a practical connection between two Egothor engineering themes: discover assurance evidence, then protect the integrity of the evidence package itself.

## Project lineage

MethodAtlas began with an open-source foundation developed by **Egothor**. **Accenture later extended that foundation** with additional capabilities, and the expanded public project is currently published in Accenture's GitHub organisation. This describes project lineage; it is not presented here as an institutional partnership or endorsement. The public project is licensed under the **Apache License, Version 2.0**.

## Project resources

<div class="resource-grid resource-grid--three">
  <a href="https://accenture.github.io/MethodAtlas/"><strong>Documentation</strong><span>Concepts, workflows and CLI reference ↗</span></a>
  <a href="https://github.com/Accenture/MethodAtlas"><strong>Source repository</strong><span>Public source, issues and releases ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/cli-reference/"><strong>CLI reference</strong><span>Command-line options and output modes ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/concepts/"><strong>Concepts</strong><span>Evidence and security-analysis model ↗</span></a>
  <a href="/projects/zeroecho/"><strong>ZeroEcho</strong><span>Cryptographic evidence-pack signing →</span></a>
  <a href="/expertise/"><strong>Software assurance</strong><span>Egothor engineering context →</span></a>
</div>
