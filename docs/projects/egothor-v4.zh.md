---
title: EGOTHOR v4
lang: zh
description: EGOTHOR v4 是面向受监管环境的新一代 Egothor 搜索基础设施，把确定性检索与授权感知的信息披露结合起来。
wide: true
page_class: project-detail project-egothor-v4
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> 受监管搜索 · 私有测试版 · 计划开源</p>
    <div class="project-title-row"><img src="/assets/images/egothor-v4-mark.svg" alt="" width="86" height="86"><h1>EGOTHOR v4</h1></div>
    <p class="page-lede">新一代 Egothor 搜索基础设施，面向那些“相关性”只解决了一半问题的信息环境。在结果可以披露之前，搜索还必须保持可见性、许可级别、分类、完整性、隔离域和冲突边界。</p>
    <div class="hero-actions"><span class="button button--status">私有测试版</span><a class="button button--quiet" href="/zh/heritage/">查看 Egothor 沿革</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>Resident</strong><span>搜索内核</span><small>紧凑读取路径，面向可预测的进程内检索</small></div>
    <div><strong>Top-K</strong><span>确定性结果</span><small>稳定排序与结果选择是显式内核契约</small></div>
    <div><strong>Policy</strong><span>披露感知</span><small>检索位于信息治理模型内部，而不是简单边界网关之后</small></div>
    <div><strong>OSS</strong><span>计划发布</span><small>公开源代码将在私有测试版加固阶段之后发布</small></div>
  </div>
</section>

## 当“匹配”并不自动等于“可披露”

传统企业搜索常问：用户能否进入某个应用，然后搜索其中的索引。受监管信息系统需要一个更精确的问题：**在当前上下文中，这个主体是否可以接收这一具体结果，而不会跨越分类、隔离域或冲突边界？**

EGOTHOR v4 正是围绕这种区别设计。身份与 MFA 确定“谁在询问”；检索确定“什么匹配”；信息策略决定“什么可以暴露”。披露边界保持可见，而不是在一次不受限制的搜索之后，隐藏在展示层过滤逻辑中。

<div class="architecture-flow architecture-flow--five" aria-label="EGOTHOR v4 检索路径">
  <span><b>摄取</b><small>组装可搜索 barrel</small></span><i>→</i>
  <span><b>驻留视图</b><small>紧凑不可变读取结构</small></span><i>→</i>
  <span><b>查询</b><small>确定性匹配</small></span><i>→</i>
  <span><b>策略上下文</b><small>主体与信息约束</small></span><i>→</i>
  <span><b>披露</b><small>允许的 Top-K 结果</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-egothor-v4-team.png" alt="工程与安全专家共同审查受监管搜索工作流和披露感知系统仪表板。">
    <figcaption><strong>核心区别很简单。</strong> 搜索确定哪些内容匹配，而受监管披露决定哪些内容实际上可以展示给特定主体。</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>它与普通企业搜索有何不同</span>
      <ul>
        <li><strong>策略不是事后的视觉过滤器。</strong></li>
        <li><strong>驻留检索保持确定性</strong>，因此行为可以被测试和推理。</li>
        <li><strong>披露属于正确性的一部分</strong>，尤其当信息类别和隔离域重要时。</li>
        <li><strong>安全与检索</strong> 始终作为两个可见的关注点存在。</li>
      </ul>
    </div>
  </figure>
</div>

## 具有显式不变量的搜索内核

当前工程把索引组装与驻留查询分离。写入路径可以自由构建和验证结构，而高频读取路径则在具有可预测语义的紧凑表示上运行。

<div class="feature-grid feature-grid--three">
  <article><h3>驻留检索</h3><p>搜索运行在专用的面向读取表示上，而不是把索引修改和高频查询混在同一条路径中。</p></article>
  <article><h3>确定性 Top-K</h3><p>排序和并列处理被视为可复现契约，使相同可搜索状态与查询产生稳定的结果顺序。</p></article>
  <article><h3>活动文档可见性</h3><p>文档可见性可以变化，而无需让搜索器假装已删除或被替代的记录仍然有资格出现在结果中。</p></article>
  <article><h3>流式摄取</h3><p>索引构建围绕 barrel 组装和受控发布设计，而不是要求一次性在内存中构建所有内容。</p></article>
  <article><h3>API 边界</h3><p>摄取、驻留访问和查询契约保持分离，使性能优化或存储演进不会悄然改变公开搜索语义。</p></article>
  <article><h3>证据导向工程</h3><p>测试和基准属于内核契约的一部分，包括确定行为，以及公共 API 性能和稳态性能之间的区别。</p></article>
</div>

## 检索策略不是事后补充

搜索内核和信息控制模型回答不同的问题，也需要不同证据。内核证明匹配和排序行为正确；策略层则判断匹配记录是否可以披露给有效主体。

<div class="regulated-stack" aria-label="EGOTHOR v4 信息控制层">
  <article><span>01</span><div><b>身份</b><small>登录、MFA 与已认证主体上下文。</small></div></article>
  <article><span>02</span><div><b>信息策略</b><small>许可级别、分类、完整性、隔离域和冲突边界。</small></div></article>
  <article><span>03</span><div><b>检索</b><small>具有受控结果契约的确定性索引与查询执行。</small></div></article>
  <article><span>04</span><div><b>披露</b><small>只暴露对主体和适用信息规则都允许的结果。</small></div></article>
</div>

<div class="policy-grid">
  <article><strong>许可级别</strong><p>主体允许接收什么级别的信息？</p></article>
  <article><strong>分类</strong><p>记录或集合适用哪种处理类别？</p></article>
  <article><strong>完整性</strong><p>在信息可用之前必须满足哪些完整性或信任条件？</p></article>
  <article><strong>隔离域</strong><p>即使位于同一搜索服务中，哪些信息域仍必须保持分离？</p></article>
  <article><strong>冲突边界</strong><p>哪些组合即使单个项目都可访问，也不得共同披露？</p></article>
  <article><strong>运营策略</strong><p>身份、管理和策略变更如何做到可观察且可审计？</p></article>
</div>

## 私有测试版要证明什么

测试版并不仅仅是 UI 里程碑。它是搜索机制和安全边界必须作为一个运营系统共同工作的阶段：认证访问、索引生命周期、确定性查询行为、管理、实时可见性和披露策略都必须在变化中仍然可理解。

<div class="status-board">
  <article><span>可用</span><strong>索引与搜索</strong><p>核心系统能够摄取内容并执行查询。</p></article>
  <article><span>可用</span><strong>登录与 MFA</strong><p>身份保障属于运行系统的一部分，而不是未来再添加的功能。</p></article>
  <article><span>持续工程</span><strong>内核加固</strong><p>正在改进驻留结构、搜索语义、测试和性能，以形成清晰的公共库边界。</p></article>
  <article><span>持续工程</span><strong>受监管披露</strong><p>授权和信息策略正在作为搜索系统一级约束进行塑造。</p></article>
  <article><span>计划中</span><strong>开源发布</strong><p>当公共架构与契约达到适合外部使用的阶段后发布源代码。</p></article>
</div>

## 下一代 Egothor，而不是兼容性练习

历史上的 Egothor 引擎探索了 Java 全文检索、分布式搜索和动态索引维护。v4 回到搜索引擎核心，但采用现代实现并面对不同的安全问题：**在信息边界本身属于正确性一部分的系统中实现高质量检索。**

<div class="note-panel"><strong>公开范围。</strong> EGOTHOR v4 仍是私有项目。本页有意只在公共层面描述架构和能力；实现细节和仓库链接将在计划中的开源发布时公开，而不是过早暴露私有开发树。</div>

## 相关背景

<div class="resource-grid">
  <a href="/zh/heritage/"><strong>Egothor 沿革</strong><span>从 1998 年搜索引擎到当前研究线 →</span></a>
  <a href="/zh/expertise/"><strong>搜索与信息检索</strong><span>项目背后的工程主题 →</span></a>
</div>
