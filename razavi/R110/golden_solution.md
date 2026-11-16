# Golden Solution - R110

## Reference answer

$A_v = -\left(g_{m1} - \dfrac{1}{R_F}\right)(R_D \| R_F \| r_{O1}) = -\dfrac{(g_{m1}R_F - 1)R_Dr_{O1}}{R_DR_F + R_Dr_{O1} + R_Fr_{O1}}$.

- The input source drives the gate directly, so $v_{gs} = v_{in}$ regardless of $R_F$; $R_F$ only adds a feedforward current and a load.
- KCL at the output: $(v_{out} - v_{in})/R_F + v_{out}/R_D + v_{out}/r_{O1} + g_{m1}v_{in} = 0$ → $v_{out}(1/R_F + 1/R_D + 1/r_{O1}) = v_{in}(1/R_F - g_{m1})$.

## Grading notes

+2: the expression above or an equivalent form, including the feedforward term $1/R_F$. +1: $-g_{m1}(R_D\|R_F\|r_{O1})$ (feedforward neglected) stated as an approximation for $g_{m1}R_F \gg 1$, or one algebra slip. 0: correct KCL but the algebra left unfinished or wrongly simplified. -2 (asserted as fact): $R_F$ ignored entirely ($-g_{m1}(R_D\|r_{O1})$), a feedback-amplifier result assuming a source resistance (e.g., ≈ $-R_F/R_S$), $R_F$ treated as creating a Miller gain reduction of $v_{gs}$, or a positive gain.
