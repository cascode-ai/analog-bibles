# 详细步骤 - grsim-06-20

从指标出发依次确定电流、电压限制所允许的过驱动电压以及器件尺寸。接着设计 $V_T$ 基准偏置核心及其扩展电路。最后对完整电路进行仿真（包括手工设计忽略的体效应），并修正两个器件。所有长度都取匹配所需的最小值 $L_{\text{eff}}=1$ µm，因此 $L_{\text{drwn}}=L_{\text{eff}}+2L_d=1.18$ µm，$\lambda_n=0.02\ \mathrm{V^{-1}}$，$\lambda_p=0.04\ \mathrm{V^{-1}}$。下文所有 $W/L$ 均为有效宽长比（$W$ 以 µm 计时数值等于 $W/L$）。

### 第 1 步 — 由输出驱动指标确定电流

输出电流等于电流镜提供的电流与 $M_{2A}$ 吸收的电流之差。输入对完全偏转时，该差值变化整个尾电流，因此要输出 ±100 µA 需要 $|I_{D5}|\ge100\ \mu$A。取 $|I_{D5}|=100\ \mu$A，于是 $|I_{D1}|=|I_{D2}|=50\ \mu$A。

$M_{11}$、$M_{12}$ 的电流必须大于 $|I_{D5}|$，这样当一个输入管承担全部尾电流时，$M_{1A}$、$M_{2A}$ 也不会截止。取 $I_{D11}=I_{D12}=150\ \mu$A。于是共源共栅支路在平衡时流过 $150-50=100\ \mu$A，且始终不少于 50 µA。

### 第 2 步 — 由电压指标确定过驱动电压

- **输入范围到 +0.5 V。** 把 $M_1$、$M_2$ 的阱接到其公共源极（无体效应），范围上限为 $V_{DD}-|V_{ov5}|-|V_{tp}|-|V_{ov1}|$。取 $|V_{ov5}|=|V_{ov1}|=0.1$ V，恰好得到 $1.5-0.1-0.8-0.1=+0.5$ V。
- **范围到 $-V_{SS}$。** 只要栅极高于 $V_{D1}-|V_{tp}|$，$M_1$ 就保持饱和，而该值远低于 $-1.5$ V（第 4 步）。
- **1.5 V 峰峰值摆幅及 100 mV 裕量。** 电流镜取 $|V_{ov}|=0.1$ V。n 沟道器件取 0.15 V（宽度较小）。$M_{11}$、$M_{12}$ 需要 $V_{DS}=V_{ov}+0.1=0.25$ V。

由 $W/L=2I_D/(k'V_{ov}^2)$，例如 $(W/L)_1=2(50\ \mu\mathrm A)/((64.7\ \mu\mathrm{A/V^2})(0.1\ \mathrm V)^2)=155$：

| 器件 | $\lvert I_D\rvert$ (µA) | $\lvert V_{ov}\rvert$ (V) | $W/L$ |
|---|---|---|---|
| $M_1$, $M_2$ | 50 | 0.10 | 155 |
| $M_5$ | 100 | 0.10 | 309 |
| $M_3$, $M_4$, $M_{3A}$, $M_{4A}$ | 100 | 0.10 | 309 |
| $M_{11}$, $M_{12}$ | 150 | 0.15 | 68.7 |
| $M_{1A}$, $M_{2A}$ | 100 | 0.15 | 45.8 |

### 第 3 步 — 偏置电压

$$
V_{BIAS1}=V_{DD}-|V_{tp}|-|V_{ov5}|=+0.6\ \mathrm V,\qquad V_{BIAS3}=-V_{SS}+V_{tn}+V_{ov11}=-0.75\ \mathrm V,
$$

$$
V_{BIAS2}=-V_{SS}+(V_{ov11}+0.1\ \mathrm V)+V_{GS1A}=-1.5+0.25+0.75=-0.5\ \mathrm V,
$$

因此折叠节点位于 −1.25 V，$V_{DS11}=0.25$ V。

### 第 4 步 — 电压检查

- **输入范围。** 上限：+0.5 V（第 2 步）。下限：$V_{D1}-|V_{tp}|=-1.25-0.8=-2.05$ V，低于 $-V_{SS}$。
- **输出摆幅。** 低端为 $M_{2A}$ 处于饱和边缘：$V_{BIAS2}-V_{tn}=-1.1$ V。高端为 $M_{4A}$ 处于饱和边缘：其栅极位于电流镜节点 $V_{DD}-2(0.9\ \mathrm V)=-0.3$ V，故为 $-0.3+0.8=+0.5$ V。即 1.6 V 峰峰值。
- **$V_{IC}=0$ 时的裕量**（输出接近电流镜节点）：

| 器件 | $M_5$ | $M_{11}$ | $M_{1A}$, $M_{2A}$ | $M_3$, $M_4$, $M_{4A}$ |
|---|---|---|---|---|
| $\lvert V_{DS}\rvert-\lvert V_{ov}\rvert$ (V) | 0.5 | 0.1 | ≈ 0.8 | 0.8 |

### 第 5 步 — 偏置电流产生电路

在 [图 2] 的 $V_T$ 基准核心中，$M_5$–$M_6$ 迫使 $I_{IN}=I_{OUT}$，$M_3$、$M_4$（尺寸相同，采用共源共栅）迫使栅源电压相等。发射区面积比为 $n$ 时，回路 $V_{EB1}=V_{EB2}+I_{OUT}R$ 给出 $I_{OUT}=V_T\ln n/R$。取 $n=8$、25 µA：

$$
R=\frac{V_T\ln8}{25\ \mu\mathrm A}=\frac{(25.85\ \mathrm{mV})(2.079)}{25\ \mu\mathrm A}=2.15\ \mathrm{k\Omega}.
$$

双极器件是衬底 pnp 晶体管，因此其集电极（此处基极也是）接 $-V_{SS}$。核心电路工作在 $V_{DD}$ 与 $-V_{SS}$ 之间。

| 器件 | 作用 | $W/L$ |
|---|---|---|
| $M_{3}$、$M_{4}$ 及共源共栅管 $M_{3C}$、$M_{4C}$（n） | 等 $V_{GS}$ 对管，25 µA，$V_{ov}=0.15$ V；$M_3$、$M_{3C}$ 二极管连接 | 11.45 |
| $M_{5}$、$M_{6}$、$M_7$、$M_8$（p） | 电流镜及 25 µA 复制管，$\lvert V_{ov}\rvert=0.1$ V；栅极线即 $V_{BIAS1}$ | 77.3 |
| $M_{B3}$（接在 $M_7$ 上的 n 型二极管） | $V_{GS}=0.75$ V → $V_{BIAS3}$；$M_{11}$、$M_{12}$ 为其 6 倍 | 11.45 |
| $M_{B2}$（接在 $M_8$ 上的 n 型二极管） | $V_{GS}\approx1.0$ V → $V_{BIAS2}$ | 1.61（手算），1.30（修正后） |

运放中的 $M_5$ 是核心 $M_6$ 的 4 倍，直接取用核心栅极线上的 $V_{BIAS1}$。自偏置核心还存在一个稳定的零电流状态，因此实际电路需要启动电路（start-up circuit）；仿真中用 `.nodeset` 选定工作状态。

### 第 6 步 — 增益估算

$$
G_m=g_{m1}=\frac{2(50\ \mu\mathrm A)}{0.1\ \mathrm V}=1\ \mathrm{mS},
$$

$$
R_{down}\approx g_{m2A}r_{o2A}(r_{o2}\parallel r_{o12})=(1.33\ \mathrm{mS})(500\ \mathrm{k\Omega})(200\ \mathrm{k\Omega})=133\ \mathrm{M\Omega},\qquad
R_{up}\approx g_{m4A}r_{o4A}r_{o4}=(2\ \mathrm{mS})(250\ \mathrm{k\Omega})^2=125\ \mathrm{M\Omega},
$$

$$
A_v=G_m(R_{up}\parallel R_{down})=(1\ \mathrm{mS})(64.5\ \mathrm{M\Omega})\approx6.4\times10^4\ (96\ \mathrm{dB}).
$$

### 第 7 步 — SPICE 验证与修正

level-1 模型计入 $\gamma=0.25\ \mathrm{V^{1/2}}$。n 沟道器件衬底接 $-V_{SS}$，$M_1$/$M_2$ 的阱接其公共源极，其余 p 沟道器件的阱接 $V_{DD}$。

```spice
* grsim-06-20 folded-cascode op amp with V_T-referenced bias
.model nm nmos level=1 kp=194u  vto=0.6  gamma=0.25 phi=0.7 lambda=0.02 ld=0.09u
.model pm pmos level=1 kp=64.7u vto=-0.8 gamma=0.25 phi=0.7 lambda=0.04 ld=0.09u
.model qsub pnp is=1e-16 bf=50
VDD vdd 0 1.5
VSS vss 0 -1.5
* bias core (Fig. 2) with cascoded M3/M4
M6b p6 p6 vdd vdd pm w=77.3u  l=1.18u
M5b a5 p6 vdd vdd pm w=77.3u  l=1.18u
M3c a5 a5 a3  vss nm w=11.45u l=1.18u
M3b a3 a3 e1  vss nm w=11.45u l=1.18u
M4c p6 a5 a4  vss nm w=11.45u l=1.18u
M4b a4 a3 r1  vss nm w=11.45u l=1.18u
Rb  r1 e2 2.15k
Q1b vss vss e1 qsub 1
Q2b vss vss e2 qsub 8
* extension: VBIAS3 (b3) and VBIAS2 (b2)
M7b b3 p6 vdd vdd pm w=77.3u  l=1.18u
MB3 b3 b3 vss vss nm w=11.45u l=1.18u
M8b b2 p6 vdd vdd pm w=77.3u  l=1.18u
MB2 b2 b2 vss vss nm w=1.3u   l=1.18u
* op amp (Fig. 1); VBIAS1 = node p6
M5  cs  p6  vdd vdd pm w=334u  l=1.18u
M1  f1  inp cs  cs  pm w=155u  l=1.18u
M2  f2  inm cs  cs  pm w=155u  l=1.18u
M11 f1  b3  vss vss nm w=68.7u l=1.18u
M12 f2  b3  vss vss nm w=68.7u l=1.18u
M1A m   b2  f1  vss nm w=45.8u l=1.18u
M2A out b2  f2  vss nm w=45.8u l=1.18u
M3  g3  g3  vdd vdd pm w=309u  l=1.18u
M3A m   m   g3  vdd pm w=309u  l=1.18u
M4  d4  g3  vdd vdd pm w=309u  l=1.18u
M4A out m   d4  vdd pm w=309u  l=1.18u
.nodeset v(p6)=0.6 v(a5)=0.2
* gain: dc feedback only (open loop at 1 Hz)
Vp  inp 0 dc 0 ac 1
Rf  out inm 1G
Cf  inm 0 1
.ac lin 1 1 1
.end
```

按手算尺寸的第一次仿真暴露出两处不足，均已修正：

- **$V_{BIAS2}$。** 体效应使 $M_{1A}$、$M_{2A}$ 的 $V_{t}$ 升高 35 mV，把 $M_{11}$ 的裕量削减到 67 mV。将 $M_{B2}$ 从 1.61 减小到 1.30，使 $V_{BIAS2}$ 升至 −0.455 V，裕量恢复为 109 mV。
- **尾电流。** 沟道长度调制（$M_5$ 的 $|V_{DS}|$ 为 0.6 V，核心中为 0.9 V）以及 24.5 µA 的核心电流，使 $|I_{D5}|=96.8\ \mu$A，输出级无法完全提供或吸收 100 µA。把 $M_5$ 加宽到 334，在相同过驱动电压下得到 104.6 µA。

修正后设计的结果：

| 量 | 指标 / 手算 | ngspice |
|---|---|---|
| $I_{BIAS}=V_T\ln8/R$ | 25.0 µA | 24.5 µA |
| $\lvert I_{D5}\rvert$、$I_{D11}$、$\lvert I_{D3}\rvert$ | 100、150、100 µA | 104.6、153、101 µA |
| $V_{IC}=0$ 时最小的 $\lvert V_{DS}\rvert-\lvert V_{ov}\rvert$ | ≥ 0.1 V | 0.109 V（$M_{11}$、$M_{12}$）；其余均 ≥ 0.45 V |
| 输入共模范围 | −1.5 至 +0.5 V | 低于 −1.6 V 至 +0.51 V（$M_5$ 饱和） |
| 线性输出范围 | ≥ 1.5 V 峰峰值 | −1.09 至 +0.51 V（1.6 V 峰峰值） |
| $V_o\approx0$ 时的输出电流 | ±100 µA | 可提供 ±100 µA（输入对偏转了 104.6 µA 中的 102.3 µA） |
| 直流增益 | $6.4\times10^4$ | $7.5\times10^4$（97.5 dB） |
| 电源电流 | 0.4–0.5 mA | 0.41 mA（1.22 mW） |

输入范围是在把输出伺服到 0 V 的同时扫描共模电平得到的。$M_5$ 在 +0.51 V 处离开饱和区（其 100 mV 裕量在 +0.41 V 处用尽），而在 −1.5 V 时 $M_1$ 仍有 0.54 V 的饱和裕量。输出范围是 $M_{2A}$（低端）与 $M_{4A}$（高端）保持饱和的区间。该设计满足全部指标。最终几何尺寸见第 2、5 步的表格，其中 $(W/L)_5=334$、$(W/L)_{B2}=1.30$；所有版图长度均为 1.18 µm。
