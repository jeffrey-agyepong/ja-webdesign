import Swup from 'swup';

const swup = new Swup({
});

// Get all anchor tags in the dropdown menu
document.addEventListener('DOMContentLoaded', () => {
    const dropdownLinks = document.querySelectorAll('#navbar-sticky a');

    // Add a click event listener to each anchor tag
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Get the dropdown menu button
            const dropdownButton = document.querySelector('#dropdown-button');

            // Trigger the dropdown menu to close
            dropdownButton.click();
        });
    });
});
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

// ===== Faq accordion
const faqs = document.querySelectorAll(".single-faq");
faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
        el.querySelector(".icon").classList.toggle("rotate-180");
        el.querySelector(".faq-content").classList.toggle("hidden");
    });
});

