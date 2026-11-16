# Golden Solution - A008

## Reference answer

$\dfrac{v_{out}}{v_{in}} = -\dfrac{A_vR_2}{R_2 + (1 + A_v)R_1} = -\dfrac{R_2}{R_1}\cdot\dfrac{1}{1 + \dfrac{R_1 + R_2}{A_vR_1}}$, which tends to $-R_2/R_1$ for $A_v \to \infty$.

Derivation: $R_1$, the source and $R_2$ form a single loop. Let $I$ flow from the top of $R_1$ through the source to the output node and down through $R_2$; then $v_{out} = IR_2$ and $v_1 = -IR_1$.
- Split the source: $A_v(v_{in} - v_1) = A_vv_{in} + A_vR_1I$. The second part is a voltage proportional to the loop current through $R_1$, i.e. a resistance $A_vR_1$ in series. Circuit reduction: short the dependent part and multiply $R_1$ by $1 + A_v$; an independent source $A_vv_{in}$ remains in the loop.
- Reduced loop: $A_vv_{in}$ in series with $(1 + A_v)R_1$ and $R_2$, so $I = -A_vv_{in}/[(1 + A_v)R_1 + R_2]$ (sign from $v_1 - v_{out} = A_v(v_{in} - v_1)$).
- $v_{out} = IR_2 = -A_vR_2v_{in}/[R_2 + (1 + A_v)R_1]$.
The circuit is a finite-gain inverting amplifier: for large $A_v$ the source forces $v_1 \to v_{in}$, the loop current becomes $-v_{in}/R_1$, and $v_{out} \to -(R_2/R_1)v_{in}$.

## Grading notes

+2: $-A_vR_2/[R_2 + (1 + A_v)R_1]$ or an equivalent form, valid for finite $A_v$ (the large-$A_v$ limit $-R_2/R_1$ may be added). +1: the correct exact result obtained by plain loop analysis without circuit reduction, or correct with a minor flaw. 0: only $-R_2/R_1$, with the assumption $A_v \to \infty$ stated explicitly; or correct loop equations with an algebra slip. −2 (asserted as fact): $-R_2/R_1$ claimed to be exact for finite $A_v$; the input terminal treated as connected to $R_1$ (so $v_1 = v_{in}$ and the gain 1 or 0); a result from a reversed source polarity such as $A_vR_2/[R_2 + (1 - A_v)R_1]$; or $R_1$ divided instead of multiplied by $1 + A_v$.
