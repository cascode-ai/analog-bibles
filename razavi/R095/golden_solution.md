# Golden Solution - R095

## Reference answer

Inverting: $V_{DD}$ until $M_1$ turns on, a steep fall while only $R_1 + R_2$ loads the output, then a soft clamp once $M_2$ turns on (a "$V_{GS}$ multiplier" load), with $V_{DD} - V_{out}$ held near $|V_{THP}|(1 + R_2/R_1)$ and growing only slowly.

- No gate current, so the gate of $M_2$ is at the $R_1$–$R_2$ tap: $V_{SG2} = (V_{DD} - V_{out})\dfrac{R_1}{R_1+R_2}$; $V_{SD2} = V_{DD} - V_{out} \ge V_{SG2}$, so $M_2$ is saturated whenever it is on.
- $V_{in} \le 0.7$ V: no current, $V_{out} = V_{DD}$.
- $M_1$ on, $M_2$ off (while $V_{DD} - V_{out} < 0.8(R_1+R_2)/R_1$): $V_{out} = V_{DD} - (R_1+R_2)\cdot\tfrac12\beta_1(V_{in} - 0.7)^2$, slope $-g_{m1}(R_1+R_2)$ (steep).
- $V_{DD} - V_{out} > 0.8(1 + R_2/R_1)$: $M_2$ conducts and absorbs most of the extra current; $V_{DD} - V_{out} = (1 + R_2/R_1)\left[0.8 + \sqrt{2I_{D2}/\beta_2}\right]$ rises slowly; incremental load $(R_1+R_2)/(1 + g_{m2}R_1)$, slope ≈ $-g_{m1}(R_1+R_2)/(1 + g_{m2}R_1)$ (≈ $-(g_{m1}/g_{m2})(1 + R_2/R_1)$ when $g_{m2}R_1 \gg 1$).
- $M_1$ enters triode if $V_{out} < V_{in} - 0.7$ V (near the top of the input range), reducing the slope further.
- Transition points: $V_{in} = 0.7$ V; $V_{out} = V_{DD} - 0.8(1 + R_2/R_1)$ ($M_2$ turn-on, when the $R_1 + R_2$ current reaches $0.8/R_1$), i.e. $V_{in} = 0.7 + \sqrt{1.6/(\beta_1R_1)}$ if $M_1$ is still saturated there; $V_{out} = V_{in} - 0.7$ V. The clamp appears in the sweep only if this turn-on is reached by $V_{in} = 3$ V and $0.8(1 + R_2/R_1) < 3$ V. If $M_1$ reaches $V_{out} = V_{in} - 0.7$ V before $M_2$ turns on, the two kinks occur in the opposite order; either order is acceptable when justified.

![R095 output curve](/q/R095/solution-plot.svg)

## Grading notes

+2: $V_{DD}$ up to 0.7 V, steep resistive fall with load $R_1+R_2$, $M_2$ turning on at $V_{DD} - V_{out} = |V_{THP}|(R_1+R_2)/R_1$ and then clamping the output (slow decrease), with $M_2$ saturated whenever on. +1: clamp described but the turn-on point or the saturation argument missing. 0: inverting shape with the load treated only as a diode or only as resistors. -2 (asserted as fact): $V_{SG2}$ taken as the full $V_{DD} - V_{out}$ or with the divider ratio inverted so as to change the turn-on point, non-inverting characteristic, or $M_2$ claimed to be in triode when on. Correctly stating a necessary condition for $M_2$ to turn on within the output range (e.g. $0.8(1 + R_2/R_1) < 3$ V) is not a false claim.
