# Golden Solution - R497

## Reference answer

$R_z \approx 0.5$ kΩ (≈ 0.4 kΩ if the per-node estimate of the first nondominant pole is used).
- The zero of the $M_1$ stage with $R_z$ in series with $C_C$ is $\omega_z = 1/[C_C(1/g_{m1} - R_z)]$, with $1/g_{m1}$ = 193 Ω ($g_{m1}$ = 5.18 mS). It becomes a left-half-plane zero for $R_z > 1/g_{m1}$.
- First nondominant pole: node Y (output of the $M_2$ stage), ≈ 5.4×10⁹ rad/s with $C_C$ = 0.6 pF. The per-node estimate is $1/[r_{O2}(C_{GD2} + C_{GS3} + C_{GD3})]$ = 1/(5 kΩ × 25.4 fF) ≈ 7.9×10⁹ rad/s.
- Zero at $-\omega_{p2}$: $R_z = \dfrac{1}{g_{m1}} + \dfrac{1}{\omega_{p2}C_C}$ = 193 + 1/(5.4×10⁹ × 0.6 pF) ≈ 193 + 307 ≈ 500 Ω (≈ 404 Ω with 7.9×10⁹ rad/s).
- With this $R_z$ the full model gives PM ≈ 77°.

## Grading notes

+2: $R_z = 1/g_{m1} + 1/(\omega_{p2}C_C)$ with $\omega_{p2}$ identified as the node-Y pole, giving 0.38–0.55 kΩ. +1: correct formula with $\omega_{p2}$ estimated loosely (result 0.3–0.65 kΩ). 0: $R_z = 1/g_{m1}$ (zero moved to infinity) given as the answer. -2 (asserted as fact): $R_z < 1/g_{m1}$, a formula from a different topology such as $(1 + C_L/C_C)/g_{m1}$ with an unrelated capacitance producing a wrong value, or the zero placed on the dominant pole.
