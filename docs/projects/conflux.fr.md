---
title: conflux
lang: fr
description: conflux est une petite bibliothèque Java thread-safe de coordination qui fournit des valeurs de contexte partagé typées et des événements de changement sans imposer de framework applicatif.
wide: true
page_class: project-detail project-conflux
---

<section class="project-hero shell">
  <div><p class="eyebrow"><span></span> Infrastructure Java · Egothor</p><div class="project-title-row"><img src="/assets/images/conflux-mark.svg" alt="" width="86" height="86"><h1>conflux</h1></div><p class="page-lede">Une bibliothèque Java volontairement réduite pour les cas où des composants indépendants doivent partager un peu d’état typé et réagir à ses changements — sans transformer ce besoin de coordination en framework d’injection de dépendances ou en architecture d’application.</p><div class="hero-actions"><a class="button button--primary" href="https://github.com/Egothor/conflux">Ouvrir le dépôt ↗</a><a class="button button--quiet" href="https://www.egothor.org/conflux/javadoc/">JavaDoc ↗</a></div></div>
  <div class="metric-panel"><div><strong>Typed</strong><span>clés partagées</span><small>un nom de clé reste associé à un type Java cohérent</small></div><div><strong>Thread-safe</strong><span>coordination</span><small>stockage et listeners conçus pour l’usage concurrent</small></div><div><strong>Weak</strong><span>listeners</span><small>les références faibles évitent qu’une souscription retienne accidentellement un objet</small></div><div><strong>Small</strong><span>surface API</span><small>une primitive de coordination, pas un framework de remplacement</small></div></div>
</section>

## Le petit problème qui devient souvent un grand graphe de dépendances

Un composant calcule une valeur. Plusieurs composants sans lien direct ont besoin de la valeur courante, et certains doivent réagir immédiatement à son changement. La solution naïve consiste à câbler des références partout ; la solution « entreprise » peut importer un framework entier. conflux occupe volontairement l’espace entre les deux.

<div class="architecture-flow" aria-label="Modèle de coordination conflux"><span><b>Producteur</b><small>écrit une valeur typée</small></span><i>→</i><span><b>Contexte partagé</b><small>stocke l’état courant</small></span><i>→</i><span><b>Événement</b><small>notifie les abonnés</small></span><i>→</i><span><b>Consommateurs</b><small>réagissent indépendamment</small></span></div>

<div class="figure-gallery figure-gallery--wide-first"><figure class="figure-card"><img src="/assets/images/project-conflux-team.png" alt="Ingénieurs discutant d’une coordination logicielle légère sur un tableau blanc tandis que code et dashboards sont visibles à proximité."><figcaption><strong>conflux résout un problème d’intégration modeste mais récurrent.</strong> Des modules indépendants ont besoin d’un point léger pour échanger un état typé actuel et publier des événements.</figcaption></figure><figure class="figure-card figure-card--note"><div class="figure-callout"><span>Utile quand il faut de la coordination, pas un framework</span><ul><li><strong>Clés typées</strong> pour réduire les incohérences d’intégration.</li><li><strong>Valeur courante + événements</strong> pour de nombreux cas UI et infrastructure.</li><li><strong>Listeners faibles</strong> pour limiter la rétention accidentelle.</li><li><strong>Périmètre réduit</strong> pour une intégration facile dans des systèmes plus vastes.</li></ul></div></figure></div>

## Un contexte typé plutôt qu’une map gouvernée par des chaînes

Le contexte utilise des clés typées : le contrat comprend le nom et le type Java attendu. Un même nom ne peut pas signifier silencieusement `Integer` dans un composant et `String` dans un autre. L’état partagé devient plus facile à raisonner et une classe fréquente d’erreurs est rapprochée du point de déclaration.

<div class="code-panel"><div class="code-panel__top"><span>API conceptuelle</span><small>état partagé typé</small></div><pre><code>Key&lt;Integer&gt; COUNT = Key.of("count", Integer.class);

Ctx.INSTANCE.put(COUNT, 42);
int current = Ctx.INSTANCE.get(COUNT);

Ctx.INSTANCE.addListener(COUNT, value -&gt; refreshView(value));</code></pre></div>

<div class="feature-grid"><article><h3>État courant partagé</h3><p>Les composants récupèrent la valeur sans connaître le producteur ni transporter sa référence dans toute l’application.</p></article><article><h3>Notification de changement</h3><p>Les listeners réagissent aux mises à jour, évitant le polling continu pour les consommateurs orientés événements.</p></article><article><h3>Références faibles</h3><p>Une souscription oubliée ne doit pas automatiquement faire de l’event bus le propriétaire de la durée de vie de chaque listener.</p></article><article><h3>Usage concurrent</h3><p>L’implémentation utilise collections concurrentes et gestion copy-on-write pour rester utilisable entre threads applicatifs.</p></article></div>

## Volontairement pas un framework applicatif

conflux ne cherche pas à gérer construction d’objets, configuration, scheduling ni logique métier. Sa valeur est au contraire un contrat étroit à ajouter lorsqu’un petit nombre de modules indépendants ont besoin d’un point commun.

<div class="principle-strip"><span><b>À utiliser pour</b><small>petit état partagé · notifications de composants · coordination inter-modules</small></span><span><b>À ne pas transformer en</b><small>service locator universel · couche de persistance · broker distribué</small></span></div>

Ce périmètre réduit permet aussi d’utiliser la bibliothèque comme infrastructure d’un système plus large : elle résout un problème de coordination et laisse l’architecture à l’application.

## Ressources du projet

<div class="resource-grid resource-grid--three"><a href="https://github.com/Egothor/conflux"><strong>Dépôt source</strong><span>Code, tags, releases et README ↗</span></a><a href="https://www.egothor.org/conflux/javadoc/"><strong>JavaDoc</strong><span>Référence API publique ↗</span></a><a href="https://www.egothor.org/conflux/"><strong>Site du projet</strong><span>Documentation et présentation du projet ↗</span></a></div>
