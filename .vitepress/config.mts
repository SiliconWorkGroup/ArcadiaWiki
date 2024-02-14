import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "theArcadia Wiki",
  base: "/ArcadiaWiki/",
  description: "Wikipedia of theArcadia world!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Wiki首页', link: '/' },
      { text: 'Modrinth', link: 'https://modrinth.com/modpack/thearcadia' }
    ],

    footer: {
            message: '全站内容及源代码均以<a href="https://www.gnu.org/licenses/agpl-3.0.html">GNU AGPLv3</a>协议许可',
                  copyright: '版权所有 © SiWG & all Contributers 2024'
    },
    
    }
    sidebar: [
      {
        text: 'the Arcadia',
        items: [
          { text: '关于theArcadia项目', link: '/src/arcadia/about.md' }
        ]
      },
      {
        text: 'Tetra',
        items: [
          { text: '关于Tetra模组', link: '/src/tetra/about.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SiliconWorkGroup/ArcadiaWiki/' }
    ]
  }
})
