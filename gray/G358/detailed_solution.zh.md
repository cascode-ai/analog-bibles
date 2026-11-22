# 详细步骤 - G358

利用 MOS 差分对的等效输入噪声源，加上两个 100 MΩ 源电阻的热噪声以及流经它们的栅极电流噪声，把全部噪声折算为与 $v_s$ 串联的单个电压，然后在 1 kHz 内对白噪声谱密度积分。

### 第 1 步 — MOS 差分对的噪声源

每个器件贡献折算到其栅极的沟道噪声 $4kT\cdot2/(3g_m)$，两者合并为与第一个栅极串联的单个噪声源。每个栅极保留其漏电流的散粒噪声：

$$
\frac{\overline{v^2}}{\Delta f}=2\cdot4kT\,\frac{2}{3g_m}=4kT(2.67\ \mathrm{k\Omega})=4.4\times10^{-17}\ \mathrm{V^2/Hz},\qquad
\frac{\overline{i^2}}{\Delta f}=2qI_G=3.2\times10^{-35}\ \mathrm{A^2/Hz}.
$$

### 第 2 步 — 把全部噪声源折算到 $v_s$

该级响应两个栅极电压之差，因此任一栅极上互不相关的噪声电压都按均方值计入与 $v_s$ 串联的等效噪声。栅极几乎不取电流，因此每个电流噪声源全部流经各自的 $R_S$：

$$
\frac{\overline{v_{eq}^2}}{\Delta f}=2\cdot4kTR_S+2\,\frac{\overline{i^2}}{\Delta f}R_S^2+\frac{\overline{v^2}}{\Delta f}.
$$

| 贡献 | 表达式 | 数值 (V²/Hz) |
|---|---|---|
| 源电阻 | $2(1.66\times10^{-20}\ \mathrm{V\cdot C})(100\ \mathrm{M\Omega})$ | $3.32\times10^{-12}$ |
| $R_S$ 中的栅极电流噪声 | $2(3.2\times10^{-35}\ \mathrm{A^2/Hz})(100\ \mathrm{M\Omega})^2$ | $6.4\times10^{-19}$ |
| 本级电压噪声源 | $\overline{v^2}/\Delta f$ | $4.4\times10^{-17}$ |
| 合计 | | $3.32\times10^{-12}$ |

### 第 3 步 — 1 kHz 内的总噪声

$$
\overline{v_{eq}^2}=(3.32\times10^{-12}\ \mathrm{V^2/Hz})(10^3\ \mathrm{Hz})=3.32\times10^{-9}\ \mathrm{V^2},\qquad
v_{eq,\mathrm{rms}}=57.6\ \mu\mathrm V .
$$

结果基本上就是两个 100 MΩ 源电阻的热噪声；放大器在均方值上只增加 0.0013%。作为对比，相同条件下超 β 双极型差分对约为 63 µV，因为其 0.1 nA 基极电流噪声流经 100 MΩ，使信号源噪声增加约 16%。对于极高的源阻抗，栅极电流可忽略的 MOS 输入级是更安静的选择。
