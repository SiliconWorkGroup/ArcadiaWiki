# 原版改动

Spelunkery 对原版 Minecraft 的诸多机制进行了调整，让地下世界更丰富、采矿更有策略性。

> 📖 本节内容整理自 [Spelunkery 官方 Wiki（Vanilla Alterations）](https://github.com/AstralOrdana/Spelunkery/wiki/Vanilla-Alterations)

---

## 矿石掉落改动

为配合新的材料加工进度，部分矿石的掉落物被修改：

| 矿石 | 原掉落物 | 新掉落物 |
|:-----|:---------|:---------|
| 红石矿石 | 红石粉 | 粗朱砂（Rough Cinnabar） |
| 青金石矿石 | 青金石 | 粗青金石（Rough Lazurite） |
| 绿宝石矿石 | 绿宝石 | 粗糙绿宝石 |
| 钻石矿石 | 钻石 | 粗糙钻石 |

- 所有矿石的**深板岩变体**在开采时有几率额外掉落物品
- 金属矿石掉落粗矿粒，宝石矿石掉落粗糙碎片

![矿石掉落改动](https://user-images.githubusercontent.com/62686557/218367485-a239dda9-28bb-4981-8181-33ab495cdd04.png)

![粗矿粒](https://user-images.githubusercontent.com/62686557/218367490-0276d66b-3517-4029-a73c-ee55dce86cac.png)

---

## 石头变体世界生成

- 原版随机斑块状的花岗岩、安山岩、闪长岩、泥土和沙砾生成被**禁用**
- 取而代之的是**大型条纹状**生成：一个区域内随机生成三种次生石头之一（偶尔完全没有次生石头）
- 在 **y=0 以下**，凝灰岩替代其他三种次生石头生成
- 地表以下 20 格内会生成泥土、砂土和沙砾

![石头条纹](https://user-images.githubusercontent.com/62686557/212526422-06cb3e9f-a6a6-4eeb-a869-fd1bcf741e0b.png)

---

## 尘土走廊（Dusty Corridors）

- 废弃矿井中现在会出现**尘土堆**
- 部分走廊布满尘土，偶尔会出现**尘兔（Dust Bunny）刷怪笼**

![尘土走廊](https://github.com/AstralOrdana/Spelunkery/assets/62686557/9a2904cd-c25c-44e4-af9c-9b70610dab49)

## 裂隙雕刻器（Crevasse Carvers）

- 实验性世界生成快照中的**裂隙（Crevasse）**型雕刻器被重新实现，形状略有调整

![裂隙](https://github.com/AstralOrdana/Spelunkery/assets/62686557/f2f81d44-37e0-4763-b7ec-5e8b24e6381d)

---

## 磁石（Lodestones）

- 磁石新增替代合成配方：使用[磁铁矿块](./resources.md#粗磁铁矿-raw-magnetite)代替下界合金锭

![磁石配方](https://user-images.githubusercontent.com/62686557/218574959-51bc18c4-ebcd-4e63-bae2-56770e4b32ee.png)

## 史莱姆（Slimes）

- 史莱姆现在可以**在史莱姆区块之外的地下生成**
- 越深入地下，生成频率越高

![史莱姆](https://user-images.githubusercontent.com/62686557/217734536-746505c1-4cdf-43df-a0af-628d140ffd43.png)

## 腐肉（Rotten Flesh）

- 腐肉现在可以通过与**盐或硝石**结合，合成为**皮革**

![腐肉合成皮革](https://user-images.githubusercontent.com/62686557/218575314-948dfb31-2082-4e9b-88b2-f6845f209fd9.png)

## 铁砧修复（Anvil Restoration）

- 对受损的铁砧右键**铁锭**，可恢复一阶损坏
- 用于修复铁砧的物品由物品标签控制，可自定义

![铁砧修复](https://user-images.githubusercontent.com/62686557/218227784-fc0f72cd-5dc7-4611-a7e0-4a44e4a7b752.png)

---

## 下界传送门（Nether Portals）

- 传送门创建和摧毁时现在会播放音效
- 传送门被摧毁时，其黑曜石框架有几率随机变成**哭泣的黑曜石**
- [次元之泪瓶](./utilities.md#次元之泪瓶-bottle-o-dimensional-tears)可以点燃传送门
- 配置项（默认关闭）可禁用打火石点燃传送门，为喜欢挑战的玩家增加难度

![下界传送门](https://user-images.githubusercontent.com/62686557/217735607-b46a3b74-9545-4439-ae23-a13e62cce89d.png)

---

## 幽匿（Sculk）

- 幽匿块现在用剪刀开采会掉落**幽匿脉络**
- 幽匿块可以用幽匿脉络合成

![幽匿](https://user-images.githubusercontent.com/62686557/217733886-e4649ae3-3196-400c-8ee4-99a1a171fa28.png)

---

## 史莱姆养殖（Slime Ranching）

Spelunkery 大幅扩展了史莱姆的养殖玩法：

- **史莱姆食物**：史莱姆现在可以吃**甜菜根**和**生鸡肉**（由物品标签控制，可自行扩展食物列表）
- **手动喂食**：对任意体型的史莱姆右键食物即可喂食，喂食后史莱姆有几率产出**粘液球**，体型越大产出越多
- **被动进食**：史莱姆会吃掉附近地面上的生鸡肉或甜菜根。被动进食同样按体型产出粘液球，且有小几率**体型增大一级**（上限可通过配置调整，默认 5 级）；两次被动进食之间有 30 秒冷却
- **友好史莱姆**：玩家拥有**生命恢复**效果时，任何体型的史莱姆都无法伤害你
- **史莱姆炼金术**：将粘液块扔进装满水的炼药锅中，会消耗全部水并召唤一只**幼年史莱姆**

![史莱姆喂食](https://user-images.githubusercontent.com/62686557/221009033-e7e416d1-2cac-41fc-9b10-38c1ea089afd.png)

![史莱姆食物](https://user-images.githubusercontent.com/62686557/221009316-55d4e20f-1b23-416d-8bf8-9e42302cb635.png)

---

> 📖 更多细节请参阅 [Spelunkery 官方 Wiki](https://github.com/AstralOrdana/Spelunkery/wiki)
