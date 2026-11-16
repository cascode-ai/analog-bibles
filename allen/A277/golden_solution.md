# Golden Solution - A277

## Reference answer

All curves are straight lines through 1 at $I_B = 10$ µA; with $x = I_B/10\ \mu$A:

| Quantity | Dependence | Slope (decades/decade) | at 100 µA | at 1000 µA |
|---|---|---|---|---|
| $A_v(0)$ | $\propto 1/I_B$ | −1 | 0.1 | 0.01 |
| GB | $\propto I_B^{1/2}$ | +1/2 | 3.16 | 10 |
| $P_{diss}$ | $\propto I_B$ | +1 | 10 | 100 |
| SR | $\propto I_B$ | +1 | 10 | 100 |
| $R_{out}$ | $\propto 1/I_B$ | −1 | 0.1 | 0.01 |
| $\lvert p_1\rvert$ | $\propto I_B^{3/2}$ | +3/2 | 31.6 | 1000 |
| $z$ | $\propto I_B^{1/2}$ | +1/2 | 3.16 | 10 |

Reasons: $g_m = \sqrt{2K'(W/L)I} \propto \sqrt{I_B}$ and $g_{ds} = \lambda I \propto I_B$; $A_v(0) = \dfrac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})} \propto \dfrac{I_B^{1/2}I_B^{1/2}}{I_BI_B}$; GB $= g_{m1}/C_c$; $P_{diss} = (V_{DD} - V_{SS})(k_1 + k_2 + \ldots)I_B$; SR $= k_1I_B/C_c$; $R_{out} = 1/(g_{ds6} + g_{ds7})$; $|p_1| = GB/A_v(0)$; $z = g_{m6}/C_c$. The GB and $z$ lines coincide, as do $P_{diss}$ and SR, and $A_v(0)$ and $R_{out}$; $|p_1|$ spans the whole vertical range (1 to 10³) and $A_v(0)$, $R_{out}$ end at 10⁻².

## Grading notes

+2: all seven slopes right (−1, +½, +1, +1, −1, +3/2, +½) with the normalized end values (0.01, 10, 100, 100, 0.01, 1000, 10). +1: one slope wrong. 0: three to five right. −2 (asserted as fact): $A_v(0)$ claimed to increase with current, GB ∝ $I_B$, or $|p_1|$ ∝ $I_B$ (ignoring the gain change), affecting several curves.
