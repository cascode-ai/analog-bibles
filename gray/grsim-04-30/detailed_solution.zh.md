# 详细步骤 - grsim-04-30

先由题给的 $I_S(T)$ 模型手工求零温度系数条件，再在 ngspice 中用相同的温度模型搭建电路，微调电阻比使 25 °C 时 $dV_{OUT}/dT=0$，然后将饱和电流加倍，分别在重新微调与不重新微调两种情况下重复仿真。

### 第 1 步 — 电路方程

放大器迫使两个输入端电压相等，因此 $R_2$ 的下端电压为 $V_{EB1}$（误差为 $V_{OUT}/A$）。于是 $R_1$ 与 $R_2$ 上的压降都是 $V_{OUT}-V_{EB1}$；取 $R_1=R_2$，两个发射极电流相等，$I_1=I_2=I$。由于 $I_{S2}=8I_{S1}$，$R_3$ 两端的电压等于两管发射结电压之差：

$$
I R_3=V_{EB1}-V_{EB2}=V_T\ln\frac{I/I_{S1}}{I/I_{S2}}=V_T\ln8 .
$$

该电流为 PTAT 电流，输出为

$$
V_{OUT}=V_{EB1}+IR_2=V_{EB1}+\frac{R_2}{R_3}V_T\ln8 .
$$

电阻比 $R_2/R_3$ 决定了作用于 PTAT 电压 $V_T\ln8=53.4$ mV 的闭环增益。

### 第 2 步 — 零温度系数输出的手工估算

利用 $V_{EB}=V_T\ln(I/I_S)$、$I_S\propto T^{\gamma}\exp(-V_{G0}/V_T)$ 及 $I\propto T$，以 $T_0$ 处的值 $V_{EB1,0}$ 为参考写出 $V_{EB1}$：

$$
V_{EB1}(T)=V_{G0}-\frac{T}{T_0}\left(V_{G0}-V_{EB1,0}\right)-(\gamma-1)\frac{kT}{q}\ln\frac{T}{T_0}.
$$

它在 $T_0$ 处的斜率为 $-(V_{G0}-V_{EB1,0})/T_0-(\gamma-1)k/q$。PTAT 项 $IR_2=V_{OUT}-V_{EB1}$ 的斜率为 $(V_{OUT}-V_{EB1,0})/T_0$。令两者之和为零，得

$$
V_{OUT}=V_{G0}+(\gamma-1)V_T=1.205\ \mathrm V+2.2\,(25.7\ \mathrm{mV})=1.2615\ \mathrm V .
$$

目标值只由器件模型决定，与电流大小及 $R_3$ 无关。

### 第 3 步 — SPICE 设置

$Q_1$、$Q_2$ 的模型取 EG = 1.205 eV、XTI = 3.2，SPICE 的 $I_S(T)\propto T^{\mathrm{XTI}}\exp(-\mathrm{EG}/V_T)$ 因而与题给模型完全一致；BF 取很大值，使基极电流可忽略。放大器为增益 $10^4$ 的压控电压源，$R_3=1\ \mathrm{k\Omega}$（$I\approx53$ µA），扫描 $R_1=R_2$。用 `.dc temp` 扫描得到 $V_{OUT}(T)$，25 °C 处的斜率用 ±0.25 °C 的中心差分计算。`.nodeset` 使求解器避开基准电路的零电流状态。

```spice
* band-gap reference, Fig. 1
.model P1 pnp(is=1.25e-17 eg=1.205 xti=3.2 bf=1e6)
.model P2 pnp(is=1e-16    eg=1.205 xti=3.2 bf=1e6)
Q1 0 0 a  P1
Q2 0 0 e2 P2
R1 out a  9.626k
R2 out b  9.626k
R3 b   e2 1k
E1 out 0  a b 10000
.nodeset v(out)=1.2
.options tnom=25
.dc temp -25 100 1
.end
```

### 第 4 步 — 微调至零温度系数：目标电压

对 $dV_{OUT}/dT|_{25\,°\mathrm C}=0$ 求根，得 $R_1=R_2=9.626\ \mathrm{k\Omega}$（$R_2/R_3=9.63$），此时 $V_{EB1}=0.7472$ V，且

$$
V_{OUT,\mathrm{target}}=1.26005\ \mathrm V\approx1.26\ \mathrm V .
$$

这与手工估算一致。两者之间剩余的 1.4 mV 来自放大器的有限增益：两个输入端相差 $V_{OUT}/A=0.126$ mV，这一差值从 $R_3$ 上的 PTAT 电压中扣除，并被放大约 $R_2/R_3$ 倍。取 $A=10^9$ 重新仿真得 1.26147 V，即手工估算值。

### 第 5 步 — $I_S$ 加倍：重新微调与不重新微调

两个饱和电流同时加倍时，$V_T\ln(I_{S2}/I_{S1})$ 不变，因而 $I$ 不变，但 $V_{EB1}$ 降低 $V_T\ln2=17.8$ mV，这是一个 PTAT 量。不重新微调时，输出下降这一数值，斜率改变 $-(k/q)\ln2=-59.7\ \mu\mathrm V/°\mathrm C$。重新微调则通过 $R_2/R_3$ 把同样的 PTAT 量补回：

$$
\Delta\frac{R_2}{R_3}=\frac{V_T\ln2}{V_T\ln8}=\frac13,\qquad R_2=9.626\ \mathrm{k\Omega}+0.333\ \mathrm{k\Omega}=9.96\ \mathrm{k\Omega}.
$$

由于补回的项恰好是 PTAT 的，整条曲线回到标称曲线。SPICE 结果（$R_1$ 始终等于 $R_2$）：

| 情况 | $R_1=R_2$ (kΩ) | 25 °C 时 $V_{OUT}$ (V) | 25 °C 时 $dV_{OUT}/dT$ |
|---|---|---|---|
| 标称 $I_S$，已微调 | 9.626 | 1.26005 | 0 |
| $2I_S$，未重新微调 | 9.626 | 1.24227 | −59.7 µV/°C |
| $2I_S$，重新微调至目标值 | 9.960 | 1.26005 | +0.14 µV/°C |

![标称、未重新微调与重新微调三种情况下仿真输出电压随温度的变化](/q/grsim-04-30/solution-curves.zh.svg)

因此，在 25 °C 把 $V_{OUT}$ 微调回目标电压即可恢复 $dV_{OUT}/dT\approx0$；未重新微调的电路则保留完整的 $-(k/q)\ln2\approx-60\ \mu\mathrm V/°\mathrm C$ 误差。在 −25 至 100 °C 范围内，微调后的曲线变化约 1.7 mV，这是 $V_{EB}$ 的剩余曲率（curvature）。
