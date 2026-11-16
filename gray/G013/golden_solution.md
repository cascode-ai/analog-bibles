# Golden Solution - G013

## Reference answer

Extracted device data: $\tau_F \approx 147$ ps, $C_{je} \approx 4.38$ pF, $V_A = 50$ V, $C_{\mu0} \approx 0.657$ pF, $C_{cs0} \approx 4.38$ pF. At $V_{CB} = 2$ V: $C_\mu \approx 0.305$ pF; at $V_{CS} = 15$ V: $C_{cs} \approx 0.824$ pF.

| $I_C$ | $g_m$ | $r_\pi$ | $r_o$ | $r_\mu$ | $C_\pi = \tau_Fg_m + C_{je}$ |
|---|---|---|---|---|---|
| 0.1 mA | 3.85 mA/V | 26 kΩ | 500 kΩ | 250 MΩ | 0.57 + 4.38 = 4.95 pF |
| 1 mA | 38.5 mA/V | 2.6 kΩ | 50 kΩ | 25 MΩ | 5.67 + 4.38 = 10.05 pF |
| 5 mA | 192 mA/V | 520 Ω | 10 kΩ | 5 MΩ | 28.3 + 4.38 = 32.7 pF |

At all three currents: $r_b = 100\ \Omega$, $r_c = 100\ \Omega$, $C_\mu = 0.305$ pF, $C_{cs} = 0.824$ pF ($r_{ex}$ not given, taken as zero). Topology: B – $r_b$ – B′; $r_\pi \parallel C_\pi$ B′–E; $r_\mu \parallel C_\mu$ B′–C′; $g_mv_1$ and $r_o$ C′–E; $r_c$ C′–C; $C_{cs}$ C′–substrate.

Derivation:
- $\tau_T = 1/(2\pi f_T)$ = 265.3 ps at 1 mA and 159.2 ps at 10 mA. With $\tau_T = \tau_F + (C_{je}+C_\mu)/g_m$ and $1/g_m$ = 26 Ω and 2.6 Ω: $(C_{je}+C_\mu)(26 - 2.6)\ \Omega = 106.1$ ps → $C_{je}+C_\mu = 4.53$ pF; with $C_\mu(10\ \mathrm{V}) = 0.15$ pF, $C_{je} = 4.38$ pF; $\tau_F = 159.2 - 2.6\times4.53 = 147.4$ ps.
- $V_A = r_oI_C = 50$ V, so $r_o = 50\ \mathrm{V}/I_C$.
- $C_{\mu0} = 0.15\sqrt{1+10/0.55} = 0.657$ pF → $C_\mu(2\ \mathrm{V}) = 0.657/\sqrt{1+2/0.55} = 0.305$ pF; $C_{cs0} = 1\times\sqrt{19.18} = 4.38$ pF → $C_{cs}(15\ \mathrm{V}) = 4.38/\sqrt{1+15/0.55} = 0.824$ pF.

## Grading notes

+2: $\tau_F$ in 140–155 ps and $C_{je}$ in 4.2–4.6 pF correctly extracted from the two $f_T$ points, $C_\mu$ and $C_{cs}$ rescaled to the new bias (≈ 0.30 and ≈ 0.82 pF), and the three sets of $g_m$, $r_\pi$, $r_o$, $r_\mu$, $C_\pi$ within ±5%. +1: one slip, or $C_\mu$ neglected in the extraction (giving $C_{je} \approx 4.53$ pF, $C_\pi$ values ≈ 0.15 pF higher). 0: $g_m$, $r_\pi$, $r_o$, $r_\mu$ right but $C_\pi$ wrong because $\tau_F$/$C_{je}$ were not extracted properly (e.g. $\tau_F = 1/(2\pi f_T)$ at one point with $C_{je}$ ignored), or $C_\mu$, $C_{cs}$ left at their 10-V/10-V values. -2 (asserted as fact): $C_\pi$ held constant with $I_C$, $r_o$ not scaled with $1/I_C$, a wrong topology (e.g. $C_\mu$ or $r_\mu$ not between B′ and C′, $g_mv_1$ or $r_o$ missing or misplaced, $r_b$/$r_c$ missing or in the wrong lead), or formula errors ($r_\pi = g_m/\beta_0$, $C_b = \tau_F/g_m$). Drawing $C_{cs}$ from the external collector terminal C (outside $r_c$) to the substrate instead of from C′ is a minor modelling variant, not a wrong topology (the collector–substrate junction is distributed along $r_c$, and lumping it at C or C′ are both approximations): +1 if everything else is right.
