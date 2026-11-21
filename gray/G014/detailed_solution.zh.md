# 详细步骤 - G014

渡越时间 $\tau_T=1/(2\pi f_T)$ 是恒定的基区渡越时间与按 $1/I_C$ 下降的耗尽层电容充电时间之和。由两个 $f_T$ 测量值提取这两部分，把 $C_\mu$ 换算到 $V_{CB}=2$ V，再在整个范围内计算 $f_T(I_C)$；在双对数坐标上，它在小电流时是斜率为 1 的直线，并在 $1/(2\pi\tau_F)$ 处趋于平坦。

### 第 1 步 — $f_T$ 的模型

由混合 π 模型，$f_T=g_m/[2\pi(C_\pi+C_\mu)]$，其中 $C_\pi=\tau_Fg_m+C_{je}$，$g_m=I_C/V_T$，故

$$
\tau_T=\frac1{2\pi f_T}=\tau_F+\frac{(C_{je}+C_\mu)V_T}{I_C}.
$$

按题意，$\tau_F$ 与电流无关，$C_{je}$ 在正向偏置区内恒定。

### 第 2 步 — 提取 $\tau_F$ 和 $C_{je}$

两次测量都在 $V_{CB}=10$ V 下进行，1 mA 时 $V_T/I_C=26\ \Omega$，10 mA 时为 $2.6\ \Omega$：

$$
\begin{aligned}
\tau_T(1\ \mathrm{mA})&=\frac1{2\pi(600\ \mathrm{MHz})}=265.3\ \mathrm{ps},\qquad \tau_T(10\ \mathrm{mA})=\frac1{2\pi(1\ \mathrm{GHz})}=159.2\ \mathrm{ps},\\
C_{je}+C_\mu(10\ \mathrm V)&=\frac{(265.3-159.2)\ \mathrm{ps}}{(26-2.6)\ \Omega}=4.53\ \mathrm{pF},\qquad
\tau_F=159.2\ \mathrm{ps}-(2.6\ \Omega)(4.53\ \mathrm{pF})=147.4\ \mathrm{ps}.
\end{aligned}
$$

由 $C_\mu(10\ \mathrm V)=0.15$ pF 得 $C_{je}=4.38$ pF。

### 第 3 步 — $V_{CB}=2$ V 时的 $C_\mu$

利用 $C_\mu=C_{\mu0}/(1+V_{CB}/\psi_0)^{1/2}$：

$$
C_{\mu0}=(0.15\ \mathrm{pF})\sqrt{1+\frac{10}{0.55}}=0.657\ \mathrm{pF},\qquad
C_\mu(2\ \mathrm V)=\frac{0.657\ \mathrm{pF}}{\sqrt{1+2/0.55}}=0.305\ \mathrm{pF},
$$

因此扫描中 $C_{je}+C_\mu=4.69$ pF。

### 第 4 步 — 渐近线、转折点与采样值

小电流时电容项占主导，$f_T$ 与 $I_C$ 成正比：

$$
f_T\approx\frac{I_C}{2\pi V_T(C_{je}+C_\mu)}=\frac{1\ \mu\mathrm A}{2\pi(26\ \mathrm{mV})(4.69\ \mathrm{pF})}=1.31\ \mathrm{MHz}\ \text{at}\ 1\ \mu\mathrm A,
$$

在双对数坐标上是斜率为 +1 的直线。大电流时 $f_T\to1/(2\pi\tau_F)=1/[2\pi(147.4\ \mathrm{ps})]=1.08$ GHz。两项相等的电流为

$$
I_C=\frac{V_T(C_{je}+C_\mu)}{\tau_F}=\frac{(26\ \mathrm{mV})(4.69\ \mathrm{pF})}{147.4\ \mathrm{ps}}=0.83\ \mathrm{mA},
$$

此处 $f_T$ 为最大值的一半，即 540 MHz。完整表达式给出：

| $I_C$ | 1 µA | 10 µA | 100 µA | 0.83 mA | 1 mA | 3 mA | 10 mA |
|---|---|---|---|---|---|---|---|
| $f_T$ (MHz) | 1.30 | 12.9 | 116 | 540 | 591 | 847 | 997 |

### 第 5 步 — 曲线

![fT 随 IC 变化的双对数曲线：从 1 µA 处的 1.3 MHz 起斜率为 +1，在 0.83 mA 处转折，趋于 1.08 GHz](/q/G014/solution-curves.zh.svg)

$f_T$ 在几百微安以下与 $I_C$ 成正比上升，在 0.83 mA 附近弯折，到 10 mA 时接近 1.08 GHz。实际晶体管在大电流下由于大注入（high-level injection）和基区展宽效应（Kirk effect）会出现 $f_T$ 下降；本模型不包含这一效应，因此曲线不超出其饱和形状外推。
