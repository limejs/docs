module.exports = {
    title: 'LIME.JS',
    description: 'limejs 是一个基于 MVC 的 Node.js Web 开发框架',
    base: '/',
    themeConfig: {
        // sidebar: 'auto',
        sidebar: {
            '/guide/': [
              '',
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
            ]
          },
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
          { text: '指南', link: '/guide/' },
          {
            text: '项目模板',
            items: [
              { text: 'MVC', link: '/template/mvc' },
              { text: 'SFB', link: '/template/spa' },
              { text: 'SFB', link: '/template/ssr' },
              { text: 'REST API', link: '/template/api' },
            ]
          },
          { text: 'CLI工具', link: 'https://github.com/limejs/lime-cli' },
          {
            text: '生态',
            items: [
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





