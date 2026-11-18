$\overline{v^2_{eq}}/\Delta f \approx 1.55 \times 10^{-18}$ V²/Hz，即 ≈ 1.25 nV/√Hz（$m_1 = 10$ 时为 ≈ 2.8 × 10⁻¹⁸ V²/Hz，1.67 nV/√Hz）。

- 新的 $g_{m1} = \sqrt{2(170\ \mu)(20 \times 133.3)(2.0\ \text{mA})} = 42.6$ mA/V（√2 × 30 mA/V）。
- 输出短路的差模半边电路（half circuit）：只有 $M_1$、$M_{11}$、$M_3$ 有贡献（$r_o \to \infty$ 时共源共栅管不贡献噪声；尾电流噪声为共模）：$\overline{i_o^2}/\Delta f = 4kT\tfrac23(g_{m1} + g_{m11} + g_{m3}) = 1.107 \times 10^{-20}(0.0426 + 0.048 + 0.036) = 1.40 \times 10^{-21}$ A²/Hz。
- 折算到半边电路输入端：$1.40 \times 10^{-21}/(0.0426)^2 = 7.7 \times 10^{-19}$ V²/Hz。
- 总噪声（两个互不相关的半边电路）：$\overline{v^2_{eq}}/\Delta f = 1.55 \times 10^{-18}$ V²/Hz → 1.25 nV/√Hz。
