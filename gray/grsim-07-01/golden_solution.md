# Golden Solution - grsim-07-01

## Reference answer

(a) $f_{-3\text{dB}} \approx 1.93$ MHz; low-frequency gain $-38.2$ (31.6 dB).
- $g_m = 19.2$ mA/V, $r_\pi = 10.4\ \mathrm{k\Omega}$, $C_\pi = g_m/\omega_T - C_\mu = 6.12 - 0.3 = 5.82$ pF.
- $R = (R_S + r_b)\|r_\pi = 5.3\ \mathrm{k}\|10.4\ \mathrm{k} = 3.51\ \mathrm{k\Omega}$; $C_M = C_\mu(1 + g_mR_L) = 17.6$ pF; $C_t = 23.4$ pF; $\omega_{-3\text{dB}} = 1/(RC_t) = 1.22\times10^7$ rad/s → 1.93 MHz.
- Gain $-g_mR_L\,r_\pi/(R_S + r_b + r_\pi) = -38.2$.
(b) $|p_2| = \dfrac{1}{R_LC_\mu} + \dfrac{1}{RC_\pi} + \dfrac{1}{R_LC_\pi} + \dfrac{g_m}{C_\pi} = (1.11 + 0.049 + 0.057 + 3.30)\times10^9 = 4.52\times10^9$ rad/s (720 MHz).

Expected simulation (same linear model): poles at 1.92 MHz and 718 MHz, a right-half-plane zero at $g_m/C_\mu = 6.4\times10^{10}$ rad/s (10.2 GHz), −3-dB frequency 1.92 MHz, gain 31.6 dB. The Miller estimate is within ≈ 1% and the nondominant-pole formula within ≈ 0.3%.

## Grading notes

Hand parts: +2 needs (a) 1.85–2.0 MHz with gain ≈ −38 and (b) $|p_2| \approx 4.5\times10^9$ rad/s (≈ 720 MHz, ±5%). A correct simulation shows a flat 31.6 dB gain, −3 dB near 1.92 MHz (±5%), a second pole near 0.7 GHz and phase heading toward −270° only well above 1 GHz because of the RHP zero; discrepancies must be explained by model differences (e.g., a nonlinear model whose $C_\pi$ or $C_\mu$ differs). −2 (asserted as fact): Miller multiplication omitted, $p_2$ equated to $\omega_T$ or to $1/(R_LC_\mu)$, or a simulated −3-dB frequency off by more than 2× accepted as agreement.
