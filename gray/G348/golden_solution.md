# Golden Solution - G348

## Reference answer

$\overline{v_i^2}/\Delta f = 4kT\left(r_b + \frac{1}{2g_m}\right) + \frac{4kT}{g_m^2R_L} = 4kT(100 + 1000 + 400)\ \Omega \approx 2.5\times10^{-17}$ V²/Hz (≈ 5 nV/√Hz; $1.8\times10^{-17}$ without the load term); $\overline{i_i^2}/\Delta f = 2q\left(I_B + \frac{I_C}{\beta^2}\right) \approx 8.5\times10^{-26}$ A²/Hz (≈ 0.29 pA/√Hz).

- $g_m = 0.5$ mS ($1/2g_m = 1$ kΩ), $r_\pi = 100$ kΩ (this sets the input resistance), $I_B = 0.26\ \mu$A.
- The low gain ($g_mR_L = 5$) makes the 10-kΩ load significant: $4kT R_L/25 = 4kT\cdot400\ \Omega$.
- $\overline{i_i^2} = 2q(0.26\ \mu\text{A} + 5.2\ \text{nA}) = 8.5\times10^{-26}$ A²/Hz (load term $4kT/(\beta^2R_L)$ negligible).

## Grading notes

+2: $\overline{v_i^2}$ between $1.8\times10^{-17}$ (load ignored) and $2.5\times10^{-17}$ V²/Hz (load included) with the $1/2g_m = 1$ kΩ term identified as dominant, and $\overline{i_i^2}$ ≈ $8.3$–$8.5\times10^{-26}$ A²/Hz. Giving $\overline{i_i^2} = 2qI_B = 8.3\times10^{-26}$ A²/Hz without the $2qI_C/\beta^2$ term (about 2%) is fully acceptable for +2 and is not an omission. A misprinted $g_m$ whose downstream values ($r_\pi$, gain, noise terms) are all correct is a typo, not the 0-level slip. +1: one slip in a minor term. 0: $g_m$ or $I_B$ wrong by a slip with the right structure. −2 (asserted as fact): $1/2g_m$ computed as 26 Ω (using 0.5 mA), $\overline{i_i^2}$ = $2qI_C$, or $r_\pi$ treated as a thermal noise source.
