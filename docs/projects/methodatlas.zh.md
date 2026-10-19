---
title: MethodAtlas
lang: zh
description: MethodAtlas 将现有测试源代码转化为确定性清单、可选的 AI 辅助安全分类，以及跨八种语言可复现的审计证据。
wide: true
page_class: project-detail project-methodatlas
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> 软件保障 · 开源</p>
    <div class="project-title-row"><img src="/assets/images/methodatlas-mark.svg" alt="" width="86" height="86"><h1>MethodAtlas</h1></div>
    <p class="page-lede">在源代码层面呈现测试套件实际包含的内容，并在需要时加入安全分类、控制映射和评审证据。确定性清单始终与 AI 解释分离，使结果能够被检查和复现。</p>
    <div class="hero-actions"><a class="button button--primary" href="https://accenture.github.io/MethodAtlas/">阅读文档 ↗</a><a class="button button--quiet" href="https://github.com/Accenture/MethodAtlas">GitHub 仓库 ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>8</strong><span>种语言</span><small>覆盖主流、脚本和企业语言的测试发现</small></div>
    <div><strong>SARIF 2.1</strong><span>CI 输出</span><small>与安全工具和开发工具的一等集成</small></div>
    <div><strong>170+</strong><span>凭据模式</span><small>在可选 AI 分诊之前使用确定性秘密候选规则目录</small></div>
    <div><strong>Signed</strong><span>证据包</span><small>可使用经典、PQC 或混合签名保护的防篡改评审包</small></div>
  </div>
</section>

## 从源代码到可辩护的证据

一次成功的测试运行只回答“测试是否通过”。保障工作会提出另一组问题：**有哪些测试？哪些测试覆盖安全属性？它们支持哪些控制？上次评审后发生了什么变化？证据能否复现？** MethodAtlas 正是围绕这个缺口构建。

<div class="architecture-flow architecture-flow--five" aria-label="MethodAtlas 证据工作流">
  <span><b>源代码树</b><small>现有测试代码</small></span><i>→</i>
  <span><b>发现</b><small>确定性解析器</small></span><i>→</i>
  <span><b>增强</b><small>可选 AI 与分类体系</small></span><i>→</i>
  <span><b>评审</b><small>覆盖项与漂移检查</small></span><i>→</i>
  <span><b>证据</b><small>SARIF · 覆盖率 · 签名包</small></span>
</div>

架构有意把**方法发现定义为结构化源代码分析问题，而不是 AI 问题**。AI 可以分类安全相关性、建议标签或帮助分诊发现项，但它只是叠加在确定性清单之上的显式增强阶段。

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-methodatlas-team.png" alt="软件保障专业人员在现代办公环境中审查测试清单、工作流阶段和证据仪表板。">
    <figcaption><strong>为评审而设计，而不仅是自动化。</strong> 当团队需要解释结果如何产生、以及人工判断在哪一步介入时，MethodAtlas 的价值最明显。</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>为什么这种工作流适合受监管交付</span>
      <ul>
        <li><strong>现有测试仍然有价值</strong>，因为工具首先盘点已有内容。</li>
        <li><strong>AI 保持可选</strong>，而不是获得结果的唯一方式。</li>
        <li><strong>评审是显式步骤</strong>，标签或证据在成为权威结果前可以被检查。</li>
        <li><strong>输出适合交付流水线</strong>，包括 SARIF、CSV、控制覆盖矩阵和签名证据包。</li>
      </ul>
    </div>
  </figure>
</div>

## 八种语言，一个证据模型

<div class="language-matrix">
  <article><strong>Java</strong><span>JUnit 5 · JUnit 4 · TestNG</span><small>AST 发现 · 源代码回写</small></article>
  <article><strong>C#</strong><span>xUnit · NUnit · MSTest</span><small>基于语法的发现 · 源代码回写</small></article>
  <article><strong>TypeScript / JavaScript</strong><span>Jest · Vitest · Mocha</span><small>插件发现</small></article>
  <article><strong>Go</strong><span>testing package</span><small>插件发现</small></article>
  <article><strong>Python</strong><span>pytest</span><small>插件发现</small></article>
  <article><strong>PowerShell</strong><span>Pester</span><small>插件发现</small></article>
  <article><strong>SAP ABAP</strong><span>ABAP Unit · ecATT</span><small>企业测试清单</small></article>
  <article><strong>COBOL</strong><span>MFUnit · COBOL-Check</span><small>企业测试清单</small></article>
</div>

各语言插件产生统一的方法级记录。即使一个技术组合同时包含现代服务、脚本和长期运行的企业平台，保障工作流也可以保持一致。

## 不只是分类，而是证据能力

<div class="feature-grid feature-grid--three">
  <article><h3>安全分类体系</h3><p>AI 辅助分类可以把测试映射到封闭且版本化的安全分类体系，或与组织自身控制框架对齐的自定义体系。</p></article>
  <article><h3>置信度与评审队列</h3><p>每个方法的置信度分数支持阈值与人工评审队列，而不是强迫采用“AI 说是/否”的二元模式。</p></article>
  <article><h3>内容指纹</h3><p>SHA-256 源代码指纹让团队识别未变化的类、复用已有 AI 结果，并证明证据是否来自相同测试内容。</p></article>
  <article><h3>差异报告</h3><p>可以比较两个清单，展示新增、删除或修改的方法，适用于发布证据和 CI 回归门禁。</p></article>
  <article><h3>控制覆盖</h3><p>标签可映射到用户提供的控制标识符，使输出突出真正的覆盖缺口，而不是把测试数量本身误当作保障。</p></article>
  <article><h3>可复现收据</h3><p>影响扫描的输入——包括实际使用的 LLM 提示模板——都可以生成指纹，让未来评审者重建结果的产生过程。</p></article>
</div>

## AI 是可选的，也是有边界的

MethodAtlas 支持本地 Ollama 推理、云端提供商，以及适用于源代码不能发送到外部 API 环境的两阶段手工 AI 工作流。人工评审后的覆盖项会持久保存，源代码写回与分类被刻意分离，以便修改进入代码前先经过评审。

<div class="evidence-path">
  <article><span>01</span><div><strong>确定性基线</strong><p>无需 LLM 即可发现测试方法、框架元数据、位置和源代码身份。</p></div></article>
  <article><span>02</span><div><strong>可选解释</strong><p>通过本地、云端或手工 AI 增加安全相关性、分类标签、理由和置信度。</p></div></article>
  <article><span>03</span><div><strong>人工权威</strong><p>评审、覆盖并持久化决策；检测源代码注解与后续分类之间的漂移。</p></div></article>
  <article><span>04</span><div><strong>可审计输出</strong><p>生成适合 CI 的记录、控制覆盖、收据或防篡改证据包。</p></div></article>
</div>

## 把凭据检测作为独立的确定性信号

同一保障流水线也可以在源代码中寻找凭据候选项。候选发现使用精心维护的确定性规则目录，包含 170 多种厂商凭据格式；数值默认进行掩码。启用 AI 时，它只在后续阶段评估可信度，并把候选项与看似使用该凭据的端点关联起来——不会凭空创造底层匹配。

<div class="note-panel"><strong>为什么这种分离重要。</strong> 在受监管评审中，“模型发现了它”并不是强有力的溯源。MethodAtlas 把确定性发现、可选概率解释和人工决策保持为可区分阶段，因此每个阶段都可以独立受到质询。</div>

## 为不想只使用 CLI 的评审者提供交互工作流

桌面 GUI 围绕同一模型提供面向评审者的工作流：浏览源代码、语法高亮、类/方法结果树、标签决策、暂存修改和批量回写。评审动作会创建证据 CSV 记录和持久化覆盖数据，因此 GUI 决策不会只是某台工作站上的临时状态。

<div class="feature-grid">
  <article><h3>暂存源代码修改</h3><p>建议注解可以先在内存中评审和暂存，再由明确的 “Save All Changes” 操作写回。</p></article>
  <article><h3>审计轨迹</h3><p>评审决策被记录为带时间戳的证据和可复用覆盖项，保留机器建议与人工决策之间的区别。</p></article>
  <article><h3>AI 配置档</h3><p>具名提供商配置允许操作员在本地与远程推理之间切换，而不把该选择嵌入发现引擎。</p></article>
  <article><h3>插件选择</h3><p>每次运行可选择启用哪些发现插件，使评审者能够把异构仓库缩小到当前任务相关的语言。</p></article>
</div>

## 证据包与 ZeroEcho

证据包把扫描输出组合成带 SHA-256 清单的防篡改目录。需要签名时，MethodAtlas 可以使用 **ZeroEcho** 生成经典、后量子或混合签名。这把两个 Egothor 工程主题实际连接起来：先发现保障证据，再保护证据包本身的完整性。

## 项目脉络

MethodAtlas 最初基于 **Egothor 开发的开源基础**。**Accenture 随后扩展了这一基础**，加入更多能力；扩展后的公共项目目前发布在 Accenture 的 GitHub 组织下。这里描述的是项目沿革，并不把它表达为机构合作关系或背书。公共项目采用 **Apache License, Version 2.0**。

## 项目资源

<div class="resource-grid resource-grid--three">
  <a href="https://accenture.github.io/MethodAtlas/"><strong>文档</strong><span>概念、工作流和 CLI 参考 ↗</span></a>
  <a href="https://github.com/Accenture/MethodAtlas"><strong>源代码仓库</strong><span>公开源代码、问题和版本发布 ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/cli-reference/"><strong>CLI 参考</strong><span>命令行选项和输出模式 ↗</span></a>
  <a href="https://accenture.github.io/MethodAtlas/concepts/for-security-teams/"><strong>安全团队指南</strong><span>结果、评分、漂移、发现与审计 ↗</span></a>
  <a href="/zh/projects/zeroecho/"><strong>ZeroEcho</strong><span>证据包密码签名 →</span></a>
  <a href="/zh/expertise/"><strong>软件保障</strong><span>Egothor 工程背景 →</span></a>
</div>
