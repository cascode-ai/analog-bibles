# Golden Solution - G038

## Reference answer

≈ 1.15 pF for the 6-μm-wide resistor and ≈ 2.8 pF for the 12-μm-wide one (≈ 1.4 pF and 3.4 pF if the per-area capacitance is computed exactly as 1.23×10⁻⁴ pF/μm² instead of the round 10⁻⁴ pF/μm²).

- Per-area capacitance (one-sided step junction, epi is the light side): $\sqrt{q\epsilon N_D/(2\psi_0)} = 1.23\times10^{-8}$ F/cm² ≈ 1.2×10⁻⁴ pF/μm² (≈ 10⁻⁴ pF/μm² from the usual nomograph).
- 6 μm: $10\ \mathrm{k}\Omega/100\ \Omega = 100$ squares → body 600 μm × 6 μm. Bottom area $3600 + 2\times26^2 = 4952\ \mu$m². Perimeter: $2\times600 + 2\times(4\times26 - 6) = 1396\ \mu$m; quarter-cylinder sidewall $1396\times3\times\pi/2 = 6578\ \mu$m². Total ≈ 11,530 μm² → 1.15 pF (1.42 pF).
- 12 μm: body 1200 μm × 12 μm. Bottom $14{,}400 + 1352 = 15{,}752\ \mu$m². Perimeter $2400 + 2\times92 = 2584\ \mu$m → sidewall 12,177 μm². Total ≈ 27,930 μm² → 2.8 pF (3.4 pF).
- Doubling the width at constant resistance quadruples the body area, so the capacitance grows ≈ 2.4×; the sidewall is a large fraction for the narrow resistor.

## Grading notes

+2: L = 600 μm and 1200 μm, bottom plus sidewall (cylindrical π/2 or vertical-wall approximation) with the clubheads included, totals in 0.9–1.5 pF and 2.3–3.6 pF. +1: both right in method with one slip, or sidewall omitted for one width, or clubheads omitted (≈ 0.93 and 2.6 pF with sidewalls) with the omission stated. 0: only one width right, or sidewall ignored throughout (≈ 0.5 and 1.6 pF). −2 (asserted as fact): per-area capacitance off by ≥10× (e.g. using the substrate or emitter-base value), length taken as 100 μm, or capacitance claimed to decrease with width.
