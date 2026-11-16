# Golden Solution - A241

## Reference answer

$\dfrac{v_{out}}{v_{in}} = 1 + \dfrac{R_2}{R_1}$.

- Null port: the voltage between the + and − inputs is zero, so the inverting input (the junction of $R_1$ and $R_2$) sits at $v_{in}$.
- No current enters the op-amp inputs, so the current through $R_1$, $v_{in}/R_1$, flows entirely through $R_2$.
- $v_{out} = v_{in} + R_2\,\dfrac{v_{in}}{R_1} = v_{in}\left(1 + \dfrac{R_2}{R_1}\right)$.

## Grading notes

+2: $1 + R_2/R_1$ obtained with the null-port conditions (zero input voltage and zero input current). +1: correct result with the reasoning only sketched. 0: right method with an algebra slip. −2 (asserted as the answer): $-R_2/R_1$ (inverting result), $R_2/R_1$, $1 + R_1/R_2$, $R_1/(R_1+R_2)$, or a result that depends on the op-amp gain.
