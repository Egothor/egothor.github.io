---
title: Trayectoria
lang: es
description: La trayectoria de Egothor desde el motor de búsqueda original de 1998, pasando por sistemas distribuidos, crawling, geolocalización y plataformas de datos, hasta los proyectos actuales.
wide: true
page_class: heritage-page
---

<section class="page-hero shell">
  <p class="eyebrow"><span></span> Trayectoria del proyecto</p>
  <h1>De infraestructura de búsqueda<br><em>a un laboratorio de ingeniería más amplio.</em></h1>
  <p class="page-lede">Egothor comenzó en 1998 como un proyecto de motor de búsqueda. Con el tiempo, el mismo programa de ingeniería exploró procesamiento lingüístico, servicios distribuidos, crawling, geolocalización de red, gateways de sensores y plataformas experimentales de datos. Esta página conserva esa continuidad sin presentar sistemas retirados como productos actuales.</p>
</section>

<section class="lineage shell" aria-label="Trayectoria de proyectos Egothor">
  <img src="/es/assets/images/heritage-line.svg" alt="Cronología abstracta que conecta las familias de proyectos Egothor desde 1998 hasta hoy">
</section>

## Línea principal

<div class="heritage-grid">
  <article id="egothor-search"><div class="heritage-date">1998–2018</div><h3>Egothor Search Engine</h3><p>Motor Java de búsqueda de texto completo y código abierto con actualización dinámica de índices, transacciones, detección de plagio, actualizaciones incrementales, formatos comunes de documentos, un modelo booleano extendido y un enfoque de stemming independiente del idioma.</p><a href="#egothor-search">Resumen histórico ↑</a></article>
  <article id="j5m"><div class="heritage-date">2007–2015</div><h3>J5M</h3><p>Capa ligera de aplicaciones distribuidas basada en servicios cooperantes, descubrimiento de objetos remotos, invocación directa o remota, control de ciclo de vida e instancias de servicio de reserva activa.</p><a href="#j5m">Resumen histórico ↑</a></article>
  <article id="bobo"><div class="heritage-date">2012–2014</div><h3>Bobo</h3><p>Plataforma distribuida de crawling y entidades virtuales que surgió de las necesidades de rastreo de Egothor y evolucionó hacia una arquitectura general para componentes autónomos orientados a la web.</p></article>
  <article id="galeo"><div class="heritage-date">2013–2014</div><h3>Galeo</h3><p>Investigación de geolocalización IP basada en un modelo que trataba las rutas de red como heterogéneas en lugar de asumir un único comportamiento constante de propagación.</p><a href="/research/galeo.pdf">Galeo: Continuous Bayesian Topology-Aware IP Geolocation (PDF)</a> · <a href="https://doi.org/10.13140/RG.2.2.36764.45443">DOI: 10.13140/RG.2.2.36764.45443</a></article>
  <article id="qid"><div class="heritage-date">2012 → 2022</div><h3>Egothor3 / Q!D</h3><p>Dirección experimental de bases de datos iniciada en 2012; la implementación posterior Q!D utilizó la plataforma J5M para explorar modelos alternativos de procesamiento de grandes colecciones de datos.</p></article>
  <article><div class="heritage-date">2025–2026 →</div><h3>Generación actual de Egothor</h3><p>Radixor renueva la línea de procesamiento lingüístico, ZeroEcho amplía el trabajo hacia la criptografía moderna, conflux proporciona infraestructura de aplicación focalizada, MethodAtlas lleva la ingeniería orientada a evidencias al aseguramiento de software y EGOTHOR v4 devuelve la familia al texto completo en entornos regulados.</p><a href="/es/projects/">Proyectos actuales →</a></article>
</div>

## Sistemas aplicados

La familia ampliada también incluyó sistemas de red, sensores y adquisición de datos. En la lista histórica de Leo Galamboš figuran **SNOG** (gateway de red de sensores), **SafetyCare** (aplicación de asistencia GPS/GSM), **Cyclone** (crawler y analizador distribuido) y **RaSPEL** (puente/controlador LoRaWAN a REST).

<div class="note-panel"><strong>Contexto histórico.</strong> Las descripciones de esta página se han reescrito para mayor claridad y contexto actual. Las fechas y descripciones técnicas principales se basan en las páginas conservadas de Egothor y en el historial de proyectos publicado por Leo Galamboš.</div>

## Lo que permaneció

Los sistemas son distintos, pero se repiten varias ideas: desplazar la complejidad fuera de las rutas críticas de ejecución; hacer explícito el comportamiento de los servicios; preferir estructuras de datos compactas; permitir que los componentes se sustituyan o evolucionen de forma independiente; y conservar suficiente evidencia técnica para que otro ingeniero pueda cuestionar una afirmación.
