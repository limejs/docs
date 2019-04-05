# 配置

lime 的配置文件放置在 config 目录下。所谓配置，就是集中修改站点的一些基本属性的地方。

例如 存储层数据库的账户密码、站点启动时监听的端口等

## 环境

config 目录下的配置分为 4 个文件，他们是一种约定，其职责分别如下:

* common.js 公共配置，所有环境都用到的配置
* dev.js 开发环境配置
* test.js 测试环境配置
* prod.js 生产环境配置

通常情况下，业务中一般都是有以上3种环境存在。因此 lime 默认提供了这种约定，倘若你没有这么多环境，那么只需把配置写在 `common.js` 中即可。
commons.js用于放置3个环境共用的配置

我们把 dev/test/prod 这些配置叫做 `环境配置`。那么，在应用运行时，我们最终通过 `app.config` 拿到的配置对象是经过合并的，其合并原理是:

> 把 `环境配置对象` 的内容 合并到 `公共配置对象` 上完成的，因此在字段冲突时，会以当前环境的配置文件中的字段值为准。

比如你在 dev.js 中定义了一个 dbpass 字段值是 `devpassword`，在 common.js 中定义的字段值是 `password` 。 那么 当你在开发环境的应用启动后拿到的 dbpass 字段值便是 `devpassword`


## 读取配置

在 lime 中的站点配置初始化之后，会挂在到 Lime 实例的 config 属性上。因此在任何地方你都可以轻易获取到全站的配置信息。例如:

* controller中通过 `this.app.config` 或 `this.config`
* 插件中通过 app.config
* 插件声明文件 `plugin/index.js` 中通过外部传入的 `config` 参数也可拿到站点配置

