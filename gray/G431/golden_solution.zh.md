$\overline{v^2_{eq}}/\Delta f \approx 2.67 \times 10^{-12}/f$ V²/Hz（f 的单位为 Hz），例如在 1 kHz 处 ≈ 2.7 × 10⁻¹⁵ V²/Hz（≈ 52 nV/√Hz）。

- 输出短路的差模半边电路（half circuit）：在 $r_o \to \infty$ 时，共源共栅管 $M_{1A}$、$M_{3A}$ 将其源极电流原样传递，不贡献噪声电流；尾电流管只注入共模噪声。输出噪声电流来自 $M_1$、$M_{11}$ 和 $M_3$：$\overline{i_o^2} = g_{m1}^2\overline{v_1^2} + g_{m11}^2\overline{v_{11}^2} + g_{m3}^2\overline{v_3^2}$。
- 折算到半边电路输入端：$\overline{v_{eqH}^2} = \overline{v_1^2} + (g_{m11}/g_{m1})^2\overline{v_{11}^2} + (g_{m3}/g_{m1})^2\overline{v_3^2}$。
- 栅面积：$M_1$：$10 \times 40 \times 0.3 = 120\ \mu\text{m}^2$；$M_{11}$：528 μm²；$M_3$：144 μm²。
- $\overline{v_1^2}/\Delta f = 4.8 \times 10^{-25}/(6.9 \times 10^{-15} \times 120\,f) = 5.80 \times 10^{-13}/f$；$\overline{v_{11}^2}/\Delta f = 8.3 \times 10^{-26}/(6.9 \times 10^{-15} \times 528\,f) = 2.28 \times 10^{-14}/f$；$\overline{v_3^2}/\Delta f = 4.83 \times 10^{-13}/f$。
- $\overline{v_{eqH}^2}/\Delta f = [5.80 + (1.6)^2(0.228) + (1.2)^2(4.83)] \times 10^{-13}/f = (5.80 + 0.58 + 6.96) \times 10^{-13}/f = 1.33 \times 10^{-12}/f$。
- 两个半边电路的噪声互不相关：$\overline{v_{eqT}^2}/\Delta f = 2 \times 1.33 \times 10^{-12}/f \approx 2.67 \times 10^{-12}/f$ V²/Hz。NMOS 电流源 $M_3$、$M_4$ 的贡献大于输入对管。
