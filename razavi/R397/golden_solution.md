# Golden Solution - R397

## Reference answer

$Z_{in} = 0$ (virtual ground), $Z_{out} = \dfrac{1 + g_{m1}R_S}{g_{m1}g_{m2}R_S} = \dfrac{1}{g_{m2}} + \dfrac{1}{g_{m1}g_{m2}R_S}$, $\dfrac{V_{out}}{V_{in}} = +\dfrac{1}{g_{m2}R_S}$.

- Topology: $M_1$ is common-gate (input at its source N, output at its drain, non-inverting); the PMOS common-source $M_2$ senses $V_{out}$ and drives N (inverting): shunt–shunt, negative feedback (N↑ → $V_{out}$↑ → less current from $M_2$ into N → N↓).
- The output node has infinite open-loop resistance (ideal $I_1$, λ = 0, gate of $M_2$), so the loop gain is infinite and N is a virtual ground: $Z_{in} = 0$; $M_1$'s small-signal current is forced to zero.
- Gain: $M_2$ must absorb $V_{in}/R_S$: $-g_{m2}V_{out} + V_{in}/R_S = 0$.
- $Z_{out}$ ($V_{in}$ = 0): $M_2$ injects $-g_{m2}v_X$ into N, which sees $R_S\|(1/g_{m1})$: $v_N = -g_{m2}v_XR_S/(1 + g_{m1}R_S)$; $I_X = -g_{m1}v_N$ → $Z_{out}$ above.

## Grading notes

+2: all three results correct ($Z_{in}$ including $R_S$, i.e. $R_S$, acceptable if stated). +1: two correct, third with a minor slip. 0: one correct with a sound method. -2 (asserted as fact): an inverting gain, $M_1$ or $M_2$ misidentified (e.g. $M_2$ as a source follower), a finite nonzero $Z_{in}$ such as $1/g_{m1}$ obtained by ignoring the infinite loop gain, or $Z_{out}$ infinite.
