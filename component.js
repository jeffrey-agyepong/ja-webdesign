class HomeMyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <h1 class="hidden">J.A Web Design</h1>
    <nav class="bg-blue-500 dark:bg-gray-900 dark:shadow-white fixed w-full z-20 top-0 left-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="/index.html" class="flex items-center">
          <img src="public/ja-web-design.png" class="h-16 mr-3" alt="J.A Web Design Logo">
        </a>
        <div class="flex md:order-2">
          <!-- Get Started  -->
          <a href="/contact.html" class="
                      items-center
                      justify-center
                      py-3
                      px-6
                      rounded-full
                      text-white bg-header-dark-blue
                      dark:bg-blue-700
                      text-base
                      font-medium
                      hover:bg-opacity-50 dark:hover:bg-opacity-50 hover:shadow-lg
                      transition
                      duration-300
                        ease-in-out hidden sm:block">Request A Quote</a>


          <!-- Hamburger menu -->
          <button id="dropdown-button" data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <!-- Toggle Button -->
          <button id="theme-toggle" type="button" aria-label="Toggle Dark Mode"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 ml-2">
            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </button>

        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-bold rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-black text-lg">
            <li>
              <a href="/projects.html"
                class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
            </li>
            <li>
              <a href="/#services"
                class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="/about.html"
                class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page">About</a>
            </li>

            <li>
              <a href="/#testimonials"
                class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonials</a>
            </li>
            <li>
              <a href="/contact.html"
                class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>
    `
  }
}
customElements.define('home-my-header', HomeMyHeader);


class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
        <h1 class="hidden">J.A Web Design</h1>
        <nav class="bg-blue-400 dark:bg-gray-900 dark:shadow-white fixed w-full z-20 top-0 left-0">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            <a href="/index.html" class="flex items-center">
              <img src="/public/ja-web-design.png" class="h-16 mr-3" alt="J.A Web Design Logo">
  
            </a>
            <div class="flex md:order-2">
              <!-- Get Started  -->
              <a href="/contact.html" class="
                          items-center
                          justify-center
                          py-3
                          px-6
                          rounded-full
                          text-white bg-header-dark-blue
                          dark:bg-blue-700
                          text-base
                          font-medium
                          hover:bg-opacity-50 dark:hover:bg-opacity-50 hover:shadow-lg
                          transition
                          duration-300
                            ease-in-out hidden sm:block">Request A Quote</a>
  
              <!-- Hamburger menu -->
              <button id="dropdown-button" data-collapse-toggle="navbar-sticky" type="button"
                class="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
              <!-- Toggle Button -->
              <button id="theme-toggle" type="button" aria-label="Toggle Dark Mode"
                class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 ml-2">
                <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </button>
  
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul
                class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-black text-lg">
                <li>
                  <a href="/projects.html"
                    class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                </li>
                <li>
                  <a href="/index.html#services"
                    class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                <li>
                  <a href="/about.html"
                    class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page">About</a>
                </li>
  
                <li>
                  <a href="/index.html#testimonials"
                    class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonials</a>
                </li>
                <li>
                  <a href="/contact.html"
                    class="block py-4 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
  
        
      </header>`
  }
}

customElements.define('my-header', MyHeader);


class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="bg-blue-500 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="index.html" class="flex items-center">
            <img src="public/ja-web-design.png" class="h-16 mr-3" alt="J.A Web Design">
          </a>
        </div>
        <div class="grid sm:grid-cols-2 gap-8 sm:gap-6 med:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="mailto:hello@jawebdesign.ca" class="hover:underline">hello@jawebdesign.ca</a>
              </li>
              <li>
                <a href="tel:+17809837309" class="hover:underline">780-983-7309</a>
              </li>

            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">On the Web</h2>
            <ul class="text-black dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="https://github.com/jeffrey-agyepong" class="hover:underline" target="_blank">Github</a>
              </li>
              <li>
                <a href="https://instagram.com/j.a.webdesign" class="hover:underline" target="_blank">Instagram</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
      <div class="grid sm:flex sm:items-center sm:justify-between gap-4">
        <span class="text-sm text-black sm:text-center dark:text-gray-400"> <a
            href="https://jawebdesign.ca/sitemap.xml" class="hover:underline">Sitemap</a>
        </span>
        <span class="text-sm text-black sm:text-center dark:text-gray-400">© 2023 J.A Web Design. All Rights Reserved
        </span>


        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <div>

            <ul class="text-sm text-black sm:text-center dark:text-gray-400">
              <li class="mb-4">
                <a href="privacy-policy.html" class="hover:underline">Privacy Policy</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>`
  }
}

customElements.define('my-footer', MyFooter);