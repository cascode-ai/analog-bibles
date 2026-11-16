# Golden Solution - A289

## Reference answer

$R_{s,C1} \approx 1/g_{mC1}$ and $R_{s,C2} \approx 1/g_{mC2}$.

- $R_s = (r_{ds} + R_D)/(1 + g_mr_{ds})$ for a cascode device with drain load $R_D$.
- MC1: unaffected by the output termination; its drain sees the diode-like mirror input ($R_D \approx 1/g_{m3}$), so $R_{s,C1} \approx 1/g_{mC1}$.
- MC2: with $v_{o1}$ shorted, $R_D = 0$ and $R_{s,C2} = r_{dsC2}/(1+g_{mC2}r_{dsC2}) \approx 1/g_{mC2}$.

## Grading notes

+2: both ≈ $1/g_m$ of the respective cascode device, with the reason (MC1 drives the low-impedance mirror input; MC2's drain is shorted). Treating MC1's drain as an ac ground because the mirror input is a low-impedance node (≈ $1/g_{m3}$), which gives $r_{dsC1}/(1+g_{mC1}r_{dsC1}) \approx 1/g_{mC1}$, is an accepted simplification, not a misreading. +1: correct results with reasoning only sketched. 0: one of the two right. −2 (asserted as fact): $R_{s,C2}$ still ≈ $r_{ds}$ or larger with the output shorted, or $R_{s,C1}$ large.
