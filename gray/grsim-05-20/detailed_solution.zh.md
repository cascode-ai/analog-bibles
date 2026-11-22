# 详细步骤 - grsim-05-20

从偏置电流镜向外分析：$Q_5$–$Q_6$ 确定流入 $Q_1$ 基极节点的电流，经 $M_1$、$Q_3$、$M_2$、$Q_1$ 的栅极回路确定各支路之间的比例，再由两个 KCL 方程得到全部静态电流。输出极限取决于哪个器件最先离开放大区。最后用完整模型的 ngspice 仿真检验偏置点、AB 类传输曲线和电流波形。

### 第 1 步 — 偏置电流镜与 $M_3$

$Q_5$ 由电流源固定在 100 µA；$M_3$ 构成一个提供 pnp 基极电流的回路。$Q_6$ 的面积为 5 倍且 $R_4=R_3/5$，因此电流密度相同，发射极电阻压降也相同（发射极电流计入基极电流，$105\ \mu\mathrm A\times500\ \Omega=0.525\ \mathrm{mA}\times100\ \Omega=52.5$ mV）：

$$
I_{C5}=100\ \mu\mathrm A,\qquad I_{C6}=5I_{C5}=0.5\ \mathrm{mA}.
$$

$M_3$ 承载两个 pnp 管的基极电流 $(0.1+0.5)\ \mathrm{mA}/20=30\ \mu$A，对应 $|V_{ov3}|=\sqrt{2(30\ \mu\mathrm A)/(26\ \mu\mathrm{A/V^2}\cdot1)}=1.52$ V，即 $V_{SG3}\approx2.2$ V。

### 第 2 步 — 栅极回路：MOS 电流相等

从 $Q_1$ 的基极节点 $B_1$ 沿两条路径向下到 $V_i$：

$$
V_{SG}(M_1)+V_{BE3}=V_{BE1}+V_{SG}(M_2).
$$

所有 $V_{BE}=0.8$ V 时 $V_{SG1}=V_{SG2}$；由于 $M_1$ 与 $M_2$ 相同（衬底接源极），$I_{D1}=I_{D2}=I_D$。每个 MOS 电流分流到一个 10 kΩ 电阻和一个基极：

$$
I_{R1}=I_{R2}=\frac{0.8\ \mathrm V}{10\ \mathrm{k\Omega}}=80\ \mu\mathrm A,\qquad I_D=80\ \mu\mathrm A+I_{B3}=80\ \mu\mathrm A+I_{B2},
$$

因此 $I_{B2}=I_{B3}$，$I_{C2}=I_{C3}\equiv I_C$。

### 第 3 步 — 由 KCL 求静态电流

$V_o=0$ 时 $R_L$ 中无电流。输出节点的 KCL 给出 $I_{E1}=I_{C2}+I_{D2}$；$B_1$ 节点给出 $I_{C6}=I_{B1}+I_{D1}+I_{C3}$。代入 $I_D=80\ \mu\mathrm A+I_C/80$ 及 $I_{B1}=I_{E1}/81$：

$$
0.5\ \mathrm{mA}=\frac{I_C+80\ \mu\mathrm A+I_C/80}{81}+80\ \mu\mathrm A+\frac{I_C}{80}+I_C
\;\Rightarrow\;I_C=0.409\ \mathrm{mA}.
$$

| 器件 | $Q_5$ | $Q_6$ | $M_3$ | $R_1$, $R_2$ | $M_1$, $M_2$ | $Q_2$, $Q_3$ | $Q_1$ |
|---|---|---|---|---|---|---|---|
| 电流 | 100 µA | 0.5 mA | 30 µA | 80 µA | 85.1 µA | 0.409 mA | 0.488 mA |

MOS 器件的 $V_{ov}=\sqrt{2(85.1\ \mu\mathrm A)/(26\ \mu\mathrm{A/V^2}\cdot500)}=0.114$ V，$V_{SG}=0.814$ V。由于 $V_o-V_i=V_{SG2}$，$V_o=0$ 时输入约为 $V_i\approx-0.81$ V。

### 第 4 步 — 输出极限与最大功率

**正向极限。** $Q_1$ 跟随 $B_1$，而 $B_1$ 只能上升到 $Q_6$ 饱和为止。取 $V_{CE(\text{sat})}\approx0.2$ V 并计入 $R_4$ 上 50 mV 的压降：

$$
V_o^+=5-0.05-0.2-V_{BE1}=3.95\ \mathrm V .
$$

驱动能力并不构成限制：$Q_6$ 的 0.5 mA 可支持 $81\times0.5\ \mathrm{mA}\times200\ \Omega=8.1$ V。

**负向极限。** 负载电流由 $Q_2$ 吸收，其基极由 $M_2$ 驱动，该 MOS 管的漏极位于 $-5+V_{BE2}$，因此当 $M_2$ 离开饱和区、$V_{SD2}=V_{ov2}$ 时，复合管饱和。$|V_o|\approx4$ V 时，$I_{C2}\approx20$ mA，$I_{D2}=80\ \mu\mathrm A+20\ \mathrm{mA}/80=0.33$ mA，$V_{ov2}=0.225$ V：

$$
V_o^-=-5+V_{BE2}+V_{ov2}=-5+0.8+0.225=-3.98\ \mathrm V .
$$

削波近似对称，$\hat V_o\approx3.95$ V，因此

$$
P_{L,\max}=\frac{\hat V_o^2}{2R_L}=\frac{(3.95\ \mathrm V)^2}{400\ \Omega}=39\ \mathrm{mW}.
$$

### 第 5 步 — SPICE 模型

双极器件参数按面积缩放（×25：$I_S\times25$，电阻 ÷25，电容 ×25，通过器件面积因子实现）。pMOS 采用 level-1 模型，$k'=26\ \mu\mathrm{A/V^2}$，$V_t=-0.7$ V，$L_d=0.18$ µm；$L=1$ µm 时 $\lambda=(dX_d/dV_{DS})/L_{\text{eff}}=0.04/0.64=0.0625\ \mathrm{V^{-1}}$，$M_3$（$L=2$ µm）取 0.024 V⁻¹。

```spice
* grsim-05-20 BiCMOS class AB output stage
.model npn1 npn is=6e-18 bf=80 br=2 vaf=35 rb=400 rc=100 re=40 tf=10p cje=5f cjc=5f cjs=20f
.model pnp1 pnp is=6e-18 bf=20 br=3 vaf=30 rb=200 rc=20 re=10 tf=650p cje=14f cjc=15f
.model pm  pmos level=1 vto=-0.7 kp=26u tox=15n ld=0.18u lambda=0.0625 cj=0.30m cjsw=2.2n cgso=0.18n cgdo=0.18n
.model pm3 pmos level=1 vto=-0.7 kp=26u tox=15n ld=0.18u lambda=0.0244 cj=0.30m cjsw=2.2n cgso=0.18n cgdo=0.18n
VCC vcc 0 5
VEE vee 0 -5
R3 vcc e5 500
R4 vcc e6 100
Q5 c5 p e5 pnp1 1
Q6 b1 p e6 pnp1 5
M3 0 c5 p p pm3 w=2u l=2u
I100 c5 0 100u
M1 x x b1 b1 pm w=500u l=1u
R1 x vi 10k
Q3 b1 x vi npn1 25
Q1 vcc b1 out npn1 25
M2 y vi out out pm w=500u l=1u
R2 y vee 10k
Q2 out y vee npn1 25
RL out 0 200
Vin vi 0 dc -0.779 sin(-0.779 2.06 10k)
.dc Vin -6 6 5m
.tran 0.1u 300u 200u
.end
```

### 第 6 步 — 仿真偏置点

$V_o=0$（$V_i=-0.779$ V）时：

| 器件 | $Q_5$ | $Q_6$ | $M_3$ | $M_1$ | $M_2$ | $Q_3$ | $Q_2$ | $Q_1$ |
|---|---|---|---|---|---|---|---|---|
| 手算 | 100 µA | 0.5 mA | 30 µA | 85 µA | 85 µA | 0.41 mA | 0.41 mA | 0.49 mA |
| SPICE | 100 µA | 0.508 mA | 27.5 µA | 79.3 µA | 80.4 µA | 0.422 mA | 0.530 mA | 0.604 mA |

电流镜和 MOS 电流吻合得很好。输出对管的电流相差最多 25 %，因为它由一个小差值决定：$I_{B2}=I_{D2}-V_{BE2}/R_2$ 只有约 6 µA，而 ×25 器件工作在 $V_{BE}\approx0.745$ V（因此 $I_{R}\approx74.5\ \mu$A），计入厄利效应后有效 $\beta$ 接近 90。$Q_2$ 与 $Q_3$ 的 $V_{BE}$ 相差几毫伏就会明显改变该电流，因此 0.4–0.6 mA 的静态电流正是该结构的合理结果。$V_{SG}$ 为 0.78–0.79 V，略低于手算值，因为 $L_d$ 使 $W/L_{\text{eff}}$ 增大。

### 第 7 步 — 传输特性与电流波形

![仿真直流传输特性：斜率接近 1，过零平滑，在 ±4 V 附近削波](/q/grsim-05-20/solution-transfer.zh.svg)

$V_o\approx V_i+0.78$ V，斜率 0.966–0.976；由于在交越处 $Q_1$ 与 $Q_2$ 同时导通（AB 类，无死区），曲线过零平滑。极限为 +4.03 V（$Q_6$ 饱和；手算 3.95 V）和约 −4.1 V，后者随 $M_2$ 离开饱和区而逐渐达到（手算 −3.98 V）。

求波形时，$V_i$ 为以 −0.779 V 为中心的 10 kHz 正弦，幅值为 $2\ \mathrm V/0.97$ 或 $4\ \mathrm V/0.97$：

| 输出峰值 | $I_{c1}$ 峰值 / 最小值 | $I_{c2}$ 峰值 / 最小值 | $I_{d2}$ 峰值 / 过零处 |
|---|---|---|---|
| 2 V（+1.96 / −2.01 V） | 9.70 mA / 89 µA | 9.93 mA / ≈ 0 | 0.201 mA / ≈ 80 µA |
| 4 V（+3.96 / −4.01 V） | 19.6 mA / 8 µA | 19.7 mA / ≈ 0 | 0.334 mA / ≈ 80 µA |

![输出峰值 2 V 时仿真的 Ic1、Ic2 与 Id2](/q/grsim-05-20/solution-currents-2v.zh.svg)

![输出峰值 4 V 时仿真的 Ic1、Ic2 与 Id2](/q/grsim-05-20/solution-currents-4v.zh.svg)

$Q_1$ 与 $Q_2$ 在互补的半周内导通，峰值各约为 $\hat V_o/R_L$，并在过零处平滑交接。$I_{d2}$ 按 $80\ \mu\mathrm A+I_{c2}/\beta$ 跟随 $I_{c2}$：过零处约 80 µA，负峰处 2 V 时为 0.2 mA、4 V 时为 0.33 mA，在 $Q_2$ 截止的正半周接近零。4 V 时输出刚好进入削波区，峰值开始变平。
