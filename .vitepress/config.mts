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
        link: '/data-model/index.md',
        items: [
          {
            text: 'Образование',
            link: '/data-model/education/index.md',
            items: [
              { text: 'Студенты', link: '/data-model/education/students.md' },
              { text: 'Успеваемость', link: '/data-model/education/performance.md' },
              { text: 'Сотрудники', link: '/data-model/education/employee.md' }
            ]
          },
          {
            text: 'Наука',
            link: '/data-model/science/index.md',
            items: [
              { text: 'Рейтинг НПР', link: '/data-model/science/rating.md' }
            ]
          },
          {
            text: 'Управленческие и обеспечивающие процессы',
            link: '/data-model/management-and-support-processes/index.md',
            items: [
              { text: 'Смета', link: '/data-model/management-and-support-processes/estimates.md' },
              { text: 'ИТ-оборудование', link: '/data-model/management-and-support-processes/it-equipment.md' },
              { text: 'Научное оборудование', link: '/data-model/management-and-support-processes/scientific-equipment.md' },
              { text: 'Здания', link: '/data-model/management-and-support-processes/building.md' },
            ]
          }
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
