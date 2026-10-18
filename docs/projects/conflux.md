---
title: conflux
description: conflux is a small thread-safe Java coordination library providing type-safe shared context values and change events without imposing an application framework.
wide: true
page_class: project-detail project-conflux
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Java infrastructure · Egothor</p>
    <div class="project-title-row"><img src="/assets/images/conflux-mark.svg" alt="" width="86" height="86"><h1>conflux</h1></div>
    <p class="page-lede">A deliberately small Java library for the cases where independent components need to share a little typed state and react when it changes—without turning that coordination need into a dependency-injection framework or application architecture.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://gitea.egothor.org/Egothor/conflux">Open repository ↗</a><a class="button button--quiet" href="https://www.egothor.org/javadoc/conflux/">JavaDoc ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>Typed</strong><span>shared keys</span><small>one consistent Java type is associated with a context key name</small></div>
    <div><strong>Thread-safe</strong><span>coordination</span><small>context storage and listener structures are designed for concurrent use</small></div>
    <div><strong>Weak</strong><span>listeners</span><small>listener references can avoid turning subscriptions into accidental object retention</small></div>
    <div><strong>Small</strong><span>API surface</span><small>coordination primitive rather than a replacement application framework</small></div>
  </div>
</section>

## The small problem that often becomes a large dependency graph

A component computes a value. Several unrelated components need the latest value. Some need to react immediately when it changes. The naïve solution is to wire direct references everywhere; the “enterprise” solution can be to import an entire framework. conflux deliberately occupies the space between them.

<div class="architecture-flow" aria-label="conflux coordination model">
  <span><b>Producer</b><small>writes a typed value</small></span><i>→</i>
  <span><b>Shared context</b><small>stores current state</small></span><i>→</i>
  <span><b>Change event</b><small>notifies subscribers</small></span><i>→</i>
  <span><b>Consumers</b><small>react independently</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-conflux-team.png" alt="Engineers discussing lightweight software coordination on a whiteboard while code and dashboards remain visible on nearby screens.">
    <figcaption><strong>conflux solves a modest but recurring integration problem.</strong> Independent modules need one lightweight place to exchange current typed state and publish change events.</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>Useful when you need coordination, not a framework</span>
      <ul>
        <li><strong>Typed keys</strong> reduce accidental integration mismatches.</li>
        <li><strong>Current value + eventing</strong> covers many UI and infrastructure cases.</li>
        <li><strong>Weak listeners</strong> help avoid accidental retention.</li>
        <li><strong>Small scope</strong> keeps the library easy to embed inside larger systems.</li>
      </ul>
    </div>
  </figure>
</div>

## A type-safe context rather than a stringly typed map

The context uses typed keys so the contract includes both a name and the expected Java type. A key name cannot quietly mean `Integer` in one component and `String` in another. That makes the shared state easier to reason about and moves a common class of integration error closer to the point where the key is declared.

<div class="code-panel">
<div class="code-panel__top"><span>Conceptual API</span><small>type-safe shared state</small></div>
<pre><code>Key&lt;Integer&gt; COUNT = Key.of("count", Integer.class);

Ctx.INSTANCE.put(COUNT, 42);
int current = Ctx.INSTANCE.get(COUNT);

Ctx.INSTANCE.addListener(COUNT, value -&gt; refreshView(value));</code></pre>
</div>

<div class="feature-grid">
  <article><h3>Shared current state</h3><p>Components can retrieve the current value without knowing which producer created it or carrying a direct producer reference through the application.</p></article>
  <article><h3>Change notification</h3><p>Listeners can react to updates, so consumers that need event-driven behaviour do not need to poll the context continuously.</p></article>
  <article><h3>Weak listener references</h3><p>Subscriptions are designed so a forgotten explicit unsubscribe does not automatically make the event bus the lifetime owner of every listener.</p></article>
  <article><h3>Concurrent use</h3><p>The implementation uses concurrent collections and copy-on-write listener handling to keep the coordination primitive usable across application threads.</p></article>
</div>

## Deliberately not an application framework

conflux does not try to own object construction, configuration, scheduling or business logic. Its value is the opposite: a narrow contract that can be added to an existing system when a few independently developed modules need a common meeting point.

<div class="principle-strip">
  <span><b>Use it for</b><small>small shared state · component notifications · cross-module coordination</small></span>
  <span><b>Do not turn it into</b><small>a service locator for every dependency · a persistence layer · a distributed message broker</small></span>
</div>

That narrow scope also makes the library suitable as infrastructure inside larger systems: it does one coordination job and leaves architecture decisions to the application.

## Project resources

<div class="resource-grid resource-grid--three">
  <a href="https://gitea.egothor.org/Egothor/conflux"><strong>Source repository</strong><span>Code, tags, releases and README ↗</span></a>
  <a href="https://www.egothor.org/javadoc/conflux/"><strong>JavaDoc</strong><span>Public API reference ↗</span></a>
  <a href="https://gitea.egothor.org/Egothor/conflux/wiki"><strong>Project wiki</strong><span>Usage and project notes ↗</span></a>
</div>
