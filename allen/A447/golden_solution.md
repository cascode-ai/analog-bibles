# Golden Solution - A447

## Reference answer

A capacitive voltage divider: $V_{REF}$ — $C_{eq}$ — output node — $(2C - C_{eq})$ — ground, with

- $C_{eq} = \sum_{i=0}^{N-1} b_i \dfrac{C}{2^i}$: all array capacitors whose bits are 1 (bottom plates at $V_{REF}$, top plates at the output node, hence in parallel between $V_{REF}$ and the output);
- $2C - C_{eq}$: all the remaining capacitors, i.e. those whose bits are 0 plus the terminating capacitor $C/2^{N-1}$, in parallel from the output node to ground. The array always totals $C + C/2 + \cdots + C/2^{N-1} + C/2^{N-1} = 2C$, whatever the code.

Because all capacitors start discharged, the divider gives $v_{OUT} = V_{REF}\dfrac{C_{eq}}{C_{eq} + (2C - C_{eq})} = \dfrac{C_{eq}}{2C}V_{REF} = \left(\dfrac{b_0}{2} + \dfrac{b_1}{4} + \cdots + \dfrac{b_{N-1}}{2^N}\right)V_{REF}$. (Thevenin form: a source $(C_{eq}/2C)V_{REF}$ behind 2C.)

## Grading notes

+2: divider with $C_{eq}$ (bits = 1) between $V_{REF}$ and the output and $2C - C_{eq}$ (bits = 0 and the terminating capacitor) from the output to ground, total 2C, and $v_{OUT} = C_{eq}V_{REF}/2C$. +1: correct divider but the terminating capacitor left out of the grounded group (total not 2C), or the discharged initial condition not mentioned. 0: correct $v_{OUT}$ without a clear equivalent circuit. −2 (asserted as fact): the groups swapped (bits = 1 to ground), the capacitors placed in series with each other, or a resistive-divider analogy giving $v_{OUT} = 2C/C_{eq}$-type results.
