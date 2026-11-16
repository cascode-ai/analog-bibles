# Golden Solution - A333

## Reference answer

A capacitor $2C_L$ from each output to ground; with a resistor, $R_L/2$ from each output to ground.

- For a purely differential output ($v_{o1} = +v_{od}/2$, $v_{o2} = -v_{od}/2$), the midpoint of the floating load is at ac ground. Splitting $C_L$ into two equal series capacitors of $2C_L$ ($2C_L$ in series with $2C_L$ = $C_L$) and grounding the midpoint changes nothing, so each output sees $2C_L$ to ground; the same argument splits $R_L$ into two $R_L/2$ halves.
- Consequences: each single-ended output pole is $1/(R_{out}\cdot2C_L)$; the equivalence holds only for differential signals: for a common-mode output change no current flows in the floating load, so it presents no common-mode load at all.

## Grading notes

+2: $2C_L$ per output for the capacitor and $R_L/2$ per output for the resistor, with the virtual-ground (series-split) argument. +1: both right without justification, or one right with the other a slip. 0: one of the two right. −2 (asserted as fact): $C_L/2$ per output, $2R_L$ per output, or the full $C_L$ / $R_L$ to ground at each output.
