# Golden Solution - G246

## Reference answer

The closed-loop characteristic is essentially a straight line of slope ≈ 10 up to hard clipping:
- $|S_i| \le 0.70014$ V: slope $A_1 = 50{,}000/5001 = 9.998$ ($S_o$ up to ±7 V);
- $0.70014\text{ V} \le |S_i| \le 1.50054$ V: slope $A_2 = 20{,}000/2001 = 9.995$ ($S_o$ from ±7 to ±15 V);
- $|S_i| \ge 1.50054$ V: $S_o = \pm 15$ V.

Derivation: $T_1 = 5000$, $T_2 = 2000$. Breakpoint 1: $S_\epsilon = 0.14$ mV, $S_i = 0.14\text{ mV} + 0.1\times 7 = 0.70014$ V. Breakpoint 2: $S_\epsilon = 0.14 + 8/20{,}000\ \text{V} = 0.54$ mV, $S_i = 0.54\text{ mV} + 1.5\text{ V} = 1.50054$ V. The two slopes differ by only 0.03% ($A_1/A_2 = 1.0003$), so the slope change of the basic amplifier is practically invisible; the saturation at ±15 V is unchanged.

## Grading notes

+2: slopes ≈ 9.998 and 9.995 (or "both ≈ 10, differing by ~0.03%"), breakpoints at ≈ 0.700 V and ≈ 1.5005 V (≈ 1.5 V acceptable if the tiny offset is mentioned or the values are given to 3 significant figures), clipping at ±15 V. +1: correct shape and clipping point with the first breakpoint missing or a small slip. 0: only "slope ≈ 1/f = 10" stated with no breakpoints. −2 (asserted as fact): feedback said to eliminate clipping, slopes far from 10, or clipping placed at the open-loop input level (0.54 mV).
