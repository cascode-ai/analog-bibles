# Golden Solution - R534

## Reference answer

$C_F = (R_1/R_2)C_{in} = (50\ \mathrm{k\Omega}/100\ \mathrm{k\Omega}) \times 50\ \mathrm{fF} = 25$ fF ($R_2$ = 100 kΩ feedback resistor, $R_1$ = 50 kΩ). This makes $R_2C_F = R_1C_{in}$, a compensated divider.

- The loop transmission is $-A(s)\beta(s)$. The feedback network is $Z_2 = R_2 \parallel (1/sC_F)$ in series with $Z_1 = R_1 \parallel (1/sC_{in})$, so
$$\beta(s) = \frac{Z_1}{Z_1+Z_2} = \frac{R_1(1 + sR_2C_F)}{(R_1+R_2) + sR_1R_2(C_{in}+C_F)}.$$
- $C_F$ thus adds a left-half-plane zero at $\omega_z = 1/(R_2C_F)$. The pole is at $\omega_p = (R_1+R_2)/[R_1R_2(C_{in}+C_F)]$. Without $C_F$ it lies at $1/[(R_1\parallel R_2)C_{in}]$ = $1/(33.3\ \mathrm{k\Omega} \times 50\ \mathrm{fF})$, i.e., ≈ 95 MHz.
- Setting $\omega_z = \omega_p$ gives $C_F(R_1+R_2) = R_1(C_{in}+C_F)$, so $C_F = R_1C_{in}/R_2 = 25$ fF. Both then sit at ≈ 64 MHz and cancel, and $\beta = R_1/(R_1+R_2) = 1/3$ at all frequencies.

## Grading notes

+2: β(s) (or the loop transmission) derived showing a zero at $1/(R_2C_F)$, with $C_F = R_1C_{in}/R_2 = 25$ fF (±10%). +1: correct $C_F$ with an incomplete proof (e.g., the zero asserted without derivation), or a correct proof with an arithmetic slip in $C_F$. 0: correct proof of the zero but no or a wrong value through a slip in setting up the cancellation. -2 (asserted as fact): $C_F = 100$ fF (inverted ratio), $C_F = 50$ fF ($= C_{in}$), a zero at $1/[(R_1\parallel R_2)C_F]$, or the resistors swapped (50 kΩ taken as the feedback resistor).
