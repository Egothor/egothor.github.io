---
title: MethodAtlas
lang: es
description: MethodAtlas convierte código fuente de pruebas existente en inventarios deterministas, clasificación de seguridad opcional asistida por IA y evidencia de auditoría reproducible en ocho lenguajes.
wide: true
page_class: project-detail project-methodatlas
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Aseguramiento de software · Código abierto</p>
    <div class="project-title-row"><img src="/assets/images/methodatlas-mark.svg" alt="" width="86" height="86"><h1>MethodAtlas</h1></div>
    <p class="page-lede">Un mapa a nivel de código fuente de lo que contiene realmente una suite de pruebas, enriquecido —cuando resulta útil— con clasificación de seguridad, mapeo de controles y evidencia de revisión. El inventario determinista permanece separado de la interpretación por IA para que el resultado pueda inspeccionarse y reproducirse.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://accenture.github.io/MethodAtlas/">Leer documentación ↗</a><a class="button button--quiet" href="https://github.com/Accenture/MethodAtlas">Repositorio GitHub ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>8</strong><span>lenguajes</span><small>descubrimiento de pruebas en lenguajes principales, scripting y enterprise</small></div>
    <div><strong>SARIF 2.1</strong><span>salida CI</span><small>integración de primer nivel con herramientas de seguridad y desarrollo</small></div>
    <div><strong>170+</strong><span>patrones de credenciales</span><small>catálogo determinista de candidatos antes del triage opcional con IA</small></div>
    <div><strong>Signed</strong><span>paquetes de evidencia</span><small>bundles resistentes a manipulación con firmas clásicas, PQC o híbridas</small></div>
  </div>
</section>

## Del código fuente a una evidencia defendible

Una ejecución de pruebas satisfactoria responde si las pruebas pasaron. El assurance plantea otras preguntas: **¿qué pruebas existen? ¿Cuáles ejercitan propiedades de seguridad? ¿Qué controles respaldan? ¿Qué cambió desde la última revisión? ¿Puede reproducirse la evidencia?** MethodAtlas se construye alrededor de esa diferencia.

<div class="architecture-flow architecture-flow--five" aria-label="Flujo de evidencia MethodAtlas">
  <span><b>Árbol fuente</b><small>código de pruebas existente</small></span><i>→</i>
  <span><b>Descubrimiento</b><small>parsers deterministas</small></span><i>→</i>
  <span><b>Enriquecimiento</b><small>IA y taxonomía opcionales</small></span><i>→</i>
  <span><b>Revisión</b><small>overrides y drift checks</small></span><i>→</i>
  <span><b>Evidencia</b><small>SARIF · cobertura · paquetes firmados</small></span>
</div>

La arquitectura convierte deliberadamente **el descubrimiento de métodos en un problema estructural de análisis de código, no en un problema de IA**. La IA puede clasificar relevancia de seguridad, sugerir tags o ayudar con el triage, pero es una etapa explícita de enriquecimiento sobre un inventario determinista.

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/assets/images/project-methodatlas-team.png" alt="Profesionales de software assurance revisando inventarios de pruebas, etapas de workflow y dashboards de evidencia."><figcaption><strong>Diseñado para revisión, no solo automatización.</strong> MethodAtlas resulta especialmente útil cuando un equipo debe explicar cómo se produjo la salida y dónde intervino el juicio humano.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Por qué este flujo funciona en entrega regulada</span><ul><li><strong>Las pruebas existentes siguen teniendo valor</strong> porque la herramienta inventaría lo que ya existe.</li><li><strong>La IA sigue siendo opcional</strong> y no la única vía para obtener resultados.</li><li><strong>La revisión es explícita</strong> antes de tratar tags o evidencia como autoridad.</li><li><strong>La salida encaja en pipelines</strong> mediante SARIF, CSV, matrices de cobertura y paquetes firmados.</li></ul></div></figure>
</div>

## Ocho lenguajes, un modelo de evidencia

<div class="language-matrix">
  <article><strong>Java</strong><span>JUnit 5 · JUnit 4 · TestNG</span><small>descubrimiento AST · write-back</small></article>
  <article><strong>C#</strong><span>xUnit · NUnit · MSTest</span><small>descubrimiento por gramática · write-back</small></article>
  <article><strong>TypeScript / JavaScript</strong><span>Jest · Vitest · Mocha</span><small>descubrimiento por plugin</small></article>
  <article><strong>Go</strong><span>testing package</span><small>descubrimiento por plugin</small></article>
  <article><strong>Python</strong><span>pytest</span><small>descubrimiento por plugin</small></article>
  <article><strong>PowerShell</strong><span>Pester</span><small>descubrimiento por plugin</small></article>
  <article><strong>SAP ABAP</strong><span>ABAP Unit · ecATT</span><small>inventario de pruebas enterprise</small></article>
  <article><strong>COBOL</strong><span>MFUnit · COBOL-Check</span><small>inventario de pruebas enterprise</small></article>
</div>

Los plugins de lenguaje producen un registro común a nivel de método. Esa forma común permite mantener consistente el flujo de assurance incluso cuando una cartera abarca servicios modernos, scripts y plataformas enterprise de larga vida.

## Capacidades de evidencia, no solo clasificación

<div class="feature-grid feature-grid--three">
  <article><h3>Taxonomía de seguridad</h3><p>La clasificación asistida por IA puede mapear pruebas a una taxonomía cerrada y versionada o a una taxonomía personalizada alineada con el marco de controles de la organización.</p></article>
  <article><h3>Confianza y colas de revisión</h3><p>Las puntuaciones por método permiten umbrales y colas de revisión humana en lugar de imponer un modelo binario de «la IA dice sí/no».</p></article>
  <article><h3>Huellas de contenido</h3><p>Huellas SHA-256 del código permiten identificar clases sin cambios, reutilizar resultados de IA y demostrar si la evidencia procede del mismo contenido de pruebas.</p></article>
  <article><h3>Informes delta</h3><p>Se pueden comparar dos inventarios para mostrar métodos añadidos, eliminados o modificados, útil para evidencia de release y gates de regresión CI.</p></article>
  <article><h3>Cobertura de controles</h3><p>Los tags pueden mapearse a identificadores de control suministrados por el usuario para resaltar gaps reales, no presentar el mero número de pruebas como assurance.</p></article>
  <article><h3>Recibos de reproducibilidad</h3><p>Las entradas que influyeron en un análisis —incluidas las plantillas efectivas de prompts LLM— pueden fingerprintarse para reconstruir después cómo se obtuvo el resultado.</p></article>
</div>

## La IA es opcional y está acotada

MethodAtlas admite inferencia local con Ollama, proveedores cloud y un workflow manual en dos fases para entornos donde el código no puede enviarse a una API externa. Los overrides revisados por humanos persisten, y el write-back se mantiene separado de la clasificación para permitir revisión antes de modificar el código.

<div class="evidence-path">
  <article><span>01</span><div><strong>Línea base determinista</strong><p>Descubrir métodos, metadata del framework, ubicaciones e identidad del código sin LLM.</p></div></article>
  <article><span>02</span><div><strong>Interpretación opcional</strong><p>Añadir relevancia de seguridad, tags, rationale y confianza con IA local, cloud o manual.</p></div></article>
  <article><span>03</span><div><strong>Autoridad humana</strong><p>Revisar, corregir y persistir decisiones; detectar drift entre anotaciones fuente y clasificación posterior.</p></div></article>
  <article><span>04</span><div><strong>Salida auditable</strong><p>Emitir registros aptos para CI, cobertura de controles, recibos o paquetes resistentes a manipulación.</p></div></article>
</div>

## Detección de credenciales como señal determinista separada

El mismo pipeline puede buscar candidatos de credenciales en el código. El descubrimiento utiliza un catálogo curado de reglas deterministas con más de 170 formatos de proveedores; los valores se enmascaran por defecto. La IA, si se activa, se usa después para estimar credibilidad y relacionar el candidato con el endpoint al que parece autenticar, no para inventar el match subyacente.

<div class="note-panel"><strong>Por qué importa la separación.</strong> En una revisión regulada, «lo encontró el modelo» ofrece una procedencia débil. MethodAtlas mantiene descubrimiento determinista, interpretación probabilística opcional y decisiones humanas como etapas diferenciables para poder cuestionarlas de forma independiente.</div>

## Revisión interactiva para quien no quiere un flujo exclusivamente CLI

La GUI de escritorio ofrece un workflow para revisores sobre el mismo modelo: navegación de fuentes, syntax highlighting, árboles de resultados por clase/método, decisiones de tags, cambios staged y write-back por lotes. Las acciones de revisión generan CSV de evidencia y overrides persistentes, de forma que una decisión de GUI no sea estado transitorio de una estación de trabajo.

<div class="feature-grid">
  <article><h3>Cambios staged</h3><p>Las anotaciones sugeridas pueden revisarse y quedar preparadas en memoria antes de una operación deliberada “Save All Changes”.</p></article>
  <article><h3>Rastro de auditoría</h3><p>Las decisiones se registran como evidencia con timestamp y overrides reutilizables, manteniendo la diferencia entre sugerencia de máquina y decisión humana.</p></article>
  <article><h3>Perfiles de IA</h3><p>Perfiles de proveedor con nombre permiten cambiar entre inferencia local y remota sin incrustar esa decisión en el motor de descubrimiento.</p></article>
  <article><h3>Selección de plugins</h3><p>Los plugins pueden habilitarse por ejecución para reducir un repositorio heterogéneo a los lenguajes relevantes para la tarea.</p></article>
</div>

## Paquetes de evidencia y ZeroEcho

Los paquetes reúnen la salida del análisis en un directorio resistente a manipulación con manifiesto SHA-256. Si se solicita firma, MethodAtlas puede usar **ZeroEcho** para generar firmas clásicas, poscuánticas o híbridas. Es una conexión práctica entre dos temas de Egothor: descubrir evidencia de assurance y proteger después la integridad del paquete.

## Trayectoria del proyecto

MethodAtlas comenzó con una base de código abierto desarrollada por **Egothor**. **Accenture amplió posteriormente esa base** con capacidades adicionales, y el proyecto público ampliado se publica actualmente en la organización GitHub de Accenture. Esto describe la trayectoria del proyecto; no se presenta como asociación institucional ni endorsement. El proyecto público utiliza **Apache License, Version 2.0**.

## Recursos del proyecto

<div class="resource-grid resource-grid--three">
  <a href="https://accenture.github.io/MethodAtlas/"><strong>Documentación</strong><span>Conceptos, workflows y referencia CLI ↗</span></a>
  <a href="https://github.com/Accenture/MethodAtlas"><strong>Repositorio fuente</strong><span>Código público, issues y releases ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/cli-reference/"><strong>Referencia CLI</strong><span>Opciones de línea de comandos y modos de salida ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/concepts/"><strong>Conceptos</strong><span>Modelo de evidencia y análisis de seguridad ↗</span></a>
  <a href="/es/projects/zeroecho/"><strong>ZeroEcho</strong><span>Firma criptográfica de paquetes →</span></a>
  <a href="/es/expertise/"><strong>Software assurance</strong><span>Contexto de ingeniería Egothor →</span></a>
</div>
