---
title: ZeroEcho
lang: zh
description: ZeroEcho 是模块化 Java 密码与 PKI 工具包，把经典、后量子和混合能力与显式密钥边界和工作流边界结合起来。
wide: true
page_class: project-detail project-zeroecho
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> 密码系统 · Egothor</p>
    <div class="project-title-row"><img src="/assets/images/zeroecho-mark.svg" alt="" width="86" height="86"><h1>ZeroEcho</h1></div>
    <p class="page-lede">模块化 Java 工具包，用于构建需要显式算法选择、受控密钥边界，以及从经典密码平滑演进到后量子和混合部署的密码与 PKI 工作流。</p>
    <div class="hero-actions"><a class="button button--primary" href="https://gitea.egothor.org/Egothor/ZeroEcho">打开代码仓库 ↗</a><a class="button button--quiet" href="https://www.egothor.org/javadoc/zeroecho/lib/">库 JavaDoc ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>PQC</strong><span>NIST 世代算法</span><small>活跃算法清单包含 ML-KEM 和后量子签名家族</small></div>
    <div><strong>Hybrid</strong><span>迁移模型</span><small>在互操作性需要时，经典与后量子机制可以共存</small></div>
    <div><strong>PKI</strong><span>服务层</span><small>签发、吊销、状态和发布都属于架构内部</small></div>
    <div><strong>Offline</strong><span>运营工作流</span><small>同时面向可脚本化、受限交付和联网系统</small></div>
  </div>
</section>

## 把密码学当作架构，而不是算法集合

ZeroEcho 来自一个实际需求：让现代密码能力进入可重复的应用工作流，而不把关键决策藏在全局状态或单体命令中。结果是一个分层工具包，其中算法、密钥、受保护内容、PKI 服务和应用集成都拥有明确边界。

<div class="architecture-flow architecture-flow--five" aria-label="ZeroEcho 架构">
  <span><b>算法</b><small>经典 · PQC · 混合</small></span><i>→</i>
  <span><b>密钥边界</b><small>使用引用，而非游离私钥材料</small></span><i>→</i>
  <span><b>密码工作流</b><small>加密 · 签名 · 验证</small></span><i>→</i>
  <span><b>PKI 服务</b><small>签发 · 吊销 · 状态</small></span><i>→</i>
  <span><b>应用</b><small>CLI · 自动化 · 集成</small></span>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-zeroecho-team.png" alt="密码与系统工程师在实验室环境中使用 PKI 仪表板、无线电信号仪器和安全工作流分析工具。">
    <figcaption><strong>一张架构图往往比功能清单更清楚。</strong> ZeroEcho 把算法家族、密钥托管、密码操作和 PKI 服务连接为一个可控制的系统模型。</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>项目背后的运营思想</span>
      <ul>
        <li><strong>算法敏捷性</strong>意味着显式选择，而不是隐藏默认值。</li>
        <li><strong>密钥边界</strong>与密码原语选择同样重要。</li>
        <li><strong>PKI 属于架构内部</strong>，而不是旁边的附加系统。</li>
        <li><strong>混合迁移</strong>被视为真实工程阶段。</li>
      </ul>
    </div>
  </figure>
</div>

## 算法敏捷，但不假装迁移可以瞬间完成

后量子迁移并不是所有系统都能立即打开的一个开关。证书生态、协议、硬件和对端以不同速度演进。因此 ZeroEcho 把经典、后量子和混合选项保留在同一个工程模型中，而不是把某个家族当作临时旁支。

<div class="capability-lanes">
  <article><span>经典</span><h3>今天的互操作性</h3><p>RSA、ECDSA、Ed25519/Ed448 以及成熟对称模式仍可用于依赖经典密码的协议和对端。</p></article>
  <article><span>后量子</span><h3>在合适的位置迁移</h3><p>ML-KEM 和后量子签名家族可以通过同一套工具选择，而无需另建一套无关应用栈。</p></article>
  <article><span>混合</span><h3>跨越过渡阶段</h3><p>混合构造让部署在互操作性和策略尚未完全跟进时，仍能获得跨算法家族的韧性。</p></article>
</div>

## 密钥材料始终留在边界之后

一个反复出现的设计原则是：上层 PKI 服务不应通过自己的 API 携带原始私钥。密钥通过稳定引用寻址；签名和公钥检索通过密钥材料边界完成。这样 PKI 层可以专注于证书、配置档、策略和状态，而不会变成第二个密钥库。

<div class="feature-grid feature-grid--three">
  <article><h3>显式密钥引用</h3><p>稳定的密钥标识符让服务请求密码操作，而不把私钥材料当作普通应用数据。</p></article>
  <article><h3>生命周期感知操作</h3><p>长时间运行或外部签名操作通过显式状态与幂等性建模，而不是假设每个提供商调用都会同步完成。</p></article>
  <article><h3>已验证内容边界</h3><p>持久化密码内容绑定完整性检查和受控引用，使恢复和继续执行保持可审计。</p></article>
  <article><h3>版本化算法身份</h3><p>算法和互操作性选择被显式表示，使已部署默认值保持稳定，同时有意引入新的组合。</p></article>
  <article><h3>确定性配置</h3><p>配置应当可检查、可复现，而不是依赖进程范围内可变的提供商状态。</p></article>
  <article><h3>可脚本化交付</h3><p>CLI 向自动化和离线工作流暴露相同底层能力，而不是另一套密码实现。</p></article>
</div>

## PKI 是当前系统的一部分

PKI 层围绕服务契约组织，而不是一个包办所有功能的 CA 对象。证书请求、签发、吊销、配置档、策略、发布、状态对象、备份/导入导出和凭据清单相互分离，因此可以在共享存储和密钥边界的同时独立演进。

<div class="pki-map">
  <article><strong>证书生命周期</strong><span>请求 · 持有证明 · 签发 · 吊销</span></article>
  <article><strong>策略与配置档</strong><span>批准的算法/配置档组合 · 有效期 · 元数据</span></article>
  <article><strong>状态服务</strong><span>OCSP 风格证书状态 · 时间戳服务集成</span></article>
  <article><strong>发布</strong><span>证书/状态制品与持久内容引用</span></article>
  <article><strong>密钥操作</strong><span>私钥材料始终位于密钥材料提供商边界内</span></article>
  <article><strong>恢复</strong><span>持久化、备份，以及重启后安全继续长期操作</span></article>
</div>

目标刻意比“生成一个证书”更严格。生产 PKI 必须能够回答：请求了什么、授权了什么、哪个密钥证明了持有、应用了哪个配置档、持久化了什么，以及重启后如何重建状态。

## 可靠的数据工作流

ZeroEcho 还保留最初的运营重点：多接收者保护、可脚本化加密与签名，以及不假设永久联网的工作流。离线或间接传输被视为合法部署条件，而实验性的隐蔽导出技术则与核心密码和 PKI 架构隔离。

<div class="note-panel"><strong>密码部署与版本有关。</strong> 算法、提供商能力和协议互操作性会随时间变化。本页面解释工程模型；对于某个具体版本的精确 API 和算法可用性，代码仓库和生成的 JavaDoc 仍是权威来源。</div>

## 项目资源

<div class="resource-grid resource-grid--three">
  <a href="https://gitea.egothor.org/Egothor/ZeroEcho"><strong>源代码仓库</strong><span>代码、版本历史和项目文档 ↗</span></a>
  <a href="https://www.egothor.org/javadoc/zeroecho/lib/"><strong>库 JavaDoc</strong><span>核心密码 API ↗</span></a>
  <a href="https://www.egothor.org/javadoc/zeroecho/pki/"><strong>PKI JavaDoc</strong><span>PKI 服务 API ↗</span></a>
  <a href="https://www.egothor.org/javadoc/zeroecho/app/"><strong>应用 JavaDoc</strong><span>CLI 与应用集成 ↗</span></a>
  <a href="https://www.researchgate.net/publication/396241638_ZeroEcho_No_Signal_Is_Ever_Truly_Silent_A_Modular_Toolkit_for_Covert_Resilient_and_Future-Proof_Communication"><strong>项目论文</strong><span>最初工具包范围与研究背景 ↗</span></a>
  <a href="/zh/projects/methodatlas/"><strong>MethodAtlas</strong><span>使用 ZeroEcho 签名保护证据包 →</span></a>
</div>
