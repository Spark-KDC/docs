import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Spark КФУ Дата Челлендж",
  description: "A documentation for KPFU Data Challenge dataset model",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
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
