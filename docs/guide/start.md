
# 立刻开始

本指南默认你的系统已经安装最新版本的 [Node.js](https://nodejs.org) 和 npm。接下来，我们从零开始创建一个基于 lime 的项目

## 创建项目

第一步，创建一个项目目录

```bash
# 假设你的项目名字叫 myproject
mkdir myproject
```

初始化 package.json

```bash
cd myproject
# 根据命令行提示填写对应的 项目名称 版本 等
npm init
```

## 创建目录结构

第二步，在 myproject 目录下，创建一个 limejs 项目的基础文件。目前 lime 内核所推荐的目录结构相当简洁，根目录下只需要有 3个 必要的目录或文件即可:

```js
config 站点配置
    |- site.js
src 站点业务逻辑
    |- controller 控制器
    |- model 模型
    |- view 视图
    |- router.js 后端路由
app.js 站点主入口，可使用 node app.js 启动站点
```

事实上，目前 lime 要求你 `必须` 使用这样的目录结构，而不是 `可以`; (尽管可以在实例化 LIME 的时候修改，但我们并不推荐这样做)。

## 安装 limejs

在 myproject 项目根目录下安装 limejs 作为 npm 依赖:

```bash
npm install @limejs/core --save
```

安装完成后，我们在项目的 `app.js` 中编写站点启动代码:

```js
const Lime = require('@limejs/core')
const app = new Lime({
    root: __dirname
})
const port = process.env.PORT || 0
app.listen(port, () => {
    console.log(`启动成功: ${server.address().address}:${server.address().port}`))
})
```

由于 lime 需要一些基本站点配置，因此我们在 config 目录下新建一个 `site.js` 并编写基本的站点配置:

```js
module.exports = {
    // 站点启动配置
    src: '../src', // 业务代码位置
    // 域名和代理配置
    proxy: false,
    // cookie 加密配置
    cookieKeys: ['abc', 'def']
}
```

## 创建路由和控制器

在 `src/router.js` 中创建一个路由

```js
module.exports = (router) => {
    router.get('/', 'home@index')
}
```

其中 [router](https://github.com/alexmingoia/koa-router/issues) 对象拥有 `get`、`post`、`put` 等 http 相对应的方法，其第一个参数表示客户端 url 请求的 path 部分，第二个参数该路由匹配后的 controller 处理器。

而处理器是一个由 `@` 符号分隔的字符串，前半部分表示 controller 文件名，后半部分表示对应的处理方法（我们称之为 action）。例如这里的: `home@index`, 就表示 `controller/home.js` 这个控制器内的 index 方法。

由此便知，我们还需要去 src/controller 下添加一个叫做 `home.js` 的文件，然后在该文件中导出对应的 controller 和 action:

```js
const HomeController = {
    // 查询用户列表
    async index(ctx, next) {
        ctx.body = 'hello lime'
    }
}
module.exports = HomeController
```

每一个 action 函数，都必须声明为异步(async)的，它是一个 Koa2 完全意义上的中间件处理函数。因此，你可以接收到 `ctx` 上下文对象和 `next` 函数，你可以尽情使用 Koa 生态下所有 API。

## 启动应用

我们在 package.json 中编写一段启动脚本:

```js
  "scripts": {
    "dev": "cross-env NODE_ENV=development node app.js",
    "start": "corss-env NODE_ENV=production node app.js"
  }
```

然后命令行执行

```bash
npm run dev
```

启动后，命令行会提示监听的端口号。接下来在浏览器打开，便可看到浏览器输出 `hello lime`

## 渲染视图

刚刚，我们通过 `ctx.body` 把一串纯文本响应给的浏览器，但有时我们需要在服务端渲染 html 视图。对 lime 来说，也非常简单，首先，我们在 view 目录下创建一个 `index.hbs` 的文件，并编写 [handlebar](https://handlebarsjs.com/) 模板:

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
    // 查询用户列表
    async index(ctx, next) {
        // view 视图对象可以在 controller的 action 中使用 this.view 取得。
        this.view.render('../view/index', {title: 'hello lime'})
    }
}
module.exports = HomeController
```

我们在命令行重新启动应用，就可以看到浏览器返回了服务端渲染好的 html 结构。视图渲染基于 [koa-views](https://github.com/queckezz/koa-views) 实现。

## 总结

我们通过一顿简单骚气的操作，就编写了一个 router 和 controller 并实现了 view 视图渲染。但前文也说了，在实际项目开发的时候，还是推荐你使用我们打造的[官方项目模板](./boilerplate.md)，模板中提供了更易用的工具来方便开发和调试，并针对特定的使用场景添加了特定的插件扩展。