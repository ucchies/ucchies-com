module.exports = {
    title: 'ucchies.com',
    description: 'エンジニアによるブログ。システム開発業務や資格試験、転職活動などについて書きます。',
    serviceWorker: true,
    head: [
        // アイコン取得元：http://icooon-mono.com/00047-%e3%83%86%e3%82%a3%e3%83%bc%e3%82%ab%e3%83%83%e3%83%97%e3%81%ae%e3%82%a2%e3%82%a4%e3%82%b3%e3%83%b3%e7%b4%a0%e6%9d%90/
        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png'}],
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
    ]
}
