$R_z \approx 0.7$ kΩ（取 $\omega_{p2} = g_{m5}/C_L$ 时为 695 Ω；取更精确的 $\omega_{p2} \approx 3.3\times10^9$ rad/s 时 ≈ 660 Ω）。
- $g_{m5} = \sqrt{2(38.4\ \mu)(120)(1\ \mathrm{m})} = 3.04$ mS，$1/g_{m5}$ = 329 Ω。
- $R_z$ 与 $C_C$ 串联后，零点变为 $\omega_z = 1/[C_C(1/g_{m5} - R_z)]$；当 $R_z > 1/g_{m5}$ 时，零点移入左半平面。
- 次极点（$C_E$ = 0 时）：$\omega_{p2} \approx g_{m5}/C_L$。令 $1/[C_C(R_z - 1/g_{m5})] = g_{m5}/C_L$，得 $R_z = \dfrac{1}{g_{m5}}\left(1 + \dfrac{C_L}{C_C}\right) = 329\ \Omega \times 2.11 \approx 695\ \Omega$。
- 若采用更精确的 $\omega_{p2} \approx (1 + g_{m5}R_L)/(R_LC_L) \approx 3.3\times10^9$ rad/s（$R_L$ = 3.33 kΩ）：$R_z = 1/g_{m5} + 1/(\omega_{p2}C_C) \approx 329 + 334 \approx 663\ \Omega$。
