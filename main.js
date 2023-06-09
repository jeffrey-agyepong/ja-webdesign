// import Swup from 'swup';
// import SwupScrollPlugin from '@swup/scroll-plugin';



function closeMobileNav() {
    var nav = document.getElementById("mobile-nav");
    nav.classList.toggle("hidden");
}

// const options = {
//     animationSelector: '[class*="transition-fade"]',
//     animateHistoryBrowsing: true,
//     plugins: [

//         new SwupScrollPlugin({
//             animateScroll: false
//         })
//     ]
// };
// const swup = new Swup(options);
// // const swup = new Swup(options);

// let scrollValues = {};

// swup.on('clickLink', () => {
//     scrollValues[window.location.href] = window.scrollY;
// });

// swup.on('popState', () => {
//     setTimeout(function () {
//         window.scrollTo(0, scrollValues[window.location.href]);
//     }, 100);
// });
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});





