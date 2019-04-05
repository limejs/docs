# 部署

## pm2 启动

pm2 是 Node.js 的优秀进程管理器，你可以通过如下方式安装 pm2

```js
npm install pm2 -g
```

安装完成后，最简单的方式是通过命令行直接启动 LIME 应用:

```bash
pm2 start ./app.js
```

当然，更优雅的，你应该使用一个 pm2 的配置文件来启动 LIME，从而进行更多的自定义（例如日志的处理）。我们这里提供一份基本的 pm2 配置文件:

```js
{
    TODO
}
```

## nginx 配置

对于 Node.js 的 Http 应用来说，为了安全性，通常都是通过 Nginx 作为反向代理进行部署。

Nginx 的反向代理配置也比较简单，只需配置一个 http server，并把请求转发到 LIME 所监听的端口。这里是一份 Nginx 配置的示例:

```js
TODO
```

## docker

docker 是 DevOps 中持续部署的优雅方案，LIME 作为一个 Node.js 应用，通过 Docker 部署一样非常简单。我们这里提供一个 DockerFile 的示例:

```js
Waiting todo
```