# 详细步骤 - G192

用测试电压 $v_x$ 驱动源极，栅极经 $R_S$ 接地，漏极处于交流地。由于 $\gamma=0$，不存在 $g_{mb}$ 受控源，因此只有 $g_m$、$C_{gs}$ 和 $R_S$ 三个元件。所得阻抗有一个零点和一个极点；由于电容值未给出，其幅值曲线按假设的 $C_{gs}$ 绘制。

### 第 1 步 — 输出阻抗

$C_{gs}$ 与 $R_S$ 对测试电压分压，故 $v_{gs}=v_g-v_x=-v_x/(1+sR_SC_{gs})$。在源极列 KCL，沟道电流 $g_mv_{gs}$ 从漏极流向源极，$sC_{gs}v_{gs}$ 从栅极流向源极：

$$
i_x=-(g_m+sC_{gs})v_{gs}=v_x\,\frac{g_m+sC_{gs}}{1+sR_SC_{gs}},
\qquad
z_o(s)=\frac{v_x}{i_x}=\frac1{g_m}\cdot\frac{1+sR_SC_{gs}}{1+sC_{gs}/g_m}.
$$

### 第 2 步 — 平台电平、转折频率与斜率

- 低频：$z_o=1/g_m=1/(0.3\ \mathrm{mA/V})=3.33$ kΩ（70.5 dBΩ）。
- 零点：$\omega_z=1/(R_SC_{gs})$，即 $f_z=\dfrac1{2\pi(1\ \mathrm{M\Omega})C_{gs}}=\dfrac{0.159}{C_{gs}[\mathrm{pF}]}$ MHz。
- 极点：$\omega_p=g_m/C_{gs}$（$C_{gs}$ 占主导时约等于 $\omega_T$），即 $f_p=\dfrac{0.3\ \mathrm{mA/V}}{2\pi C_{gs}}=\dfrac{47.7}{C_{gs}[\mathrm{pF}]}$ MHz。
- 高频：$z_o\to(1/g_m)(R_SC_{gs})/(C_{gs}/g_m)=R_S=1$ MΩ（120 dBΩ）。

由于 $R_S\gg1/g_m$，零点比极点低 $\omega_p/\omega_z=g_mR_S=300$ 倍，因此 $|z_o|$ 在二者之间以 +20 dB/十倍频上升：阻抗呈感性（inductive）。把导纳拆分为 $Y_o=1/R_S+(g_m-1/R_S)/(1+sR_SC_{gs})$，得到等效电路 $R_2\parallel(R_1+sL)$，其中

$$
R_2=R_S=1\ \mathrm{M\Omega},\quad R_1=\frac1{g_m-1/R_S}=3.34\ \mathrm{k\Omega},\quad
L=\frac{R_SC_{gs}}{g_m-1/R_S}=(3.34\times10^{9}\ \Omega^2)\,C_{gs}\approx\frac{R_SC_{gs}}{g_m}.
$$

### 第 3 步 — 示例 $C_{gs}$ 下的幅值曲线

以 $C_{gs}=0.1$ pF 为例：$f_z=1.6$ MHz，$f_p=477$ MHz，$L=0.33$ mH。

![假设 Cgs = 0.1 pF 时的输出阻抗幅值：平坦地保持在 3.33 kΩ，从 1.6 MHz 到 477 MHz 以 +20 dB/十倍频上升，在 10 GHz 以内平坦地保持在 1 MΩ](/q/G192/solution-curves.zh.svg)

$|z_o|$ 在约 1 MHz 以下平坦地保持在 3.33 kΩ，在 1.6 MHz 的零点与 477 MHz 的极点之间以 +20 dB/十倍频上升（阻抗在同样的 2.5 个十倍频内增大 300 倍），并从约 1 GHz 到 10 GHz 平坦地保持在 1 MΩ。两个转角都是平滑的：在每个转折点，幅值与渐近线相差 $\sqrt2$ 倍（3 dB）。若 $C_{gs}$ 取其他值，整条曲线按 $1/C_{gs}$ 成比例地水平平移，而两个平台电平以及比值 $f_p/f_z=300$ 保持不变。
