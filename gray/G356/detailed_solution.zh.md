# 详细步骤 - G356

用等效输入噪声源表示该差分对（与 $Q_1$ 基极串联的 $\overline{v^2}$，以及每个基极到地的 $\overline{i^2}$），加上两个源电阻的热噪声，并把全部噪声折算为与 $v_s$ 串联的单个电压。每个基极电流噪声源都流经各自的 100 MΩ 源电阻，从而变成较大的噪声电压。

### 第 1 步 — 超 β 差分对的噪声源

每个晶体管工作在 $I_C=I_{EE}/2=0.5\ \mu$A，因此 $1/2g_m=26$ kΩ，$I_B=I_C/\beta=0.1$ nA。两个器件的电压噪声源合并为一个与 $Q_1$ 基极串联的噪声源，每个基极各有一个电流噪声源：

$$
\frac{\overline{v^2}}{\Delta f}=2\cdot4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(53\ \mathrm{k\Omega})=8.8\times10^{-16}\ \mathrm{V^2/Hz},\qquad
\frac{\overline{i^2}}{\Delta f}\approx2qI_B=3.2\times10^{-29}\ \mathrm{A^2/Hz}.
$$

### 第 2 步 — 把全部噪声源折算到 $v_s$

输出响应两个基极电压之差，因此出现在任一基极上的噪声电压都等效于与 $v_s$ 串联的同样大小的电压（对于不相关噪声，符号无关紧要）。每个基极都串联 $R_S$，且基极输入电阻远大于 $R_S$，因此电流噪声源全部流经 $R_S$。互不相关的贡献为：

- 每个源电阻的热噪声 $4kTR_S$，共两份；
- 每个基极电流噪声源流经各自的 $R_S$，在每个基极上产生 $\overline{i^2}R_S^2$，共两份；
- 电压噪声源 $\overline{v^2}$。

$$
\frac{\overline{v_{eq}^2}}{\Delta f}=2\cdot4kTR_S+2\,\frac{\overline{i^2}}{\Delta f}R_S^2+\frac{\overline{v^2}}{\Delta f}.
$$

### 第 3 步 — 数值

| 贡献 | 表达式 | 数值 (V²/Hz) |
|---|---|---|
| 源电阻 | $2(1.66\times10^{-20}\ \mathrm{V\cdot C})(100\ \mathrm{M\Omega})$ | $3.32\times10^{-12}$ |
| $R_S$ 中的基极电流噪声 | $2(3.2\times10^{-29}\ \mathrm{A^2/Hz})(100\ \mathrm{M\Omega})^2$ | $6.4\times10^{-13}$ |
| 本级电压噪声源 | $\overline{v^2}/\Delta f$ | $8.8\times10^{-16}$ |
| 合计 | | $3.96\times10^{-12}$ |

### 第 4 步 — 1 kHz 内的总噪声

谱密度为白噪声，因此

$$
\overline{v_{eq}^2}=(3.96\times10^{-12}\ \mathrm{V^2/Hz})(10^3\ \mathrm{Hz})=3.96\times10^{-9}\ \mathrm{V^2},\qquad
v_{eq,\mathrm{rms}}=62.9\ \mu\mathrm V .
$$

源电阻自身的热噪声约占总量的 84%，流经源电阻的基极电流噪声约占 16%；在这样的源阻抗下，本级电压噪声源可以忽略。因此超 β 差分对只在不可避免的信号源噪声之上增加约 0.8 dB。
