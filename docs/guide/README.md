# 介绍

limejs 是基于 [Koa2](https://koa.bootcss.com/) 实现的一个基本 MVC Web 开发框架。它能帮助你基于 MVC 模式快速开发轻量级的 Node.js Web 应用。limejs 致力于最小化侵入 Koa2 生态，因此我们把 Koa 的 API 完全暴露给开发者，无论你是否熟悉 Koa，都可以轻松上手 lime。

## 项目模板

本指南是对 lime 核心的基础介绍，但在实际项目中，建议你可能更应该选择一个适用于业务场景的项目模板，他们是针对特定的场景进行了优化的项目骨架，可以让你在对应场景下用推荐的实践方式来使用 lime。例如:

* 适用于开发 REST API 项目的 [lime-template-api](#)
* 适用于开发 Vue SSR 项目的 [lime-template-sfb](#)

这些项目模板本质上就是在 lime 内核之上按照主流约定组织好了目录结构，并增加了适当的 [lime 插件](./plugin.md) 而已，因此 `limejs` 与 `项目模板` 的关系便是 `内核与骨架` 的关系。

## LIME 特性

* 支持 [consolidate](https://github.com/tj/consolidate.js/) 支持列表中的所有模板引擎
* 内置了 mongodb、redis 等常用持久化存储的ORM
* 支持自启动 HTTP 服务和站点实例导出两种调用机制
* 支持插件机制拓展 lime 的基本能力
* 可任意拆卸基础组件模块，从而适应不同的业务场景


