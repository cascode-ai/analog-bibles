# Golden Solution - G402

## Reference answer

$I_{D51} = I_{D52} = 100\ \mu$A.

- DM unity-gain frequency: $g_{m1}/C_{Ld} = (2 \times 100\ \mu\text{A}/0.25\ \text{V})/4\ \text{pF} = 0.8\ \text{mA/V}/4\ \text{pF} = 2 \times 10^8$ rad/s.
- With the split, only $M_{52}$ responds to $v_{cmc}$: $\omega_{u,cm} = g_{m52h}/C_{Lc} = (g_{m52}/2)/C_{Lc}$. Setting it equal to $2 \times 10^8$ rad/s gives $g_{m52} = 2(2 \times 10^8)(2\ \text{pF}) = 0.8$ mA/V.
- $g_{m52} = 2I_{D52}/V_{ov52}$ → $I_{D52} = (0.8\ \text{mA/V})(0.25\ \text{V})/2 = 100\ \mu$A; $I_{D51} = 200 - 100 = 100\ \mu$A.
- (Both halves keep $V_{ov} = 0.25$ V, so the CM input range is unchanged; the price is that the low-frequency $|a_{cmc}|$ is halved.)

## Grading notes

+2: 100 μA / 100 μA with the derivation $g_{m52}/2 = g_{m1}C_{Lc}/C_{Ld}$. +1: right split with a muddled derivation. 0: correct method with a factor-of-2 slip (e.g. 50 μA / 150 μA from forgetting the half-circuit). −2 (asserted as fact): all current in $M_{52}$ or a split that increases the CMC unity-gain frequency, or the claim that splitting cannot change the unity-gain frequency.
