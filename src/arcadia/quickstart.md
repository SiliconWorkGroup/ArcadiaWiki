# 快速开始

本文将帮助你快速从零开始安装并游玩 theArcadia 整合包。

> [!TIP]
> 本教程也适用于其他**大多数** Modrinth 整合包。

---

## 第一步：选择启动器

首先，你需要一个支持 Modrinth 整合包的 Minecraft 启动器。

### 🟢 推荐：Modrinth App

**[Modrinth App](https://modrinth.com/app)** 是官方桌面客户端，支持全自动安装和**一键更新**整合包，是最省心的选择。

- 需要 **正版 Minecraft** 账号（Mojang / Microsoft）
- 支持 Windows、macOS、Linux
- 整合包更新时自动推送，点击即可升级

### 🟡 备选：Prism Launcher

**[Prism Launcher](https://prismlauncher.org/)** 是开源的第三方启动器，功能强大且支持离线模式：

- 支持 Modrinth 和 CurseForge 整合包
- 支持离线账号（非正版玩家可选）
- 需要手动更新整合包

### ⚪ 其他选择

- **MultiMC** — Prism 的前身，同样可用
- **ATLauncher / GDLauncher** — 同样支持 Modrinth 整合包

---

## 第二步：通过 Modrinth App 安装

### 安装 Modrinth App

1. 访问 [Modrinth App 下载页](https://modrinth.com/app)
2. 选择对应系统的版本下载安装
3. 启动后登录你的 **Microsoft / Mojang 账号**

### 安装 theArcadia

1. 打开 Modrinth App
2. 在左侧导航中点击 **"Browse"** 或 **"探索"**
3. 搜索 **"theArcadia"**
4. 点击进入项目页面
5. 点击 **"Install"** 按钮

![Modrinth App 的整合包搜索界面示意图](/res/screenshots/modrinthapp/pack_updater.png)

> 安装完成后，启动器会自动下载整合包及其所有依赖模组，**无需手动安装 Forge / NeoForge**。

### 启动游戏

1. 安装完成后返回 Modrinth App **"Library"**（资料库）页面
2. 找到 theArcadia，点击 **"Play"**
3. 等待游戏启动

> [!NOTE]
> 首次启动时间较长，因为需要生成配置文件和资源包。耐心等待即可。

---

## 第三步：通过 Prism Launcher 安装

1. 打开 Prism Launcher
2. 点击 **"添加实例" → "Modrinth"**
3. 搜索 **"theArcadia"**
4. 选择版本（注意区分分支：1.20.1 / 1.21.1）
5. 点击 **"OK"** 开始下载
6. 下载完成后双击实例启动游戏

---

## 版本选择指南

| 分支 | 特点 | 适合 |
|:-----|:------|:------|
| **B 系列（1.20.1 Forge）** | 更成熟稳定，模组数量多 | 稳定游玩首选 |
| **A 系列（1.21.1 NeoForge）** | 更新技术栈，新特性更多 | 喜欢尝鲜的玩家 |

> 两个分支的存档**不互通**，选择前请确认。

---

## 如何更新

### Modrinth App（自动）

在 **"Library"** 页面中，如果整合包有更新，右侧会显示 **"Update"** 按钮，点击即可一键更新。

> [!WARNING]
> 更新前建议备份存档！重大版本更新可能导致部分模组配置变更。

### Prism Launcher（手动）

1. 右键点击实例 → **"编辑"**
2. 切换到 **"Modrinth"** 标签页
3. 点击 **"检查更新"**
4. 如有更新，选择新版并确认

---

## 系统要求

| 配置 | 最低 | 推荐 |
|:-----|:-----|:------|
| **系统** | Windows 10 / macOS 12 / Linux | Windows 11 / macOS 14 / Linux |
| **CPU** | i5-8400 / R5 2600 | i7-10700 / R7 3700X |
| **内存** | 6 GB（分配给游戏） | 8-10 GB（分配给游戏） |
| **显卡** | 支持 OpenGL 4.0 | GTX 1660 / RX 580 或更高 |
| **存储** | 4 GB 可用空间 | 6 GB 可用空间 |
| **Minecraft** | 正版账号（推荐）或离线账号 | 正版账号 |

---

## 常见问题

### Q: 安装后启动闪退怎么办？
A: 尝试分配更多的内存（在启动器设置中增加 `-Xmx` 参数）；检查是否安装了正确版本的 Java 17+。

### Q: 可以和好友联机吗？
A: 可以！theArcadia 支持局域网联机及服务器游玩。务必保证**所有玩家使用完全相同的整合包版本**。

### Q: 整合包包含光影吗？
A: theArcadia 内置了 Sodium + Iris，支持 OptiFine 光影包，但光影包本身需要自行下载安装。

### Q: 1.20.1 和 1.21.1 版如何选择？
A: 如果你是第一次接触 theArcadia，推荐 **1.20.1 B 系列**——模组生态更成熟，问题更少。
