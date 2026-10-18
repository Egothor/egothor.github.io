---
title: Radixor
lang: zh
description: Radixor 将形态学证据编译成适用于 Java 和 Python 的紧凑确定性词干模型，并提供二十种语言的评估数据与可复现制品。
wide: true
page_class: project-detail project-radixor
---

<section class="project-hero shell">
  <div>
    <p class="eyebrow"><span></span> 语言工程 · 研究软件 · Java 与 Python</p>
    <div class="project-title-row"><img src="/assets/images/radixor-mark.svg" alt="" width="86" height="86"><h1>Radixor</h1></div>
    <p class="page-lede">一个确定性的多语言词干处理器，把形态学词典编译成紧凑、可执行的转换。语言知识在离线阶段准备；在线搜索路径执行不可变的编译模型，而不是逐条查询大型文本字典。</p>
    <div class="hero-actions"><a class="button button--primary" href="https://github.com/leogalambos/Radixor">打开代码仓库 ↗</a><a class="button button--quiet" href="https://leogalambos.github.io/Radixor/">技术文档 ↗</a></div>
  </div>
  <div class="metric-panel">
    <div><strong>20</strong><span>种语言</span><small>评估标准集合中的独立版本化默认模型</small></div>
    <div><strong>6.61M</strong><span>表层词形</span><small>二十语言关系评估中的不同词形</small></div>
    <div><strong>99.9988%</strong><span>精确率</span><small>20 种语言确定性 pairwise 结果的汇总精确率</small></div>
    <div><strong>83.4%</strong><span>更小</span><small>从词汇载荷到编译 v7 载荷的总体字节缩减</small></div>
  </div>
</section>

## 把形态学编译成搜索原语

最初的 Egothor 思想是：**从词汇证据学习转换，而不是为每一种语言手写一套词干规则程序**。Radixor 在此基础上补全了显式归约语义、不可变运行时结构、版本化二进制持久化、确定性歧义处理，以及互操作的 Java/Python 运行时。

<div class="architecture-flow architecture-flow--five" aria-label="Radixor 构建与运行流水线">
  <span><b>形态学词典</b><small>已观测词形与规范形式</small></span><i>→</i>
  <span><b>Patch 归纳</b><small>最小代价可执行编辑</small></span><i>→</i>
  <span><b>频率 trie</b><small>证据与备选项</small></span><i>→</i>
  <span><b>归约</b><small>语义共享与收缩</small></span><i>→</i>
  <span><b>编译模型</b><small>不可变运行时查询</small></span>
</div>

Patch 不是预先存储的最终答案，而是一条把输入词形转换为规范表示的指令。这使来自许多词汇家族的证据可以共享结构，也让编译器能够在平面“词 → 输出”映射之外泛化相容的转换。

<div class="feature-grid feature-grid--three">
  <article><h3>一个引擎，多种语言</h3><p>运行时与具体语言无关。语言知识通过版本化模型数据进入系统，因此新增或改进语言主要是模型编译问题，而不是再写一套源代码算法。</p></article>
  <article><h3>保留歧义</h3><p>同一模型既可以给出一个首选结果，也可以按确定顺序给出所有本地支持的候选项。下游搜索系统决定要激活多少歧义。</p></article>
  <article><h3>构建阶段复杂，运行阶段简单</h3><p>归纳、归约和验证离线完成。生产查询只需遍历冻结模型并把编译 patch command 应用于 token。</p></article>
  <article><h3>模型制品是一等对象</h3><p>语言模型是独立版本化、可做完整性检查的部署制品，而不是隐藏在单一可执行文件中的资源。</p></article>
  <article><h3>Java 与原生 Python</h3><p>项目提供 Java 集成和原生 Python/Rust 运行时，它们使用同一版本化编译模型概念。</p></article>
  <article><h3>受控扩展</h3><p>已编译 Java 模型可以重新打开为 builder，加入领域证据，再重新构建、测试并作为新制品部署，而不是在生产中实时修改。</p></article>
</div>

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/assets/images/project-radixor-team.png" alt="计算语言学和语言工程专业人员在双显示器前审查多语言形态学数据。">
    <figcaption><strong>语言工程既是学术工作，也是系统工程。</strong> 当精选词汇知识和实际搜索工程被视为同一条流水线，而不是两个割裂领域时，Radixor 的设计价值最清楚。</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>为什么这个项目属于专业系统工程</span>
      <ul>
        <li><strong>语言学证据</strong>在离线阶段整理，而不是在查询时临时推断。</li>
        <li><strong>多语言模型</strong>保持为显式、版本化制品。</li>
        <li><strong>确定性运行行为</strong>使词干处理能够进入受控系统。</li>
        <li><strong>研究成果</strong>被转化成可部署工程资产。</li>
      </ul>
    </div>
  </figure>
</div>

## 实际测量了什么

2026 年二十语言研究把**形态学合并关系**作为评估对象。用直观语言说，它在非常大的规模上问两个问题：*应该归在一起的词形是否真的归在一起？不相关的词形是否仍保持分离？* 它并不要求每个系统把输出拼写成某个指定词典词元。

<div class="research-band">
  <div class="research-band__intro"><span class="section-kicker">二十语言评估</span><h3>从数百万词形到数万亿 pair 决策</h3><p>评估使用独立整理、源自 UniMorph 的词形范式，并统计确定性词干处理所诱导的关系。这样就能测量错误合并和遗漏合并，而不会把词干字符串本身与词干质量混为一谈。</p></div>
  <div class="research-stats">
    <div><strong>767,167</strong><span>形态学组</span></div>
    <div><strong>6,607,708</strong><span>不同词形</span></div>
    <div><strong>130.2M</strong><span>相关词形 pair</span></div>
    <div><strong>3.052T</strong><span>不相关词形 pair</span></div>
    <div><strong>314</strong><span>已验证场景</span></div>
    <div><strong>20</strong><span>默认语言模型</span></div>
  </div>
</div>

<div class="figure-gallery figure-gallery--two">
  <figure class="figure-card">
    <img src="/zh/assets/images/radixor-evaluation-scale.svg" alt="Radixor 二十语言评估中形态学组、不同词形、相关 pair 和不相关 pair 的对数尺度概览。">
    <figcaption><strong>关键首先是规模。</strong> 这不是一个用于演示的小词表。评估处理数百万已观测词形，并在很大的 pair 空间中同时测量正关系和负关系。</figcaption>
  </figure>
  <figure class="figure-card figure-card--note">
    <div class="figure-callout">
      <span>为什么基于关系的评估更值得信任</span>
      <ul>
        <li><strong>正 pair</strong>告诉我们真正的变体是否保持在一起。</li>
        <li><strong>负 pair</strong>告诉我们不相关形式是否被错误合并。</li>
        <li><strong>词元拼写</strong>不会被当作全部质量标准。</li>
        <li><strong>歧义</strong>可以分别从首选输出和全部候选输出分析。</li>
      </ul>
    </div>
  </figure>
</div>

### 用实际意义理解质量结果

<div class="evidence-grid evidence-grid--light">
  <article><span class="evidence-icon evidence-icon--check">✓</span><div><strong>20 种语言中的 15 种</strong><small>在确定性首选输出中没有产生任何 false-positive 合并。</small></div></article>
  <article><span class="evidence-icon evidence-icon--precision">◎</span><div><strong>1,538 个 false-positive pair</strong><small>对应超过 3.052 万亿个不相关 pair 的总体空间。</small></div></article>
  <article><span class="evidence-icon evidence-icon--recall">↗</span><div><strong>97.5952% recall</strong><small>二十语言确定性输出的汇总召回率。</small></div></article>
  <article><span class="evidence-icon evidence-icon--candidates">≋</span><div><strong>20 种语言中 12 种达到完全关系</strong><small>在能力分析中考虑所有显式保留的 Radixor 候选项时。</small></div></article>
</div>

候选感知结果对于理解设计尤其有用。一个上下文无关词干器必须在真正存在形态学歧义时仍然选出一个结果。Radixor 先保留替代证据；索引器、查询扩展器或上下文层随后再选择适合具体应用的策略。

<div class="note-panel"><strong>这些数字说明什么，也不说明什么。</strong> 它们衡量的是对可用、独立整理的形态学资源的忠实程度。同一资源也用于编译 Radixor 模型，因此这是端到端知识利用实验，而不是对完全缺失于资源中的词汇家族进行预测的实验；它本身也不声称一定提高 MAP、nDCG 或其他外部检索指标。</div>

## 用紧凑模型代替实时字典查询

源词典很有价值，因为它们包含学术整理的形态学证据；但它们并不需要继续成为运行时表示。Radixor 把这些证据蒸馏成 patch program 和归约 trie。

<div class="compression-story" aria-label="Radixor 表示大小比较">
  <div class="compression-copy"><span class="section-kicker">编译表示</span><h3>99.92 MB 词汇证据变成 16.55 MB 编译模型数据</h3><p>基于解压后的载荷测量，不含外层 GZip 封装和包元数据。在全部 20 个模型上，编译 v7 流平均占 <strong>2.50 bytes/评估词形</strong>，而源载荷为 15.12 bytes。</p></div>
  <div class="compression-bars">
    <div><label>词汇源数据 <b>99.92 MB</b></label><span class="bar bar--source" style="--bar:100%"></span></div>
    <div><label>编译 v7 <b>16.55 MB</b></label><span class="bar bar--compiled" style="--bar:16.56%"></span></div>
    <p><strong>6.04×</strong> 总体源/模型比例 · <strong>83.4%</strong> 字节缩减</p>
  </div>
</div>

## 可见的“知识—质量—成本”包络

另一个英语实验故意只使用不同百分比的确定性词典行来编译模型，然后用完整资源评估。目的不是寻找一个“神奇”的词典大小，而是展示当知识被移除时真正牺牲了什么。

<div class="figure-gallery figure-gallery--wide-first">
  <figure class="figure-card">
    <img src="/zh/assets/images/radixor-knowledge-envelope.svg" alt="图表展示英语词典使用比例从 10% 到 100% 时，全词形精确一致率、发生变化词形的一致率以及运行时间。">
    <figcaption><strong>曲线最直观的信息。</strong> 最大质量损失出现在真正需要转换的词形上。运行时间变化更温和，也不是严格单调，因为证据变化会改变编译结构本身。</figcaption>
  </figure>
  <div class="stat-note-card">
    <h3>三个锚点</h3>
    <div class="stat-note-card__grid">
      <article><strong>100%</strong><span>97.478% 全词形精确一致</span><small>97.197% 变化词形一致 · 71.6 ns/token</small></article>
      <article><strong>50%</strong><span>95.262% 全词形精确一致</span><small>86.107% 变化词形一致 · 61.1 ns/token</small></article>
      <article><strong>10%</strong><span>92.868% 全词形精确一致</span><small>76.516% 变化词形一致 · 47.0 ns/token</small></article>
    </div>
    <p>对于非专业读者，这往往比大表格更容易理解：减少词汇证据只带来有限运行时收益，却持续侵蚀词干质量，尤其对真正发生变化的词形。</p>
  </div>
</div>

<div class="data-table-card">
<table>
  <thead><tr><th>使用的词典行</th><th>精确一致 · 所有词形</th><th>精确一致 · 变化词形</th><th>变化词形运行时间</th></tr></thead>
  <tbody>
    <tr><td><strong>100%</strong></td><td>97.478%</td><td>97.197%</td><td>71.6 ns/token</td></tr>
    <tr><td><strong>50%</strong></td><td>95.262%</td><td>86.107%</td><td>61.1 ns/token</td></tr>
    <tr><td><strong>10%</strong></td><td>92.868%</td><td>76.516%</td><td>47.0 ns/token</td></tr>
  </tbody>
</table>
<p class="table-note">绝对延迟与机器和工作负载有关。这条曲线更适合作为工程说明：移除词汇证据主要损害需要实际转换的词形，而运行时间变化较小，也并不严格单调。</p>
</div>

<div class="note-panel"><strong>本站的性能呈现方式。</strong> Radixor 运行时间采用文档化的绝对测量，并与工作负载或质量上下文一起展示。这里刻意不使用较早版本针对 Porter/Snowball 的标题式倍数比较；基准设计已经演进，而当 token 构成和测量路径不同时，跨实现速度倍数很容易被过度解释。</div>

## 二十种默认语言

用视觉方式浏览标准集合，比单纯一串语言名称更容易理解覆盖范围。

<div class="flag-language-grid" aria-label="带国旗或语言标记的 Radixor 默认评估语言">
  <article><span class="flag-emoji">🇨🇿</span><div class="flag-copy"><strong>捷克语</strong><small>cs · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇩🇰</span><div class="flag-copy"><strong>丹麦语</strong><small>da · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇳🇱</span><div class="flag-copy"><strong>荷兰语</strong><small>nl · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇬🇧 🇺🇸</span><div class="flag-copy"><strong>英语</strong><small>en · US/UK 词汇基础</small></div></article>
  <article><span class="flag-emoji">🇫🇮</span><div class="flag-copy"><strong>芬兰语</strong><small>fi · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇫🇷</span><div class="flag-copy"><strong>法语</strong><small>fr · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇩🇪</span><div class="flag-copy"><strong>德语</strong><small>de · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇮🇱</span><div class="flag-copy"><strong>希伯来语</strong><small>he · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇭🇺</span><div class="flag-copy"><strong>匈牙利语</strong><small>hu · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇮🇹</span><div class="flag-copy"><strong>意大利语</strong><small>it · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>挪威博克马尔语</strong><small>nb · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇳🇴</span><div class="flag-copy"><strong>新挪威语</strong><small>nn · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇮🇷</span><div class="flag-copy"><strong>波斯语</strong><small>fa · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇵🇱</span><div class="flag-copy"><strong>波兰语</strong><small>pl · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇵🇹</span><div class="flag-copy"><strong>葡萄牙语</strong><small>pt · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇷🇺</span><div class="flag-copy"><strong>俄语</strong><small>ru · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇪🇸</span><div class="flag-copy"><strong>西班牙语</strong><small>es · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇸🇪</span><div class="flag-copy"><strong>瑞典语</strong><small>sv · 默认模型</small></div></article>
  <article><span class="flag-emoji">🇺🇦</span><div class="flag-copy"><strong>乌克兰语</strong><small>uk · 默认模型</small></div></article>
  <article><span class="flag-badge">YI</span><div class="flag-copy"><strong>意第绪语</strong><small>这里使用语言标记而非国家旗帜</small></div></article>
</div>

<p class="grid-note">在国旗有助于快速定位时使用国旗；当使用某个主权国家旗帜可能造成误导时，则使用语言标记。</p>

## 研究脉络与可复现性

Radixor 是一条始于 2001 年 Egothor 研究线的当代完成形态：从词汇样本推断紧凑的“词形 → 词干”编辑程序，把它们组织到 trie 中，并在搜索系统中执行结果模型。现代工作增加了显式语义归约、统一子树收缩、不可变编译表示、基于证据排序的候选项、模型溯源、Java/原生运行时互操作，以及达到发表级别的评估制品。

评估从设计上就是可审计的。模型标识符和描述符哈希与结果行一起记录；质量快照包含原始混淆计数和派生指标；生成的表格和图形可以从机器可读数据重新构建，而不是人工抄录。

## Radixor 研究系列

完整论文在本站托管，因此除 DOI 注册外也可被直接访问。每个标题都打开 Egothor 上公开的 PDF。

1. [Does a Lexicon-Trained Stemmer Generalize? A 20-Language Study of Held-Out Lexical Families（PDF）](/research/radixor-01.pdf) · [DOI: 10.13140/RG.2.2.34383.85921](https://doi.org/10.13140/RG.2.2.34383.85921)
2. [Edit Costs as Structural Hyperparameters in Dictionary-Induced Stemming: A Multilingual Sensitivity Study（PDF）](/research/radixor-02.pdf) · [DOI: 10.13140/RG.2.2.12573.47845](https://doi.org/10.13140/RG.2.2.12573.47845)
3. [Classifying Multilingual Stemmers by Pareto Strata: Error Regimes in Pairwise Lexical Conflation（PDF）](/research/radixor-03.pdf) · [DOI: 10.13140/RG.2.2.25995.25126](https://doi.org/10.13140/RG.2.2.25995.25126)
4. [The Stemming Policy Is Data: Adapting a Lexicon-Trained Stemmer to Alternative Conflation Objectives（PDF）](/research/radixor-04.pdf) · [DOI: 10.13140/RG.2.2.23898.09926](https://doi.org/10.13140/RG.2.2.23898.09926)
5. [Runtime Efficiency of Lexicon-Trained Stemming: Compiled Structure and a Speed–Reference-Agreement Envelope in Radixor（PDF）](/research/radixor-05.pdf) · [DOI: 10.13140/RG.2.2.27332.18569](https://doi.org/10.13140/RG.2.2.27332.18569)
6. [Lexical Resource Consistency and Learned Transformation Vocabulary in Multilingual Stemming（PDF）](/research/radixor-06.pdf) · [DOI: 10.13140/RG.2.2.34043.07203](https://doi.org/10.13140/RG.2.2.34043.07203)
7. [Compiling Learned Lexical Transformations: Semantic Canonicalization and Accepting-Leaf Generalization in Patch-Command Tries（PDF）](/research/radixor-07.pdf) · [DOI: 10.13140/RG.2.2.12232.69128](https://doi.org/10.13140/RG.2.2.12232.69128)
8. [Where Retrieval Quality Goes: Rethinking Stemming in Modern Search（PDF）](/research/radixor-08.pdf) · [DOI: 10.13140/RG.2.2.22208.90887](https://doi.org/10.13140/RG.2.2.22208.90887)
9. [From Lexical Edits to Verified Stemming Policies: Two-Sided Adaptation in Radixor（PDF）](/research/radixor-09.pdf) · [DOI: 10.13140/RG.2.2.24725.49120](https://doi.org/10.13140/RG.2.2.24725.49120)

**研究综述。** [Learned Conflation Policies: From Lexical Transformation to Reproducible Retrieval（PDF）](/research/radixor-book.pdf) · [DOI: 10.13140/RG.2.2.24253.63209](https://doi.org/10.13140/RG.2.2.24253.63209)

## 项目资源

<div class="resource-grid resource-grid--three">
  <a href="https://github.com/leogalambos/Radixor"><strong>源代码仓库</strong><span>Java、Python/Rust 运行时、模型和发布工作流 ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/"><strong>技术文档</strong><span>快速入门、架构、模型、歧义和基准 ↗</span></a>
  <a href="https://leogalambos.github.io/Radixor/benchmarks/data/stemming-quality.csv"><strong>质量数据集</strong><span>机器可读的词干质量快照 ↗</span></a>
  <a href="https://www.researchgate.net/publication/406886717_Radixor_A_Quarter-Century_Renewal_of_Patch-Command_Trie_Stemming_for_Deterministic_Search_Systems"><strong>架构预印本</strong><span>历史和系统背景 ↗</span></a>
  <a href="/zh/heritage/"><strong>Egothor 沿革</strong><span>研究与搜索发展脉络 →</span></a>
  <a href="https://central.sonatype.com/artifact/org.egothor/radixor"><strong>Maven Central</strong><span>已发布 Java 制品 ↗</span></a>
</div>
