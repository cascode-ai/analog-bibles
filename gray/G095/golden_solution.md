# Golden Solution - G095

## Reference answer

$I_{OUT} \approx 0.97$ mA (≈ 1.0 mA if every $V_{BE}$ is taken as 0.7 V); $R_o \approx 3.2$ MΩ.

- The base of $Q_3$ is two diode drops above ground: $V_{B3} = V_{BE1} + V_{BE2}$. $I_{IN} = (15 - 2V_{BE})/13.7\ \mathrm{k\Omega} \approx 0.996$ mA ($V_{BE} \approx 0.676$ V).
- KVL: $2V_{BE}(I_{IN}) = V_{BE3} + I_{OUT}(700\ \Omega)$ → $I_{OUT}(700\ \Omega) = V_{BE}(I_{IN}) + V_T\ln(I_{IN}/I_{OUT})$; iteration gives $I_{OUT} \approx 0.967$ mA (0.963 mA with the emitter current $(\beta_F+1)I_{OUT}/\beta_F$). With $V_{BE} = 0.7$ V for the diodes: $I_{IN} = 0.993$ mA, $I_{OUT} \approx 1.00$ mA.
- Output resistance (degenerated output with the base driven from the low impedance of the diode stack, $R_B \approx 2/g_m\|13.7\ \mathrm{k\Omega} \approx 52$ Ω): $g_{m3} = 37.2$ mS, $r_{\pi3} = 5.4$ kΩ, $r_{o3} = 130\ \mathrm{V}/0.967\ \mathrm{mA} = 134$ kΩ; $R_o = r_{o3}\left[1 + \dfrac{g_{m3}R_E\,r_{\pi3}}{r_{\pi3} + R_E + R_B}\right] \approx r_{o3}[1 + g_{m3}(R_E\|r_{\pi3})] \approx 134\ \mathrm{k}\times24 \approx 3.2$ MΩ.

## Grading notes

+2: $I_{OUT}$ in 0.95–1.01 mA and $R_o$ in 2.9–3.5 MΩ, with the degenerated-output formula. A slip in a negligible term of the $R_o$ expression that leaves the value unchanged (e.g. $1/r_o$ written for $K/r_o$, $K = 1 + R_B/r_\pi$) is trivial and does not lower +2. +1: one slip, or $R_o$ computed with $R_E$ instead of $R_E\|r_\pi$ (≈ 3.6 MΩ). 0: correct current but $R_o$ wrong or missing. -2 (asserted as fact): $Q_3$'s base taken as one $V_{BE}$ above ground, $I_{OUT}$ equated to $I_{IN}$ by mirror action without accounting for the 700-Ω drop, or $R_o = r_{o3}$ or $\beta_0r_{o3}$.
