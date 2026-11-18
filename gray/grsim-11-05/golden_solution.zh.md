输入参考（含 $R_S$）：10 Hz 时 ≈ $7.0\times10^{-13}$ V²/Hz（0.84 µV/√Hz）；100 kHz 时 ≈ $1.74\times10^{-15}$ V²/Hz（42 nV/√Hz）；1 GHz 时 ≈ $2.0\times10^{-13}$ V²/Hz（0.45 µV/√Hz）。输出参考：10 Hz 时 ≈ $2.7\times10^{-10}$ V²/Hz（16 µV/√Hz）；100 kHz 时 ≈ $6.7\times10^{-13}$ V²/Hz（0.82 µV/√Hz）；1 GHz 时 ≈ $2.4\times10^{-15}$ V²/Hz（49 nV/√Hz）。

- $g_m = \sqrt{2k'(W/L)I_D} = 1.97$ mS（$V_{ov} = 0.10$ V），增益 $g_mR_L = 19.7$；$C_{gs} = \frac{2}{3}\cdot100\ \mu\text{m}^2\cdot4.31\text{ fF}/\mu\text{m}^2 = 0.29$ pF。
- 器件的栅极参考噪声：热噪声 $4kT\frac{2}{3g_m} = 5.6\times10^{-18}$ V²/Hz；闪烁噪声 $\frac{K_f}{WLC_{ox}f} = \frac{6.96\times10^{-12}}{f}$ V²/Hz。$R_S$：$4kT\cdot100\text{ k} = 1.66\times10^{-15}$ V²/Hz。$R_L$ 在输出端：$1.66\times10^{-16}$ V²/Hz。
- 10 Hz：闪烁噪声 $6.96\times10^{-13}$ 占主导；输入总噪声 $6.97\times10^{-13}$；输出为 ×388 再加上 $R_L$ → $2.71\times10^{-10}$。
- 100 kHz：$R_S$ 占主导；输入 $1.66\times10^{-15} + 7.0\times10^{-17} + 5.6\times10^{-18} + 4.3\times10^{-19} = 1.74\times10^{-15}$；输出 $6.73\times10^{-13}$。
- 1 GHz：$C_{gs}$ 与 $R_S$ 在 5.5 MHz 处形成一个极点（1 GHz 时 $|H|^2 = 3.1\times10^{-5}$），因此对噪声而言栅极相当于短路：输出 ≈ 漏极热噪声 $2.18\times10^{-15}$ + $R_L$ 的 $1.66\times10^{-16}$ + 其余小项 = $2.37\times10^{-15}$ V²/Hz；从 $v_i$ 起的增益仅为 0.109，因此输入参考值为 $2.37\times10^{-15}/0.109^2 = 2.0\times10^{-13}$ V²/Hz。（若忽略 $C_{gs}$，1 GHz 处的结果就像去掉闪烁噪声项的 100 kHz：输入 $1.67\times10^{-15}$，输出 $6.46\times10^{-13}$。）
- 在 level-1 SPICE 模型中（闪烁噪声为 $\text{KF}\cdot I_D^{AF}/(C_{ox}L^2f)$），题给模型对应 AF = 1，KF = $2k'K_f \approx 1.16\times10^{-27}$；由于 $L_d = 0$，不存在交叠电容（overlap capacitance）。
