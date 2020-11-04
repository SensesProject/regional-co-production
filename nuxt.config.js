
export default {
  mode: 'spa',
  head: {
    title: 'Learn Module of co-production techniques',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'In this module, we illustrate how to use co-production techniques to start or develop adaptation planning given different stages of the policy cycle.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/style/base.scss'
  ],
  router: {
    base: '/co-production/'
  },
  resolve: {
    alias: {
      style: 'assets/style'
    }
  },
  build: {
    extend (config, ctx) {
    }
  }
}
