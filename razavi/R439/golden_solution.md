# Golden Solution - R439

## Reference answer

$(W/L)_{1-4} \approx 16.6$ (W ≈ 8.3 μm) with $V_{OD} \approx 0.67$ V, and $(W/L)_{5-8} \approx 93$ (W ≈ 46 μm) with $|V_{OD}| \approx 0.53$ V.

- CM level at X, Y: $V_{DD} - |V_{GS9}| = 3 - (0.8 + 0.361) = 1.839$ V; a 200-mV p-p swing means X moves between 1.739 V and 1.939 V.
- Lower end: X ≥ $V_{ISS} + V_{OD1} + V_{OD3}$ → $V_{OD1} + V_{OD3} \le 1.739 - 0.4 = 1.339$ V.
- Upper end: X ≤ $V_{DD} - |V_{OD5}| - |V_{OD7}|$ → $|V_{OD5}| + |V_{OD7}| \le 3 - 1.939 = 1.061$ V.
- Minimum widths: use the full budgets; for two series devices with the same current, total width ∝ $1/V_{OD1}^2 + 1/V_{OD3}^2$ is minimized by an equal split: $V_{OD1} = V_{OD3} = 0.670$ V, $|V_{OD5}| = |V_{OD7}| = 0.530$ V.
- Sizes at 0.5 mA: $(W/L)_{1-4} = 2(0.5\ \mathrm{m})/(134\ \mu \times 0.670^2) = 16.6$; $(W/L)_{5-8} = 2(0.5\ \mathrm{m})/(38.4\ \mu \times 0.530^2) = 92.6$.
- $V_{b1}$, $V_{b2}$, $V_{b3}$ are then set to place each device at the edge of saturation at the swing extremes (e.g., $V_{b1} = 0.4 + 0.67 + V_{GS3}$).

## Grading notes

+2: X CM ≈ 1.84 V, the two overdrive budgets ($V_{OD1}+V_{OD3} \approx 1.34$ V, $|V_{OD5}|+|V_{OD7}| \approx 1.06$ V) and sizes $(W/L)_{1-4} \approx 16.6$ and $(W/L)_{5-8} \approx 93$ (±8%), or an explicitly justified unequal split that uses the full budgets. +1: budgets right but sizes from a different (stated) split, or a slip in one size. 0: one budget right and the other wrong, or the 200 mV taken as ±200 mV (budgets 1.24 V/0.96 V) with otherwise correct work. -2 (asserted as fact): swing budget written without the 400-mV tail voltage, the X level taken from a wrong device, or sizes computed with the wrong μC_ox for the device type.
