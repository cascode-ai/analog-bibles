# Golden Solution - A403

## Reference answer

$|V_{OS}| \approx 0.31$ V (0.314 V).
- $V_{OS} = V_{GS1}-V_{GS2} = (V_{T1}-V_{T2}) + \sqrt{\dfrac{2I}{K'_1(W/L)}}-\sqrt{\dfrac{2I}{K'_2(W/L)}}$.
- Worst case: M1 with $V_{T1} = 0.85$ V and $K'_1 = 99\ \mu\mathrm{A/V^2}$, M2 with $V_{T2} = 0.55$ V and $K'_2 = 121\ \mu\mathrm{A/V^2}$.
- Overdrives: $\sqrt{20/990} = 0.1421$ V and $\sqrt{20/1210} = 0.1286$ V; difference 0.0136 V.
- $|V_{OS}| = 0.30 + 0.0136 = 0.314$ V, dominated by the threshold spread.

## Grading notes

+2: ≈ 0.31 V (0.30–0.32) with the threshold difference 0.3 V and the $K'$ term ≈ 14 mV added with the correct (worst-case) polarity. +1: 0.3 V (threshold only) with the $K'$ effect stated as small but not computed, or the $K'$ term subtracted by a sign slip (≈ 0.286 V). 0: correct expression with a wrong tolerance applied (e.g., ±0.15 V on only one device giving 0.15 V). −2 (asserted as fact): offset claimed independent of $V_T$ mismatch, or computed as a current ratio rather than a voltage.
