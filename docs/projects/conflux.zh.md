---
title: conflux
lang: zh
description: conflux 是一个小型线程安全 Java 协调库，提供类型安全的共享上下文值和变更事件，而不强加应用框架。
wide: true
page_class: project-detail project-conflux
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> Java 基础设施 · Egothor</p>
    <div class="project-title-row"><img src="/assets/images/conflux-mark.svg" alt="" width="86" height="86"><h1>conflux</h1></div>
    <p class="page-lede">一个刻意保持小型的 Java 库，解决独立组件需要共享少量类型化状态并在其变化时作出反应的问题——但不会把这种协调需求演变成依赖注入框架或应用架构。</p>
    <div class="hero-actions"><a class="button button--primary" href="https://gitea.egothor.org/Egothor/conflux">打开代码仓库 ↗</a><a class="button button--quiet" href="https://www.egothor.org/javadoc/conflux/">JavaDoc ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>Typed</strong><span>共享键</span><small>一个上下文键名与一致的 Java 类型关联</small></div>
    <div><strong>Thread-safe</strong><span>协调</span><small>上下文存储和监听器结构面向并发使用设计</small></div>
    <div><strong>Weak</strong><span>监听器</span><small>弱引用可避免订阅关系意外延长对象生命周期</small></div>
    <div><strong>Small</strong><span>API 表面</span><small>它是协调原语，而不是替代应用框架</small></div>
  </div>
</section>

## 一个小问题，往往会长成庞大的依赖图

某个组件计算出一个值。几个互不相关的组件需要最新值，其中一些还需要在值变化时立即响应。朴素做法是到处传递直接引用；“企业级”做法则可能引入整个框架。conflux 刻意位于这两者之间。

<div class="architecture-flow" aria-label="conflux 协调模型">
  <span><b>生产者</b><small>写入类型化值</small></span><i>→</i>
  <span><b>共享上下文</b><small>保存当前状态</small></span><i>→</i>
  <span><b>变更事件</b><small>通知订阅者</small></span><i>→</i>
  <span><b>消费者</b><small>独立响应</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-conflux-team.png" alt="工程师在白板前讨论轻量软件协调，附近屏幕显示代码和系统仪表板。">
    <figcaption><strong>conflux 解决的是一个不大但反复出现的集成问题。</strong> 独立模块需要一个轻量公共点来交换当前类型化状态，并发布变更事件。</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>当你需要协调，而不是框架</span>
      <ul>
        <li><strong>类型安全键</strong>减少意外的集成类型不一致。</li>
        <li><strong>当前值 + 事件</strong>覆盖许多 UI 与基础设施场景。</li>
        <li><strong>弱监听器</strong>有助于避免意外对象保留。</li>
        <li><strong>小范围</strong>让库更容易嵌入较大的系统。</li>
      </ul>
    </div>
  </figure>
</div>

## 类型安全上下文，而不是“字符串驱动”的 Map

上下文使用类型化键，因此契约同时包含名称和预期 Java 类型。同一个键名不能在一个组件中悄悄代表 `Integer`，在另一个组件中又代表 `String`。这样更容易推理共享状态，并把常见的集成错误提前到键声明的位置。

<div class="code-panel">
<div class="code-panel__top"><span>概念 API</span><small>类型安全共享状态</small></div>
<pre><code>Key&lt;Integer&gt; COUNT = Key.of("count", Integer.class);

Ctx.INSTANCE.put(COUNT, 42);
int current = Ctx.INSTANCE.get(COUNT);

Ctx.INSTANCE.addListener(COUNT, value -&gt; refreshView(value));</code></pre>
</div>

<div class="feature-grid">
  <article><h3>共享当前状态</h3><p>组件可以获取当前值，而不必知道哪个生产者创建了它，也不需要在整个应用中携带生产者的直接引用。</p></article>
  <article><h3>变更通知</h3><p>监听器可以对更新作出响应，需要事件驱动行为的消费者无需持续轮询上下文。</p></article>
  <article><h3>弱监听器引用</h3><p>订阅设计避免因为忘记显式取消订阅，就让事件总线自动成为每个监听器的生命周期所有者。</p></article>
  <article><h3>并发使用</h3><p>实现使用并发集合和 copy-on-write 监听器处理，使协调原语可以在多个应用线程间使用。</p></article>
</div>

## 有意不成为应用框架

conflux 不试图控制对象创建、配置、调度或业务逻辑。它的价值恰恰相反：当少数独立开发的模块需要一个公共会合点时，可以加入一个很窄的契约。

<div class="principle-strip">
  <span><b>适合用于</b><small>少量共享状态 · 组件通知 · 跨模块协调</small></span>
  <span><b>不要把它变成</b><small>所有依赖的服务定位器 · 持久化层 · 分布式消息代理</small></span>
</div>

这种狭窄范围也使该库适合作为更大系统中的基础设施：它只负责一个协调问题，把架构决策留给应用本身。

## 项目资源

<div class="resource-grid resource-grid--three">
  <a href="https://gitea.egothor.org/Egothor/conflux"><strong>源代码仓库</strong><span>代码、标签、版本发布和 README ↗</span></a>
  <a href="https://www.egothor.org/javadoc/conflux/"><strong>JavaDoc</strong><span>公共 API 参考 ↗</span></a>
  <a href="https://gitea.egothor.org/Egothor/conflux/wiki"><strong>项目 Wiki</strong><span>使用说明与项目笔记 ↗</span></a>
</div>
