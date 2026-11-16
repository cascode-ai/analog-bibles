# Golden Solution - G392

## Reference answer

$C_{Ld} = 3$ pF and $C_{Lc} = 13$ pF.

- The buffer inputs draw no current, so the current drawn from $V_{o1}$ is that of its 3-pF capacitor plus that of the 5-pF capacitor whose other end is driven to $-V_{o2}$: $i_{l1} = s[3\,\text{pF}\cdot v_{o1} + 5\,\text{pF}(v_{o1} + v_{o2})] = s[8\,\text{pF}\cdot v_{o1} + 5\,\text{pF}\cdot v_{o2}]$.
- DM ($v_{o2} = -v_{o1}$): $i_{l1} = s(3\,\text{pF})v_{o1}$, so $C_{Ld} = 3$ pF; the 5-pF capacitors carry no DM current because the voltage across each is $v_{o1} + v_{o2} = 0$.
- CM ($v_{o2} = v_{o1}$): $i_{l1} = s(13\,\text{pF})v_{o1}$, so $C_{Lc} = 3 + 2(5) = 13$ pF.
- The network adds CM load capacitance (useful to compensate the CMFB loop) without loading the DM path.

## Grading notes

+2: $C_{Ld}$ = 3 pF and $C_{Lc}$ = 13 pF, with reasoning that the cross-coupled capacitors see $v_{o1} + v_{o2}$. +1: both right with a muddled explanation, or one right and the other off by an evident arithmetic slip (e.g. 8 pF). 0: only one value right. −2 (asserted as fact): the 5-pF capacitors treated as ordinary capacitors between the outputs or to ground (e.g. $C_{Ld}$ = 13 or 23 pF, $C_{Lc}$ = 3 pF), i.e. the inverting buffers misread.
