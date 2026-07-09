
# theArcadia Wiki

[![AGPL-3.0 License](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](https://github.com/SiliconWorkGroup/ArcadiaWiki/blob/main/LICENSE)
[![Built with VitePress](https://img.shields.io/badge/Built%20with-VitePress-41b883?logo=vitepress)](https://vitepress.dev/)
[![Deploy VitePress site to Pages](https://github.com/SiliconWorkGroup/ArcadiaWiki/actions/workflows/deploy.yml/badge.svg)](https://github.com/SiliconWorkGroup/ArcadiaWiki/actions/workflows/deploy.yml)

**theArcadia Wiki** 是 Minecraft 整合包 [theArcadia](https://modrinth.com/modpack/thearcadia) 的官方维基百科——属于 Arcadia 世界的知识库。

> 本维基目前处于起步阶段，条目急需补充。欢迎有志贡献者参与！

📖 **在线地址**: <https://siliconworkgroup.github.io/ArcadiaWiki/>

---

## 📋 内容概览

| 章节 | 描述 | 进度 |
|:-----|:-----|:----:|
| [theArcadia](src/arcadia/) | 整合包介绍、快速上手指南 | 🟢 基础完成 |
| [Tetra](src/tetra/) | Tetra 模组说明：模块化武器工具系统 | 🟢 基础完成 |
| [Open Parties and Claims](src/openpartiesandclaims/) | OPAC 模组：领地保护与朋友管理 | 🟡 需要补充 |
| [Spelunkery](src/spelunkery/) | Spelunkery 模组：探险与矿产扩展 | 🔴 待编写 |

---

## 🚀 本地开发

### 前置要求

- [Node.js](https://nodejs.org/) >= 18
- npm（随 Node.js 安装）

### 安装与启动

```bash
# 克隆仓库
git clone https://github.com/SiliconWorkGroup/ArcadiaWiki.git
cd ArcadiaWiki

# 安装依赖
npm install

# 启动本地开发服务器（支持热重载）
npm run docs:dev

# 构建静态站点
npm run docs:build

# 预览构建结果
npm run docs:preview
```

本地开发服务器默认运行在 `http://localhost:5173`。修改 Markdown 文件后页面会自动刷新。

### 项目结构

```
ArcadiaWiki/
├── .github/workflows/       # GitHub Actions 部署配置
├── .vitepress/
│   ├── config.mts           # VitePress 站点配置（导航栏、侧边栏等）
│   └── theme/
│       ├── index.ts         # 主题入口
│       └── style.css        # 自定义样式
├── res/                     # 静态资源（图片、截图等）
├── src/                     # Wiki 内容（Markdown）
│   ├── arcadia/             # theArcadia 整合包相关
│   ├── tetra/               # Tetra 模组相关
│   ├── openpartiesandclaims/# Open Parties and Claims 模组相关
│   └── spelunkery/          # Spelunkery 模组相关
├── index.md                 # 首页（Hero 布局）
├── package.json             # 依赖与脚本
└── README.md                # 本文件
```

---

## 📝 贡献指南

欢迎贡献内容！请参阅 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详细流程。

**快速开始：**

1. Fork 本仓库
2. 创建新分支：`git checkout -b feat/my-new-page`
3. 编写或修改 Wiki 内容（Markdown 格式）
4. 本地预览确认无误
5. 提交 Pull Request

> 你也可以直接访问 [GitLab 镜像仓库](https://gitlab.com/SiWG/ArcadiaWiki/) 提交贡献。

---

## 📄 许可

全站内容及源代码均以 [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html) 协议许可。

版权所有 © SiWG & all Contributors 2024
