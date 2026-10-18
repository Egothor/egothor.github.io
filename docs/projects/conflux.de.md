---
title: conflux
lang: de
description: conflux ist eine kleine thread-sichere Java-Koordinationsbibliothek für typsichere gemeinsame Kontextwerte und Change Events, ohne ein Anwendungsframework vorzugeben.
wide: true
page_class: project-detail project-conflux
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Java-Infrastruktur · Egothor</p>
    <div class="project-title-row"><img src="/assets/images/conflux-mark.svg" alt="" width="86" height="86"><h1>conflux</h1></div>
    <p class="page-lede">Eine bewusst kleine Java-Bibliothek für Situationen, in denen unabhängige Komponenten etwas typsicheren gemeinsamen Zustand teilen und auf Änderungen reagieren müssen — ohne daraus ein Dependency-Injection-Framework oder eine vollständige Anwendungsarchitektur zu machen.</p>
    <div class="hero-actions"><a class="button button--primary" href="https://gitea.egothor.org/Egothor/conflux">Repository öffnen ↗</a><a class="button button--quiet" href="https://www.egothor.org/javadoc/conflux/">JavaDoc ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>Typed</strong><span>gemeinsame Keys</span><small>ein Kontextschlüsselname ist konsistent mit einem Java-Typ verbunden</small></div>
    <div><strong>Thread-safe</strong><span>Koordination</span><small>Kontextspeicher und Listener-Strukturen sind für parallele Nutzung ausgelegt</small></div>
    <div><strong>Weak</strong><span>Listener</span><small>schwache Listener-Referenzen vermeiden unbeabsichtigte Objektlebenszeiten</small></div>
    <div><strong>Small</strong><span>API-Oberfläche</span><small>Koordinationsprimitive statt Ersatz-Anwendungsframework</small></div>
  </div>
</section>

## Das kleine Problem, das oft zu einem großen Abhängigkeitsgraphen wird

Eine Komponente berechnet einen Wert. Mehrere unabhängige Komponenten benötigen den aktuellen Wert; einige müssen sofort auf Änderungen reagieren. Die naive Lösung verdrahtet direkte Referenzen überall, die „Enterprise“-Lösung importiert womöglich ein komplettes Framework. conflux besetzt bewusst den Raum dazwischen.

<div class="architecture-flow" aria-label="conflux-Koordinationsmodell">
  <span><b>Producer</b><small>schreibt einen typisierten Wert</small></span><i>→</i>
  <span><b>Shared Context</b><small>hält den aktuellen Zustand</small></span><i>→</i>
  <span><b>Change Event</b><small>benachrichtigt Subscriber</small></span><i>→</i>
  <span><b>Consumer</b><small>reagieren unabhängig</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card"><img src="/assets/images/project-conflux-team.png" alt="Ingenieure diskutieren leichtgewichtige Softwarekoordination an einem Whiteboard, während Code und Dashboards sichtbar bleiben."><figcaption><strong>conflux löst ein bescheidenes, aber wiederkehrendes Integrationsproblem.</strong> Unabhängige Module brauchen einen kleinen gemeinsamen Ort, um aktuellen typisierten Zustand auszutauschen und Change Events zu veröffentlichen.</figcaption></figure>
  <figure class="figure-card figure-card--note"><div class="figure-callout"><span>Nützlich, wenn Koordination benötigt wird — nicht ein Framework</span><ul><li><strong>Typsichere Keys</strong> reduzieren unbeabsichtigte Integrationsfehler.</li><li><strong>Aktueller Wert + Eventing</strong> deckt viele UI- und Infrastruktur-Szenarien ab.</li><li><strong>Weak Listener</strong> helfen, unbeabsichtigte Retention zu vermeiden.</li><li><strong>Kleiner Scope</strong> macht die Bibliothek leicht in größere Systeme integrierbar.</li></ul></div></figure>
</div>

## Ein typsicherer Kontext statt einer String-basierten Map

Der Kontext verwendet typisierte Keys, sodass der Vertrag sowohl den Namen als auch den erwarteten Java-Typ umfasst. Ein Schlüsselname kann nicht unbemerkt in einer Komponente `Integer` und in einer anderen `String` bedeuten. Das macht gemeinsamen Zustand leichter nachvollziehbar und verschiebt eine häufige Fehlerklasse näher an die Key-Deklaration.

<div class="code-panel"><div class="code-panel__top"><span>Konzeptionelle API</span><small>typsicherer gemeinsamer Zustand</small></div><pre><code>Key&lt;Integer&gt; COUNT = Key.of("count", Integer.class);

Ctx.INSTANCE.put(COUNT, 42);
int current = Ctx.INSTANCE.get(COUNT);

Ctx.INSTANCE.addListener(COUNT, value -&gt; refreshView(value));</code></pre></div>

<div class="feature-grid">
  <article><h3>Gemeinsamer aktueller Zustand</h3><p>Komponenten können den aktuellen Wert abrufen, ohne den Producer zu kennen oder dessen Referenz durch die Anwendung tragen zu müssen.</p></article>
  <article><h3>Änderungsbenachrichtigung</h3><p>Listener können auf Updates reagieren, sodass ereignisbasierte Consumer den Kontext nicht kontinuierlich pollen müssen.</p></article>
  <article><h3>Weak Listener-Referenzen</h3><p>Subscriptions sind so gestaltet, dass ein vergessenes Unsubscribe den Event Bus nicht automatisch zum Lebenszeit-Eigentümer jedes Listeners macht.</p></article>
  <article><h3>Parallele Nutzung</h3><p>Concurrent Collections und Copy-on-Write-Listener-Verarbeitung halten die Primitive über Anwendungsthreads hinweg nutzbar.</p></article>
</div>

## Bewusst kein Anwendungsframework

conflux will weder Objekterzeugung, Konfiguration, Scheduling noch Business-Logik übernehmen. Der Wert liegt gerade in der engen Aufgabe: ein kleiner Vertrag, der zu einem bestehenden System hinzugefügt werden kann, wenn unabhängige Module einen gemeinsamen Treffpunkt benötigen.

<div class="principle-strip"><span><b>Geeignet für</b><small>kleinen gemeinsamen Zustand · Komponentennachrichten · modulübergreifende Koordination</small></span><span><b>Nicht daraus machen</b><small>Service Locator für jede Abhängigkeit · Persistenzschicht · verteilten Message Broker</small></span></div>

Dieser enge Scope macht die Bibliothek auch als Infrastruktur in größeren Systemen geeignet: Sie löst eine Koordinationsaufgabe und überlässt Architekturentscheidungen der Anwendung.

## Projektressourcen

<div class="resource-grid resource-grid--three"><a href="https://gitea.egothor.org/Egothor/conflux"><strong>Source-Repository</strong><span>Code, Tags, Releases und README ↗</span></a><a href="https://www.egothor.org/javadoc/conflux/"><strong>JavaDoc</strong><span>Öffentliche API-Referenz ↗</span></a><a href="https://gitea.egothor.org/Egothor/conflux/wiki"><strong>Projekt-Wiki</strong><span>Nutzung und Projektnotizen ↗</span></a></div>
