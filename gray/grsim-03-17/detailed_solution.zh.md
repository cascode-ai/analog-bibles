# 详细步骤 - grsim-03-17

信号通路是一个级联：共源级 $M_1$ → 共基级 $Q_1$（$R_{L1}$ 分走 $M_1$ 的部分漏极电流）→ $Q_1$ 集电极上的负载 $R_{L2}$，它又被 → 射极跟随器 $Q_3$ 加载。$Q_2$ 和 $M_2$ 构成二极管叠接，设定 $Q_1$ 的基极电压。先求出自洽的工作点（$V_{I}=V_O$），再把各级增益相乘，最后用 ngspice 验证，并加入源极电阻来模拟速度饱和。

### 第 1 步 — 二极管叠接（$Q_2$、$M_2$）的偏置

从 5 V 经 10 kΩ 电阻向二极管连接（diode-connected）的 $Q_2$ 和 $M_2$ 供电（$Q_1$ 的基极电流约 3 μA，可以忽略）：

$$
I=\frac{5\ \mathrm V-V_{BE2}-V_{GS,M2}}{10\ \mathrm{k\Omega}},\qquad V_{BE2}=V_T\ln\frac{I}{I_S},\qquad V_{GS,M2}=0.6+\sqrt{\frac{2I}{(200\ \mu\mathrm{A/V^2})(20)}} .
$$

迭代得 $I=0.325$ mA、$V_{BE2}=0.749$ V、$V_{GS,M2}=1.003$ V，因此 $Q_1$ 的基极电压为

$$
V_X=0.749+1.003=1.752\ \mathrm V .
$$

### 第 2 步 — 自洽的工作点

30 kΩ 电阻中没有直流电流，故 $V_{G1}=V_O$，并且：
- $M_1$：$I_{D1}=\tfrac12(200\ \mu\mathrm{A/V^2})(300)(V_O-0.6)^2$；
- 节点 $D_1$（$M_1$ 漏极、$Q_1$ 发射极）：$I_{D1}=(5-V_{D1})/R_{L1}+I_{E1}$，其中 $V_{D1}=V_X-V_{BE1}$；
- $Q_3$：$I_{E3}=V_O/1\ \mathrm{k\Omega}$，$V_O=V_{C1}-V_{BE3}$，其中 $V_{C1}=5-10\ \mathrm{k\Omega}\,(I_{C1}+I_{B3})$。

联立求解：

| $V_O$ | $I_{D1}$ | $V_{D1}$ | $I_{C1}$ | $V_{C1}$ | $I_{C3}$ |
|---|---|---|---|---|---|
| 0.979 V | 4.31 mA | 1.004 V | 0.315 mA | 1.757 V | 0.97 mA |

$M_1$ 的电流中约 4.0 mA 来自 $R_{L1}$，0.32 mA 来自 $Q_1$。$V_{C1}-V_X=5$ mV，因此 $Q_1$ 恰好处于饱和边缘（$V_{CB}\approx0$），仍在正向放大区。

### 第 3 步 — 小信号参数

$$
\begin{aligned}
g_{m1}&=\sqrt{2(200\ \mu\mathrm{A/V^2})(300)(4.31\ \mathrm{mA})}=22.8\ \mathrm{mA/V},&
r_{e1}&=\frac{V_T}{I_{E1}}=82\ \Omega,\\
g_{m3}&=\frac{I_{C3}}{V_T}=37.3\ \mathrm{mA/V},&
r_{\pi3}&=\frac{\beta_0}{g_{m3}}=2.68\ \mathrm{k\Omega}.
\end{aligned}
$$

### 第 4 步 — 级联增益

- $M_1$ 把 $v_i$ 转换为漏极电流 $g_{m1}v_i$。该电流在节点 $D_1$ 处在 $R_{L1}=1$ kΩ（接交流地）与 $Q_1$ 发射极（$r_{e1}$）之间分配；进入 $Q_1$ 的比例为 $R_{L1}/(R_{L1}+r_{e1})=0.924$。
- $Q_1$ 为共基级：其发射极电流的 $\alpha=0.990$ 到达集电极。
- 集电极负载为 $R_{L2}$ 与 $Q_3$ 输入电阻的并联。输入源为理想源时，30 kΩ 电阻从输出接到交流地，因此 $Q_3$ 的发射极负载为 $R_E=1\ \mathrm{k\Omega}\parallel30\ \mathrm{k\Omega}=968\ \Omega$：

$$
R_{i3}=r_{\pi3}+(\beta_0+1)R_E=2.68\ \mathrm{k\Omega}+101(968\ \Omega)=100.4\ \mathrm{k\Omega},\qquad R_{C1}=10\ \mathrm{k\Omega}\parallel R_{i3}=9.09\ \mathrm{k\Omega}.
$$

- 跟随器增益为 $(\beta_0+1)R_E/R_{i3}=0.973$。

相乘得

$$
\frac{v_o}{v_i}=-g_{m1}\cdot0.924\cdot\alpha\cdot R_{C1}\cdot0.973=-(22.8\ \mathrm{mA/V})(0.924)(0.990)(9.09\ \mathrm{k\Omega})(0.973)=-184 .
$$

### 第 5 步 — SPICE 验证

对 $V_I$ 做直流扫描，找到 $V_O=V_I$ 的点；在该输入下用 `.tf` 求增益。速度饱和用源极电阻 $R_{SX}=1/(\mathcal E_c\mu_nC_{ox}W)$ 模拟：

$$
R_{SX1}=\frac1{(1.5\times10^{6}\ \mathrm{V/m})(200\ \mu\mathrm{A/V^2})(300\ \mu\mathrm m)}=11.1\ \Omega,\qquad R_{SX2}=\frac{300}{20}R_{SX1}=167\ \Omega .
$$

```spice
* grsim-03-17 BiCMOS amplifier (velocity saturation: RS1 = 11.11, RS2 = 166.7)
VCC vcc 0 5
VI  vi  0 0.979317
RL1 vcc d1 1k
M1  d1 vi s1 s1 nch W=300u L=1u
RS1 s1 0 1e-6
Q1  c1 x d1 npn
RL2 vcc c1 10k
RB  vcc x 10k
Q2  x x e2 npn
M2  e2 e2 s2 s2 nch W=20u L=1u
RS2 s2 0 1e-6
Q3  vcc c1 o npn
RL3 o 0 1k
RF  vi o 30k
.model nch nmos level=1 kp=200u vto=0.6 lambda=0
.model npn npn is=1e-16 bf=100
.control
op
print v(o) v(x) v(c1) @m1[id] @q1[ic] @q3[ic]
tf v(o) VI
print all
.endc
.end
```

| 量 | 手算 | ngspice | ngspice（含 $R_{SX}$） |
|---|---|---|---|
| $V_O=V_I$ | 0.979 V | 0.979 V | 1.024 V |
| $V_X$ | 1.752 V | 1.746 V | 1.796 V |
| $V_{C1}$ | 1.757 V | 1.753 V | 1.799 V |
| $I_{D1}$ | 4.31 mA | 4.32 mA | 4.26 mA |
| $I_{C1}$ | 0.315 mA | 0.315 mA | 0.310 mA |
| $I_{C3}$ | 0.97 mA | 0.97 mA | 1.01 mA |
| $v_o/v_i$ | −184 | −183.4 | −145.4 |

### 第 6 步 — 速度饱和的影响

$R_{SX1}=11.1\ \Omega$ 对 $M_1$ 形成源极负反馈，其等效跨导变为

$$
G_{m1}=\frac{g_{m1}}{1+g_{m1}R_{SX1}}=\frac{22.8\ \mathrm{mA/V}}{1+0.253}=18.2\ \mathrm{mA/V},
$$

后级各系数不变时得到 $-147$，与仿真的 $-145$ 接近。$R_{SX2}=167\ \Omega$ 只使 $V_{GS,M2}$ 升高约 $(0.32\ \mathrm{mA})(167\ \Omega)\approx50$ mV，使偏置点上移约 45 mV，对增益没有明显影响。因此速度饱和使增益降低约 20%，几乎完全来自宽而大电流的器件 $M_1$ 的源极负反馈。
