import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Spark КФУ Дата Челлендж",
  description: "A documentation for KPFU Data Challenge dataset model",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: '/data-model/index.md' }
    ],

    sidebar: [
      {
        text: 'Модель данных',
        link: '/data-model/index.md'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/spark-kdc/docs' }
    ],

    search: {
      provider: 'local'
    }
  }
})
