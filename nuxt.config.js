export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-okasaan',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      { 
        rel: 'stylesheet', 
        href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.2/mdb.min.css' 
      },
      {
        rel: 'stylesheet', 
        href: 'https://cdn.livecanvas.com/media/css/library/bundle.css'
      },
      {
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      },
      {
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:wght@700&family=Work+Sans&display=swap'
      },
      {
        rel: 'stylesheet', 
        href: 'http://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Raleway:300,400,500,700'
      },
      {
        rel: 'preconnect', 
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect', 
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet', 
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
      },
      {
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
    ],
    script: [
      {
        type: 'text/javascript',
        src: '/js/floating-wpp.js'
        
      }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'
        
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/floating-wpp.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/homepage',
      '~/components/agency',
      '~/components/contactus',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
