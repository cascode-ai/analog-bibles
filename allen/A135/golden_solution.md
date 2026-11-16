# Golden Solution - A135

## Reference answer

All W/L = 1: $g_{md} \approx 104.9\ \mu$S and $A_v \approx 23.3$ V/V. With $W_1/L_1 = W_2/L_2 = 10$: $g_{md} \approx 331.7\ \mu$S and $A_v \approx 73.7$ V/V.

- $g_{md} = g_{m1} = \sqrt{K'_N I_{SS} W_1/L_1}$ (each input transistor carries $I_{SS}/2$; the mirror adds the two half-currents): $\sqrt{110\ \mu \cdot 100\ \mu \cdot 1} = 104.9\ \mu$S, or $\sqrt{110\ \mu \cdot 100\ \mu \cdot 10} = 331.7\ \mu$S.
- $R_{out} = 1/(g_{ds2} + g_{ds4})$ with $g_{ds2} + g_{ds4} = (\lambda_N + \lambda_P)(I_{SS}/2) = 0.09 \cdot 50\ \mu = 4.5\ \mu$S, so $R_{out} = 222$ kΩ in both cases.
- $A_v = g_{md}/(g_{ds2} + g_{ds4}) = 104.9/4.5 = 23.3$ and $331.7/4.5 = 73.7$. The load W/L does not enter. The gain rises as $\sqrt{W_1/L_1}$, here by $\sqrt{10}$.

## Grading notes

Credit is split equally between the two cases. +2: both cases within ±3 % (104.9 µS / 23.3; 331.7 µS / 73.7). Including the finite mirror gain $g_{m3}/(g_{m3}+g_{ds3}+g_{ds1})$ gives 101.7 µS / 22.6 V/V and 321.7 µS / 71.5 V/V; these are also correct (+2), and giving both the ideal-mirror and the corrected values is not a conflict. A mistyped intermediate expression that the later numbers show was not actually used is a minor issue. +1: one case fully right and the other off by a slip. 0: one case right and the other wrong. −2 (asserted as fact): $g_{ds}$ evaluated with $I_{SS}$ instead of $I_{SS}/2$ (giving 11.7 and 36.8 V/V), $g_{md}$ taken as $\sqrt{2K'I_{SS}W/L}$ or as half of $g_{m1}$, or the gain claimed to depend on the load W/L.
