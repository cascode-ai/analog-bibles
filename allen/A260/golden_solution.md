# Golden Solution - A260

## Reference answer

$R_z = \dfrac{C_c + C_{II}}{g_{mII}C_c} = \dfrac{35\ \mathrm p}{(500\ \mu)(30\ \mathrm p)} = 2.33$ kΩ.

- Zero: $z_1 = \dfrac{1}{C_c(1/g_{mII} - R_z)} = \dfrac{1}{30\ \mathrm p\,(2\ \mathrm k - 2.333\ \mathrm k)} = -100\times10^6$ rad/s, on top of $p_2 \approx -g_{mII}/C_{II} = -100\times10^6$ rad/s (exact pole −102 × 10⁶ rad/s: near-perfect cancellation).
- $p_1 \approx -1/(g_{mII}R_{II}R_IC_c) = -4.44\times10^3$ rad/s [exact −4.29 × 10³ rad/s].
- $p_4 \approx -1/(R_zC_I) = -1/(2.333\ \mathrm k \times 1\ \mathrm p) = -429\times10^6$ rad/s [exact −435 × 10⁶ rad/s].

## Grading notes

+2: $R_z$ ≈ 2.33 kΩ, zero at −1 × 10⁸ rad/s cancelling $p_2$, $p_1$ ≈ −4.3…−4.4 × 10³ rad/s, $p_4$ ≈ −4.3…−4.4 × 10⁸ rad/s. +1: $R_z$ and zero right with one pole wrong or missing. 0: $R_z$ right, roots not found. −2 (asserted as fact): $R_z = 1/g_{mII}$ for this case, the zero placed in the RHP, or $p_4$ computed with $C_c$ or $C_{II}$ instead of $C_I$.
