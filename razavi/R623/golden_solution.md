# Golden Solution - R623

## Reference answer

$|V_{OS,in}| = \Delta V_{TH}\,\dfrac{g_{m3}r_{O3}}{1+g_{m3}r_{O3}}\cdot\dfrac{1}{g_{m1}r_{O1}} \approx \dfrac{\Delta V_{TH}}{g_{m1}r_{O1}}$, independent of $R_D$. As $R_D \to \infty$ the input-referred offset stays the same; only the gain and the output offset grow, the output offset approaching ≈ $g_{m3}r_{O3}\Delta V_{TH}$.
- With an ideal tail source, $V_{out} = 0$ requires $I_{D3} = I_{D4} = I_{SS}/2$, so both drains sit at $V_{DD} - R_DI_{SS}/2$ and $R_D$ drops out.
- $M_3$ and $M_4$ then carry equal currents with equal gate and drain voltages but thresholds differing by $\Delta V_{TH}$, so their sources (the drains of $M_1$, $M_2$) differ by $\Delta V_S = \Delta V_{TH}\,g_{m3}/(g_{m3} + 1/r_{O3})$.
- $M_1$ and $M_2$ must carry equal currents while their drain–source voltages differ by $\Delta V_S$; with $\lambda \neq 0$ this needs $\Delta V_{GS} = \Delta V_S/(g_{m1}r_{O1})$, which is the input offset. (With λ = 0 the offset would be zero.)
- Small-signal check: a source $v$ in series with the gate of $M_4$ gives an output current $g_{m4}r_{O4}v/D$, the input gives $g_{m2}r_{O2}(1+g_{m4}r_{O4})v_{in}/D$, with $D = r_{O2} + r_{O4} + g_{m4}r_{O2}r_{O4} + R_D$ common to both; the ratio does not contain $R_D$. As $R_D \to \infty$: $A_v \to g_{m1}r_{O1}(1+g_{m3}r_{O3})$, output offset $\to g_{m3}r_{O3}\Delta V_{TH}$. (A large-signal numerical solution with λ = 0.1 V⁻¹ confirms the formula and its independence of $R_D$.)
- (In practice $R_D \to \infty$ with an ideal tail source leaves the output common-mode level undefined; common-mode feedback would be needed.)

## Grading notes

+2: $V_{OS,in}$ ≈ $\Delta V_{TH}/(g_{m1}r_{O1})$ (the exact factor $g_{m3}r_{O3}/(1+g_{m3}r_{O3})$ optional), and the observation that it does not depend on $R_D$, so it is unchanged as $R_D \to \infty$ (output offset and gain grow, output offset → ≈ $g_{m3}r_{O3}\Delta V_{TH}$). +1: correct offset, with the $R_D \to \infty$ part missing or vague but not wrong. 0: correct mechanism (cascode mismatch shifts the drain of the input device by ≈ $\Delta V_{TH}$ and λ turns it into a current error) with an expression off by a factor, or an RD-dependent expression presented with uncertainty. -2 (asserted as fact): zero offset because cascodes "cannot change the current", offset ≈ $\Delta V_{TH}$ or $\Delta V_{TH}g_{m3}/g_{m1}$, or an offset claimed to vanish or diverge as $R_D \to \infty$.
