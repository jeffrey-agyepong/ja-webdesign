const Sitemap = require('vite-plugin-sitemap');

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
                contact: 'contact.html',
                privacyPolicy: 'privacy-policy.html',
            }
        }
    },
    plugins: [
        Sitemap()
    ]
};
