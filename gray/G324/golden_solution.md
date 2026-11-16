# Golden Solution - G324

## Reference answer

$C_L ≈ 3.5$ pF ($2\sqrt{3}$ pF) using $\omega_u ≈ g_{m1}/C_L$; an exact two-pole calculation gives ≈ 4.2 pF.

- Poles: the dominant pole is at the output, $p_1 ≈ -1/(R_oC_L)$; the nondominant pole $p_2 ≈ -g_{m1A}/C_p$ is set by the cascode node and does not depend on $C_L$.
- Unity-gain frequency $\omega_u ≈ a_0|p_1| = g_{m1}/C_L$; PM ≈ 90° − arctan($\omega_u/|p_2|$).
- 45° with 2 pF: $g_{m1}/(2\text{ pF}) = |p_2|$. 60°: $g_{m1}/C_L = |p_2|\tan 30° = |p_2|/\sqrt{3}$ → $C_L = \sqrt{3} \times 2\text{ pF} = 3.46$ pF.
- Exact version (true crossover $\omega_c$ with $|T(j\omega_c)| = 1$): 45° needs $g_{m1}/C_L = \sqrt{2}|p_2|$, 60° needs $g_{m1}/C_L = \tfrac{2}{3}|p_2|$, so $C_L = 2\text{ pF} \times \sqrt{2}/(2/3) = 4.24$ pF.

## Grading notes

+2: the argument that $p_2$ is independent of $C_L$ while $\omega_u \propto 1/C_L$, and $C_L$ ≈ 3.5 pF (accept 3.3–3.6) or ≈ 4.2 pF (accept 4.1–4.4) with the criterion stated. +1: correct reasoning with a slip under 15%. 0: correct pole picture ($p_2$ fixed, $\omega_u \propto 1/C_L$) and $C_L$ increased, but the tangent or magnitude condition misapplied so that the value falls outside both accepted ranges. −2 (asserted as fact): $C_L$ reduced to increase the margin (including an inverted ratio such as 2 pF/√3 ≈ 1.15 pF or 2√2/3 pF ≈ 0.94 pF), $p_2$ assumed proportional to $1/C_L$ (so that the margin does not change), or the phase margin claimed to be independent of $C_L$.
