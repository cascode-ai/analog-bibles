# Golden Solution - G025

## Reference answer

$\mathcal{E}_cL = 0.75$ V, so velocity saturation dominates: the active-region currents are 0.105, 0.754 and 1.61 mA instead of 0.155, 1.90 and 5.59 mA (ratios 0.67, 0.40, 0.29), reached at $V_{DS(act)}$ = 0.33, 0.88, 1.29 V instead of 0.4, 1.4, 2.4 V.

- Without velocity saturation: identical to any $W/L = 10$ device (0.97 mA/V² × $V_{ov}^2$ beyond $V_{DS} = V_{ov}$).
- With velocity saturation: triode $I_D = \dfrac{\tfrac{k'}{2}\tfrac{W}{L}(2V_{ov}V_{DS} - V_{DS}^2)}{1 + V_{DS}/(\mathcal{E}_cL)}$; $V_{DS(act)} = \mathcal{E}_cL\left(\sqrt{1+2V_{ov}/(\mathcal{E}_cL)}-1\right)$ = 0.328, 0.882, 1.290 V; active current $\tfrac{k'}{2}\tfrac{W}{L}V_{DS(act)}^2$ = 0.105, 0.754, 1.615 mA.
- Triode example ($V_{GS}$ = 3 V): 0.83 vs 1.10 mA at 0.25 V; 1.58 vs 3.69 mA at 1 V.
- The current steps between $V_{GS}$ values are now much more evenly spaced (0.65 and 0.86 mA, against 1.75 and 3.69 mA without velocity saturation; current approaching linear in $V_{ov}$, the fully velocity-limited asymptote being $k'W\mathcal{E}_cV_{ov}$), and the short device delivers much less current than its $W/L$ predicts by the square law.

## Grading notes

+2: square-law curves (0.155/1.90/5.59 mA) and velocity-saturated curves with active currents ≈ 0.105/0.754/1.61 mA at $V_{DS(act)}$ ≈ 0.33/0.88/1.29 V (±5%), showing a large reduction (≈ 33%/60%/71%) that grows with overdrive, i.e. velocity saturation dominates. Remarking that the curves become more evenly spaced (current tending to linear in $V_{ov}$) is welcome but not required. +1: right trends with values from the first-order form $I_D \approx \tfrac{k'}{2}\tfrac{W}{L}V_{ov}^2/(1+V_{ov}/\mathcal{E}_cL)$ (0.101/0.66/1.33 mA) presented as an approximation, or one slip. 0: square-law curves right but velocity-saturated values wrong by more than 20% or missing. -2 (asserted as fact): velocity saturation increasing the current, the effect called small, or the fully velocity-limited current $k'W\mathcal{E}_cV_{ov}$ (0.58/2.0/3.5 mA) used as the result.
