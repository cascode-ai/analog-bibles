# Golden Solution - A414

## Reference answer

$t_p \approx 1.60\,\tau_L$ ($t_1 \approx 0.68\tau_L$, $t_2 = 0.916\tau_L$).
- Three cascaded identical poles: output (normalized) $= 125\times0.05\left[1-e^{-t_n}(1+t_n+t_n^2/2)\right] = 6.25[\ldots]$.
- Reaching 0.2 requires $1-e^{-t_n}(1+t_n+t_n^2/2) = 0.032$ → $t_n = 0.682$ (small-$t$ estimate $(6\times0.032)^{1/3} = 0.58$).
- Latch: $t_2 = \tau_L\ln(0.5/0.2) = 0.916\tau_L$.
- Total: $1.598\tau_L$.

## Grading notes

+2: total ≈ 1.57–1.62 $\tau_L$ with $t_1$ ≈ 0.68 $\tau_L$ from the three-pole response. +1: small-$t$ approximation (t₁ ≈ 0.58, total ≈ 1.49) stated as approximate, or one slip. 0: three stages treated as a single pole of gain 125, with the latch term right. −2 (asserted as fact): latch delay wrong in form, amplifier delay ignored, or gains added.
