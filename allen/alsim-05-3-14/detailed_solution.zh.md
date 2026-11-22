# 详细步骤 - alsim-05-3-14

按各项指标施加约束的先后顺序使用 [图 1] 的设计关系式：压摆率和功耗确定电流；$v_{OUT}(\max)$ 确定负载管 M3 的尺寸；增益确定 M1 的尺寸；$v_{OUT}(\min)$ 确定共源共栅管 M2 及其栅极偏置。然后仿真电路，并调整平方律估计留得过紧的唯一一个量 $V_{GG2}$。

### 第 1 步 — 由压摆率和功耗确定电流

输出上升时 M1 截止，M3 的负载电流 $I$ 给 $C_L$ 充电，故

$$
SR=\frac{I}{C_L}>5\ \mathrm{V/\mu s}\;\Rightarrow\;I>(5\ \mathrm{V/\mu s})(5\ \mathrm{pF})=25\ \mu\mathrm A .
$$

取 $I=30\ \mu$A（$SR=6$ V/µs），两个偏置支路各取 $I_{Bias}=30\ \mu$A。于是电源电流为 $3(30\ \mu\mathrm A)=90\ \mu$A，$P_{diss}=(5\ \mathrm V)(90\ \mu\mathrm A)=0.45$ mW ≤ 0.5 mW。

### 第 2 步 — 由 $v_{OUT}(\max)$ 确定负载管 M3/M4

M3 必须在输出升到 3.5 V 时仍保持饱和：

$$
v_{OUT}(\max)=V_{DD}-\sqrt{\frac{2I}{K'_P(W_3/L_3)}}\ge3.5\ \mathrm V\;\Rightarrow\;\frac{W_3}{L_3}\ge\frac{2(30\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(1.5\ \mathrm V)^2}=0.53 .
$$

取 $W_3/L_3=W_4/L_4=1\ \mu\mathrm m/1\ \mu\mathrm m$（因 $I_{Bias}=I$，两者相等）。此时 $V_{SD3}(\mathrm{sat})=\sqrt{60/50}=1.10$ V，$v_{OUT}(\max)=3.90$ V。

### 第 3 步 — 由增益确定输入管 M1

共源共栅结构使从输出端向下看的电阻远大于 $r_{ds3}$，故

$$
|A_v|\approx\frac{g_{m1}}{g_{ds3}}=\sqrt{\frac{2K'_N(W_1/L_1)}{\lambda_P^2I}}\ge100\;\Rightarrow\;\frac{W_1}{L_1}\ge\frac{(100)^2(0.05)^2(30\ \mu\mathrm A)}{2(110\ \mu\mathrm{A/V^2})}=3.4 .
$$

取 $W_1/L_1=4\ \mu\mathrm m/1\ \mu\mathrm m$，得 $|A_v|\approx108$（$g_{m1}=162\ \mu$S，$g_{ds3}=1.5\ \mu$S）。

### 第 4 步 — 由 $v_{OUT}(\min)$ 确定共源共栅管 M2 及其栅极偏置

$$
V_{DS1}(\mathrm{sat})=\sqrt{\frac{2(30\ \mu)}{(110\ \mu)(4)}}=0.37\ \mathrm V,\qquad
V_{DS2}(\mathrm{sat})=\sqrt{\frac{2(30\ \mu)}{(110\ \mu)(1)}}=0.74\ \mathrm V\quad(W_2/L_2=1/1),
$$

所以 $v_{OUT}(\min)=0.37+0.74=1.11$ V，远低于 1.5 V。[图 1] 中的关系式取 $V_{GG2}=V_{DS1}(\mathrm{sat})+V_{GS2}$。计入 M2 的体效应（$V_{SB2}\approx0.37$ V，$V_{T2}\approx0.79$ V）后约为 1.89 V，对应 M5 的 $W_5/L_5=2I_{Bias}/[K'_N(V_{GG2}-V_T)^2]\approx0.38$。

这一取值使 M1 在偏置点恰好处于饱和边缘。用 $W_5/L_5=1/2.6$ 做的首次仿真证实了这一风险：随着 $v_{IN}$ 升高，$V_{DS1}(\mathrm{sat})$ 增大，而 $V_{DS1}$ 被 M2 固定不变。结果 M1 在 $v_{OUT}=2.34$ V 处进入线性区，在 $v_{OUT}=1.5$ V 处增益降到 91。把 $V_{GG2}$ 提高约 0.15 V，可给 M1 留出 0.13 V 的裕量，而输出摆幅只损失 0.1 V：

$$
V_{GG2}\approx2.03\ \mathrm V,\qquad \frac{W_5}{L_5}=\frac{2(30\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(2.03-0.7)^2}=0.31\;\to\;1\ \mu\mathrm m/3.3\ \mu\mathrm m .
$$

M5 的 $L\ge2$ µm，因此采用 λ = 0.01 V⁻¹。

| 器件 | $W/L$（µm/µm） | 电流 |
|---|---|---|
| M1 | 4/1 | 31 µA |
| M2 | 1/1 | 31 µA |
| M3，M4 | 1/1 | 31 µA，30 µA |
| M5 | 1/3.3 | 30 µA |

### 第 5 步 — 仿真网表

```spice
* alsim-05-3-14 cascode amplifier
VDD vdd 0 DC 5
IB5 vdd gg DC 30U
M5 gg gg 0 0 N2 W=1U L=3.3U
IB4 g4 0 DC 30U
M4 g4 g4 vdd vdd P W=1U L=1U
M3 out g4 vdd vdd P W=1U L=1U
M2 out gg s1 0 N W=1U L=1U
M1 s1 in 0 0 N W=4U L=1U
VIN in 0 DC 1.0718 AC 1 PULSE(0 2 1U 1N 1N 4U 10U)
CL out 0 5P
.MODEL N NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 PHI=0.7 LAMBDA=0.04
.MODEL N2 NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 PHI=0.7 LAMBDA=0.01
.MODEL P PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 PHI=0.8 LAMBDA=0.05
.OP
.AC DEC 50 1 100MEG
.PRINT AC VM(OUT)
.END
```

VIN 的直流电平（1.0718 V）把输出置于 2.5 V，即输出范围的中部。对 VIN 做直流扫描得到传输曲线，用 0 到 2 V 的脉冲做 `.TRAN 2N 10U` 得到压摆率。

### 第 6 步 — 仿真结果

工作点：$V_{GG2}=2.03$ V，$V_{DS1}=0.50$ V（$V_{DSAT1}=0.37$ V），$v_{OUT}=2.51$ V，$I_{D1}=I_{D3}=31.0\ \mu$A（M3 的 $V_{SD}$ 略大，复制 M4 的电流时稍多），电源电流 91.0 µA。

![输出电压和增益幅值随输入电压变化的仿真曲线，标出全部饱和的输出范围 1.23 至 3.95 V](/q/alsim-05-3-14/solution-transfer.zh.svg)

![5 pF 负载下对 0 到 2 V 输入脉冲的仿真响应，上升 6.25 V/µs，下降 9.7 V/µs](/q/alsim-05-3-14/solution-transient.zh.svg)

| 指标 | 手算设计 | 仿真 | 是否满足 |
|---|---|---|---|
| $P_{diss}\le0.5$ mW | 0.45 mW | 0.455 mW | 是 |
| $\lvert A_v\rvert\ge100$ | 108 | 2.5 V 处 118（1.5–3.5 V 内为 116–121） | 是 |
| $v_{OUT}(\max)\ge3.5$ V | 3.90 V | 3.95 V | 是 |
| $v_{OUT}(\min)\le1.5$ V | 1.11 V（提高 $V_{GG2}$ 后为 1.24 V） | 1.23 V | 是 |
| $SR>5$ V/µs | 6 V/µs | 上升 6.25 V/µs，下降 9.7 V/µs | 是 |

接 5 pF 时 −3 dB 频率为 44 kHz，与 $g_{ds3}/(2\pi C_L)$ 一致。仿真增益高于手算值，是因为 $g_{ds3}=\lambda_PI/(1+\lambda_PV_{SD3})=1.38\ \mu$S 而不是 $\lambda_PI=1.5\ \mu$S，且 $I$ 为 31 µA。全部饱和指在直流扫描中 M1、M2、M3 都满足 $V_{DS}\ge V_{DSAT}$。该范围从 M2 退出饱和的 1.23 V 到 M3 退出饱和的 3.95 V，两端都留有裕量地覆盖了要求的 1.5–3.5 V。所有指标均满足。
