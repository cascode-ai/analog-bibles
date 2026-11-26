# Golden Solution - R037

## Reference answer

$V_X = 3$ V before the step and 6 V after it, constant thereafter. With gate leakage and gate parasitic capacitances neglected, node X is the gate of $M_1$ and the top plate of $C_1$, so no current can flow into or out of it: $C_1$ keeps its 3 V and $V_X = V_{in} + 3$ V. ($M_1$'s current only flows between $V_{DD}$ and the ideal source $V_{in}$; after the step its $V_{DS} = 0$ anyway.)

![Node X voltage waveform](/q/R037/solution-vx.svg)

## Grading notes

+2: $V_X$ = 3 V before, 6 V after, constant, because node X has no discharge path (gate node). +1: correct 6 V with incomplete reasoning, or the pre-step value omitted. 0: jump to 6 V followed by an asserted decay presented as uncertain. -2 (asserted as fact): $V_X$ decaying through $M_1$, settling at $V_{DD} + V_{TH}$ or similar, or no jump.
