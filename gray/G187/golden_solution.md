# Golden Solution - G187

## Reference answer

General result with $R = (R_S + r_b)\|r_\pi$: $Z_o(s) = \dfrac{1 + sR(C_\pi + C_\mu)}{sC_\mu(1 + g_mR + sRC_\pi)}$; equivalent circuit: $C_\infty = C_\mu C_\pi/(C_\pi + C_\mu) = 0.285$ pF in parallel with a series $R_x$–$C_x$, $C_x = C_\mu[1 + g_mR - C_\pi/(C_\pi + C_\mu)]$, $R_x = R(C_\pi + C_\mu)/C_x$. Device: $g_m = 19.2$ mA/V, $r_\pi = 10.4\ \mathrm{k\Omega}$, $C_\pi = 5.82$ pF.

(1) $R_S = 0$: $R = r_b\|r_\pi = 292\ \Omega$, $g_mR = 5.61$. Low-frequency capacitance $C_\mu(1 + g_mR) = 1.98$ pF; zero at $5.6\times10^8$ rad/s (89 MHz); pole at $3.9\times10^9$ rad/s (620 MHz). $C_x = 1.70$ pF, $R_x = 1.05\ \mathrm{k\Omega}$. Plot: $|Z_o| \approx 80$ MΩ at 1 kHz falling at −20 dB/decade (≈ 80 kΩ at 1 MHz, 8.1 kΩ at 10 MHz); it begins to flatten near 89 MHz and is ≈ 1.2 kΩ at 100 MHz.

(2) $R_S = \infty$: $R = r_\pi = 10.4\ \mathrm{k\Omega}$, $g_mR = \beta = 200$. Low-frequency capacitance $C_\mu(1 + \beta) = 60.3$ pF; zero at $1/[r_\pi(C_\pi + C_\mu)] = 1.57\times10^7$ rad/s (2.5 MHz); pole at $(1+\beta)/(r_\pi C_\pi) = 3.3\times10^9$ rad/s (528 MHz). $C_x = 60.0$ pF, $R_x = 1.06\ \mathrm{k\Omega}$. Plot: $|Z_o| \approx 2.6$ MΩ at 1 kHz, −20 dB/decade (26 kΩ at 100 kHz, 2.8 kΩ at 1 MHz), flattening near 2.5 MHz to ≈ 1.04–1.09 kΩ through 100 MHz.

In both cases the mid-frequency resistance is ≈ $(C_\pi + C_\mu)/(g_mC_\mu) \approx 1.06\ \mathrm{k\Omega}$, independent of $R_S$; $R_S$ sets the low-frequency (Miller) capacitance $C_\mu(1 + g_mR)$ and hence the break frequency. (With $r_o = \infty$ there is no resistive limit at low frequency.)

## Grading notes

Credit is split equally between the two cases. For each case, +2-level content: the low-frequency capacitance ($\approx 2.0$ pF for $R_S = 0$, $\approx 60$ pF for $R_S = \infty$), the break (zero) frequency (≈ 89 MHz and ≈ 2.5 MHz), and the ≈ 1.05 kΩ plateau, values within ±10%. Both cases right: +2; one case right and the other with a minor slip: +1; one case right, the other wrong or missing: 0. −2 (asserted as fact): output impedance taken as resistive $r_o$ or infinite, Miller multiplication omitted, or the $R_S = 0$ and $R_S = \infty$ low-frequency capacitances interchanged. A drawing slip in an auxiliary test-circuit sketch (e.g., the $g_m$ generator drawn to the wrong node) is trivial and does not lower +2 when the answer's own written node equations use the correct connections and the requested one-port equivalent and values are right; a wrong formula stated in a side remark is a minor false claim (+1).
