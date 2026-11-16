# Golden Solution - R501

## Reference answer

The output falls with slope $-I_2/C_L$ = −(1 mA)/$C_L$ (e.g., −2 V/ns for $C_L$ = 0.5 pF).
- A large negative input current pulls the input node down and $M_1$ turns off.
- $I_1$ then pulls the drain of $M_1$ (gate of the PMOS $M_2$) up toward $V_{DD}$; a compensation capacitor across $M_1$, if present, takes part of $I_1$ and only slows this rise. $|V_{GS2}|$ shrinks and $M_2$ cuts off.
- With $M_2$ off, the only current at the output is $I_2$, which discharges $C_L$: $dV_{out}/dt = -I_2/C_L$.
- $M_3$ also turns off once $V_{out}$ drops below about 0.7 V (it starts at $V_{GS3}$ ≈ 0.82 V), so the feedback is open during this event. The output can fall only about 0.8 V before reaching ground.

## Grading notes

+2: $-I_2/C_L$ with the chain $M_1$ off → its drain rises → $M_2$ (PMOS) cuts off → $I_2$ discharges the output. +1: correct value with a vague or partly incorrect mechanism. 0: identifies $M_2$ cutting off but gives the slew in terms of the wrong current. -2 (asserted as fact): $I_1/C_L$, $I_3/C_L$ or $I_1/C_C$ given as the output slew rate, the output claimed to rise, or $M_2$ treated as an NMOS follower.
