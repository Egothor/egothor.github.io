---
title: EGOTHOR v4
lang: de
description: EGOTHOR v4 ist eine neue Generation der Egothor-Suchinfrastruktur für regulierte Umgebungen, die deterministisches Retrieval mit autorisierungsbewusster Ergebnisfreigabe verbindet.
wide: true
page_class: project-detail project-egothor-v4
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Regulierte Suche · Private Beta · Open-Source-Veröffentlichung geplant</p>
    <div class="project-title-row"><img src="/assets/images/egothor-v4-mark.svg" alt="" width="86" height="86"><h1>EGOTHOR v4</h1></div>
    <p class="page-lede">Eine neue Generation der Egothor-Suchinfrastruktur für Informationsumgebungen, in denen Relevanz nur die halbe Antwort ist. Suche muss auch Sichtbarkeit, Clearance, Klassifizierung, Integrität, Compartments und Konfliktgrenzen bewahren, bevor ein Ergebnis offengelegt werden darf.</p>
    <div class="hero-actions"><span class="button button--status">Private Beta</span><a class="button button--quiet" href="/de/heritage/">Egothor-Entwicklungslinie erkunden</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>Resident</strong><span>Suchkernel</span><small>kompakter Read-Pfad für vorhersehbares Retrieval im Prozess</small></div>
    <div><strong>Top-K</strong><span>deterministische Ergebnisse</span><small>stabiles Ranking und Ergebnisauswahl als explizite Kernel-Verträge</small></div>
    <div><strong>Policy</strong><span>Disclosure-bewusst</span><small>Retrieval findet innerhalb eines Informations-Governance-Modells statt</small></div>
    <div><strong>OSS</strong><span>Veröffentlichung geplant</span><small>öffentlicher Sourcecode folgt auf die Härtungsphase der privaten Beta</small></div>
  </div>
</section>

## Suche, wenn ein Treffer nicht automatisch offengelegt werden darf

Traditionelle Enterprise-Suche fragt häufig, ob ein Benutzer eine Anwendung betreten darf, und durchsucht anschließend den darin verfügbaren Index. Regulierte Informationssysteme brauchen eine präzisere Frage: **Darf dieses Subjekt genau dieses Ergebnis in diesem Kontext erhalten, ohne eine Klassifizierungs-, Compartment- oder Konfliktgrenze zu überschreiten?**

EGOTHOR v4 ist um diese Unterscheidung herum entworfen. Identität und MFA stellen fest, wer fragt; Retrieval findet die passenden Inhalte; die Informations-Policy entscheidet, was offengelegt werden darf. Die Disclosure-Grenze bleibt sichtbar, statt erst nach einer uneingeschränkten Suche in einem Präsentationsfilter versteckt zu werden.

<div class="architecture-flow architecture-flow--five" aria-label="EGOTHOR-v4-Retrieval-Pfad"><span><b>Ingest</b><small>durchsuchbare Barrels erzeugen</small></span><i>→</i><span><b>Resident View</b><small>kompakte immutable Read-Strukturen</small></span><i>→</i><span><b>Query</b><small>deterministisches Matching</small></span><i>→</i><span><b>Policy-Kontext</b><small>Subjekt- und Informationsgrenzen</small></span><i>→</i><span><b>Disclosure</b><small>zulässige Top-K-Ergebnisse</small></span></div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/assets/images/project-egothor-v4-team.png" alt="Engineering- und Security-Spezialisten prüfen einen Workflow für regulierte Suche und ein System zur Disclosure-Steuerung."><figcaption><strong>Die zentrale Unterscheidung ist einfach.</strong> Suche kann feststellen, was passt; regulierte Disclosure entscheidet, was einem konkreten Subjekt tatsächlich gezeigt werden darf.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Was dies von gewöhnlicher Enterprise-Suche unterscheidet</span><ul><li><strong>Policy ist kein nachträglicher kosmetischer Filter.</strong></li><li><strong>Resident Retrieval bleibt deterministisch</strong>, damit Verhalten testbar und nachvollziehbar ist.</li><li><strong>Disclosure ist Teil der Korrektheit</strong>, wenn Informationsklassen und Compartments zählen.</li><li><strong>Security und Retrieval</strong> bleiben als getrennte Belange sichtbar.</li></ul></div></figure>
</div>

## Ein Suchkernel mit expliziten Invarianten

Die aktuelle Engineering-Arbeit trennt Indexaufbau und Resident Querying. Der Write-Pfad kann Strukturen aufbauen und validieren, während der kritische Read-Pfad über kompakte Repräsentationen mit vorhersehbarer Semantik arbeitet.

<div class="feature-grid feature-grid--three">
  <article><h3>Resident Retrieval</h3><p>Suche arbeitet über eine spezielle leseorientierte Repräsentation, statt Indexmutationen in denselben Hot Path zu mischen.</p></article>
  <article><h3>Deterministisches Top-K</h3><p>Ranking und Tie-Verhalten sind reproduzierbare Verträge: gleicher Suchzustand plus gleiche Query ergibt eine stabile Ergebnisreihenfolge.</p></article>
  <article><h3>Live-Document-Visibility</h3><p>Dokumentsichtbarkeit kann sich ändern, ohne dass gelöschte oder ersetzte Records weiter als zulässige Treffer erscheinen müssen.</p></article>
  <article><h3>Streaming Ingest</h3><p>Indexkonstruktion basiert auf Barrel-Assembly und kontrollierter Publikation statt auf einem monolithischen In-Memory-Build.</p></article>
  <article><h3>API-Grenzen</h3><p>Ingest, Resident Access und Query-Verträge bleiben getrennt, damit Performance- oder Storage-Änderungen die öffentliche Suchsemantik nicht stillschweigend verändern.</p></article>
  <article><h3>Evidenzorientiertes Engineering</h3><p>Tests und Benchmarks sind Teil des Kernel-Vertrags, einschließlich der Unterscheidung zwischen Public API und Steady-State-Performance.</p></article>
</div>

## Retrieval-Policy ist kein Nachgedanke

Suchkernel und Informationskontrollmodell beantworten unterschiedliche Fragen und benötigen unterschiedliche Evidenz. Der Kernel zeigt, dass Matching und Ranking korrekt arbeiten; die Policy entscheidet, ob ein passender Record dem effektiven Subjekt offengelegt werden darf.

<div class="regulated-stack" aria-label="EGOTHOR-v4-Informationskontrollschichten"><article><span>01</span><div><b>Identität</b><small>Login, MFA und authentifizierter Subjektkontext.</small></div></article><article><span>02</span><div><b>Informations-Policy</b><small>Clearance, Klassifizierung, Integrität, Compartments und Konfliktgrenzen.</small></div></article><article><span>03</span><div><b>Retrieval</b><small>Deterministische Index- und Query-Ausführung mit kontrolliertem Ergebnisvertrag.</small></div></article><article><span>04</span><div><b>Disclosure</b><small>Nur für Subjekt und Informationsregeln zulässige Ergebnisse werden offengelegt.</small></div></article></div>

<div class="policy-grid"><article><strong>Clearance</strong><p>Welche Informationsebene darf das Subjekt empfangen?</p></article><article><strong>Klassifizierung</strong><p>Welche Behandlungsklasse gilt für Record oder Collection?</p></article><article><strong>Integrität</strong><p>Welche Trust-Bedingungen müssen erfüllt sein, bevor Information nutzbar ist?</p></article><article><strong>Compartments</strong><p>Welche Informationsdomänen müssen selbst innerhalb desselben Suchdiensts getrennt bleiben?</p></article><article><strong>Konfliktgrenzen</strong><p>Welche Kombinationen dürfen nicht gemeinsam offengelegt werden, obwohl jedes Element einzeln zugänglich wäre?</p></article><article><strong>Betriebliche Policy</strong><p>Wie werden Änderungen an Identität, Administration und Policy sichtbar und auditierbar?</p></article></div>

## Was die private Beta beweisen soll

Die Beta ist nicht bloß ein UI-Meilenstein. In dieser Phase müssen Suchmechanik und Security-Grenzen als ein Betriebssystem funktionieren: authentifizierter Zugriff, Index-Lifecycle, deterministisches Query-Verhalten, Administration, Live-Visibility und Disclosure-Policy müssen auch unter Veränderung verständlich bleiben.

<div class="status-board"><article><span>FUNKTIONIERT</span><strong>Indexierung &amp; Suche</strong><p>Das Kernsystem kann Inhalte ingestieren und Queries ausführen.</p></article><article><span>FUNKTIONIERT</span><strong>Login &amp; MFA</strong><p>Identity Assurance ist Teil des Betriebssystems, kein späteres Add-on.</p></article><article><span>AKTIVES ENGINEERING</span><strong>Kernel-Härtung</strong><p>Resident-Strukturen, Suchsemantik, Tests und Performance werden für eine saubere öffentliche Library-Grenze verfeinert.</p></article><article><span>AKTIVES ENGINEERING</span><strong>Regulierte Disclosure</strong><p>Autorisierung und Informations-Policy werden als erstklassige Suchsystem-Randbedingungen ausgestaltet.</p></article><article><span>GEPLANT</span><strong>Open-Source-Veröffentlichung</strong><p>Der Sourcecode wird veröffentlicht, sobald öffentliche Architektur und Verträge für externe Nutzung bereit sind.</p></article></div>

## Das nächste Egothor, kein Kompatibilitätsprojekt

Die historischen Egothor-Maschinen untersuchten Java-Volltext-Retrieval, verteilte Suche und dynamische Indexpflege. Version 4 kehrt mit moderner Implementierung zum Suchkern zurück und adressiert ein anderes Security-Problem: **hochwertiges Retrieval in Systemen, in denen Informationsgrenzen Teil der Korrektheit sind**.

<div class="note-panel"><strong>Öffentlicher Scope.</strong> EGOTHOR v4 bleibt ein privates Projekt. Diese Seite beschreibt Architektur und Fähigkeiten bewusst auf öffentlichem Niveau; Implementierungsdetails und Repository-Links werden mit der geplanten Open-Source-Veröffentlichung publiziert, statt den privaten Entwicklungsbaum vorzeitig offenzulegen.</div>

## Verwandter Kontext

<div class="resource-grid"><a href="/de/heritage/"><strong>Egothor-Entwicklungslinie</strong><span>Von der Suchmaschine 1998 bis zur heutigen Forschungslinie →</span></a><a href="/de/expertise/"><strong>Suche &amp; Information Retrieval</strong><span>Engineering-Themen hinter dem Projekt →</span></a></div>
