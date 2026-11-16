# Golden Solution - A165

## Reference answer

$|V_{OS}|_{\max} \approx 0.364\ \mathrm{V} + 0.2\sqrt{I_{SS}/(110\ \mu\mathrm{A/V^2})}$, ≈ 0.55 V at $I_{SS} = 100\ \mu$A. With the load assumed perfectly matched (input pair only): $0.3 + 0.1\sqrt{I_{SS}/110\ \mu} \approx 0.40$ V.

- Assumptions: square-law devices, λ and body effect neglected (M1 and M2 share a source). Paired devices can sit at opposite ends of their tolerance bands, which is very pessimistic: real matched-pair mismatch is millivolts, since the tabulated spreads are process (lot-to-lot) variations common to all devices. $V_{OS}$ is the input that restores the balanced condition $I_2 = I_4$ with the output at the mirror-node voltage.
- $\beta_1 = \beta_2 = K'_N \cdot 1$ and $\beta_3 = \beta_4 = K'_P \cdot 0.1$. At balance $V_{ov1} = \sqrt{I_{SS}/\beta_1}$ and $g_{m3}/g_{m1} = \sqrt{\beta_3/\beta_1} = \sqrt{5/110} = 0.213$.
- First-order: $V_{OS} \approx \Delta V_{T12} + (g_{m3}/g_{m1})\Delta V_{T34} + \frac{V_{ov1}}{2}\left(\frac{\Delta\beta_{12}}{\beta} + \frac{\Delta\beta_{34}}{\beta}\right)$. Worst case: $\Delta V_T = 0.3$ V for each pair and $\Delta\beta/\beta = 0.2$ for each pair, with signs adding: $0.3 + 0.064 + 0.2V_{ov1}$.
- At $I_{SS} = 100\ \mu$A, $V_{ov1} = 0.953$ V, giving 0.555 V. Solving the large-signal equations at the worst corner gives the same 0.555 V. The input-pair part alone is $0.3 + \sqrt{I_{SS}/(0.9\beta_1)} - \sqrt{I_{SS}/(1.1\beta_1)} = 0.396$ V. (This bias needs a large supply: $V_{SG3} \approx 0.7 + 4.5$ V with $W_3/L_3 = 0.1$.)

## Grading notes

+2: a stated worst-case model with paired devices at opposite extremes, the threshold term 0.3 V, the load term weighted by $g_{m3}/g_{m1} \approx 0.21$ (≈ 0.06 V), the β terms ∝ overdrive, and ≈ 0.55 V (0.5–0.6 V) at 100 µA, or an equivalent expression in $I_{SS}$. +1: ≈ 0.40 V with the load explicitly assumed matched (the input pair alone), or the full analysis with one slip. 0: only threshold terms (0.30–0.36 V) with β mismatch omitted, or tolerances applied as ±0.15 V differences (half the worst case) with consistent reasoning. −2 (asserted as fact): a millivolt-level offset obtained by treating the parameters as matched, contradicting the stated instruction; load threshold mismatch weighted by $g_{m1}/g_{m3}$ (≈ 1.4 V); a result independent of the given tolerances; or misread device sizes ($W_1/L_1 = 1$ and $W_3/L_3 = 0.1$ are given), e.g. all four W/L taken as equal, which makes the load term ≈ 0.2 V instead of ≈ 0.06 V. Check the terms, not only the total: a misread-size analysis scores −2 even when its total happens to fall in 0.5–0.6 V.
