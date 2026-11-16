# Golden Solution - G391

## Reference answer

$C_{Ld} = 19$ pF and $C_{Lc} = 7$ pF.

- DM: the midpoint of the bridging capacitor lies on the axis of symmetry and is an ac ground for DM signals, so the 6-pF capacitor splits into two 12-pF halves to ground. $C_{Ld} = 7 + 2(6) = 19$ pF.
- CM: both ends of the 6-pF capacitor move together, so it carries no current. $C_{Lc} = 7$ pF.
- (Equivalently, the load current at $V_{o1}$ is $i_{l1} = s[7\,\text{pF}\cdot v_{o1} + 6\,\text{pF}(v_{o1} - v_{o2})]$, which gives 19 pF for $v_{o2} = -v_{o1}$ and 7 pF for $v_{o2} = v_{o1}$.)

## Grading notes

+2: $C_{Ld}$ = 19 pF and $C_{Lc}$ = 7 pF. +1: one of them right and the other off by an evident slip, or the DM load given as the full differential capacitance between outputs (7/2 + 6 = 9.5 pF) and labelled as such, with $C_{Lc}$ right. 0: only one value right. −2 (asserted as fact): $C_{Ld}$ = 13 pF (bridging capacitor counted once), $C_{Lc}$ = 13 pF or 19 pF (bridging capacitor counted in CM), or DM and CM loads claimed equal.
