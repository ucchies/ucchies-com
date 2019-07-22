module.exports = {
    title: 'ucchies.com',
    description: 'エンジニアによるブログ。システム開発業務や資格試験、転職活動などについて書きます。',
    serviceWorker: true,
    head: [
        //['link', { rel: 'icon', type: 'image/png', href: '/favicon.png'}],
        ['meta', { name: 'keywords', content: 'システム開発, SI, SES, IT, IT技術, Web, 転職, 資格, アプリ開発'}],
        ['meta', { name: "og:title", content: this.title}],
        ['meta', { name: "og:description", content: this.description}],
        ['meta', { name: "og:type", content: "website"}],
        ['meta', { name: "og:url", content: "https://ucchies.com/"}],
        ['meta', { name: "og:locale", content: "ja_JP"}]
    ],
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-140337981-1'
            }
        ]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@sns': './public/sns'
            }
        }
    }
}
