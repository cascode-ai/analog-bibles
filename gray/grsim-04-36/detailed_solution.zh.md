# 详细步骤 - grsim-04-36

PMOS 电流镜迫使两条支路电流相等；经过两个栅极和两个发射极的回路，把 1× 与 10× 晶体管的 $V_{EB}$ 之差加在两个 NMOS 栅源电压之差上。用平方律求解该回路方程即得 $I_{BIAS}$ 及其温度规律；再用由工艺数据建立的 level-1 ngspice 模型核对数值，并求电源灵敏度。

### 第 1 步 — 回路方程

$M_3$ 与 $M_4$ 的 $W/L$ 相同、$V_{SG}$ 相同，因此（忽略沟道长度调制）两条支路都流过 $I=I_{BIAS}$。$M_1$ 与 $M_2$ 的栅极相连，从该栅极节点经两条支路分别到地列 KVL，得

$$
V_{EB}(Q_2,1\times)+V_{GS1}=V_{EB}(Q_1,10\times)+V_{GS2}.
$$

由 $V_{EB}=V_T\ln(I/I_S)$ 及 $I_{S1}=10I_{S2}$，

$$
V_{GS2}-V_{GS1}=V_T\ln\frac{I/I_{S2}}{I/(10I_{S2})}=V_T\ln10=(26\ \mathrm{mV})(2.3026)=59.87\ \mathrm{mV}.
$$

$M_2$（50/1）与 $M_1$（100/1）电流相同而过驱动电压更大，因此符号自洽，存在非零解。

### 第 2 步 — 求解 $I_{BIAS}$

饱和区中 $V_{GS}=V_{tn}+\sqrt{2I/(k'_n W/L)}$，$V_{tn}$ 在差值中抵消（忽略体效应）：

$$
\sqrt{\frac{2I}{k'_n}}\left(\frac1{\sqrt{50}}-\frac1{\sqrt{100}}\right)=V_T\ln10
\;\Rightarrow\;
\sqrt{\frac{2I}{k'_n}}=\frac{59.87\ \mathrm{mV}}{0.041421}=1.4453\ \mathrm V.
$$

$$
I_{BIAS}=\frac{k'_n}{2}(1.4453\ \mathrm V)^2=\frac{194\ \mu\mathrm{A/V^2}}{2}(2.0890\ \mathrm{V^2})=202.6\ \mu\mathrm A\approx0.20\ \mathrm{mA}.
$$

各管过驱动电压为 $V_{ov1}=1.4453/\sqrt{100}=0.145$ V、$V_{ov2}=1.4453/\sqrt{50}=0.204$ V、$|V_{ov3,4}|=\sqrt{2(202.6\ \mu\mathrm A)/(64.7\ \mu\mathrm{A/V^2}\cdot50)}=0.354$ V。由于 $V_{EB}\approx0.7$ V，$M_2$ 的漏极约为 $3-0.8-0.354\approx1.85$ V，而 $M_1$ 为二极管连接（diode-connected），因此在 3 V 电源下四个 MOSFET 都处于饱和区。

### 第 3 步 — 温度特性

将回路方程平方，

$$
I_{BIAS}=\frac{\mu_nC_{ox}\,(V_T\ln10)^2}{2\left(1/\sqrt{50}-1/\sqrt{100}\right)^2}\propto\mu_nT^2\propto T^{-1.5}T^{2}=T^{0.5}.
$$

因此 $I_{BIAS}$ 随温度缓慢上升：

$$
TC_F=\frac1I\frac{dI}{dT}=\frac{0.5}{T}=\frac{0.5}{300\ \mathrm K}\approx+1700\ \mathrm{ppm/°C}.
$$

仅由 PTAT 电压会得到 $T^2$，迁移率的下降抵消了其中大部分。

### 第 4 步 — SPICE 模型与设置

由工艺数据建立 level-1 模型：`uo` 与 `tox` 给出 $k'_n=194\ \mu\mathrm{A/V^2}$ 和 $k'_p=64.7\ \mu\mathrm{A/V^2}$，`nsub` 给出体效应系数（$\gamma_n\approx0.094\ \mathrm{V^{1/2}}$），`lambda` 取 $L=1\ \mu$m 时的值。ngspice level-1 模型的迁移率本身就按 $T^{-1.5}$ 变化。pnp 晶体管为纵向衬底器件（基极与集电极接地），面积比为 10。`.nodeset` 使求解避开零电流状态，实际设计中需用启动电路（start-up circuit）避免该状态。$M_2$ 漏极串联的 0 V 电压源用来测量 $I_{BIAS}$；`.temp 27` 使 $V_T=25.9$ mV，接近上面所用的 26 mV。

```spice
* grsim-04-36 bias circuit
.model nch nmos level=1 vto=0.6  uo=450 tox=8e-9 nsub=5e15 lambda=0.02
.model pch pmos level=1 vto=-0.8 uo=150 tox=8e-9 nsub=4e16 lambda=0.04
.model sp pnp is=1e-16 bf=100
VDD vdd 0 3
M3 x  y vdd vdd pch w=50u  l=1u
M4 y  y vdd vdd pch w=50u  l=1u
M1 x  x e2  0   nch w=100u l=1u
M2 y2 x e1  0   nch w=50u  l=1u
Vsen y y2 0
Q2 0 0 e2 sp 1
Q1 0 0 e1 sp 10
.nodeset v(x)=1.6 v(y)=1.8
.options temp=27 tnom=27
.op
.dc VDD 2 4 0.1
.end
```

### 第 5 步 — 仿真电流及其偏差

$V_{DD}=3$ V 时完整模型给出 $I_{BIAS}=235.0\ \mu$A，$V_{GS2}-V_{GS1}=59.86$ mV。逐个关闭二阶效应，可以找出与手工分析的差距来源：

| 模型 | 3 V 时 $I_{BIAS}$ (µA) | $dI_{BIAS}/dV_{DD}$ (µA/V) |
|---|---|---|
| $\gamma=0$，$\lambda=0$ | 200.8 | 0 |
| $\gamma=0$，计入 $\lambda$ | 219.2 | 40.6 |
| 计入体效应，$\lambda=0$ | 217.3 | 0 |
| 完整模型 | 235.0 | 43.3 |

理想化模型重现了手工结果（202.6 µA 乘以 $(25.87/26)^2$ 得 200.6 µA）。体效应使电流增加约 8 %：$M_1$ 的源极比 $M_2$ 高 60 mV，因此 $V_{t1}$ 比 $V_{t2}$ 高约 2.5 mV，这一差值叠加在决定电流的 60 mV 电压差上（$I\propto(\Delta V)^2$）。沟道长度调制使电流增加约 9 %，因为 $M_2$ 与 $M_3$ 的 $|V_{DS}|$ 大于各自的配对管。总体上仿真值比手工值 202.6 µA 高约 16 %，这是 level-1 模型的二阶效应叠加在正确的一阶设计之上的结果。

温度扫描验证了第 3 步。在 −25 至 100 °C 范围内，理想化模型的电流从 182.7 µA 升至 223.9 µA，比值为 1.225，而 $(373/248)^{0.5}=1.226$；其 25 °C 处的斜率为 +1680 ppm/°C。完整模型给出 +2140 ppm/°C，多出的部分来自二阶项的温度依赖。

### 第 6 步 — 电源灵敏度

直流扫描给出 3 V 处 $dI_{BIAS}/dV_{DD}=43\ \mu\mathrm A/\mathrm V$，因此

$$
S_{V_{DD}}^{I_{BIAS}}=\frac{V_{DD}}{I_{BIAS}}\frac{\partial I_{BIAS}}{\partial V_{DD}}=\frac{3\ \mathrm V}{235\ \mu\mathrm A}\left(43.3\ \frac{\mu\mathrm A}{\mathrm V}\right)=0.55 .
$$

$\lambda=0$ 时灵敏度为零，因为两个二极管连接器件把每个节点相对其电源轨固定住。$\lambda\ne0$ 时，$V_{DD}$ 的增量 $\delta$ 全部落在 $M_3$（$V_{SD3}$）和 $M_2$（$V_{DS2}$）上。令 $a=\lambda_n/(1+\lambda_nV_{DS2})\approx0.0196\ \mathrm{V^{-1}}$、$b=\lambda_p/(1+\lambda_pV_{SD3})\approx0.0378\ \mathrm{V^{-1}}$，将回路方程线性化：

$$
\frac{dI}{2I}\left(V_{ov2}-V_{ov1}\right)=\delta\left(\frac{aV_{ov2}}2+\frac{bV_{ov1}}2+bV_T\right)
\;\Rightarrow\;
\frac1I\frac{dI}{dV_{DD}}=\frac{2(0.00572\ \mathrm V)}{0.0599\ \mathrm V}\,\mathrm{V^{-1}}=0.19\ \mathrm{V^{-1}},
$$

即约 45 µA/V，与仿真一致。该电路对电源只具有中等程度的不敏感性：起稳定作用的量是 60 mV 的电压差，只被 0.15–0.2 V 的 $V_{ov}$ 放大，与沟道长度调制引起的偏移相比并不大。
