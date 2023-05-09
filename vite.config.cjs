// vite.config.js

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
                contact: 'contact.html',
                privacyPolicy: 'privacy-policy.html',
                siteMap: 'sitemap.xml'
            }
        }
    }
};
