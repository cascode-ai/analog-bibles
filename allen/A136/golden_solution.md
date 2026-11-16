# Golden Solution - A136

## Reference answer

All W/L = 1: $g_{md} \approx 70.7\ \mu$S and $A_v \approx 15.7$ V/V. With $W_1/L_1 = W_2/L_2 = 10$: $g_{md} \approx 223.6\ \mu$S and $A_v \approx 49.7$ V/V.

- $g_{md} = \sqrt{K'_P I_{SS} W_1/L_1}$: $\sqrt{50\ \mu \cdot 100\ \mu} = 70.7\ \mu$S, or $\sqrt{50\ \mu \cdot 100\ \mu \cdot 10} = 223.6\ \mu$S.
- $g_{ds2} + g_{ds4} = (\lambda_P + \lambda_N)I_{SS}/2 = 4.5\ \mu$S ($R_{out} = 222$ kΩ).
- $A_v = 70.7/4.5 = 15.7$ and $223.6/4.5 = 49.7$, lower than the n-channel-input version by $\sqrt{K'_N/K'_P} = 1.48$.

## Grading notes

Credit is split equally between the two cases. +2: both cases within ±3 %. +1: one case right and the other off by a slip. 0: one case right and the other wrong. −2 (asserted as fact): $g_{ds}$ evaluated with $I_{SS}$ (giving 7.9 and 24.8 V/V), $K'_N$ used for the p-channel input pair, or the gain claimed to depend on the load W/L.
