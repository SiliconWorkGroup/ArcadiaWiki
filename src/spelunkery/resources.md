# 矿物与资源

Spelunkery 重新设计了多种矿物与资源的获取方式，让挖矿的每个阶段都有新的收获。

> 📖 本节内容整理自 [Spelunkery 官方 Wiki（Resources）](https://github.com/AstralOrdana/Spelunkery/wiki/Resources)

---

## 粗矿粒（Raw Nuggets）

铁、金、铜三种金属现在都有对应的**粗矿粒**：

- **铜**新增了矿粒形态，可通过烧炼粗铜矿粒获得，也可直接用铜锭合成
- 各金属矿石的**深板岩变体**在被开采时会额外掉落少量粗矿粒，鼓励玩家深入地下挖掘
- 下界金矿石现在也会掉落粗金矿粒

![粗矿粒](https://user-images.githubusercontent.com/62686557/217732099-c0aae3ff-fff4-4522-adcc-5bc43d9b0b08.png)

> [!NOTE]
> **Create 联动**：安装 Create 后，Spelunkery 的铜矿粒会被禁用，改用 Create 自带的铜矿粒；同时新增粗锌矿粒，由深板岩锌矿石掉落。
>
> **Oreganized 联动**：安装 Oreganized 后，其深板岩银矿石和深板岩铅矿石也会掉落对应的粗矿粒。

## 宝石碎片（Gem Shards）

朱砂、青金石、绿宝石和钻石都可以合成为 9 个对应的**碎片**，碎片的功能与矿粒类似：

- 宝石碎片同样拥有"粗糙"形态，可以打磨并合成为粗糙宝石
- 宝石矿石的深板岩变体有几率额外掉落粗糙碎片
- 下界石英也新增了粗糙碎片和粗糙石英块

![宝石碎片](https://github.com/AstralOrdana/Spelunkery/assets/62686557/3029f4c2-e41a-4aec-b73f-d3f110b91ede)

> [!NOTE]
> **Sully's Mod 联动**：安装 Sully's Mod 后，会启用粗糙与抛光软玉碎片。

## 煤炭块与木炭块（Lump of Coal & Charcoal Briquette）

- 煤炭和木炭可以分别合成为 8 个**煤炭块**或**木炭块**
- 两者都可以燃烧，每个可烧炼 1 个物品
- 深板岩煤矿石会掉落煤炭块
- 木炭块可通过烧炼或烧制特定食物获得

![煤炭块与木炭块](https://github.com/AstralOrdana/Spelunkery/assets/62686557/9da97549-c2d1-4ffb-88aa-0c9428916ca8)

## 卵石（Pebbles）

- 卵石共有 6 种：圆石、深板岩、下界岩、玄武岩、黑石和末地石
- 9 个同类卵石可以合回对应的石块
- 卵石可以像雪球一样投掷，命中实体时将其击退，但不造成伤害

![卵石](https://github.com/AstralOrdana/Spelunkery/assets/62686557/964935de-bdeb-49a4-b0bf-ec715a5cd386)

---

## 粗糙宝石（Rough Gemstones）

原版宝石矿石的掉落物被改为**粗糙形态**，与金属矿石的粗矿类似：

| 矿石 | 掉落物 |
|:-----|:-------|
| 钻石矿石 | 粗糙钻石 |
| 绿宝石矿石 | 粗糙绿宝石 |
| 青金石矿石 | 粗青金石（Rough Lazurite） |
| 红石矿石 | 粗朱砂（Rough Cinnabar） |

将粗糙宝石放在**砂轮**上打磨，即可得到精炼形态。任何粗糙碎片、宝石或宝石块都可以打磨，并始终获得相应比例的经验值和物品。

![粗糙宝石块](https://user-images.githubusercontent.com/62686557/211238177-468318cb-60b9-4eca-a559-ad0e2031d9cd.png)

部分宝石打磨时会产生额外副产物：

- **粗青金石**：产出 0-2 个金粒
- **粗朱砂**：产出 1-3 个红石粉

按住 **Shift + 右键** 可将整组粗糙材料一次性打磨完毕。

![砂轮打磨](https://user-images.githubusercontent.com/62686557/211240877-c3394069-6124-467d-a42f-f67849d34b9f.png)

### 钻石砂轮（Diamond Grindstone）

- 钻石和绿宝石**只能**在钻石砂轮上打磨，由粗糙钻石碎片和深板岩合成
- 钻石砂轮保留普通砂轮的全部功能，包括打磨其他粗糙宝石
- 额外功能：可以**祛除物品上的诅咒附魔**
- 每次打磨有 5% 概率使砂轮"损耗"（Depleted）等级 +1
- 损耗达到 3 级后，无法再打磨粗糙钻石和绿宝石
- 手持粗糙钻石碎片对损耗的钻石砂轮 **Shift + 右键**，可恢复一级损耗

![钻石砂轮](https://github.com/user-attachments/assets/8be74365-ec42-4697-9262-a8125c437d05)

---

## 矿石变体（M'ores）

除了原版的石头和深板岩矿石外，Spelunkery 为花岗岩、安山岩、闪长岩和凝灰岩提供了**每种矿石的变体**：

- 花岗岩、安山岩、闪长岩变体与原版石头矿石特性相同；凝灰岩变体更接近深板岩
- 矿石矿脉无论与哪种岩石变体相交，都会生成对应变体
- 同时为一些热门模组的新矿石提供变体，包括 Sully's Mod 的软玉、Oreganized 的银和铅、Create 的锌

![矿石变体](https://user-images.githubusercontent.com/62686557/221013077-71898223-ab1a-4e86-9601-86e81f3efcd5.png)

---

## 大型矿脉（Ore Veins）

世界各处会生成多种**大型矿脉**，是批量获取资源的重要来源：

| 矿脉 | 生成位置 | 构成 |
|:-----|:---------|:-----|
| **大型青金石矿脉** | 沙漠 | 数个约 3×3×10 的矿脉群，由砂岩青金石矿石、金矿石和粗糙青金石块构成 |
| **大型绿宝石矿脉** | 山地 | 安山岩绿宝石矿石与粗糙绿宝石块的随机簇 |
| **大型朱砂矿脉** | 主世界任意生物群系的最底部 | 像机器线路一样铺开，由方解石红石矿石和粗糙朱砂块构成 |
| **大型煤矿脉** | 沼泽 | 平坦层状分布的煤矿石、煤炭块和平滑玄武岩钻石矿石 |
| **稀有钻石簇** | 深层地下 | 钻石矿石与粗糙钻石块的聚集，总在熔岩附近生成 |
| **大型金矿脉** | 下界 | 下界金矿石与粗金块的随机簇 |
| **石英晶洞** | 下界 | 由下界岩、黑石、下界石英矿石和粗糙石英块构成 |

![大型青金石矿脉](https://user-images.githubusercontent.com/62686557/211238161-23e64322-2dfd-4e16-bfa8-838626f6ff03.png)

![熔岩旁的稀有钻石簇](https://user-images.githubusercontent.com/62686557/212526630-ec053b2b-af56-4597-8de7-91af58477b61.png)

---

## 其他资源

### 泉水（Spring Water）

- 稀有资源，只在**最高山巅**生成
- 具有天然治愈效果，但**无法形成无限水源**
- 在泉水下方放置岩浆块时，泉水会尝试向上"沸腾"穿过岩层，直到突破到地表

![温泉](https://github.com/AstralOrdana/Spelunkery/assets/62686557/1fccd2e3-116c-4b72-aabd-9406971c077a)

### 粉盐（Pink Salt）

- 一种矿物，拥有粉末、晶体和多种方块形态
- 天然形态出现在山地生物群系高海拔的条纹和簇中
- 其各种形态具有多种[独特特性](./pink-salt.md)

![粉盐](https://user-images.githubusercontent.com/62686557/216679580-6232c448-6d9a-4287-afb8-c9bdbf3e9117.png)

### 硫磺（Sulfur）

- 黄色粉末，可合成硫磺块或铺成薄层
- 可在下界灵魂沙谷岸边的斑块中获得
- 用于合成**火药**

![硫磺斑块](https://github.com/AstralOrdana/Spelunkery/assets/62686557/100529e7-9283-4d9b-9ce2-836a35bca9ea)

### 硝石（Saltpeter）

- 白色粉末，可合成硝石块或铺成薄层
- 可通过[淘金槽](./utilities.md#渠道与淘金槽-channels--sluices)用水冲洗黏土获得，或从泉水中被动获得
- 用于合成**骨粉、火药**，或将腐肉干燥成**皮革**

![硝石](https://github.com/AstralOrdana/Spelunkery/assets/62686557/a0890aec-b420-43c2-86f3-91dba7b47f14)

### 软玉（Nephrite）

- 深绿色石材，生成于深层地下的小型巨砾中，被凝灰岩包裹，核心处藏有更"险恶"的东西
- 可合成为多种有用的[经验存储组件](./nephrite-xp-storage.md)

![软玉](https://user-images.githubusercontent.com/62686557/212526755-0a4bd141-2f61-411c-8264-73700b38449a.png)

### 粗磁铁矿（Raw Magnetite）

- 粗磁铁矿块混合生成于大型铁矿脉中
- 开采后获得粗磁铁矿，可用来合成多种[实用工具](./utilities.md)

![粗磁铁矿](https://github.com/AstralOrdana/Spelunkery/assets/62686557/ec03f00a-1cca-4d3f-8290-315c13a5bc4a)

---

> 📖 更多细节请参阅 [Spelunkery 官方 Wiki](https://github.com/AstralOrdana/Spelunkery/wiki)
