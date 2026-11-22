# 详细步骤 - alsim-06-6-09

由给定电流选取四个偏置电压，使各电流源刚好处于饱和边缘之上。然后在 20 pF 负载下仿真 [图 1] 的折叠式共源共栅运放：开环交流分析得到频率响应；跟随器扫描和阶跃得到 ICMR、压摆率和建立时间；开环直流扫描得到输出范围。用同一模型做手算估计，给出预期值。由于 $C_L$ 是原设计 10 pF 的两倍，GB 和压摆率应约为原设计 10 MHz 和 10 V/µs 的一半。

### 第 1 步 — 偏置电压

每个偏置电压都由给定电流和尺寸按平方律求出。其中两对器件偏置在饱和边缘。

**M3**（15/1，100 µA，源极接地）：
$$
V_{ov3}=\sqrt{\frac{2(100\ \mu)}{(110\ \mu)(15)}}=0.348\ \mathrm V\;\Rightarrow\;V_{NB1}=0.7+0.348=1.048\ \mathrm V .
$$

**M4、M5**（160/1，125 µA）：
$$
V_{ov4}=\sqrt{\frac{2(125\ \mu)}{(50\ \mu)(160)}}=0.177\ \mathrm V\;\Rightarrow\;V_{PB1}=2.5-0.877=1.623\ \mathrm V .
$$

**M6、M7**（160/1，75 µA）。M4、M5 处于饱和边缘时，它们的源极位于 $2.5-0.177=2.323$ V。计入体效应（$V_{SB}=0.177$ V，$|V_T|=0.754$ V），且 $V_{ov6}=\sqrt{150/(50\cdot160)}=0.137$ V，故 $V_{SG6}=0.89$ V。边缘值为 $V_{PB2}=1.43$ V；取 $V_{PB2}=1.40$ V，留出约 30 mV 的裕量。

**M10、M11**（20/1，75 µA）。$V_{ov10}=\sqrt{150/(110\cdot20)}=0.261$ V，低电压共源共栅电流镜把它们的栅极设在 $V_{GS10}=0.96$ V。为使 $V_{DS10}=0.261$ V，M8 的 $V_{SB}=0.261$ V，$V_{T8}=0.757$ V，$V_{GS8}=1.018$ V。边缘值为 $V_{NB2}=1.28$ V；取 $V_{NB2}=1.30$ V。

### 第 2 步 — 手算估计

$$
\begin{aligned}
g_{m1}&=\sqrt{2(110\ \mu)(33)(50\ \mu)}=603\ \mu\mathrm S,\qquad GB=\frac{g_{m1}}{C_L}=\frac{603\ \mu\mathrm S}{20\ \mathrm{pF}}=30\ \mathrm{Mrad/s}=4.8\ \mathrm{MHz},\\
SR&=\frac{I_3}{C_L}=\frac{100\ \mu\mathrm A}{20\ \mathrm{pF}}=5\ \mathrm{V/\mu s},\qquad P_{diss}=(2.5\ \mathrm V)(I_4+I_5)=(2.5\ \mathrm V)(250\ \mu\mathrm A)=0.63\ \mathrm{mW}.
\end{aligned}
$$

在输出端，n 沟道共源共栅给出 $R_{dn}=g_{m9}r_{ds9}r_{ds11}=(574\ \mu\mathrm S)(333\ \mathrm{k\Omega})^2=64$ MΩ。p 沟道共源共栅经 M7 向上看入 $r_{ds2}\|r_{ds5}$，给出 $R_{up}=g_{m7}r_{ds7}(r_{ds2}\|r_{ds5})=35$ MΩ。所以

$$
R_{out}=R_{dn}\|R_{up}=23\ \mathrm{M\Omega},\qquad A_v=g_{m1}R_{out}=1.4\times10^4\ (82.7\ \mathrm{dB}),\qquad f_{p1}=\frac{1}{2\pi R_{out}C_L}=350\ \mathrm{Hz}.
$$

折叠节点和电流镜节点处的非主极点位于数百 Mrad/s，因此相位裕度应接近 90°。ICMR 从 $V_{DS3}(\mathrm{sat})+V_{GS1}\approx0.35+0.87=1.2$ V（计入体效应约 1.3 V）一直到电源轨。输出范围的下限由两个 n 沟道饱和电压决定，即 $V_{NB2}-V_{T9}\approx0.54$ V；上限由 p 沟道共源共栅决定，即 $V_{PB2}+|V_{T7}|\approx2.15$ V。线性建立的时间常数为 $1/(2\pi GB)\approx33$ ns，因此建立到 1% 约需 $4.6\times33$ ns ≈ 0.15 µs。

### 第 3 步 — 仿真网表

```spice
* alsim-06-6-09 folded-cascode op amp, open-loop ac
VDD vdd 0 DC 2.5
VPB1 pb1 0 DC 1.623
VPB2 pb2 0 DC 1.40
VNB1 nb1 0 DC 1.048
VNB2 nb2 0 DC 1.30
M3 t nb1 0 0 NCH W=15U L=1U
M1 ra inp t 0 NCH W=33U L=1U
M2 rb inn t 0 NCH W=33U L=1U
M4 ra pb1 vdd vdd PCH W=160U L=1U
M5 rb pb1 vdd vdd PCH W=160U L=1U
M6 g pb2 ra vdd PCH W=160U L=1U
M7 out pb2 rb vdd PCH W=160U L=1U
M8 g nb2 s8 0 NCH W=20U L=1U
M9 out nb2 s9 0 NCH W=20U L=1U
M10 s8 g 0 0 NCH W=20U L=1U
M11 s9 g 0 0 NCH W=20U L=1U
CL out 0 20P
VIN inp 0 DC 1.75 AC 1
LF out inn 1G
CF inn 0 1
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.OP
.AC DEC 50 1 1G
.PRINT AC VDB(OUT) VP(OUT)
.END
```

输入共模电平为 1.75 V。电感/电容对只在直流时闭合环路，因此交流分析是开环的。其他测量使用同一电路：
- 单位增益跟随器（out 接 inn），用 1.4↔2.1 V 阶跃测压摆率，用 1.7↔1.8 V 阶跃测小信号建立时间；
- 跟随器输入的直流扫描，同时监测 $I_3$，得到 ICMR；
- 开环直流扫描，并检查 M5、M7、M9、M11 的饱和情况，得到输出范围。

给定的模型卡没有电容参数，因此 $C_L$ 是唯一的电容。

### 第 4 步 — 结果

工作点为 $I_3=102.9\ \mu$A，$I_4=126.6\ \mu$A，$I_6=I_7=75.2\ \mu$A，节点 RA/RB 为 2.294/2.296 V（$V_{SD4}=0.206$ V，略高于 $V_{ov4}=0.177$ V）。

![20 pF 负载下折叠式共源共栅运放的仿真开环增益和相位](/q/alsim-06-6-09/solution-bode.zh.svg)

![20 pF 负载下跟随器的仿真大阶跃响应，两个方向的压摆率均为 5.15 V/µs](/q/alsim-06-6-09/solution-step.zh.svg)

| 量 | 手算 | SPICE |
|---|---|---|
| 直流增益 | 1.4 × 10⁴（82.7 dB） | 1.9 × 10⁴（85.7 dB） |
| 主极点 | 350 Hz | 259 Hz |
| GB | 4.8 MHz | 4.98 MHz |
| 相位裕度 | ≈ 90° | 90.0° |
| $P_{diss}$ | 0.63 mW | 0.63 mW（253 µA） |
| ICMR | 1.2–1.3 V 至 $V_{DD}$ | 1.21 V（$I_3$ 下降 5%）至 $V_{DD}$ |
| 输出范围 | 0.54–2.15 V | 0.55–2.16 V |
| 压摆率 | 5 V/µs | +5.15 / −5.15 V/µs |
| 1% 建立时间 | ≈ 0.15 µs（小阶跃） | 148 ns（±0.1 V），208 ns（±0.7 V，含压摆） |

- **增益与极点。** 仿真增益比手算值高 3 dB，主极点相应更低，因为 level-1 的输出电导是 $\lambda I_D/(1+\lambda V_{DS})$ 而不是 $\lambda I_D$。GB 只取决于 $g_{m1}/C_L$，与手算一致。
- **相位裕度。** 这里达到完整的 90°，因为模型不含器件电容。计入实际的结电容和栅电容后会有所降低，但由于折叠节点的极点远高于 5 MHz，仍会远高于 75°。
- **ICMR。** 在跟随器扫描中，输入级一直工作到 2.5 V 电源轨（$I_3$ 不变）。跟随器的输出只能跟随输入到 2.15 V 的输出极限，因此在此之上起限制作用的是输出范围而不是 ICMR。

正如预期，GB（4.98 MHz）和 SR（5.15 V/µs）约为原设计 10 MHz 和 10 V/µs 目标的一半，因为二者都与 20 pF 负载成反比。其他特性基本与 $C_L$ 无关。
