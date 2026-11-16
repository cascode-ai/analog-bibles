# Golden Solution - R032

## Reference answer

$V_X = 1$ V for $t < 0$ ($M_1$ off). At $t = 0$ the gate goes to 3 V; since $V_X = 1\ \mathrm{V} < V_{GS} - V_{TH} = 2.3$ V, $M_1$ is immediately in triode and discharges $C_1$: $V_X$ decays from 1 V to 0, approximately exponentially with time constant $\approx C_1/(2.3\beta)$ ($R_{on} = 1/[\beta(3 - 0.7)]$).
- $C_1\,dV_X/dt = -\beta[2.3V_X - V_X^2/2]$: initial slope $-1.8\beta/C_1$ (V/s), slightly slower than the pure exponential at the start, exactly exponential as $V_X \to 0$.

## Grading notes

+2: $V_X$ constant at 1 V before the step, then decaying (triode, $M_1$ acting as a resistor) to 0 V with time constant ≈ $C_1R_{on}$, $R_{on} = 1/[\beta(V_{in} - V_{TH})]$. +1: correct decay but the region of operation not identified or a linear (saturation) ramp claimed at the start while the end is right. 0: mechanism right with a slip in the time constant. -2 (asserted as fact): $V_X$ rising, settling at a nonzero value, or jumping with the input.
