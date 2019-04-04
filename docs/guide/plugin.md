# 插件

LIME 中插件是非常重要的一部分内容。LIME 实际上内核本身没有任何 Web 业务相关的功能（监听网络请求除外）。几乎所有的 Web 功能都需
要通过插件来实现。


## 编写一个插件

### 理解插件目录

编写插件之前，我们先来了解下 LIME 插件的加载机制。在一个 LIME 项目中，项目目录通常是这样的:

```js
|- config
|- plugin
  |-index.js
  |-plugin-static.js
|-src
|- app.js

```

其中 src 目录放置业务逻辑的源代码，而 plugin 目录就是放置插件。 


### 插件声明

`plugin/index.js` 是插件的声明和 `options` 配置文件，只有在 index.js 中声明了的插件才会加载。一个典型的插件配置如下:

```js
module.exports = function(config) {
  return [
    'plugin-global-logger',
    {
      name: 'plugin-logger',
      options: {
        proxy: true // 是否信任代理，信任的话则打印请求时会 X-Forwarded-Host 获取主机名，否则使用 host
      }
    },
    'plugin-static',
    'plugin-view',
    'plugin-service',
    {
      name: 'plugin-redis',
      options: {
        
      }
    }
  ];
};

```

数组中每一项是一个 String 或 Object 类型的插件声明，可以传入 String 格式的插件文件名或 npm 包名，也可以传入一个对象，对象包含一个 name 和 options 属性。




插件本质上就是一个 JavaScript 代码文件。

一个插件，就是一个js文件。

```js

```


## 官方插件


## 社区插件

