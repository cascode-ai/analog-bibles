# Golden Solution - G050

## Reference answer

$A_0 \approx 37{,}000$ mil² (process A), ≈ 20,000 mil² (B), ≈ 12,000 mil² (C) — the die sizes where each curve crosses 36.8%.

Comparison (exponential model vs curve):
- A: 10k mil² 76% vs 71%; 40k 34% vs 34%; 60k 20% vs 21%; 80k 12% vs 14.5%; 100k 6.8% vs 11%.
- B: 10k 60% vs 55%; 30k 22% vs 22%; 60k 4.8% vs 6.9%; 100k 0.6% vs 2.9%.
- C: 10k 43% vs 42.5%; 30k 7.8% vs 8.2%; 50k 1.4% vs 2.8%; 75k 0.17% vs 1.0%.

The single exponential agrees with the curves (within ~10–20%) for die sizes up to about $2A_0$ (it is slightly optimistic for very small dice on curve A), but beyond that it falls off much faster than the observed curves, which flatten out on the log scale (a tail produced by non-uniform, clustered defect densities). At large die sizes the exponential underestimates the yield by factors of ≈ 1.6 (A at 100k), ≈ 5 (B at 100k) and ≈ 6 (C at 75k); the discrepancy is worst for the most complex process.

## Grading notes

+2: $A_0$ within ±15% for all three (A 31–43k, B 17–23k, C 10–14k mil²), and a comparison stating that the exponential matches near and below $A_0$ but predicts too low a yield (falls faster) at large die sizes, with some quantitative illustration. +1: $A_0$ values right and the comparison only qualitative or partly wrong in one respect (e.g. says agreement is good everywhere except "slightly" at large size), or one $A_0$ off by > 15%. 0: $A_0$ values right with no comparison, or comparison right with $A_0$ misread for two processes. −2 (asserted as fact): $A_0$ read at the 50% or 10% point, the exponential claimed to overestimate the yield at large die sizes, or $A_0$ ordering reversed (C largest).
