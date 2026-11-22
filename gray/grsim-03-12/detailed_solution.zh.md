# 详细步骤 - grsim-03-12

$M_1$ 是源极跟随器，驱动 $Q_2$ 的基极和 $R_B$；其漏极与 $Q_2$ 的集电极都通过 $R_L$ 从输出节点吸取电流。先在 $V_O=2$ V（它确定了 $R_L$ 中的总电流）的条件下求偏置，并计入 $M_1$ 的体效应（body effect）。然后推导小信号增益，再计入新增的输出电阻和基区电阻重新计算，最后用 ngspice 验证全部结果，包括直流传输曲线。

### 第 1 步 — 偏置电流

$V_O=2$ V 使 $R_L$ 中流过 $(3-2)\ \mathrm V/1\ \mathrm{k\Omega}=1$ mA，由 $M_1$ 和 $Q_2$ 分担：

$$
I_{C2}+I_{D1}=1\ \mathrm{mA},\qquad I_{D1}=\frac{V_{BE2}}{R_B}+\frac{I_{C2}}{\beta_F},\qquad V_{BE2}=V_T\ln\frac{I_{C2}}{I_S}.
$$

迭代求解（从 $V_{BE2}\approx0.74$ V 开始）：

$$
V_{BE2}=0.743\ \mathrm V,\qquad I_{C2}=0.255\ \mathrm{mA},\qquad I_{D1}=0.743\ \mathrm{mA}+2.55\ \mu\mathrm A=0.745\ \mathrm{mA}.
$$

### 第 2 步 — 所需的 $V_B$ 及工作区检查

$M_1$ 的源极处于 $V_{SB}=V_{BE2}=0.743$ V，因此其阈值升高：

$$
V_t=0.6+0.25\left(\sqrt{0.6+0.743}-\sqrt{0.6}\right)=0.696\ \mathrm V .
$$

由平方律得过驱动电压 $V_{ov}=\sqrt{2I_{D1}/[\mu_nC_{ox}(W/L)]}=\sqrt{2(0.745\ \mathrm{mA})/(2\ \mathrm{mA/V^2})}=0.863$ V，故

$$
V_B=V_{BE2}+V_t+V_{ov}=0.743+0.696+0.863=2.30\ \mathrm V .
$$

$V_{DS1}=2-0.743=1.26$ V 大于 $V_{ov}=0.863$ V，$M_1$ 处于饱和区；$Q_2$ 的 $V_{CE}=2$ V，处于放大区。

### 第 3 步 — 小信号参数

$$
\begin{aligned}
g_{m1}&=\sqrt{2\mu_nC_{ox}(W/L)I_{D1}}=1.73\ \mathrm{mA/V},&
\chi&=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=0.108,&
g_{mb1}&=\chi g_{m1}=0.186\ \mathrm{mA/V},\\
g_{m2}&=\frac{I_{C2}}{V_T}=9.80\ \mathrm{mA/V},&
r_{\pi2}&=\frac{\beta_0}{g_{m2}}=10.2\ \mathrm{k\Omega},&
R_s&=R_B\parallel r_{\pi2}=911\ \Omega .
\end{aligned}
$$

### 第 4 步 — 原始数据下的电压增益

$\lambda=0$ 时，$M_1$ 是负载为 $R_s$ 的源极跟随器，其衬底接地，使源极电导中增加 $g_{mb1}$：

$$
\frac{v_{b2}}{v_i}=\frac{g_{m1}R_s}{1+(g_{m1}+g_{mb1})R_s}=\frac{(1.73)(0.911)}{1+(1.91)(0.911)}=0.574 .
$$

离开输出节点的两个电流都会变化：$M_1$ 的漏极电流等于其源极电流 $v_{b2}/R_s$，$Q_2$ 的集电极电流为 $g_{m2}v_{b2}$。二者都流过 $R_L$：

$$
\frac{v_o}{v_i}=-R_L\left(\frac1{R_s}+g_{m2}\right)\frac{v_{b2}}{v_i}=-(1\ \mathrm{k\Omega})(1.098+9.80)\ \mathrm{mA/V}\times0.574=-6.25 .
$$

### 第 5 步 — $\lambda=0.05\ \mathrm{V^{-1}}$、$r_b=100\ \Omega$、$V_A=20$ V 时的增益

$V_O$ 保持为 2 V 时电流不变（$r_b$ 上的直流压降只有约 0.3 mV）；只有 $V_B$ 降低，变为 $0.743+0.696+\sqrt{2(0.745\ \mathrm{mA})/[(2\ \mathrm{mA/V^2})(1+\lambda V_{DS1})]}=2.28$ V，因为 $(1+\lambda V_{DS1})=1.063$ 使 $M_1$ 在给定过驱动电压下的电流增大。因此各 $g_m$ 值不变，另有

$$
r_{o1}=\frac1{\lambda I_{D1}}=26.8\ \mathrm{k\Omega},\qquad r_{o2}=\frac{V_A}{I_{C2}}=78.5\ \mathrm{k\Omega},\qquad r_b=100\ \Omega .
$$

此时电路有三个节点（输出 $v_o$、$M_1$ 源极 $v_s$、内部基极 $v_b$）。由 KCL：

$$
\begin{aligned}
&\frac{v_o}{R_L\parallel r_{o2}}+g_{m2}v_b+i_{d1}=0,\qquad
i_{d1}=g_{m1}(v_i-v_s)-g_{mb1}v_s+\frac{v_o-v_s}{r_{o1}},\\
&i_{d1}=\frac{v_s}{R_B}+\frac{v_s-v_b}{r_b},\qquad \frac{v_s-v_b}{r_b}=\frac{v_b}{r_{\pi2}} .
\end{aligned}
$$

数值求解：

| 计入的效应 | $v_o/v_i$ |
|---|---|
| 无（第 4 步） | −6.25 |
| 仅 $r_{o1}$ | −5.45 |
| 仅 $r_{o2}$ | −6.17 |
| 仅 $r_b$ | −6.20 |
| 三者全部 | −5.35 |

增益幅值下降约 14%。主要原因是 $r_{o1}$：约为输入 6 倍的输出摆动经 $r_{o1}$ 耦合到 $M_1$ 的源极，削弱了跟随作用。$r_{o2}$ 与 $R_L$ 并联、以及 $r_b$–$r_{\pi2}$ 分压，各自再使增益减小约 1%。

### 第 6 步 — 偏置与增益的 SPICE 验证

$V_B$ 由直流扫描求得（使 $V_O=2$ V 的输入值）；增益在该偏置下由 `.tf` 得到：

```spice
* grsim-03-12 BiCMOS Darlington
VCC vcc 0 3
VI  vg  0 2.29614
RL  vcc vo 1k
M1  vo vg b2 0 nch W=10u L=1u
RB  b2 0 1k
Q2  vo b2 0 npn
.model nch nmos level=1 kp=200u vto=0.6 gamma=0.25 phi=0.6 lambda=0
.model npn npn is=1e-16 bf=100
.control
op
print v(vo) v(b2) @q2[ic] @m1[id]
tf v(vo) VI
print all
dc VI 0 3 1m
wrdata tr.txt v(vo)
.endc
.end
```

第二种情况下模型改为 `lambda=0.05` 和 `is=1e-16 bf=100 rb=100 vaf=20`，并重新调整 $V_B$。

| 量 | 手算，原始数据 | ngspice，原始数据 | 手算，新数据 | ngspice，新数据 |
|---|---|---|---|---|
| 使 $V_O=2$ V 的 $V_B$ | 2.30 V | 2.296 V | 2.28 V | 2.268 V |
| $V_{BE2}$ | 0.743 V | 0.739 V | 0.743 V | 0.738 V |
| $I_{C2}$ | 0.255 mA | 0.258 mA | 0.255 mA | 0.260 mA |
| $I_{D1}$ | 0.745 mA | 0.742 mA | 0.745 mA | 0.740 mA |
| $v_o/v_i$ | −6.25 | −6.35 | −5.35 | −5.56 |

微小差异来自 SPICE 在 27 °C 时的 $V_T=25.9$ mV（使 $g_{m2}$ 略大），以及第二种情况下其 level-1 定义 $r_{o1}=(1+\lambda V_{DS})/(\lambda I_D)=28.7$ kΩ、$r_{o2}=(V_A+V_{CE})/I_C=84.8$ kΩ 和包含 $(1+\lambda V_{DS})$ 的 $g_{m1}$。把这些 SPICE 数值代入第 5 步的节点方程，可以精确重现 −6.35 和 −5.56。

### 第 7 步 — 直流传输特性

![ngspice 直流传输特性：vo 随栅极电压 VI 从 0 到 3 V 的变化，分别对应原始数据和新晶体管数据](/q/grsim-03-12/solution-transfer.zh.svg)

原始数据下曲线分为四段：
- $V_I<0.6$ V：$M_1$ 截止，$R_L$ 中无电流，$v_o=3$ V。
- $0.6\ \mathrm V<V_I\lesssim2.1$ V：$M_1$ 只向 $R_B$ 导电（$V_{BE2}$ 仍太小，$Q_2$ 不导通），$v_o$ 以 −0.35 到 −0.65 的斜率缓慢下降，在 2.1 V 时约为 2.37 V。
- $V_I\approx2.2$–2.34 V：$Q_2$ 导通，其指数型 $g_{m2}$ 起主导作用；$v_o$ 急剧下降，在 $V_I=2.296$ V 处穿过 2 V（斜率 −6.3，即第 4 步的增益）。斜率在 2.33 V 附近达到约 −13 的峰值。
- $V_I>2.34$ V：$M_1$ 在 $V_I=2.335$ V、$v_o=1.63$ V 处进入线性区。此后其源极跟随输出，使 $V_{BE2}$ 被限制在约 0.78 V，曲线变平，在 $V_I=3$ V 时 $v_o=1.06$ V。$Q_2$ 始终不饱和，因为 $M_1$ 使基极低于集电极（$V_I=3$ V 时 $v_o-v_{b2}=0.29$ V）。

新数据（虚线）使陡降区略向左移，且陡度略小。
