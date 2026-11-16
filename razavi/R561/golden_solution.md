# Golden Solution - R561

## Reference answer

$\overline{V_{n,out}^2} \approx 3.2\times10^{-15}\ \mathrm{V^2/Hz}$, i.e. ≈ 56 nV/√Hz.
- Small-signal values: $g_{m3} = g_{m4} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(50\ \mu\mathrm{A})} = 0.62$ mS, $g_{m5} = 4.45g_{m4} = 2.76$ mS. $Q_1$, $Q_2$: $r = V_T/50\ \mu\mathrm{A} = 517$ Ω; $Q_3$: $r_3 = V_T/222\ \mu\mathrm{A} = 116$ Ω.
- The ideal op amp forces $v_X = v_Y$. Let $g$ be the common gate-driven current of $M_3$/$M_4$, $i_3$, $i_4$ their noise currents and $v_{R1}$ the noise of $R_1$: $(g + i_3)r = (g + i_4)(R_1 + r) + v_{R1}$, so $g = [i_3r - i_4(R_1 + r) - v_{R1}]/R_1$.
- $M_5$ carries $Kg + i_5$ ($K = 4.45$): $v_{out} = (R_2 + r_3)(Kg + i_5) + v_{R2}$.
- $\overline{v_{out}^2} = (R_2 + r_3)^2\left[K^2(r/R_1)^2\overline{i_3^2} + K^2((R_1 + r)/R_1)^2\overline{i_4^2} + K^2\,4kT/R_1 + \overline{i_5^2}\right] + 4kTR_2$, with $\overline{i_{3,4}^2} = 4kT\gamma g_{m4}$ and $\overline{i_5^2} = 4kT\gamma g_{m5}$.
- Contributions: $R_1$ 38.3, $M_4$ 37.4, $M_3$ 12.7, $M_5$ 11.7, $R_2$ 5.8 nV/√Hz; root-sum-square ≈ 56.5 nV/√Hz. (If the bipolar resistances were ignored the result would be ≈ 45 nV/√Hz.)

## Grading notes

+2: result in 50–62 nV/√Hz (equivalently 2.5–3.8×10⁻¹⁵ V²/Hz), with the noise of $M_3$, $M_4$ and $R_1$ reaching the output through the loop and multiplied by the mirror ratio ≈ 4.45, and $M_5$ and $R_2$ adding directly. +1: correct structure with one contribution mis-weighted, or the bipolar resistances dropped contrary to the question (≈ 45 nV/√Hz). 0: correct setup but an arithmetic error moving the result outside the range. -2 (asserted as fact): noise of $M_3$, $M_4$ or $R_1$ not multiplied by the mirror ratio, the loop ignored (PMOS gates treated as ac ground so that only $M_5$ and $R_2$ contribute), or a result off by more than a factor of 2 from a wrong transfer.
