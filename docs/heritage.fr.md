---
title: Héritage
lang: fr
description: La lignée Egothor, du moteur de recherche original de 1998 aux systèmes distribués, au crawling, à la géolocalisation et aux plateformes de données jusqu’aux projets actuels.
wide: true
page_class: heritage-page
---

<section class="page-hero shell">
  <p class="eyebrow"><span></span> Héritage du projet</p>
  <h1>De l’infrastructure de recherche<br><em>à un laboratoire d’ingénierie plus large.</em></h1>
  <p class="page-lede">Egothor a commencé en 1998 comme projet de moteur de recherche. Avec le temps, le même programme d’ingénierie a exploré traitement du langage, services distribués, crawling, géolocalisation réseau, passerelles de capteurs et plateformes expérimentales de données. Cette page conserve cette lignée sans présenter les systèmes retirés comme des produits actuels.</p>
</section>

<section class="lineage shell" aria-label="Lignée des projets Egothor"><img src="/fr/assets/images/heritage-line.svg" alt="Chronologie abstraite reliant les familles de projets Egothor de 1998 à aujourd’hui"></section>

## Lignée principale

<div class="heritage-grid">
  <article id="egothor-search"><div class="heritage-date">1998–2018</div><h3>Egothor Search Engine</h3><p>Moteur Java open source de recherche plein texte avec mises à jour dynamiques de l’index, transactions, détection de plagiat, mises à jour incrémentales, formats courants, modèle booléen étendu et stemming indépendant de la langue.</p><a href="#egothor-search">Résumé historique ↑</a></article>
  <article id="j5m"><div class="heritage-date">2007–2015</div><h3>J5M</h3><p>Couche légère d’application distribuée fondée sur des services coopérants, la découverte d’objets distants, l’invocation locale ou distante, le contrôle du cycle de vie et des instances de secours à chaud.</p><a href="#j5m">Résumé historique ↑</a></article>
  <article id="bobo"><div class="heritage-date">2012–2014</div><h3>Bobo</h3><p>Plateforme distribuée de crawling et d’entités virtuelles, issue des besoins de crawling d’Egothor puis généralisée pour des composants autonomes exposés au web.</p></article>
  <article id="galeo"><div class="heritage-date">2013–2014</div><h3>Galeo</h3><p>Recherche en géolocalisation IP avec un modèle traitant les chemins réseau comme hétérogènes plutôt que comme une propagation constante uniforme.</p><a href="/research/galeo.pdf">Galeo: Continuous Bayesian Topology-Aware IP Geolocation (PDF)</a> · <a href="https://doi.org/10.13140/RG.2.2.36764.45443">DOI: 10.13140/RG.2.2.36764.45443</a></article>
  <article id="qid"><div class="heritage-date">2012 → 2022</div><h3>Egothor3 / Q!D</h3><p>Direction expérimentale de bases de données initiée en 2012 ; l’implémentation Q!D ultérieure utilisait J5M pour explorer des modèles alternatifs de traitement de grandes collections.</p></article>
  <article><div class="heritage-date">2025–2026 →</div><h3>Génération Egothor actuelle</h3><p>Radixor renouvelle la ligne langage, ZeroEcho l’étend à la cryptographie moderne, conflux apporte une infrastructure ciblée, MethodAtlas applique l’ingénierie orientée preuves à l’assurance logicielle et EGOTHOR v4 ramène la famille à la recherche plein texte pour environnements réglementés.</p><a href="/fr/projects/">Projets actuels →</a></article>
</div>

## Systèmes appliqués

La famille élargie a aussi inclus des systèmes autour des réseaux, capteurs et acquisition de données. La liste historique de Leo Galamboš mentionne **SNOG** (passerelle de réseau de capteurs), **SafetyCare** (application d’assistance GPS/GSM), **Cyclone** (crawler/analyseur distribué) et **RaSPEL** (pont/contrôleur LoRaWAN vers REST).

<div class="note-panel"><strong>Contexte historique.</strong> Les descriptions ont été réécrites pour la clarté et le contexte actuel. Les dates et éléments techniques principaux proviennent des pages Egothor conservées et de l’historique de projets publié par Leo Galamboš.</div>

## Ce qui a traversé le temps

Les systèmes sont différents, mais plusieurs idées reviennent : déplacer la complexité hors des chemins critiques ; rendre le comportement des services explicite ; préférer des structures compactes ; laisser les composants évoluer indépendamment ; conserver suffisamment de preuves techniques pour qu’un autre ingénieur puisse contester une affirmation.
