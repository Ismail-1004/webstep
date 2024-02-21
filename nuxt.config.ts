import locales from './config/locales.json'

export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/i18n', locales]
  ],
  css: [
    '@/assets/styles/index.css'
  ]
})
