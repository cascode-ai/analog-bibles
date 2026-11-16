# Golden Solution - R720

## Reference answer

d ≈ 6.8 mm.

- The induced voltage is $\omega M I$, so M must fall by 4. With $M' = 0.1\ln[1 + (2h/d)^2]$ nH/mm (image theory): at d = 1 mm, $\ln(1 + 100) = 4.615$.
- Required: $\ln[1 + (10\ \mathrm{mm}/d)^2] = 4.615/4 = 1.154$, so $(10/d)^2 = e^{1.154} - 1 = 2.170$ and $d = 10/1.473 = 6.79$ mm.
- Then M ≈ 0.46 nH and the induced voltage ≈ 0.29 mV peak (from 1.85 nH and 1.16 mV peak at 1 mm).
- The approximation $0.2\ln(2h/d)$ is not valid here because d is not ≪ 2h; it would give 5.6 mm.

## Grading notes

+2: ≈ 6.8 mm (±0.2 mm) from the exact long-wire expression $\ln[1 + (2h/d)^2]$. +1: ≈ 5.6 mm from the $\ln(2h/d)$ approximation with its limitation noted, or the right equation with a small numerical slip. 0: ≈ 5.6 mm from the approximation without comment. -2 (asserted as fact): 4 mm (M ∝ 1/d assumed), 2 mm (M ∝ 1/d²), 0.25 mm or any spacing smaller than 1 mm, or a result from the self-inductance formula.
