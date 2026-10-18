---
title: MethodAtlas
lang: fr
description: MethodAtlas transforme le code source des tests existants en inventaires déterministes, classification de sécurité assistée par IA facultative et preuves d’audit reproductibles dans huit langages.
wide: true
page_class: project-detail project-methodatlas
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Assurance logicielle · Open source</p>
    <div class="project-title-row"><img src="/assets/images/methodatlas-mark.svg" alt="" width="86" height="86"><h1>MethodAtlas</h1></div>
    <p class="page-lede">Une cartographie au niveau du code source de ce que contient réellement une suite de tests, enrichie — lorsque cela apporte de la valeur — par une classification de sécurité, un mapping vers les contrôles et des preuves de revue. L’inventaire déterministe reste distinct de l’interprétation par IA afin que le résultat demeure inspectable et reproductible.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://accenture.github.io/MethodAtlas/">Lire la documentation ↗</a><a class="button button--quiet" href="https://github.com/Accenture/MethodAtlas">Dépôt GitHub ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>8</strong><span>langages</span><small>découverte de tests dans les langages courants, de script et d’entreprise</small></div>
    <div><strong>SARIF 2.1</strong><span>sortie CI</span><small>intégration native avec les outils de sécurité et de développement</small></div>
    <div><strong>170+</strong><span>motifs d’identifiants</span><small>catalogue déterministe de candidats secrets avant triage IA facultatif</small></div>
    <div><strong>Signés</strong><span>paquets de preuves</span><small>bundles de revue inviolables avec signatures classiques, PQC ou hybrides</small></div>
  </div>
</section>

## Du code source à une preuve défendable

Une exécution de tests réussie répond à la question « les tests passent-ils ? ». L’assurance pose d’autres questions : **Quels tests existent ? Lesquels exercent des propriétés de sécurité ? Quels contrôles soutiennent-ils ? Qu’est-ce qui a changé depuis la dernière revue ? Peut-on reproduire la preuve ?** MethodAtlas cible précisément cet écart.

<div class="architecture-flow architecture-flow--five" aria-label="Workflow de preuve MethodAtlas">
  <span><b>Arbre source</b><small>code de test existant</small></span><i>→</i>
  <span><b>Découverte</b><small>parseurs déterministes</small></span><i>→</i>
  <span><b>Enrichissement</b><small>IA et taxonomie facultatives</small></span><i>→</i>
  <span><b>Revue</b><small>overrides et détection de dérive</small></span><i>→</i>
  <span><b>Preuve</b><small>SARIF · couverture · paquets signés</small></span>
</div>

L’architecture traite délibérément **la découverte des méthodes comme un problème d’analyse structurelle du code, et non comme un problème d’IA**. L’IA peut classer la pertinence sécurité, suggérer des tags ou aider au triage, mais elle reste une étape d’enrichissement explicite superposée à un inventaire déterministe.

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-methodatlas-team.png" alt="Professionnels de l’assurance logicielle examinant inventaires de tests, étapes de workflow et tableaux de bord de preuves.">
    <figcaption><strong>Conçu pour la revue, pas uniquement pour l’automatisation.</strong> MethodAtlas est particulièrement utile lorsqu’il faut expliquer comment le résultat a été produit et à quel moment le jugement humain est intervenu.</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>Pourquoi ce workflow est pratique dans une livraison réglementée</span>
      <ul>
        <li><strong>Les tests existants gardent leur valeur</strong>, car l’outil inventorie ce qui existe déjà.</li>
        <li><strong>L’IA reste facultative</strong> au lieu d’être l’unique moyen d’obtenir un résultat.</li>
        <li><strong>La revue est explicite</strong> avant que les tags ou preuves soient considérés comme autoritatifs.</li>
        <li><strong>Les sorties s’intègrent aux pipelines</strong> via SARIF, CSV, matrices de couverture et paquets signés.</li>
      </ul>
    </div>
  </figure>
</div>

## Huit langages, un seul modèle de preuve

<div class="language-matrix">
  <article><strong>Java</strong><span>JUnit 5 · JUnit 4 · TestNG</span><small>découverte AST · réécriture du source</small></article>
  <article><strong>C#</strong><span>xUnit · NUnit · MSTest</span><small>découverte par grammaire · réécriture du source</small></article>
  <article><strong>TypeScript / JavaScript</strong><span>Jest · Vitest · Mocha</span><small>découverte par plugin</small></article>
  <article><strong>Go</strong><span>package testing</span><small>découverte par plugin</small></article>
  <article><strong>Python</strong><span>pytest</span><small>découverte par plugin</small></article>
  <article><strong>PowerShell</strong><span>Pester</span><small>découverte par plugin</small></article>
  <article><strong>SAP ABAP</strong><span>ABAP Unit · ecATT</span><small>inventaire de tests d’entreprise</small></article>
  <article><strong>COBOL</strong><span>MFUnit · COBOL-Check</span><small>inventaire de tests d’entreprise</small></article>
</div>

Les plugins produisent un enregistrement commun au niveau méthode. Cette forme commune permet de garder le même workflow d’assurance lorsqu’un portefeuille couvre services modernes, scripts et plateformes d’entreprise de longue durée.

## Des capacités de preuve, pas seulement une classification

<div class="feature-grid feature-grid--three">
  <article><h3>Taxonomie de sécurité</h3><p>La classification assistée par IA peut mapper les tests vers une taxonomie fermée et versionnée, ou vers une taxonomie personnalisée alignée sur le référentiel de contrôles de l’organisation.</p></article>
  <article><h3>Confiance et files de revue</h3><p>Les scores de confiance par méthode permettent seuils et files de revue humaine plutôt que d’imposer un modèle binaire « l’IA dit oui/non ».</p></article>
  <article><h3>Empreintes de contenu</h3><p>Les empreintes SHA-256 du source permettent d’identifier les classes inchangées, de réutiliser des résultats IA et de démontrer que la preuve provient du même contenu de test.</p></article>
  <article><h3>Rapports delta</h3><p>Deux inventaires peuvent être comparés pour montrer les méthodes ajoutées, supprimées ou modifiées — utile pour les preuves de release et les gates de régression CI.</p></article>
  <article><h3>Couverture des contrôles</h3><p>Les tags peuvent être associés aux identifiants de contrôles fournis par l’utilisateur afin que la sortie révèle les lacunes de couverture plutôt que de confondre nombre de tests et assurance.</p></article>
  <article><h3>Reçus de reproductibilité</h3><p>Les entrées ayant influencé un scan — y compris les templates de prompts LLM effectifs — peuvent être fingerprintées afin qu’un futur reviewer puisse reconstruire ce qui a produit le résultat.</p></article>
</div>

## L’IA est facultative — et bornée

MethodAtlas prend en charge l’inférence locale via Ollama, des fournisseurs cloud et un workflow manuel en deux phases pour les environnements où le code source ne peut pas être envoyé à une API externe. Les overrides validés par un humain sont persistants, et la réécriture du source reste séparée de la classification afin que les changements puissent être revus avant d’atteindre le code.

<div class="evidence-path">
  <article><span>01</span><div><strong>Base déterministe</strong><p>Découvrir méthodes de test, métadonnées de framework, emplacements et identité du source sans LLM.</p></div></article>
  <article><span>02</span><div><strong>Interprétation facultative</strong><p>Ajouter pertinence sécurité, tags de taxonomie, justification et confiance via IA locale, cloud ou manuelle.</p></div></article>
  <article><span>03</span><div><strong>Autorité humaine</strong><p>Revoir, corriger et persister les décisions ; détecter la dérive entre annotations du source et classification ultérieure.</p></div></article>
  <article><span>04</span><div><strong>Sortie auditable</strong><p>Émettre enregistrements adaptés à la CI, couverture de contrôles, reçus ou paquets de preuves inviolables.</p></div></article>
</div>

## Détection des identifiants comme signal déterministe distinct

Le même pipeline d’assurance peut rechercher des candidats identifiants dans le source. La découverte s’appuie sur un catalogue déterministe de plus de 170 formats d’identifiants fournisseurs ; les valeurs sont masquées par défaut. Lorsque l’IA est activée, elle intervient en aval pour estimer la crédibilité et rattacher le candidat à l’endpoint qu’il semble authentifier — elle n’invente pas la correspondance initiale.

<div class="note-panel"><strong>Pourquoi cette séparation compte.</strong> Dans une revue réglementée, « le modèle l’a trouvé » est une provenance faible. MethodAtlas garde découverte déterministe, interprétation probabiliste facultative et décisions humaines comme étapes distinctes afin que chacune puisse être contestée indépendamment.</div>

## Revue interactive pour ceux qui ne veulent pas d’un workflow uniquement CLI

Le GUI desktop fournit un workflow orienté reviewer autour du même modèle : navigation du source, coloration syntaxique, arbres de résultats classe/méthode, décisions de tags, changements stagés et réécriture groupée. Les actions de revue créent des CSV de preuve et des overrides persistants : une décision GUI ne reste donc pas un état transitoire sur un poste.

<div class="feature-grid">
  <article><h3>Changements de source stagés</h3><p>Les annotations suggérées peuvent être revues et préparées en mémoire avant qu’une opération explicite « Save All Changes » ne les écrive dans le source.</p></article>
  <article><h3>Piste d’audit</h3><p>Les décisions sont enregistrées comme preuves horodatées et overrides réutilisables, en conservant la distinction entre suggestion machine et décision humaine.</p></article>
  <article><h3>Profils IA</h3><p>Des profils fournisseurs nommés permettent de basculer entre inférence locale et distante sans intégrer ce choix au moteur de découverte.</p></article>
  <article><h3>Sélection des plugins</h3><p>Les plugins de découverte peuvent être activés par exécution afin de limiter un dépôt hétérogène aux langages pertinents pour la revue.</p></article>
</div>

## Paquets de preuves et ZeroEcho

Les paquets de preuves regroupent les sorties du scan dans un répertoire inviolable accompagné d’un manifeste SHA-256. Lorsqu’une signature est demandée, MethodAtlas peut utiliser **ZeroEcho** pour produire des signatures classiques, post-quantiques ou hybrides. C’est une connexion pratique entre deux thèmes Egothor : découvrir une preuve d’assurance, puis protéger l’intégrité de son paquet.

## Lignée du projet

MethodAtlas a commencé par une base open source développée par **Egothor**. **Accenture a ensuite étendu cette base** avec des capacités supplémentaires, et le projet public enrichi est aujourd’hui publié dans l’organisation GitHub d’Accenture. Il s’agit d’une filiation de projet ; elle n’est pas présentée ici comme un partenariat institutionnel ni comme un endorsement. Le projet public est sous **Apache License, Version 2.0**.

## Ressources du projet

<div class="resource-grid resource-grid--three">
  <a href="https://accenture.github.io/MethodAtlas/"><strong>Documentation</strong><span>Concepts, workflows et référence CLI ↗</span></a>
  <a href="https://github.com/Accenture/MethodAtlas"><strong>Dépôt source</strong><span>Source public, issues et releases ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/cli-reference/"><strong>Référence CLI</strong><span>Options de ligne de commande et modes de sortie ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/concepts/"><strong>Concepts</strong><span>Modèle de preuve et d’analyse de sécurité ↗</span></a>
  <a href="/fr/projects/zeroecho/"><strong>ZeroEcho</strong><span>Signature cryptographique des paquets de preuves →</span></a>
  <a href="/fr/expertise/"><strong>Assurance logicielle</strong><span>Contexte d’ingénierie Egothor →</span></a>
</div>
