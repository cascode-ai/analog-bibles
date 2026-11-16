# Golden Solution - A253

## Reference answer

- Two signal paths go from the gate of M6 (first-stage output, voltage $v_1$) to the output: the inverting path through the transistor ($-g_{m6}v_1$ into the output node) and a noninverting feedforward path through $C_c$ ($+sC_cv_1$). The short-circuit output current is $(sC_c - g_{m6})v_1$, so $V_{out} \propto (g_{m6} - sC_c)$: the two paths are equal and opposite at $s = g_{m6}/C_c$, a zero on the positive real axis, $z_1 = g_{m6}/C_c$.
- At low frequency the transistor path dominates; above $g_{m6}/C_c$ the capacitor path dominates and the gain stops falling (the zero raises the magnitude like an LHP zero) while the phase lags by up to an extra 90° (like an LHP pole), which degrades the phase margin.
- CMOS vs BJT: $z_1 = g_{m6}/C_c$ while GB $= g_{m1}/C_c$, so $z_1/GB = g_{m6}/g_{m1}$. For a given current a MOSFET has a much smaller transconductance ($g_m = 2I_D/V_{ov}$ with $V_{ov}$ of a few hundred mV, versus $I_C/V_T$ with $V_T = 26$ mV for a BJT), so in a CMOS op amp the zero lies close to GB (comparable to the output pole) and cannot be ignored, whereas in a BJT op amp the large $g_m$ of the second stage puts it far above GB.

## Grading notes

+2: two paths (inverting through M6, noninverting through $C_c$) cancelling at $s = g_{m6}/C_c$ in the RHP, with the magnitude/phase effect, and the CMOS-vs-BJT argument based on the smaller MOSFET $g_m$ (zero closer to GB). +1: both parts correct but the effect on magnitude and phase not described, or the $g_m$ comparison not quantified/explained. 0: only one part correct. −2 (asserted as fact): the zero attributed to the output capacitance or the mirror pole, the zero placed in the LHP, or the claim that CMOS has a larger $g_m$ than BJT for the same current.
