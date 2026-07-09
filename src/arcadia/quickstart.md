# 快速开始

本文将帮助你快速从零开始安装并游玩 theArcadia 整合包。

> [!TIP]
> 本教程也适用于其他**大多数** Modrinth 整合包。

---

## 选择启动器

支持 Modrinth 整合包的启动器有很多，选择你习惯的那一款即可。以下是四种常用启动器的安装方式：

---

## Modrinth App（官方推荐）

**[Modrinth App](https://modrinth.com/app)** 是 Modrinth 平台的官方桌面客户端，支持全自动安装和**一键更新**，最省心。

- 需要 **正版 Minecraft** 账号（Mojang / Microsoft）
- 支持 Windows、macOS、Linux

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

## Prism Launcher

**[Prism Launcher](https://prismlauncher.org/)** 是开源的第三方启动器，功能强大，支持离线模式。

- 支持 Modrinth 和 CurseForge 整合包
- 支持离线账号（非正版玩家可选）
- 需要手动更新整合包

### 安装步骤

1. 从 [Prism Launcher 官网](https://prismlauncher.org/download) 下载对应系统的版本
2. 打开 Prism Launcher，登录你的 Minecraft 账号（或使用离线模式）
3. 点击 **"添加实例" → "Modrinth"**
4. 搜索 **"theArcadia"**
5. 选择版本（注意区分分支：1.20.1 / 1.21.1）
6. 点击 **"OK"** 开始下载
7. 下载完成后双击实例启动游戏

---

## HMCL（Hello Minecraft! Launcher）

**[HMCL](https://hmcl.huangyuhui.net/)** 是国内最流行的开源 Minecraft 启动器之一，中文界面友好，支持 Modrinth。

- 支持 Modrinth 和 CurseForge 整合包
- 支持正版和离线账号
- 纯中文界面，上手容易

### 安装步骤

1. 从 [HMCL 官网](https://hmcl.huangyuhui.net/) 或 [GitHub Releases](https://github.com/huanghongxun/HMCL/releases) 下载最新版 HMCL（`.exe` / `.jar` / 安装包）
2. 打开 HMCL
3. 在左侧导航中点击 **"下载"**
4. 选择 **"Modrinth"** 标签页
5. 搜索 **"theArcadia"**
6. 选择版本后点击 **"安装"**
7. HMCL 会自动下载整合包、Minecraft 本体及 Forge/NeoForge
8. 安装完成后，在首页点击游戏实例的 **"启动"** 按钮

> [!TIP]
> HMCL 支持自动安装 Java，如果系统中没有 Java 17，可以在 HMCL 设置的「Java」中让启动器自动下载。

---

## PCL2（Plain Craft Launcher 2）

**[PCL2](https://afdian.com/a/LTCat)** 是国内广受好评的 Minecraft 启动器，界面精美，操作直观。

- 支持 Modrinth 和 CurseForge 整合包
- 支持正版和离线账号
- 界面清爽，功能集成度高

### 安装步骤

1. 从 [PCL2 官网](https://afdian.com/a/LTCat) 或 [MCBBS 发布帖](https://www.mcbbs.net/) 下载 PCL2
2. 打开 PCL2，登录账号（可选）
3. 点击左侧导航栏的 **"下载"**
4. 切换到 **"Modrinth"** 或 **"整合包"** 标签页
5. 搜索 **"theArcadia"**
6. 选择你要安装的分支版本
7. 点击 **"下载"** 并确认安装
8. PCL2 会自动完成下载和配置
9. 返回首页，点击 theArcadia 的 **"启动"** 按钮

> [!WARNING]
> PCL2 需要自行安装 Java 17。如果启动时提示 Java 版本错误，请从 [Adoptium](https://adoptium.net/) 下载 Java 17 并正确设置启动器路径。

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

### Prism Launcher（手动）

1. 右键点击实例 → **"编辑"**
2. 切换到 **"Modrinth"** 标签页
3. 点击 **"检查更新"**
4. 如有更新，选择新版并确认

### HMCL（手动）

1. 右键点击实例 → **"管理"**
2. 点击 **"更新整合包"**
3. 选择最新版本并确认

### PCL2（手动）

1. 右键点击实例 → **"检查更新"**
2. 如检测到新版，按提示下载更新即可

> [!WARNING]
> 更新前建议备份存档！重大版本更新可能导致部分模组配置变更。

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
A: 尝试分配更多的内存（在启动器设置中增加 `-Xmx` 参数）；检查是否安装了 Java 17。

### Q: 可以和好友联机吗？
A: 可以！theArcadia 支持局域网联机及服务器游玩。务必保证**所有玩家使用完全相同的整合包版本**。

### Q: 整合包包含光影吗？
A: theArcadia 内置了 Sodium + Iris，支持 OptiFine 光影包，但光影包本身需要自行下载安装。

### Q: 1.20.1 和 1.21.1 版如何选择？
A: 如果你是第一次接触 theArcadia，推荐 **1.20.1 B 系列**——模组生态更成熟，问题更少。

### Q: PCL2 在哪里下载？
A: 可以在 [爱发电 @LTCat](https://afdian.com/a/LTCat) 或 MCBBS 找到 PCL2 的下载。PCL2 由作者免费提供，支持正版是对作者最好的鼓励。
