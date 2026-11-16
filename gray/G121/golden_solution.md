# Golden Solution - G121

## Reference answer

$A_v^+ \approx 0.861$ (at $V_i = +0.5$ V, where $V_o \approx -0.689$ V).
- Transfer characteristic: $V_i = V_o + V_{t0} + \gamma\left(\sqrt{V_o + V_{DD} + 2\phi_f} - \sqrt{2\phi_f}\right) + V_{ov1}$, with $V_{ov1} = \sqrt{2I_Q/(k'(W/L)_1)} = 0.1$ V constant ($R_L \to \infty$, so $I_{d1} = I_Q$).
- At $V_i = 0.5$ V: $V_o + 0.5\sqrt{V_o + 3.1} = 0.5 - 0.8 + 0.5\sqrt{0.6} = 0.0873$ → $\sqrt{V_o + 3.1} = 1.5527$, $V_o = -0.689$ V.
- Slope: $dV_o/dV_i = 1/\left(1 + \gamma/(2\sqrt{V_o + V_{DD} + 2\phi_f})\right) = 1/(1 + 0.25/1.5527) = 1/1.161 = 0.861$.

## Grading notes

+2: $A_v^+$ = 0.861 ± 0.003, with $V_o \approx -0.69$ V at the positive input peak and the body-effect slope formula $1/(1+\chi)$. +1: correct method, slope within ±0.006 because of a small error in $V_o$. 0: correct formula but evaluated at the wrong operating point (e.g. at $V_o = +0.5$ V). −2 (asserted as fact): slope of 1 (body effect ignored), $\phi_f$ used in place of $2\phi_f$ with a large error, slope > 1, or a finite-$R_L$ formula with an invented load.
