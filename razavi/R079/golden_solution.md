# Golden Solution - R079

## Reference answer

Same shape as with zero bulk voltage, but the body effect raises $V_{TH}$ to ≈ 0.893 V, so the overdrive is only ≈ 0.307 V: the triode region ends at $V_{DS} \approx 0.31$ V and the saturation plateau is higher, $g_mr_O \approx 2/(\lambda V_{ov}) \approx 65$ (≈ 67 at the edge rising to ≈ 85 at 3 V with the $(1+\lambda V_{DS})$ factor in $g_m$).

- $V_{SB} = 1$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.9} - \sqrt{0.9}) = 0.893$ V; $V_{ov} = 0.307$ V; $I_D \approx 0.63$ mA in saturation (vs 1.68 mA with zero bulk voltage).
- Triode ($V_{DS} < 0.307$ V): $g_mr_{ds} = V_{DS}/(0.307 - V_{DS})$: 0.19 at 0.05 V, 0.48 at 0.1 V, 1.9 at 0.2 V, rising steeply toward the edge (continuous if λ is kept in the triode equation).
- Saturation: plateau ≈ 65 versus ≈ 40 for zero bulk voltage — a lower overdrive gives a higher intrinsic gain (at a lower current).

## Grading notes

+2: $V_{TH}$ ≈ 0.89 V (±0.02), break point at ≈ 0.31 V, small rising triode values, and a saturation plateau ≈ 65 (65–85 depending on convention), higher than for zero bulk bias. +1: body effect included but one of the regions described only qualitatively. 0: body effect ignored (the same curve as for zero bulk voltage) with otherwise sound analysis. -2 (asserted as fact): threshold lowered by the negative bulk voltage, saturation plateau lower than for zero bulk bias as a result of a formula error, or $g_{mb}$ added to the intrinsic gain so as to change the conclusion.
