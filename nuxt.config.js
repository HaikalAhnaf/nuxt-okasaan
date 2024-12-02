export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Devavrata Sinergi Indonesia',
    htmlAttrs: {
      lang: 'in'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PT. Devavrata Sinergi Indonesia adalah perusahaan yang bergerak di Industri elektronik dan laundry. Kami mendirikan perusahaan ini pada tahun 2020 untuk memberikan kontribusi dan solusi terbaik untuk industri laundry di Indonesia.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords',  name: 'keywords', content: 'Devavrata, Okaasan, Wimala, Detergent, Laundry Pakaian Indonesia'}
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/images/logo/DSI40X40NOBG.png' 
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
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'stylesheet', 
        href: '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css'
      },
      {
        rel: 'stylesheet', 
        href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
      },
    ],
    script: [
      {
        type: 'text/javascript',
        src: '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.js'
        
      }
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
        
      }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', type: 'text/javascript' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/floating-wpp.css',
    '~/assets/css/style.css',
    '~/assets/css/swiper-bundle.css',
    "bootstrap/dist/css/bootstrap.css"
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/plugins/bootstrap.js", mode : "client"},
    {src: "~/plugins/jquery.js", mode : "client"},
    {src: "~/plugins/facybox.js", mode : "client"},
    {src: "~/plugins/swiper.js", mode : "client"},
    {src: "~/plugins/i18n.js", mode : "client"},
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/homepage',
      '~/components/agency',
      '~/components/agency/event',
      '~/components/agency/event/year',
      '~/components/agency/event/year/2024',
      '~/components/agency/event/year/2023',
      '~/components/agency/event/year/2022',
      '~/components/agency/event/year/2021',
      '~/components/agency/strategicmarketing',
      '~/components/agency/strategicmarketing/socialmedia',
      '~/components/agency/strategicmarketing/produksifotodanvideo',
      '~/components/agency/strategicmarketing/website',
      '~/components/agency/researchmarketing',
      '~/components/agency/researchmarketing/demographic',
      '~/components/agency/researchmarketing/geographic',
      '~/components/laundry',
      '~/components/laundry/okaasan',
      '~/components/laundry/wimala',
      '~/components/laundry/training',
      '~/components/laundry/laundryequipmentdansupplies',
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
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_and_default',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        code: 'id',
        name: 'Bahasa Indonesia',
        iso: 'id-ID',
        file: 'id.json',
      },
    ],
    defaultLocale: 'id',
    vueI18n: {
      fallbackLocale: 'id',
    },
    lazy: true,
    langDir: 'locales/',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
