# Golden Solution - R078

## Reference answer

Near zero in the triode region, rising steeply toward the triode/saturation boundary at $V_{DS} = V_{GS} - V_{TH} = 0.5$ V, then a plateau of about 40 (gently rising toward ≈ 52 at 3 V if the $(1+\lambda V_{DS})$ factor is kept in $g_m$) in saturation.

- $\beta = 13.4\ \mathrm{mA/V^2}$, $V_{ov} = 0.5$ V.
- Triode ($V_{DS} < 0.5$ V): $g_m = \beta V_{DS}$, $1/r_{ds} = \beta(V_{ov} - V_{DS})$, so $g_mr_{ds} = V_{DS}/(0.5 - V_{DS})$: 0 at $V_{DS} = 0$, 0.25 at 0.1 V, 1.0 at 0.25 V, 4 at 0.4 V, 9 at 0.45 V. (With λ = 0 in the triode equation this diverges at the edge; keeping the $(1+\lambda V_{DS})$ factor in the triode equation makes the curve continuous, reaching ≈ 42 at the edge.)
- Saturation ($V_{DS} \ge 0.5$ V, $I_D \approx 1.68$ mA): $g_mr_O = 2/(\lambda V_{ov}) = 40$, constant in the simple model; with $g_m = \beta V_{ov}(1+\lambda V_{DS})$ and $r_O = 1/(\lambda \cdot \tfrac12\beta V_{ov}^2)$ it is $40(1 + 0.1V_{DS})$: 42 at 0.5 V, 52 at 3 V.

## Grading notes

+2: break point at $V_{DS} = 0.5$ V, small and rising values in triode (≈ $V_{DS}/(V_{ov} - V_{DS})$ or equivalent), and ≈ 40 (40–52 depending on the λ convention) in saturation. +1: saturation value and break point right but the triode part only vaguely described. 0: only one of the two regions right. -2 (asserted as fact): large gain in triode and small in saturation, break point at 1.2 V or 0.7 V, or a saturation value off by a formula error (e.g., 20 or 80).
