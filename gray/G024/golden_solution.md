# Golden Solution - G024

## Reference answer

$\mathcal{E}_cL = 1.5$ V, comparable to the overdrives, so velocity saturation lowers the current substantially: the active-region currents are 0.124, 1.05 and 2.40 mA instead of 0.155, 1.90 and 5.59 mA (ratios 0.80, 0.55, 0.43), and the curves flatten at lower $V_{DS}$.

- Without velocity saturation: same as any $W/L = 10$ device: flat at 0.155, 1.90, 5.59 mA beyond $V_{DS} = V_{ov}$ = 0.4, 1.4, 2.4 V.
- With velocity saturation: triode $I_D = \dfrac{\tfrac{k'}{2}\tfrac{W}{L}(2V_{ov}V_{DS} - V_{DS}^2)}{1 + V_{DS}/(\mathcal{E}_cL)}$; $V_{DS(act)} = \mathcal{E}_cL\left(\sqrt{1+2V_{ov}/(\mathcal{E}_cL)}-1\right)$ = 0.357, 1.04, 1.57 V; active current $\tfrac{k'}{2}\tfrac{W}{L}V_{DS(act)}^2$ = 0.124, 1.05, 2.40 mA.
- Triode example ($V_{GS}$ = 3 V): 0.95 mA vs 1.10 mA at $V_{DS}$ = 0.25 V; 2.21 vs 3.69 mA at 1 V.
- The velocity-saturated currents are spaced more evenly (closer to linear in $V_{ov}$) than the square-law ones.

## Grading notes

+2: square-law curves (0.155/1.90/5.59 mA at $V_{DS} \ge V_{ov}$) and velocity-saturated curves with active currents ≈ 0.124/1.05/2.40 mA reached at $V_{DS(act)}$ ≈ 0.36/1.04/1.57 V (±5%), with the conclusion that the effect is strong at L = 1 µm. +1: right trends with values from the first-order form $I_D \approx \tfrac{k'}{2}\tfrac{W}{L}V_{ov}^2/(1+V_{ov}/\mathcal{E}_cL)$ (0.122/0.98/2.15 mA, up to ≈ 11% low) presented as an approximation, or one slip. 0: square-law curves right but velocity-saturated values wrong by more than 15% or missing. -2 (asserted as fact): velocity saturation increasing the current, the effect called negligible for this device, or the saturated current computed as the fully velocity-limited $k'W\mathcal{E}_cV_{ov}$ (1.2/4.1/7.0 mA) without justification.
