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
