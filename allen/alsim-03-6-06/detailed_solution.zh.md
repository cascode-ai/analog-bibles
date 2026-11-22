# 详细步骤 - alsim-03-6-06

该放大器是一个共源级 M1，以 p 沟道电流镜 M2–M3 作负载；M3 和 R1 确定镜像电流。一个网表包含全部三种分析：用于传输曲线的直流扫描、在 $v_{OUT}=2.5$ V 偏置点附近的交流分析，以及以 PWL 为输入的瞬态分析。level-1 模型中没有器件电容，因此 5 pF 负载是唯一的电容。

### 第 1 步 — 仿真网表

```spice
* alsim-03-6-06 simple MOS amplifier
M1 2 1 0 0 NCH W=5U L=1U
M2 2 3 4 4 PCH W=5U L=1U
M3 3 3 4 4 PCH W=5U L=1U
R1 3 0 200K
VDD 4 0 DC 5
VIN 1 0 DC 0.962765 AC 1 PWL(0 0 1U 0 1.05U 3 3U 3 3.05U 0)
CL 2 0 5P
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.DC VIN 0 5 1M
.AC DEC 100 100 100MEG
.TRAN 1N 4U
.END
```

VIN 的直流值用作交流分析的工作点，取自 (a) 的结果。扫描、交流源和 PWL 波形各自只在对应的分析中起作用。

### 第 2 步 — 电流镜的偏置

M3 为二极管连接且饱和，$K'_P(W/L)/2=125\ \mu\mathrm{A/V^2}$：

$$
\frac{5-V_{SG3}}{200\ \mathrm{k\Omega}}=(125\ \mu\mathrm{A/V^2})(V_{SG3}-0.7)^2(1+0.05V_{SG3})
\;\Rightarrow\;V_{SG3}=1.085\ \mathrm V,\quad I_{REF}=19.6\ \mu\mathrm A .
$$

因此 V(3) = 3.91 V。M2 的 $V_{SG}$ 相同；在 $v_{OUT}=2.5$ V（$V_{SD2}=2.5$ V）时提供 $I_{D2}=(125\ \mu\mathrm{A/V^2})(0.385)^2(1.125)=20.9\ \mu$A。

### 第 3 步 — (a) 问：传输曲线

$v_{OUT}=2.5$ V 时两管均饱和，M1 必须吸收 20.9 µA，其 $K'_N(W/L)/2=275\ \mu\mathrm{A/V^2}$：

$$
(275\ \mu\mathrm{A/V^2})(v_{IN}-0.7)^2(1+0.04\cdot2.5)=20.9\ \mu\mathrm A
\;\Rightarrow\;v_{IN}-0.7=0.263\ \mathrm V,\quad v_{IN}=0.963\ \mathrm V .
$$

![R1 = 200 kΩ 时 vOUT 随 vIN 在 0–5 V 内变化的仿真曲线，标出 vIN = 0.963 V 处的 2.5 V 点](/q/alsim-03-6-06/solution-transfer.zh.svg)

| $v_{IN}$ | 0.8 V | 0.9 V | 0.963 V | 1.0 V | 2.0 V | 5.0 V |
|---|---|---|---|---|---|---|
| $v_{OUT}$（ngspice） | 4.96 V | 4.83 V | 2.50 V | 0.22 V | 0.03 V | 0.01 V |

曲线为反相特性：M1 截止或刚导通时（M2 处于非饱和区）输出为 5 V，在 0.96 V 附近急剧下降，之后 M1 进入非饱和区，把输出拉到接近地。ngspice 给出 $v_{OUT}=2.5$ V 时 $v_{IN}=0.9628$ V，与计算一致。镜像电流很小，使过渡区只有约 0.1 V 宽。

### 第 4 步 — (b) 问：偏置点的小信号参数

在 $v_{IN}=0.9628$ V 处，$V_{ov1}=0.263$ V，$I_D=20.9$ µA：

$$
\begin{aligned}
g_{m1}&=K'_N\frac WL V_{ov1}(1+\lambda_Nv_{OUT})=(550\ \mu\mathrm{A/V^2})(0.263)(1.1)=159\ \mu\mathrm S,\\
g_{ds1}&=\lambda_N\frac{K'_N}{2}\frac WL V_{ov1}^2=0.76\ \mu\mathrm S,\qquad g_{ds2}=\lambda_P\frac{K'_P}{2}\frac WL(0.385)^2=0.93\ \mu\mathrm S .
\end{aligned}
$$

输出节点上 $g_{ds1}+g_{ds2}$ 与 $C_L$ 并联，因此

$$
\frac{V_{out}}{V_{in}}=\frac{-g_{m1}}{g_{ds1}+g_{ds2}+sC_L},\qquad
A_0=-\frac{159}{0.76+0.93}=-94.2\ (39.5\ \mathrm{dB}),
$$

$$
f_{-3\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_L}=\frac{1.69\ \mu\mathrm S}{2\pi(5\ \mathrm{pF})}=53.7\ \mathrm{kHz},\qquad
f_u\approx\frac{g_{m1}}{2\pi C_L}=5.06\ \mathrm{MHz}.
$$

由于增益约为 94，输入仅偏差 10 mV 就会使输出移动约 1 V，因此 VIN 的直流值必须设定到几毫伏以内。应先用 .OP 确认 V(2) ≈ 2.5 V，再采信交流结果。

### 第 5 步 — (b) 问：仿真频率响应

![100 Hz 至 100 MHz 的仿真增益幅值（dB），标出 53.6 kHz 处的 −3 dB 点和 5.06 MHz 处的单位增益点](/q/alsim-03-6-06/solution-magnitude.zh.svg)

![100 Hz 至 100 MHz 的仿真相位，从 180° 降至 90°，53.6 kHz 处为 135°](/q/alsim-03-6-06/solution-phase.zh.svg)

| 量 | 手算 | ngspice |
|---|---|---|
| 低频增益 | 39.5 dB，180° | 39.48 dB，179.9° |
| −3 dB 频率 | 53.7 kHz | 53.6 kHz（相位 134.9°） |
| 单位增益频率 | 5.06 MHz | 5.06 MHz |
| 100 MHz 处 | −25.9 dB，90° | −25.9 dB，90.0° |

这是单极点响应：先平坦，再以 −20 dB/十倍频程下降；相位从 180°（反相）经极点处的 135° 降到 90°。

### 第 6 步 — (c) 问：瞬态响应

![0 至 4 µs 的仿真瞬态响应，虚线为 PWL 输入，1 µs 附近快速下降，3.05 µs 之后缓慢线性恢复](/q/alsim-03-6-06/solution-transient.zh.svg)

- 1 µs 之前 $v_{IN}=0$，M1 截止，$v_{OUT}=5$ V。
- $v_{IN}$ 升到 3 V 时，M1 的 $V_{ov}=2.3$ V，可吸收约 $(275\ \mu\mathrm{A/V^2})(2.3)^2(1.2)=1.75$ mA 的电流，对 5 pF 每伏放电只需几纳秒：$v_{OUT}$ 在 1.044 µs 穿过 2.5 V，1.06 µs 时已低于 0.1 V，最后稳定在 0.02 V。
- 约 3.04 µs 时 $v_{IN}$ 降到 0.7 V 以下，M1 截止。只有 M2 的镜像电流（约 21 µA）给负载充电，因此输出近似线性上升：

$$
\frac{dv_{OUT}}{dt}\approx\frac{I_{D2}}{C_L}=\frac{20.9\ \mu\mathrm A}{5\ \mathrm{pF}}=4.2\ \mathrm{V/\mu s}.
$$

仿真斜率为 4.25 V/µs（随 $V_{SD2}$ 减小而略微变缓）。$v_{OUT}$ 在 3.59 µs 穿过 2.5 V，到 4 µs 时只达到 4.15 V。响应明显不对称：下降受 M1 的大电流限制，上升则受 R1 = 200 kΩ 设定的小偏置电流限制。
