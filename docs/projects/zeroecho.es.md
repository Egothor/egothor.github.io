---
title: ZeroEcho
lang: es
description: ZeroEcho es un toolkit modular Java de criptografía y PKI que combina capacidades clásicas, poscuánticas e híbridas con fronteras explícitas de claves y workflows.
wide: true
page_class: project-detail project-zeroecho
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Sistemas criptográficos · Egothor</p>
    <div class="project-title-row"><img src="/assets/images/zeroecho-mark.svg" alt="" width="86" height="86"><h1>ZeroEcho</h1></div>
    <p class="page-lede">Toolkit modular Java para construir workflows criptográficos y PKI que necesitan selección explícita de algoritmos, fronteras de claves controladas y una senda evolutiva desde criptografía clásica hasta despliegues poscuánticos e híbridos.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://gitea.egothor.org/Egothor/ZeroEcho">Abrir repositorio ↗</a><a class="button button--quiet" href="https://www.egothor.org/javadoc/zeroecho/lib/">JavaDoc de biblioteca ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>PQC</strong><span>algoritmos de era NIST</span><small>ML-KEM y familias de firma poscuántica en el inventario activo</small></div>
    <div><strong>Hybrid</strong><span>modelo de migración</span><small>mecanismos clásicos y poscuánticos pueden coexistir donde la interoperabilidad lo requiere</small></div>
    <div><strong>PKI</strong><span>capa de servicios</span><small>emisión, revocación, estado y publicación forman parte de la arquitectura</small></div>
    <div><strong>Offline</strong><span>flujos operativos</span><small>diseñado para entrega scriptable, restringida y también sistemas conectados</small></div>
  </div>
</section>

## Criptografía como arquitectura, no como bolsa de algoritmos

ZeroEcho nació de una necesidad práctica: hacer utilizable la criptografía moderna en flujos repetibles sin esconder decisiones críticas en estado global o en un comando monolítico. El resultado es un toolkit por capas donde algoritmos, claves, contenido protegido, servicios PKI e integración tienen fronteras explícitas.

<div class="architecture-flow architecture-flow--five" aria-label="Arquitectura ZeroEcho">
  <span><b>Algoritmos</b><small>clásicos · PQC · híbridos</small></span><i>→</i>
  <span><b>Frontera de claves</b><small>referencias, no material privado suelto</small></span><i>→</i>
  <span><b>Workflows criptográficos</b><small>cifrar · firmar · verificar</small></span><i>→</i>
  <span><b>Servicios PKI</b><small>emitir · revocar · estado</small></span><i>→</i>
  <span><b>Aplicaciones</b><small>CLI · automatización · integración</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/assets/images/project-zeroecho-team.png" alt="Ingenieros de criptografía y sistemas trabajando con dashboards PKI, instrumentación de señales y analítica de workflows seguros."><figcaption><strong>Una imagen arquitectónica suele ser más clara que una lista de funciones.</strong> ZeroEcho conecta familias de algoritmos, custodia de claves, operaciones criptográficas y servicios PKI en un modelo controlable.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Ideas operativas detrás del proyecto</span><ul><li><strong>Agilidad algorítmica</strong> significa decisiones explícitas, no defaults ocultos.</li><li><strong>Las fronteras de claves</strong> importan tanto como elegir primitivas.</li><li><strong>PKI pertenece dentro de la arquitectura</strong>, no a su lado.</li><li><strong>La migración híbrida</strong> se trata como una fase real de ingeniería.</li></ul></div></figure>
</div>

## Agilidad algorítmica sin fingir que la migración es instantánea

La transición poscuántica no es un flag que todos los sistemas puedan activar al mismo tiempo. Ecosistemas de certificados, protocolos, hardware y contrapartes evolucionan a ritmos distintos. ZeroEcho mantiene por ello opciones clásicas, poscuánticas e híbridas en un mismo modelo de ingeniería en lugar de tratar una familia como proyecto lateral temporal.

<div class="capability-lanes">
  <article><span>CLÁSICA</span><h3>Interoperabilidad hoy</h3><p>RSA, ECDSA, Ed25519/Ed448 y modos simétricos establecidos siguen disponibles para protocolos y contrapartes dependientes de criptografía clásica madura.</p></article>
  <article><span>POSCUÁNTICA</span><h3>Migración donde encaja</h3><p>ML-KEM y familias de firma poscuántica se seleccionan mediante el mismo toolkit amplio sin exigir una pila de aplicación independiente.</p></article>
  <article><span>HÍBRIDA</span><h3>Puente durante la transición</h3><p>Construcciones híbridas permiten resiliencia entre familias mientras interoperabilidad y política se ponen al día.</p></article>
</div>

## El material de claves permanece tras una frontera

Un principio recurrente es que los servicios PKI de nivel superior no deberían transportar claves privadas brutas por sus APIs. Las claves se direccionan por referencias estables; firma y recuperación de clave pública pasan por una frontera de material de claves. Así la capa PKI se concentra en certificados, perfiles, políticas y estado en vez de convertirse en un segundo key store.

<div class="feature-grid feature-grid--three">
  <article><h3>Referencias explícitas de claves</h3><p>Identificadores estables permiten solicitar operaciones criptográficas sin tratar material privado como datos ordinarios de aplicación.</p></article>
  <article><h3>Operaciones conscientes del ciclo de vida</h3><p>Operaciones largas o externas de firma se modelan con estado explícito e idempotencia, sin asumir que cada llamada termina de forma síncrona.</p></article>
  <article><h3>Fronteras de contenido validado</h3><p>El contenido persistido se vincula a controles de integridad y referencias controladas para que recuperación y continuación sigan siendo auditables.</p></article>
  <article><h3>Identidades de algoritmo versionadas</h3><p>Algoritmos y elecciones de interoperabilidad se representan explícitamente para mantener defaults estables e introducir nuevas combinaciones de forma deliberada.</p></article>
  <article><h3>Configuración determinista</h3><p>La configuración se diseña para inspección y reproducción, no para depender de estado mutable de proveedor a nivel de proceso.</p></article>
  <article><h3>Entrega scriptable</h3><p>La CLI expone las mismas capacidades subyacentes a automatización y workflows offline, no otra implementación criptográfica.</p></article>
</div>

## PKI forma parte del sistema actual

La capa PKI se organiza alrededor de contratos de servicio y no de un objeto CA que lo haga todo. Solicitudes, emisión, revocación, perfiles, política, publicación, objetos de estado, backup/import-export e inventario de credenciales permanecen separados para evolucionar de forma independiente compartiendo almacenamiento y fronteras de claves.

<div class="pki-map">
  <article><strong>Ciclo de vida de certificado</strong><span>solicitudes · proof of possession · emisión · revocación</span></article>
  <article><strong>Política y perfiles</strong><span>combinaciones aprobadas · validez · metadata</span></article>
  <article><strong>Servicios de estado</strong><span>estado tipo OCSP · integración de time-stamping</span></article>
  <article><strong>Publicación</strong><span>artefactos de certificado/estado y referencias duraderas</span></article>
  <article><strong>Operaciones de claves</strong><span>el material privado permanece dentro de la frontera del proveedor</span></article>
  <article><strong>Recuperación</strong><span>persistencia, backup y continuación segura tras reinicio</span></article>
</div>

El objetivo es deliberadamente más exigente que «generar un certificado». Una PKI de producción debe responder qué se solicitó, qué se autorizó, qué clave demostró posesión, qué perfil se aplicó, qué se persistió y cómo reconstruir estado tras un reinicio.

## Flujos de datos resilientes

ZeroEcho conserva además su enfoque operativo original: protección multi-receptor, cifrado y firma scriptables, y flujos que no presuponen conectividad permanente. Transporte offline o indirecto se considera una condición legítima; las técnicas experimentales de exportación encubierta permanecen aisladas de la arquitectura criptográfica y PKI central.

<div class="note-panel"><strong>El despliegue criptográfico depende de la versión.</strong> Algoritmos, capacidades de proveedores e interoperabilidad de protocolos cambian con el tiempo. Esta página explica el modelo de ingeniería; repositorio y JavaDoc generado siguen siendo la fuente de verdad sobre APIs exactas y disponibilidad de algoritmos.</div>

## Recursos del proyecto

<div class="resource-grid resource-grid--three">
  <a href="https://gitea.egothor.org/Egothor/ZeroEcho"><strong>Repositorio fuente</strong><span>Código, historial y documentación ↗</span></a>
  <a href="https://www.egothor.org/javadoc/zeroecho/lib/"><strong>JavaDoc de biblioteca</strong><span>API criptográfica central ↗</span></a>
  <a href="https://www.egothor.org/javadoc/zeroecho/pki/"><strong>JavaDoc PKI</strong><span>API de servicios PKI ↗</span></a>
  <a href="https://www.egothor.org/javadoc/zeroecho/app/"><strong>JavaDoc de aplicación</strong><span>CLI e integración ↗</span></a>
  <a href="https://www.researchgate.net/publication/396241638_ZeroEcho_No_Signal_Is_Ever_Truly_Silent_A_Modular_Toolkit_for_Covert_Resilient_and_Future-Proof_Communication"><strong>Publicación del proyecto</strong><span>Alcance original y contexto de investigación ↗</span></a>
  <a href="/es/projects/methodatlas/"><strong>MethodAtlas</strong><span>Paquetes de evidencia protegidos con firmas ZeroEcho →</span></a>
</div>
