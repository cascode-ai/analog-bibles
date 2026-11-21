# 详细步骤 - grsim-06-22

摆幅指标与 100 mV 裕量规则共同确定一个统一的过驱动电压。再由给定电流确定所有 $W/L$，偏置电路则由电流密度相同的 25 µA 支路构成。两个线性区器件先手工确定尺寸，再在 ngspice 中微调；ngspice 同时给出增益以及换用另一组阈值电压的影响。版图长度 $L=1$ µm 时，$L_{\text{eff}}=1-2(0.09)=0.82$ µm，$\lambda_n=0.02/0.82=0.0244\ \mathrm{V^{-1}}$，$\lambda_p=0.04/0.82=0.0488\ \mathrm{V^{-1}}$。下文所有 $W/L$ 均为有效宽长比（$W=0.82\,\mu\mathrm m\times W/L$）。

### 第 1 步 — 由输出摆幅确定过驱动电压

辅助放大器 $A_1$ 把 $M_4$ 的漏极保持在 $V_{BIAS2}$，其取值使 $V_{SD4}=|V_{ov}|+0.1$ V。因此输出可以上升到 $M_{4A}$ 处于饱和边缘为止：

$$
V_{o,\max}=V_{DD}-(|V_{ov}|+0.1\ \mathrm V)-|V_{ov}|.
$$

同理，$A_2$ 把 $M_{12}$ 的漏极保持在比 $-V_{SS}$ 高 $V_{ov}+0.1$ V 处，故 $V_{o,\min}=-V_{SS}+(V_{ov}+0.1)+V_{ov}$。摆幅为

$$
3.3\ \mathrm V-4|V_{ov}|-0.2\ \mathrm V\ge2.5\ \mathrm V\;\Rightarrow\;|V_{ov}|\le0.15\ \mathrm V .
$$

所有器件取 $|V_{ov}|=0.15$ V，输出范围为 ±1.25 V。

### 第 2 步 — 器件尺寸

由 $W/L=2I_D/(\mu C_{ox}V_{ov}^2)$，例如 $2(100\ \mu\mathrm A)/((194\ \mu\mathrm{A/V^2})(0.15\ \mathrm V)^2)=45.8$：

| 类型、电流 | $W/L$ | 器件 |
|---|---|---|
| n，100 µA | 45.8 | $M_{1A}$, $M_{2A}$, $M_{21}$, $M_{22}$, $M_{33}$, $M_{34}$ |
| n，200 µA | 91.6 | $M_{11}$, $M_{12}$, $M_{25}$ |
| p，100 µA | 137 | $M_1$–$M_4$, $M_{3A}$, $M_{4A}$, $M_{23}$, $M_{24}$, $M_{31}$, $M_{32}$ |
| p，200 µA | 275 | $M_5$, $M_{35}$ |
| n，25 µA（偏置） | 11.5 | $M_{101}$–$M_{104}$, $M_{109}$, $M_{110}$, $M_{113}$ |
| p，25 µA（偏置） | 34.3 | $M_{105}$, $M_{107}$, $M_{108}$, $M_{111}$, $M_{112}$ |

电流由折叠结构决定：$M_{11}$、$M_{12}$ 流过 200 µA，$M_1$、$M_2$ 各取 100 µA，因此共源共栅支路流过 100 µA。每个辅助放大器的尾电流为 200 µA。

### 第 3 步 — 偏置电压与线性区器件

在 [图 4] 中，电流密度相同的叠接二极管给出 $V_{BIAS4}=-V_{SS}+V_{tn}+V_{ov}=-V_{SS}+0.85$ V 和 $V_{BIAS1}=V_{DD}-0.85$ V。$V_{BIAS2}$ 与 $V_{BIAS3}$ 是线性区器件 $M_{106}$、$M_{114}$ 的漏极电压，必须距各自电源轨 0.25 V。

$M_{105}$ 与 $M_{106}$ 栅极相连且电流相同。设 $M_{105}$ 的过驱动电压为 $V_{ov}$，则 $M_{106}$ 的过驱动电压为 $V_{ov}+V_{DS}$，其中 $V_{DS}=0.25$ V。令 $M_{105}$ 的饱和区电流等于 $M_{106}$ 的线性区电流：

$$
\tfrac12\left(\tfrac WL\right)_{105}V_{ov}^2=\left(\tfrac WL\right)_{106}\left[(V_{ov}+V_{DS})V_{DS}-\tfrac12V_{DS}^2\right]
\;\Rightarrow\;\frac{(W/L)_{106}}{(W/L)_{105}}=\frac{0.01125}{0.06875}=0.164 ,
$$

故 $(W/L)_{106}\approx5.6$，同理 $(W/L)_{114}\approx1.9$。于是

$$
V_{BIAS1}=+0.80\ \mathrm V,\quad V_{BIAS2}=+1.40\ \mathrm V,\quad V_{BIAS3}=-1.40\ \mathrm V,\quad V_{BIAS4}=-0.80\ \mathrm V .
$$

### 第 4 步 — 增益估算

由 $g_m=2I_D/V_{ov}$、$r_o=1/(\lambda I_D)$：$g_{m1}=1.33$ mS；100 µA 时 $r_{on}=410\ \mathrm{k\Omega}$、$r_{op}=205\ \mathrm{k\Omega}$；200 µA 时 $r_{on}=205\ \mathrm{k\Omega}$。每个辅助放大器（auxiliary amplifier）都是电流镜负载的差分对，增益为 $A_{1,2}\approx g_m(r_{on}\parallel r_{op})=(1.33\ \mathrm{mS})(137\ \mathrm{k\Omega})=182$。它把共源共栅的输出电阻放大 $A+1$ 倍：

$$
R_{up}\approx(A_1+1)g_{m4A}r_{o4A}r_{o4}=183\times(1.33\ \mathrm{mS})(205\ \mathrm{k\Omega})^2=10\ \mathrm{G\Omega},
$$

$$
R_{down}\approx(A_2+1)g_{m2A}r_{o2A}(r_{o2}\parallel r_{o12})=183\times(1.33\ \mathrm{mS})(410\ \mathrm{k\Omega})(103\ \mathrm{k\Omega})=10\ \mathrm{G\Omega},
$$

$$
A_v\approx g_{m1}(R_{up}\parallel R_{down})=(1.33\ \mathrm{mS})(5\ \mathrm{G\Omega})\approx7\times10^6,
$$

而没有有源共源共栅时约为 $4\times10^4$。

### 第 5 步 — 辅助放大器输入端的紧张余度

$A_1$ 的输入位于 $V_{BIAS2}=V_{DD}-0.25$ V，其输出（$M_{4A}$ 的栅极）低一个 $V_{SG}$，约为 $V_{DD}-1.1$ V。因此 $M_{22}$ 的栅漏电压为 $|V_{tp}|+|V_{ov}|=0.85$ V。不计体效应时，这超过 $V_{tn}=0.7$ V，$M_{22}$ 将处于线性区。计入体效应后，$M_{22}$ 的源极比 $-V_{SS}$ 高约 2.2 V，阈值升至约 0.9 V，因此它只以几十毫伏的裕量处于饱和。$A_2$ 中的 $M_{32}$ 处于镜像对称的情形。

### 第 6 步 — SPICE：线性区器件宽度、裕量、摆幅与增益

level-1 模型：$V_{t0}=\pm0.7$ V，$\gamma=0.25\ \mathrm{V^{1/2}}$，$2\phi_F=0.66$ V，衬底接电源轨。环路只在直流下闭合（1 GΩ，1 F），在 1 Hz 读取增益。

```spice
* grsim-06-22 folded cascode with active cascodes (W in um, L = 1 um drawn)
.model nm nmos level=1 kp=194u  vto=0.7  gamma=0.25 phi=0.66 lambda=0.0244 ld=0.09u
.model pm pmos level=1 kp=64.7u vto=-0.7 gamma=0.25 phi=0.66 lambda=0.0488 ld=0.09u
VDD vdd 0 1.65
VSS vss 0 -1.65
IB   vdd  n1   25u
M101 n1   n1   b4   vss nm w=9.39u l=1u
M102 b4   b4   vss  vss nm w=9.39u l=1u
M104 n104 n1   n103 vss nm w=9.39u l=1u
M103 n103 b4   vss  vss nm w=9.39u l=1u
M105 n104 n104 b2   vdd pm w=28.2u l=1u
M106 b2   n104 vdd  vdd pm w=4.08u l=1u
M109 n108 n1   n110 vss nm w=9.39u l=1u
M110 n110 b4   vss  vss nm w=9.39u l=1u
M108 n108 n108 b1   vdd pm w=28.2u l=1u
M107 b1   b1   vdd  vdd pm w=28.2u l=1u
M111 n111 b1   vdd  vdd pm w=28.2u l=1u
M112 n113 n108 n111 vdd pm w=28.2u l=1u
M113 n113 n113 b3   vss nm w=9.39u l=1u
M114 b3   n113 vss  vss nm w=1.36u l=1u
M5  cs  b1  vdd vdd pm w=225.3u l=1u
M1  f1  inp cs  vdd pm w=112.7u l=1u
M2  f2  inm cs  vdd pm w=112.7u l=1u
M11 f1  b4  vss vss nm w=75.1u  l=1u
M12 f2  b4  vss vss nm w=75.1u  l=1u
M1A m   o2a f1  vss nm w=37.6u  l=1u
M2A out o2b f2  vss nm w=37.6u  l=1u
M3  s3  m   vdd vdd pm w=112.7u l=1u
M4  s4  m   vdd vdd pm w=112.7u l=1u
M3A m   o1a s3  vdd pm w=112.7u l=1u
M4A out o1b s4  vdd pm w=112.7u l=1u
.subckt amp1 p n o vdd vss b4
M21 x p  t   vss nm w=37.6u  l=1u
M22 o n  t   vss nm w=37.6u  l=1u
M23 x x  vdd vdd pm w=112.7u l=1u
M24 o x  vdd vdd pm w=112.7u l=1u
M25 t b4 vss vss nm w=75.1u  l=1u
.ends
.subckt amp2 p n o vdd vss b1
M35 t b1 vdd vdd pm w=225.3u l=1u
M31 x p  t   vdd pm w=112.7u l=1u
M32 o n  t   vdd pm w=112.7u l=1u
M33 x x  vss vss nm w=37.6u  l=1u
M34 o x  vss vss nm w=37.6u  l=1u
.ends
XA1a b2 s3 o1a vdd vss b4 amp1
XA1b b2 s4 o1b vdd vss b4 amp1
XA2a b3 f1 o2a vdd vss b1 amp2
XA2b b3 f2 o2b vdd vss b1 amp2
Vp inp 0 dc 0 ac 1
Rf out inm 1G
Cf inm 0 1
.ac lin 1 1 1
.end
```

对 $V_{SD106}=0.25$ V 和 $V_{DS114}=0.25$ V 求根，得 $W_{106}=4.08$ µm、$W_{114}=1.36$ µm，即 $(W/L)_{106}=4.97$、$(W/L)_{114}=1.66$，为 $M_{105}$、$M_{113}$ 的 0.145 倍，由于沟道长度调制而略低于手算比值 0.164。$V_I=0$ 时的结果：

| 量 | 手算 | ngspice |
|---|---|---|
| $V_{BIAS1}$、$V_{BIAS2}$、$V_{BIAS3}$、$V_{BIAS4}$ (V) | 0.80，1.40，−1.40，−0.80 | 0.803，1.400，−1.400，−0.802 |
| $\lvert I_{D5}\rvert$、$I_{D11}$、共源共栅支路 | 200，200，100 µA | 198.5，197.1，97.8 µA |
| 过驱动电压 | 0.15 V | 0.142–0.153 V |
| $\lvert V_{DS}\rvert-\lvert V_{ov}\rvert$，$M_3$、$M_4$、$M_{11}$、$M_{12}$ | 0.10 V | 0.100–0.101 V |
| $\lvert V_{DS}\rvert-\lvert V_{ov}\rvert$，$M_{22}$、$M_{32}$（每个副本） | 计入体效应约 0.07 V | 0.023–0.026 V |
| 其余有源器件的裕量 | ≥ 0.1 V | ≥ 0.30 V |
| $M_{2A}$、$M_{4A}$ 保持饱和的输出范围 | ±1.25 V | −1.25 至 +1.25 V（2.5 V 峰峰值） |
| 直流增益 | $\approx7\times10^6$ | $1.20\times10^6$（122 dB） |

除 $M_{106}$ 与 $M_{114}$ 外，所有晶体管都处于饱和区，过驱动电压相等并满足 100 mV 裕量要求，只有 $M_{22}$ 与 $M_{32}$ 例外。它们只剩约 25 mV 的裕量，因为 $M_{3A}$/$M_{4A}$（以及 $M_{1A}$/$M_{2A}$）的体效应使辅助放大器的输出再降低约 30 mV；在这种结构和相等过驱动电压的条件下，这两个器件无法达到 100 mV 裕量（第 5 步）。仿真增益为 $10^6$ 量级，低于理想化估算，因为 $M_{22}$、$M_{32}$ 非常接近线性区边缘，辅助放大器损失了部分增益。

### 第 7 步 — $V_{t0}=0.6$ V（n）与 $-0.8$ V（p）时的增益

只改变阈值电压（尺寸与偏置电路不变）：

| 量 | $\pm0.7$ V | 0.6 / −0.8 V |
|---|---|---|
| 直流增益 | $1.20\times10^6$ | $1.23\times10^5$ |
| $M_{22}$（$A_1$ 中）：$\lvert V_{DS}\rvert$ / $\lvert V_{DS,sat}\rvert$ | 0.175 / 0.152 V（饱和） | 0.061 / 0.22 V（线性区） |
| $M_{32}$（$A_2$ 中）：裕量 | 0.025 V | 0.216 V |
| $M_3$、$M_4$：$V_{SD}$ | 0.248 V | 0.180 V |

增益下降约 10 倍。$|V_{tp}|=0.8$ V 时，$M_{4A}$ 的栅极降到 $V_{BIAS2}-0.95$ V，$M_{22}$ 的栅漏电压增大到 $|V_{tp}|+|V_{ov}|=0.95$ V，而 $M_{22}$ 的阈值（计入体效应）只有约 0.8 V。$M_{21}$/$M_{22}$ 被推入线性区，$A_1$ 的增益崩溃。$A_1$ 随即无法再把 $M_3$、$M_4$ 保持在 $V_{BIAS2}$（其 $V_{SD}$ 降到 0.18 V），$M_{3A}$/$M_{4A}$ 的增益提升（gain boosting）作用随之丧失。向上看的输出电阻降到大致普通共源共栅的水平，$\approx g_{m4A}r_{o4A}r_{o4}$，因此增益由 p 侧共源共栅决定，约为 $10^5$ 量级。$A_2$ 一侧实际上有所改善，因为 $M_{32}$ 的栅漏电压降到 $V_{tn}+V_{ov}=0.75$ V，远低于其 $|V_{tp}|\approx1$ V，但输出电阻受较弱的一侧限制。
