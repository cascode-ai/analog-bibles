# Golden Solution - R601

## Reference answer

Only a second harmonic appears (the square-law drain current is exactly quadratic): $\mathrm{HD2} = V_m/[4(V_{GS}-V_{TH})] \approx 5.8\%$. Doubling $W/L$ raises it to ≈ 8.2% (×√2); doubling $I$ lowers it to ≈ 4.1% (÷√2).
- Overdrive: $V_{GS}-V_{TH} = \sqrt{2I/(\mu_nC_{ox}W/L)} = \sqrt{2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2}\times40)} = 0.432$ V.
- $I_D = \tfrac12\mu_nC_{ox}\tfrac WL(V_{ov} + V_m\cos\omega t)^2 = I + \mu_nC_{ox}\tfrac WL V_{ov}V_m\cos\omega t + \tfrac14\mu_nC_{ox}\tfrac WL V_m^2[1+\cos 2\omega t]$, so $\mathrm{HD2} = V_m/(4V_{ov}) = 0.1/(4\times0.432) = 5.79\%$ (THD = HD2; as a power ratio, $3.4\times10^{-3}$, or −24.7 dB). The output voltage $V_{DD} - R_DI_D$ has the same ratio.
- Double W/L: $V_{ov} = 0.305$ V → HD2 = 8.19%. Double I: $V_{ov} = 0.611$ V → HD2 = 4.09%. The distortion depends only on the overdrive, $\propto\sqrt{(W/L)/I}$.

## Grading notes

+2: HD2 ≈ 5.8% (±5%) from $V_{ov}$ ≈ 0.43 V, no third harmonic in the square-law model, and both scalings: ≈ 8.2% (×√2) for doubled W/L and ≈ 4.1% (÷√2) for doubled I. +1: main value right and one scaling missing or only given qualitatively with the right direction. 0: correct formula with an arithmetic slip in $V_{ov}$ that changes the value by more than 5%, or main value right and both scalings missing. -2 (asserted as fact): a wrong distortion formula (e.g., $V_m/(2V_{ov})$ ≈ 11.6%, or a dominant third harmonic), doubling W/L said to reduce the distortion or doubling I to increase it.
