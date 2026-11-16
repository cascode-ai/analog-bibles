# Golden Solution - R500

## Reference answer

$R_z \approx 0.49$ kΩ.
- Zero of the compensated $M_1$ stage: $\omega_z = 1/[C_C(1/g_{m1} - R_z)]$, with $1/g_{m1}$ = 193 Ω.
- First nondominant pole: output node, $\omega_{p2} \approx 1/[r_{O2}(C_L + C_{GD2} + C_{GS3} + C_{GD3})]$ = 1/(5 kΩ × 0.525 pF) ≈ 3.8×10⁸ rad/s (3.75×10⁸ in the full model).
- $R_z = 1/g_{m1} + 1/(\omega_{p2}C_C)$ = 193 + 1/(3.75×10⁸ × 9 pF) ≈ 193 + 296 ≈ 490 Ω.
- With this $R_z$ the full model gives PM ≈ 89°: the output pole is cancelled and the next pole is far away.

## Grading notes

+2: correct formula with the output-node pole, 0.44–0.53 kΩ. +1: correct formula, $\omega_{p2}$ estimated loosely (0.4–0.6 kΩ). 0: $R_z = 1/g_{m1}$ given as the answer. -2 (asserted as fact): $R_z < 1/g_{m1}$, the zero aligned with the node-B or dominant pole, or a formula error giving a value outside 0.3–0.8 kΩ.
