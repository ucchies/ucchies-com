module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    serviceWorker: true,
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-140337981-1'
            }
        ]
    ]
}
