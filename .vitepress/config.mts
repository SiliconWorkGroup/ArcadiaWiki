import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "theArcadia Wiki",
  base: "/ArcadiaWiki/",
  description: "Wikipedia of theArcadia world!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Modrinth', link: 'https://modrinth.com/modpack/thearcadia' }
    ],

    footer: {
      message: '全站内容及源代码均以<a href="https://www.gnu.org/licenses/agpl-3.0.html">GNU AGPLv3</a>协议许可',
      copyright: '版权所有 © SiWG & all Contributors 2024'
    },

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'the Arcadia',
        link: '/src/arcadia/index.md',
        items: [
          { text: '关于 theArcadia 项目', link: '/src/arcadia/about.md' },
          { text: '快速开始', link: '/src/arcadia/quickstart.md' }
        ]
      },
      {
        text: 'Tetra',
        link: '/src/tetra/index.md',
        items: [
          { text: '关于 Tetra 模组', link: '/src/tetra/about.md' }
        ]
      },
      {
        text: 'Open Parties and Claims',
        link: '/src/openpartiesandclaims/index.md',
        items: [
          { text: '关于 OPAC', link: '/src/openpartiesandclaims/about.md' },
          { text: '开始使用 OPAC', link: '/src/openpartiesandclaims/gettingstarted.md' }
        ]
      },
      {
        text: 'Spelunkery',
        link: '/src/spelunkery/index.md',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SiliconWorkGroup/ArcadiaWiki/' }
    ]
  }
})
