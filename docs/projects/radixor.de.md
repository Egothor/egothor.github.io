---
title: Radixor
lang: de
description: Radixor kompiliert morphologische Evidenz in kompakte deterministische Stemming-Modelle für Java und Python, mit Evaluierung über zwanzig Sprachen und reproduzierbaren Artefakten.
wide: true
page_class: project-detail project-radixor
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Language Engineering · Forschungssoftware · Java &amp; Python</p>
    <div class="project-title-row"><img src="/assets/images/radixor-mark.svg" alt="" width="86" height="86"><h1>Radixor</h1></div>
    <p class="page-lede">Ein deterministischer mehrsprachiger Stemmer, der morphologische Lexika in kompakte ausführbare Transformationen überführt. Sprachwissen wird offline vorbereitet; der kritische Suchpfad führt ein immutables kompiliertes Modell aus, statt ein großes Textwörterbuch Eintrag für Eintrag abzufragen.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://github.com/leogalambos/Radixor">Repository öffnen ↗</a><a class="button button--quiet" href="https://leogalambos.github.io/Radixor/">Technische Dokumentation ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>20</strong><span>Sprachen</span><small>unabhängig versionierte Default-Modelle im evaluierten Standardset</small></div>
    <div><strong>6,61 Mio.</strong><span>Oberflächenformen</span><small>unterschiedliche Formen in der Relationsevaluierung über zwanzig Sprachen</small></div>
    <div><strong>99,9988 %</strong><span>Präzision</span><small>gepoolte deterministische Pairwise-Präzision über alle zwanzig Sprachen</small></div>
    <div><strong>83,4 %</strong><span>kleiner</span><small>aggregierte Reduktion vom lexikalischen Payload zum kompilierten v7-Payload</small></div>
  </div>
</section>

## Morphologie in eine Suchprimitive kompilieren

Die ursprüngliche Egothor-Idee bestand darin, **Transformationen aus lexikalischer Evidenz zu lernen, statt für jede Sprache ein separates Stemming-Programm von Hand zu schreiben**. Radixor vervollständigt dieses Modell mit expliziter Reduktionssemantik, immutable Runtime-Strukturen, versionierter binärer Persistenz, deterministischer Ambiguitätsbehandlung und interoperablen Java/Python-Runtimes.

<div class="architecture-flow architecture-flow--five" aria-label="Radixor Build- und Runtime-Pipeline">
  <span><b>Morphologisches Lexikon</b><small>belegte Formen und kanonische Formen</small></span><i>→</i>
  <span><b>Patch-Induktion</b><small>ausführbare Edits mit minimalen Kosten</small></span><i>→</i>
  <span><b>Frequency Trie</b><small>Evidenz und Alternativen</small></span><i>→</i>
  <span><b>Reduktion</b><small>semantisches Teilen und Kontraktion</small></span><i>→</i>
  <span><b>Kompiliertes Modell</b><small>immutabler Runtime-Lookup</small></span>
</div>

Ein Patch ist keine gespeicherte Endantwort. Es ist eine Anweisung, die eine Eingabeform in eine kanonische Repräsentation transformiert. Dadurch kann Evidenz aus vielen lexikalischen Familien Struktur teilen, und der Compiler kann kompatible Transformationen über eine flache Wort-zu-Ausgabe-Tabelle hinaus verallgemeinern.

<div class="feature-grid feature-grid--three">
  <article><h3>Ein Engine, viele Sprachen</h3><p>Die Runtime ist sprachunabhängig. Linguistisches Wissen kommt als versionierte Modelldaten hinein; eine Sprache hinzuzufügen oder zu verbessern ist primär ein Problem der Modellkompilierung statt eines neuen Source-Algorithmus.</p></article>
  <article><h3>Ambiguität bleibt erhalten</h3><p>Dasselbe Modell kann ein bevorzugtes Ergebnis oder alle lokal gestützten Kandidaten in deterministisch gerankter Reihenfolge liefern. Das nachgelagerte Suchsystem entscheidet, wie viel Ambiguität aktiviert wird.</p></article>
  <article><h3>Komplexität beim Build, einfacher Runtime-Pfad</h3><p>Induktion, Reduktion und Validierung finden offline statt. Production Lookup traversiert das eingefrorene Modell und wendet ein kompiliertes Patch Command auf das Token an.</p></article>
  <article><h3>Model-Artefakte als First-Class Objects</h3><p>Sprachmodelle sind unabhängig versionierte, integritätsprüfbare Deployment-Artefakte und keine versteckten Ressourcen in einem einzelnen Executable.</p></article>
  <article><h3>Java und natives Python</h3><p>Das Projekt bietet Java-Integration und eine native Python/Rust-Runtime, die dasselbe Konzept versionierter kompilierter Modelle verwenden.</p></article>
  <article><h3>Kontrollierte Erweiterung</h3><p>Ein kompiliertes Java-Modell kann über einen Builder wieder geöffnet, um domänenspezifische Evidenz erweitert, neu gebaut, getestet und als neues Artefakt deployt werden, statt live mutiert zu werden.</p></article>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/assets/images/project-radixor-team.png" alt="Fachleute für Computerlinguistik und Language Engineering prüfen mehrsprachige morphologische Daten auf zwei Monitoren."><figcaption><strong>Language Engineering ist wissenschaftlich und betrieblich zugleich.</strong> Radixor ist besonders sinnvoll, wenn kuratiertes lexikalisches Wissen und praktische Suchsystem-Entwicklung als eine Pipeline behandelt werden.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Warum das Projekt auf eine professionelle Systemseite gehört</span><ul>
    <li><strong>Linguistische Evidenz</strong> wird offline kuratiert, statt zur Query-Zeit improvisiert zu werden.</li>
    <li><strong>Mehrsprachige Modelle</strong> bleiben explizite versionierte Artefakte.</li>
    <li><strong>Deterministisches Runtime-Verhalten</strong> macht Stemming in kontrollierten Systemen einsetzbar.</li>
    <li><strong>Forschungsergebnisse</strong> werden in deploybare Engineering-Artefakte überführt.</li>
  </ul></div></figure>
</div>

## Was tatsächlich gemessen wurde

Die Studie von 2026 über zwanzig Sprachen bewertet **morphologische Conflation als Relation**. Einfach gesagt stellt sie in großem Maßstab zwei Fragen: *landen Formen, die zusammengehören, auch zusammen, und bleiben nicht verwandte Formen getrennt?* Sie verlangt nicht, dass jedes System seine Ausgabe wie ein Wörterbuchlemma schreibt.

<div class="research-band">
  <div class="research-band__intro"><span class="section-kicker">EVALUIERUNG ÜBER ZWANZIG SPRACHEN</span><h3>Von Millionen Wörtern zu Billionen Paarentscheidungen</h3><p>Die Evaluierung nutzt unabhängig kuratierte, aus UniMorph abgeleitete Paradigmen und zählt die durch deterministisches Stemming induzierte Relation. Falsche und verpasste Zusammenführungen werden messbar, ohne die Schreibweise des Stems mit dessen Qualität zu verwechseln.</p></div>
  <div class="research-stats">
    <div><strong>767.167</strong><span>morphologische Gruppen</span></div>
    <div><strong>6.607.708</strong><span>unterschiedliche Formen</span></div>
    <div><strong>130,2 Mio.</strong><span>verwandte Formpaare</span></div>
    <div><strong>3,052 Bio.</strong><span>nicht verwandte Formpaare</span></div>
    <div><strong>314</strong><span>validierte Szenarien</span></div>
    <div><strong>20</strong><span>Default-Sprachmodelle</span></div>
  </div>
</div>

<div class="figure-gallery figure-gallery--two">
  <figure class="figure-card"><img src="/de/assets/images/radixor-evaluation-scale.svg" alt="Logarithmische Übersicht über morphologische Gruppen, verschiedene Formen, verwandte und nicht verwandte Paare in der Radixor-Evaluierung."><figcaption><strong>Entscheidend ist die Größenordnung.</strong> Das ist keine kleine Demonstrationsliste. Die Evaluierung prüft Millionen belegter Formen und misst anschließend positive und negative Conflation-Entscheidungen in sehr großem Maßstab.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Warum relationale Bewertung leichter zu interpretieren ist</span><ul>
    <li><strong>Positive Paare</strong> zeigen, ob echte Varianten zusammenbleiben.</li>
    <li><strong>Negative Paare</strong> zeigen, ob nicht verwandte Formen fälschlich zusammengeführt werden.</li>
    <li><strong>Lemma-Schreibweise</strong> wird nicht als vollständige Qualitätsdefinition behandelt.</li>
    <li><strong>Ambiguität</strong> kann getrennt für Primary Output und All Candidates untersucht werden.</li>
  </ul></div></figure>
</div>

### Das Qualitätsergebnis in praktischen Begriffen

<div class="evidence-grid evidence-grid--light">
  <article><span class="evidence-icon evidence-icon--check">✓</span><div><strong>15 von 20 Sprachen</strong><small>erzeugen im deterministischen Primary Output keine False-Positive-Conflations.</small></div></article>
  <article><span class="evidence-icon evidence-icon--precision">◎</span><div><strong>1.538 False-Positive-Paare</strong><small>im gepoolten Ergebnis gegenüber mehr als 3,052 Billionen nicht verwandten Paaren.</small></div></article>
  <article><span class="evidence-icon evidence-icon--recall">↗</span><div><strong>97,5952 % Recall</strong><small>für den gepoolten deterministischen Output über zwanzig Sprachen.</small></div></article>
  <article><span class="evidence-icon evidence-icon--candidates">≋</span><div><strong>12 von 20 werden exakt</strong><small>wenn alle explizit erhaltenen Radixor-Kandidaten als Capability-Analyse betrachtet werden.</small></div></article>
</div>

Das Candidate-aware-Ergebnis ist besonders hilfreich, um das Design zu verstehen. Ein kontextfreier Stem muss eine Antwort wählen, selbst wenn Morphologie tatsächlich mehrdeutig ist. Radixor bewahrt alternative Evidenz zunächst auf; ein Indexer, Query Expander oder eine kontextuelle Schicht kann danach eine zur Anwendung passende Policy wählen.

<div class="note-panel"><strong>Was diese Zahlen aussagen — und was nicht.</strong> Sie messen die Übereinstimmung mit der verfügbaren, unabhängig kuratierten morphologischen Ressource. Dieselbe Ressource dient zur Kompilierung des Radixor-Modells; die Studie bewertet damit end-to-end, wie Wissen genutzt wird. Sie ist keine Behauptung über vollständig fehlende lexikalische Familien und für sich allein kein Nachweis universeller Verbesserungen bei MAP, nDCG oder anderen Retrieval-Metriken.</div>

## Kompakte Modelle statt Live-Dictionary-Lookup

Die Source-Lexika sind wertvoll, weil sie wissenschaftliche morphologische Evidenz enthalten; sie müssen jedoch nicht die Runtime-Repräsentation bleiben. Radixor destilliert dieses Wissen in Patch-Programme und einen reduzierten Trie.

<div class="compression-story" aria-label="Radixor-Repräsentationsgrößen">
  <div class="compression-copy"><span class="section-kicker">KOMPILIERTE REPRÄSENTATION</span><h3>99,92 MB lexikalische Evidenz werden zu 16,55 MB kompilierten Modelldaten</h3><p>Gemessen an dekomprimierten Payloads ohne äußere GZip-Wrapper und Package-Metadaten. Über alle zwanzig Modelle verwenden die kompilierten v7-Streams <strong>2,50 Byte pro evaluierter Form</strong> statt 15,12 Byte im Source-Payload.</p></div>
  <div class="compression-bars"><div><label>Lexikalische Quelle <b>99,92 MB</b></label><span class="bar bar--source" style="--bar:100%"></span></div><div><label>Kompiliert v7 <b>16,55 MB</b></label><span class="bar bar--compiled" style="--bar:16.56%"></span></div><p><strong>6,04×</strong> aggregiertes Source/Model-Verhältnis · <strong>83,4 %</strong> Byte-Reduktion</p></div>
</div>

## Eine sichtbare Wissens–Qualitäts–Kosten-Hüllkurve

Ein zusätzliches englisches Experiment kompiliert Modelle absichtlich aus zunehmend kleineren deterministischen Ausschnitten der verfügbaren Lexikonzeilen und evaluiert sie anschließend gegen die vollständige Ressource. Ziel ist nicht eine „magische“ Wörterbuchgröße, sondern sichtbar zu machen, was verloren geht, wenn Wissen entfernt wird.

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/de/assets/images/radixor-knowledge-envelope.svg" alt="Diagramm für All-Form Exact Agreement, Changed-Form Exact Agreement und Runtime bei variierendem Anteil englischer Wörterbuchzeilen."><figcaption><strong>Was die Kurve auf einen Blick zeigt.</strong> Die größte Qualitätsverschlechterung betrifft Formen, die tatsächlich transformiert werden müssen. Die Runtime verändert sich moderater und nicht streng monoton, weil sich die Struktur des kompilierten Graphen mit der Evidenz verändert.</figcaption></figure>
  <div class="stat-note-card"><h3>Drei Ankerpunkte</h3><div class="stat-note-card__grid">
    <article><strong>100 %</strong><span>97,478 % All-Form Exact</span><small>97,197 % Changed-Form Exact · 71,6 ns/token</small></article>
    <article><strong>50 %</strong><span>95,262 % All-Form Exact</span><small>86,107 % Changed-Form Exact · 61,1 ns/token</small></article>
    <article><strong>10 %</strong><span>92,868 % All-Form Exact</span><small>76,516 % Changed-Form Exact · 47,0 ns/token</small></article>
  </div><p>Für nicht spezialisierte Leser ist das oft anschaulicher als eine große Tabelle: weniger lexikalisches Wissen bringt nur begrenzte Runtime-Vorteile, während die Stemming-Qualität — besonders bei geänderten Formen — kontinuierlich sinkt.</p></div>
</div>

<div class="data-table-card"><table><thead><tr><th>Verwendete Wörterbuchzeilen</th><th>Exact Agreement · alle Formen</th><th>Exact Agreement · geänderte Formen</th><th>Changed-Form Runtime</th></tr></thead><tbody>
<tr><td><strong>100 %</strong></td><td>97,478 %</td><td>97,197 %</td><td>71,6 ns/token</td></tr>
<tr><td><strong>50 %</strong></td><td>95,262 %</td><td>86,107 %</td><td>61,1 ns/token</td></tr>
<tr><td><strong>10 %</strong></td><td>92,868 %</td><td>76,516 %</td><td>47,0 ns/token</td></tr>
</tbody></table><p class="table-note">Absolute Latenz ist maschinen- und workloadabhängig. Die Kurve dient vor allem als Engineering-Illustration: Entfernen von lexikalischem Wissen schadet besonders Formen, die eine Transformation benötigen, während sich die Runtime moderater und nicht streng monoton verändert.</p></div>

<div class="note-panel"><strong>Performance-Darstellung auf dieser Website.</strong> Radixor-Runtime-Werte werden als dokumentierte absolute Messungen zusammen mit Workload- oder Qualitätskontext dargestellt. Ältere Headline-Ratios gegen Porter/Snowball werden bewusst nicht verwendet; das Benchmark-Design hat sich weiterentwickelt, und Cross-Implementation-Speed-Ratios lassen sich leicht überinterpretieren, wenn Token-Mix und gemessener Pfad nicht identisch sind.</div>

## Zwanzig Default-Sprachen

Eine visuelle Übersicht des Standardsets macht die sprachliche Breite leichter erfassbar als eine reine kommaseparierte Liste.

<div class="flag-language-grid" aria-label="Evaluierte Radixor-Default-Sprachen">
  <article><span class="flag-emoji">🇨🇿</span><div class="flag-copy"><strong>Tschechisch</strong><small>cs · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇩🇰</span><div class="flag-copy"><strong>Dänisch</strong><small>da · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇳🇱</span><div class="flag-copy"><strong>Niederländisch</strong><small>nl · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇬🇧 🇺🇸</span><div class="flag-copy"><strong>Englisch</strong><small>en · US/UK-Lexikonbasis</small></div></article>
  <article><span class="flag-emoji">🇫🇮</span><div class="flag-copy"><strong>Finnisch</strong><small>fi · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇫🇷</span><div class="flag-copy"><strong>Französisch</strong><small>fr · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇩🇪</span><div class="flag-copy"><strong>Deutsch</strong><small>de · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇮🇱</span><div class="flag-copy"><strong>Hebräisch</strong><small>he · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇭🇺</span><div class="flag-copy"><strong>Ungarisch</strong><small>hu · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇮🇹</span><div class="flag-copy"><strong>Italienisch</strong><small>it · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>Norwegisch Bokmål</strong><small>nb · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>Norwegisch Nynorsk</strong><small>nn · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇮🇷</span><div class="flag-copy"><strong>Persisch</strong><small>fa · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇵🇱</span><div class="flag-copy"><strong>Polnisch</strong><small>pl · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇵🇹</span><div class="flag-copy"><strong>Portugiesisch</strong><small>pt · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇷🇺</span><div class="flag-copy"><strong>Russisch</strong><small>ru · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇪🇸</span><div class="flag-copy"><strong>Spanisch</strong><small>es · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇸🇪</span><div class="flag-copy"><strong>Schwedisch</strong><small>sv · Default-Modell</small></div></article>
  <article><span class="flag-emoji">🇺🇦</span><div class="flag-copy"><strong>Ukrainisch</strong><small>uk · Default-Modell</small></div></article>
  <article><span class="flag-badge">YI</span><div class="flag-copy"><strong>Jiddisch</strong><small>Sprachbadge statt Staatsflagge</small></div></article>
</div>

<p class="grid-note">Flaggen werden dort verwendet, wo sie die Orientierung unterstützen. Wo die Flagge eines souveränen Staates irreführend wäre, wird stattdessen ein Sprachbadge verwendet.</p>

## Forschungslinie und Reproduzierbarkeit

Radixor ist die heutige Vervollständigung einer Forschungslinie, die 2001 mit Egothor begann: kompakte Wort-zu-Stem-Editprogramme aus lexikalischen Beispielen ableiten, sie in einem Trie organisieren und das resultierende Modell in einem Suchsystem ausführen. Die moderne Arbeit ergänzt explizite semantische Reduktion, Uniform-Subtree-Kontraktion, immutable kompilierte Repräsentationen, evidenzgerankte Alternativen, Model Provenance, Java/Native-Interoperabilität und publikationsfähige Evaluierungsartefakte.

Die Evaluierung ist auditierbar angelegt. Modell-IDs und Descriptor-Hashes werden zusammen mit Ergebniszeilen gespeichert; der Quality Snapshot enthält rohe Confusion Counts und abgeleitete Metriken; erzeugte Tabellen und Abbildungen können aus maschinenlesbaren Daten rekonstruiert werden, statt manuell übertragen zu werden.

## Radixor-Forschungsreihe

Die vollständigen Manuskripte werden hier gehostet und bleiben damit zusätzlich zu ihren DOI-Registrierungen direkt erreichbar. Jeder Titel öffnet das öffentliche PDF auf Egothor.

1. [Does a Lexicon-Trained Stemmer Generalize? A 20-Language Study of Held-Out Lexical Families (PDF)](/research/radixor-01.pdf) · [DOI: 10.13140/RG.2.2.34383.85921](https://doi.org/10.13140/RG.2.2.34383.85921)
2. [Edit Costs as Structural Hyperparameters in Dictionary-Induced Stemming: A Multilingual Sensitivity Study (PDF)](/research/radixor-02.pdf) · [DOI: 10.13140/RG.2.2.12573.47845](https://doi.org/10.13140/RG.2.2.12573.47845)
3. [Classifying Multilingual Stemmers by Pareto Strata: Error Regimes in Pairwise Lexical Conflation (PDF)](/research/radixor-03.pdf) · [DOI: 10.13140/RG.2.2.25995.25126](https://doi.org/10.13140/RG.2.2.25995.25126)
4. [The Stemming Policy Is Data: Adapting a Lexicon-Trained Stemmer to Alternative Conflation Objectives (PDF)](/research/radixor-04.pdf) · [DOI: 10.13140/RG.2.2.23898.09926](https://doi.org/10.13140/RG.2.2.23898.09926)
5. [Runtime Efficiency of Lexicon-Trained Stemming: Compiled Structure and a Speed–Reference-Agreement Envelope in Radixor (PDF)](/research/radixor-05.pdf) · [DOI: 10.13140/RG.2.2.27332.18569](https://doi.org/10.13140/RG.2.2.27332.18569)
6. [Lexical Resource Consistency and Learned Transformation Vocabulary in Multilingual Stemming (PDF)](/research/radixor-06.pdf) · [DOI: 10.13140/RG.2.2.34043.07203](https://doi.org/10.13140/RG.2.2.34043.07203)
7. [Compiling Learned Lexical Transformations: Semantic Canonicalization and Accepting-Leaf Generalization in Patch-Command Tries (PDF)](/research/radixor-07.pdf) · [DOI: 10.13140/RG.2.2.12232.69128](https://doi.org/10.13140/RG.2.2.12232.69128)
8. [Where Retrieval Quality Goes: Rethinking Stemming in Modern Search (PDF)](/research/radixor-08.pdf) · [DOI: 10.13140/RG.2.2.22208.90887](https://doi.org/10.13140/RG.2.2.22208.90887)
9. [From Lexical Edits to Verified Stemming Policies: Two-Sided Adaptation in Radixor (PDF)](/research/radixor-09.pdf) · [DOI: 10.13140/RG.2.2.24725.49120](https://doi.org/10.13140/RG.2.2.24725.49120)

**Forschungssynthese.** [Learned Conflation Policies: From Lexical Transformation to Reproducible Retrieval (PDF)](/research/radixor-book.pdf) · [DOI: 10.13140/RG.2.2.24253.63209](https://doi.org/10.13140/RG.2.2.24253.63209)

## Projektressourcen

<div class="resource-grid resource-grid--three">
  <a href="https://github.com/leogalambos/Radixor"><strong>Source-Repository</strong><span>Java, Python/Rust-Runtime, Modelle und Release-Workflows ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/"><strong>Technische Dokumentation</strong><span>Fast Tracks, Architektur, Modelle, Ambiguität und Benchmarks ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/benchmarks/data/stemming-quality.csv"><strong>Quality-Dataset</strong><span>Maschinenlesbarer Stemming-Quality-Snapshot ↗</span></a>
  <a href="https://www.researchgate.net/publication/406886717_Radixor_A_Quarter-Century_Renewal_of_Patch-Command_Trie_Stemming_for_Deterministic_Search_Systems"><strong>Architektur-Preprint</strong><span>Historischer und systemtechnischer Kontext ↗</span></a>
  <a href="/de/heritage/"><strong>Egothor-Entwicklungslinie</strong><span>Forschungs- und Suchgeschichte →</span></a>
  <a href="https://central.sonatype.com/artifact/org.egothor/radixor"><strong>Maven Central</strong><span>Publiziertes Java-Artefakt ↗</span></a>
</div>
