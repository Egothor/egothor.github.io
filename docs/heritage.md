---
title: Heritage
description: The Egothor project lineage from the original 1998 search engine through distributed systems, crawling, geolocation and data platforms to today's projects.
wide: true
page_class: heritage-page
---

<section class="page-hero shell">
  <p class="eyebrow"><span></span> Project heritage</p>
  <h1>From search infrastructure<br><em>to a broader engineering laboratory.</em></h1>
  <p class="page-lede">Egothor began in 1998 as a search-engine project. Over time, the same engineering programme explored language processing, distributed services, crawling, network geolocation, sensor gateways and experimental data platforms. This page preserves that lineage without presenting retired systems as current products.</p>
</section>

<section class="lineage shell" aria-label="Egothor project lineage">
  <img src="/assets/images/heritage-line.svg" alt="Timeline connecting Egothor project families from 1998 to the present">
</section>

## Core lineage

<div class="heritage-grid">
  <article id="egothor-search"><div class="heritage-date">1998–2018</div><h3>Egothor Search Engine</h3><p>An open-source Java full-text search engine with dynamic index updating, transactions, plagiarism detection, incremental updates, common document formats, an extended Boolean model and a language-independent stemming approach.</p><a href="#egothor-search">Historical summary ↑</a></article>
  <article id="j5m"><div class="heritage-date">2007–2015</div><h3>J5M</h3><p>A lightweight distributed-application layer built around cooperating services, remote-object discovery, direct or remote invocation, lifecycle control and hot-spare service instances.</p><a href="#j5m">Historical summary ↑</a></article>
  <article id="bobo"><div class="heritage-date">2012–2014</div><h3>Bobo</h3><p>A distributed crawler and virtual-entity platform that grew from the crawling requirements of Egothor into a general architecture for autonomous web-facing components.</p></article>
  <article id="galeo"><div class="heritage-date">2013–2014</div><h3>Galeo</h3><p>Research into IP geolocation using a model that treated network paths as heterogeneous rather than assuming a single constant propagation behaviour.</p><a href="/research/galeo.pdf">Galeo: Continuous Bayesian Topology-Aware IP Geolocation (PDF)</a> · <a href="https://doi.org/10.13140/RG.2.2.36764.45443">DOI: 10.13140/RG.2.2.36764.45443</a></article>
  <article id="qid"><div class="heritage-date">2012 → 2022</div><h3>Egothor3 / Q!D</h3><p>An experimental database direction initiated in 2012; the later Q!D implementation used the J5M platform to explore alternative processing models for large data collections.</p></article>
  <article><div class="heritage-date">2025–2026 →</div><h3>Current Egothor generation</h3><p>Radixor renews the language-processing line, ZeroEcho expands into modern cryptographic engineering, conflux provides focused application infrastructure, MethodAtlas applies evidence-oriented engineering to software assurance, and EGOTHOR v4 brings the project family back to full-text search for regulated environments.</p><a href="/projects/">Current projects →</a></article>
</div>

## Applied systems

The wider project family also included systems built around networking, sensors and data acquisition. On Leo Galamboš's historical project list these include **SNOG** (sensor-network gateway), **SafetyCare** (GPS/GSM assistance application), **Cyclone** (distributed feed crawler and analyser) and **RaSPEL** (LoRaWAN-to-REST bridge/controller).

<div class="note-panel"><strong>Historical context.</strong> Descriptions on this page are rewritten for clarity and present-day context. Dates and core technical descriptions are based on the preserved Egothor project pages and Leo Galamboš's published project history.</div>

## What carried forward

The individual systems are different, but several ideas recur: move complexity away from critical runtime paths; make service behaviour explicit; prefer compact data structures; allow components to be replaced or evolved independently; and keep enough technical evidence around a claim that another engineer can challenge it.
