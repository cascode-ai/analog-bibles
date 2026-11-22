# 详细步骤 - A117

输出节点由两个 PMOS 器件供电：经 M4 镜像 100 µA 基准电流的电流源 M3，以及二极管连接的负载 M2。输出节点的 KCL 决定 M1 的 110 µA 如何在两者之间分配，M2 只流过很小的剩余电流。由 M1 的平方律求 $V_{in}$。在小信号模型中，由于 M2 电流小，二极管电导 $g_{m2}$ 也小，因此增益高于普通二极管负载反相器。

### 第 1 步 — 直流电流

M4 为二极管连接，流过 100 µA 基准电流；M3 的 $W/L$ 和 $V_{SG}$ 与 M4 相同，因此向输出节点提供 $I_{D3}=100$ µA（偏置中忽略 λ）。对输出节点列 KCL：

$$
I_{D1}=I_{D2}+I_{D3}\quad\Rightarrow\quad I_{D2}=110\ \mu\mathrm A-100\ \mu\mathrm A=10\ \mu\mathrm A .
$$

### 第 2 步 — 输入电压

M1 饱和，$I_{D1}=110$ µA。按通常做法在偏置中忽略因子 $(1+\lambda v_{DS})$（题中未给出 $V_{DD}$，保留 λ 会使 $V_{in}$ 依赖于它）：

$$
110\ \mu\mathrm A=\frac{(110\ \mu\mathrm{A/V^2})(2)}{2}(V_{in}-0.7\ \mathrm V)^2
\quad\Rightarrow\quad V_{in}-0.7\ \mathrm V=1\ \mathrm V,\qquad V_{in}=1.7\ \mathrm V .
$$

10 µA 时 M2 的 $V_{SG2}=0.7+\sqrt{2(10\ \mu\mathrm A)/(50\ \mu\mathrm{A/V^2})}=1.33$ V，所以输出比 $V_{DD}$ 低 1.33 V。

### 第 3 步 — 小信号参数

由 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $g_{ds}=\lambda I_D$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(110\ \mu\mathrm A)}=220\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(10\ \mu\mathrm A)}=31.6\ \mu\mathrm S,
$$

| 器件 | $I_D$ (µA) | $\lambda$ (V⁻¹) | $g_{ds}$ (µS) |
|---|---|---|---|
| M1 | 110 | 0.04 | 4.4 |
| M2 | 10 | 0.05 | 0.5 |
| M3 | 100 | 0.05 | 5 |

### 第 4 步 — 增益与输出电阻

在输出节点上，M1 提供受控电流 $g_{m1}v_{in}$ 及其 $g_{ds1}$；二极管连接的 M2 提供 $g_{m2}$（栅极接输出）和 $g_{ds2}$；M3 的栅压固定，只提供 $g_{ds3}$。列 KCL：

$$
g_{m1}v_{in}+(g_{m2}+g_{ds1}+g_{ds2}+g_{ds3})v_{out}=0,
\qquad g_{m2}+g_{ds1}+g_{ds2}+g_{ds3}=41.5\ \mu\mathrm S .
$$

$$
A_v=-\frac{g_{m1}}{41.5\ \mu\mathrm S}=-\frac{220}{41.5}=-5.30\ \mathrm{V/V},\qquad
R_{out}=\frac{1}{41.5\ \mu\mathrm S}=24.1\ \mathrm{k\Omega}.
$$

若忽略全部输出电导，则 $A_v=-g_{m1}/g_{m2}=-6.96$ V/V，$R_{out}=1/g_{m2}=31.6$ kΩ。

电流源 M3 承担了 M1 的大部分偏置电流。于是 M2 只工作在 10 µA，作为主要负载的电导 $g_{m2}$ 很小，而 $g_{m1}$ 仍然较大。与流过全部 110 µA 的普通二极管负载（$A_v\approx-\sqrt{\beta_1/\beta_2}=-2.1$）相比，增益提高了一倍多。
