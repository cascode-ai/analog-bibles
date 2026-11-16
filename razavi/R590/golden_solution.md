# Golden Solution - R590

## Reference answer

Gain error ≈ 17%: the closed-loop gain is ≈ 3.32 instead of the nominal $C_1/C_3 = 4$. The first-order formula $(C_1 + C_3)/(C_3A_v)$ gives 20.5%.

- Open-loop gain (differential half circuit): $g_{m1} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66$ mS; $r_{O1} = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ; $r_{O3} = 1/(0.2 \times 0.5\ \mathrm{mA}) = 10$ kΩ. So $A_v = g_{m1}(r_{O1} \parallel r_{O3}) = 3.66\ \mathrm{mS} \times 6.67\ \mathrm{k\Omega} = 24.4$.
- Feedback factor $\beta = C_3/(C_1 + C_3) = 0.2$, so $\beta A_v = 4.88$.
- Closed-loop gain $= (C_1/C_3)/(1 + 1/(\beta A_v)) = 4/1.205 = 3.32$, and the gain error $= 1/(1 + \beta A_v) = 17.0\%$. The error is large because a single-stage pair with these loads has a gain of only ≈ 24.

## Grading notes

+2: $A_v$ ≈ 24.4 (±3%), β = 0.2, and a gain error of ≈ 17% (exact) or ≈ 20.5% (first-order formula), i.e., a closed-loop gain of ≈ 3.3. 0: right method with an arithmetic slip. -2 (asserted as fact): $A_v$ computed with $r_{O1} + r_{O3}$ or with the full tail current in one device, or a gain-error formula without the feedback factor (e.g., $1/A_v$ ≈ 4%).
