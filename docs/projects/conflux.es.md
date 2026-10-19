---
title: conflux
lang: es
description: conflux es una pequeña biblioteca Java thread-safe de coordinación que ofrece valores de contexto compartido con seguridad de tipos y eventos de cambio sin imponer un framework de aplicación.
wide: true
page_class: project-detail project-conflux
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Infraestructura Java · Egothor</p>
    <div class="project-title-row"><img src="/assets/images/conflux-mark.svg" alt="" width="86" height="86"><h1>conflux</h1></div>
    <p class="page-lede">Una biblioteca Java deliberadamente pequeña para los casos en que componentes independientes necesitan compartir un poco de estado tipado y reaccionar a sus cambios, sin convertir esa necesidad de coordinación en un framework de inyección de dependencias ni en una arquitectura de aplicación.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://github.com/Egothor/conflux">Abrir repositorio ↗</a><a class="button button--quiet" href="https://www.egothor.org/conflux/javadoc/">JavaDoc ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>Typed</strong><span>claves compartidas</span><small>un nombre de clave de contexto queda asociado a un tipo Java coherente</small></div>
    <div><strong>Thread-safe</strong><span>coordinación</span><small>el almacenamiento y los listeners están diseñados para uso concurrente</small></div>
    <div><strong>Weak</strong><span>listeners</span><small>las referencias débiles evitan que una suscripción retenga objetos por accidente</small></div>
    <div><strong>Small</strong><span>superficie API</span><small>una primitiva de coordinación, no un framework de aplicación sustitutivo</small></div>
  </div>
</section>

## El pequeño problema que a menudo termina en un gran grafo de dependencias

Un componente calcula un valor. Varios componentes no relacionados necesitan el valor más reciente y algunos deben reaccionar de inmediato cuando cambia. La solución ingenua es cablear referencias directas por todas partes; la solución «enterprise» puede acabar importando un framework entero. conflux ocupa deliberadamente el espacio intermedio.

<div class="architecture-flow" aria-label="Modelo de coordinación conflux">
  <span><b>Productor</b><small>escribe un valor tipado</small></span><i>→</i>
  <span><b>Contexto compartido</b><small>guarda el estado actual</small></span><i>→</i>
  <span><b>Evento de cambio</b><small>notifica a suscriptores</small></span><i>→</i>
  <span><b>Consumidores</b><small>reaccionan de forma independiente</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-conflux-team.png" alt="Ingenieros discutiendo coordinación ligera de software en una pizarra mientras se ven código y dashboards en las pantallas cercanas.">
    <figcaption><strong>conflux resuelve un problema modesto pero recurrente de integración.</strong> Los módulos independientes necesitan un punto ligero para intercambiar estado tipado actual y publicar eventos de cambio.</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>Útil cuando necesita coordinación, no un framework</span>
      <ul>
        <li><strong>Claves tipadas</strong> reducen desajustes accidentales de integración.</li>
        <li><strong>Valor actual + eventos</strong> cubren muchos casos de UI e infraestructura.</li>
        <li><strong>Listeners débiles</strong> ayudan a evitar retención accidental.</li>
        <li><strong>Alcance pequeño</strong> facilita integrar la biblioteca en sistemas mayores.</li>
      </ul>
    </div>
  </figure>
</div>

## Un contexto con seguridad de tipos, no un mapa gobernado por cadenas

El contexto utiliza claves tipadas, por lo que el contrato incluye tanto el nombre como el tipo Java esperado. Un mismo nombre no puede significar silenciosamente `Integer` en un componente y `String` en otro. Esto facilita razonar sobre el estado compartido y desplaza un error común de integración hacia el punto donde se declara la clave.

<div class="code-panel"><div class="code-panel__top"><span>API conceptual</span><small>estado compartido con seguridad de tipos</small></div>
<pre><code>Key&lt;Integer&gt; COUNT = Key.of("count", Integer.class);

Ctx.INSTANCE.put(COUNT, 42);
int current = Ctx.INSTANCE.get(COUNT);

Ctx.INSTANCE.addListener(COUNT, value -&gt; refreshView(value));</code></pre></div>

<div class="feature-grid">
  <article><h3>Estado actual compartido</h3><p>Los componentes pueden recuperar el valor actual sin conocer al productor que lo creó ni transportar una referencia directa al productor por toda la aplicación.</p></article>
  <article><h3>Notificación de cambios</h3><p>Los listeners reaccionan a las actualizaciones, de modo que los consumidores orientados a eventos no necesitan sondear continuamente el contexto.</p></article>
  <article><h3>Referencias débiles a listeners</h3><p>Las suscripciones están diseñadas para que olvidar un unsubscribe explícito no convierta automáticamente al bus de eventos en propietario de la vida de todos los listeners.</p></article>
  <article><h3>Uso concurrente</h3><p>La implementación utiliza colecciones concurrentes y gestión copy-on-write de listeners para mantener útil la primitiva entre hilos de aplicación.</p></article>
</div>

## Deliberadamente no es un framework de aplicación

conflux no intenta controlar construcción de objetos, configuración, scheduling ni lógica de negocio. Su valor es precisamente el contrario: un contrato estrecho que puede añadirse a un sistema existente cuando unos pocos módulos independientes necesitan un punto común de encuentro.

<div class="principle-strip"><span><b>Úselo para</b><small>pequeño estado compartido · notificaciones entre componentes · coordinación entre módulos</small></span><span><b>No lo convierta en</b><small>service locator para toda dependencia · capa de persistencia · broker distribuido</small></span></div>

Ese alcance reducido también lo hace adecuado como infraestructura dentro de sistemas mayores: resuelve una sola necesidad de coordinación y deja las decisiones arquitectónicas a la aplicación.

## Recursos del proyecto

<div class="resource-grid resource-grid--three">
  <a href="https://github.com/Egothor/conflux"><strong>Repositorio fuente</strong><span>Código, tags, versiones y README ↗</span></a>
  <a href="https://www.egothor.org/conflux/javadoc/"><strong>JavaDoc</strong><span>Referencia pública de API ↗</span></a>
  <a href="https://www.egothor.org/conflux/"><strong>Sitio del proyecto</strong><span>Documentación y resumen del proyecto ↗</span></a>
</div>
