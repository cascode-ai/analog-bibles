# 详细步骤 - R714

**思路。** 求出导线的总电阻和总电容（平板电容项随宽度增大，边缘电容项则不变），把导线的延迟按分布式 RC 线（distributed RC line）计算，$T_D = \tfrac12R_{wire}C_{wire}$（Elmore 延迟），再与 500 Ω 驱动源的集总时间常数 $R_SC_{wire}$ 进行比较。

### 第 1 步 — 导线的电阻和电容

导线共有 $L/W = 1000\ \mu\mathrm{m}/2\ \mu\mathrm{m} = 500$ 个方块，是 1 µm 宽导线的一半：

$$R_{wire} = R_\square\frac{L}{W} = (0.04\ \Omega/\square)(500) = 20\ \Omega .$$

单位长度上，平板电容部分随宽度增大，$c_{pp} = (7.0\ \mathrm{aF/\mu m^2})(2\ \mu\mathrm{m}) = 14\ \mathrm{aF/\mu m}$，而边缘电容（两侧）保持为 $c_{fr} = 30\ \mathrm{aF/\mu m}$：

$$c = 14 + 30 = 44\ \mathrm{aF/\mu m}, \qquad C_{wire} = cL = (44\ \mathrm{aF/\mu m})(1000\ \mu\mathrm{m}) = 44\ \mathrm{fF}.$$

### 第 2 步 — 导线自身的延迟（分布式 RC 线）

导线是一条分布式 RC 线，单位长度的电阻和电容分别为 $r = R_{wire}/L$ 和 $c = C_{wire}/L$。

<!-- diagram: diagram-01.cir -->

在 Elmore 延迟中，距离为 $x$ 处的电容元 $c\,dx$ 经导线电阻 $rx$ 充电：

$$T_D = \int_0^L (rx)(c\,dx) = \frac{rcL^2}{2} = \frac12R_{wire}C_{wire} = \tfrac12(20\ \Omega)(44\times10^{-15}\ \mathrm{F}) = \tfrac12(0.88\ \mathrm{ps}) = 0.44\ \mathrm{ps}.$$

（若按阶跃响应 50 % 点的定义，$\approx 0.38R_{wire}C_{wire} = 0.33$ ps。）

### 第 3 步 — 驱动源的集总时间常数

$$\tau_{lumped} = R_SC_{wire} = (500\ \Omega)(44\times10^{-15}\ \mathrm{F}) = 22\ \mathrm{ps}.$$

### 第 4 步 — 比较

$$\frac{R_SC_{wire}}{T_D} = \frac{22\ \mathrm{ps}}{0.44\ \mathrm{ps}} = 50 = \frac{2R_S}{R_{wire}} = \frac{2(500)}{20}.$$

从源到导线末端的总 Elmore 延迟为

$$T_{total} = R_SC_{wire} + \tfrac12R_{wire}C_{wire} = 22 + 0.44 = 22.4\ \mathrm{ps},$$

其中导线自身电阻的贡献只占 2 %：延迟由驱动源对导线电容的充电决定。

**与 1 µm 宽导线的比较**（长度和层相同）：

| 宽度 | $R_{wire}$ | $C_{wire}$ | $\tfrac12R_{wire}C_{wire}$ | $R_SC_{wire}$ | 总计 |
|---|---|---|---|---|---|
| 1 µm | 40 Ω | 37 fF | 0.74 ps | 18.5 ps | 19.2 ps |
| 2 µm | 20 Ω | 44 fF | 0.44 ps | 22 ps | 22.4 ps |

加宽使电阻减半，而电容只增大 19 %（边缘电容部分不增大），因此导线自身的延迟下降。然而在 500 Ω 驱动源下，起主导作用的 $R_SC$ 会因附加电容而**增大**，因此较宽的导线总体上反而更慢。只有当导线电阻与驱动源电阻相当时，加宽才有好处。

### 结果

- $R_{wire} = 20\ \Omega$，$C_{wire} = 14 + 30 = 44$ fF。
- 分布式导线延迟 $T_D = \tfrac12R_{wire}C_{wire} \approx 0.44$ ps（按 50 % 点计 ≈ 0.33 ps）。
- 集总时间常数 $R_SC_{wire} = 22$ ps，约**大 50 倍**；从源到末端的总延迟 ≈ 22.4 ps。

导线自身的延迟可以忽略；驱动源起主导作用。

**常见错误。** 让边缘电容随宽度成比例增大（得到 60 aF/µm）。边缘电容来自两个边缘，并且是按单位长度给出的；只有平板电容部分会加倍。

**常见错误。** 认为较宽的导线电阻更大，或用 $W/L$ 作为方块数。较宽的导线方块数**更少**（$L/W = 500$），因此电阻是 1 µm 宽导线的一半。

**常见错误。** 断定加宽导线会使信号变快。加宽减小的只是很小的分布项，而起主导作用的 $R_SC_{wire}$ 会随附加电容而增大。
