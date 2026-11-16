# Golden Solution - R067

## Reference answer

$A_v = -g_mR_D \approx -10.35$.

- $g_m = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18$ mS (overdrive 0.386 V, $V_{in} = 1.086$ V).
- $V_{out} = 3 - 2 = 1$ V > 0.386 V, so $M_1$ is indeed saturated.
- $A_v = -5.18\ \mathrm{mS} \times 2\ \mathrm{k\Omega} \approx -10.35$.

## Grading notes

+2: −10.35 within ±3%. +1: magnitude right but the sign (inversion) omitted, or one slip. 0: right formula with a wrong $g_m$ value from a slip. -2 (asserted as fact): $g_m$ from a wrong formula (e.g., $\mu_nC_{ox}(W/L)I_D$ or $2I_D/V_{GS}$), or the gain taken as $R_D/r_O$-type expressions.
