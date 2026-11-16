# Golden Solution - R357

## Reference answer

$R_S$ contributes $2/\gamma$ times the noise power of $M_1$: three times as much for γ = 2/3 (twice for γ = 1). The degeneration resistor dominates.

- $I_DR_S = V_{ov}$ and $g_m = 2I_D/V_{ov}$ give $g_mR_S = 2$, i.e. $R_S = 2/g_m$.
- Input-referred contributions: $R_S$ → $4kTR_S = 8kT/g_m$; $M_1$ → $4kT\gamma/g_m$. Ratio $2/\gamma$ (the same ratio holds at the output, since both see the same gain).
- In rms voltage: $\sqrt{3} \approx 1.7$ times $M_1$'s for γ = 2/3. In addition, the $R_D$ term is multiplied by $(1+g_mR_S)^2 = 9$ compared with an undegenerated stage of the same $g_m$.

## Grading notes

+2: $g_mR_S = 2$ and the ratio $2/\gamma$ (= 3 in power for γ = 2/3, or ≈ 1.7 in rms), with the conclusion that $R_S$ contributes more than $M_1$. +1: correct ratio stated only in one form without stating which is larger, or a minor slip. 0: correct method but a slip in $g_mR_S$ (e.g., 1) that changes the ratio, stated with sound reasoning. -2 (asserted as fact): $R_S$ said to contribute less than $M_1$, or the two said to be equal, or $R_S$'s noise divided by the gain while $M_1$'s is not.
