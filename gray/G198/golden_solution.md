# Golden Solution - G198

## Reference answer

$v_o/v_i \approx -13.2$; $T_0 \approx 41$ ns, $f_{-3\text{dB}} \approx 3.9$ MHz.

- $g_m = 38.5$ mA/V, $r_\pi = 5.2\ \mathrm{k\Omega}$, $C_\pi = 10.0$ pF (from $C_\pi + C_\mu = g_m/\omega_T$).
- $R_i = r_\pi + (\beta + 1)R_E = 65.5\ \mathrm{k\Omega}$; $G_m = \beta/R_i = 3.05$ mA/V ($\approx g_m/(1 + g_mR_E)$).
- Gain: $-\beta R_L/(R_S + R_i) = -200\times5\ \mathrm{k}/75.5\ \mathrm{k} = -13.2$.
- $R_{\pi0} = r_\pi\|\dfrac{R_S + R_E}{1 + g_mR_E} = 5.2\ \mathrm{k}\|821 = 709\ \Omega$ → $C_\pi R_{\pi0} = 7.1$ ns.
- $R_{\mu0} = R_1 + R_L + G_mR_LR_1$ with $R_1 = R_S\|R_i = 8.68\ \mathrm{k\Omega}$ → $8.68 + 5 + 132.4 = 146\ \mathrm{k\Omega}$ → $C_\mu R_{\mu0} = 29.2$ ns.
- $C_{cs}R_L = 5$ ns.
- $T_0 = 41.3$ ns → $f_{-3\text{dB}} = 3.85$ MHz (exact analysis: 3.97 MHz). Degeneration cuts the gain by ≈ 5 and raises the bandwidth by ≈ 4.

## Grading notes

+2: gain ≈ −13.2 (±5%) and $f_{-3\text{dB}}$ ≈ 3.6–4.1 MHz from correct zero-value resistances ($R_{\pi0} \approx 0.7$ kΩ, $R_{\mu0} \approx 146$ kΩ). +1: one minor slip (e.g., $G_m = g_m/(1+g_mR_E)$ and small differences, or $C_{cs}$ omitted). 0: correct gain with a wrong bandwidth from one wrong resistance, or vice versa. An approximate gain $-R_L/R_E \approx -16.7$ that ignores $R_S$ and $r_\pi$ is a minor imprecision only if labeled as an approximation (at most +1). −2 (asserted as fact): degeneration claimed to reduce the bandwidth, the time constants computed as for the undegenerated stage and presented as the answer, or a non-inverting gain.
