# 原版改动

Spelunkery 对原版 Minecraft 的诸多机制进行了调整，让地下世界更丰富、采矿更有策略性。

> 📖 本节内容整理自 [Spelunkery 官方 Wiki（Vanilla Alterations）](https://github.com/Silversmith-Mods/Spelunkery/wiki/Vanilla-Alterations)

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

![矿石掉落改动](/res/screenshots/spelunkery/ore_drop_changes.webp)

![粗矿粒](/res/screenshots/spelunkery/raw_nuggets_drops.webp)

---

## 石头变体世界生成

- 原版随机斑块状的花岗岩、安山岩、闪长岩、泥土和沙砾生成被**禁用**
- 取而代之的是**大型条纹状**生成：一个区域内随机生成三种次生石头之一（偶尔完全没有次生石头）
- 在 **y=0 以下**，凝灰岩替代其他三种次生石头生成
- 地表以下 20 格内会生成泥土、砂土和沙砾

![石头条纹](/res/screenshots/spelunkery/stone_stripes.webp)

---

## 尘土走廊（Dusty Corridors）

- 废弃矿井中现在会出现**尘土堆**
- 部分走廊布满尘土，偶尔会出现**尘兔（Dust Bunny）刷怪笼**

![尘土走廊](/res/screenshots/spelunkery/dusty_corridor.webp)

## 裂隙雕刻器（Crevasse Carvers）

- 实验性世界生成快照中的**裂隙（Crevasse）**型雕刻器被重新实现，形状略有调整

![裂隙](/res/screenshots/spelunkery/crevasse.webp)

---

## 磁石（Lodestones）

- 磁石新增替代合成配方：使用[磁铁矿块](./resources.md#粗磁铁矿-raw-magnetite)代替下界合金锭

![磁石配方](/res/screenshots/spelunkery/lodestone_recipe.webp)

## 史莱姆（Slimes）

- 史莱姆现在可以**在史莱姆区块之外的地下生成**
- 越深入地下，生成频率越高

![史莱姆](/res/screenshots/spelunkery/slime.webp)

## 腐肉（Rotten Flesh）

- 腐肉现在可以通过与**盐或硝石**结合，合成为**皮革**

![腐肉合成皮革](/res/screenshots/spelunkery/rotten_flesh_leather.webp)

## 铁砧修复（Anvil Restoration）

- 对受损的铁砧右键**铁锭**，可恢复一阶损坏
- 用于修复铁砧的物品由物品标签控制，可自定义

![铁砧修复](/res/screenshots/spelunkery/anvil_restoration.webp)

---

## 下界传送门（Nether Portals）

- 传送门创建和摧毁时现在会播放音效
- 传送门被摧毁时，其黑曜石框架有几率随机变成**哭泣的黑曜石**
- [次元之泪瓶](./utilities.md#次元之泪瓶-bottle-o-dimensional-tears)可以点燃传送门
- 配置项（默认关闭）可禁用打火石点燃传送门，为喜欢挑战的玩家增加难度

![下界传送门](/res/screenshots/spelunkery/nether_portal.webp)

---

## 幽匿（Sculk）

- 幽匿块现在用剪刀开采会掉落**幽匿脉络**
- 幽匿块可以用幽匿脉络合成

![幽匿](/res/screenshots/spelunkery/sculk.webp)

---

## 史莱姆养殖（Slime Ranching）

Spelunkery 大幅扩展了史莱姆的养殖玩法：

- **史莱姆食物**：史莱姆现在可以吃**甜菜根**和**生鸡肉**（由物品标签控制，可自行扩展食物列表）
- **手动喂食**：对任意体型的史莱姆右键食物即可喂食，喂食后史莱姆有几率产出**粘液球**，体型越大产出越多
- **被动进食**：史莱姆会吃掉附近地面上的生鸡肉或甜菜根。被动进食同样按体型产出粘液球，且有小几率**体型增大一级**（上限可通过配置调整，默认 5 级）；两次被动进食之间有 30 秒冷却
- **友好史莱姆**：玩家拥有**生命恢复**效果时，任何体型的史莱姆都无法伤害你
- **史莱姆炼金术**：将粘液块扔进装满水的炼药锅中，会消耗全部水并召唤一只**幼年史莱姆**

![史莱姆喂食](/res/screenshots/spelunkery/slime_feeding.webp)

![史莱姆食物](/res/screenshots/spelunkery/slime_foods.webp)

---

> 📖 更多细节请参阅 [Spelunkery 官方 Wiki](https://github.com/Silversmith-Mods/Spelunkery/wiki)
