# Golden Solution - R018

## Reference answer

$V_{out}$ follows $V_{in}$ (slightly less) for small $V_{in}$, with $M_1$ (gate at 3 V) in triode; once $V_{in}$ exceeds $3 - V_{TH}(V_{out,s})$ (between 1.965 V and 2.3 V), $M_1$ saturates and $V_{out}$ stays constant at $V_{out,s}$, the solution of $V_{out,s} = \tfrac12\beta R_1[3 - V_{out,s} - V_{TH}(V_{out,s})]^2$. $V_{out,s} < 1.965$ V and approaches that bound (with $V_{out} \approx V_{in}$ below a break near 1.97 V) only when $\beta R_1$ is large; e.g. $\beta R_1$ = 1, 10, 100 V⁻¹ give $V_{out,s}$ ≈ 0.84, 1.49, 1.80 V and breaks at $V_{in}$ ≈ 2.13, 2.03, 1.99 V.
- Current flows from $V_{in}$ through $M_1$ into $R_1$: the $V_{out}$ node is the source ($V_{GS} = 3 - V_{out}$, $V_{SB} = V_{out}$), the $V_{in}$ node the drain.
- Triode for $V_{in} < 3 - V_{TH}(V_{out})$: $V_{out} = V_{in}R_1/(R_1 + R_{on})$, close to $V_{in}$ for $R_1 \gg R_{on}$, slope falling as $V_{GS}$ shrinks.
- Saturation for larger $V_{in}$: $V_{out}$ fixed by $\tfrac12\beta(3 - V_{out} - V_{TH}(V_{out}))^2 = V_{out}/R_1$, bounded by the solution of $3 - V_{out} = V_{TH}(V_{out})$: 1.97 V with body effect ($V_{TH}$ ≈ 1.03 V there; 2.3 V without body effect). Flat up to $V_{in} = 3$ V.

## Grading notes

+2: $V_{out}$ following $V_{in}$ (slightly less) at low $V_{in}$, then flat at a $\beta R_1$-dependent level bounded by ≈ 1.965 V (body effect; $V_{TH} \approx 1.03$ V at that source voltage), the break at $V_{in} = 3 - V_{TH}(V_{out,s})$ ≈ 1.97–2.3 V, with the correct reason (source at $V_{out}$, $V_{GS} \to V_{TH}$). A parametric answer in $\beta R_1$ with this bound, or the large-$\beta R_1$ sketch (plateau just below 1.97 V, break near 1.97 V), is fully correct. +1: clamp at ≈ 2.3 V (body effect ignored) or slightly misplaced break, otherwise right. 0: right shape without clamp value or reason. -2 (asserted as fact): output following $V_{in}$ up to 3 V, an inverting curve, or $V_{out} = 0$.
