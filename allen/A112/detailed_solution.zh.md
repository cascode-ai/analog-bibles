# 详细步骤 - A112

电阻在 M1 的 $i_D$–$v_{DS}$ 平面上给出一条直的负载线。对每个输入电压，该直线与 $v_{GS}=v_{IN}$ 时 M1 特性曲线的交点就是传输特性上的一个点 $(v_{IN},v_{OUT})$。先画出图解，再按截止、饱和、线性三个区域分别计算交点。

### 第 1 步 — 负载线与器件曲线

从 $V_{DD}$ 经电阻到漏极列 KVL，得负载线

$$
i_D=\frac{V_{DD}-v_{OUT}}{R}=\frac{5\ \mathrm V-v_{OUT}}{10\ \mathrm{k\Omega}},
$$

它是从 $(v_{DS},i_D)=(5\ \mathrm V,0)$ 到 $(0,0.5\ \mathrm{mA})$ 的直线。由 $K'W/L=(110\ \mu\mathrm{A/V^2})(2)=220\ \mu\mathrm{A/V^2}$，器件曲线为

$$
i_D=110\ \mu\mathrm{A/V^2}\,(v_{GS}-0.7\ \mathrm V)^2\ \ (v_{DS}\ge v_{GS}-V_T),\qquad
i_D=220\ \mu\mathrm{A/V^2}\left[(v_{GS}-0.7\ \mathrm V)v_{DS}-\frac{v_{DS}^2}{2}\right]\ \ (v_{DS}<v_{GS}-V_T),
$$

先忽略 $\lambda$。饱和边界 $v_{DS}=v_{GS}-V_T$ 是抛物线 $i_D=(110\ \mu\mathrm{A/V^2})v_{DS}^2$。

![vGS 从 1.5 V 到 5 V 时 M1 的输出特性、10 kΩ 负载线及其交点](/q/A112/solution-loadline.zh.svg)

随着 $v_{IN}$ 减小，沿负载线从左向右读出各交点，就描出了传输特性。

### 第 2 步 — 截止区：最大输出

$v_{IN}\le V_T=0.7$ V 时 M1 截止，$i_D=0$。交点是负载线在 $i_D=0$ 处的端点，故

$$
v_{OUT}=V_{DD}=5\ \mathrm V .
$$

与二极管连接的 PMOS 负载不同，电阻没有阈值压降，所以 $v_{OUT}(\max)=5$ V。

### 第 3 步 — 饱和区

刚超过阈值时 $v_{OUT}$ 较大，M1 饱和。令饱和电流等于负载线电流：

$$
v_{OUT}=V_{DD}-R\,\frac{K'W}{2L}(v_{IN}-V_T)^2=5\ \mathrm V-(1.1\ \mathrm{V^{-1}})(v_{IN}-0.7\ \mathrm V)^2 .
$$

$v_{IN}=2$ V 时：$v_{OUT}=5-1.1(1.3)^2=3.14$ V。当 $v_{OUT}=v_{IN}-V_T$ 时 M1 离开饱和区；令 $x=v_{IN}-V_T$，即 $5-1.1x^2=x$，得 $x=1.725$ V：

$$
v_{IN}=2.43\ \mathrm V,\qquad v_{OUT}=1.73\ \mathrm V,\qquad
\frac{dv_{OUT}}{dv_{IN}}=-2(1.1\ \mathrm{V^{-1}})(1.725\ \mathrm V)=-3.8\ \mathrm{V/V}.
$$

这是曲线最陡的点。

### 第 4 步 — 线性区：最小输出

$v_{IN}>2.43$ V 时交点位于抛物线左侧，有

$$
220\ \mu\mathrm{A/V^2}\left[(v_{IN}-0.7)v_{OUT}-\frac{v_{OUT}^2}{2}\right]=\frac{5-v_{OUT}}{10\ \mathrm{k\Omega}} .
$$

$v_{IN}=5$ V 时它化为 $1.1v_{OUT}^2-10.46v_{OUT}+5=0$（电压以 V 计），小于 $v_{IN}-V_T$ 的根为

$$
v_{OUT}=\frac{10.46-\sqrt{10.46^2-4(1.1)(5)}}{2(1.1)}=0.505\ \mathrm V .
$$

图中各栅压对应的交点：

| $v_{IN}$ (V) | 0–0.7 | 1.5 | 2 | 2.43 | 2.5 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|---|
| $v_{OUT}$ (V) | 5 | 4.30 | 3.14 | 1.73 | 1.52 | 1.01 | 0.664 | 0.505 |
| 工作区 | 截止 | 饱和 | 饱和 | 边界 | 线性 | 线性 | 线性 | 线性 |

### 第 5 步 — 传输特性与输出范围

![10 kΩ 负载时 M1 的电压传输特性，从 5 V 降到 0.505 V](/q/A112/solution-curves.zh.svg)

输出在 $v_{IN}=0.7$ V 以前保持 5 V；M1 饱和时按平方关系下降，在饱和–线性边界（2.43 V，1.73 V）处斜率最陡，约 $-3.8$ V/V；随后在线性区趋于平缓。对 $0\le v_{IN}\le5$ V：

$$
v_{OUT}(\max)=5\ \mathrm V,\qquad v_{OUT}(\min)\approx0.5\ \mathrm V .
$$

计入 $\lambda=0.04\ \mathrm{V^{-1}}$ 的因子 $(1+\lambda v_{DS})$ 后，饱和电流略有增大，饱和区各点略为下移（$v_{IN}=2$ V 时为 2.92 V，而不是 3.14 V）。线性区表达式中没有 $\lambda$ 项，所以 $v_{OUT}(\min)$ 仍约为 0.5 V。
