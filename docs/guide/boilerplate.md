# 项目模板

项目模板是指的我们官方提供的针对某些业务场景的 `项目骨架/目录组织样板`


## MVC

最容易理解的开发方式，适合快速构建一个对SEO友好的简单网站出来。特别适合于企业网站。

* [MVC](https://github.com/limejs/lime-template-mvc) 这是传统的 MVC 开发模式的项目样板，包含完整的MVC模块，服务端通过模板引擎来渲染视图。`[立刻启动一个传统MVC模式的开发](https://github.com/limejs/lime-template-mvc)`

## Vue Spa

前后端分离+合并部署。

* [SPA](https://github.com/limejs/lime-template-spa) 基于 Lime+Vue 的前后端分离的项目样板，兼顾单页应用运行和API开发。通过 lime 框架作为中间层来托管 Vue 资源文件，并在 limejs 中通过 webpack-dev-middleware 等插件完成Vue的热加载和热替换。`[立刻启动一个用 Node.js 作为中间层的SPA项目](https://github.com/limejs/lime-template-spa)`



## Vue SSR

前后端分离的同构应用，同时兼顾了 Node.js 层 API 的路由分发


[SSR](https://github.com/limejs/lime-template-ssr) Lime+VueSSR 服务端同构渲染的项目样板，适合面向消费者、对首屏加载性能和SEO有一定要求的站点；同样实现了热加载热替换、异常处理、cookie处理、api开发等。`[立刻启动一个用 Node.js 作为中间层的同构VueSSR项目](https://github.com/limejs/lime-template-spa)`


## RESTFul API

* [API](https://github.com/limejs/lime-template-api) API 项目样板，去除了 model层、view层，增加了services层，适合开发REST API项目。 `[立刻启动一个用 Node.js 作为中间层的同构VueSSR项目](https://github.com/limejs/lime-template-spa)`


