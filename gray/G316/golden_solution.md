# Golden Solution - G316

## Reference answer

$C ≈ 5.7$ pF with the usual approximation $\omega_u ≈ g_{m1}/C$; an exact two-pole crossover calculation gives ≈ 5.0 pF.

- Poles: $p_1 ≈ -1/(g_{m6}R_1R_2C)$, $p_2 ≈ -g_{m6}C/[C_1C_2 + C(C_1+C_2)] ≈ -g_{m6}/(C_1 + C_2)$.
- With the loop gain falling at −20 dB/dec above $|p_1|$, the unity-gain frequency is $\omega_u ≈ a_0|p_1| = g_{m1}/C$.
- 60° PM: $\arctan(\omega_u/|p_2|) = 30°$ → $|p_2| = \sqrt{3}\,\omega_u$:
$\dfrac{g_{m6}}{C_1 + C_2} = \sqrt{3}\,\dfrac{g_{m1}}{C}$ → $C = \sqrt{3}\,\dfrac{g_{m1}}{g_{m6}}(C_1 + C_2) = 1.732 \times 0.645 \times 5.12\text{ pF} = 5.7$ pF (5.6 pF if $C_1$ is neglected; 5.8 pF with the full expression for $p_2$).
- Exact two-pole version: crossover at $\omega_c = |p_2|/\sqrt{3}$ with $|T(j\omega_c)| = (g_{m1}/C\omega_c)/\sqrt{4/3} = 1$ → $g_{m1}/C = \tfrac{2}{3}|p_2|$ → $C = 1.5\,(g_{m1}/g_{m6})(C_1+C_2) ≈ 5.0$ pF.
- (For a 45° margin the same rule gives 3.3 pF, so 60° costs about 70% more capacitance.)

## Grading notes

+2: $C$ ≈ 5.6–5.8 pF from $|p_2| = \sqrt3\,g_{m1}/C$, or ≈ 5.0 pF from an exact crossover calculation, with the method stated (accept 4.8–6.0 pF). +1: correct method with a slip under 15%, or a correct result with $C_1$ handled inconsistently. 0: correct pole expressions but the 60° condition misapplied (e.g. $|p_2| = 2\omega_u$, giving ≈ 6.6 pF) with otherwise sound work. −2 (asserted as fact): the 45° result (≈ 3.2–3.3 pF) given as the 60° answer, $p_2$ taken as $g_{m1}/C_2$ or $1/(R_2C_2)$, or $C$ decreasing with a larger required phase margin.
