# Golden Solution - R338

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_S} + \frac{\gamma}{g_{m1}^2g_{m2}R_S^2} + \frac{(1+g_{m2}R_S)^2}{g_{m1}^2g_{m2}^2R_S^2R_D}\right]$$

- KCL at X: the currents of $M_1$ ($g_{m1}V_{in} + I_{n1}$), of $R_S$ and of $M_2$ ($g_{m2}V_X + I_{n2}$, flowing from X to the output) give $V_X = \dfrac{I_{n,RS} - g_{m1}V_{in} - I_{n1} - I_{n2}}{g_{m2} + 1/R_S}$.
- Output: $V_{out} = R_D(g_{m2}V_X + I_{n2}) + R_DI_{n,RD} = R_D\dfrac{g_{m2}I_{n,RS} - g_{m1}g_{m2}V_{in} - g_{m2}I_{n1} + I_{n2}/R_S}{g_{m2} + 1/R_S} + R_DI_{n,RD}$.
- Gain $-g_{m1}R_D\dfrac{g_{m2}R_S}{1+g_{m2}R_S}$ (part of $M_1$'s signal current is lost in $R_S$).
- Referring: $M_1$ → $4kT\gamma/g_{m1}$; $R_S$ → $4kT/(g_{m1}^2R_S)$; $M_2$ → $4kT\gamma g_{m2}/(g_{m1}g_{m2}R_S)^2$; $R_D$ → $4kT(1+g_{m2}R_S)^2/(g_{m1}^2g_{m2}^2R_S^2R_D)$.

## Grading notes

+2: all four terms equivalent to the reference (any equivalent algebraic form). +1: three terms right and one with a minor slip (e.g., $R_D$'s noise written at the output as $4kT/R_D$ without the $R_D^2$ factor, a units slip that makes only the $R_D$ term wrong), or the $M_2$ term dropped with an explicit (but wrong) argument that the cascode device is noiseless while the rest is right. 0: correct method with errors in two terms. -2 (asserted as fact): $R_S$ treated as a source-degeneration resistor of $M_1$ or as noiseless, the gain taken as $g_{m1}R_D$ with $R_S$ ignored, or $M_2$ treated as an NMOS cascode with wrong current direction leading to wrong terms.
