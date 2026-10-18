---
title: Radixor
lang: fr
description: Radixor compile des connaissances morphologiques en modèles de stemming déterministes et compacts pour Java et Python, accompagnés d’une évaluation sur vingt langues et d’artefacts reproductibles.
wide: true
page_class: project-detail project-radixor
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Ingénierie linguistique · Logiciel de recherche · Java &amp; Python</p>
    <div class="project-title-row"><img src="/assets/images/radixor-mark.svg" alt="" width="86" height="86"><h1>Radixor</h1></div>
    <p class="page-lede">Un stemmer multilingue déterministe qui transforme des lexiques morphologiques en transformations exécutables compactes. Les connaissances linguistiques sont préparées hors ligne ; le chemin critique de recherche exécute un modèle compilé immuable au lieu de consulter un grand dictionnaire texte entrée par entrée.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://github.com/leogalambos/Radixor">Ouvrir le dépôt ↗</a><a class="button button--quiet" href="https://leogalambos.github.io/Radixor/">Documentation technique ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>20</strong><span>langues</span><small>modèles par défaut versionnés indépendamment dans l’ensemble standard évalué</small></div>
    <div><strong>6,61 M</strong><span>formes de surface</span><small>formes distinctes dans l’évaluation relationnelle sur vingt langues</small></div>
    <div><strong>99,9988 %</strong><span>précision</span><small>précision pairwise déterministe agrégée sur les vingt langues</small></div>
    <div><strong>83,4 %</strong><span>plus compact</span><small>réduction agrégée du payload lexical vers le payload compilé v7</small></div>
  </div>
</section>

## Compiler la morphologie en primitive de recherche

L’idée originelle d’Egothor était **d’apprendre les transformations depuis des preuves lexicales plutôt que d’écrire à la main un programme de stemming distinct pour chaque langue**. Radixor complète ce modèle avec une sémantique de réduction explicite, des structures runtime immuables, une persistance binaire versionnée, une gestion déterministe de l’ambiguïté et des runtimes Java/Python interopérables.

<div class="architecture-flow architecture-flow--five" aria-label="Pipeline de compilation et runtime Radixor">
  <span><b>Lexique morphologique</b><small>formes attestées et formes canoniques</small></span><i>→</i>
  <span><b>Induction de patchs</b><small>éditions exécutables à coût minimal</small></span><i>→</i>
  <span><b>Trie fréquentiel</b><small>preuves et alternatives</small></span><i>→</i>
  <span><b>Réduction</b><small>partage sémantique et contraction</small></span><i>→</i>
  <span><b>Modèle compilé</b><small>lookup runtime immuable</small></span>
</div>

Un patch n’est pas une réponse finale stockée. C’est une instruction qui transforme une forme d’entrée en représentation canonique. Les connaissances issues de nombreuses familles lexicales peuvent ainsi partager de la structure, et le compilateur peut généraliser des transformations compatibles au-delà d’une simple table mot→sortie.

<div class="feature-grid feature-grid--three">
  <article><h3>Un moteur, de nombreuses langues</h3><p>Le runtime est indépendant de la langue. Les connaissances linguistiques entrent via des données de modèle versionnées : ajouter ou améliorer une langue devient principalement un problème de compilation de modèle, pas un nouvel algorithme source.</p></article>
  <article><h3>L’ambiguïté est conservée</h3><p>Le même modèle peut exposer un résultat préféré ou tous les candidats localement soutenus dans un ordre déterministe. Le système de recherche en aval décide combien d’ambiguïté il souhaite activer.</p></article>
  <article><h3>Complexité à la compilation, runtime simple</h3><p>Induction, réduction et validation ont lieu hors ligne. En production, le lookup traverse le modèle gelé et applique une commande de patch compilée au token.</p></article>
  <article><h3>Les artefacts de modèle sont de premier ordre</h3><p>Les modèles linguistiques sont des artefacts de déploiement versionnés indépendamment et vérifiables en intégrité, pas des ressources cachées dans un exécutable unique.</p></article>
  <article><h3>Java et Python natif</h3><p>Le projet fournit une intégration Java et un runtime natif Python/Rust qui consomment le même concept de modèle compilé versionné.</p></article>
  <article><h3>Extension contrôlée</h3><p>Un modèle Java compilé peut être rouvert via un builder, enrichi par des connaissances spécifiques au domaine, reconstruit, testé puis déployé comme nouvel artefact au lieu d’être muté en production.</p></article>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-radixor-team.png" alt="Professionnels de linguistique computationnelle et d’ingénierie linguistique examinant des données morphologiques multilingues sur deux écrans.">
    <figcaption><strong>L’ingénierie linguistique est à la fois scientifique et opérationnelle.</strong> Radixor est le plus pertinent lorsque connaissance lexicale organisée et ingénierie de recherche pratique sont traitées comme un seul pipeline.</figcaption>
  </figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Pourquoi le projet relève d’un site professionnel de systèmes</span><ul>
    <li><strong>Les preuves linguistiques</strong> sont préparées hors ligne au lieu d’être improvisées au moment de la requête.</li>
    <li><strong>Les modèles multilingues</strong> restent des artefacts versionnés explicites.</li>
    <li><strong>Le comportement runtime déterministe</strong> rend le stemming utilisable dans des systèmes contrôlés.</li>
    <li><strong>Les résultats de recherche</strong> sont transformés en actifs d’ingénierie déployables.</li>
  </ul></div></figure>
</div>

## Ce qui a réellement été mesuré

L’étude 2026 sur vingt langues évalue **la conflation morphologique comme une relation**. Dit simplement, elle pose à très grande échelle deux questions : *les formes qui appartiennent ensemble finissent-elles ensemble, et les formes sans relation restent-elles séparées ?* Elle n’exige pas que chaque système écrive sa sortie comme un lemme de dictionnaire.

<div class="research-band">
  <div class="research-band__intro"><span class="section-kicker">ÉVALUATION SUR VINGT LANGUES</span><h3>Des millions de mots à des milliers de milliards de décisions de paires</h3><p>L’évaluation utilise des paradigmes dérivés de UniMorph et organisés indépendamment, puis compte la relation induite par le stemming déterministe. Les faux regroupements et les regroupements manqués deviennent mesurables sans confondre l’orthographe du stem et sa qualité.</p></div>
  <div class="research-stats">
    <div><strong>767 167</strong><span>groupes morphologiques</span></div>
    <div><strong>6 607 708</strong><span>formes distinctes</span></div>
    <div><strong>130,2 M</strong><span>paires liées</span></div>
    <div><strong>3,052 T</strong><span>paires non liées</span></div>
    <div><strong>314</strong><span>scénarios validés</span></div>
    <div><strong>20</strong><span>modèles linguistiques par défaut</span></div>
  </div>
</div>

<div class="figure-gallery figure-gallery--two">
  <figure class="figure-card"><img src="/fr/assets/images/radixor-evaluation-scale.svg" alt="Vue à échelle logarithmique des groupes morphologiques, formes distinctes, paires liées et non liées de l’évaluation Radixor."><figcaption><strong>Le point important est l’échelle.</strong> Il ne s’agit pas d’une petite liste de démonstration. L’évaluation vérifie des millions de formes attestées puis mesure à très grande échelle les décisions de conflation positives et négatives.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Pourquoi une évaluation relationnelle est plus facile à interpréter</span><ul>
    <li><strong>Les paires positives</strong> indiquent si les variantes légitimes restent ensemble.</li>
    <li><strong>Les paires négatives</strong> indiquent si des formes sans relation sont fusionnées à tort.</li>
    <li><strong>L’orthographe du lemme</strong> n’est pas traitée comme toute l’histoire.</li>
    <li><strong>L’ambiguïté</strong> peut être étudiée séparément pour la sortie primaire et tous les candidats.</li>
  </ul></div></figure>
</div>

### Le résultat de qualité en termes pratiques

<div class="evidence-grid evidence-grid--light">
  <article><span class="evidence-icon evidence-icon--check">✓</span><div><strong>15 langues sur 20</strong><small>ne produisent aucune conflation faux-positive en sortie primaire déterministe.</small></div></article>
  <article><span class="evidence-icon evidence-icon--precision">◎</span><div><strong>1 538 paires faux-positives</strong><small>dans le résultat agrégé, face à plus de 3,052 billions de paires non liées.</small></div></article>
  <article><span class="evidence-icon evidence-icon--recall">↗</span><div><strong>97,5952 % de rappel</strong><small>pour la sortie déterministe agrégée sur les vingt langues.</small></div></article>
  <article><span class="evidence-icon evidence-icon--candidates">≋</span><div><strong>12 sur 20 deviennent exactes</strong><small>lorsque tous les candidats Radixor explicitement conservés sont considérés comme analyse de capacité.</small></div></article>
</div>

Le résultat sensible aux candidats aide particulièrement à comprendre le design. Un stem context-free doit choisir une seule réponse même lorsque la morphologie est réellement ambiguë. Radixor conserve d’abord les preuves alternatives ; un indexeur, un query expander ou une couche contextuelle peut ensuite choisir la politique adaptée à l’application.

<div class="note-panel"><strong>Ce que ces chiffres affirment — et n’affirment pas.</strong> Ils mesurent la fidélité à la ressource morphologique indépendante disponible. La même ressource sert à compiler le modèle Radixor : il s’agit donc d’une expérience end-to-end d’utilisation des connaissances, pas d’une prétention sur des familles lexicales totalement absentes de la ressource ni, à elle seule, d’une preuve d’amélioration universelle de MAP, nDCG ou d’une autre métrique de récupération.</div>

## Des modèles compacts plutôt qu’une consultation live du dictionnaire

Les lexiques sources sont précieux parce qu’ils contiennent de la connaissance morphologique savante ; ils n’ont pas besoin de rester la représentation runtime. Radixor distille ces connaissances en programmes de patchs et en trie réduit.

<div class="compression-story" aria-label="Comparaison de taille de représentation Radixor">
  <div class="compression-copy"><span class="section-kicker">REPRÉSENTATION COMPILÉE</span><h3>99,92 MB de connaissances lexicales deviennent 16,55 MB de données de modèle compilées</h3><p>Mesure sur les payloads décompressés, sans wrappers GZip externes ni métadonnées de package. Sur les vingt modèles, les streams v7 compilés utilisent <strong>2,50 octets par forme évaluée</strong> contre 15,12 octets dans le payload source.</p></div>
  <div class="compression-bars"><div><label>Source lexicale <b>99,92 MB</b></label><span class="bar bar--source" style="--bar:100%"></span></div><div><label>v7 compilé <b>16,55 MB</b></label><span class="bar bar--compiled" style="--bar:16.56%"></span></div><p><strong>6,04×</strong> ratio source/modèle agrégé · <strong>83,4 %</strong> de réduction en octets</p></div>
</div>

## Une enveloppe visible connaissance–qualité–coût

Une expérience supplémentaire en anglais compile volontairement des modèles depuis des fractions déterministes de plus en plus petites des lignes lexicales disponibles, puis les évalue sur la ressource complète. L’objectif n’est pas de trouver une taille « magique » de dictionnaire, mais de montrer ce qui est perdu lorsque l’on retire de la connaissance.

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/fr/assets/images/radixor-knowledge-envelope.svg" alt="Graphique montrant exactitude toutes formes, exactitude des formes modifiées et runtime selon la proportion de lignes du dictionnaire anglais utilisée."><figcaption><strong>Ce que la courbe montre d’un coup d’œil.</strong> La principale perte de qualité touche les formes nécessitant réellement une transformation. Le runtime varie plus modestement et n’est pas strictement monotone, car la forme de la structure compilée change avec les connaissances.</figcaption></figure>
  <div class="stat-note-card"><h3>Trois points de repère</h3><div class="stat-note-card__grid">
    <article><strong>100 %</strong><span>97,478 % exact sur toutes les formes</span><small>97,197 % sur formes modifiées · 71,6 ns/token</small></article>
    <article><strong>50 %</strong><span>95,262 % exact sur toutes les formes</span><small>86,107 % sur formes modifiées · 61,1 ns/token</small></article>
    <article><strong>10 %</strong><span>92,868 % exact sur toutes les formes</span><small>76,516 % sur formes modifiées · 47,0 ns/token</small></article>
  </div><p>Pour un lecteur non spécialiste, ces repères sont souvent plus parlants qu’un grand tableau : retirer de la connaissance lexicale procure un gain runtime limité tout en érodant régulièrement la qualité, surtout pour les formes modifiées.</p></div>
</div>

<div class="data-table-card"><table><thead><tr><th>Lignes du dictionnaire utilisées</th><th>Exactitude · toutes formes</th><th>Exactitude · formes modifiées</th><th>Runtime formes modifiées</th></tr></thead><tbody>
<tr><td><strong>100 %</strong></td><td>97,478 %</td><td>97,197 %</td><td>71,6 ns/token</td></tr>
<tr><td><strong>50 %</strong></td><td>95,262 %</td><td>86,107 %</td><td>61,1 ns/token</td></tr>
<tr><td><strong>10 %</strong></td><td>92,868 %</td><td>76,516 %</td><td>47,0 ns/token</td></tr>
</tbody></table><p class="table-note">La latence absolue dépend de la machine et du workload. La courbe sert surtout d’illustration d’ingénierie : retirer de la connaissance lexicale affecte surtout les formes qui nécessitent une transformation, tandis que le runtime change plus modestement et pas de façon strictement monotone.</p></div>

<div class="note-panel"><strong>Présentation de la performance sur ce site.</strong> Les chiffres runtime Radixor sont présentés comme mesures absolues documentées, avec leur contexte de workload ou de qualité. Les anciens ratios headline contre Porter/Snowball ne sont volontairement pas utilisés ici : le design des benchmarks a évolué et les ratios inter-implémentations sont trop faciles à surinterpréter lorsque le mix de tokens et le chemin mesuré diffèrent.</div>

## Vingt langues par défaut

Un passage visuel dans l’ensemble standard rend la diversité linguistique plus facile à absorber qu’une simple liste séparée par des virgules.

<div class="flag-language-grid" aria-label="Langues par défaut évaluées par Radixor">
  <article><span class="flag-emoji">🇨🇿</span><div class="flag-copy"><strong>Tchèque</strong><small>cs · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇩🇰</span><div class="flag-copy"><strong>Danois</strong><small>da · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇳🇱</span><div class="flag-copy"><strong>Néerlandais</strong><small>nl · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇬🇧 🇺🇸</span><div class="flag-copy"><strong>Anglais</strong><small>en · base lexicale US/UK</small></div></article>
  <article><span class="flag-emoji">🇫🇮</span><div class="flag-copy"><strong>Finnois</strong><small>fi · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇫🇷</span><div class="flag-copy"><strong>Français</strong><small>fr · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇩🇪</span><div class="flag-copy"><strong>Allemand</strong><small>de · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇮🇱</span><div class="flag-copy"><strong>Hébreu</strong><small>he · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇭🇺</span><div class="flag-copy"><strong>Hongrois</strong><small>hu · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇮🇹</span><div class="flag-copy"><strong>Italien</strong><small>it · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>Norvégien bokmål</strong><small>nb · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>Norvégien nynorsk</strong><small>nn · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇮🇷</span><div class="flag-copy"><strong>Persan</strong><small>fa · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇵🇱</span><div class="flag-copy"><strong>Polonais</strong><small>pl · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇵🇹</span><div class="flag-copy"><strong>Portugais</strong><small>pt · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇷🇺</span><div class="flag-copy"><strong>Russe</strong><small>ru · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇪🇸</span><div class="flag-copy"><strong>Espagnol</strong><small>es · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇸🇪</span><div class="flag-copy"><strong>Suédois</strong><small>sv · modèle par défaut</small></div></article>
  <article><span class="flag-emoji">🇺🇦</span><div class="flag-copy"><strong>Ukrainien</strong><small>uk · modèle par défaut</small></div></article>
  <article><span class="flag-badge">YI</span><div class="flag-copy"><strong>Yiddish</strong><small>badge de langue plutôt qu’un drapeau d’État</small></div></article>
</div>

<p class="grid-note">Les drapeaux sont utilisés lorsqu’ils facilitent l’orientation. Lorsqu’un drapeau d’État souverain serait trompeur, un badge de langue est utilisé à la place.</p>

## Lignée de recherche et reproductibilité

Radixor est l’aboutissement contemporain d’une ligne de recherche commencée avec Egothor en 2001 : inférer de petits programmes d’édition mot→stem à partir d’exemples lexicaux, les organiser dans un trie puis exécuter le modèle résultant dans un système de recherche. Le travail moderne ajoute réduction sémantique explicite, contraction de sous-arbres uniformes, représentations compilées immuables, alternatives classées par preuve, provenance des modèles, interopérabilité Java/native et artefacts d’évaluation de niveau publication.

L’évaluation est conçue pour être auditable. Identifiants de modèles et hashes de descriptors sont enregistrés avec les lignes de résultats ; le snapshot qualité contient les comptes bruts de confusion et les métriques dérivées ; tableaux et figures générés peuvent être reconstruits à partir des données machine-readable au lieu d’être transcrits manuellement.

## Série de recherche Radixor

Les manuscrits complets sont hébergés ici afin de rester directement accessibles en complément de leurs enregistrements DOI. Chaque titre ouvre le PDF public sur Egothor.

1. [Does a Lexicon-Trained Stemmer Generalize? A 20-Language Study of Held-Out Lexical Families (PDF)](/research/radixor-01.pdf) · [DOI: 10.13140/RG.2.2.34383.85921](https://doi.org/10.13140/RG.2.2.34383.85921)
2. [Edit Costs as Structural Hyperparameters in Dictionary-Induced Stemming: A Multilingual Sensitivity Study (PDF)](/research/radixor-02.pdf) · [DOI: 10.13140/RG.2.2.12573.47845](https://doi.org/10.13140/RG.2.2.12573.47845)
3. [Classifying Multilingual Stemmers by Pareto Strata: Error Regimes in Pairwise Lexical Conflation (PDF)](/research/radixor-03.pdf) · [DOI: 10.13140/RG.2.2.25995.25126](https://doi.org/10.13140/RG.2.2.25995.25126)
4. [The Stemming Policy Is Data: Adapting a Lexicon-Trained Stemmer to Alternative Conflation Objectives (PDF)](/research/radixor-04.pdf) · [DOI: 10.13140/RG.2.2.23898.09926](https://doi.org/10.13140/RG.2.2.23898.09926)
5. [Runtime Efficiency of Lexicon-Trained Stemming: Compiled Structure and a Speed–Reference-Agreement Envelope in Radixor (PDF)](/research/radixor-05.pdf) · [DOI: 10.13140/RG.2.2.27332.18569](https://doi.org/10.13140/RG.2.2.27332.18569)
6. [Lexical Resource Consistency and Learned Transformation Vocabulary in Multilingual Stemming (PDF)](/research/radixor-06.pdf) · [DOI: 10.13140/RG.2.2.34043.07203](https://doi.org/10.13140/RG.2.2.34043.07203)
7. [Compiling Learned Lexical Transformations: Semantic Canonicalization and Accepting-Leaf Generalization in Patch-Command Tries (PDF)](/research/radixor-07.pdf) · [DOI: 10.13140/RG.2.2.12232.69128](https://doi.org/10.13140/RG.2.2.12232.69128)
8. [Where Retrieval Quality Goes: Rethinking Stemming in Modern Search (PDF)](/research/radixor-08.pdf) · [DOI: 10.13140/RG.2.2.22208.90887](https://doi.org/10.13140/RG.2.2.22208.90887)
9. [From Lexical Edits to Verified Stemming Policies: Two-Sided Adaptation in Radixor (PDF)](/research/radixor-09.pdf) · [DOI: 10.13140/RG.2.2.24725.49120](https://doi.org/10.13140/RG.2.2.24725.49120)

**Synthèse de recherche.** [Learned Conflation Policies: From Lexical Transformation to Reproducible Retrieval (PDF)](/research/radixor-book.pdf) · [DOI: 10.13140/RG.2.2.24253.63209](https://doi.org/10.13140/RG.2.2.24253.63209)

## Ressources du projet

<div class="resource-grid resource-grid--three">
  <a href="https://github.com/leogalambos/Radixor"><strong>Dépôt source</strong><span>Java, runtime Python/Rust, modèles et workflows de release ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/"><strong>Documentation technique</strong><span>Fast tracks, architecture, modèles, ambiguïté et benchmarks ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/benchmarks/data/stemming-quality.csv"><strong>Dataset qualité</strong><span>Snapshot machine-readable de qualité du stemming ↗</span></a>
  <a href="https://www.researchgate.net/publication/406886717_Radixor_A_Quarter-Century_Renewal_of_Patch-Command_Trie_Stemming_for_Deterministic_Search_Systems"><strong>Preprint architecture</strong><span>Contexte historique et systèmes ↗</span></a>
  <a href="/fr/heritage/"><strong>Héritage Egothor</strong><span>Lignée recherche et search →</span></a>
  <a href="https://central.sonatype.com/artifact/org.egothor/radixor"><strong>Maven Central</strong><span>Artefact Java publié ↗</span></a>
</div>
