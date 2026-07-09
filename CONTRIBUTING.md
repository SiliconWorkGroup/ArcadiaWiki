
# 贡献指南

感谢您有兴趣为 theArcadia Wiki 贡献内容！本文档将帮助您快速上手。

---

## 📋 目录

- [贡献方式](#贡献方式)
- [环境准备](#环境准备)
- [编写规范](#编写规范)
- [提交 PR](#提交-pr)
- [文件命名约定](#文件命名约定)

---

## 贡献方式

您可以通过以下方式贡献：

1. **直接在 GitHub 提交 Pull Request**（推荐）
2. **访问 [GitLab 镜像仓库](https://gitlab.com/SiWG/ArcadiaWiki/) 提交**
3. **提交 Issue** 指出错误或建议新条目

---

## 环境准备

```bash
# Fork 后克隆到本地
git clone https://github.com/<your-username>/ArcadiaWiki.git
cd ArcadiaWiki

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

> 确保已安装 Node.js >= 18。

---

## 编写规范

### 1. 文件位置

所有 Wiki 内容放在 `src/` 目录下，按模组/主题分目录：

```
src/
├── arcadia/              # 整合包本体相关内容
├── tetra/                # Tetra 模组
├── openpartiesandclaims/ # Open Parties and Claims 模组
└── spelunkery/           # Spelunkery 模组
```

每个目录下需包含 `index.md` 作为该章节的索引页。

### 2. 侧边栏配置

新增页面后，请在 `.vitepress/config.mts`（仓库根目录）的 `sidebar` 中添加对应的导航链接。

### 3. Markdown 格式

- 使用 GitHub Flavored Markdown
- 推荐使用 VitePress 支持的 [Markdown 扩展](https://vitepress.dev/guide/markdown)
- 提示块使用 `> [!TIP]` / `> [!WARNING]` / `> [!DANGER]` 格式
- 中英文之间建议加空格（如 "theArcadia 整合包"）

### 4. 内部链接

- 同一目录内：`./about.md`
- 跨目录：`/src/tetra/about.md`
- 引用图片：`/res/screenshots/modrinthapp/pack_updater.png`

### 5. 图片资源

截图等图片资源请放在 `res/screenshots/` 下对应的子目录中。

---

## 提交 PR

1. 确保您的分支基于最新的 `main`
2. 提交前运行 `npm run docs:build` 确认无构建错误
3. PR 标题清晰描述变更内容，如：
   - `feat: add OPAC claim commands reference`
   - `fix: correct quickstart link`
   - `docs: expand Spelunkery overview`
4. 在 PR 描述中注明新增/修改的内容和原因

---

## 文件命名约定

| 类型 | 命名 | 示例 |
|:-----|:-----|:-----|
| 索引页 | `index.md` | `src/tetra/index.md` |
| 页面 | 英文小写，语义化 | `about.md`, `gettingstarted.md`, `commands.md` |
| 配图 | 英文小写下划线分隔 | `pack_updater.png` |

---

## 💡 需要帮助？

有任何问题请提交 [Issue](https://github.com/SiliconWorkGroup/ArcadiaWiki/issues) 或访问 [GitLab 镜像](https://gitlab.com/SiWG/ArcadiaWiki/) 讨论。
