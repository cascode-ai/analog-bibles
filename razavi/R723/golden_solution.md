# Golden Solution - R723

## Reference answer

Case (b): the pad capacitance falls by roughly 4×, while the bond-wire inductance rises by only ~10–20%, so the LC-limited bandwidth rises by roughly 1.7–1.9×.

- The bandwidth (or resonance frequency) is ∝ $1/\sqrt{LC}$.
- Pad capacitance is dominated by the parallel-plate area term (∝ side²) plus a fringe term (∝ perimeter). Halving the side cuts it by 4× for the area term and 2× for the fringe. Example with a top-metal pad (7 aF/μm², 15 aF/μm): 76 fF → 20.5 fF (3.7×).
- A round wire above a ground plane has $L \approx 0.2\ln(2h/r)$ nH/mm, only logarithmic in the radius. Halving r adds $0.2\ln 2 = 0.14$ nH/mm, i.e., ~14% for a typical ~1 nH/mm wire ($\ln(2h/r) \approx 5$).
- LC product of (b)/(a) ≈ 1.14 × 0.27 ≈ 0.31, so the bandwidth is ≈ 1.8× higher. Even if the pad capacitance only halved, (b) would still win (≈ 1.3×).
- Side issues: the thinner wire has higher series resistance (and lower current capacity and mechanical robustness), and a 50-μm pad needs fine-pitch bonding; ESD and input-device capacitance may dominate the pad's own capacitance and dilute the gain.

## Grading notes

+2: case (b), with the reasoning that the pad capacitance scales with area (≈ 4× lower, 2–4× including fringe) while the wire inductance depends only logarithmically on the diameter (small increase), so $1/\sqrt{LC}$ increases. +1: case (b) with an overstated inductance increase (e.g., L ∝ 1/r, doubled) that still leads to (b), or a correct conclusion with only partial reasoning. 0: case (b) asserted with no valid comparison. -2 (asserted as fact): case (a) chosen, or the two cases claimed equivalent (e.g., inductance said to quadruple as 1/r² so that LC is unchanged).
