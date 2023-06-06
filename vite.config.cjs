// vite.config.js

module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
                contact: 'contact.html',
                pricing: 'pricing.html',
                services: 'services.html',
                referral: 'referral.html',
                projects: 'all-projects.html',
                privacyPolicy: 'privacy-policy.html',

            }
        }
    }
};
