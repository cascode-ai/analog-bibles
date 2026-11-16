# Golden Solution - A532

## Reference answer

One valid design: six cross-connected NMOS differential pairs sharing one load resistor, plus a constant current source to set the levels (other designs that meet the specification are equally valid).

Schematic:
- A resistor string from $V_{REF}$ to ground provides six reference taps $V_1 < V_2 < \dots < V_6$, e.g. $V_k = (2k - 1)V_{REF}/12$.
- Six NMOS differential pairs ($k = 1 \dots 6$), each with tail current $I$. In pair $k$ one gate is driven by $V_{in}$, the other by $V_k$.
- Output node: a load resistor $R_L$ to $V_{DD}$, plus a PMOS current source $I_C = I$ from $V_{DD}$ into the node. Connected to the node are the drains of the reference-side transistors of pairs 1, 3 and 5 and of the $V_{in}$-side transistors of pairs 2, 4 and 6. All other drains go to $V_{DD}$ (or to a matching dummy load).
- Values: $V_{DD}$ = 5 V, $I$ = 100 µA, $R_L$ = 20 kΩ ($IR_L$ = 2 V), $I_C$ = 100 µA.

Operation (current drawn from the output node $= nI$; $v_{out} = V_{DD} - (nI - I_C)R_L$):
- $V_{in} < V_1$: all pairs steer their current to the reference side, so pairs 1, 3, 5 draw $3I$ from the node: $v_{out} = 5 - 2(2) = 1$ V (start at 1 V).
- Each time $V_{in}$ passes a tap, one pair switches: above $V_1$, $n = 2$ (3 V); above $V_2$, $n = 3$ (1 V); then 3 V above $V_3$, 1 V above $V_4$, 3 V above $V_5$, and 1 V above $V_6$ (ends at 1 V).
- At each tap the switching pair splits its current $I/2 : I/2$, so $n = 2.5$ and $v_{out} = 2$ V. The output passes through 2 V at $V_{in} = V_1 \dots V_6$, six times, swinging between 1 and 3 V (smooth, near-triangular transitions whose width is set by the pairs' overdrive).
- Without $I_C$ the same connection gives levels $V_{DD} - 3IR_L$ and $V_{DD} - 2IR_L$, so $V_{DD}$ = 7 V with $IR_L$ = 2 V also works.

## Grading notes

+2: a folder made of six differential pairs (six crossings need six pairs, an even number so that start and end levels are equal) with alternating (cross-coupled) drain connections to a single-ended output, reference taps from a resistor string, and component values or level arithmetic showing low = 1 V, high = 3 V, crossings at 2 V, starting and ending at 1 V. Any other circuit that provably meets every specification (e.g., a different supply, PMOS pairs, a current-mode folder with a load) is accepted. +1: correct architecture and connection pattern but levels not set to 1/3 V (no values or wrong level arithmetic), or starts/ends at 3 V because the alternation is reversed. This includes a working folding core followed by a separate level-shifting stage that is mis-wired so that the drawn stage does not give the intended offset (e.g., an op-amp offset stage missing the resistor that divides down the 2-V bias), while the intended level equation and values are right. 0: a folding concept described without a workable connection pattern, or an odd number of pairs (start and end levels differ). −2 (asserted as fact): a circuit that cannot fold (e.g., a single differential pair or a plain comparator chain) presented as meeting the specification.
