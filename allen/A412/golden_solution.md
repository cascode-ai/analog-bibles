# Golden Solution - A412

## Reference answer

$\Delta V_i = 0.125(V_{OH}-V_{OL})$ (one half of the amplifier's final output), giving $t_p(\min) = 2.08\,\tau_L$.
- With $x = \Delta V_i/(V_{OH}-V_{OL})$: $t_p/\tau_L = -\ln(1-4x) + \ln(0.5/x)$.
- $\dfrac{d}{dx}$: $\dfrac{4}{1-4x}-\dfrac1x = 0$ → $x = 1/8$.
- $t_1 = \tau_L\ln 2 = 0.693\tau_L$, $t_2 = \tau_L\ln 4 = 1.386\tau_L$, total $2.079\tau_L$ (consistent with the symmetric values 2.12 at 0.1 and 0.15).

## Grading notes

+2: $\Delta V_i$ = 0.125 $(V_{OH}-V_{OL})$ and minimum ≈ 2.08 $\tau_L$ (by differentiation or a careful numerical search). +1: optimum placed between 0.1 and 0.15 (e.g., ≈ 0.12–0.13) with the minimum ≈ 2.1 $\tau_L$ but without an exact derivation. 0: only "between 0.1 and 0.15" from the listed values, no minimum value. −2 (asserted as fact): optimum claimed at the largest latch input (0.2) or the smallest (0.05), or a minimum below 2 $\tau_L$ from an error.
