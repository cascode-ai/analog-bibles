# Golden Solution - G018

## Reference answer

At $I_C = 2$ mA: $g_m = 76.9$ mA/V, $r_\pi = 1.3$ kΩ, $r_o = 20$ kΩ, $C_\pi \approx 22.6$ pF ($C_b = 19.2$ pF + $C_{je} \approx 3.4$ pF), $C_\mu = 0.6$ pF, $C_{cs} = 2$ pF, $r_b = 150\ \Omega$, $r_c = 150\ \Omega$ ($r_\mu$ and $r_{ex}$ are not given: $r_\mu$ treated as open, $r_{ex} = 0$).

Circuit: B – $r_b$ – B′; $r_\pi \parallel C_\pi$ from B′ to E; $C_\mu$ from B′ to the internal collector C′; $g_mv_1$ and $r_o$ from C′ to E; $r_c$ from C′ to C; $C_{cs}$ from C′ to substrate (ac ground).

- At 50 MHz the gain magnitude (9) is on the −20 dB/decade slope, so $f_T \approx 9\times50 = 450$ MHz at 1 mA (the exact single-pole form gives 452 MHz).
- $\tau_T = 1/(2\pi f_T) = 353.7$ ps $= \tau_F + (C_{je}+C_\mu)/g_m$ with $1/g_m = 26\ \Omega$: $C_{je}+C_\mu = (353.7 - 250)\ \mathrm{ps}/26\ \Omega = 3.99$ pF → $C_{je} = 3.39$ pF.
- At 2 mA: $g_m = 2/26 = 76.9$ mA/V; $r_\pi = \beta_0/g_m = 1.3$ kΩ; $r_o = V_A/I_C = 20$ kΩ; $C_b = \tau_Fg_m = 19.2$ pF; $C_\pi = 19.2 + 3.4 = 22.6$ pF. (The resulting $f_T$ is ≈ 527 MHz.)

## Grading notes

+2: $C_\pi$ in 22.0–23.2 pF (from $C_{je} \approx 3.3$–3.4 pF extracted via $f_T \approx 450$ MHz, with $C_\mu$ subtracted), $g_m$, $r_\pi$, $r_o$ correct, the given $r_b$, $r_c$, $C_\mu$, $C_{cs}$ placed correctly. +1: one slip; or $C_\mu$ neglected in the extraction (taking $C_\pi$ at 1 mA as $g_m/2\pi f_T$, giving $C_{je} \approx 3.9$–4.0 pF and $C_\pi \approx 23.2$ pF), a minor imprecision even where the value falls inside the +2 band; or $C_{cs}$ drawn from the external collector C (outside $r_c$) instead of from C′, a minor modelling variant (the collector–substrate junction is distributed along $r_c$), not a wrong topology. Both of the last two deviations in one answer still score +1, never −2. 0: $C_{je}$ neglected (taking $C_\pi = C_b = 19.2$ pF, i.e. the 50-MHz measurement not used) with the omission stated, or $C_\pi$ wrong because $f_T$ was misextracted (e.g. $f_T$ = 50 MHz or 4.5 GHz) while the other elements are right. -2 (asserted as fact): $C_\pi$ kept at its 1-mA value, $r_o$ or $r_\pi$ not scaled with current, a wrong topology (e.g. $C_\mu$ not between B′ and C′, $g_mv_1$ or $r_o$ missing or misplaced, $r_b$/$r_c$ in the wrong lead), or invented values for $r_\mu$/$r_{ex}$ presented as given.
