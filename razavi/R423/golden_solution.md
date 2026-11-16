# Golden Solution - R423

## Reference answer

The differential gain at the peak drops from 24.4 to about 20 (≈ 19.8 with the half-circuit average, ≈ 20.2 from an exact nodal solution); the side whose PMOS is in triode has a half-circuit gain of only ≈ 15.

- $|V_{OD3}| = \sqrt{2(0.5\ \mathrm{m})/(38.4\ \mu \cdot 100)} = 0.510$ V; at the peak $|V_{DS3}| = 0.460$ V. Triode output resistance: $R_{on3} = 1/[\mu_pC_{ox}(W/L)(|V_{OD3}| - |V_{DS3}|)] = 1/(3.84\ \mathrm{mA/V^2} \times 0.05\ \mathrm{V}) = 5.21$ kΩ (the device still carries ≈ 0.495 mA, so $g_{m1}$ is essentially unchanged at 3.66 mS).
- Triode side: $R_1 = r_{O1}\|R_{on3} = 20\ \mathrm{k}\|5.21\ \mathrm{k} = 4.13$ kΩ → half-circuit gain $g_{m1}R_1 = 15.1$.
- Other side (its output at the low peak, $M_4$ saturated): $R_2 = r_{O2}\|r_{O4} = 6.67$ kΩ → 24.4.
- Differential gain $= g_{m1}(R_1 + R_2)/2 = 3.66\ \mathrm{mS} \times 5.40\ \mathrm{k\Omega} \approx 19.8$ (≈ 20.2 when the small asymmetry at the source node is solved exactly), about 19% below the nominal 24.4.

## Grading notes

+2: $R_{on3} \approx 5.2$ kΩ from the triode equation with the 50-mV margin, and a differential gain of ≈ 20 (19–21.5) obtained by combining the triode side ($r_{O1}\|R_{on3}$) with the saturated side; or the triode-side gain ≈ 15 and the other-side gain ≈ 24.4 clearly given together with the resulting ≈ 20. +1: correct $R_{on3}$ and the triode-side gain ≈ 15 presented as "the gain at the peak" without combining with the other side; or right method with a small slip. 0: identifies that the gain drops because the triode PMOS output resistance falls to $1/[\mu_pC_{ox}(W/L)\cdot 50\ \mathrm{mV}]$ but makes a slip that changes the value noticeably. -2 (asserted as fact): gain unchanged at 24.4, $R_{on3}$ computed with the full overdrive (≈ 0.5 kΩ) or with $1/(\lambda I_D)$, or the gain claimed to increase.
Keeping λ in the triode region (Level-1 model, stated in the answer) is also acceptable: $g_{ds} \approx \mu_pC_{ox}(W/L)\cdot 50\ \mathrm{mV} + \lambda_pI_D \approx 0.29$–0.31 mS, $R_{on3} \approx 3.2$–3.4 kΩ, so a differential gain of ≈ 17–18 earns +2 and the triode-side half-circuit gain ≈ 10–11 alone earns +1. This is a modeling choice, not a slip.
