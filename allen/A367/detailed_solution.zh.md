# 详细步骤 - A367

由给定的器件数据计算跨导和各节点电容，再求输出极点（用密勒极点分裂公式）以及镜像节点和共源共栅源极处的高阶极点 $g_m/C$。取 $GB=g_{m1}/C_c$，相位裕度由这些极点与右半平面零点在 GB 处的相移之和得到。减小 $C_c$ 会提高 GB，但使其更接近输出极点，所以 60° 条件决定了可用的最小 $C_c$。

### 第 1 步 — 跨导

用 $g_m=\sqrt{2K'(W/L)I_D}$：

| 器件 | W/L | $I_D$ | $g_m$ |
|---|---|---|---|
| M1 | 7.18 | 10 µA | 125.7 µS |
| M6 | 12.8 | 20 µA | 160 µS |
| M8 | 1 | 20 µA | 66.3 µS |
| M14 | 22.85 | 314 µA | 1256 µS |

### 第 2 步 — 节点电容

用 $C_{gs}=\tfrac23WLC_{ox}+\mathrm{CGSO}\cdot W$、$C_{gd}=\mathrm{CGDO}\cdot W$，零偏结电容 $C_{bd}=CJ(2\ \mu\mathrm m\cdot W)+CJSW(2W+4\ \mu\mathrm m)$。以 p 沟道 M13（$W=201\ \mu$m）为代表性代入：

$$
C_{db13}=(560\ \mu\mathrm{F/m^2})(402\times10^{-12}\ \mathrm{m^2})+(350\ \mathrm{pF/m})(406\ \mu\mathrm m)=225+142=367\ \mathrm{fF}.
$$

其余各项同样计算：

| 节点 | 组成（fF） | 合计 |
|---|---|---|
| 输出 | $C_L$ = 10 pF，$C_{db14}$ 54，$C_{db13}$ 367，$C_{gd13}$ 44 | $C_{out}$ ≈ 10.47 pF |
| 第一级输出（M14 栅极） | $C_{gs14}$ 42.7，$C_{db7}$ 24.7，$C_{gd7}$ 2.8，$C_{db9}$ 3.8，$C_{gd9}$ 0.2 | $C_I$ ≈ 74 fF |
| 镜像节点（M6 漏极、M8 与 M9 栅极） | $C_{gs8}+C_{gs9}$ 3.7，$C_{db8}$ 3.8，$C_{db6}$ 24.7，$C_{gd6}$ 2.8 | ≈ 35 fF |
| M6（或 M7）源极 | $C_{gs6}$ 23.9，$C_{sb6}$ 24.7，$C_{db3}$ 36.3，$C_{gd3}$ 4.2，$C_{db1}$ 18.0，$C_{gd1}$ 1.6 | ≈ 109 fF |

### 第 3 步 — $C_c=2$ pF 时的极点和零点

采用密勒补偿时，输出极点为

$$
p_2\approx-\frac{g_{m14}C_c}{C_IC_{out}+C_c(C_I+C_{out})}=-\frac{(1256\ \mu\mathrm S)(2\ \mathrm{pF})}{(74\ \mathrm{fF})(10.47\ \mathrm{pF})+(2\ \mathrm{pF})(10.54\ \mathrm{pF})}=-1.15\times10^8\ \mathrm{rad/s}\ (18.3\ \mathrm{MHz}),
$$

接近 $g_{m14}/C_L$（20 MHz）。高阶极点由各节点上器件的 $1/g_m$ 电阻决定：

$$
p_3\approx-\frac{g_{m8}}{35\ \mathrm{fF}}=-1.9\times10^9\ \mathrm{rad/s}\ (300\ \mathrm{MHz}),\qquad
p_6\approx-\frac{g_{m6}}{109\ \mathrm{fF}}=-1.47\times10^9\ \mathrm{rad/s}\ (230\ \mathrm{MHz}).
$$

若只计 $C_{gs6}$，共源共栅源极极点将位于 $7.6\times10^9$ rad/s（1.2 GHz）；结电容使它降低约五倍。右半平面零点为 $z=g_{m14}/C_c=6.3\times10^8$ rad/s（100 MHz）。

### 第 4 步 — 2 pF 设计的相位裕度

$GB=g_{m1}/C_c=6.29\times10^7$ rad/s（10 MHz），且对任意 $C_c$ 都有 $GB/z=g_{m1}/g_{m14}=0.1$：

$$
PM=90^\circ-\tan^{-1}\frac{GB}{|p_2|}-\tan^{-1}\frac{GB}{z}-\tan^{-1}\frac{GB}{|p_3|}-\tan^{-1}\frac{GB}{|p_6|}
=90-28.7-5.7-1.9-2.4\approx51^\circ,
$$

若把 M7 源极处的极点作为第二个相同极点计入，则约为 49°。因此 2 pF 的设计已经达不到 60°。

### 第 5 步 — 60° 相位裕度下的最大 GB

增大 $C_c$ 会降低 $GB=g_{m1}/C_c$，而 $p_2$ 保持在 $g_{m14}/C_L$ 附近，$GB/z$ 保持为 0.1。由相位裕度表达式解 $PM=60^\circ$：

$$
C_c\approx2.5\ \mathrm{pF},\qquad GB=\frac{g_{m1}}{C_c}\approx8\ \mathrm{MHz}.
$$

若在零极点模型的实际单位增益交越频率（略低于 $g_{m1}/C_c$）处计算相位，并计入两个共源共栅源极极点，则得 $C_c\approx2.6$–2.8 pF，$GB=g_{m1}/C_c\approx7.1$–7.7 MHz。无论哪种算法：

| 物理量 | 数值 |
|---|---|
| 输出极点 | ≈ −1.15×10⁸ rad/s（18 MHz） |
| 镜像极点（M8–M9） | ≈ −1.9×10⁹ rad/s（300 MHz） |
| 共源共栅源极极点（M6、M7） | ≈ −1.5×10⁹ rad/s（230 MHz） |
| 60° 所需 $C_c$ | ≈ 2.5–2.8 pF |
| 新的 GB | ≈ 7–8 MHz |

改变 $C_c$ 不能使 GB 超过 10 MHz。高阶极点是 GB 的 25–40 倍，只消耗几度相位；起约束作用的是输出极点 $p_2\approx g_{m14}/C_L\approx20$ MHz，原设计的 $g_{m14}=10g_{m1}$、$C_c=0.2C_L$ 正是为此而选。要得到更大的 GB 需要更大的 $g_{m14}$，即更大的输出级电流，而不是更小的 $C_c$。
