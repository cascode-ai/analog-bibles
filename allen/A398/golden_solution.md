# Golden Solution - A398

## Reference answer

The NMOS latch is faster.
- The latch regenerates as $e^{t/\tau_L}$ with $\tau_L \approx C/g_m$ (loop gain $g_mR \gg 1$).
- For the same W/L and current, $g_m = \sqrt{2K'(W/L)I}$ is larger for the n-channel devices by $\sqrt{K'_N/K'_P} = \sqrt{110/50} \approx 1.48$ (higher electron mobility), while the node capacitances (gate and junction capacitances of equal-size devices) are about the same.
- So $\tau_L$ of the NMOS latch is ≈ 1.5 times smaller (its small-signal loop gain $g_mR$ is also larger), and it regenerates faster.

## Grading notes

+2: NMOS latch faster because of the larger $g_m$ (higher $K'$/mobility) for equal W/L and current, hence smaller $\tau_L = C/g_m$; the ratio ≈ 1.5 is a plus. +1: correct choice with a vague reason (e.g., "electrons are faster") without linking to $g_m$ or $\tau_L$. 0: correct choice, no reason. −2 (asserted as fact): PMOS latch claimed faster, or the two claimed equal.
