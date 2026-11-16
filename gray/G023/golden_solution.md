# Golden Solution - G023

## Reference answer

For this long device $\mathcal{E}_cL = 15$ V ≫ the overdrives, so velocity saturation changes the curves only slightly (−3% to −13% in the active-region current).

- Without velocity saturation (square law): triode $I_D = \tfrac{k'}{2}\tfrac{W}{L}(2V_{ov}V_{DS} - V_{DS}^2)$, flat for $V_{DS} \ge V_{ov}$ at $I_D = \tfrac{k'}{2}\tfrac{W}{L}V_{ov}^2$: 0.155, 1.90, 5.59 mA, reached at $V_{DS}$ = 0.4, 1.4, 2.4 V ($\tfrac{k'}{2}\tfrac{W}{L} = 0.97$ mA/V²).
- With velocity saturation: triode $I_D = \dfrac{\tfrac{k'}{2}\tfrac{W}{L}(2V_{ov}V_{DS} - V_{DS}^2)}{1 + V_{DS}/(\mathcal{E}_cL)}$; the current stops rising at $V_{DS(act)} = \mathcal{E}_cL\left(\sqrt{1+2V_{ov}/(\mathcal{E}_cL)}-1\right)$ = 0.395, 1.34, 2.23 V, and is then constant at $I_D = \tfrac{k'}{2}\tfrac{W}{L}V_{DS(act)}^2$ = 0.151, 1.74, 4.84 mA (ratios 0.97, 0.92, 0.87 of the square-law values).
- Triode-region example ($V_{GS}$ = 3 V): at $V_{DS}$ = 1 V, 3.46 mA vs 3.69 mA; at 2 V, 4.79 vs 5.43 mA.
- The two families nearly coincide; the difference grows with overdrive and $V_{DS}$ (largest for $V_{GS}$ = 3 V).

## Grading notes

+2: square-law curves (0.155/1.90/5.59 mA, saturating at $V_{DS} = V_{ov}$) and velocity-saturated curves slightly lower (≈ 0.151/1.74/4.84 mA, saturating at slightly smaller $V_{DS}$ ≈ 0.39/1.34/2.23 V), values within ±5%, with the reduction growing with overdrive (≈ 3% to 13%). How this reduction is described in words (small, modest, or noticeable at $V_{GS}$ = 3 V) does not affect the score when the numbers are right; only a large (> 30%) reduction claimed for this device is wrong (see −2). The first-order form $I_D \approx \tfrac{k'}{2}\tfrac{W}{L}V_{ov}^2/(1+V_{ov}/\mathcal{E}_cL)$ (0.151/1.74/4.82 mA) is within tolerance here. +1: correct comparison with one value slip, or active-region values right but triode region not discussed. 0: square-law curves right but velocity-saturated currents wrong by more than 10% or missing. -2 (asserted as fact): velocity saturation increasing the current, a large (> 30%) reduction claimed for this long device, or $I_D$ continuing to rise with $V_{DS}$ in the active region although λ = 0.
