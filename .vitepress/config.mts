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
        text: 'Create（机械动力）',
        link: '/src/create/index.md',
        items: [
          { text: '入门指南', link: '/src/create/gettingstarted.md' },
          { text: '动力与应力', link: '/src/create/rotation.md' },
          { text: '核心机械', link: '/src/create/machines.md' },
          { text: '物流与流体', link: '/src/create/logistics.md' },
          { text: '列车系统', link: '/src/create/trains.md' },
          { text: '整合包附属指南', link: '/src/create/addons.md' }
        ]
      },
      {
        text: 'Tetra',
        link: '/src/tetra/index.md',
        items: [
          { text: '关于 Tetra 模组', link: '/src/tetra/about.md' },
          { text: '工作台与装备强化', link: '/src/tetra/workbench.md' }
        ]
      },
      {
        text: 'Open Parties and Claims',
        link: '/src/openpartiesandclaims/index.md',
        items: [
          { text: '关于 OPAC', link: '/src/openpartiesandclaims/about.md' },
          { text: '开始使用 OPAC', link: '/src/openpartiesandclaims/gettingstarted.md' },
          { text: '指令参考', link: '/src/openpartiesandclaims/commands.md' }
        ]
      },
      {
        text: 'Spelunkery',
        link: '/src/spelunkery/index.md',
        items: [
          { text: '矿物与资源', link: '/src/spelunkery/resources.md' },
          { text: '实用工具', link: '/src/spelunkery/utilities.md' },
          { text: '原版改动', link: '/src/spelunkery/vanilla-alterations.md' },
          { text: '粉盐', link: '/src/spelunkery/pink-salt.md' },
          { text: '软玉经验存储', link: '/src/spelunkery/nephrite-xp-storage.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SiliconWorkGroup/ArcadiaWiki/' }
    ]
  }
})
