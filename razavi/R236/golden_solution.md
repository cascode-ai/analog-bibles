# Golden Solution - R236

## Reference answer

About 12 mV ($\Delta V_Y \approx 11.6$ mV, in the same direction as $\Delta V_P$).

- $g_{m3} = \sqrt{2(134\ \mu\mathrm{A/V^2})(80)(0.3\ \mathrm{mA})} = 2.54$ mS; $r_{O2} = r_{O3} = 1/(\lambda I_D) = 1/(0.1\times 0.3\ \mathrm{mA}) = 33.3$ kΩ; $g_{m3}r_{O3} = 84.5$.
- Node Y sees $r_{O2}$ to ground and the cascode from P: $\dfrac{\Delta V_Y}{\Delta V_P} = \dfrac{r_{O2}}{r_{O2} + r_{O3} + g_{m3}r_{O3}r_{O2}} = \dfrac{1}{2 + g_{m3}r_{O3}} = \dfrac{1}{86.5}$.
- $\Delta V_Y \approx 1\ \mathrm{V}/86.5 \approx 11.6$ mV (≈ 1 V/($g_{m3}r_{O3}$) = 11.8 mV).

## Grading notes

+2: $\Delta V_Y$ = 10–13 mV, i.e., $\Delta V_P/(g_{m3}r_{O3})$ approximately, with $g_m \approx 2.5$ mS and $r_O \approx 33$ kΩ. +1: correct expression with a numerical slip (e.g., 8–16 mV). 0: correct attenuation idea but $r_O$ or $g_m$ wrong by a large factor. -2 (asserted as fact): $\Delta V_Y$ = 1 V or 0.5 V (no shielding), exactly 0, or attenuation by $g_mr_O$ squared (≈ 0.1 mV).
