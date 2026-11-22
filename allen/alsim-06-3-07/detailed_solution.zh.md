# 详细步骤 - alsim-06-3-07

由 $R_S$–M8 支路求出偏置电流，推导两级的小信号参数，再用两级运放的标准关系式逐项计算各项指标，注意输入对管为 p 沟道。然后确定调零管 M9/M10 的尺寸，并用含器件电容的 LEVEL-1 模型仿真电路，得到相位裕度和建立时间。手算中除 M9 外均忽略体效应。

### 第 1 步 — 偏置电流

M8 为二极管连接，与 $R_S$ 串联在 5 V 电源两端：

$$
I_8=\frac{V_{DD}-V_{SS}-V_{SG8}}{R_S},\qquad V_{SG8}=0.7+\sqrt{\frac{2I_8}{(50\ \mu\mathrm{A/V^2})(3)}}\;\Rightarrow\;I_8=36.1\ \mu\mathrm A,\ V_{SG8}=1.39\ \mathrm V .
$$

M5（3/1）和 M7（5/1）与 M8 共栅，故 $I_5=36.1\ \mu$A，$I_1=I_2=18.0\ \mu$A，$I_7=I_6=(5/3)I_8=60.1\ \mu$A。

### 第 2 步 — 小信号参数、增益与输出电阻

$$
\begin{aligned}
g_{m1}&=\sqrt{2K'_P(W/L)_1I_1}=\sqrt{2(50\ \mu)(2)(18.0\ \mu)}=60.1\ \mu\mathrm S,\\
g_{m6}&=\sqrt{2K'_N(W/L)_6I_6}=\sqrt{2(110\ \mu)(10)(60.1\ \mu)}=364\ \mu\mathrm S,\\
g_{ds2}+g_{ds4}&=(0.05+0.04)(18.0\ \mu\mathrm A)=1.62\ \mu\mathrm S,\qquad g_{ds6}+g_{ds7}=(0.04+0.05)(60.1\ \mu\mathrm A)=5.41\ \mu\mathrm S .
\end{aligned}
$$

带电流镜负载的第一级增益为 $g_{m1}/(g_{ds2}+g_{ds4})$，第二级为 $g_{m6}/(g_{ds6}+g_{ds7})$：

$$
A_v=\frac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})}=\frac{(60.1\ \mu)(364\ \mu)}{(1.62\ \mu)(5.41\ \mu)}=2.49\times10^3\ (67.9\ \mathrm{dB}),
$$

$$
R_{out}=\frac{1}{g_{ds6}+g_{ds7}}=185\ \mathrm{k\Omega}.
$$

### 第 3 步 — 功耗、输入共模范围与输出摆幅

$$
P_{diss}=(5\ \mathrm V)(I_8+I_5+I_7)=(5\ \mathrm V)(132.2\ \mu\mathrm A)=0.66\ \mathrm{mW}.
$$

对于 p 沟道输入对，上限由尾电流管 M5 退出饱和决定，下限由 M1 相对二极管连接的 M3 进入线性区决定：

$$
\begin{aligned}
V_{in}(\max)&=V_{DD}-V_{SD5}(\mathrm{sat})-V_{SG1}=2.5-0.693-1.301=0.51\ \mathrm V,\\
V_{in}(\min)&=V_{SS}+V_{GS3}-|V_{TP}|=-2.5+0.986-0.7=-2.21\ \mathrm V .
\end{aligned}
$$

输出摆动到 M7 或 M6 退出饱和为止：

$$
V_{out}(\max)=V_{DD}-\sqrt{\frac{2I_7}{K'_P(5)}}=2.5-0.69=1.81\ \mathrm V,\qquad
V_{out}(\min)=V_{SS}+\sqrt{\frac{2I_6}{K'_N(10)}}=-2.5+0.33=-2.17\ \mathrm V .
$$

### 第 4 步 — 压摆率、带宽与极点

补偿电容由尾电流充电：

$$
SR=\frac{I_5}{C_c}=\frac{36.1\ \mu\mathrm A}{6\ \mathrm{pF}}=6.0\ \mathrm{V/\mu s}.
$$

当 $C_L=20$ pF 时，输出上升沿受 M7 限制。起初它向负载提供 $(I_7-I_5)/C_L=1.2$ V/µs，因为 M7 还要为 $C_c$ 供电。第一级饱和之后，速率趋近 $I_7/(C_L+C_c)=2.3$ V/µs。

$$
GB=\frac{g_{m1}}{C_c}=\frac{60.1\ \mu\mathrm S}{6\ \mathrm{pF}}=1.0\times10^7\ \mathrm{rad/s}=1.59\ \mathrm{MHz},\qquad |p_1|=\frac{GB}{A_v}=4.0\times10^3\ \mathrm{rad/s}.
$$

接 20 pF 时输出极点为 $|p_2|=g_{m6}/C_L=1.82\times10^7$ rad/s，消除右半平面零点后，预测 $\Phi_M\approx90^\circ-\arctan(GB/|p_2|)=61^\circ$。

### 第 5 步 — 直流 PSRR

电源增益由包含 $R_S$–M8 偏置支路在内的整个电路的线性化小信号分析得到。$V_{DD}$ 变化会使 $I_8$ 以 $1/(R_S+1/g_{m8})\approx9\ \mu$A/V 变化。M7 和 M5 复制这一变化，而 M6 将其大部分抵消，因为电流镜节点随 $I_5$ 变化。在 1 Hz 下对线性化手算模型数值求解得

$$
A_{dd}^{+}\approx1.0,\qquad A_{dd}^{-}\approx0.26\;\Rightarrow\;PSRR^{+}=\frac{A_v}{A_{dd}^{+}}\approx3.3\times10^3\ (70\ \mathrm{dB}),\qquad PSRR^{-}\approx1.3\times10^4\ (82\ \mathrm{dB}).
$$

### 第 6 步 — 调零管 M9 与 M10

节点 7 处于 $V_{SS}+V_{GS6}=-2.5+1.03=-1.47$ V。M9（栅极接 $V_{DD}$）的 $V_{GS9}=3.97$ V，$V_{SB9}=1.03$ V，故 $V_{T9}=0.7+0.4(\sqrt{1.73}-\sqrt{0.7})=0.89$ V。令其线性区电阻等于 $1/g_{m6}$：

$$
R_z=\frac{1}{K'_N(W/L)_9(V_{GS9}-V_{T9})}=\frac{1}{g_{m6}}\;\Rightarrow\;\left(\frac WL\right)_9=\frac{364\ \mu\mathrm S}{(110\ \mu\mathrm{A/V^2})(3.08\ \mathrm V)}=1.07\approx1\ \mu\mathrm m/1\ \mu\mathrm m .
$$

M10（栅极接 $V_{SS}$，n 阱接 $V_{DD}$）的 $V_{SG10}\approx1.03$ V，低于其受体效应影响的约 1.4 V 阈值，因此在工作点处截止。取最小的 1/1 器件即可；它只在节点 7 大幅摆动时导通。$R_z=1/g_{m6}$ 时零点移到无穷远，消除了右半平面零点。

### 第 7 步 — 仿真

网表采用 [图 1] 的节点编号。PMOS 衬底接 $V_{DD}$，NMOS 衬底接 $V_{SS}$。栅电容来自 TOX 和交叠电容参数，未指定漏/源面积。开环响应通过一个 1 GH 电感和一个 1 F 电容施加直流反馈来测量，二者只在直流时闭合环路。

```spice
* alsim-06-3-07 two-stage op amp, open-loop ac
VDD 1 0 DC 2.5
VSS 10 0 DC -2.5
M8 2 2 1 1 PCH W=3U L=1U
RS 2 10 100K
M5 3 2 1 1 PCH W=3U L=1U
M1 6 4 3 1 PCH W=2U L=1U
M2 7 5 3 1 PCH W=2U L=1U
M3 6 6 10 10 NCH W=4U L=1U
M4 7 6 10 10 NCH W=4U L=1U
M6 8 7 10 10 NCH W=10U L=1U
M7 8 2 1 1 PCH W=5U L=1U
M9 7 1 9 10 NCH W=1U L=1U
M10 7 10 9 1 PCH W=1U L=1U
CC 9 8 6P
CL 8 0 20P
VIN 5 0 DC 0 AC 1
LF 8 4 1G
CF 4 0 1
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38 TOX=140E-10
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
+ CGSO=220P CGDO=220P CGBO=700P CJ=560U CJSW=350P MJ=0.5 MJSW=0.35 TOX=140E-10
.OP
.AC DEC 100 10 100MEG
.PRINT AC VDB(8) VP(8)
.END
```

其他测量使用同一网表的变体：
- **PSRR：** 用 VDD 或 VSS 上的交流源代替 VIN。
- **建立时间与压摆率：** 单位增益跟随器（节点 8 接节点 4），输入 ±50 mV 和 ±1 V 的脉冲。
- **ICMR：** 对跟随器输入做直流扫描。
- **输出摆幅：** 开环直流扫描，并检查 M6、M7 是否饱和。

### 第 8 步 — 结果

工作点给出 $I_5=35.6\ \mu$A，$I_7=63.6\ \mu$A，电源电流 135.5 µA，节点 7 为 −1.476 V。M9 的 $R_z$ 为 $1/(339\ \mu\mathrm S)=2.95$ kΩ，而 $1/g_{m6}=2.55$ kΩ；M10 截止。

![空载与 20 pF 负载下的仿真开环增益和相位，标出 GB 与相位裕度](/q/alsim-06-3-07/solution-bode.zh.svg)

![空载与 20 pF 负载下单位增益跟随器对 ±50 mV 阶跃的仿真响应，标出 ±1% 误差带](/q/alsim-06-3-07/solution-step.zh.svg)

| 量 | 手算 | SPICE |
|---|---|---|
| $A_v$ | 2490（67.9 dB） | 3340（70.5 dB） |
| $R_{out}$ | 185 kΩ | 194 kΩ |
| $P_{diss}$ | 0.66 mW | 0.68 mW |
| PSRR⁺ / PSRR⁻（直流） | 70 dB / 82 dB | 70 dB / 81 dB |
| ICMR | −2.21 至 +0.51 V | −2.41 至 +0.55 V |
| 输出摆幅（饱和） | −2.17 至 +1.81 V | −2.15 至 +1.83 V |
| 压摆率 | 6.0 V/µs | 5.9 V/µs（20 pF：上升 2.45 V/µs） |
| GB | 1.59 MHz | 1.66 MHz（空载），1.48 MHz（20 pF） |
| 相位裕度 | 61°（20 pF） | 91°（空载），66°（20 pF） |
| 1% 建立时间，±50 mV | — | 0.45 µs（空载），0.46 µs（20 pF，过冲 5%） |

仿真增益高于手算值，因为 level-1 模型把 $g_{ds}$ 除以 $(1+\lambda V_{DS})$，且各电流高出几个百分点。M1、M2 的衬底接 $V_{DD}$，体效应使 ICMR 的下限向下扩展。ICMR 的下限取跟随器误差超过 10 mV 处，上限取 $I_5$ 下降 5% 处。

接 20 pF 时 66° 的相位裕度与两极点估计（61°）一致，因为右半平面零点已被消除。空载时 $p_2$ 远高于 GB，裕度约为 90°。两种情况下小阶跃的建立时间都接近单极点值 $4.6/GB\approx0.46$ µs。20 pF 时有 5% 的过冲，但建立时间大致相同。
