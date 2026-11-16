$C_F = (R_1/R_2)C_{in} = (50\ \mathrm{k\Omega}/100\ \mathrm{k\Omega}) \times 50\ \mathrm{fF} = 25$ fF（$R_2$ = 100 kΩ 反馈电阻，$R_1$ = 50 kΩ）。这使 $R_2C_F = R_1C_{in}$，构成一个补偿分压器。

- 环路传输为 $-A(s)\beta(s)$。反馈网络由 $Z_2 = R_2 \parallel (1/sC_F)$ 与 $Z_1 = R_1 \parallel (1/sC_{in})$ 串联构成，因此
$$\beta(s) = \frac{Z_1}{Z_1+Z_2} = \frac{R_1(1 + sR_2C_F)}{(R_1+R_2) + sR_1R_2(C_{in}+C_F)}.$$
- 因此 $C_F$ 引入了一个位于 $\omega_z = 1/(R_2C_F)$ 的左半平面零点（left-half-plane zero）。极点位于 $\omega_p = (R_1+R_2)/[R_1R_2(C_{in}+C_F)]$。没有 $C_F$ 时，它位于 $1/[(R_1\parallel R_2)C_{in}]$ = $1/(33.3\ \mathrm{k\Omega} \times 50\ \mathrm{fF})$，即 ≈ 95 MHz。
- 令 $\omega_z = \omega_p$，得 $C_F(R_1+R_2) = R_1(C_{in}+C_F)$，因此 $C_F = R_1C_{in}/R_2 = 25$ fF。此时二者都位于 ≈ 64 MHz 并相互抵消，且 $\beta = R_1/(R_1+R_2) = 1/3$ 在所有频率上都成立。
