# Golden Solution - R602

## Reference answer

No even harmonics (odd-symmetric characteristic); the third harmonic dominates: $\mathrm{HD3} \approx V_m^2/[32(V_{GS}-V_{TH})^2] \approx 0.17\%$. Doubling $W/L$ doubles it (≈ 0.34%); doubling $I$ (and $I_{SS}$) halves it (≈ 0.084%).
- Equilibrium overdrive: $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)} = 0.432$ V.
- $I_{D1}-I_{D2} = \tfrac12\mu_nC_{ox}\tfrac WL V_{in}\sqrt{4V_{ov}^2 - V_{in}^2} \approx \mu_nC_{ox}\tfrac WL V_{ov}V_{in}\left[1 - \dfrac{V_{in}^2}{8V_{ov}^2}\right]$; with $V_{in} = V_m\cos\omega t$ and $\cos^3 = (3\cos\omega t + \cos3\omega t)/4$: $\mathrm{HD3} \approx V_m^2/(32V_{ov}^2) = 0.01/(32\times0.1866) = 0.168\%$ (the exact square-law characteristic gives 0.169%; fifth harmonic ~$10^{-6}$).
- Double W/L: $V_{ov} = 0.305$ V → 0.335% (0.34% exact). Double I: $V_{ov} = 0.611$ V → 0.084%. HD3 $\propto (W/L)/I$.
- For comparison, a common-source stage with the same device and current has HD2 ≈ 5.8%.

## Grading notes

+2: no even harmonics, HD3 ≈ 0.17% (±5%) from $V_{ov}$ ≈ 0.43 V, and both scalings: ×2 (≈ 0.34%) for doubled W/L and ÷2 (≈ 0.084%) for doubled I. +1: main value right and one scaling missing or only qualitative. 0: correct formula with an arithmetic slip, or main value right and both scalings missing. -2 (asserted as fact): a second harmonic claimed for the symmetric pair, a wrong HD3 formula (e.g., $V_m^2/(8V_{ov}^2)$), the 100 mV applied to each gate (200 mV differential, giving 0.67%) presented as the answer, or doubling W/L said to lower the distortion.
