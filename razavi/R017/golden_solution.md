# Golden Solution - R017

## Reference answer

For small $V_{in}$, $M_1$ (gate at 2 V) is a closed switch in triode and $V_{out} \approx V_{in}$ (slightly less, divider of $R_{on}$ and $R_1$); once $V_{in}$ exceeds about $2\ \mathrm{V} - V_{TH} \approx 1.1$ V, $M_1$ saturates with $V_{out}$ as its source and $V_{out}$ stays constant at a value a little below 1.09 V.
- Current flows from the $V_{in}$ source through $M_1$ into $R_1$, so $V_{out} \le V_{in}$: the $V_{out}$ node is the source ($V_{GS} = 2 - V_{out}$, $V_{SB} = V_{out}$), the $V_{in}$ node the drain.
- Triode while $V_{in} - V_{out} < 2 - V_{out} - V_{TH}$, i.e. $V_{in} < 2 - V_{TH}(V_{out})$: $V_{out} = V_{in}R_1/(R_1 + R_{on})$ with $R_{on} \approx 1/[\beta(2 - V_{out} - V_{TH})]$, close to $V_{in}$ if $R_1 \gg R_{on}$; the slope drops as $V_{GS}$ shrinks.
- Saturation for larger $V_{in}$: $V_{out}$ is fixed by $\tfrac12\beta(2 - V_{out} - V_{TH}(V_{out}))^2 = V_{out}/R_1$, independent of $V_{in}$ (λ = 0). Its upper bound (β$R_1$ → ∞) is the solution of $2 - V_{out} = V_{TH}(V_{out})$: 1.09 V with body effect (1.3 V without).
- Flat from there to $V_{in} = 3$ V.

## Grading notes

+2: $V_{out} \approx V_{in}$ at low $V_{in}$ (triode), then a flat level just below $2\ \mathrm{V} - V_{TH}(V_{out}) \approx 1.09$ V (body effect) for larger $V_{in}$, with the correct reason (source at $V_{out}$, $V_{GS} \to V_{TH}$). +1: clamp value given as ≈ 1.3 V (body effect ignored) or slightly misplaced break point, otherwise right. 0: right shape but no clamp value or reason. -2 (asserted as fact): $V_{in}$ node treated as the source with an inverting or increasing-without-limit output, $V_{out} = 0$ throughout, or a clamp at 2 V.
