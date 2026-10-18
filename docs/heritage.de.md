---
title: Entwicklungslinie
lang: de
description: Die Egothor-Entwicklungslinie vom ursprünglichen Suchsystem von 1998 über verteilte Systeme, Crawling, Geolokalisierung und Datenplattformen bis zu den heutigen Projekten.
wide: true
page_class: heritage-page
---

<section class="page-hero shell">
  <p class="eyebrow"><span></span> Projektgeschichte</p>
  <h1>Von Suchinfrastruktur<br><em>zu einem breiteren Engineering-Labor.</em></h1>
  <p class="page-lede">Egothor begann 1998 als Suchmaschinenprojekt. Im Lauf der Zeit untersuchte dieselbe Engineering-Linie Sprachverarbeitung, verteilte Dienste, Crawling, Netzwerk-Geolokalisierung, Sensor-Gateways und experimentelle Datenplattformen. Diese Seite bewahrt diese Entwicklung, ohne eingestellte Systeme als aktuelle Produkte darzustellen.</p>
</section>

<section class="lineage shell" aria-label="Egothor-Projektgeschichte">
  <img src="/de/assets/images/heritage-line.svg" alt="Zeitachse der Egothor-Projektfamilien von 1998 bis heute">
</section>

## Zentrale Entwicklungslinie

<div class="heritage-grid">
  <article id="egothor-search"><div class="heritage-date">1998–2018</div><h3>Egothor Search Engine</h3><p>Eine Open-Source-Volltextsuchmaschine in Java mit dynamischen Index-Updates, Transaktionen, Plagiatserkennung, inkrementellen Updates, gängigen Dokumentformaten, erweitertem booleschem Modell und sprachunabhängigem Stemming.</p><a href="#egothor-search">Historische Zusammenfassung ↑</a></article>
  <article id="j5m"><div class="heritage-date">2007–2015</div><h3>J5M</h3><p>Eine schlanke Schicht für verteilte Anwendungen mit kooperierenden Diensten, Discovery entfernter Objekte, direktem oder Remote-Aufruf, Lifecycle-Steuerung und Hot-Spare-Serviceinstanzen.</p><a href="#j5m">Historische Zusammenfassung ↑</a></article>
  <article id="bobo"><div class="heritage-date">2012–2014</div><h3>Bobo</h3><p>Eine verteilte Crawler- und Virtual-Entity-Plattform, die aus den Crawling-Anforderungen von Egothor zu einer allgemeineren Architektur für autonome webnahe Komponenten entstand.</p></article>
  <article id="galeo"><div class="heritage-date">2013–2014</div><h3>Galeo</h3><p>Forschung zur IP-Geolokalisierung mit einem Modell, das Netzwerkpfade als heterogen behandelte, statt eine konstante Ausbreitungscharakteristik anzunehmen.</p><a href="/research/galeo.pdf">Galeo: Continuous Bayesian Topology-Aware IP Geolocation (PDF)</a> · <a href="https://doi.org/10.13140/RG.2.2.36764.45443">DOI: 10.13140/RG.2.2.36764.45443</a></article>
  <article id="qid"><div class="heritage-date">2012 → 2022</div><h3>Egothor3 / Q!D</h3><p>Eine 2012 begonnene experimentelle Datenbankrichtung; die spätere Q!D-Implementierung nutzte J5M, um alternative Verarbeitungsmodelle für große Datenbestände zu untersuchen.</p></article>
  <article><div class="heritage-date">2025–2026 →</div><h3>Aktuelle Egothor-Generation</h3><p>Radixor erneuert die Sprachverarbeitungslinie, ZeroEcho erweitert die Arbeit um moderne Kryptographie, conflux liefert fokussierte Anwendungsinfrastruktur, MethodAtlas wendet evidenzorientiertes Engineering auf Software Assurance an und EGOTHOR v4 führt die Projektfamilie zurück zur Volltextsuche für regulierte Umgebungen.</p><a href="/de/projects/">Aktuelle Projekte →</a></article>
</div>

## Angewandte Systeme

Zur breiteren Projektfamilie gehörten auch Systeme rund um Netzwerke, Sensoren und Datenerfassung. In Leo Galambošs historischer Projektliste finden sich unter anderem **SNOG** (Sensor-Network-Gateway), **SafetyCare** (GPS/GSM-Unterstützungsanwendung), **Cyclone** (verteilter Feed-Crawler und Analyzer) und **RaSPEL** (LoRaWAN-zu-REST-Bridge/Controller).

<div class="note-panel"><strong>Historischer Kontext.</strong> Die Beschreibungen auf dieser Seite wurden für Klarheit und heutigen Kontext neu formuliert. Daten und technische Kernaussagen basieren auf erhaltenen Egothor-Projektseiten und Leo Galambošs veröffentlichter Projektgeschichte.</div>

## Was weitergetragen wurde

Die einzelnen Systeme unterscheiden sich, doch mehrere Ideen kehren wieder: Komplexität aus kritischen Runtime-Pfaden verlagern; Serviceverhalten explizit machen; kompakte Datenstrukturen bevorzugen; Komponenten unabhängig ersetzen oder weiterentwickeln können; und ausreichend technische Evidenz zu einer Aussage erhalten, damit ein anderer Ingenieur sie überprüfen kann.
