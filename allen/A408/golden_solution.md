# Golden Solution - A408

## Reference answer

$t_p \approx 2.53\,\tau_L$.
- Amplifier output (normalized to $V_{OH}-V_{OL}$): $0.25(1-e^{-t/\tau_L})$. It reaches 0.05 at $t_1 = -\tau_L\ln(1-0.2) = 0.223\tau_L$.
- Latch: $t_2 = \tau_L\ln(0.5/0.05) = 2.303\tau_L$.
- Total: $2.526\tau_L$.

## Grading notes

+2: ≈ 2.53 $\tau_L$ (±3 %) with $t_1$ ≈ 0.22 $\tau_L$ and $t_2$ ≈ 2.30 $\tau_L$. +1: correct method with a slip in one term. 0: only one of the two delays right. −2 (asserted as fact): amplifier treated as instantaneous with no explanation, latch delay computed as $\tau_L\ln 2$, or the amplifier modelled as growing exponentially.
