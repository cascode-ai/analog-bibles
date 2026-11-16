# Golden Solution - A434

## Reference answer

$I = 0.5$ mA.

- $v_{out} = RI(b_0 + b_1/2 + \cdots + b_7/128) = 2RI\,D$, $D = \sum b_i/2^{i+1}$ (positive: the sinks draw current out of the summing node through R).
- Full-scale range (the limit for D → 1) = $2RI$ = 1 V → $I = 1\ \mathrm{V}/(2\cdot1\ \mathrm{k\Omega}) = 0.5$ mA. (If instead the all-ones output, $2RI(255/256)$, is set to 1 V: $I$ = 0.502 mA.)

## Grading notes

+2: 0.5 mA, or 0.502 mA with the all-ones convention stated. +1: correct expression with a minor numerical slip. −2 (asserted as fact): 1 mA (sum of the sinks taken as I), 3.9 µA, or any value from a misread weighting.
