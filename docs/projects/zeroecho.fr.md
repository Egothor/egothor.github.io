---
title: ZeroEcho
lang: fr
description: ZeroEcho est un toolkit cryptographique et PKI modulaire en Java qui associe capacités classiques, post-quantiques et hybrides à des frontières explicites de clés et de workflow.
wide: true
page_class: project-detail project-zeroecho
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Systèmes cryptographiques · Egothor</p>
    <div class="project-title-row"><img src="/assets/images/zeroecho-mark.svg" alt="" width="86" height="86"><h1>ZeroEcho</h1></div>
    <p class="page-lede">Un toolkit Java modulaire pour construire des workflows cryptographiques et PKI exigeant des choix algorithmiques explicites, des frontières de clés contrôlées et une trajectoire d’évolution de la cryptographie classique vers des déploiements post-quantiques et hybrides.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://gitea.egothor.org/Egothor/ZeroEcho">Ouvrir le dépôt ↗</a><a class="button button--quiet" href="https://www.egothor.org/javadoc/zeroecho/lib/">JavaDoc de la bibliothèque ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>PQC</strong><span>algorithmes de l’ère NIST</span><small>ML-KEM et familles de signatures post-quantiques dans l’inventaire actif</small></div>
    <div><strong>Hybride</strong><span>modèle de migration</span><small>mécanismes classiques et post-quantiques peuvent coexister lorsque l’interopérabilité l’exige</small></div>
    <div><strong>PKI</strong><span>couche de services</span><small>émission, révocation, statut et publication font partie de l’architecture</small></div>
    <div><strong>Offline</strong><span>workflows opérationnels</span><small>conçu pour les scénarios scriptables, contraints ou connectés</small></div>
  </div>
</section>

## La cryptographie comme architecture, pas comme sac d’algorithmes

ZeroEcho est parti d’un besoin pratique : rendre la cryptographie moderne utilisable dans des workflows applicatifs répétables sans cacher les décisions critiques dans un état global ou une commande monolithique. Le résultat est un toolkit en couches où algorithmes, clés, contenu protégé, services PKI et intégration applicative possèdent des frontières explicites.

<div class="architecture-flow architecture-flow--five" aria-label="Architecture ZeroEcho">
  <span><b>Algorithmes</b><small>classique · PQC · hybride</small></span><i>→</i>
  <span><b>Frontière de clés</b><small>références, pas de matériau privé libre</small></span><i>→</i>
  <span><b>Workflows crypto</b><small>chiffrer · signer · vérifier</small></span><i>→</i>
  <span><b>Services PKI</b><small>émettre · révoquer · statut</small></span><i>→</i>
  <span><b>Applications</b><small>CLI · automatisation · intégration</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-zeroecho-team.png" alt="Ingénieurs en cryptographie et systèmes travaillant avec dashboards PKI, instruments de signaux radio et analyses de workflows sécurisés.">
    <figcaption><strong>Une vue architecturale est souvent plus claire qu’une liste de fonctions.</strong> ZeroEcho relie familles d’algorithmes, garde des clés, opérations cryptographiques et services PKI dans un modèle système contrôlable.</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout"><span>Idées opérationnelles derrière le projet</span><ul>
      <li><strong>L’agilité algorithmique</strong> signifie des choix explicites, pas des defaults cachés.</li>
      <li><strong>Les frontières de clés</strong> comptent autant que le choix des primitives.</li>
      <li><strong>La PKI appartient à l’architecture</strong>, pas à côté d’elle.</li>
      <li><strong>La migration hybride</strong> est traitée comme une véritable phase d’ingénierie.</li>
    </ul></div>
  </figure>
</div>

## Agilité algorithmique sans prétendre que la migration est instantanée

La transition post-quantique n’est pas un drapeau que chaque système peut basculer simultanément. Écosystèmes de certificats, protocoles, matériel et contreparties évoluent à des rythmes différents. ZeroEcho conserve donc les options classiques, post-quantiques et hybrides dans le même modèle d’ingénierie au lieu de traiter une famille comme un projet annexe temporaire.

<div class="capability-lanes">
  <article><span>CLASSIQUE</span><h3>Interopérabilité aujourd’hui</h3><p>RSA, ECDSA, Ed25519/Ed448 et les modes symétriques établis restent disponibles pour les protocoles et contreparties qui dépendent d’une cryptographie classique mature.</p></article>
  <article><span>POST-QUANTIQUE</span><h3>Migrer là où cela convient</h3><p>ML-KEM et les familles de signatures post-quantiques peuvent être sélectionnés via le même toolkit plutôt que d’exiger une pile applicative sans rapport.</p></article>
  <article><span>HYBRIDE</span><h3>Faire le pont pendant la transition</h3><p>Les constructions hybrides soutiennent les déploiements qui recherchent de la résilience entre familles d’algorithmes pendant que l’interopérabilité et les politiques rattrapent leur retard.</p></article>
</div>

## Le matériau de clé reste derrière une frontière

Un principe récurrent est que les services PKI de haut niveau ne devraient pas transporter des clés privées brutes dans leurs API. Les clés sont adressées par des références stables ; la signature et la récupération de clés publiques passent par une frontière de matériau cryptographique. La couche PKI peut ainsi rester concentrée sur certificats, profils, politique et statut au lieu de devenir un second key store.

<div class="feature-grid feature-grid--three">
  <article><h3>Références de clés explicites</h3><p>Des identifiants stables permettent aux services de demander des opérations cryptographiques sans traiter les clés privées comme des données applicatives ordinaires.</p></article>
  <article><h3>Opérations sensibles au cycle de vie</h3><p>Les signatures longues ou externes sont modélisées avec état explicite et idempotence plutôt que de supposer que chaque appel fournisseur termine synchroniquement.</p></article>
  <article><h3>Frontières de contenu validées</h3><p>Le contenu cryptographique persistant est lié à des contrôles d’intégrité et des références contrôlées afin que reprise et continuation restent auditables.</p></article>
  <article><h3>Identités algorithmiques versionnées</h3><p>Les choix d’algorithmes et d’interopérabilité sont représentés explicitement : les defaults déployés peuvent rester stables tandis que de nouvelles combinaisons sont introduites délibérément.</p></article>
  <article><h3>Configuration déterministe</h3><p>La configuration est pensée pour être inspectable et reproductible plutôt que de dépendre d’un état fournisseur mutable à l’échelle du processus.</p></article>
  <article><h3>Livraison scriptable</h3><p>La CLI expose les mêmes capacités fondamentales aux workflows automatisés et offline, pas une implémentation cryptographique séparée.</p></article>
</div>

## La PKI fait partie du système actuel

La couche PKI est organisée autour de contrats de services plutôt que d’un objet CA universel. Demandes de certificats, émission, révocation, profils, politique, publication, objets de statut, sauvegarde/import-export et inventaire d’identifiants sont séparés afin d’évoluer indépendamment tout en partageant les mêmes frontières de stockage et de clés.

<div class="pki-map">
  <article><strong>Cycle de vie du certificat</strong><span>demandes · preuve de possession · émission · révocation</span></article>
  <article><strong>Politique et profils</strong><span>combinaisons algorithme/profil approuvées · validité · métadonnées</span></article>
  <article><strong>Services de statut</strong><span>statut de certificat type OCSP · intégration de service d’horodatage</span></article>
  <article><strong>Publication</strong><span>artefacts certificat/statut et références de contenu durables</span></article>
  <article><strong>Opérations de clés</strong><span>le matériau privé reste dans une frontière fournisseur dédiée</span></article>
  <article><strong>Reprise</strong><span>persistance, sauvegarde et continuation sûre après redémarrage</span></article>
</div>

L’objectif est volontairement plus exigeant que « générer un certificat ». Une PKI de production doit pouvoir répondre à ce qui a été demandé, autorisé, quelle clé a prouvé la possession, quel profil a été appliqué, ce qui a été persisté et comment le statut peut être reconstruit après redémarrage.

## Workflows de données résilients

ZeroEcho conserve aussi son orientation opérationnelle initiale : protection multi-destinataires, chiffrement et signature scriptables, et workflows qui ne supposent pas une connectivité permanente. Le transport offline ou indirect est traité comme une condition de déploiement légitime, tandis que les techniques expérimentales d’export covert restent isolées du cœur cryptographique et PKI.

<div class="note-panel"><strong>Le déploiement cryptographique dépend de la version.</strong> Algorithmes, capacités des providers et interopérabilité des protocoles changent avec le temps. Cette page explique le modèle d’ingénierie ; le dépôt et la JavaDoc générée restent la source de vérité pour les API exactes et les algorithmes disponibles dans une release donnée.</div>

## Ressources du projet

<div class="resource-grid resource-grid--three">
  <a href="https://gitea.egothor.org/Egothor/ZeroEcho"><strong>Dépôt source</strong><span>Code, historique des releases et documentation ↗</span></a>
  <a href="https://www.egothor.org/javadoc/zeroecho/lib/"><strong>JavaDoc bibliothèque</strong><span>API cryptographique centrale ↗</span></a>
  <a href="https://www.egothor.org/javadoc/zeroecho/pki/"><strong>JavaDoc PKI</strong><span>API des services PKI ↗</span></a>
  <a href="https://www.egothor.org/javadoc/zeroecho/app/"><strong>JavaDoc application</strong><span>CLI et intégration applicative ↗</span></a>
  <a href="https://www.researchgate.net/publication/396241638_ZeroEcho_No_Signal_Is_Ever_Truly_Silent_A_Modular_Toolkit_for_Covert_Resilient_and_Future-Proof_Communication"><strong>Publication du projet</strong><span>Périmètre initial et contexte de recherche ↗</span></a>
  <a href="/fr/projects/methodatlas/"><strong>MethodAtlas</strong><span>Paquets de preuves protégés par des signatures ZeroEcho →</span></a>
</div>
