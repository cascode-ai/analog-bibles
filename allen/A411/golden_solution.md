# Golden Solution - A411

## Reference answer

$t_p \approx 2.53\,\tau_L$.
- Amplifier: $0.25(1-e^{-t_1/\tau_L}) = 0.2$ → $t_1 = -\tau_L\ln 0.2 = 1.609\tau_L$ (the amplifier output approaches its final 0.25 slowly).
- Latch: $t_2 = \tau_L\ln(0.5/0.2) = 0.916\tau_L$.
- Total: $2.526\tau_L$.

## Grading notes

+2: ≈ 2.53 $\tau_L$ (±3 %) with both components. +1: one slip. 0: one component right. −2 (asserted as fact): amplifier ignored, latch delay $\tau_L\ln 2$, or wrong exponential sign.
