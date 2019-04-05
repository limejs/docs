
# 服务

服务是逻辑的抽象层

## 服务编写

TODO

## 服务加载

TODO

## 服务调用

在 controller 中，内置了一个服务加载的函数

```js
this.service(servieName)
```

服务加载后，会返回服务的一个实例，通过该实例可以引用服务中所有方法