# Golden Solution - G317

## Reference answer

$C ≈ 1.1$ pF using the usual design rule (loop gain falls to unity at $|p_2|$); a direct numerical calculation of the 45° point with the exact two-pole transfer function gives $C ≈ 0.76$ pF (with $C = 1.1$ pF the actual margin is ≈ 53°).

- $a_0 = g_{m1}R_1\,g_{m6}R_2 = 100 \times 200 = 2 \times 10^4$; loop gain $T_0 = 0.5a_0 = 10^4$.
- $p_1 ≈ -1/(g_{m6}R_1R_2C)$, so the loop crossover is $\omega_c ≈ T_0|p_1| = 0.5\,g_{m1}/C$.
- $p_2 ≈ -g_{m6}C/[C_1C_2 + C(C_1 + C_2)]$.
- 45°: $0.5\,g_{m1}/C = |p_2|$ → $g_{m6}C^2 = 0.5g_{m1}[C_1C_2 + C(C_1+C_2)]$ → $2C^2 - 2.025C - 0.2 = 0$ (pF, mA/V) → $C = 1.10$ pF. With $p_2 ≈ -g_{m6}/(C_1+C_2)$: $C = 0.5 g_{m1}(C_1+C_2)/g_{m6} = 1.01$ pF.
- Then $|p_2|$ ≈ 230 Mrad/s and the crossover ≈ 230 Mrad/s (≈ 36 MHz nominal).
- Exact check using $D(s) = 1 + s[(C_2+C)R_2 + (C_1+C)R_1 + g_{m6}R_1R_2C] + s^2R_1R_2(C_1C_2 + CC_1 + CC_2)$: PM = 45.0° at $C = 0.76$ pF (crossover 36 MHz); $C$ = 1.0 pF gives ≈ 51°.

## Grading notes

+2: $C$ in the range 0.75–1.15 pF with a consistent method (design rule $T_0|p_1| = |p_2|$ → ≈ 1.0–1.1 pF, or exact two-pole evaluation → ≈ 0.76 pF), including the factor $f = 0.5$. +1: correct method with a slip below 20%. 0: $f = 0.5$ ignored (unity-gain design, giving ≈ 2.1 pF) with otherwise correct work. −2 (asserted as fact): $p_2$ taken as $1/(R_2C_2)$ or $g_{m1}/C_2$, Miller pole without the gain factor, or a value of $C$ in the tens of pF from a wrong formula.
