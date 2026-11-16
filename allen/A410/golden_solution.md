# Golden Solution - A410

## Reference answer

$t_p \approx 2.12\,\tau_L$.
- Amplifier: $0.25(1-e^{-t_1/\tau_L}) = 0.15$ → $t_1 = -\tau_L\ln 0.4 = 0.916\tau_L$.
- Latch: $t_2 = \tau_L\ln(0.5/0.15) = 1.204\tau_L$.
- Total: $2.120\tau_L$ (the same as for $\Delta V_i = 0.1$; the optimum lies between).

## Grading notes

+2: ≈ 2.12 $\tau_L$ (±3 %) with both components. +1: one slip. 0: one component right. −2 (asserted as fact): amplifier ignored, latch delay $\tau_L\ln 2$, or wrong exponential sign.
