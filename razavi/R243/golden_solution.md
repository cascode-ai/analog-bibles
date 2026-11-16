# Golden Solution - R243

## Reference answer

$V_X = V_Y$ for all $V_{DD}$: both equal $V_{DD}$ up to $V_{DD} = V_{TH} = 0.7$ V, then both follow the diode voltage $V_X = V_{TH} + \dfrac{\sqrt{1+2\beta R_1(V_{DD}-V_{TH})}-1}{\beta R_1}$, which rises with slope 1 just above 0.7 V and then ever more slowly (roughly as $\sqrt{V_{DD}}$).

- $V_{DD} < V_{TH}$: no current, no drop across either $R_1$: $V_X = V_Y = V_{DD}$.
- $V_{DD} > V_{TH}$: $M_2$ (diode) carries $I = (V_{DD}-V_X)/R_1 = \tfrac{\beta}{2}(V_X-V_{TH})^2$, which gives the expression above.
- $M_1$ has the same $V_{GS}$; if saturated it carries the same $I$, so $V_Y = V_{DD} - R_1I = V_X$. Then $V_{DS1} = V_{GS1}$, so $M_1$ is indeed saturated — the assumption is self-consistent for all $V_{DD}$.

## Grading notes

+2: $V_X = V_Y$ at all $V_{DD}$ (identical branches), equal to $V_{DD}$ below 0.7 V and following the diode curve (slowly rising, sub-linear) above it. +1: correct shapes but $V_Y$ drawn slightly different from $V_X$ without contradiction in reasoning, or the region below 0.7 V missing. 0: $V_X$ right but $V_Y$ not determined. -2 (asserted as fact): $M_1$ claimed to be in triode, $V_Y$ falling toward zero, $V_X$ clamped at exactly $V_{TH}$ independent of $V_{DD}$, or $V_X$ rising linearly with slope 1 throughout. Reading the pair as a cross-coupled latch (in the figure $M_2$ is diode-connected and both gates are tied to X) is a misread topology: an answer that asserts this and a latch/bifurcation in which one output falls is -2, even if it also derives the symmetric curve, since its "which reading is intended" alternatives rest on the wrong circuit.
