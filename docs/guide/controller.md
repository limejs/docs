# 控制器

控制器 又叫 controller， 是后端请求路由之后的主要处理入口。在这里你可以调用 model 层来获取数据，也可以调用 render函数渲染视图，同时也可以操作service层的函数们。


## 渲染视图

视图类会作为依赖注入到 controller 中，你可以通过 `this.render` 访问到view视图原型。

## 调用服务

TODO

## 调用模型

TODO