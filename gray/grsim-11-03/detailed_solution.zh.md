# 详细步骤 - grsim-11-03

该电路中所有噪声源都是与输出节点并联的电流：二极管的散粒噪声和闪烁噪声，以及 20 kΩ 电阻的热噪声（其另一端接交流接地的电源）。它们看到的阻抗相同，都是 $r_d\parallel R\parallel1/(j\omega C)$。因此输出谱密度等于总噪声电流密度乘以 $|Z|^2$，形成三个区域：$1/f$ 区、白噪声平台和单极点滚降。下面求偏置、转角频率和极点，计算噪声谱，并与 ngspice 噪声分析比较。

### 第 1 步 — 偏置与小信号电阻

二极管上约有 0.7 V，

$$
I_D=\frac{10\ \mathrm{V}-0.7\ \mathrm{V}}{20\ \mathrm{k\Omega}}=0.465\ \mathrm{mA},\qquad r_d=\frac{V_T}{I_D}=\frac{26\ \mathrm{mV}}{0.465\ \mathrm{mA}}=55.9\ \Omega,
$$

$$
R_{eq}=r_d\parallel20\ \mathrm{k\Omega}=55.8\ \Omega .
$$

### 第 2 步 — 噪声电流密度

$$
\begin{aligned}
2qI_D&=2(1.6\times10^{-19}\ \mathrm{C})(0.465\ \mathrm{mA})=1.488\times10^{-22}\ \mathrm{A^2/Hz},\\
\frac{K_1I_D}{f}&=\frac{(3\times10^{-16}\ \mathrm{A})(0.465\ \mathrm{mA})}{f}=\frac{1.395\times10^{-19}\ \mathrm{A^2}}{f},\\
\frac{4kT}{R}&=\frac{1.66\times10^{-20}\ \mathrm{V\cdot C}}{20\ \mathrm{k\Omega}}=8.3\times10^{-25}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

电阻热噪声只有散粒噪声的 0.6 %。闪烁噪声在下述转角频率处等于散粒噪声：

$$
f_c=\frac{K_1I_D}{2qI_D}=\frac{K_1}{2q}=\frac{3\times10^{-16}\ \mathrm{A}}{3.2\times10^{-19}\ \mathrm{C}}=938\ \mathrm{Hz},
$$

它与偏置电流无关。

### 第 3 步 — 输出谱密度

$$
S_o(f)=\frac{R_{eq}^2\left[2qI_D\left(1+\dfrac{f_c}{f}\right)+\dfrac{4kT}{R}\right]}{1+(f/f_1)^2},\qquad f_1=\frac{1}{2\pi R_{eq}C}=\frac{1}{2\pi(55.8\ \Omega)(1\ \mathrm{nF})}=2.85\ \mathrm{MHz}.
$$

极点由二极管的小电阻决定，而不是由 20 kΩ 电阻决定。白噪声平台为 $R_{eq}^2(2qI_D+4kT/R)=(55.8\ \Omega)^2(1.496\times10^{-22}\ \mathrm{A^2/Hz})=4.65\times10^{-19}\ \mathrm{V^2/Hz}$，所以

$$
S_o(f)\approx\frac{4.65\times10^{-19}\left(1+938\ \mathrm{Hz}/f\right)}{1+(f/2.85\ \mathrm{MHz})^2}\ \mathrm{V^2/Hz}.
$$

### 第 4 步 — 与 SPICE 比较

网表取 $I_S=10^{-15}$ A，得到 0.695 V 的压降和 $I_D=0.4653$ mA，KF = $3\times10^{-16}$，AF = 1。噪声分析给出折算到 $v_o$ 的输出噪声。

```spice
* grsim-11-03 diode noise with 1000 pF
.model dd d is=1e-15 kf=3e-16 af=1
VCC vcc 0 10 ac 0
R vcc o 20k
D1 o 0 dd
C o 0 1000p
.noise v(o) VCC dec 50 1 10meg
.end
```

| $f$ | 手算（V²/Hz） | ngspice（V²/Hz） |
|---|---|---|
| 1 Hz | $4.34\times10^{-16}$ | $4.29\times10^{-16}$ |
| 100 Hz | $4.80\times10^{-18}$ | $4.75\times10^{-18}$ |
| 938 Hz | $9.19\times10^{-19}$ | $9.10\times10^{-19}$ |
| 10 kHz | $5.09\times10^{-19}$ | $5.04\times10^{-19}$ |
| 100 kHz | $4.69\times10^{-19}$ | $4.65\times10^{-19}$ |
| 1 MHz | $4.15\times10^{-19}$ | $4.11\times10^{-19}$ |
| 2.85 MHz | $2.30\times10^{-19}$ | $2.29\times10^{-19}$ |
| 10 MHz | $3.51\times10^{-20}$ | $3.51\times10^{-20}$ |

![输出噪声电压谱密度随频率（1 Hz 至 10 MHz）在双对数坐标上的变化：从 1 Hz 的 4.3×10⁻¹⁶ V²/Hz 以斜率 −1 下降到 938 Hz 转角，平台为 4.65×10⁻¹⁹ V²/Hz，2.85 MHz 以上以斜率 −2 下降到 10 MHz 的 3.5×10⁻²⁰ V²/Hz；ngspice 数据点落在手算曲线上](/q/grsim-11-03/solution-noise.zh.svg)

仿真与手算结果的偏差在 1 % 以内。微小差别来自 ngspice 在 27 °C 时 $V_T=25.85$ mV，使 $r_d$ 略小。在双对数坐标上，噪声谱有：

- 938 Hz 闪烁噪声转角以下斜率为 −1；
- $4.65\times10^{-19}\ \mathrm{V^2/Hz}$（0.68 nV/√Hz）的平坦散粒噪声平台；
- 由 $C$ 与 $r_d\parallel R$ 形成的 2.85 MHz 极点以上斜率为 −2。
