# Golden Solution - R580

## Reference answer

$V_{out}$ is a staircase that changes only during the CK-low phases and approaches 2 V geometrically: 0 during the first CK-high phase, then 1 V, 1.5 V, 1.75 V, 1.875 V, 1.9375 V, …. After the k-th sharing phase $V_{out} = 2(1 - 2^{-k})$ V, so the remaining error halves every clock cycle.

- CK high: $M_2$ is off, so $V_{out}$ holds, while $C_1$ charges to $V_{in}$ = 2 V.
- CK low: $M_1$ is off and $M_2$ on; equal capacitors share charge: $V_{out}[k] = (2\ \mathrm{V} + V_{out}[k-1])/2$.
- The voltage on $C_1$ alternates between 2 V (CK high) and $V_{out}[k]$ (CK low).
- Remark: with body effect and a 3-V clock, $M_1$ can charge $C_1$ only to about $V_{DD} - V_{TH}(V_{SB}) \approx 1.96$ V, and it approaches this slowly. In practice the staircase therefore levels off near 1.96 V; with ideal switches it converges to 2 V.

## Grading notes

+2: a staircase with steps in each CK-low phase, values 1, 1.5, 1.75, … V (the closed form or the recursion), converging to 2 V (or ≈ 1.96 V with the body-effect remark), flat during CK-high phases. +1: correct recursion and limit, but unclear in which phase $V_{out}$ changes. 0: only the correct final value. -2 (asserted as fact): $V_{out}$ reaching 2 V in one cycle, converging to 1 V, or a linear ramp.
