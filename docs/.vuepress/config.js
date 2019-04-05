module.exports = {
    title: 'LIME.JS',
    description: 'limejs 是一个基于 MVC 的 Node.js Web 开发框架',
    base: '/',
    themeConfig: {
        // sidebar: 'auto',
        sidebar: {
            '/guide/': [
              'start',
              'config',
              'router',
              'controller',
              'view',
              'service',
              'plugin',
              'error',
              'deploy',
              'boilerplate'
            ],
            '/template/mvc/': [
              'start',
              'config',
              'controller',
              'view',
              'model',
              'service'
            ],
            '/template/spa/': [
              'start',
              'config',
              'mode'
            ],
            '/template/ssr/': [
              'start',
              'config',
              'mode'
            ],
            '/template/api/': [
              'start',
              'config'
            ]
          },
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
          { text: '指南', link: '/guide/' },
          {
            text: '项目样板',
            items: [
              { text: 'MVC', link: '/template/mvc/' },
              { text: 'SPA', link: '/template/spa/' },
              { text: 'SSR', link: '/template/ssr/' },
              { text: 'API', link: '/template/api/' },
            ]
          },
          {
            text: '官方插件',
            items: [
              { text: '全局日志', link: 'https://github.com/limejs/plugin-global-logger' },
              { text: '上下文日志', link: 'https://github.com/limejs/plugin-ctxlog-logger' },
              { text: '文件上传', link: 'https://github.com/limejs/plugin-upload' },
              { text: '视图渲染', link: 'https://github.com/limejs/plugin-view' },
              { text: '单页渲染', link: 'https://github.com/limejs/plugin-vuespa' },
              { text: '服务端渲染', link: 'https://github.com/limejs/plugin-vuessr' },
              { text: '请求体解析', link: 'https://github.com/limejs/plugin-body-parser' }
            ]
          },
          {
            text: '生态',
            items: [
              { text: 'CLI工具', link: 'https://github.com/limejs/lime-cli' },
              { text: 'CMS', link: 'https://github.com/limejs/limecms' }
            ]
          },
        ],
        repo: 'limejs/lime',
        repoLabel: 'Github',
        // editLinks: true,
        // 默认为 "Edit this page"
        // editLinkText: '帮助我们改善此页面！'
      }
}





