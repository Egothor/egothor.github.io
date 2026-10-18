---
title: EGOTHOR v4
lang: fr
description: EGOTHOR v4 est une nouvelle génération d’infrastructure de recherche Egothor pour environnements réglementés, associant récupération déterministe et divulgation sensible à l’autorisation.
wide: true
page_class: project-detail project-egothor-v4
---

<section class="project-hero shell"><div><p class="eyebrow"><span></span> Recherche réglementée · Bêta privée · Open source prévu</p><div class="project-title-row"><img src="/assets/images/egothor-v4-mark.svg" alt="" width="86" height="86"><h1>EGOTHOR v4</h1></div><p class="page-lede">Une nouvelle génération d’infrastructure Egothor pour les environnements où la pertinence ne résout que la moitié du problème. Avant qu’un résultat puisse être divulgué, la recherche doit aussi respecter visibilité, clearance, classification, intégrité, compartiments et frontières de conflit.</p><div class="hero-actions"><span class="button button--status">Bêta privée</span><a class="button button--quiet" href="/fr/heritage/">Explorer la lignée Egothor</a></div></div><div class="metric-panel"><div><strong>Resident</strong><span>noyau de recherche</span><small>chemin de lecture compact pour une récupération prévisible en processus</small></div><div><strong>Top-K</strong><span>résultats déterministes</span><small>classement stable et sélection comme contrats explicites</small></div><div><strong>Policy</strong><span>divulgation maîtrisée</span><small>la récupération s’inscrit dans un modèle de gouvernance de l’information</small></div><div><strong>OSS</strong><span>publication prévue</span><small>le code public suivra la phase de durcissement de la bêta privée</small></div></div></section>

## Rechercher lorsqu’une correspondance n’est pas automatiquement divulguable

La recherche d’entreprise traditionnelle demande souvent si un utilisateur peut entrer dans une application, puis interroge l’index disponible. Un système réglementé doit poser une question plus précise : **ce sujet peut-il recevoir ce résultat particulier, dans ce contexte, sans franchir une frontière de classification, de compartiment ou de conflit ?**

EGOTHOR v4 est conçu autour de cette distinction. L’identité et le MFA établissent qui interroge ; la récupération trouve ce qui correspond ; la politique d’information décide ce qui peut être exposé. La frontière de divulgation reste visible au lieu d’être cachée dans un filtre de présentation après une recherche sans restriction.

<div class="architecture-flow architecture-flow--five" aria-label="Chemin de récupération EGOTHOR v4"><span><b>Ingestion</b><small>assembler des barrels recherchables</small></span><i>→</i><span><b>Vue résidente</b><small>structures compactes et immuables</small></span><i>→</i><span><b>Requête</b><small>matching déterministe</small></span><i>→</i><span><b>Contexte de politique</b><small>contraintes sujet et information</small></span><i>→</i><span><b>Divulgation</b><small>résultats Top-K autorisés</small></span></div>

<div class="figure-gallery figure-gallery--wide-first"><figure class="figure-card"><img src="/assets/images/project-egothor-v4-team.png" alt="Spécialistes ingénierie et sécurité examinant un workflow de recherche réglementée et un dashboard de divulgation."><figcaption><strong>La distinction centrale est simple.</strong> La recherche identifie les correspondances ; la divulgation réglementée décide ce qui peut réellement être montré à un sujet donné.</figcaption></figure><figure class="figure-card figure-card--note"><div class="figure-callout"><span>Ce qui diffère d’une recherche d’entreprise ordinaire</span><ul><li><strong>La politique n’est pas un filtre cosmétique tardif.</strong></li><li><strong>La récupération résidente reste déterministe</strong> pour pouvoir être testée et raisonnée.</li><li><strong>La divulgation fait partie de la correction</strong> lorsque classes et compartiments comptent.</li><li><strong>Sécurité et récupération</strong> restent deux préoccupations visibles.</li></ul></div></figure></div>

## Un noyau de recherche avec des invariants explicites

Le travail actuel sépare l’assemblage de l’index de l’interrogation résidente. Le chemin d’écriture peut construire et valider les structures, tandis que le chemin de lecture critique fonctionne sur des représentations compactes à sémantique prévisible.

<div class="feature-grid feature-grid--three"><article><h3>Récupération résidente</h3><p>La recherche utilise une représentation dédiée à la lecture plutôt que de mêler mutations d’indexation et chemin critique.</p></article><article><h3>Top-K déterministe</h3><p>Classement et égalités deviennent des contrats reproductibles : même état, même requête, même ordre stable.</p></article><article><h3>Visibilité des documents actifs</h3><p>La visibilité peut changer sans prétendre que des enregistrements supprimés ou remplacés restent éligibles.</p></article><article><h3>Ingestion streaming</h3><p>La construction s’appuie sur assemblage de barrels et publication contrôlée plutôt que sur une construction monolithique en mémoire.</p></article><article><h3>Frontières d’API</h3><p>Ingestion, accès résident et requêtes restent séparés afin que performance ou stockage ne redéfinissent pas silencieusement la sémantique.</p></article><article><h3>Ingénierie orientée preuves</h3><p>Tests et benchmarks font partie du contrat, y compris la distinction entre API publique et performance en régime stable.</p></article></div>

## La politique de récupération n’est pas ajoutée après coup

Le noyau et le modèle de contrôle répondent à des questions différentes et nécessitent des preuves différentes. Le noyau établit la correction du matching et du classement ; la politique détermine si un enregistrement correspondant peut être divulgué au sujet effectif.

<div class="regulated-stack" aria-label="Couches de contrôle EGOTHOR v4"><article><span>01</span><div><b>Identité</b><small>Connexion, MFA et contexte du sujet authentifié.</small></div></article><article><span>02</span><div><b>Politique d’information</b><small>Clearance, classification, intégrité, compartiments, conflits.</small></div></article><article><span>03</span><div><b>Récupération</b><small>Index et requêtes déterministes avec contrat de résultat contrôlé.</small></div></article><article><span>04</span><div><b>Divulgation</b><small>Seuls les résultats autorisés par les règles applicables sont exposés.</small></div></article></div>

<div class="policy-grid"><article><strong>Clearance</strong><p>Quel niveau d’information le sujet est-il autorisé à recevoir ?</p></article><article><strong>Classification</strong><p>Quelle classe de traitement s’applique au document ou à la collection ?</p></article><article><strong>Intégrité</strong><p>Quelles conditions de confiance doivent être satisfaites avant utilisation ?</p></article><article><strong>Compartiments</strong><p>Quels domaines doivent rester séparés même dans le même service ?</p></article><article><strong>Frontières de conflit</strong><p>Quelles combinaisons ne doivent pas être divulguées ensemble même si chaque élément est accessible séparément ?</p></article><article><strong>Politique opérationnelle</strong><p>Comment les changements d’identité, d’administration et de politique deviennent-ils observables et auditables ?</p></article></div>

## Ce que la bêta privée doit démontrer

La bêta n’est pas seulement un jalon UI. C’est l’étape où mécanique de recherche et frontières de sécurité doivent fonctionner comme un seul système opérationnel : accès authentifié, cycle de vie d’index, comportement déterministe, administration, visibilité et politique doivent rester compréhensibles sous changement.

<div class="status-board"><article><span>FONCTIONNEL</span><strong>Indexation et recherche</strong><p>Le cœur ingère du contenu et exécute les requêtes.</p></article><article><span>FONCTIONNEL</span><strong>Connexion et MFA</strong><p>L’assurance d’identité est une partie du système, pas un ajout futur.</p></article><article><span>INGÉNIERIE ACTIVE</span><strong>Durcissement du noyau</strong><p>Structures résidentes, sémantique, tests et performance sont affinés pour une frontière publique propre.</p></article><article><span>INGÉNIERIE ACTIVE</span><strong>Divulgation réglementée</strong><p>Autorisation et politique deviennent des contraintes de premier ordre du système de recherche.</p></article><article><span>PRÉVU</span><strong>Publication open source</strong><p>Le code sera publié lorsque architecture et contrats publics seront prêts pour un usage externe.</p></article></div>

## Le prochain Egothor, pas un exercice de compatibilité

Les moteurs historiques exploraient récupération plein texte Java, recherche distribuée et maintenance dynamique de l’index. La version 4 revient au cœur avec une implémentation moderne et un autre problème de sécurité : **une récupération de haute qualité dans des systèmes où les frontières d’information font partie de la correction**.

<div class="note-panel"><strong>Périmètre public.</strong> EGOTHOR v4 reste privé. Cette page décrit volontairement architecture et capacités à un niveau public ; les détails d’implémentation et le dépôt arriveront avec la publication prévue plutôt que d’exposer prématurément l’arbre privé.</div>

## Contexte lié

<div class="resource-grid"><a href="/fr/heritage/"><strong>Héritage Egothor</strong><span>Du moteur de 1998 à la ligne actuelle →</span></a><a href="/fr/expertise/"><strong>Recherche et récupération d’information</strong><span>Thèmes d’ingénierie du projet →</span></a></div>
