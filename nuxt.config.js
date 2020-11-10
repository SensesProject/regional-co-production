const { getHead } = require('library/src/assets/js/head.js')

export default {
  mode: 'spa',
  head: getHead({
    title: 'Learn Module of co-production techniques',
    description: 'In this module, we illustrate how to use co-production techniques to start or develop adaptation planning given different stages of the policy cycle.',
    image: 'https://climatescenarios.org/share/og-co-production.jpg'
  }),
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
  },
  generate: {
    crawler: false
  }
}
