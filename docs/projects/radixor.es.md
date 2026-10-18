---
title: Radixor
lang: es
description: Radixor compila evidencia morfológica en modelos compactos y deterministas de stemming para Java y Python, con evaluación en veinte idiomas y artefactos reproducibles.
wide: true
page_class: project-detail project-radixor
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Ingeniería lingüística · Software de investigación · Java y Python</p>
    <div class="project-title-row"><img src="/assets/images/radixor-mark.svg" alt="" width="86" height="86"><h1>Radixor</h1></div>
    <p class="page-lede">Stemmer multilingüe determinista que transforma léxicos morfológicos en transformaciones ejecutables compactas. El conocimiento lingüístico se prepara offline; la ruta viva de búsqueda ejecuta un modelo compilado e inmutable en lugar de consultar entrada por entrada un gran diccionario textual.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://github.com/leogalambos/Radixor">Abrir repositorio ↗</a><a class="button button--quiet" href="https://leogalambos.github.io/Radixor/">Documentación técnica ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>20</strong><span>idiomas</span><small>modelos por defecto versionados de forma independiente en el conjunto evaluado</small></div>
    <div><strong>6.61M</strong><span>formas superficiales</span><small>formas distintas en la evaluación relacional de veinte idiomas</small></div>
    <div><strong>99.9988%</strong><span>precisión</span><small>precisión pairwise agregada del resultado determinista en 20 idiomas</small></div>
    <div><strong>83.4%</strong><span>más pequeño</span><small>reducción total del payload léxico al payload compilado v7</small></div>
  </div>
</section>

## Morfología compilada en una primitiva de búsqueda

La idea original de Egothor consistía en **aprender transformaciones a partir de evidencia léxica en lugar de programar manualmente un stemmer distinto para cada idioma**. Radixor completa ese modelo con semántica explícita de reducción, estructuras inmutables de runtime, persistencia binaria versionada, tratamiento determinista de ambigüedad y runtimes interoperables Java/Python.

<div class="architecture-flow architecture-flow--five" aria-label="Pipeline de construcción y runtime de Radixor">
  <span><b>Léxico morfológico</b><small>formas observadas y formas canónicas</small></span><i>→</i>
  <span><b>Inducción de patches</b><small>ediciones ejecutables de coste mínimo</small></span><i>→</i>
  <span><b>Trie de frecuencias</b><small>evidencia y alternativas</small></span><i>→</i>
  <span><b>Reducción</b><small>compartición semántica y contracción</small></span><i>→</i>
  <span><b>Modelo compilado</b><small>lookup inmutable en runtime</small></span>
</div>

Un patch no es una respuesta final almacenada. Es una instrucción que transforma una forma de entrada en una representación canónica. Eso permite compartir estructura entre muchas familias léxicas y que el compilador generalice transformaciones compatibles más allá de una tabla plana palabra→salida.

<div class="feature-grid feature-grid--three">
  <article><h3>Un motor, muchos idiomas</h3><p>El runtime es independiente del idioma. El conocimiento lingüístico entra mediante datos de modelo versionados, por lo que añadir o mejorar un idioma es principalmente un problema de compilación de modelo, no de escribir otro algoritmo fuente.</p></article>
  <article><h3>La ambigüedad se conserva</h3><p>El mismo modelo puede exponer un resultado preferido o todos los candidatos locales en orden determinista. El sistema de búsqueda decide cuánta ambigüedad quiere activar.</p></article>
  <article><h3>Complejidad al construir, simplicidad al ejecutar</h3><p>Inducción, reducción y validación ocurren offline. El lookup de producción recorre el modelo congelado y aplica un patch command compilado al token.</p></article>
  <article><h3>Los modelos son artefactos de primer nivel</h3><p>Los modelos de idioma son artefactos de despliegue versionados e íntegramente verificables, no recursos ocultos dentro de un único ejecutable.</p></article>
  <article><h3>Java y Python nativo</h3><p>El proyecto proporciona integración Java y un runtime nativo Python/Rust que consumen el mismo concepto de modelo compilado versionado.</p></article>
  <article><h3>Extensión controlada</h3><p>Un modelo Java compilado puede reabrirse mediante un builder, ampliarse con evidencia específica de dominio, reconstruirse, probarse y desplegarse como nuevo artefacto en lugar de mutarse en vivo.</p></article>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/assets/images/project-radixor-team.png" alt="Profesionales de lingüística computacional e ingeniería lingüística revisando datos morfológicos multilingües en dos monitores."><figcaption><strong>La ingeniería lingüística es a la vez académica y operativa.</strong> Radixor resulta más claro cuando el conocimiento léxico curado y la ingeniería práctica de búsqueda se tratan como una sola pipeline.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Por qué el proyecto pertenece a un sitio profesional de sistemas</span><ul><li><strong>La evidencia lingüística</strong> se prepara offline y no se improvisa durante la consulta.</li><li><strong>Los modelos multilingües</strong> permanecen como artefactos explícitos y versionados.</li><li><strong>El comportamiento determinista</strong> hace que el stemming encaje en sistemas controlados.</li><li><strong>Los resultados de investigación</strong> se convierten en activos desplegables.</li></ul></div></figure>
</div>

## Qué se midió realmente

El estudio de 2026 en veinte idiomas evalúa **la conflación morfológica como relación**. En términos sencillos pregunta, a gran escala: *¿las formas que deben agruparse terminan juntas y las no relacionadas permanecen separadas?* No exige que todos los sistemas escriban su salida como el mismo lema de diccionario.

<div class="research-band">
  <div class="research-band__intro"><span class="section-kicker">EVALUACIÓN EN VEINTE IDIOMAS</span><h3>De millones de formas a billones de decisiones por pares</h3><p>La evaluación utiliza paradigmas derivados de UniMorph y curados de manera independiente, y cuenta la relación inducida por stemming determinista. Así pueden medirse uniones falsas y relaciones perdidas sin confundir ortografía del stem con calidad.</p></div>
  <div class="research-stats"><div><strong>767,167</strong><span>grupos morfológicos</span></div><div><strong>6,607,708</strong><span>formas distintas</span></div><div><strong>130.2M</strong><span>pares relacionados</span></div><div><strong>3.052T</strong><span>pares no relacionados</span></div><div><strong>314</strong><span>escenarios validados</span></div><div><strong>20</strong><span>modelos por defecto</span></div></div>
</div>

<div class="figure-gallery figure-gallery--two">
  <figure class="figure-card"><img src="/es/assets/images/radixor-evaluation-scale.svg" alt="Resumen logarítmico de grupos morfológicos, formas distintas, pares relacionados y no relacionados en la evaluación de veinte idiomas."><figcaption><strong>El punto esencial es la escala.</strong> No es una pequeña lista de demostración: se evalúan millones de formas observadas y un espacio muy grande de decisiones relacionales.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Por qué una evaluación basada en relaciones resulta más fiable</span><ul><li><strong>Los pares positivos</strong> indican si las variantes auténticas permanecen juntas.</li><li><strong>Los pares negativos</strong> muestran si formas no relacionadas se fusionan por error.</li><li><strong>La ortografía del lema</strong> no se trata como toda la historia.</li><li><strong>La ambigüedad</strong> puede estudiarse por separado para salida primaria y todos los candidatos.</li></ul></div></figure>
</div>

### El resultado de calidad en términos prácticos

<div class="evidence-grid evidence-grid--light">
  <article><span class="evidence-icon evidence-icon--check">✓</span><div><strong>15 de 20 idiomas</strong><small>produjeron cero conflaciones false-positive en la salida primaria determinista.</small></div></article>
  <article><span class="evidence-icon evidence-icon--precision">◎</span><div><strong>1,538 pares false-positive</strong><small>en el resultado agregado, frente a más de 3.052 billones de pares no relacionados.</small></div></article>
  <article><span class="evidence-icon evidence-icon--recall">↗</span><div><strong>97.5952% recall</strong><small>para la salida determinista agregada de los veinte idiomas.</small></div></article>
  <article><span class="evidence-icon evidence-icon--candidates">≋</span><div><strong>12 de 20 pasan a ser exactos</strong><small>cuando se consideran todos los candidatos explícitos como análisis de capacidad.</small></div></article>
</div>

El resultado candidate-aware es especialmente útil para entender el diseño. Un stemmer sin contexto debe elegir una respuesta incluso cuando existe ambigüedad morfológica real. Radixor conserva primero la evidencia alternativa; un indexador, expansor de consulta o capa contextual puede después elegir la política apropiada.

<div class="note-panel"><strong>Qué afirman estas cifras y qué no.</strong> Miden fidelidad al recurso morfológico independiente disponible. Ese mismo recurso compila el modelo, por lo que es un experimento extremo a extremo de utilización de conocimiento, no de predicción de familias totalmente ausentes; tampoco constituye por sí solo una afirmación de mejora universal de MAP, nDCG u otra métrica externa.</div>

## Modelos compactos en lugar de lookup vivo de diccionario

Los léxicos fuente son valiosos porque contienen evidencia morfológica curada, pero no tienen por qué seguir siendo la representación en runtime. Radixor destila esa evidencia en programas de patch y un trie reducido.

<div class="compression-story" aria-label="Comparación del tamaño de representación de Radixor">
  <div class="compression-copy"><span class="section-kicker">REPRESENTACIÓN COMPILADA</span><h3>99.92 MB de evidencia léxica se convierten en 16.55 MB de modelo compilado</h3><p>Medido sobre payloads descomprimidos, sin wrappers GZip externos ni metadata del paquete. En los veinte modelos, el stream v7 usa <strong>2.50 bytes por forma evaluada</strong> frente a 15.12 bytes en la fuente.</p></div>
  <div class="compression-bars"><div><label>Fuente léxica <b>99.92 MB</b></label><span class="bar bar--source" style="--bar:100%"></span></div><div><label>Compilado v7 <b>16.55 MB</b></label><span class="bar bar--compiled" style="--bar:16.56%"></span></div><p><strong>6.04×</strong> relación fuente/modelo · <strong>83.4%</strong> reducción de bytes</p></div>
</div>

## Un sobre visible de conocimiento–calidad–coste

Otro experimento inglés compila deliberadamente modelos a partir de fracciones deterministas del léxico y evalúa contra el recurso completo. No busca un tamaño «mágico» de diccionario, sino mostrar qué se sacrifica cuando se retira conocimiento.

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/es/assets/images/radixor-knowledge-envelope.svg" alt="Gráfico de exactitud de todas las formas, exactitud de formas cambiadas y runtime frente a la fracción del diccionario usada."><figcaption><strong>Lo que muestra la curva de un vistazo.</strong> La mayor pérdida se produce en formas que realmente requieren transformación. El runtime cambia menos y no es estrictamente monótono porque cambia la estructura compilada.</figcaption></figure>
  <div class="stat-note-card"><h3>Tres puntos de referencia</h3><div class="stat-note-card__grid"><article><strong>100%</strong><span>97.478% exacto en todas</span><small>97.197% en formas cambiadas · 71.6 ns/token</small></article><article><strong>50%</strong><span>95.262% exacto en todas</span><small>86.107% en formas cambiadas · 61.1 ns/token</small></article><article><strong>10%</strong><span>92.868% exacto en todas</span><small>76.516% en formas cambiadas · 47.0 ns/token</small></article></div><p>Para lectores no especializados es más intuitivo que una gran tabla: reducir evidencia compra poco runtime, pero erosiona progresivamente la calidad, sobre todo en las formas transformadas.</p></div>
</div>

<div class="data-table-card"><table><thead><tr><th>Filas del diccionario</th><th>Exactitud · todas las formas</th><th>Exactitud · formas cambiadas</th><th>Runtime de formas cambiadas</th></tr></thead><tbody><tr><td><strong>100%</strong></td><td>97.478%</td><td>97.197%</td><td>71.6 ns/token</td></tr><tr><td><strong>50%</strong></td><td>95.262%</td><td>86.107%</td><td>61.1 ns/token</td></tr><tr><td><strong>10%</strong></td><td>92.868%</td><td>76.516%</td><td>47.0 ns/token</td></tr></tbody></table><p class="table-note">La latencia absoluta depende de máquina y workload. La curva es útil como ilustración de ingeniería: retirar evidencia perjudica sobre todo formas que necesitan transformación y el runtime varía de forma más modesta y no estrictamente monótona.</p></div>

<div class="note-panel"><strong>Cómo se presenta el rendimiento en este sitio.</strong> Los tiempos se muestran como mediciones absolutas documentadas y junto al contexto de workload o calidad. Se omiten deliberadamente antiguos ratios titulares frente a Porter/Snowball: el diseño del benchmark evolucionó y las ratios entre implementaciones se interpretan mal con facilidad cuando difieren el mix de tokens y la ruta medida.</div>

## Veinte idiomas por defecto

Una vista visual del conjunto estándar permite absorber mejor la amplitud que una simple lista separada por comas.

<div class="flag-language-grid" aria-label="Idiomas por defecto de Radixor con banderas o identificadores cuando corresponde">
  <article><span class="flag-emoji">🇨🇿</span><div class="flag-copy"><strong>Checo</strong><small>cs · modelo por defecto</small></div></article><article><span class="flag-emoji">🇩🇰</span><div class="flag-copy"><strong>Danés</strong><small>da · modelo por defecto</small></div></article><article><span class="flag-emoji">🇳🇱</span><div class="flag-copy"><strong>Neerlandés</strong><small>nl · modelo por defecto</small></div></article><article><span class="flag-emoji">🇬🇧 🇺🇸</span><div class="flag-copy"><strong>Inglés</strong><small>en · base léxica US/UK</small></div></article><article><span class="flag-emoji">🇫🇮</span><div class="flag-copy"><strong>Finés</strong><small>fi · modelo por defecto</small></div></article>
  <article><span class="flag-emoji">🇫🇷</span><div class="flag-copy"><strong>Francés</strong><small>fr · modelo por defecto</small></div></article><article><span class="flag-emoji">🇩🇪</span><div class="flag-copy"><strong>Alemán</strong><small>de · modelo por defecto</small></div></article><article><span class="flag-emoji">🇮🇱</span><div class="flag-copy"><strong>Hebreo</strong><small>he · modelo por defecto</small></div></article><article><span class="flag-emoji">🇭🇺</span><div class="flag-copy"><strong>Húngaro</strong><small>hu · modelo por defecto</small></div></article><article><span class="flag-emoji">🇮🇹</span><div class="flag-copy"><strong>Italiano</strong><small>it · modelo por defecto</small></div></article>
  <article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>Noruego Bokmål</strong><small>nb · modelo por defecto</small></div></article><article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>Noruego Nynorsk</strong><small>nn · modelo por defecto</small></div></article><article><span class="flag-emoji">🇮🇷</span><div class="flag-copy"><strong>Persa</strong><small>fa · modelo por defecto</small></div></article><article><span class="flag-emoji">🇵🇱</span><div class="flag-copy"><strong>Polaco</strong><small>pl · modelo por defecto</small></div></article><article><span class="flag-emoji">🇵🇹</span><div class="flag-copy"><strong>Portugués</strong><small>pt · modelo por defecto</small></div></article>
  <article><span class="flag-emoji">🇷🇺</span><div class="flag-copy"><strong>Ruso</strong><small>ru · modelo por defecto</small></div></article><article><span class="flag-emoji">🇪🇸</span><div class="flag-copy"><strong>Español</strong><small>es · modelo por defecto</small></div></article><article><span class="flag-emoji">🇸🇪</span><div class="flag-copy"><strong>Sueco</strong><small>sv · modelo por defecto</small></div></article><article><span class="flag-emoji">🇺🇦</span><div class="flag-copy"><strong>Ucraniano</strong><small>uk · modelo por defecto</small></div></article><article><span class="flag-badge">YI</span><div class="flag-copy"><strong>Yidis</strong><small>identificador de idioma en lugar de bandera estatal</small></div></article>
</div>

<p class="grid-note">Se utilizan banderas cuando ayudan a orientarse. Cuando asociar una lengua a una bandera soberana podría resultar engañoso, se usa un identificador lingüístico.</p>

## Trayectoria de investigación y reproducibilidad

Radixor es la realización contemporánea de una línea iniciada en Egothor en 2001: inferir programas compactos de edición palabra→stem a partir de ejemplos léxicos, organizarlos en un trie y ejecutar el modelo resultante en un sistema de búsqueda. El trabajo moderno añade reducción semántica explícita, contracción de subárboles uniformes, representaciones compiladas inmutables, alternativas ordenadas por evidencia, procedencia de modelos, interoperabilidad Java/nativa y artefactos de evaluación de nivel publicable.

La evaluación está diseñada para ser auditable. Los identificadores y hashes se registran con las filas de resultados; el snapshot de calidad incluye los conteos de confusión originales y métricas derivadas; tablas y figuras pueden regenerarse a partir de datos machine-readable en lugar de transcribirse manualmente.

## Serie de investigación Radixor

Los manuscritos completos se alojan aquí para que sigan disponibles de forma directa junto con sus registros DOI. Cada título abre el PDF público en Egothor.

1. [Does a Lexicon-Trained Stemmer Generalize? A 20-Language Study of Held-Out Lexical Families (PDF)](/research/radixor-01.pdf) · [DOI: 10.13140/RG.2.2.34383.85921](https://doi.org/10.13140/RG.2.2.34383.85921)
2. [Edit Costs as Structural Hyperparameters in Dictionary-Induced Stemming: A Multilingual Sensitivity Study (PDF)](/research/radixor-02.pdf) · [DOI: 10.13140/RG.2.2.12573.47845](https://doi.org/10.13140/RG.2.2.12573.47845)
3. [Classifying Multilingual Stemmers by Pareto Strata: Error Regimes in Pairwise Lexical Conflation (PDF)](/research/radixor-03.pdf) · [DOI: 10.13140/RG.2.2.25995.25126](https://doi.org/10.13140/RG.2.2.25995.25126)
4. [The Stemming Policy Is Data: Adapting a Lexicon-Trained Stemmer to Alternative Conflation Objectives (PDF)](/research/radixor-04.pdf) · [DOI: 10.13140/RG.2.2.23898.09926](https://doi.org/10.13140/RG.2.2.23898.09926)
5. [Runtime Efficiency of Lexicon-Trained Stemming: Compiled Structure and a Speed–Reference-Agreement Envelope in Radixor (PDF)](/research/radixor-05.pdf) · [DOI: 10.13140/RG.2.2.27332.18569](https://doi.org/10.13140/RG.2.2.27332.18569)
6. [Lexical Resource Consistency and Learned Transformation Vocabulary in Multilingual Stemming (PDF)](/research/radixor-06.pdf) · [DOI: 10.13140/RG.2.2.34043.07203](https://doi.org/10.13140/RG.2.2.34043.07203)
7. [Compiling Learned Lexical Transformations: Semantic Canonicalization and Accepting-Leaf Generalization in Patch-Command Tries (PDF)](/research/radixor-07.pdf) · [DOI: 10.13140/RG.2.2.12232.69128](https://doi.org/10.13140/RG.2.2.12232.69128)
8. [Where Retrieval Quality Goes: Rethinking Stemming in Modern Search (PDF)](/research/radixor-08.pdf) · [DOI: 10.13140/RG.2.2.22208.90887](https://doi.org/10.13140/RG.2.2.22208.90887)
9. [From Lexical Edits to Verified Stemming Policies: Two-Sided Adaptation in Radixor (PDF)](/research/radixor-09.pdf) · [DOI: 10.13140/RG.2.2.24725.49120](https://doi.org/10.13140/RG.2.2.24725.49120)

**Síntesis de investigación.** [Learned Conflation Policies: From Lexical Transformation to Reproducible Retrieval (PDF)](/research/radixor-book.pdf) · [DOI: 10.13140/RG.2.2.24253.63209](https://doi.org/10.13140/RG.2.2.24253.63209)

## Recursos del proyecto

<div class="resource-grid resource-grid--three">
  <a href="https://github.com/leogalambos/Radixor"><strong>Repositorio fuente</strong><span>Java, runtime Python/Rust, modelos y workflows de release ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/"><strong>Documentación técnica</strong><span>Fast tracks, arquitectura, modelos, ambigüedad y benchmarks ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/benchmarks/data/stemming-quality.csv"><strong>Dataset de calidad</strong><span>Snapshot machine-readable de calidad de stemming ↗</span></a>
  <a href="https://www.researchgate.net/publication/406886717_Radixor_A_Quarter-Century_Renewal_of_Patch-Command_Trie_Stemming_for_Deterministic_Search_Systems"><strong>Preprint de arquitectura</strong><span>Contexto histórico y de sistemas ↗</span></a>
  <a href="/es/heritage/"><strong>Trayectoria de Egothor</strong><span>Línea de investigación y búsqueda →</span></a>
  <a href="https://central.sonatype.com/artifact/org.egothor/radixor"><strong>Maven Central</strong><span>Artefacto Java publicado ↗</span></a>
</div>
