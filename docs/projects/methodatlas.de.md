---
title: MethodAtlas
lang: de
description: MethodAtlas verwandelt bestehenden Test-Sourcecode in deterministische Inventare, optionale KI-gestützte Security-Klassifizierung und reproduzierbare Audit-Evidenz über acht Sprachen hinweg.
wide: true
page_class: project-detail project-methodatlas
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Software Assurance · Open Source</p>
    <div class="project-title-row"><img src="/assets/images/methodatlas-mark.svg" alt="" width="86" height="86"><h1>MethodAtlas</h1></div>
    <p class="page-lede">Eine Source-Level-Karte dessen, was eine Testsuite tatsächlich enthält, ergänzt — wenn sinnvoll — um Security-Klassifizierung, Control-Mapping und Review-Evidenz. Das deterministische Inventar bleibt von der KI-Interpretation getrennt, damit das Ergebnis inspizierbar und reproduzierbar bleibt.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://accenture.github.io/MethodAtlas/">Dokumentation lesen ↗</a><a class="button button--quiet" href="https://github.com/Accenture/MethodAtlas">GitHub-Repository ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>8</strong><span>Sprachen</span><small>Test-Discovery über Mainstream-, Script- und Enterprise-Sprachen</small></div>
    <div><strong>SARIF 2.1</strong><span>CI-Ausgabe</span><small>erstklassige Integration mit Security- und Developer-Tooling</small></div>
    <div><strong>170+</strong><span>Credential-Muster</span><small>deterministischer Katalog von Secret-Kandidaten vor optionalem KI-Triage</small></div>
    <div><strong>Signiert</strong><span>Evidence Packs</span><small>manipulationsgeschützte Review-Pakete mit klassischen, PQC- oder Hybrid-Signaturen</small></div>
  </div>
</section>

## Vom Sourcecode zu belastbarer Evidenz

Ein erfolgreicher Testlauf beantwortet, ob Tests bestanden haben. Assurance stellt andere Fragen: **Welche Tests existieren? Welche prüfen Security-Eigenschaften? Welche Controls unterstützen sie? Was hat sich seit dem letzten Review geändert? Lässt sich die Evidenz reproduzieren?** MethodAtlas ist um diese Lücke herum gebaut.

<div class="architecture-flow architecture-flow--five" aria-label="MethodAtlas-Evidenzworkflow">
  <span><b>Source Tree</b><small>bestehender Testcode</small></span><i>→</i>
  <span><b>Discovery</b><small>deterministische Parser</small></span><i>→</i>
  <span><b>Enrichment</b><small>optionale KI &amp; Taxonomie</small></span><i>→</i>
  <span><b>Review</b><small>Overrides &amp; Drift Checks</small></span><i>→</i>
  <span><b>Evidenz</b><small>SARIF · Coverage · signierte Packs</small></span>
</div>

Die Architektur behandelt **Methoden-Discovery bewusst als strukturelles Source-Analyse-Problem, nicht als KI-Problem**. KI kann Security-Relevanz klassifizieren, Tags vorschlagen oder beim Triage helfen, bleibt aber eine explizite Enrichment-Stufe auf einem deterministischen Inventar.

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/assets/images/project-methodatlas-team.png" alt="Software-Assurance-Spezialisten prüfen Testinventare, Workflow-Schritte und Evidenz-Dashboards."><figcaption><strong>Für Reviews entworfen, nicht nur für Automatisierung.</strong> MethodAtlas ist besonders nützlich, wenn erklärt werden muss, wie ein Ergebnis entstand und an welcher Stelle menschliches Urteil in den Prozess einging.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Warum dieser Workflow in regulierter Delivery praktisch ist</span><ul>
    <li><strong>Bestehende Tests behalten ihren Wert</strong>, weil das Tool inventarisiert, was bereits vorhanden ist.</li>
    <li><strong>KI bleibt optional</strong>, statt der einzige Weg zu Ergebnissen zu sein.</li>
    <li><strong>Review ist explizit</strong>, bevor Tags oder Evidenz als maßgeblich gelten.</li>
    <li><strong>Ausgaben passen in Delivery-Pipelines</strong> über SARIF, CSV, Coverage-Matrizen und signierte Packs.</li>
  </ul></div></figure>
</div>

## Acht Sprachen, ein Evidenzmodell

<div class="language-matrix">
  <article><strong>Java</strong><span>JUnit 5 · JUnit 4 · TestNG</span><small>AST-Discovery · Source-Write-back</small></article>
  <article><strong>C#</strong><span>xUnit · NUnit · MSTest</span><small>grammatikbasierte Discovery · Source-Write-back</small></article>
  <article><strong>TypeScript / JavaScript</strong><span>Jest · Vitest · Mocha</span><small>Plugin-Discovery</small></article>
  <article><strong>Go</strong><span>testing package</span><small>Plugin-Discovery</small></article>
  <article><strong>Python</strong><span>pytest</span><small>Plugin-Discovery</small></article>
  <article><strong>PowerShell</strong><span>Pester</span><small>Plugin-Discovery</small></article>
  <article><strong>SAP ABAP</strong><span>ABAP Unit · ecATT</span><small>Enterprise-Testinventar</small></article>
  <article><strong>COBOL</strong><span>MFUnit · COBOL-Check</span><small>Enterprise-Testinventar</small></article>
</div>

Die Sprachplugins erzeugen einen gemeinsamen Record auf Methodenebene. Dadurch bleibt der Assurance-Workflow konsistent, selbst wenn ein Portfolio moderne Services, Skripte und langlebige Enterprise-Plattformen umfasst.

## Evidenzfähigkeiten, nicht nur Klassifizierung

<div class="feature-grid feature-grid--three">
  <article><h3>Security-Taxonomie</h3><p>KI-gestützte Klassifizierung kann Tests einer geschlossenen versionierten Security-Taxonomie oder einer kundenspezifischen Taxonomie zuordnen, die an das eigene Control Framework angepasst ist.</p></article>
  <article><h3>Confidence und Review Queues</h3><p>Confidence Scores pro Methode unterstützen Schwellenwerte und menschliche Review Queues, statt ein binäres „KI sagt ja/nein“-Betriebsmodell zu erzwingen.</p></article>
  <article><h3>Content-Fingerprints</h3><p>SHA-256-Fingerprints des Sourcecodes helfen, unveränderte Klassen zu erkennen, frühere KI-Ergebnisse wiederzuverwenden und nachzuweisen, ob Evidenz aus demselben Testinhalt stammt.</p></article>
  <article><h3>Delta-Reports</h3><p>Zwei Inventare können verglichen werden, um hinzugefügte, entfernte oder geänderte Methoden zu zeigen — nützlich für Release-Evidenz und CI-Regression-Gates.</p></article>
  <article><h3>Control Coverage</h3><p>Tags können vom Benutzer bereitgestellten Control-IDs zugeordnet werden, sodass die Ausgabe Coverage-Lücken zeigt, statt rohe Testzahlen mit Assurance gleichzusetzen.</p></article>
  <article><h3>Reproduzierbarkeits-Receipts</h3><p>Eingaben, die einen Scan beeinflusst haben — einschließlich der tatsächlich verwendeten LLM-Prompt-Templates — können fingerprinted werden, damit ein späterer Reviewer die Entstehung des Ergebnisses rekonstruieren kann.</p></article>
</div>

## KI ist optional — und begrenzt

MethodAtlas unterstützt lokale Ollama-Inferenz, Cloud-Provider und einen zweistufigen manuellen Workflow für Umgebungen, in denen Sourcecode keine externe API verlassen darf. Menschlich geprüfte Overrides sind persistent; das Schreiben in Sourcecode bleibt bewusst von der Klassifizierung getrennt, damit Änderungen vor dem Write-back geprüft werden können.

<div class="evidence-path">
  <article><span>01</span><div><strong>Deterministische Basis</strong><p>Testmethoden, Framework-Metadaten, Positionen und Source-Identität ohne LLM entdecken.</p></div></article>
  <article><span>02</span><div><strong>Optionale Interpretation</strong><p>Security-Relevanz, Taxonomie-Tags, Begründung und Confidence mit lokaler, Cloud- oder manueller KI ergänzen.</p></div></article>
  <article><span>03</span><div><strong>Menschliche Autorität</strong><p>Entscheidungen prüfen, überschreiben und persistieren; Drift zwischen Source-Annotationen und späterer Klassifizierung erkennen.</p></div></article>
  <article><span>04</span><div><strong>Auditierbare Ausgabe</strong><p>CI-freundliche Records, Control Coverage, Receipts oder manipulationsgeschützte Evidenzpakete erzeugen.</p></div></article>
</div>

## Credential Detection als separates deterministisches Signal

Dieselbe Assurance-Pipeline kann im Sourcecode nach Credential-Kandidaten suchen. Die Discovery verwendet einen kuratierten deterministischen Regelkatalog mit mehr als 170 Vendor-Credential-Formaten; Werte werden standardmäßig maskiert. Wenn KI aktiviert ist, wird sie nachgelagert verwendet, um Glaubwürdigkeit zu bewerten und einen Kandidaten dem Endpoint zuzuordnen, den er vermutlich authentifiziert — nicht um den zugrunde liegenden Match zu erfinden.

<div class="note-panel"><strong>Warum die Trennung wichtig ist.</strong> In einem regulierten Review ist „das Modell hat es gefunden“ eine schwache Provenienz. MethodAtlas hält deterministische Discovery, optionale probabilistische Interpretation und menschliche Entscheidungen als unterscheidbare Stufen fest, sodass jede unabhängig hinterfragt werden kann.</div>

## Interaktives Review für Menschen, die keinen reinen CLI-Workflow wollen

Die Desktop-GUI stellt einen reviewer-orientierten Workflow um dasselbe Modell bereit: Source-Browsing, Syntax-Highlighting, Ergebnisbäume für Klassen und Methoden, Tag-Entscheidungen, gestufte Änderungen und Batch-Write-back. Review-Aktionen erzeugen Evidence-CSV-Records und persistente Overrides, damit eine GUI-Entscheidung nicht bloß temporärer Zustand auf einer Workstation bleibt.

<div class="feature-grid">
  <article><h3>Gestufte Source-Änderungen</h3><p>Vorgeschlagene Annotationen können geprüft und im Speicher gestaged werden, bevor eine bewusste „Save All Changes“-Aktion sie in die Source-Dateien schreibt.</p></article>
  <article><h3>Audit Trail</h3><p>Review-Entscheidungen werden als zeitgestempelte Evidenz und wiederverwendbare Overrides festgehalten; die Unterscheidung zwischen Maschinenvorschlag und menschlicher Entscheidung bleibt erhalten.</p></article>
  <article><h3>KI-Profile</h3><p>Benannte Provider-Profile erlauben den Wechsel zwischen lokaler und Remote-Inferenz, ohne diese Wahl in die Discovery Engine einzubauen.</p></article>
  <article><h3>Plugin-Auswahl</h3><p>Discovery-Plugins können pro Lauf aktiviert werden, damit ein heterogenes Repository auf die für den Review relevanten Sprachen eingeschränkt werden kann.</p></article>
</div>

## Evidence Packs und ZeroEcho

Evidence Packs bündeln Scan-Ausgaben in einem manipulationsgeschützten Verzeichnis mit SHA-256-Manifest. Wenn eine Signatur verlangt wird, kann MethodAtlas **ZeroEcho** für klassische, Post-Quantum- oder Hybrid-Signaturen verwenden. Das verbindet zwei Egothor-Themen praktisch: Assurance-Evidenz finden und anschließend die Integrität des Evidenzpakets schützen.

## Projektentwicklung

MethodAtlas begann mit einer Open-Source-Grundlage, die von **Egothor** entwickelt wurde. **Accenture erweiterte diese Grundlage später** um zusätzliche Fähigkeiten; das erweiterte öffentliche Projekt wird heute in Accentures GitHub-Organisation publiziert. Das beschreibt die Projektentwicklung und wird hier nicht als institutionelle Partnerschaft oder Empfehlung dargestellt. Das öffentliche Projekt steht unter der **Apache License, Version 2.0**.

## Projektressourcen

<div class="resource-grid resource-grid--three">
  <a href="https://accenture.github.io/MethodAtlas/"><strong>Dokumentation</strong><span>Konzepte, Workflows und CLI-Referenz ↗</span></a>
  <a href="https://github.com/Accenture/MethodAtlas"><strong>Source-Repository</strong><span>Öffentlicher Sourcecode, Issues und Releases ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/cli-reference/"><strong>CLI-Referenz</strong><span>Kommandozeilenoptionen und Ausgabemodi ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/concepts/for-security-teams/"><strong>Leitfaden für Sicherheitsteams</strong><span>Ergebnisse, Scores, Drift, Befunde und Audit ↗</span></a>
  <a href="/de/projects/zeroecho/"><strong>ZeroEcho</strong><span>Kryptographische Signatur von Evidence Packs →</span></a>
  <a href="/de/expertise/"><strong>Software Assurance</strong><span>Egothor-Engineering-Kontext →</span></a>
</div>
