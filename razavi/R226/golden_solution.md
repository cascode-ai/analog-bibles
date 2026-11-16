# Golden Solution - R226

## Reference answer

$\dfrac{1}{I_{out}}\dfrac{\partial I_{out}}{\partial V_{DD}} = \dfrac{2}{V_{GS}-V_{TH}}\cdot\dfrac{R_2}{R_1+R_2} \approx 2.37\ \mathrm{V^{-1}}$ (i.e., about 237% per volt; $\partial I_{out}/\partial V_{DD} \approx 1.19$ mA/V). Expressed as a dimensionless relative sensitivity, $(V_{DD}/I_{out})\,\partial I_{out}/\partial V_{DD} = 2V_{GS}/(V_{GS}-V_{TH}) \approx 7.1$: a 1% change in $V_{DD}$ changes $I_{out}$ by about 7%.

- $I_{out} = \tfrac12\mu_nC_{ox}\frac{W}{L}\left(\frac{R_2}{R_1+R_2}V_{DD} - V_{TH}\right)^2$, so $\partial I_{out}/\partial V_{DD} = \mu_nC_{ox}\frac{W}{L}(V_{GS}-V_{TH})\frac{R_2}{R_1+R_2} = g_m\frac{R_2}{R_1+R_2}$.
- Design point: $V_{GS}-V_{TH} = \sqrt{2(0.5\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.273$ V, $V_{GS} = 0.973$ V, $R_2/(R_1+R_2) = 0.324$, $g_m = 3.66$ mS.
- $\partial I_{out}/\partial V_{DD} = 3.66\ \mathrm{mS} \times 0.324 = 1.19$ mA/V; divided by 0.5 mA: 2.37 V⁻¹.

## Grading notes

+2: either normalization stated and numerically right within ±5%: 2.37 V⁻¹ (per-volt relative sensitivity) or ≈ 7.1 (dimensionless, $V_{DD}$-normalized), with the correct expression $2R_2/[(R_1+R_2)(V_{GS}-V_{TH})]$ or equivalent. +1: correct expression with a small numerical slip, or only the unnormalized 1.19 mA/V given correctly. 0: right method but the divider ratio or overdrive taken from a wrong design point. -2 (asserted as fact): sensitivity derived as linear in $V_{DD}$ without the factor 2 from the square law (e.g., 1.19 V⁻¹ or 3.6), a sign error claiming $I_{out}$ falls with $V_{DD}$, or the claim that the current is independent of $V_{DD}$.
