# Golden Solution - A413

## Reference answer

$t_p \approx 2.08\,\tau_L$ ($t_1 \approx 0.466\tau_L$, $t_2 = 1.609\tau_L$).
- Two cascaded identical single-pole stages: output (normalized) $= 25\times0.05\left[1-(1+t/\tau_L)e^{-t/\tau_L}\right] = 1.25[\ldots]$.
- Reaching 0.1 requires $1-(1+t_n)e^{-t_n} = 0.08$ → $t_n = 0.466$ (small-$t$ estimate $\sqrt{2\times0.08} = 0.40$).
- Latch: $t_2 = \tau_L\ln(0.5/0.1) = 1.609\tau_L$.
- Total: $2.075\tau_L$ (e.g. 20.8 ns for $\tau_L$ = 10 ns) — only slightly better than one amplifier at the same latch input (2.12 $\tau_L$).

## Grading notes

+2: total ≈ 2.07–2.09 $\tau_L$ with $t_1$ ≈ 0.47 $\tau_L$ from the two-pole response. +1: $t_1$ from the parabolic approximation (0.40 → total ≈ 2.01) stated as an approximation, or one slip. 0: two stages treated as one pole with gain 25 (t₁ ≈ 0.083) or $t_1$ computed to reach 0.05 instead of 0.1 (≈ 0.31 → 1.92), with the latch term right. −2 (asserted as fact): latch delay wrong in form ($\tau_L\ln 2$), amplifier delay ignored, or the gains of the stages added instead of multiplied.
