# Golden Solution - R491

## Reference answer

$R_z \approx 0.7$ kΩ (695 Ω with $\omega_{p2} = g_{m5}/C_L$; ≈ 660 Ω with the more exact $\omega_{p2} \approx 3.3\times10^9$ rad/s).
- $g_{m5} = \sqrt{2(38.4\ \mu)(120)(1\ \mathrm{m})} = 3.04$ mS, $1/g_{m5}$ = 329 Ω.
- With $R_z$ in series with $C_C$ the zero becomes $\omega_z = 1/[C_C(1/g_{m5} - R_z)]$, which moves into the left half plane for $R_z > 1/g_{m5}$.
- Nondominant pole (with $C_E$ = 0): $\omega_{p2} \approx g_{m5}/C_L$. Setting $1/[C_C(R_z - 1/g_{m5})] = g_{m5}/C_L$ gives $R_z = \dfrac{1}{g_{m5}}\left(1 + \dfrac{C_L}{C_C}\right) = 329\ \Omega \times 2.11 \approx 695\ \Omega$.
- With the more accurate $\omega_{p2} \approx (1 + g_{m5}R_L)/(R_LC_L) \approx 3.3\times10^9$ rad/s ($R_L$ = 3.33 kΩ): $R_z = 1/g_{m5} + 1/(\omega_{p2}C_C) \approx 329 + 334 \approx 663\ \Omega$.

## Grading notes

+2: 0.64–0.72 kΩ from $R_z = 1/g_{m5} + 1/(\omega_{p2}C_C)$ (or the equivalent $(1 + C_L/C_C)/g_{m5}$). +1: correct formula with a small numerical inaccuracy (0.6–0.75 kΩ). 0: $R_z = 1/g_{m5}$ (moves the zero to infinity) presented as the answer. -2 (asserted as fact): $R_z = (1 + C_C/C_L)/g_{m5}$, $R_z < 1/g_{m5}$ claimed to cancel the pole, or the zero placed on the dominant pole.
