# Golden Solution - grsim-07-44

## Reference answer

$g_m = 19.2$ mA/V, $r_\pi = 10.4\ \mathrm{k\Omega}$, $C_\pi = 5.82$ pF.

(a) Zero-value: $R_{\pi0} = (R_S + r_b)\|r_\pi = 3.51\ \mathrm{k\Omega}$ → 20.4 ns; $R_{\mu0} = R_{\pi0} + R_L + g_mR_LR_{\pi0} = 209\ \mathrm{k\Omega}$ → 62.7 ns; $T_0 = 83.2$ ns → $|p_1| \approx 1.20\times10^7$ rad/s (1.91 MHz).
Short-circuit: $C_\mu$ with $C_\pi$ shorted sees $R_L$ → 0.9 ns; $C_\pi$ with $C_\mu$ shorted sees $(R_S + r_b)\|r_\pi\|R_L\|(1/g_m) = 50.4\ \Omega$ → 0.293 ns; $|p_2| \approx 1/0.9\ \mathrm{ns} + 1/0.293\ \mathrm{ns} = 4.52\times10^9$ rad/s (720 MHz).

(b) Simulation of the linear model: $p_1$ at 1.919 MHz and $p_2$ at 717.6 MHz (and a right-half-plane zero at $g_m/C_\mu$, 10.2 GHz): both estimates within ≈ 0.5%.

## Grading notes

Hand part: +2 needs $p_1 \approx 1.9$ MHz (1.8–2.0) and $p_2 \approx 4.5\times10^9$ rad/s (±5%), with the short-circuit resistance for $C_\pi$ including $1/g_m$ (≈ 50 Ω). A correct simulation shows poles at ≈ 1.92 MHz and ≈ 718 MHz. −2 (asserted as fact): $C_\pi$'s short-circuit resistance taken as $R_{\pi0}$ (giving $|p_2| \approx 1.2\times10^9$ rad/s), or the dominant pole without Miller multiplication.
