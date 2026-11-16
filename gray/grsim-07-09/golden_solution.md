# Golden Solution - grsim-07-09

## Reference answer

Device: $g_m = 11.5$ mA/V, $r_\pi = 4.33\ \mathrm{k\Omega}$, $C_\pi = g_m/\omega_T = 459$ pF; $R_S' = R_S + r_b = 450\ \Omega$.

Input impedance $z_i = r_b + R_E + R\|(1/sC)$ with $R = (1 + g_mR_E)r_\pi = 204\ \mathrm{k\Omega}$ and $C = C_\pi/(1 + g_mR_E) = 9.74$ pF: $|z_i| = 208.5\ \mathrm{k\Omega}$ flat to ≈ 80 kHz (pole $1/2\pi RC = 80$ kHz), −20 dB/decade, leveling at $r_b + R_E = 4.2\ \mathrm{k\Omega}$ above ≈ 4 MHz (130 kΩ at 100 kHz, 17 kΩ at 1 MHz, 4.3 kΩ at 20 MHz).

Output impedance (with $R_E$ excluded): $R_1 = 1/g_m + R_S'/\beta = 95.7\ \Omega$, $R_2 = R_S' = 450\ \Omega$, $L = C_\pi r_\pi R_S'/\beta = 17.9\ \mu$H (exact fit: $R_1 = 118\ \Omega$, $L = 22.2\ \mu$H, with $z_o(0) = (r_\pi + R_S')/(\beta + 1) = 94\ \Omega$). $|z_o|$ ≈ 94 Ω up to ≈ 0.5 MHz, inductive rise from the zero at 0.85 MHz, leveling at 450 Ω above the pole at ≈ 4–5 MHz (141 Ω at 1 MHz, 277 Ω at 3 MHz, 441 Ω at 20 MHz).

Step responses (1-mV input step):
- 1-kΩ load: $v_o/v_i = 0.914\,(1 + s/2.56\times10^7)/(1 + s/1.93\times10^7)$: the output jumps immediately to $0.69$ mV ($R_L/(R_L + R_S')$, signal fed forward through $C_\pi$), then rises exponentially with τ ≈ 52 ns to 0.914 mV; no overshoot.
- 400-pF load (ideal current-source bias, so no resistive load): the inductive output impedance resonates with the load capacitance; poles $-5.45\times10^6 \pm j1.06\times10^7$ rad/s ($\omega_n = 1.19\times10^7$ rad/s, ζ ≈ 0.46) and a zero at $-2.56\times10^7$ rad/s; the output rises (10–90% ≈ 0.11 µs), overshoots by ≈ 23% (peak ≈ 1.23 mV at ≈ 0.25 µs) and rings with a period ≈ 0.6 µs before settling to 1.0 mV.

## Grading notes

Hand part: +2 needs input-impedance elements ≈ 204 kΩ ∥ 9.7 pF in series with 4.2 kΩ, output-impedance elements $R_1 \approx 96$ Ω (or ≈ 118 Ω exact), $R_2 = 450$ Ω, $L \approx 18$ µH (or ≈ 22 µH), and correct sketches (input falling from ≈ 208 kΩ to 4.2 kΩ; output rising from ≈ 94 Ω to 450 Ω). A correct simulation shows, for 1 kΩ, an initial step to ≈ 0.69 mV followed by a ≈ 50-ns exponential to ≈ 0.91 mV without overshoot, and for 400 pF a damped oscillation with ≈ 20–25% overshoot and ≈ 0.6-µs ringing period, settling to ≈ 1 mV; the comment must link the ringing to the inductive output impedance with a capacitive load. −2 (asserted as fact): output impedance claimed capacitive or constant, or a monotonic (no-overshoot) response reported for the 400-pF case as the expected result.
