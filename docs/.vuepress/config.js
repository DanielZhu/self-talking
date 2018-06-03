module.exports = {
  title: 'XiaoDan\'s self-talking',
  base: '/self-talking/',
  ga: 'UA-32456518-4',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ]
  },
  sidebar: [
    '/',
    '/about/',
    {
      title: 'Group 1',
      collapsable: false,
      children: [
        '/guide/'
      ]
    }
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../assets/images'
      }
    }
  },
  markdown: {
    toc: {includeLevel: [2, 3]}
  }
}
