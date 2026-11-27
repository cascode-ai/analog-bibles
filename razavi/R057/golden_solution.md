# Golden Solution - R057

## Reference answer

Node X connects only to the gate of $M_1$ and to $C_1$, so the charge on $C_1$ cannot change: $V_X - V_Y = V_{GS1} = V_{TH} + \sqrt{2I_1/\beta}$ at all times. Before the step $V_X = V_{DD}$, $V_Y = V_{DD} - V_{GS1}$.
- At $t = 0$: $V_Y$ jumps by $V_0$ through $C_2$ and $V_X$ follows ($C_1$ floats with it): $V_X = V_{DD} + V_0$, $V_Y = V_{DD} - V_{GS1} + V_0$.
- $M_1$ now has $V_{DS} = V_{GS1} - V_0$, smaller than its overdrive $V_{GS1} - V_{TH}$ because $V_0 > V_{TH}$, so it is in triode (or even reversed if $V_0 > V_{GS1}$) and carries less than $I_1$. The difference discharges $C_2$: $V_Y$ and $V_X$ fall together.
- The fall stops when $M_1$ returns to the edge of saturation, $V_{DS} = \sqrt{2I_1/\beta}$, approached asymptotically: $V_Y \to V_{DD} - \sqrt{2I_1/\beta}$ and $V_X \to V_{DD} + V_{TH}$.
- Net result: both nodes end $V_{TH}$ above their initial values (not $V_0$), with $V_X - V_Y$ constant throughout.

![Positive-step waveform of $V_X$](/q/R057/solution-vx.svg)

![Positive-step waveform of $V_Y$](/q/R057/solution-vy.svg)

## Grading notes

+2: both nodes jump by $V_0$, $V_X - V_Y$ stays constant (no discharge path for X), $M_1$ is pushed into triode because $V_0 > V_{TH}$, $I_1$ discharges $C_2$ and the nodes settle asymptotically at $V_X = V_{DD} + V_{TH}$, $V_Y = V_{DD} - \sqrt{2I_1/\beta}$. The case $V_0 > V_{GS1}$ (drain and source swap roles) need not be treated separately: the triode current is odd in $V_{DS}$ (γ = 0), so the same waveform and final values hold, and an answer that states the source-below-drain case as its assumption loses nothing. +1: correct jumps and final values with the reason only sketched. 0: correct jumps but final values wrong (e.g., returning to the initial values, or staying at the jumped values). -2 (asserted as fact): $V_X$ held at $V_{DD}$, $V_X$ and $V_Y$ moving in opposite directions, or C1 treated as discharging through the gate.
