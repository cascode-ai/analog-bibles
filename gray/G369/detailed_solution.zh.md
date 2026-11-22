# 详细步骤 - G369

当 $R_S=200$ kΩ 时，噪声系数由流经源电阻的 $Q_1$ 基极电流噪声决定。闪烁噪声使该电流噪声在低频按 $1/f$ 增大。先求出使点噪声系数为 20 dB 的电流噪声谱密度，再解出频率。

### 第 1 步 — 该级的噪声源

由 $I_{EE}\approx9.3\ \mathrm V/100.25\ \mathrm{k\Omega}=92.8\ \mu$A，每个晶体管有 $I_C=46.4\ \mu$A、$I_B=0.464\ \mu$A，因此基极白噪声（散粒噪声）为 $2qI_B=1.48\times10^{-25}$ A²/Hz。等效输入噪声电压（两半电路及其发射极电阻，加上折算过来的负载）为 $\overline{v_i^2}/\Delta f\approx4kT(2.07\ \mathrm{k\Omega})=3.44\times10^{-17}$ V²/Hz。计入闪烁噪声后，输入电流噪声源变为

$$
\frac{\overline{i_i^2}}{\Delta f}=2qI_B\left(1+\frac{f_a}{f}\right),\qquad f_a=10\ \mathrm{kHz}.
$$

$Q_2$ 的基极电流噪声只经 $r_{b2}$ 流入接地的基极，经发射极电阻通路到达输出的闪烁分量也可以忽略，因此只有流经 $R_S$ 的 $Q_1$ 基极电流噪声起作用。

### 第 2 步 — NF = 20 dB 所需的电流噪声

NF = 20 dB 即 $F=100$。由

$$
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}=100,
$$

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{99\cdot4kTR_S-\overline{v_i^2}/\Delta f}{R_S^2}
=\frac{99(1.66\times10^{-20}\ \mathrm{V\cdot C})(200\ \mathrm{k\Omega})-3.44\times10^{-17}\ \mathrm{V^2/Hz}}{(200\ \mathrm{k\Omega})^2}
=8.22\times10^{-24}\ \mathrm{A^2/Hz}.
$$

电压噪声源只占分子的 0.01%。

### 第 3 步 — 频率

$$
1+\frac{f_a}{f}=\frac{8.22\times10^{-24}\ \mathrm{A^2/Hz}}{1.48\times10^{-25}\ \mathrm{A^2/Hz}}=55.4
\quad\Longrightarrow\quad
f=\frac{10\ \mathrm{kHz}}{54.4}\approx184\ \mathrm{Hz}.
$$

低于约 180 Hz 时点噪声系数超过 20 dB。作为对比，在远高于 $f_a$ 的频率下，同一电路在该源电阻下的 $F=2.8$（4.5 dB），因此在 180 Hz 处基极电流闪烁噪声使噪声系数升高 15 dB 以上。
