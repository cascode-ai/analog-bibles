# Golden Solution - R690

## Reference answer

Without the implant ($V_{THN} \approx 0$, $|V_{THP}| \approx 1$ V), the saturated (linear) segment keeps the same slope but moves 0.7 V to the left and 0.2 V down; the triode break moves from $(V_{in}, V_{out}) = (0.7 + 2.2/(1+A),\ 2.2/(1+A))$ to $(2/(1+A),\ 2/(1+A))$, with A defined below. The high output level drops from 2.2 V to 2.0 V, $M_1$ conducts from $V_{in} \approx 0$ (there is no flat region), and the low level at $V_{in} = 3$ V is lower.

With $A = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$:
- Target: $V_{out} = 2.2$ V for $V_{in} \le 0.7$ V. Then $V_{out} = 2.2 - A(V_{in} - 0.7)$, until $M_1$ enters triode at $V_{in} = 0.7 + 2.2/(1+A)$. (Strictly, with $M_1$ off the square-law model leaves $V_{out}$ anywhere between $V_{DD} - |V_{THP}|$ and $V_{DD}$; subthreshold conduction of $M_2$ slowly pulls it toward $V_{DD}$. $V_{DD} - |V_{THP}|$ is the conventional value.)
- No implant: $V_{out} = V_{DD} - |V_{THP}| = 2.0$ V at $V_{in} = 0$, the point where $M_1$ just turns on. Then $V_{out} = 2.0 - AV_{in}$, the same slope $-A$, so the small-signal gain is unchanged. $M_1$ enters triode at $V_{in} = V_{out} = 2/(1+A)$. After that the output flattens toward a lower floor, because $M_1$ has 3 V of overdrive at $V_{in} = 3$ V instead of 2.3 V, and $M_2$ needs 1 V instead of 0.8 V.
- Where both curves are on their linear segments, the new output is lower than the target at the same $V_{in}$ by $0.2 + 0.7A$ V; equivalently $V_{out,new}(V_{in}) = V_{out,target}(V_{in} + 0.7) - 0.2$.
- Example for $A = 2$: target 2.2 V (flat) → triode break at 1.43 V → 0.22 V at $V_{in} = 3$ V; no implant 2.0 V at 0 → break at 0.67 V → 0.15 V at $V_{in} = 3$ V.
- Consequence: for a given input bias the output operating point (and the stage's current) moves a lot, and the usable input range shifts down by 0.7 V. In reality, a subthreshold current flows at $V_{in} = 0$ because $V_{GS} = V_{THN}$, which pulls $V_{out}$ slightly below 2.0 V.

## Grading notes

+2: uses $V_{THN} \approx 0$ and $|V_{THP}| \approx 1$ V and concludes: high level 2.0 V instead of 2.2 V, turn-on at $V_{in} \approx 0$ instead of 0.7 V, the same linear slope $-\sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$ (the linear segment shifted left by 0.7 V and down by 0.2 V), and an earlier triode break with a lower floor. Breakpoints may be given symbolically or for an assumed size ratio.
+1: correct shifts with one feature missing or slightly wrong (e.g., the 0.2 V drop of the high level omitted, or the gain change not discussed); or everything correct except that the $M_1$-off level is given as $V_{DD}$ (3 V) with a jump to $V_{DD} - |V_{THP}|$ at turn-on, which is a minor issue, not a critical error.
0: only the NMOS threshold change considered (left shift) with the PMOS change ignored, the rest sound.
-2 (asserted as fact): the curve shifted to the right or upward, the gain claimed to change substantially, or the load misread (e.g., $M_2$ treated as a current source).
