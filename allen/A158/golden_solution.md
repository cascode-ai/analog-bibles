# Golden Solution - A158

## Reference answer

$v_o/v_{in} \approx 116$ V/V (noninverting from $v_1$).

- Currents: M1–M4 50 µA, M6, M7 100 µA. $g_{m1} = g_{m2} = \sqrt{2 \cdot 110\ \mu \cdot 100 \cdot 50\ \mu} = 1049\ \mu$S.
- Signal path: M1's current change $g_{m1}v_{in}/2$ goes, through the fixed M6 current, into M3 with opposite sign, and is mirrored by M4 to the output. M2's change $-g_{m2}v_{in}/2$ acts directly at the output. The total is $g_{m1}v_{in}$ into the output.
- Output conductance: $g_{ds2} + g_{ds4} + g_{ds7} = 0.04 \cdot 50 + 0.04 \cdot 50 + 0.05 \cdot 100 = 2 + 2 + 5 = 9\ \mu$S ($R_{out} = 111$ kΩ).
- $A_v = 1049/9 = 116.5$. A full nodal analysis gives 116.1.

## Grading notes

+2: $A_v$ = 112–120 with all three output conductances ($g_{ds2}$, $g_{ds4}$, $g_{ds7}$). +1: a slip in one conductance (within ±10 %). 0: one output conductance omitted (≈ 150, the book's value) with the rest right. −2 (asserted as fact): only half of $g_{m1}$ reaching the output (≈ 58), the output resistance taken as a cascode, M6/M7 currents taken as 50 µA, or a gain magnitude below 10.
