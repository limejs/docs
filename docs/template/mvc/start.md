
# 立刻开始

本指南默认你的系统已经安装最新版本的 [Node.js](https://nodejs.org) 和 npm。接下来，我们创建一个MVC的项目骨架

## 安装 lime-cli 脚手架工具

```bash
  npm install lime-cli -g
```

## 执行初始化命令

```bash
  lime init .
```

如果需要让lime帮你创建一个子目录放置项目，可以把 `.` 换做一个目录名称

## 按照提示选择所需组件

lime-cli 允许你自己选择是否使用模型和视图，所以在 lime-cli 初始化的过程中，你可以根据需要进行交互选择


## 完成

初始化完成后，你可进入项目进行安装依赖，并执行 `npm run dev` 启动项目