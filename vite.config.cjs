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
        Sitemap({
            base: 'https://jawebdesign.ca/index.html', // your actual site URL
            exclude: ['/404'] // optional, exclude URLs that you don't want to include in the sitemap
        })
    ],
    optimizeDeps: {
        include: ['vite-plugin-sitemap']
    }
};
