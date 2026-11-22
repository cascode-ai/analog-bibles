# 详细步骤 - G092

先设计输入侧：约束 (i) 和 (ii) 确定 $(W/L)_1$，进而确定 $R_1$。在 Widlar 电流源中，两管的栅源电压相差 $R_2$ 上的压降，这把 $V_{ov2}$ 与 $R_2$ 联系起来。由这一关系可知约束 (iii) 自动满足。约束 (iv) 则决定 $V_{ov1}$ 这一过驱动电压如何在 $R_2$ 与 $V_{ov2}$ 之间分配，从而确定 $R_2$ 和 $(W/L)_2$。

### 第 1 步 — 输入晶体管 $M_1$ 与 $R_1$

由饱和区平方律 $I_D=\tfrac{k'}2(W/L)V_{ov}^2$：

$$
\left(\frac WL\right)_1=\frac{2I_{IN}}{k'V_{ov1}^2}=\frac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=25.8 .
$$

$M_1$ 为二极管连接，$V_{GS1}=V_t+V_{ov1}=0.8$ V，所以 $R_1$ 承担其余的电源电压：

$$
R_1=\frac{V_{DD}-V_{GS1}}{I_{IN}}=\frac{3\ \mathrm V-0.8\ \mathrm V}{100\ \mu\mathrm A}=22\ \mathrm{k\Omega}.
$$

### 第 2 步 — Widlar 关系

两管栅极相连，$M_1$ 的源极接地，所以由 KVL 得 $V_{GS1}=V_{GS2}+I_{OUT}R_2$。两个器件的 $V_t$ 相同（无体效应），因此

$$
V_{ov2}=V_{ov1}-I_{OUT}R_2 .
$$

### 第 3 步 — 约束 (iii)

当 $M_2$ 的漏极比其源极（位于 $I_{OUT}R_2$）至少高 $V_{ov2}$ 时，它处于有源区。因此最低漏极电压为

$$
V_{D2,\min}=I_{OUT}R_2+V_{ov2}=V_{ov1}=0.2\ \mathrm V .
$$

无论 $R_2$ 取何值，约束 (iii) 都作为 (ii) 的结果而自动满足。

### 第 4 步 — 约束 (iv)：分配过驱动电压

$M_2$ 是以 $R_2$ 为源极负反馈、栅极由二极管节点固定的共源器件，所以

$$
R_o=r_{o2}(1+g_{m2}R_2)+R_2,\qquad r_{o2}=\frac1{\lambda I_{OUT}}=\frac1{(0.02\ \mathrm{V^{-1}})(10\ \mu\mathrm A)}=5\ \mathrm{M\Omega}.
$$

利用 $g_{m2}=2I_{OUT}/V_{ov2}$ 和第 2 步的结果，

$$
g_{m2}R_2=\frac{2I_{OUT}}{V_{ov2}}\cdot\frac{V_{ov1}-V_{ov2}}{I_{OUT}}=\frac{2(V_{ov1}-V_{ov2})}{V_{ov2}} .
$$

$R_2$ 只有约 16 kΩ，与 50 MΩ 相比可以忽略。所以 $R_o=50\ \mathrm{M\Omega}$ 要求 $1+g_{m2}R_2\approx10$，即 $g_{m2}R_2\approx9$：

$$
\frac{2(0.2\ \mathrm V-V_{ov2})}{V_{ov2}}=9\quad\Rightarrow\quad V_{ov2}=\frac{0.4\ \mathrm V}{11}=0.0364\ \mathrm V .
$$

计入 $+R_2$ 项求解完整表达式，结果同样为 36.4 mV。

### 第 5 步 — $R_2$ 与 $(W/L)_2$

$$
R_2=\frac{V_{ov1}-V_{ov2}}{I_{OUT}}=\frac{0.2\ \mathrm V-0.0364\ \mathrm V}{10\ \mu\mathrm A}=16.4\ \mathrm{k\Omega},
$$

$$
\left(\frac WL\right)_2=\frac{2I_{OUT}}{k'V_{ov2}^2}=\frac{2(10\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.0364\ \mathrm V)^2}=78 .
$$

设计结果为 $(W/L)_1=25.8$，$R_1=22\ \mathrm{k\Omega}$，$R_2=16.4\ \mathrm{k\Omega}$，$(W/L)_2=78$（$L=1\ \mu\mathrm m$，$W_1=25.8\ \mu\mathrm m$，$W_2=78\ \mu\mathrm m$）。验证：$R_o=(5\ \mathrm{M\Omega})(1+9.0)+16.4\ \mathrm{k\Omega}=50\ \mathrm{M\Omega}$。

36 mV 的过驱动电压低于约 $2nV_T\approx80$ mV，所以 $M_2$ 实际上工作在中等反型（moderate inversion）或弱反型（weak inversion）区。因此 $M_2$ 的平方律尺寸只是近似值，实际设计需在仿真中调整 $(W/L)_2$。
