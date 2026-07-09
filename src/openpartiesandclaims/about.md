# 关于 Open Parties and Claims

> [!TIP]
> 你可以在这些地方找到 Open Parties and Claims：
>
> [Modrinth](https://modrinth.com/mod/open-parties-and-claims) | [CurseForge](https://www.curseforge.com/minecraft/mc-mods/open-parties-and-claims) | [GitHub](https://github.com/thexaero/open-parties-and-claims)

## 简介

**Open Parties and Claims（OPAC）** 是一个轻量级的 Minecraft 服务器模组，为多人游戏提供了功能强大的**区块声明**与**玩家队伍**系统。

> [!NOTE]
> 本页面介绍的是 theArcadia 整合包中集成的 OPAC 模组。具体配置可能因整合包版本而有所不同。

### 特点

- **区块声明**：允许玩家声明（Claim）区块，防止未授权的破坏和交互
- **强制加载（Forceload）**：可标记区块保持持续加载
- **玩家队伍**：创建队伍，共享领地和权限
- **权限系统集成**：支持 LuckPerms、FTB Ranks 等权限系统
- **小地图联动**：与 [Xaero 的小地图](https://modrinth.com/mod/xaeros-minimap)和[世界地图](https://modrinth.com/mod/xaeros-world-map)完美集成

---

## 主要功能

### 🏠 领地系统（Claims）

- **区块声明**：声明区块，防止其他玩家破坏方块、打开容器、与实体交互
- **可视化边界**：声明区域会显示高亮边界（需在 UI 中开启）
- **强制加载**：可将已声明的区块设为保持加载状态
- **领地权限精细控制**：每个区块可独立设置：
  - 破坏/放置方块
  - 打开容器
  - 与实体交互
  - 使用红石物品
  - 等等

### 👥 队伍系统（Parties）

- **创建队伍**：邀请其他玩家加入你的队伍
- **共享领地**：自动与队伍成员共享领地权限
- **队伍管理**：设置队长、踢出成员、调整权限
- **队伍领地模式**（可配置）：开启后队伍成员可以代表队伍声明区块
- **跨模组支持**：内置支持 Argonauts、FTB Teams 等队伍系统

### 🛡️ 保护机制

- 保护声明区块内的方块不被破坏
- 保护容器（箱子、熔炉、潜影盒等）不被未授权玩家打开
- 保护实体（村民、动物等）不被未授权玩家交互
- 精细异常设置：可在配置中为特定方块/实体/物品添加例外

### 🔗 API 与扩展

- **开放 API**：允许其他模组或插件与队伍和领地系统交互
- **权限节点**：支持 LuckPerms、FTB Ranks、Prometheus
- **自定义队伍系统**：可禁用默认队伍系统，使用 FTB Teams 或 Argonauts 替代

---

## 在 theArcadia 中的定位

OPAC 是为 theArcadia 服务器多人游戏体验而准备的模组。它不干扰单机游戏体验，但在联机时能有效防止恶意破坏，让玩家间的合作更加愉快。

> 下一节：[开始使用 OPAC](./gettingstarted.md)
