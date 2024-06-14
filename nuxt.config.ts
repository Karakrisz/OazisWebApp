// https://nuxt.com/docs/api/configuration/nuxt-config

interface Post {
  id: number
  title: string
  body: string
  image: string
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/app.css'],
  ssr: true,
  app: {
    head: {
      title: 'Függöny Oázis',
      htmlAttrs: {
        lang: 'hu',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Ide kell a szöveg, függönyoket varnak budapesten',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: `
            default-src 'self' https: data:;
            img-src 'self' https: http: data:;
            font-src 'self' https: data:;
            style-src 'self' https: 'unsafe-inline';
            script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
            connect-src 'self' https: http: https://fuggonyoazis.hu/api/public/json-posts;
          `,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Függöny Oázis',
            url: 'https://www.fuggonyoazis.hu',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.fuggonyoazis.hu/?s={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        },
      ],
    },
  },

  modules: ['@nuxt/image', '@nuxtjs/sitemap'],

  site: {
    url: 'https://www.fuggonyoazis.hu',
    routes: async () => {
      const response = await fetch('https://fuggonyoazis.hu/api/public/json-posts')
      const posts: Post[] = await response.json()
      return posts.map((post) => `/posts/${post.id}`)
    },
  },
})
