# 介绍

LIME.JS 是一个轻量的基于 [Koa2](https://koa.bootcss.com/) 的 Node.js Web开发框架，它基于经典的 MVC 范式，致力于提供简单易用的 Web 应用开发体验。

LIME 中无论是 `配置`、`路由` 还是`插件`编写，全部采用 JavaScript 语法。只要你熟悉 Node.js 基本语法并了解 [Koa](https://koa.bootcss.com/) 框架中的基本概念(如中间件)，即可快速上手 LIME.JS 框架。

LIME 是完全开源的，无论是插件还是内核，你都可以轻易查看、编辑、改写、创建这套生态体系内的模块和组件。

[立刻开始](./start.html)

## 特点

* 内核简单、优雅， 易上手

  lime.js 可以无缝衔接 Koa 和 npm 的现有生态；在灵活与标准之间，lime 以 `中庸` 的态度做出权衡，并不断面向用户体验和未来而演进

* 经典 MVC 范式，约定大于配置

  采用最经典的分层架构、约定大于配置的设计理念

* 可扩展性强， 功能完备

  尽管保持了小而精致的内核，但通过插件机制和社区生态打造的脚手架， lime 完全可以胜任复杂项目的开发

* 面向未来的架构和工具链

  对于服务器端而言，升级运行环境的成本要比客户端小的多。也正因如此，lime.js 会毫不客气的废弃对老版本 Node.js 的支持。lime 会用面向未来的态度随时进化

## 项目模板

本指南是对 lime 核心的基础介绍，你可以从内核的角度了解到 lime 提供的一些能力。但在实际项目中，建议你可能更应该选择一个适用于业务场景的项目模板。

LIME内核通过灵活的插件机制让你可以通过插拔插件的方式，应对复杂的Web应用开发，以下是针对特定的场景增加了一些实用[lime 插件](./plugin.md)的项目骨架，可以让你在特定场景的生产环境下游刃有余。例如:

* [MVC](https://github.com/limejs/lime-template-mvc) 这是传统的 MVC 开发模式的项目样板，包含完整的MVC模块，服务端通过模板引擎来渲染视图。`[立刻启动一个传统MVC模式的开发](https://github.com/limejs/lime-template-mvc)`
* [SPA](https://github.com/limejs/lime-template-spa) 基于 Lime+Vue 的前后端分离的项目样板，兼顾单页应用运行和API开发。通过 lime 框架作为中间层来托管 Vue 资源文件，并在 limejs 中通过 webpack-dev-middleware 等插件完成Vue的热加载和热替换。`[立刻启动一个用 Node.js 作为中间层的SPA项目](https://github.com/limejs/lime-template-spa)`
* [SSR](https://github.com/limejs/lime-template-ssr) Lime+VueSSR 服务端同构渲染的项目样板，适合面向消费者、对首屏加载性能和SEO有一定要求的站点；同样实现了热加载热替换、异常处理、cookie处理、api开发等。`[立刻启动一个用 Node.js 作为中间层的同构VueSSR项目](https://github.com/limejs/lime-template-spa)`
* [API](https://github.com/limejs/lime-template-api) API 项目样板，去除了 model层、view层，增加了services层，适合开发REST API项目。 `[立刻启动一个用 Node.js 作为中间层的同构VueSSR项目](https://github.com/limejs/lime-template-spa)`


以上项目样板是官方提供的项目样板，均可通过可自定义的脚手架工具 [lime-cli](https://github.com/limejs/lime-cli) 进行项目创建。

## LIME 功能列表

* 支持 [consolidate](https://github.com/tj/consolidate.js/) 支持列表中的所有模板引擎 （需要安装官方view插件）
* 支持 mongodb、redis 等常用存储介质（需安装官方redis插件，mongodb还未开发）
* 支持自启动 HTTP 服务和站点实例导出两种调用机制
* 支持简易的插件机制拓展 lime 的基本能力
* 支持配合 [lime-cli](https://github.com/limejs/lime-cli) 提供高效的项目工程化能力（如路由、控制器自动创建）