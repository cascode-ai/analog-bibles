# 详细步骤 - grsim-03-10

从 5 V 输入出发，经过两个基射极压降求出直流电流，并计入 1 kΩ 电阻从 $Q_1$ 发射极分走的电流。然后从 $Q_2$ 的发射极往回建立小信号模型：每个发射极处看到的阻抗按 $\beta_0+1$ 倍折算到基极。最后与 ngspice 的工作点和 `.tf` 结果比较，分别考虑包含与不包含模型中的 $r_b$ 和厄利效应。

### 第 1 步 — 直流偏置

输出比输入低两个基射极压降：

$$
V_O=5\ \mathrm V-0.7\ \mathrm V-0.7\ \mathrm V=3.6\ \mathrm V,\qquad I_{50}=\frac{3.6\ \mathrm V}{50\ \Omega}=72\ \mathrm{mA}.
$$

1 kΩ 电阻跨接在 $V_{BE2}$ 两端，因此向输出节点送入 $0.7\ \mathrm V/1\ \mathrm{k\Omega}=0.7$ mA。在输出节点和 $Q_1$ 发射极列 KCL：

$$
\begin{aligned}
I_{E2}&=72-0.7=71.3\ \mathrm{mA},&I_{C2}&=\tfrac{200}{201}I_{E2}=70.9\ \mathrm{mA},&I_{B2}&=\tfrac{I_{E2}}{201}=0.355\ \mathrm{mA},\\
I_{E1}&=I_{B2}+0.7\ \mathrm{mA}=1.055\ \mathrm{mA},&I_{C1}&=\tfrac{200}{201}I_{E1}=1.05\ \mathrm{mA}.&&
\end{aligned}
$$

若没有 1 kΩ 电阻，$I_{C1}$ 只有 $I_{C2}/\beta$；该电阻使 $Q_1$ 的电流提高约三倍。

### 第 2 步 — 小信号参数

由 $g_m=I_C/V_T$、$r_\pi=\beta_0/g_m$：

| | $I_C$ | $g_m$ | $r_\pi$ |
|---|---|---|---|
| $Q_1$ | 1.05 mA | 40.4 mA/V | 4.95 kΩ |
| $Q_2$ | 70.9 mA | 2.73 A/V | 73.3 Ω |

### 第 3 步 — 输入电阻与电压增益

在 $Q_2$ 的基极，$r_{\pi2}$ 和 1 kΩ 电阻都接到输出，因此在 $Q_1$ 发射极与输出之间构成 $R_p=r_{\pi2}\parallel1\ \mathrm{k\Omega}=68.3\ \Omega$。设流过 $R_p$ 的电流为 $i$，$Q_2$ 再加上 $g_{m2}R_pi$，所以流入 50 Ω 的输出电流为 $(1+g_{m2}R_p)i$。于是 $Q_1$ 发射极处的阻抗为

$$
Z_1=R_p+50\ \Omega\,(1+g_{m2}R_p)=68.3\ \Omega+50\ \Omega\,(1+186.3)=9.44\ \mathrm{k\Omega},
$$

经 $Q_1$ 折算：

$$
R_i=r_{\pi1}+(\beta_0+1)Z_1=4.95\ \mathrm{k\Omega}+201(9.44\ \mathrm{k\Omega})=1.90\ \mathrm{M\Omega}.
$$

$Q_1$ 的基极电流为 $v_i/R_i$；其发射极电流 $201\,v_i/R_i$ 流入 $Z_1$，其中产生 $v_o$ 的部分为 $50(1+g_{m2}R_p)$：

$$
\frac{v_o}{v_i}=\frac{201\times50\ \Omega\,(1+g_{m2}R_p)}{R_i}=\frac{201(9.37\ \mathrm{k\Omega})}{1.90\ \mathrm{M\Omega}}=0.990 .
$$

### 第 4 步 — 输出电阻（手算估计）

输入源为理想源时，$Q_1$ 的发射极向 $Q_2$ 的基极呈现约 $r_{\pi1}/(\beta_0+1)=24.7\ \Omega$（到输出的 1 kΩ 通路大得多，予以忽略）。从 $Q_2$ 的发射极看进去：

$$
R_o\approx\frac{r_{\pi1}/201+r_{\pi2}}{201}\Big\|\,50\ \Omega=\frac{24.7\ \Omega+73.3\ \Omega}{201}\Big\|\,50\ \Omega=0.49\ \Omega .
$$

### 第 5 步 — SPICE 验证

该网表计算工作点，并用 `.tf` 一次得到低频增益、输入电阻和输出电阻：

```spice
* grsim-03-10 Darlington emitter follower
VCC vcc 0 10
VI  vi  0 5
Q1  vcc vi e1 npn
Q2  vcc e1 vo npn
R1  e1 vo 1k
RL  vo 0 50
.model npn npn is=5e-15 bf=200 vaf=130 rb=200
.control
op
print v(vo) @q1[ic] @q2[ic]
tf v(vo) VI
print all
.endc
.end
```

共运行两次：一次使用给定模型，一次去掉 `rb` 和 `vaf`（RB = 0，VAF = ∞），以符合手算的假设。

| 量 | 手算 | ngspice，RB = 0，VAF = ∞ | ngspice，RB = 200 Ω，VAF = 130 V |
|---|---|---|---|
| $V_O$ | 3.60 V | 3.54 V | 3.48 V |
| $I_{C1}$ | 1.05 mA | 1.13 mA | 1.17 mA |
| $I_{C2}$ | 70.9 mA | 69.7 mA | 68.3 mA |
| $R_i$ | 1.90 MΩ | 1.90 MΩ | 1.61 MΩ |
| $v_o/v_i$ | 0.990 | 0.990 | 0.971 |
| $R_o$ | 0.49 Ω | 0.486 Ω | 1.43 Ω |

### 第 6 步 — 差异的解释

- 偏置：$I_S=5\times10^{-15}$ A 时，基射极压降 $V_T\ln(I_C/I_S)\approx0.68$ V（$Q_1$）和 0.79 V（$Q_2$），而不是各 0.7 V。$V_O$ 略低（50 Ω 中电流略小），而较大的 $V_{BE2}$ 使流过 1 kΩ 电阻的电流增大，从而提高了 $I_{C1}$。
- RB = 0、VAF = ∞ 时，小信号结果与手算一致（1.90 MΩ、0.990、0.49 Ω）。
- RB = 200 Ω 时，$Q_2$ 的基区电阻在输出通路中直接与 $r_{\pi2}=73\ \Omega$ 相加，因此 $R_o\approx(24.7+200+73)\ \Omega/201+\dots\approx1.5\ \Omega$，基区电阻起主导作用。它与 $r_o$（VAF = 130 V）一起还使增益降到 0.97，输入电阻降到约 1.6 MΩ。
