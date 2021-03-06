module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: '中文', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: {
      '/record/': [
        '',
        'css',
        'js'
      ],
      '/':[
        'contact',
        'about'
      ],
      // '/':[
      //   {
      //     title: 'Group 1',   // 必要的
      //     path: '/record/js',      // 可选的, 应该是一个绝对路径
      //     children: [
      //       '/about'
      //     ]
      //   },
      //   {
      //     title: 'Group 1',   // 必要的
      //     path: '/record/css',      // 可选的, 应该是一个绝对路径
      //     children: [
      //       '/contact'
      //     ]
      //   },
      // ],
      sidebarDepth: 2,
    },
    displayAllHeaders: true, // 默认值：false
    lastUpdated: 'Last Updated', // string | boolean
    searchMaxSuggestions: 10,
    // 搜索
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    },
    // github
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
  },
  markdown: {
    lineNumbers: true
  }
}