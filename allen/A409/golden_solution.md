# Golden Solution - A409

## Reference answer

$t_p \approx 2.12\,\tau_L$.
- Amplifier: $0.25(1-e^{-t_1/\tau_L}) = 0.1$ → $t_1 = -\tau_L\ln 0.6 = 0.511\tau_L$.
- Latch: $t_2 = \tau_L\ln(0.5/0.1) = 1.609\tau_L$.
- Total: $2.120\tau_L$.

## Grading notes

+2: ≈ 2.12 $\tau_L$ (±3 %) with both components. A typo that the following numbers do not use (e.g. a misplaced parenthesis in the latch-delay expression followed by the correct $\tau_L\ln 5$) is trivial and does not lower +2. +1: a slip in an intermediate step that leaves the total within tolerance. 0: one component right, or the right method with a slip that moves the total outside the tolerance. −2 (asserted as fact): same errors as for the other latch-input values (amplifier ignored, latch delay $\tau_L\ln 2$, wrong exponential sign).
