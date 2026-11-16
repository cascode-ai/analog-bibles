# Golden Solution - R299

## Reference answer

$$Z_{in} = \frac{r_{O2}}{1 - g_{m1}r_{O1}g_{m2}r_{O2}} \approx -\frac{1}{g_{m1}g_{m2}r_{O1}}\quad\text{(a negative resistance)}$$
$$\frac{V_{out}}{V_{in}} = \frac{-g_{m1}r_{O1}r_{O2}}{R_S + r_{O2} - g_{m1}g_{m2}r_{O1}r_{O2}R_S}$$
- Output node: $I_1$ ideal, gate of $M_2$ open: $g_{m1}v_X + v_{out}/r_{O1} = 0 \Rightarrow v_{out} = -g_{m1}r_{O1}v_X$.
- Node X: $M_2$ (source at $V_{DD}$, gate at $V_{out}$) injects $-g_{m2}v_{out} - v_X/r_{O2}$; with $I_2$ ideal: $i_{in} = g_{m2}v_{out} + v_X/r_{O2} = v_X(1/r_{O2} - g_{m1}g_{m2}r_{O1})$.
- The loop X → $M_1$ (inverting) → $M_2$ (inverting) → X is positive feedback, hence the negative input resistance.
- $V_{out}/V_{in} = -g_{m1}r_{O1}\,Z_{in}/(Z_{in} + R_S)$, which gives the expression above; for $g_{m1}g_{m2}r_{O1}r_{O2} \gg 1$ and $g_{m1}g_{m2}r_{O1}R_S \gg 1$ it is ≈ $+1/(g_{m2}R_S)$ (the $Z_{in}$ approximation likewise needs $g_{m1}g_{m2}r_{O1}r_{O2} \gg 1$).
- Remark: when $R_S > |Z_{in}|$ the net resistance at X is negative and the circuit is not stable in practice (it latches); the formulas above are the formal small-signal results.

## Grading notes

+2: $Z_{in} = r_{O2}/(1 - g_{m1}g_{m2}r_{O1}r_{O2})$ (negative, ≈ $-1/(g_{m1}g_{m2}r_{O1})$) and the transfer function in any equivalent form. Noting positive feedback or the stability issue is a plus. +1: correct $Z_{in}$ and a transfer function with a sign slip, or both right without simplification errors but with a wrong remark. 0: one of the two results right. With $L = g_{m1}r_{O1}g_{m2}r_{O2}$, $Z_{in}$ is negative for $L > 1$ (always, in practice, since $L$ is a product of two intrinsic gains); a conditional discussion of $L < 1$ or $L = 1$ based on the exact formula is not an error. -2 (asserted as fact): a positive $Z_{in}$ such as $1/g_{m2}$ or $r_{O2}$ given as the general result, $M_2$ treated as an NMOS follower or as a current source, or λ ignored so that $Z_{in}$ is claimed to be zero.
