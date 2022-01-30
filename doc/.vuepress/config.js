module.exports = {
    base: '/front-articles/',
    title: '前端规范',
    head: [
        ['meta', { name: 'referrer', content: 'no-referrer' }],
    ],
    themeConfig: {
        nav: [
            {
                text: '前端规范',
                items: [
                    { text: 'JavaScript 编码规范', link: '/js' },
                    { text: 'CSS 编码规范', link: '/css' },
                    { text: 'HTML 编码规范', link: '/html' },
                    { text: 'Vue 编码规范', link: '/vue' },
                    { text: 'Git 规范', link: '/git' },
                    { text: '文件命名规范', link: '/file' },
                    { text: '规范验证与代码格式化', link: '/verify' },
                    { text: '其他', link: '/other' },
                ]
            }
        ],
        sidebar: [
            ['/', '简介'],
            ['/js', 'JavaScript 编码规范'],
            ['/css', 'CSS 编码规范'],
            ['/html', 'HTML 编码规范'],
            ['/vue', 'Vue 编码规范'],
            ['/git', 'Git 规范'],
            ['/file', '文件命名规范'],
            ['/verify', '规范验证与代码格式化'],
            ['/other', '其他'],
        ],
        repo: 'https://github.com/woai3c/front-end-specification',
        repoLabel: '给作者的 Github 点个 star 吧！',
        displayAllHeaders: true,
        smoothScroll: true,
    }
}
