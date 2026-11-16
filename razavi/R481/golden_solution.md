# Golden Solution - R481

## Reference answer

$C_{Y,max} \approx 0.37$ pF (PM = 55° at $C_Y$ = 100 fF).
- Loop gain (loop broken at X): $T(s) = \dfrac{10}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}$, with poles near $1/R_FC_A$ ≈ 10⁹, $1/R_DC_X$ = 10¹⁰ and $g_{m2}/C_Y$ rad/s.
- Increasing $C_Y$ brings the output pole $g_{m2}/C_Y$ down toward the crossover (≈ 7.5×10⁹ rad/s). PM = 45° is reached at $C_Y \approx 369$ fF ($g_{m2}/C_Y \approx 2.7\times10^{10}$ rad/s, $\omega_u \approx 7.55\times10^9$ rad/s). The independent-pole approximation gives ≈ 357 fF.
- (The PM keeps falling, to a minimum of about 19° near 5 pF, and would recover to 45° only for an impractically large $C_Y$ ≈ 61 pF, where the output pole becomes dominant. That range is irrelevant here.)

## Grading notes

+2: $C_{Y,max}$ = 0.33–0.40 pF with a correct loop-gain model. +1: correct method, value within 0.30–0.45 pF from a coarser approximation. 0: right setup with a slip outside that range. -2 (asserted as fact): PM increasing with $C_Y$ (no maximum), $C_{Y,max}$ below 0.2 pF or above 0.6 pF from a wrong pole expression, or the output pole taken as $1/(R_FC_Y)$. Choosing the high-capacitance 45° crossing ($C_Y \approx 60$ pF) as the maximum is also −2, even with a correct loop-gain model: for 0.37 pF < $C_Y$ < 60 pF the phase margin is below 45° (≈ 19° at 5 pF), and above ≈ 60 pF it only increases, so ≈ 60 pF is the lower edge of a second, impractical range, not a maximum.
