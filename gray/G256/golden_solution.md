# Golden Solution - G256

## Reference answer

$Z_{out} \approx 39$ mΩ (0.0386 Ω), up from ≈ 8.7 mΩ with ideal current drive.

- Input of the basic amplifier now $1\text{k}\|10\text{k}\|5.2\text{k} = 774$ Ω, so $a = -774\times93.3^2\times120.2 = -8.09\times10^8$ Ω and $T = 8.09\times10^4$.
- $Z_{out} = 3125/(1+T) = 38.6$ mΩ. (Return ratio check: $\mathcal{R} = 82{,}940$, $R_{out}(g_{m1}{=}0) = 3202$ Ω, $R_{out} = 38.6$ mΩ.)

## Grading notes

+2: ≈ 39 mΩ (±5%) with the reduced loop gain explained. +1: method right with a slip (±15%). 0: correct qualitative trend only. −2 (asserted as fact): output resistance unchanged or lower than with an ideal source, or the 1 kΩ treated as a series resistor.
