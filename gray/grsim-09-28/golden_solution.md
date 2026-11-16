# Golden Solution - grsim-09-28

## Reference answer

Hand analysis:
(a) Bias: from $V_{GS1} + |V_{GS5}| = |V_{GS6}| + V_{GS3}$ with $(W/L)_6 = (W/L)_5$ and $(W/L)_3 = (W/L)_1$, $I_B = I_1 = 20$ μA in $M_2$, $M_3$, $M_6$, $M_7$ and in the cascode mirrors. $\beta_n = \mu_nC_{ox}(W/L)_3 = 1.2$ mA/V² and $\beta_p = \mu_pC_{ox}(W/L)_6 = 1.2$ mA/V², so $g_{m3} = g_{m6} = \sqrt{2 \times 1.2\text{ mA/V}^2 \times 20\text{ μA}} = 0.219$ mA/V.
- $G_m = \dfrac{2g_{m3}}{1 + g_{m3}/g_{m6}} = g_{m3} = 0.219$ mA/V.
- $R_o = (g_{m14}r_{o14}r_{o13}) \| (g_{m15}r_{o15}r_{o16})$ with $r_o = 1/(0.05 \times 20\text{ μA}) = 1$ MΩ, $g_{m14} = 0.49$ mA/V, $g_{m15} = 0.38$ mA/V: $R_o ≈ 490\text{ MΩ} \| 380\text{ MΩ} ≈ 214$ MΩ.
- Open-loop gain $A_v = G_mR_o ≈ 4.7 \times 10^4$ (≈ 93 dB); unity-gain bandwidth $G_m/C_L = 21.9$ Mrad/s ≈ 3.5 MHz.
- Large signal: with $\beta_s$ defined by $1/\sqrt{\beta_s} = 1/\sqrt{\beta_n} + 1/\sqrt{\beta_p}$ ($\beta_s = 0.3$ mA/V²), the loop $V_i + V_{GS1} + |V_{GS5}| = V_{GS3} + |V_{GS6}|$ gives $I_3 = \frac{\beta_s}{2}(V_i + V_0)^2$ and $I_7 = \frac{\beta_s}{2}(V_0 - V_i)^2$ with $V_0 = \sqrt{2I_1/\beta_s} = 0.365$ V. All four on ($|V_i| < V_0$): $I_o = I_3 - I_7 = 2\sqrt{2\beta_sI_1}\,V_i = G_mV_i$ — exactly linear, 0.219 mA/V. For $V_i > V_0$, $M_2$ and $M_7$ cut off and $I_o = \frac{\beta_s}{2}(V_i + V_0)^2 = 0.15\text{ mA/V}^2\,(V_i + 0.365\text{ V})^2$ (mirror image for $V_i < -V_0$). Transition at $|V_i| = \sqrt{2I_1/\beta_s} = \sqrt{8I_1/\beta_n} = 0.365$ V, where $|I_o| = 4I_1 = 80$ μA.
(b) Linear model: single pole, $\tau = C_L/G_m = 45.6$ ns; $V_o(t) = -1.5 + 3(1 - e^{-t/45.6\text{ ns}})$ V (63% at 46 ns, within 1% at ≈ 210 ns); initial current $G_m \times 3$ V = 0.66 mA. Actual peak current (large-signal law, differential input 3 V at $t = 0^+$): $0.15\text{ mA/V}^2 \times (3.365)^2 ≈ 1.7$ mA, so the real response starts about 2.6 times faster than the linear prediction (≈ +0.2 V instead of −0.44 V at 20 ns) and settles within 1% in ≈ 185 ns; there is no slew-rate limit in the usual sense.
Expected simulation: open-loop gain ≈ 90–95 dB, unity-gain frequency ≈ 3–3.5 MHz, $I_o$–$V_i$ curve linear to ≈ ±0.37 V and square-law beyond, step response faster than the linear exponential with a peak load current of the order of 1.5–1.7 mA.

## Grading notes

Hand results: $G_m$ ≈ 0.22 mA/V, gain ≈ 4.7 × 10⁴ (±15%), UGBW ≈ 3.5 MHz (±10%), the linear-then-quadratic $I_o(V_i)$ with transition at ≈ 0.37 V, linear-model time constant ≈ 46 ns, linear initial current ≈ 0.66 mA and large-signal peak ≈ 1.7 mA. A correct simulation shows a dc gain in the 90–95 dB range (depends on λ handling), unity-gain frequency ≈ 3–3.6 MHz, a transfer curve with the stated break near ±0.35–0.4 V, and a step response that rises faster than the linear exponential initially, with peak $C_L$ current ≈ 1.4–1.8 mA. A simulated slew-limited ramp at $2I_1/C_L$ (4 V/μs) would contradict the class-AB operation and indicates a netlist error.
