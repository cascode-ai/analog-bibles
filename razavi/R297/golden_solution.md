# Golden Solution - R297

## Reference answer

Three poles:
- Input (source of $M_1$, a common-gate input): $\omega_{in} = \dfrac{1 + (g_{m1} + g_{mb1})R_S}{R_S(C_{GS1} + C_{SB1})} = \dfrac{1}{[R_S\|\tfrac{1}{g_{m1}+g_{mb1}}](C_{GS1} + C_{SB1})}$.
- A pole at the origin: with $\lambda = 0$ and ideal $I_1$, $I_2$, node X (drain of $M_1$) and the output node have no resistive path to ac ground, so the dc gain is infinite.
- A finite pole set by $C_{GD2}$ coupling X and the output: $\omega_2 = \dfrac{g_{m2}C_{GD2}}{C_XC_{DB2} + (C_X + C_{DB2})C_{GD2}}$, where $C_X = C_{GD1} + C_{DB1} + C_{GS2}$ is the grounded capacitance at X.
(Zero: $+g_{m2}/C_{GD2}$, right half plane.)

Exact transfer function for this capacitance set:
$$\frac{V_{out}}{V_{in}} = \frac{-(g_{m1}+g_{mb1})(g_{m2} - C_{GD2}s)}{[1 + (g_{m1}+g_{mb1})R_S + R_S(C_{GS1}+C_{SB1})s]\; s\,[g_{m2}C_{GD2} + (C_XC_{DB2} + C_XC_{GD2} + C_{GD2}C_{DB2})s]}$$
- With $\lambda = 0$ the drain current of $M_1$, $(g_{m1} + g_{mb1})(-V_S)$, does not depend on $V_X$, so the input node is isolated from the rest: its pole is exact.
- The X/output pair is the classic Miller-integrator (pole-splitting) configuration: $C_{GD2}$ around $M_2$ makes the response an integrator, $\approx -\dfrac{g_{m1}+g_{mb1}}{1 + (g_{m1}+g_{mb1})R_S}\cdot\dfrac{1}{C_{GD2}s}$ at low frequencies, with the second pole above. A naive nodal estimate (infinite resistance at both X and the output, two poles at the origin) is wrong: only one pole is at the origin.

## Grading notes

A side remark that a finite output resistance or load alone would remove the pole at the origin is a minor false claim (the origin pole stays because X still has no dc path; only a resistance at X, e.g. finite $r_{O1}$, removes it): score the main result, at most +1. +2: input pole $(g_{m1} + g_{mb1} + 1/R_S)/(C_{GS1} + C_{SB1})$ (γ = 0 form accepted), recognition that one pole is at the origin (no resistive path at X and the output with λ = 0 and ideal current sources), and the finite pole $g_{m2}C_{GD2}/[C_XC_{DB2} + (C_X + C_{DB2})C_{GD2}]$ or an equivalent pole-splitting expression. +1: same with a capacitance term missing or $g_{mb1}$ dropped without comment. 0: input pole right and the X/output nodes described as having poles at (or near) the origin without finding the finite second pole, or the circuit analysed with finite $r_O$ in place of λ = 0. -2 (asserted as fact): input resistance taken as $R_S$ alone or as $1/g_{m1}$ in series with $R_S$, finite resistances invented at X or the output, or $M_1$ treated as a common-source stage.
