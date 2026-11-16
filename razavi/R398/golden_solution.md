# Golden Solution - R398

## Reference answer

The loop is positive feedback: $M_2$ (NMOS source follower from $V_{out}$ to N) and $M_1$ (NMOS common-gate from N to $V_{out}$) are both non-inverting, so N↑ → $V_{out}$↑ → N↑. With λ = 0 and an ideal $I_1$ the loop gain is infinite and positive, so the circuit is regenerative: the equilibrium is unstable (any capacitance at $V_{out}$ gives a right-half-plane pole) and it latches. Formal small-signal results: $Z_{in} = 0$, $V_{out}/V_{in} = -1/(g_{m2}R_S)$, $Z_{out} = -\left(\dfrac{1}{g_{m1}} + \dfrac{1}{g_{m2}} + \dfrac{1}{g_{m1}g_{m2}R_S}\right)$ (a negative resistance, the signature of positive feedback).

- KCL at the output (only $M_1$'s drain carries small-signal current) forces $g_{m1}v_N = 0$ formally, so $Z_{in} = 0$ and $V_{in}/R_S + g_{m2}V_{out} = 0$.
- $Z_{out}$ ($V_{in}$ = 0): $v_N = g_{m2}v_X/(g_{m1} + g_{m2} + 1/R_S)$; $M_1$ pushes $g_{m1}v_N$ into the output, so $I_X = -g_{m1}g_{m2}v_X/(g_{m1} + g_{m2} + 1/R_S)$.
- Dynamics: $C\,dv_{out}/dt = g_{m1}v_N = g_{m1}g_{m2}v_{out}/(g_{m1}+g_{m2}+1/R_S)$ grows exponentially. The circuit is stable only if the output is loaded by a resistance smaller than $|Z_{out}|$.

## Grading notes

+2: recognizes that the loop is positive (both stages non-inverting) and therefore unstable/regenerative, with the negative output resistance; formal values $Z_{in} = 0$, gain $-1/(g_{m2}R_S)$, $Z_{out} = -(1/g_{m1} + 1/g_{m2} + 1/(g_{m1}g_{m2}R_S))$ (values may be partial if the positive-feedback conclusion is clear and explained). +1: correct formal values without noticing the positive feedback, or positive feedback identified with only partial values. 0: positive feedback identified, values wrong. -2 (asserted as fact): the loop treated as negative feedback with a positive, finite $Z_{out}$ (e.g. $(1 + g_{m2}R_S)/(g_{m1}g_{m2}R_S)$) and the circuit declared a stable amplifier, or transistor types misread (e.g. $M_2$ as a PMOS common-source device).
