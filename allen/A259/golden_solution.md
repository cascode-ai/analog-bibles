# Golden Solution - A259

## Reference answer

$R_z = 1/g_{mII} = 2$ kΩ (zero at infinity). Poles (approximate expressions; exact roots of the cubic in brackets):

- $p_1 \approx \dfrac{-1}{g_{mII}R_{II}R_IC_c} = \dfrac{-1}{(500\ \mu)(100\ \mathrm k)(150\ \mathrm k)(30\ \mathrm p)} = -4.44\times10^3$ rad/s [exact −4.29 × 10³ rad/s].
- $p_2 \approx -g_{mII}/C_{II} = -100\times10^6$ rad/s; the fuller form $-g_{mII}C_c/(C_IC_{II} + C_cC_I + C_cC_{II}) = -81\times10^6$ rad/s [exact −98.3 × 10⁶ rad/s].
- $p_4 \approx -1/(R_zC_I) = -500\times10^6$ rad/s [exact −527 × 10⁶ rad/s].

Derivation: the numerator of $V_{out}/V_{in}$ is $1 - s(C_c/g_{mII} - R_zC_c)$, which loses its $s$ term for $R_z = 1/g_{mII}$. The denominator $1 + bs + cs^2 + ds^3$ has $b = (C_{II}+C_c)R_{II} + (C_I+C_c)R_I + g_{mII}R_IR_{II}C_c + R_zC_c$, $c = R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II}) + R_zC_c(R_IC_I + R_{II}C_{II})$, $d = R_IR_{II}R_zC_IC_{II}C_c$; for widely spaced roots $p_1 \approx -1/b$, $p_2 \approx -b/c$, $p_4 \approx -c/d$.

## Grading notes

+2: $R_z = 2$ kΩ and the three poles near −4.3…−4.4 × 10³ rad/s, −0.8…−1.0 × 10⁸ rad/s and −5…−5.3 × 10⁸ rad/s (approximate or exact values both fine), zero at infinity. +1: $R_z$ and two of the poles right. 0: $R_z$ right, poles largely wrong or missing. −2 (asserted as fact): $R_z = 0$ or $R_z = (C_c + C_{II})/(g_{mII}C_c)$ for this case, a remaining zero claimed, or poles given in Hz as if rad/s with a 2π error presented as the result (e.g. $p_1$ = −4444 Hz).
