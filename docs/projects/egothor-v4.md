---
title: EGOTHOR v4
description: EGOTHOR v4 is a new generation of Egothor search infrastructure for regulated environments, combining deterministic retrieval with authorization-aware disclosure.
wide: true
page_class: project-detail project-egothor-v4
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Regulated search · Private beta · Open-source release planned</p>
    <div class="project-title-row"><img src="/assets/images/egothor-v4-mark.svg" alt="" width="86" height="86"><h1>EGOTHOR v4</h1></div>
    <p class="page-lede">A new generation of Egothor search infrastructure for information environments where relevance is only half of the answer. Search also has to preserve visibility, clearance, classification, integrity, compartments and conflict boundaries before a result can be disclosed.</p>
    <div class="hero-actions"><span class="button button--status">Private beta</span><a class="button button--quiet" href="/heritage/">Explore the Egothor lineage</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>Resident</strong><span>search kernel</span><small>compact read path designed for predictable in-process retrieval</small></div>
    <div><strong>Top-K</strong><span>deterministic results</span><small>stable ranking and result selection are explicit kernel contracts</small></div>
    <div><strong>Policy</strong><span>disclosure-aware</span><small>retrieval occurs inside an information-governance model, not behind a simple perimeter gate</small></div>
    <div><strong>OSS</strong><span>release planned</span><small>public source follows the private-beta hardening phase</small></div>
  </div>
</section>

## Search when a match is not automatically disclosable

Traditional enterprise search often asks whether a user may enter an application and then searches whatever index is inside. Regulated information systems need a more precise question: **may this subject receive this particular result, in this context, without crossing a classification, compartment or conflict boundary?**

EGOTHOR v4 is being designed around that distinction. Identity and MFA establish who is asking; retrieval finds what matches; information policy determines what can be exposed. The disclosure boundary remains visible rather than being buried in presentation-layer filtering after an unrestricted search.

<div class="architecture-flow architecture-flow--five" aria-label="EGOTHOR v4 retrieval path">
  <span><b>Ingest</b><small>assemble searchable barrels</small></span><i>→</i>
  <span><b>Resident view</b><small>compact immutable read structures</small></span><i>→</i>
  <span><b>Query</b><small>deterministic matching</small></span><i>→</i>
  <span><b>Policy context</b><small>subject &amp; information constraints</small></span><i>→</i>
  <span><b>Disclosure</b><small>permitted top-K results</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-egothor-v4-team.png" alt="Engineering and security specialists reviewing a regulated-search workflow and disclosure-aware system dashboard.">
    <figcaption><strong>The central distinction is simple.</strong> Search can identify what matches, while regulated disclosure decides what may actually be shown to a particular subject.</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>What makes this different from ordinary enterprise search</span>
      <ul>
        <li><strong>Policy is not a later cosmetic filter.</strong></li>
        <li><strong>Resident retrieval stays deterministic</strong> so behaviour can be tested and reasoned about.</li>
        <li><strong>Disclosure is part of correctness</strong> when information classes and compartments matter.</li>
        <li><strong>Security and retrieval</strong> remain visible as distinct concerns.</li>
      </ul>
    </div>
  </figure>
</div>

## A search kernel with explicit invariants

The current engineering work separates index assembly from resident querying. That keeps the write path free to build and validate structures while the hot read path can operate over compact representations with predictable semantics.

<div class="feature-grid feature-grid--three">
  <article><h3>Resident retrieval</h3><p>Search operates over a dedicated read-oriented representation rather than mixing indexing mutations into the same hot path.</p></article>
  <article><h3>Deterministic top-K</h3><p>Ranking and tie behaviour are treated as reproducible contracts so the same searchable state and query produce a stable result order.</p></article>
  <article><h3>Live-document visibility</h3><p>Document visibility can change without requiring the searcher to pretend that deleted or superseded records are still eligible results.</p></article>
  <article><h3>Streaming ingest</h3><p>Index construction is designed around barrel assembly and controlled publication rather than requiring one monolithic in-memory build.</p></article>
  <article><h3>API boundaries</h3><p>Ingest, resident access and query contracts are kept distinct so performance work or storage evolution does not silently redefine public search semantics.</p></article>
  <article><h3>Evidence-oriented engineering</h3><p>Tests and benchmarks are treated as part of the kernel contract, including deterministic behaviour and the difference between public-API and steady-state performance.</p></article>
</div>

## Retrieval policy is not an afterthought

The search kernel and the information-control model address different questions and need different evidence. The kernel proves that matching and ranking behave correctly; the policy layer establishes whether a matching record may be disclosed to the effective subject.

<div class="regulated-stack" aria-label="EGOTHOR v4 information-control layers">
  <article><span>01</span><div><b>Identity</b><small>Sign-in, MFA and authenticated subject context.</small></div></article>
  <article><span>02</span><div><b>Information policy</b><small>Clearance, classification, integrity, compartments and conflict boundaries.</small></div></article>
  <article><span>03</span><div><b>Retrieval</b><small>Deterministic index and query execution with a controlled result contract.</small></div></article>
  <article><span>04</span><div><b>Disclosure</b><small>Only results permitted for the subject and applicable information rules are exposed.</small></div></article>
</div>

<div class="policy-grid">
  <article><strong>Clearance</strong><p>What level of information is the subject permitted to receive?</p></article>
  <article><strong>Classification</strong><p>What handling class applies to the record or collection?</p></article>
  <article><strong>Integrity</strong><p>Which integrity or trust conditions must hold before information is usable?</p></article>
  <article><strong>Compartments</strong><p>Which information domains must remain separated even inside the same search service?</p></article>
  <article><strong>Conflict boundaries</strong><p>Which combinations must not be disclosed together even if each item is independently accessible?</p></article>
  <article><strong>Operational policy</strong><p>How are identity, administration and policy changes made observable and auditable?</p></article>
</div>

## What the private beta is intended to prove

The beta is not just a UI milestone. It is the stage where search mechanics and security boundaries have to work as one operational system: authenticated access, index lifecycle, deterministic query behaviour, administration, live visibility and disclosure policy must remain understandable under change.

<div class="status-board">
  <article><span>WORKING</span><strong>Indexing &amp; search</strong><p>The core system can ingest content and execute queries.</p></article>
  <article><span>WORKING</span><strong>Sign-in &amp; MFA</strong><p>Identity assurance is part of the operating system, not a future add-on.</p></article>
  <article><span>ACTIVE ENGINEERING</span><strong>Kernel hardening</strong><p>Resident structures, search semantics, tests and performance are being refined for a clean public library boundary.</p></article>
  <article><span>ACTIVE ENGINEERING</span><strong>Regulated disclosure</strong><p>Authorization and information policy are being shaped as first-class search-system constraints.</p></article>
  <article><span>PLANNED</span><strong>Open-source release</strong><p>Source publication follows the point at which the public architecture and contracts are ready for external use.</p></article>
</div>

## The next Egothor, not a compatibility exercise

The historical Egothor engines explored Java full-text retrieval, distributed search and dynamic index maintenance. Version 4 returns to the search-engine core with a modern implementation and a different security problem: **high-quality retrieval inside systems where information boundaries are part of correctness**.

<div class="note-panel"><strong>Public scope.</strong> EGOTHOR v4 remains a private project. This page intentionally describes the architecture and capabilities at a public level; implementation details and repository links will be published with the planned open-source release rather than exposing a private development tree prematurely.</div>

## Related context

<div class="resource-grid">
  <a href="/heritage/"><strong>Egothor heritage</strong><span>From the 1998 search engine to the current research line →</span></a>
  <a href="/expertise/"><strong>Search &amp; information retrieval</strong><span>Engineering themes behind the project →</span></a>
</div>
