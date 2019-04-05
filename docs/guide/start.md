
# 立刻开始

本指南默认你的系统已经安装最新版本的 [Node.js](https://nodejs.org) 和 npm。接下来，我们从零开始创建一个基于 lime 的项目

## 创建项目

### 创建一个项目目录

```bash
  # 创建一个项目目录 lime-demo
  mkdir lime-demo
  cd lime-demo
  # 初始化 package.json
  npm init -y
  # 安装 lime.js 核心作为项目依赖
  npm install @limejs/core --save
```

### 创建规范的目录结构

```bash
  # 创建一系列目录和文件
  mkdir -p config plugin mvc/controller mvc/view mvc/model
  touch mvc/router.js mvc/controller/home.js
  touch app.js

  # 此时 目录结构如下所示
  |-config # 站点配置
    |-common.js
    |-dev.js
    |-test.js
    |-prod.js
  |-plugin # 站点插件
    |-index.js
  |-src
    |-controller
      |-home.js # 一个叫做 Home首页 的 控制器
    |-view
      |-home.hbs
    |-model
    |-router.js # 站点路由
  |-app.js # 站点应用入口
  |-package.json
```

事实上，目前 lime 要求你 `必须` 使用这样的目录结构，而不是 `可以`; (尽管可以在实例化 LIME 的时候修改，但我们并不推荐这样做)。


## 编写代码

### 编写配置代码

```js
// common.js
module.exports = {
    // 由于我们暂时不需要配置，所以导出为空对象即可
}
```

### 编写路由和控制器代码

```js
  // router.js 中定义路由
  module.exports = (router) => {
    router.get('/', 'home@index')
  }

  // home.js 中定义index首页请求的逻辑
  module.exports = {
    async index() {
      this.ctx.body = 'hello lime' // 通过 this.ctx 可以访问到 Koa 上下文对象
    }
  }

  // app.js 中引入 lime 框架内核并启动
  const Lime = require('@limejs/core')
  const app = new Lime()
  app.listen()
```


控制器代码中的 `index` 函数叫做控制器的 `action`，它本质上是一个完全意义上的 Koa 中间件函数，该函数所传入的 ctx 和 next 参数分别表示 Koa 的 ctx 上下文对象以及下一个中间件函数。

## 启动应用

安装一个跨平台的环境变量设置工具:

```bash
npm install cross-env --save-dev
```

然后我们在 package.json 中编写一段 npm 启动脚本:

```js
  "scripts": {
    "dev": "cross-env NODE_ENV=development node app.js", // 这个表示把NODE_ENV环境变量设置为development，并启动app.js
    "start": "corss-env NODE_ENV=production node app.js" // 这个表示把NODE_ENV环境变量设置为production，并启动app.js
  }
```

然后命令行执行

```bash
npm run dev
```

启动后，命令行会提示监听的端口号。如果一切顺利，此时打开浏览器访问 <http://localhost:3000> 便可以看到

```bash
hello lime! # 看到它 说明已经运行成功
```


## 渲染视图

刚刚，我们通过 `ctx.body` 把一串纯文本响应给的浏览器，但有时我们需要在服务端渲染 html 视图。对lime来说，一切皆插件，包括渲染视图在内。因此你需要首先安装一下官方提供的 `view` 插件

```bash
npm install @limejs/plugin-view --save
```

然后在插件定义中声明要使用view视图插件:

```js
module.exports = function(config) {
    return [
        '@limejs/plugin-view'
    ]
}
```

接下来，我们编写视图代码: 我们在 view 目录下创建一个 `home.hbs` 的文件，并编写 [handlebar](https://handlebarsjs.com/) 模板:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>{{title}}</h1>
</body>
</html>
```

然后在 controller 中，我们把刚才的 `ctx.body` 代码修改为:

```js
const HomeController = {
    async index(ctx, next) {
        this.render('home', {title: 'hello lime view'})
    }
}
module.exports = HomeController
```

命令行重新启动应用，就可以看到浏览器返回了服务端渲染好的 html 结构。视图渲染基于 [koa-views](https://github.com/queckezz/koa-views) 实现。

## 总结

我们通过一顿简单的操作，就编写了一个 router 和 controller 并实现了 view 视图渲染。但前文也说了，在实际项目开发的时候，还是推荐你使用我们打造的[官方项目模板](./boilerplate.md)，模板中提供了更易用的工具来方便开发和调试，并针对特定的使用场景添加了特定的插件扩展。