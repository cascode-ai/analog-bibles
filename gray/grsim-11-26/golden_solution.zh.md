100 Hz 时 ≈ 0.72 µV/√Hz（$5.15\times10^{-13}$ V²/Hz），1 kHz 时 ≈ 0.23 µV/√Hz（$5.16\times10^{-14}$ V²/Hz），10 kHz 时 ≈ 72 nV/√Hz（$5.18\times10^{-15}$ V²/Hz）；在这三个频率处闪烁噪声都占主导（白噪声底 ≈ 5.2 nV/√Hz，1/f 转折频率 ≈ 2 MHz）。

- $L_{\text{eff}} = 1 - 0.18 - 0.1 = 0.72\ \mu$m。每个输入管和负载管流过 100 µA。
- $g_{m1} = \sqrt{2\cdot64.7\ \mu\cdot(150/0.72)\cdot100\ \mu} = 1.64$ mS；$g_{m3} = \sqrt{2\cdot194\ \mu\cdot(50/0.72)\cdot100\ \mu} = 1.64$ mS（二者相等：3 倍的迁移率之比抵消了 3 倍的宽度之比）。
- 输入参考：$\overline{v^2} = 2\overline{v_1^2} + 2(g_{m3}/g_{m1})^2\overline{v_3^2}$。闪烁噪声：$\frac{2K_f}{C_{ox}f}\left[\frac{1}{150\cdot0.72} + \frac{1}{50\cdot0.72}\right]\frac{1}{\mu\text{m}^2} = \frac{1.29\times10^{-11} + 3.86\times10^{-11}}{f} = \frac{5.15\times10^{-11}}{f}$ V²/Hz（由于负载管面积较小，其贡献是输入对的 3 倍）。热噪声：$2\cdot4kT\frac{2}{3g_{m1}}(1 + g_{m3}/g_{m1}) = 2.7\times10^{-17}$ V²/Hz。
- 第二级（$M_6$、$M_7$）的噪声要除以第一级增益 ≈ 197（$r_{o2}\parallel r_{o4} = 180\text{ k}\parallel360\text{ k}$）：可以忽略；$M_5$ 的噪声为共模噪声；$M_9$（与 5 pF 串联的线性区电阻）在这些频率下可以忽略。
- SPICE level-1 的闪烁噪声形式 $\text{KF}\cdot I_D^{AF}/(C_{ox}L_{\text{eff}}^2f)$ 在 AF = 1 时与该模型一致，对应 KF = $2k'K_f$（n 管 ≈ $1.16\times10^{-27}$，p 管 $3.9\times10^{-28}$）。
