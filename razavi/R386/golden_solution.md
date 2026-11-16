# Golden Solution - R386

## Reference answer

Maximum closed-loop gain magnitude ≈ 1.4–1.55, i.e. $C_1/C_2 \approx 1.5$ (gain ≈ −1.43, nominal −1.5) with the usual first-order gain error $1/(\beta A)$, or $C_1/C_2 \approx 1.63$ (gain ≈ −1.55) if the error is defined exactly as $1 - |A_v|/(C_1/C_2)$. Low-frequency output impedance: $Z_{out} = r_{O1}/(1 + g_{m1}r_{O1}\,C_2/(C_1+C_2)) = r_{O1}/21 \approx 2.4/g_{m1}$ (≈ $r_{O1}/20 = 2.5/g_{m1}$ with the exact convention).

Derivation ($A = g_{m1}r_{O1} = 50$):
- At low frequencies $C_2$ draws negligible current from the output, so $V_{out} = -AV_X$, and $(V_{out} - V_X)C_2 = (V_X - V_{in})C_1$ gives $\dfrac{V_{out}}{V_{in}} = -\dfrac{1}{(1+1/A)C_2/C_1 + 1/A} = -\dfrac{C_1/C_2}{1 + (1 + C_1/C_2)/A}$.
- Feedback factor $\beta = C_2/(C_1+C_2)$; relative gain error ≈ $1/(\beta A) = (1 + C_1/C_2)/A \le 0.05$ → $1 + C_1/C_2 \le 2.5$, $C_1/C_2 \le 1.5$; actual gain $= -1.5/(1 + 2.5/50) = -1.43$.
- Exact: $1/[1 + (1+C_1/C_2)/A] \ge 0.95$ → $1 + C_1/C_2 \le 2.63$, gain ≈ −1.55.
- Output impedance ($V_{in} = 0$, test voltage at the output): $V_X = V_{out}C_2/(C_1+C_2)$ and $I = V_{out}/r_{O1} + g_{m1}V_X$ (the series $C_1$–$C_2$ branch is an open circuit at low frequency), so $Z_{out} = r_{O1}/(1 + \beta g_{m1}r_{O1})$ with loop gain $\beta A = 20$ (19 exact): $r_{O1}/21 = (50/21)/g_{m1}$.

## Grading notes

+2: maximum gain magnitude ≈ 1.4–1.55 (C1/C2 ≈ 1.5, or ≈ 1.63 with the exact error definition; either convention if stated or used consistently) and $Z_{out} \approx r_{O1}/(1 + g_{m1}r_{O1}C_2/(C_1+C_2))$ evaluated as ≈ $r_{O1}/21$ (or $r_{O1}/20$), i.e. ≈ $2.4/g_{m1}$. The two questions carry roughly equal weight. +1: gain right but $Z_{out}$ left purely symbolic without the reduction factor 21 (20), or a small arithmetic slip. 0: one of the two parts right, the other wrong or missing. -2 (asserted as fact): a gain set by $g_{m1}r_{O1}$ (e.g. 47.5), the feedback factor taken as $C_1/(C_1+C_2)$ giving a wrong ratio, $Z_{out} = r_{O1}$ (feedback ignored), or feedback claimed to raise $Z_{out}$.
