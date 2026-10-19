---
title: ZeroEcho
lang: de
description: ZeroEcho ist ein modulares Java-Toolkit für Kryptographie und PKI, das klassische, Post-Quantum- und hybride Fähigkeiten mit expliziten Schlüssel- und Workflow-Grenzen verbindet.
wide: true
page_class: project-detail project-zeroecho
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Kryptographische Systeme · Egothor</p>
    <div class="project-title-row"><img src="/assets/images/zeroecho-mark.svg" alt="" width="86" height="86"><h1>ZeroEcho</h1></div>
    <p class="page-lede">Ein modulares Java-Toolkit zum Aufbau kryptographischer und PKI-Workflows, die explizite Algorithmusentscheidungen, kontrollierte Schlüsselgrenzen und einen Evolutionspfad von klassischer Kryptographie zu Post-Quantum- und Hybrid-Deployments benötigen.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://github.com/Egothor/ZeroEcho">Repository öffnen ↗</a><a class="button button--quiet" href="https://www.egothor.org/ZeroEcho/developer/javadoc.html">JavaDoc-Übersicht ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>PQC</strong><span>NIST-Ära-Algorithmen</span><small>ML-KEM plus Post-Quantum-Signaturfamilien im aktiven Algorithmusinventar</small></div>
    <div><strong>Hybrid</strong><span>Migrationsmodell</span><small>klassische und Post-Quantum-Mechanismen können koexistieren, wo Interoperabilität dies verlangt</small></div>
    <div><strong>PKI</strong><span>Service-Schicht</span><small>Issuance, Revocation, Status und Publication gehören in die Architektur</small></div>
    <div><strong>Offline</strong><span>Betriebsworkflows</span><small>für skriptbare und eingeschränkte Delivery-Muster ebenso wie für verbundene Systeme</small></div>
  </div>
</section>

## Kryptographie als Architektur, nicht als Sammlung von Algorithmen

ZeroEcho entstand aus einer praktischen Anforderung: moderne Kryptographie in wiederholbaren Anwendungsworkflows nutzbar machen, ohne kritische Entscheidungen in globalem Zustand oder einem monolithischen Kommando zu verstecken. Das Ergebnis ist ein geschichtetes Toolkit, in dem Algorithmen, Schlüssel, geschützte Inhalte, PKI-Services und Anwendungsintegration explizite Grenzen besitzen.

<div class="architecture-flow architecture-flow--five" aria-label="ZeroEcho-Architektur">
  <span><b>Algorithmen</b><small>klassisch · PQC · hybrid</small></span><i>→</i>
  <span><b>Schlüsselgrenze</b><small>Referenzen statt frei transportiertem privaten Material</small></span><i>→</i>
  <span><b>Crypto-Workflows</b><small>verschlüsseln · signieren · prüfen</small></span><i>→</i>
  <span><b>PKI-Services</b><small>ausstellen · widerrufen · Status</small></span><i>→</i>
  <span><b>Anwendungen</b><small>CLI · Automation · Integration</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/assets/images/project-zeroecho-team.png" alt="Kryptographie- und Systemingenieure arbeiten mit PKI-Dashboards, Funksignalinstrumenten und Analysen sicherer Workflows in einer Laborumgebung."><figcaption><strong>Ein Architekturbild ist oft klarer als eine Feature-Liste.</strong> ZeroEcho verbindet Algorithmusfamilien, Key Custody, kryptographische Operationen und PKI-Services zu einem kontrollierbaren Systemmodell.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Betriebliche Ideen hinter dem Projekt</span><ul>
    <li><strong>Algorithm Agility</strong> bedeutet explizite Entscheidungen, nicht versteckte Defaults.</li>
    <li><strong>Schlüsselgrenzen</strong> sind genauso wichtig wie die Auswahl der Primitive.</li>
    <li><strong>PKI gehört in die Architektur</strong>, nicht daneben.</li>
    <li><strong>Hybride Migration</strong> wird als reale Engineering-Phase behandelt.</li>
  </ul></div></figure>
</div>

## Algorithm Agility ohne die Illusion einer sofortigen Migration

Der Post-Quantum-Übergang ist kein Schalter, den jedes System gleichzeitig umlegen kann. Zertifikatsökosysteme, Protokolle, Hardware und Gegenstellen entwickeln sich unterschiedlich schnell. ZeroEcho hält daher klassische, Post-Quantum- und hybride Optionen im selben Engineering-Modell, statt eine Familie als vorübergehendes Nebenprojekt zu behandeln.

<div class="capability-lanes">
  <article><span>KLASSISCH</span><h3>Interoperabilität heute</h3><p>RSA, ECDSA, Ed25519/Ed448 und etablierte symmetrische Modi bleiben für Protokolle und Gegenstellen verfügbar, die auf ausgereifte klassische Kryptographie angewiesen sind.</p></article>
  <article><span>POST-QUANTUM</span><h3>Migration dort, wo sie passt</h3><p>ML-KEM und Post-Quantum-Signaturfamilien können über dasselbe Toolkit gewählt werden, ohne einen unabhängigen zweiten Application Stack zu benötigen.</p></article>
  <article><span>HYBRID</span><h3>Die Übergangsphase überbrücken</h3><p>Hybride Konstruktionen unterstützen Deployments, die Resilienz über Algorithmusfamilien hinweg wünschen, während Interoperabilität und Policy nachziehen.</p></article>
</div>

## Schlüsselmaterial bleibt hinter einer Grenze

Ein wiederkehrendes Designprinzip ist, dass höhere PKI-Services keine rohen privaten Schlüssel durch ihre APIs transportieren sollten. Schlüssel werden über stabile Referenzen adressiert; Signatur und Abruf öffentlicher Schlüssel erfolgen über eine Key-Material-Grenze. Dadurch kann sich die PKI-Schicht auf Zertifikate, Profile, Policy und Status konzentrieren, statt selbst zu einem zweiten Key Store zu werden.

<div class="feature-grid feature-grid--three">
  <article><h3>Explizite Schlüsselreferenzen</h3><p>Stabile Schlüssel-IDs erlauben Services kryptographische Operationen anzufordern, ohne privates Schlüsselmaterial wie gewöhnliche Anwendungsdaten zu behandeln.</p></article>
  <article><h3>Lifecycle-bewusste Operationen</h3><p>Länger laufende oder externe Signaturoperationen werden mit explizitem Zustand und Idempotenz modelliert, statt anzunehmen, dass jeder Provider-Call synchron endet.</p></article>
  <article><h3>Validierte Content-Grenzen</h3><p>Persistierte kryptographische Inhalte sind an Integritätsprüfungen und kontrollierte Referenzen gebunden, damit Recovery und Fortsetzung auditierbar bleiben.</p></article>
  <article><h3>Versionierte Algorithmusidentitäten</h3><p>Algorithmus- und Interoperabilitätsentscheidungen werden explizit repräsentiert, sodass deployte Defaults stabil bleiben können, während neue Kombinationen bewusst eingeführt werden.</p></article>
  <article><h3>Deterministische Konfiguration</h3><p>Konfiguration soll inspizierbar und reproduzierbar sein, statt von prozessweitem mutablem Provider-State abzuhängen.</p></article>
  <article><h3>Skriptbare Delivery</h3><p>Die CLI stellt automatisierten und Offline-Workflows dieselben zugrunde liegenden Fähigkeiten bereit, nicht eine separate Kryptographieimplementierung.</p></article>
</div>

## PKI ist Teil des aktuellen Systems

Die PKI-Schicht ist um Service-Verträge statt um ein universelles CA-Objekt strukturiert. Certificate Requests, Issuance, Revocation, Profile, Policy, Publication, Statusobjekte, Backup/Import-Export und Credential Inventory sind getrennt, damit sie unabhängig weiterentwickelt werden können und dennoch dieselben Storage- und Schlüsselgrenzen teilen.

<div class="pki-map">
  <article><strong>Zertifikats-Lifecycle</strong><span>Requests · Proof of Possession · Issuance · Revocation</span></article>
  <article><strong>Policy &amp; Profile</strong><span>freigegebene Algorithmus/Profil-Kombinationen · Gültigkeit · Metadaten</span></article>
  <article><strong>Status-Services</strong><span>OCSP-artiger Zertifikatsstatus · Time-Stamp-Service-Integration</span></article>
  <article><strong>Publication</strong><span>Zertifikats-/Statusartefakte und dauerhafte Content-Referenzen</span></article>
  <article><strong>Schlüsseloperationen</strong><span>privates Material bleibt innerhalb einer Key-Material-Provider-Grenze</span></article>
  <article><strong>Recovery</strong><span>Persistenz, Backup und restart-sichere Fortsetzung dauerhafter Operationen</span></article>
</div>

Das Ziel ist bewusst anspruchsvoller als „ein Zertifikat generieren“. Eine Produktions-PKI muss beantworten können, was beantragt und autorisiert wurde, welcher Schlüssel Besitz nachwies, welches Profil angewandt wurde, was persistiert wurde und wie Status nach einem Neustart rekonstruiert werden kann.

## Resiliente Datenworkflows

ZeroEcho behält auch seinen ursprünglichen betrieblichen Fokus: Multi-Recipient-Schutz, skriptbare Verschlüsselung und Signatur sowie Workflows, die keine permanente Konnektivität voraussetzen. Offline- oder indirekter Transport gilt als legitime Deployment-Bedingung; experimentelle Covert-Export-Techniken bleiben vom kryptographischen und PKI-Kern isoliert.

<div class="note-panel"><strong>Kryptographisches Deployment ist versionsabhängig.</strong> Algorithmen, Provider-Fähigkeiten und Protokollinteroperabilität ändern sich. Diese Portfolio-Seite erklärt das Engineering-Modell; Repository und generierte JavaDoc bleiben die maßgebliche Quelle für exakte APIs und Algorithmusverfügbarkeit in einer konkreten Release.</div>

## Projektressourcen

<div class="resource-grid resource-grid--three">
  <a href="https://www.egothor.org/ZeroEcho/"><strong>Projektwebsite</strong><span>Dokumentation und Projektübersicht ↗</span></a>
  <a href="https://www.egothor.org/ZeroEcho/developer/javadoc.html"><strong>JavaDoc-Übersicht</strong><span>API-Dokumentation nach Modul ↗</span></a>
  <a href="https://www.egothor.org/ZeroEcho/javadoc/ext/index.html"><strong>ext JavaDoc</strong><span>Modul-API: ext ↗</span></a>
  <a href="https://www.egothor.org/ZeroEcho/javadoc/pki-server/index.html"><strong>pki-server JavaDoc</strong><span>Modul-API: pki-server ↗</span></a>
  <a href="https://www.egothor.org/ZeroEcho/javadoc/api-spec/index.html"><strong>api-spec JavaDoc</strong><span>Modul-API: api-spec ↗</span></a>
  <a href="https://github.com/Egothor/ZeroEcho"><strong>Source-Repository</strong><span>Code, Release-Historie und Projektdokumentation ↗</span></a>
  <a href="https://www.egothor.org/ZeroEcho/javadoc/lib/index.html"><strong>Library JavaDoc</strong><span>Kern-API für Kryptographie ↗</span></a>
  <a href="https://www.egothor.org/ZeroEcho/javadoc/pki/index.html"><strong>PKI JavaDoc</strong><span>PKI-Service-API ↗</span></a>
  <a href="https://www.egothor.org/ZeroEcho/javadoc/app/index.html"><strong>Application JavaDoc</strong><span>CLI- und Anwendungsintegration ↗</span></a>
  <a href="https://www.researchgate.net/publication/396241638_ZeroEcho_No_Signal_Is_Ever_Truly_Silent_A_Modular_Toolkit_for_Covert_Resilient_and_Future-Proof_Communication"><strong>Projektpublikation</strong><span>Ursprünglicher Toolkit-Scope und Forschungskontext ↗</span></a>
  <a href="/de/projects/methodatlas/"><strong>MethodAtlas</strong><span>Evidence Packs mit ZeroEcho-Signaturen geschützt →</span></a>
</div>
