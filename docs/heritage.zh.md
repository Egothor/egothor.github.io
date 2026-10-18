---
title: 沿革
lang: zh
description: Egothor 从 1998 年原始搜索引擎，经分布式系统、抓取、地理定位和数据平台，到今天项目的技术发展脉络。
wide: true
page_class: heritage-page
---

<section class="page-hero shell">
  <p class="eyebrow"><span></span> 项目沿革</p>
  <h1>从搜索基础设施<br><em>走向更广泛的工程实验室。</em></h1>
  <p class="page-lede">Egothor 于 1998 年作为搜索引擎项目起步。随后，同一工程脉络继续探索语言处理、分布式服务、网络抓取、网络地理定位、传感器网关和实验性数据平台。本页保存这些发展关系，同时不把已退役系统包装成当前产品。</p>
</section>

<section class="lineage shell" aria-label="Egothor 项目发展时间线">
  <img src="/zh/assets/images/heritage-line.svg" alt="连接 Egothor 从 1998 年至今主要项目族的时间线">
</section>

## 核心脉络

<div class="heritage-grid">
  <article id="egothor-search"><div class="heritage-date">1998–2018</div><h3>Egothor Search Engine</h3><p>一个开源 Java 全文搜索引擎，支持动态索引更新、事务、抄袭检测、增量更新、常见文档格式、扩展布尔模型，以及语言无关的词干处理方法。</p><a href="#egothor-search">历史概要 ↑</a></article>
  <article id="j5m"><div class="heritage-date">2007–2015</div><h3>J5M</h3><p>轻量级分布式应用层，由协作服务、远程对象发现、本地或远程调用、生命周期控制及热备服务实例构成。</p><a href="#j5m">历史概要 ↑</a></article>
  <article id="bobo"><div class="heritage-date">2012–2014</div><h3>Bobo</h3><p>从 Egothor 的抓取需求演化而来的分布式爬虫与虚拟实体平台，后来发展为面向自主网络组件的通用架构。</p></article>
  <article id="galeo"><div class="heritage-date">2013–2014</div><h3>Galeo</h3><p>围绕 IP 地理定位的研究，把网络路径视为异构系统，而不是假设统一、恒定的传播行为。</p><a href="/research/galeo.pdf">Galeo: Continuous Bayesian Topology-Aware IP Geolocation（PDF）</a> · <a href="https://doi.org/10.13140/RG.2.2.36764.45443">DOI: 10.13140/RG.2.2.36764.45443</a></article>
  <article id="qid"><div class="heritage-date">2012 → 2022</div><h3>Egothor3 / Q!D</h3><p>2012 年启动的实验性数据库方向；后续 Q!D 实现基于 J5M 平台，用于探索大规模数据集合的替代处理模型。</p></article>
  <article><div class="heritage-date">2025–2026 →</div><h3>当前 Egothor 世代</h3><p>Radixor 延续语言处理方向，ZeroEcho 扩展到现代密码工程，conflux 提供聚焦的应用基础设施，MethodAtlas 把证据导向工程用于软件保障，而 EGOTHOR v4 则让项目族回到面向受监管环境的全文搜索。</p><a href="/zh/projects/">当前项目 →</a></article>
</div>

## 应用系统

更广泛的项目族还包括围绕网络、传感器和数据采集构建的系统。在 Leo Galamboš 的历史项目列表中，包括 **SNOG**（传感器网络网关）、**SafetyCare**（GPS/GSM 辅助应用）、**Cyclone**（分布式 feed 抓取与分析）以及 **RaSPEL**（LoRaWAN 到 REST 的桥接/控制器）。

<div class="note-panel"><strong>历史背景。</strong> 本页说明经过重新表述，以便适合今天的读者。日期和核心技术描述来自保留的 Egothor 项目页面以及 Leo Galamboš 发布的项目历史。</div>

## 延续至今的原则

这些系统彼此不同，但若干思想反复出现：把复杂度移出关键运行路径；让服务行为明确；偏好紧凑的数据结构；允许组件独立替换或演进；并围绕技术主张保留足够证据，使另一位工程师能够提出挑战。
