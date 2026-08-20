# OPAC 指令参考

OPAC 提供四组聊天指令，覆盖玩家配置、领地声明与队伍管理。

> [!NOTE]
> 本文基于 OPAC **0.30.0+**（theArcadia 内置版本）。0.30.0 起所有指令前缀已从 `/openpac*` 缩短为 `/opac`、`/oclaims`、`/oparties`。
>
> 带 ⚠️ 标记的指令需要 **OP（管理员）权限**；具体可用性以服务器配置为准。

---

## 指令总览

| 前缀 | 用途 |
|:-----|:-----|
| `/opac` | 玩家配置与个人设置 |
| `/oclaims` | 区块声明、强制加载、领地管理 |
| `/oparties` | 队伍创建与管理 |
| `/opm` | 队伍聊天快捷指令 |

---

## 一、玩家配置（/opac）

> [!TIP]
> 日常使用中，大多数设置通过按 **`'`** 键打开的 OPAC 菜单即可完成，指令主要用于批量或精细操作。

### 查看与设置

```
/opac player-config get <选项>
/opac player-config set <选项> <值>
```

- 查看当前值：`/opac player-config get max-usables`（示例选项名）
- 修改设置：`/opac player-config set <选项> <值>`
- 输入 `set` 后可自动补全（Tab）所有可用选项名与建议值

### 子配置（Sub-configs）

子配置允许为不同场景（如不同维度）保存多套设置：

```
/opac player-config sub list
/opac player-config sub create <子配置ID>
/opac player-config sub delete <子配置ID>
/opac player-config sub get <子配置ID> <选项>
/opac player-config sub set <子配置ID> <选项> <值>
```

### 管理员操作（⚠️）

```
/opac player-config for <玩家> get <选项>
/opac player-config for <玩家> set <选项> <值>
/opac default-player-config get <选项>
/opac default-player-config set <选项> <值>
```

- `for <玩家>`：查看或修改**指定玩家**的配置
- `default-player-config`：修改**默认玩家配置**（新玩家继承）

### 玩家组（Player Groups，⚠️）

```
/opac player-groups ...       # 玩家组管理
```

---

## 二、领地指令（/oclaims）

### 声明与取消

```
/oclaims claim                     # 声明当前所在区块
/oclaims claim <x1> <z1> <x2> <z2> # 声明两个坐标之间的区域
/oclaims claim in <维度> <坐标>    # 在其他维度声明
/oclaims unclaim                   # 取消声明当前区块
/oclaims unclaim <x1> <z1> <x2> <z2>
```

> 坐标使用方块坐标（区块内的方块位置），系统会自动换算为区块范围。也可在 [Xaero 世界地图](https://modrinth.com/mod/xaeros-world-map) 上**右键拖拽选择区域**后批量声明。
>
> `in <维度>` 可指定目标维度（如 `minecraft:the_nether`）；`anyway` 后缀（OP）可无视领地限制强制操作。

### 强制加载（Forceload）

```
/oclaims forceload                # 强制加载当前区块
/oclaims forceload <x1> <z1> <x2> <z2>
/oclaims forceload in <维度> <坐标>
/oclaims unforceload              # 取消强制加载
```

### 领地信息与管理

```
/oclaims about                    # 查看当前区块的领地信息
/oclaims about <玩家>             # 查看指定玩家的领地信息（⚠️）
/oclaims transfer <玩家> [confirm]  # 将当前领地转让给其他玩家（可加 confirm 跳过二次确认）
/oclaims transfer-accept          # 接受领地转让
/oclaims clear                    # 清除领地（需二次确认）
/oclaims confirm                  # 确认执行（配合 clear/transfer 等）
```

### 领地模式（Sub-claims）

OPAC 支持为不同区块保存独立的权限配置（子领地）：

```
/oclaims current                  # 查看当前所在子领地
/oclaims use <子领地ID>           # 切换到指定子领地
/oclaims claim with <子领地ID>    # 以指定子领地声明区块
```

### 权限模式（⚠️）

```
/oclaims admin-mode               # 管理员模式：无视领地权限操作
/oclaims moderator-mode           # 版主模式
/oclaims non-ally-mode            # 非盟友模式：声明时排除盟友
/oclaims impersonate <玩家>       # 以指定玩家的身份执行领地操作
```

---

## 三、队伍指令（/oparties）

### 创建与解散队伍

```
/oparties create                      # 创建队伍（以你的玩家名为队名）
/oparties member invite <玩家>        # 邀请玩家加入
/oparties join <队伍ID>               # 接受邀请加入队伍
/oparties member kick <玩家名>        # 踢出成员
/oparties leave                       # 离开队伍
/oparties destroy                     # 解散队伍（需二次确认）
/oparties confirm                     # 确认解散
/oparties transfer <新队长> confirm   # 转让队长（需二次确认）
```

### 队伍信息与角色

```
/oparties about                       # 查看队伍信息（也可指定玩家：/oparties about <玩家>）
/oparties member rank <职位> <玩家>   # 设置成员职位
```

### 队伍聊天

```
/opm <消息>                           # 发送队伍聊天消息（快捷指令）
/oparties chat <消息>                 # 同上
```

### 盟友（Allies）

```
/oparties ally add <玩家>             # 与某玩家所在的队伍结盟
/oparties ally remove <玩家>          # 解除结盟
```

### 管理员操作（⚠️）

```
/oparties admin-mode              # 管理员模式
/oparties impersonate <玩家>      # 以指定玩家身份执行队伍操作
```

---

## 四、常用配置项

以下为玩家配置中常用的选项（完整列表可在游戏中 Tab 补全查看）：

| 选项 | 说明 |
|:-----|:-----|
| 最大声明数量 | 可声明的区块总数上限（由服务器配置） |
| 强制加载限制 | 可强制加载的区块数量上限 |
| 区块互动权限默认值 | 新声明区块的默认权限设置 |

> 部分选项可能被服务器管理员锁定，在菜单中显示为灰色即表示不可修改。

---

> 📖 更详细的说明请参阅 [OPAC 官方文档](https://github.com/thexaero/open-parties-and-claims)
