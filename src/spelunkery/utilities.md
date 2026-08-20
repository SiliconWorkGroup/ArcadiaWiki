# 实用工具

Spelunkery 新增了多种实用工具，让洞穴探险、垂直移动与资源收集更加轻松。

> 📖 本节内容整理自 [Spelunkery 官方 Wiki（Utilities）](https://github.com/Silversmith-Mods/Spelunkery/wiki/Utilities)

---

## 绳梯（Rope Ladders）

- 由**缠根（Tangle Roots）**合成，用于跨越垂直距离
- 可以像脚手架一样向下延伸放置（对下方绳梯右键另一根绳梯）
- 对顶部绳梯右键可**逐格自动收回**
- 向下延伸的绳梯仅靠上方支撑即可悬空，不需要像原版梯子那样依附方块

![绳梯](/res/screenshots/spelunkery/spelunkery-28.webp)

## 木轨（Wooden Rails）

- 放置方式类似脚手架：朝向决定轨道延伸方向
- 可以**悬空跨越空洞**，是跨越峡谷的理想选择
- 矿车在木轨上行驶时会轻微晃动——毕竟这是一条摇摇晃晃的轨道

![木轨](/res/screenshots/spelunkery/spelunkery-32.webp)

## 降落伞（Parachutes）

- 由线和羊毛合成
- 放在背包中时，若检测到下落高度足以造成显著伤害，会自动展开并**减缓下落**
- 落地后需要重新折叠，才能在下一次坠落时再次生效

![降落伞](/res/screenshots/spelunkery/spelunkery-09.webp)

---

## 渠道与淘金槽（Channels & Sluices）

- **渠道**由木头或石砖与蜜脾合成
- 水流过渠道顶部时，只会从**开放的一侧**溢出
- 手持斧头（木质渠道）或镐子（石质渠道）右键渠道侧面，可切换该侧开/关
- **淘金槽**是特殊的渠道：内部有 9 格物品栏，流体流过其格栅侧面时会**生成物品**
- 特定物品在流动的流体中经过淘金槽会被"淘洗"产出新物品，例如用水淘洗泥土可得到[卵石](./resources.md#卵石-pebbles)或种子

![渠道与淘金槽](/res/screenshots/spelunkery/spelunkery-05.webp)

## 荧光棒（Glow Sticks）

- 可放置在任何表面，或像雪球一样投掷（落在哪就插在哪）
- **可投掷到水下**并正常发光，是水下探索的利器
- 拥有全部 **16 种颜色** + 发光墨囊色，适合标记不同路线
- 安装 Shimmer 模组后支持**彩色照明**联动

![多色荧光棒](/res/screenshots/spelunkery/spelunkery-29.webp)

## 深度计（Depth Meter）

- 由铜和红石合成
- 无需打开 F3 调试界面，即可显示你当前的海拔高度

![深度计](/res/screenshots/spelunkery/spelunkery-31.webp)

---

## 磁力工具

### 磁罗盘（Magnetic Compass）

- 始终指向北方，右键时显示玩家当前的 X、Z 坐标
- 附近存在强磁场时磁性会受干扰：如果 128 格内有磁铁矿块，罗盘会**指向磁铁矿**而非北方
- 合成：在锻造台上将指南针与磁铁矿块组合（1.20+ 也可用 4 个粗磁铁矿 + 1 个红石合成）

![磁罗盘](/res/screenshots/spelunkery/spelunkery-08.webp)

### 物品磁铁（Item Magnet）

- 由磁铁矿块和朱砂合成
- 右键激活后，将附近的掉落物**吸向玩家**
- 放在物品展示框中的已激活物品磁铁同样会吸引掉落物，可用于自动化农场

![物品磁铁](/res/screenshots/spelunkery/spelunkery-06.webp)

---

## 勘探工具

### 音叉（Tuning Fork）

- 由紫水晶和铜合成
- 右键激活后尝试探测附近的**紫水晶晶洞**
- 成功后指向探测到的晶洞，越靠近振动越快

![音叉](/res/screenshots/spelunkery/spelunkery-02.webp)

### 回响叉（Echo Fork）

- 右键检测并高亮指定范围内（默认 16 格）的所有**活体实体**
- **Shift + 右键** 清除发光效果
- 使用冷却时间 30 秒
- 可在远古城市战利品箱中找到，或用回响碎片、幽匿脉络和铁合成

![回响叉](/res/screenshots/spelunkery/spelunkery-38.webp)

---

## 其他工具

### 次元之泪瓶（Bottle o' Dimensional Tears）

- 用空瓶对着哭泣的黑曜石或充能的重生锚右键获得
- 可以**替代打火石点燃下界传送门**
- 饮用后会传送回你的**出生点**，即使跨维度也有效

![次元之泪瓶](/res/screenshots/spelunkery/spelunkery-33.webp)

### 锤与凿（Hammer and Chisel）

- 由燧石或黑曜石合成，决定其耐久和挖掘等级
- 像拉弓一样长按右键，直到指向的方块被破坏
- 只能破坏通常用镐挖掘、且在你的锤凿挖掘等级内的方块
- 掉落物等于**精准采集**挖掘的结果
- 潜行长按右键时，会将方块转换为**錾制形态**（若有；否则正常破坏）

![锤与凿](/res/screenshots/spelunkery/spelunkery-34.webp)

### 炸矿虫（Mine-o-mite）

- 由纸、黏土和火药合成，可放置在地面或投掷
- 用打火石点燃后会引燃，数秒后爆炸
- 一格空间最多可放置 9 只，数量越多爆炸越大
- 投掷时附着在击中的方块上
- 若副手持打火石投掷，炸矿虫会在接触任何表面时立即爆炸

![炸矿虫](/res/screenshots/spelunkery/spelunkery-53.webp)

### 压缩爆破挖掘机（Compression Blast Miner）

- 由下界合金、铁和黑曜石合成，简称 **CBM**
- 定向方块：右键用 TNT 装填，充能后朝其面向的方向引爆
- 爆炸威力足以破坏**几乎所有方块（包括基岩）**

![压缩爆破挖掘机](/res/screenshots/spelunkery/spelunkery-52.webp)

---

## 原版物品改进

### 回响罗盘改进（Recovery Compass Tweaks）

- 原版回响罗盘（指向你最近死亡点的指南针）死亡时**不再从物品栏掉落**
- 它会留在物品栏中，让你能立刻追踪死亡点

![回响罗盘](/res/screenshots/spelunkery/spelunkery-30.webp)

---

> 📖 更多细节请参阅 [Spelunkery 官方 Wiki](https://github.com/Silversmith-Mods/Spelunkery/wiki)
