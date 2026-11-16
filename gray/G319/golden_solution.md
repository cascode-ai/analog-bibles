# Golden Solution - G319

## Reference answer

$C ≈ 0.32$ pF using the usual design rule (loop gain unity at $|p_2|$); the exact two-pole 45° point is at $C ≈ 0.25$ pF. Either is about one third of the Miller-compensated value for the same specification.

- Transfer function with the current-buffer model: $\dfrac{v_o}{i_s} = \dfrac{g_{m6}R_1R_2}{1 + s[R_1C_1 + R_2(C + C_2) + g_{m6}R_1R_2C] + s^2R_1R_2C_1(C_2 + C)}$ (no zero).
- Poles: $p_1 ≈ -1/(g_{m6}R_1R_2C)$; $p_2 ≈ -\dfrac{g_{m6}}{C + C_2}\cdot\dfrac{C}{C_1}$ (much larger than in Miller compensation because $C$ does not load node ①).
- Loop crossover $\omega_c ≈ T_0|p_1| = 0.5\,g_{m1}/C$ ($T_0 = 0.5 \times 2 \times 10^4$).
- 45°: $0.5\,g_{m1}/C = g_{m6}C/[(C + C_2)C_1]$ → $g_{m6}C^2 = 0.5\,g_{m1}C_1(C + C_2)$ → $2C^2 - 0.025C - 0.2 = 0$ (pF, mA/V) → $C = 0.32$ pF; then $|p_2| ≈ 7.7 \times 10^8$ rad/s.
- Exact evaluation of the phase margin with the full quadratic denominator: 54° at $C$ = 0.32 pF; 45° at $C$ = 0.25 pF (crossover ≈ 104 MHz).

## Grading notes

+2: correct $p_2$ for the current-buffer scheme ($\propto C/C_1$) and $C$ in 0.24–0.34 pF with the method stated. +1: correct method with a slip below 20%. 0: correct method but $f = 0.5$ ignored (≈ 0.45 pF), or the Miller expression for $p_2$ reused (≈ 1.1 pF) with sound working otherwise. −2 (asserted as fact): a zero kept in the transfer function, $p_2 ≈ g_{m6}/C_2$ independent of $C$ leading to a several-pF answer asserted as the CG result, or a negative/impossible $C$.
