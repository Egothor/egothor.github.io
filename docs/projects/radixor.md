---
title: Radixor
description: Radixor compiles morphological evidence into compact deterministic stemming models for Java and Python, with twenty-language evaluation data and reproducible artifacts.
wide: true
page_class: project-detail project-radixor
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Language engineering · Research software · Java &amp; Python</p>
    <div class="project-title-row"><img src="/assets/images/radixor-mark.svg" alt="" width="86" height="86"><h1>Radixor</h1></div>
    <p class="page-lede">A deterministic multilingual stemmer that turns morphological lexicons into compact executable transformations. Language knowledge is prepared offline; the live search path executes an immutable compiled model rather than consulting a large text dictionary entry by entry.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://github.com/leogalambos/Radixor">Open repository ↗</a><a class="button button--quiet" href="https://leogalambos.github.io/Radixor/">Technical documentation ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>20</strong><span>languages</span><small>independently versioned default models in the evaluated standard set</small></div>
    <div><strong>6.61M</strong><span>surface forms</span><small>distinct forms in the twenty-language relation evaluation</small></div>
    <div><strong>99.9988%</strong><span>precision</span><small>pooled deterministic pairwise precision across all 20 languages</small></div>
    <div><strong>83.4%</strong><span>smaller</span><small>aggregate reduction from lexical payload to compiled v7 payload</small></div>
  </div>
</section>

## Morphology compiled into a search primitive

The original Egothor idea was to **learn transformations from lexical evidence instead of hand-writing a separate stemming program for every language**. Radixor completes that model with explicit reduction semantics, immutable runtime structures, versioned binary persistence, deterministic ambiguity handling and interoperable Java/Python runtimes.

<div class="architecture-flow architecture-flow--five" aria-label="Radixor build and runtime pipeline">
  <span><b>Morphological lexicon</b><small>attested forms and canonical forms</small></span><i>→</i>
  <span><b>Patch induction</b><small>minimum-cost executable edits</small></span><i>→</i>
  <span><b>Frequency trie</b><small>evidence and alternatives</small></span><i>→</i>
  <span><b>Reduction</b><small>semantic sharing and contraction</small></span><i>→</i>
  <span><b>Compiled model</b><small>immutable runtime lookup</small></span>
</div>

A patch is not a stored final answer. It is an instruction that transforms an input form into a canonical representation. This allows evidence learned from many lexical families to share structure and lets the compiler generalize compatible transformations beyond a flat word-to-output table.

<div class="feature-grid feature-grid--three">
  <article><h3>One engine, many languages</h3><p>The runtime is language-independent. Linguistic knowledge enters through versioned model data, so adding or improving a language is primarily a model-compilation problem rather than a new source-code algorithm.</p></article>
  <article><h3>Ambiguity is retained</h3><p>The same model can expose one preferred result or all locally supported candidates in deterministic ranked order. A downstream search system decides how much ambiguity it wants to activate.</p></article>
  <article><h3>Build-time complexity, simple runtime</h3><p>Induction, reduction and validation happen offline. Production lookup traverses the frozen model and applies a compiled patch command to the token.</p></article>
  <article><h3>Model artifacts are first-class</h3><p>Language models are independently versioned, integrity-checkable deployment artifacts rather than hidden resources baked into a single executable.</p></article>
  <article><h3>Java and native Python</h3><p>The project provides Java integration and a native Python/Rust runtime that consume the same versioned compiled-model concept.</p></article>
  <article><h3>Controlled extension</h3><p>A compiled Java model can be reopened through a builder, extended with domain-specific evidence, rebuilt, tested and deployed as a new artifact instead of being mutated live.</p></article>
</div>


<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-radixor-team.png" alt="Computational linguistics and language-engineering professionals reviewing multilingual morphological data on dual monitors.">
    <figcaption><strong>Language engineering is both scholarly and operational.</strong> Radixor works best when curated lexical knowledge and practical search engineering are treated as one pipeline rather than as separate worlds.</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>Why the project belongs on a professional systems site</span>
      <ul>
        <li><strong>Linguistic evidence</strong> is curated offline instead of improvised at query time.</li>
        <li><strong>Multilingual models</strong> remain explicit versioned artifacts.</li>
        <li><strong>Deterministic runtime behaviour</strong> keeps stemming usable inside controlled systems.</li>
        <li><strong>Research outputs</strong> are translated into deployable engineering assets.</li>
      </ul>
    </div>
  </figure>
</div>

## What was actually measured

The 2026 twenty-language study evaluates **morphological conflation as a relation**. In plain language, it asks two questions at very large scale: *do forms that belong together end up together, and do unrelated forms stay apart?* It does not require every system to spell its output like a dictionary lemma.

<div class="research-band">
  <div class="research-band__intro"><span class="section-kicker">TWENTY-LANGUAGE EVALUATION</span><h3>From millions of words to trillions of pair decisions</h3><p>The evaluation uses independently curated UniMorph-derived paradigms and counts the relation induced by deterministic stemming. This makes false joins and missed joins measurable without confusing stem spelling with stem quality.</p></div>
  <div class="research-stats">
    <div><strong>767,167</strong><span>morphological groups</span></div>
    <div><strong>6,607,708</strong><span>distinct forms</span></div>
    <div><strong>130.2M</strong><span>related form pairs</span></div>
    <div><strong>3.052T</strong><span>unrelated form pairs</span></div>
    <div><strong>314</strong><span>validated scenarios</span></div>
    <div><strong>20</strong><span>default language models</span></div>
  </div>
</div>

<div class="figure-gallery figure-gallery--two">
  <figure class="figure-card">
    <img src="/assets/images/radixor-evaluation-scale.svg" alt="Log-scale overview of morphological groups, distinct forms, related pairs and unrelated pairs in the Radixor twenty-language evaluation.">
    <figcaption><strong>The important point is scale.</strong> This is not a toy list of words. The evaluation checks millions of attested forms and then measures both positive and negative conflation decisions at very large scale.</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>Why relation-based evaluation is easier to trust</span>
      <ul>
        <li><strong>Positive pairs</strong> tell us whether genuine variants stay together.</li>
        <li><strong>Negative pairs</strong> tell us whether unrelated forms are wrongly merged.</li>
        <li><strong>Lemma spelling</strong> is not treated as the whole story.</li>
        <li><strong>Ambiguity</strong> can be studied separately for primary and all-candidate output.</li>
      </ul>
    </div>
  </figure>
</div>

### The quality result in practical terms

<div class="evidence-grid evidence-grid--light">
  <article><span class="evidence-icon evidence-icon--check">✓</span><div><strong>15 of 20 languages</strong><small>produced zero false-positive conflations in deterministic primary output.</small></div></article>
  <article><span class="evidence-icon evidence-icon--precision">◎</span><div><strong>1,538 false-positive pairs</strong><small>in the pooled result, against more than 3.052 trillion unrelated pairs.</small></div></article>
  <article><span class="evidence-icon evidence-icon--recall">↗</span><div><strong>97.5952% recall</strong><small>for pooled deterministic output across the twenty evaluated languages.</small></div></article>
  <article><span class="evidence-icon evidence-icon--candidates">≋</span><div><strong>12 of 20 become exact</strong><small>when all explicitly retained Radixor candidates are considered as a capability analysis.</small></div></article>
</div>

The candidate-aware result is especially useful for understanding the design. A single context-free stem must choose one answer even when morphology is genuinely ambiguous. Radixor keeps alternative evidence available first; an indexer, query expander or contextual layer can then choose a policy appropriate to the application.

<div class="note-panel"><strong>What these figures do—and do not—claim.</strong> They measure fidelity to the available independently curated morphological resource. The same resource is used to compile the Radixor model, so this is an end-to-end knowledge-utilization experiment, not a claim about lexical families completely absent from the resource and not, by itself, a claim of universal improvement in MAP, nDCG or another retrieval metric.</div>

## Compact models instead of live dictionary lookup

The source lexicons are valuable because they contain scholarly morphological evidence; they do not need to remain the runtime representation. Radixor distils that evidence into patch programs and a reduced trie.

<div class="compression-story" aria-label="Radixor representation size comparison">
  <div class="compression-copy"><span class="section-kicker">COMPILED REPRESENTATION</span><h3>99.92 MB of lexical evidence becomes 16.55 MB of compiled model data</h3><p>Measured on decompressed payloads, excluding outer GZip wrappers and package metadata. Across all twenty models, the compiled v7 streams use <strong>2.50 bytes per evaluated form</strong> versus 15.12 bytes in the source payload.</p></div>
  <div class="compression-bars">
    <div><label>Lexical source <b>99.92 MB</b></label><span class="bar bar--source" style="--bar:100%"></span></div>
    <div><label>Compiled v7 <b>16.55 MB</b></label><span class="bar bar--compiled" style="--bar:16.56%"></span></div>
    <p><strong>6.04×</strong> aggregate source/model ratio · <strong>83.4%</strong> byte reduction</p>
  </div>
</div>

## A visible knowledge–quality–cost envelope

One additional English experiment deliberately compiles models from progressively smaller deterministic slices of the available lexical rows, then evaluates against the complete resource. The point is not to find one “magic” dictionary size; it is to show what is traded away when knowledge is removed.

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/radixor-knowledge-envelope.svg" alt="Chart showing all-form exact agreement, changed-form exact agreement and runtime as the proportion of English dictionary rows varies from ten to one hundred percent.">
    <figcaption><strong>What the curve says at a glance.</strong> The biggest quality loss appears on forms that actually need a transformation. Runtime changes more modestly and is not perfectly monotonic because the compiled structure changes shape as the evidence changes.</figcaption>
  </figure>
  <div class="stat-note-card">
    <h3>Three anchor points</h3>
    <div class="stat-note-card__grid">
      <article><strong>100%</strong><span>97.478% all-form exact</span><small>97.197% changed-form exact · 71.6 ns/token</small></article>
      <article><strong>50%</strong><span>95.262% all-form exact</span><small>86.107% changed-form exact · 61.1 ns/token</small></article>
      <article><strong>10%</strong><span>92.868% all-form exact</span><small>76.516% changed-form exact · 47.0 ns/token</small></article>
    </div>
    <p>For non-specialist readers this is often easier to interpret than a large table: less lexical evidence buys only limited runtime benefit but steadily erodes stemming quality, especially on changed forms.</p>
  </div>
</div>

<div class="data-table-card">
<table>
  <thead><tr><th>Dictionary rows used</th><th>Exact agreement · all forms</th><th>Exact agreement · changed forms</th><th>Changed-form runtime</th></tr></thead>
  <tbody>
    <tr><td><strong>100%</strong></td><td>97.478%</td><td>97.197%</td><td>71.6 ns/token</td></tr>
    <tr><td><strong>50%</strong></td><td>95.262%</td><td>86.107%</td><td>61.1 ns/token</td></tr>
    <tr><td><strong>10%</strong></td><td>92.868%</td><td>76.516%</td><td>47.0 ns/token</td></tr>
  </tbody>
</table>
<p class="table-note">Absolute latency is machine- and workload-specific. The curve is most useful as an engineering illustration: removing lexical evidence mainly hurts forms that actually require a transformation, while runtime changes more modestly and is not strictly monotonic.</p>
</div>

<div class="note-panel"><strong>Performance presentation on this site.</strong> Radixor runtime figures are presented as documented absolute measurements and together with the workload or quality context. Older headline ratios against Porter/Snowball are intentionally not used here; benchmark design has evolved, and cross-implementation speed ratios are too easy to over-interpret when the token mix and measured path differ.</div>

## Twenty default languages

A quick visual pass through the standard set makes the language spread easier to absorb than a plain comma-separated list.

<div class="flag-language-grid" aria-label="Radixor evaluated default languages with flags or language badges where appropriate">
  <article><span class="flag-emoji">🇨🇿</span><div class="flag-copy"><strong>Czech</strong><small>cs · default model</small></div></article>
  <article><span class="flag-emoji">🇩🇰</span><div class="flag-copy"><strong>Danish</strong><small>da · default model</small></div></article>
  <article><span class="flag-emoji">🇳🇱</span><div class="flag-copy"><strong>Dutch</strong><small>nl · default model</small></div></article>
  <article><span class="flag-emoji">🇬🇧 🇺🇸</span><div class="flag-copy"><strong>English</strong><small>en · US/UK lexical basis</small></div></article>
  <article><span class="flag-emoji">🇫🇮</span><div class="flag-copy"><strong>Finnish</strong><small>fi · default model</small></div></article>
  <article><span class="flag-emoji">🇫🇷</span><div class="flag-copy"><strong>French</strong><small>fr · default model</small></div></article>
  <article><span class="flag-emoji">🇩🇪</span><div class="flag-copy"><strong>German</strong><small>de · default model</small></div></article>
  <article><span class="flag-emoji">🇮🇱</span><div class="flag-copy"><strong>Hebrew</strong><small>he · default model</small></div></article>
  <article><span class="flag-emoji">🇭🇺</span><div class="flag-copy"><strong>Hungarian</strong><small>hu · default model</small></div></article>
  <article><span class="flag-emoji">🇮🇹</span><div class="flag-copy"><strong>Italian</strong><small>it · default model</small></div></article>
  <article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>Norwegian Bokmål</strong><small>nb · default model</small></div></article>
  <article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>Norwegian Nynorsk</strong><small>nn · default model</small></div></article>
  <article><span class="flag-emoji">🇮🇷</span><div class="flag-copy"><strong>Persian</strong><small>fa · default model</small></div></article>
  <article><span class="flag-emoji">🇵🇱</span><div class="flag-copy"><strong>Polish</strong><small>pl · default model</small></div></article>
  <article><span class="flag-emoji">🇵🇹</span><div class="flag-copy"><strong>Portuguese</strong><small>pt · default model</small></div></article>
  <article><span class="flag-emoji">🇷🇺</span><div class="flag-copy"><strong>Russian</strong><small>ru · default model</small></div></article>
  <article><span class="flag-emoji">🇪🇸</span><div class="flag-copy"><strong>Spanish</strong><small>es · default model</small></div></article>
  <article><span class="flag-emoji">🇸🇪</span><div class="flag-copy"><strong>Swedish</strong><small>sv · default model</small></div></article>
  <article><span class="flag-emoji">🇺🇦</span><div class="flag-copy"><strong>Ukrainian</strong><small>uk · default model</small></div></article>
  <article><span class="flag-badge">YI</span><div class="flag-copy"><strong>Yiddish</strong><small>language badge used instead of a state flag</small></div></article>
</div>

<p class="grid-note">Flags are used where they help orientation. Where a sovereign-state flag would be misleading, a language badge is used instead.</p>

## Research lineage and reproducibility

Radixor is the contemporary completion of a research line that began in Egothor in 2001: infer compact word-to-stem edit programs from lexical examples, organize them in a trie and execute the resulting model in a search system. The modern work adds explicit semantic reduction, uniform-subtree contraction, immutable compiled representations, evidence-ranked alternatives, model provenance, Java/native interoperability and publication-grade evaluation artifacts.

The evaluation is designed to be auditable. Model identifiers and descriptor hashes are recorded with result rows; the quality snapshot contains the raw confusion counts and derived metrics; generated tables and figures can be rebuilt from the machine-readable data rather than being manually transcribed.

## Radixor Research Series

The full manuscripts are hosted here so they remain directly available alongside their DOI registrations. Each title opens the public PDF on Egothor.

1. [Does a Lexicon-Trained Stemmer Generalize? A 20-Language Study of Held-Out Lexical Families (PDF)](/research/radixor-01.pdf) · [DOI: 10.13140/RG.2.2.34383.85921](https://doi.org/10.13140/RG.2.2.34383.85921)
2. [Edit Costs as Structural Hyperparameters in Dictionary-Induced Stemming: A Multilingual Sensitivity Study (PDF)](/research/radixor-02.pdf) · [DOI: 10.13140/RG.2.2.12573.47845](https://doi.org/10.13140/RG.2.2.12573.47845)
3. [Classifying Multilingual Stemmers by Pareto Strata: Error Regimes in Pairwise Lexical Conflation (PDF)](/research/radixor-03.pdf) · [DOI: 10.13140/RG.2.2.25995.25126](https://doi.org/10.13140/RG.2.2.25995.25126)
4. [The Stemming Policy Is Data: Adapting a Lexicon-Trained Stemmer to Alternative Conflation Objectives (PDF)](/research/radixor-04.pdf) · [DOI: 10.13140/RG.2.2.23898.09926](https://doi.org/10.13140/RG.2.2.23898.09926)
5. [Runtime Efficiency of Lexicon-Trained Stemming: Compiled Structure and a Speed–Reference-Agreement Envelope in Radixor (PDF)](/research/radixor-05.pdf) · [DOI: 10.13140/RG.2.2.27332.18569](https://doi.org/10.13140/RG.2.2.27332.18569)
6. [Lexical Resource Consistency and Learned Transformation Vocabulary in Multilingual Stemming (PDF)](/research/radixor-06.pdf) · [DOI: 10.13140/RG.2.2.34043.07203](https://doi.org/10.13140/RG.2.2.34043.07203)
7. [Compiling Learned Lexical Transformations: Semantic Canonicalization and Accepting-Leaf Generalization in Patch-Command Tries (PDF)](/research/radixor-07.pdf) · [DOI: 10.13140/RG.2.2.12232.69128](https://doi.org/10.13140/RG.2.2.12232.69128)
8. [Where Retrieval Quality Goes: Rethinking Stemming in Modern Search (PDF)](/research/radixor-08.pdf) · [DOI: 10.13140/RG.2.2.22208.90887](https://doi.org/10.13140/RG.2.2.22208.90887)
9. [From Lexical Edits to Verified Stemming Policies: Two-Sided Adaptation in Radixor (PDF)](/research/radixor-09.pdf) · [DOI: 10.13140/RG.2.2.24725.49120](https://doi.org/10.13140/RG.2.2.24725.49120)

**Research synthesis.** [Learned Conflation Policies: From Lexical Transformation to Reproducible Retrieval (PDF)](/research/radixor-book.pdf) · [DOI: 10.13140/RG.2.2.24253.63209](https://doi.org/10.13140/RG.2.2.24253.63209)

## Project resources

<div class="resource-grid resource-grid--three">
  <a href="https://github.com/leogalambos/Radixor"><strong>Source repository</strong><span>Java, Python/Rust runtime, models and release workflows ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/"><strong>Technical documentation</strong><span>Fast tracks, architecture, models, ambiguity and benchmarks ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/benchmarks/data/stemming-quality.csv"><strong>Quality dataset</strong><span>Machine-readable stemming-quality snapshot ↗</span></a>
  <a href="https://www.researchgate.net/publication/406886717_Radixor_A_Quarter-Century_Renewal_of_Patch-Command_Trie_Stemming_for_Deterministic_Search_Systems"><strong>Architecture preprint</strong><span>Historical and systems context ↗</span></a>
  <a href="/heritage/"><strong>Egothor heritage</strong><span>Research and search lineage →</span></a>
  <a href="https://central.sonatype.com/artifact/org.egothor/radixor"><strong>Maven Central</strong><span>Published Java artifact ↗</span></a>
</div>
