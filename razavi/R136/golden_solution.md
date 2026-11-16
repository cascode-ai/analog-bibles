# Golden Solution - R136

## Reference answer

$|A_v|$ rises as in a triode-loaded stage, then shows a tall, narrow peak $g_{m1}(r_{O1}\|r_{O2})$ when $M_2$ saturates while $M_1$ is still saturated (both act as current sources), collapses as $M_1$ is forced into triode just beyond, and decays to zero at $V_b = 2.2$ V; zero above.

- Low $V_b$: $M_2$ in triode, $|A_v| = g_{m1}r_2$ with $r_2 = 1/[\beta_2(2.2 - V_b - V_{SD2})]$ increasing with $V_b$.
- $M_2$ saturates ($V_{out} = V_b + 0.8$ V) while $M_1$ is still saturated: $|A_v| = g_{m1}(r_{O1}\|r_{O2})$, the intrinsic-gain-level peak (unbounded for λ = 0). This occurs over a very narrow range of $V_b$, around the value where $\tfrac12\beta_2(2.2 - V_b)^2 = I_1$.
- Just beyond, $M_2$'s saturation current falls below $I_1$; $M_1$ must enter triode, $V_{out}$ drops to $V_{in} - 0.7$ V and below, and the gain collapses (low gain with $M_1$ in triode).
- $V_b \ge 2.2$ V: $M_2$ off, $A_v = 0$.

## Grading notes

+2: initial rise (triode load), a sharp high peak ≈ $g_{m1}(r_{O1}\|r_{O2})$ when both devices are saturated, rapid fall as $M_1$ enters triode, and zero for $V_b \ge 2.2$ V. +1: all four features present, but the both-saturated region drawn or described as a wide flat plateau without noting that it spans only a very narrow range of $V_b$; or the peak described but its value or the 2.2-V cutoff missing. 0: rise and fall described without the distinctive high peak. -2 (asserted as fact): gain monotonic decreasing, peak value $g_{m1}r_{on2}$ of a triode load for this case, or nonzero gain above 2.2 V.
