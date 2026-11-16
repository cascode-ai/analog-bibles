# Golden Solution - R327

## Reference answer

With $C_{GD} = 0$: $\xi = C_{GS}C_{DB}$, the numerator is $-g_mR_D$, and the denominator becomes $R_SR_DC_{GS}C_{DB}s^2 + (R_SC_{GS} + R_DC_{DB})s + 1 = (1 + R_SC_{GS}s)(1 + R_DC_{DB}s)$. Hence
$$\frac{V_{out}}{V_{in}} = \frac{1}{1 + R_SC_{GS}s}\cdot\frac{-g_mR_D}{1 + R_DC_{DB}s}$$
- The first factor is $V_X/V_{in}$: the input node sees $R_S$ and $C_{GS}$ only, so its pole $1/(R_SC_{GS})$ is obtained by inspection.
- The second factor is $V_{out}/V_X$: $M_1$'s current $g_mV_X$ into $R_D\|C_{DB}$, an output pole $1/(R_DC_{DB})$.
- Without $C_{GD}$ nothing couples the output back to the input (and there is no feedforward), so the two nodes are isolated and the transfer function factors exactly. The zero ($g_m/C_{GD}$) moves to infinity.

## Grading notes

+2: substitution $C_{GD} = 0$, factorization of the denominator into $(1 + R_SC_{GS}s)(1 + R_DC_{DB}s)$, and identification of each factor with the input-node and output-node poles (isolation of the nodes). +1: correct factorization without interpreting the factors, or the interpretation with the algebra only asserted. 0: substitution done but the factorization not shown. -2 (asserted as fact): factors with mixed time constants (e.g., $R_SC_{DB}$), a remaining zero, or a claim that the result does not factor.
