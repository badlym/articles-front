module.exports = {
    base: '/articles-front/',
    title: '前端知识点与面试题',
    head: [
        ['meta', { name: 'referrer', content: 'no-referrer' }],
    ],
    themeConfig: {
        sidebar: [
            ['/', '简介'],
            ['/js', 'JavaScript'],
            ['/css', 'CSS'],
            ['/html', 'HTML'],
            ['/vue', 'Vue'],
            ['/browser', '浏览器'],
            ['/network', '计算机网络'],
            ['/node', 'Node'],
            ['/webpack', 'Webpack'],
            ['/safe', '前端安全'],
            ['/other', '其他'],
        ],
        displayAllHeaders: true,
        repo: 'https://github.com/badlym/atticles-front',
        repoLabel: '给作者的 Github 点个 star 吧！',
        smoothScroll: true,
    }
}
