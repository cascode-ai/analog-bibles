# Golden Solution - G098

## Reference answer

$R_3 \approx 24.5$ kΩ, $R_1 \approx 3.17$ kΩ, $R_2 \approx 155$ kΩ (with $V_{OUT} = 1.2615$ V, $I_2 = 4.08$ µA). Using $V_T = 26$ mV instead: 23.4 kΩ, 3.14 kΩ, 147 kΩ.

- Currents: $\Delta V_{BE} = V_T\ln(I_1/I_2) = 100$ mV → $I_1/I_2 = e^{100/25.7} = 49.0$, $I_2 = 4.08$ µA. $I_2R_3 = \Delta V_{BE}$ → $R_3 = 100\ \mathrm{mV}/4.08\ \mu\mathrm{A} = 24.5$ kΩ.
- Both currents are PTAT: $I_2 = \Delta V_{BE}/R_3$ and $I_1/I_2 = R_2/R_1$ is fixed, so $\Delta V_{BE} = V_T\ln(R_2/R_1) \propto T$. Hence α = 1 and the zero-TC output is $V_{OUT} = V_{G0} + (\gamma - 1)V_T = 1.205 + 2.2(0.0257) = 1.2615$ V.
- $V_{BE1} = V_T\ln(200\ \mu\mathrm{A}/5\times10^{-15}\ \mathrm{A}) = 0.627$ V, so $I_1R_1 = I_2R_2 = 1.2615 - 0.627 = 0.634$ V: $R_1 = 0.634/200\ \mu = 3.17$ kΩ, $R_2 = 0.634/4.08\ \mu = 155$ kΩ ($R_2/R_3 = 6.34$).
- A numerical check with the stated model confirms $dV_{OUT}/dT = 0$ at 298 K with these values.

## Grading notes

+2: $R_3$ in 22.5–25.5 kΩ, $R_1$ in 3.0–3.3 kΩ, $R_2$ in 140–160 kΩ, consistent with a zero-TC target $V_{G0} + (\gamma-1)V_T$ ≈ 1.26 V (PTAT currents). +1: target taken as $V_{G0}$ = 1.205 V or an assumed ≈ 1.25 V without derivation, with otherwise consistent resistor values, or one slip. 0: $R_3$ and the current ratio right but $R_1$, $R_2$ missing or inconsistent. -2 (asserted as fact): $I_1 = I_2$ assumed (contradicting $\Delta V_{BE}$ = 100 mV), the ratio $e^{100/26}$ inverted ($I_2 > I_1$), or a target voltage far from the band gap (e.g. 0.6 V or 2.4 V).
