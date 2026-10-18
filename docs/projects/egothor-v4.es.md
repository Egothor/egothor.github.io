---
title: EGOTHOR v4
lang: es
description: EGOTHOR v4 es una nueva generación de infraestructura de búsqueda Egothor para entornos regulados, combinando recuperación determinista con divulgación sensible a autorización.
wide: true
page_class: project-detail project-egothor-v4
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Búsqueda regulada · Beta privada · Apertura prevista</p>
    <div class="project-title-row"><img src="/assets/images/egothor-v4-mark.svg" alt="" width="86" height="86"><h1>EGOTHOR v4</h1></div>
    <p class="page-lede">Una nueva generación de infraestructura Egothor para entornos donde la relevancia solo resuelve la mitad del problema. Antes de divulgar un resultado, la búsqueda también debe respetar visibilidad, clearance, clasificación, integridad, compartimentos y fronteras de conflicto.</p>
    <div class="hero-actions"><span class="button button--status">Beta privada</span><a class="button button--quiet" href="/es/heritage/">Explorar la trayectoria de Egothor</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>Resident</strong><span>núcleo de búsqueda</span><small>ruta de lectura compacta para recuperación predecible en proceso</small></div>
    <div><strong>Top-K</strong><span>resultados deterministas</span><small>ranking estable y selección de resultados como contratos explícitos</small></div>
    <div><strong>Policy</strong><span>sensible a divulgación</span><small>la recuperación opera dentro de un modelo de gobierno de información</small></div>
    <div><strong>OSS</strong><span>publicación prevista</span><small>el código público llegará tras la fase de endurecimiento de la beta privada</small></div>
  </div>
</section>

## Buscar cuando una coincidencia no implica divulgación automática

La búsqueda empresarial tradicional suele preguntar si un usuario puede entrar en una aplicación y después consulta el índice que encuentre dentro. Un sistema regulado necesita una pregunta más precisa: **¿puede este sujeto recibir este resultado concreto, en este contexto, sin cruzar una frontera de clasificación, compartimento o conflicto?**

EGOTHOR v4 se diseña alrededor de esa distinción. Identidad y MFA establecen quién pregunta; la recuperación determina qué coincide; la política de información determina qué puede exponerse. La frontera de divulgación permanece visible en lugar de ocultarse como filtrado de presentación después de una búsqueda sin restricciones.

<div class="architecture-flow architecture-flow--five" aria-label="Ruta de recuperación de EGOTHOR v4">
  <span><b>Ingesta</b><small>ensamblar barrels buscables</small></span><i>→</i>
  <span><b>Vista residente</b><small>estructuras de lectura compactas e inmutables</small></span><i>→</i>
  <span><b>Consulta</b><small>matching determinista</small></span><i>→</i>
  <span><b>Contexto de política</b><small>restricciones de sujeto e información</small></span><i>→</i>
  <span><b>Divulgación</b><small>resultados Top-K permitidos</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/assets/images/project-egothor-v4-team.png" alt="Especialistas de ingeniería y seguridad revisando un flujo de búsqueda regulada y un dashboard sensible a divulgación."><figcaption><strong>La distinción central es sencilla.</strong> La búsqueda identifica qué coincide; la divulgación regulada decide qué puede mostrarse realmente a un sujeto concreto.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Qué lo diferencia de la búsqueda empresarial ordinaria</span><ul><li><strong>La política no es un filtro cosmético posterior.</strong></li><li><strong>La recuperación residente sigue siendo determinista</strong>, por lo que su comportamiento puede probarse y razonarse.</li><li><strong>La divulgación forma parte de la corrección</strong> cuando importan clases y compartimentos.</li><li><strong>Seguridad y recuperación</strong> permanecen como preocupaciones visibles y distintas.</li></ul></div></figure>
</div>

## Un núcleo de búsqueda con invariantes explícitos

El trabajo actual separa el ensamblado del índice de la consulta residente. La ruta de escritura puede construir y validar estructuras mientras la ruta de lectura crítica opera sobre representaciones compactas con semántica predecible.

<div class="feature-grid feature-grid--three">
  <article><h3>Recuperación residente</h3><p>La búsqueda opera sobre una representación dedicada a lectura en lugar de mezclar mutaciones de indexación en la misma ruta crítica.</p></article>
  <article><h3>Top-K determinista</h3><p>Ranking y desempates son contratos reproducibles: el mismo estado buscable y la misma consulta producen un orden estable.</p></article>
  <article><h3>Visibilidad de documentos vivos</h3><p>La visibilidad puede cambiar sin obligar al buscador a tratar registros borrados o sustituidos como resultados todavía elegibles.</p></article>
  <article><h3>Ingesta en streaming</h3><p>La construcción del índice gira alrededor del ensamblado de barrels y publicación controlada en lugar de exigir una construcción monolítica en memoria.</p></article>
  <article><h3>Fronteras de API</h3><p>Ingesta, acceso residente y contratos de consulta permanecen separados para que rendimiento o evolución de almacenamiento no redefinan silenciosamente la semántica pública.</p></article>
  <article><h3>Ingeniería orientada a evidencia</h3><p>Pruebas y benchmarks forman parte del contrato del núcleo, incluida la diferencia entre rendimiento de API pública y estado estable.</p></article>
</div>

## La política de recuperación no es una ocurrencia posterior

El núcleo de búsqueda y el modelo de control de información responden preguntas distintas y necesitan evidencias distintas. El núcleo demuestra matching y ranking correctos; la política establece si un registro coincidente puede divulgarse al sujeto efectivo.

<div class="regulated-stack" aria-label="Capas de control de información de EGOTHOR v4">
  <article><span>01</span><div><b>Identidad</b><small>Inicio de sesión, MFA y contexto del sujeto autenticado.</small></div></article>
  <article><span>02</span><div><b>Política de información</b><small>Clearance, clasificación, integridad, compartimentos y conflictos.</small></div></article>
  <article><span>03</span><div><b>Recuperación</b><small>Índice y consultas deterministas con contrato de resultados controlado.</small></div></article>
  <article><span>04</span><div><b>Divulgación</b><small>Solo se exponen resultados permitidos por las reglas aplicables.</small></div></article>
</div>

<div class="policy-grid">
  <article><strong>Clearance</strong><p>¿Qué nivel de información puede recibir el sujeto?</p></article>
  <article><strong>Clasificación</strong><p>¿Qué clase de tratamiento se aplica al registro o colección?</p></article>
  <article><strong>Integridad</strong><p>¿Qué condiciones de integridad o confianza deben cumplirse antes del uso?</p></article>
  <article><strong>Compartimentos</strong><p>¿Qué dominios deben permanecer separados incluso dentro del mismo servicio de búsqueda?</p></article>
  <article><strong>Fronteras de conflicto</strong><p>¿Qué combinaciones no deben divulgarse juntas aunque cada elemento sea accesible por separado?</p></article>
  <article><strong>Política operativa</strong><p>¿Cómo se hacen observables y auditables los cambios de identidad, administración y política?</p></article>
</div>

## Qué debe demostrar la beta privada

La beta no es solo un hito de interfaz. Es la fase en la que mecánica de búsqueda y fronteras de seguridad deben funcionar como un único sistema operativo: acceso autenticado, ciclo de vida del índice, comportamiento determinista, administración, visibilidad y política de divulgación deben seguir siendo comprensibles bajo cambio.

<div class="status-board">
  <article><span>OPERATIVO</span><strong>Indexación y búsqueda</strong><p>El sistema central puede ingerir contenido y ejecutar consultas.</p></article>
  <article><span>OPERATIVO</span><strong>Inicio de sesión y MFA</strong><p>La garantía de identidad forma parte del sistema, no es un añadido futuro.</p></article>
  <article><span>INGENIERÍA ACTIVA</span><strong>Endurecimiento del núcleo</strong><p>Se refinan estructuras residentes, semántica, pruebas y rendimiento para una frontera pública limpia.</p></article>
  <article><span>INGENIERÍA ACTIVA</span><strong>Divulgación regulada</strong><p>Autorización y política de información se modelan como restricciones de primer nivel.</p></article>
  <article><span>PREVISTO</span><strong>Publicación abierta</strong><p>El código se publicará cuando arquitectura y contratos públicos estén listos para uso externo.</p></article>
</div>

## El siguiente Egothor, no un ejercicio de compatibilidad

Los motores históricos exploraron recuperación Java de texto completo, búsqueda distribuida y mantenimiento dinámico de índices. La versión 4 vuelve al núcleo del motor con una implementación moderna y un problema de seguridad distinto: **recuperación de alta calidad en sistemas donde las fronteras de información forman parte de la corrección**.

<div class="note-panel"><strong>Alcance público.</strong> EGOTHOR v4 sigue siendo privado. La página describe deliberadamente arquitectura y capacidades a nivel público; detalles de implementación y enlaces al repositorio llegarán con la apertura prevista, en lugar de exponer prematuramente el árbol privado.</div>

## Contexto relacionado

<div class="resource-grid"><a href="/es/heritage/"><strong>Trayectoria de Egothor</strong><span>Del motor de 1998 a la línea actual →</span></a><a href="/es/expertise/"><strong>Búsqueda y recuperación de información</strong><span>Temas de ingeniería detrás del proyecto →</span></a></div>
