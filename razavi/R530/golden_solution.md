# Golden Solution - R530

## Reference answer

Lower the dominant pole by a factor of 2, which halves the unity-gain frequency of the loop. Then $|\beta H|$ again reaches unity at the new output pole $\omega_{p2}/2$. With Miller compensation, this means doubling $C_C$.

- Doubling $C_L$ halves the output pole: $\omega'_{p2} \approx \omega_{p2}/2$.
- The compensated dominant pole must satisfy $\omega'_{p1} \approx \omega'_{p2}/(\beta A_0)$, so it must be halved.
- With Miller compensation, $\omega_{p1} \propto 1/C_C$ and $\omega_T = \beta g_{m1}/C_C$, so doubling $C_C$ does this. $\omega_{p2} \approx g_{m2}/C_L$ is barely affected by $C_C$ once $C_C$ is much larger than the first-stage node capacitance.
- If a series nulling resistor is used, doubling $C_C$ also halves its zero frequency, so to first order the zero keeps tracking the halved output pole (only a fine retune may be needed).
- The price is half the closed-loop bandwidth. Restoring $\omega_{p2}$ by doubling the output-stage $g_m$ (and power) would avoid that, but it changes the op amp rather than its compensation.

## Grading notes

+2: reduce the dominant pole (unity-gain frequency) by 2 times, e.g., double $C_C$ in Miller compensation, so that $|\beta H| = 1$ at $\omega_{p2}/2$. Noting the halved bandwidth is a plus. A side remark that a nulling-resistor zero should be rechecked or retuned after the change is acceptable caution, not a false claim. +1: only an alternative fix (double the output-stage $g_m$ to restore $\omega_{p2}$, or re-place a compensation zero onto the new output pole) without lowering the dominant pole, or "increase $C_C$" without the factor. 0: a vague "make the compensation stronger" without saying what changes. -2 (asserted as fact): decrease $C_C$, raise the dominant pole, or "no change needed".
