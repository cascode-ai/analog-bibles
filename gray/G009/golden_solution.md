# Golden Solution - G009

## Reference answer

In this range avalanche multiplication is negligible ($M - 1 < 5\times10^{-5}$ at 10 V), so the curves are straight lines $I_C = 100\,I_B(1 + V_{CE}/50)$ that all extrapolate to $V_{CE} = -V_A = -50$ V:
- $I_B$ = 1 µA: 0.100 mA at 0 V → 0.120 mA at 10 V (slope 2 µA/V, $r_o$ ≈ 500 kΩ)
- $I_B$ = 10 µA: 1.00 → 1.21 mA (20 µA/V, 50 kΩ)
- $I_B$ = 30 µA: 3.00 → 3.62 mA (60 µA/V, 16.7 kΩ)
- $I_B$ = 60 µA: 6.00 → 7.24 mA (120 µA/V, 8.3 kΩ)
Each curve rises by 20% over the 10-V span; the slope is proportional to the current. (The equation does not cover saturation near $V_{CE} \approx 0$.)

## Grading notes

+2: straight lines starting at $100I_B$ and rising 20% by 10 V (≈ 0.12, 1.2, 3.6, 7.2 mA, ±5%), with avalanche effects recognized as negligible; mention of the common −50 V intercept is a plus. +1: right lines with a slip in one value. 0: shape right but the Early slope missing (flat lines) or values clearly off. -2 (asserted as fact): significant avalanche upturn within 0–10 V, curves converging to a different intercept, or currents not proportional to $I_B$.
