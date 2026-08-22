# 软玉经验存储（Nephrite XP Storage）

软玉系列组件提供了一套**区块级经验存储与传输**系统，将经验值以"充能（Charge）"的形式储存和流动。

> 📖 本节内容整理自 [Spelunkery 官方 Wiki（Nephrite XP Storage）](https://github.com/Silversmith-Mods/Spelunkery/wiki/Nephrite-XP-Storage)

---

## 概述

软玉（Nephrite）生成于深层地下被凝灰岩包裹的巨砾中。将软玉加工为各类组件后，即可构建经验存储网络。**充能会在相邻的雕刻软玉之间均衡流动**，且总是优先向下流动，设计存储容器时需注意这一点——可以把它想象成方块内部有液体。每块雕刻软玉可存储 **100 点充能**（从零开始略超过 7 级经验）。

![雕刻软玉](/res/screenshots/spelunkery/carved_nephrite.webp)

---

## 组件一览

| 组件 | 功能 |
|:-----|:-----|
| **雕刻软玉（Carved Nephrite）** | 存储充能，并在相邻雕刻软玉间均衡分配 |
| **软玉虹吸器（Nephrite Siphon）** | 将经验值转换为充能 |
| **软玉喷泉（Nephrite Fountain）** | 将充能转换回经验球 |
| **软玉二极管（Nephrite Diode）** | 定向传输充能（可向上） |

---

## 软玉虹吸器（Nephrite Siphon）

用于将经验值转换为充能：抽取站在其上方的玩家经验，或吸收附近的经验球。

![软玉虹吸器](/res/screenshots/spelunkery/nephrite_siphon.webp)

## 软玉喷泉（Nephrite Fountain）

- 放置在雕刻软玉上，被红石信号激活时，将下方软玉的充能**转换回经验球**
- 若喷泉紧邻充能的雕刻软玉，可用**玻璃瓶**右键，将充能换成一瓶附魔之瓶

![软玉喷泉](/res/screenshots/spelunkery/nephrite_fountain.webp)

## 软玉二极管（Nephrite Diode）

- 收到红石信号时，从**后方**的雕刻软玉取 1 点充能，传输给**前方**的雕刻软玉
- 可朝任意方向放置，最实用的用途是**向上**传输充能
- 与其他组件不同，二极管**可以被活塞推动**
- 由于每次信号只传输 1 点充能，需要红石时钟才能高效利用

![软玉二极管](/res/screenshots/spelunkery/nephrite_diode.webp)

---

> 📖 更多细节请参阅 [Spelunkery 官方 Wiki](https://github.com/Silversmith-Mods/Spelunkery/wiki)
