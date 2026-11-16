# Golden Solution - G032

## Reference answer

Junction depth $x_j \approx 2.3\ \mu$m; sheet resistance $R_\square \approx 1.66\ \mathrm{k}\Omega/\square$ (≈ 1.58 kΩ/□ if the background acceptors are not subtracted).

- $N_D(x) = 10^{17}e^{-x/0.5\,\mu\mathrm{m}}$. The junction is where $N_D = N_A = 10^{15}$: $x_j = 0.5\ \mu\mathrm{m}\times\ln 100 = 2.30\ \mu$m.
- Net donors per unit area in the layer: $\int_0^{x_j}(N_D - N_A)\,dx = 10^{17}(0.5\times10^{-4})(1 - 0.01) - 10^{15}(2.30\times10^{-4}) = 4.95\times10^{12} - 0.23\times10^{12} = 4.72\times10^{12}\ \mathrm{cm^{-2}}$.
- $R_\square = \left[q\mu_n\int_0^{x_j}(N_D-N_A)dx\right]^{-1} = 1/(1.6\times10^{-19}\times800\times4.72\times10^{12}) = 1.66\ \mathrm{k}\Omega/\square$.

## Grading notes

+2: $x_j$ = 2.3 μm (±0.05) and $R_\square$ in 1.55–1.70 kΩ/□: integrating to $x_j$ or to infinity, with or without subtracting the background doping (1.56, 1.58 or 1.65 kΩ/□), all earn +2. +1: both right in method with a small slip in one value. 0: only $x_j$ right, or $R_\square$ computed as ρ/T with an average doping and a clearly different result (> ±25%). −2 (asserted as fact): junction placed at 0.5 μm (the 1/e depth), $R_\square$ off by orders of magnitude because of a wrong formula or model, or the layer treated as $p$-type. A correct method ($x_j$ right and $R_\square = [q\mu_n\int N\,dx]^{-1}$ set up correctly) with a single unit-conversion or arithmetic slip in $R_\square$ (e.g. 0.5 μm taken as $5\times10^{-6}$ cm, giving ≈ 30 kΩ/□) scores 0, however large the resulting error.
