export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kanban',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap' },
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/mazui.js', ssr:true},  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    //'@nuxtjs/tailwindcss',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: `${process.env.NUXT_ENV_BROWSER_BASE_URL}`,

  },
  auth:{
    redirect:{
      login:'/auth/login',
      home:'/'
    },
    strategies: {
      local: {
        token: {
          property: 'authToken',
          global: true,
          required: true,
          name:'Authorization',
          type: 'Bearer',
          maxAge:2592000,
        },
        localStorage: {
          prefix: 'auth.'
        },
        user: {
          property: 'user',
          autoFetch: true,
          autoLogout:true,
        },
        endpoints: {
          login: { url:`/api/auth/login`, method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url:`/api/auth/me`, method: 'get' },
          callback: '/',
        },
      },
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  tailwindcss: {
    cssPath:`~/assets/css/main.css`,
    configPath: '~/tailwind.config',
    exposeConfig: false,
    config: {  
      content: [
      `components/**/*.{vue,js,ts}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `composables/**/*.{js,ts}`,
      `plugins/**/*.{js,ts}`,
      `App.{js,ts,vue}`,
      `app.{js,ts,vue}`,
      `Error.{js,ts,vue}`,
      `error.{js,ts,vue}`
    ],
  },
    injectPosition:0,
    viewer: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {
          cssPath:`~/assets/css/main.css`,
          configPath: '~/tailwind.config',
          exposeConfig: false,
          config: {
            content: [
              `components/**/*.{vue,js,ts}`,
              `layouts/**/*.vue`,
              `pages/**/*.vue`,
              `composables/**/*.{js,ts}`,
              `plugins/**/*.{js,ts}`,
              `App.{js,ts,vue}`,
              `app.{js,ts,vue}`,
              `Error.{js,ts,vue}`,
              `error.{js,ts,vue}`
            ],
          },
          injectPosition:0,
          viewer: true,
        },
        autoprefixer: {},
      },
    },
    babel:{
      plugins:[
        [
          'component',{
            libraryName:'maz-ui',
            styleLibraryName:'css'
          }
        ]
      ]
    }
  },
  serverMiddleware:[
    {path:'/api', handler:'~/api/index.js' }
  ],
  server:{
    port:process.env.PORT,
    host:process.env.NUXT_ENV_HOST,
  }
}
