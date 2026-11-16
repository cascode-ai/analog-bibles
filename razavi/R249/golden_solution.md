# Golden Solution - R249

## Reference answer

$M_3$ never turns on, and $V_X = V_Y$ for all $V_{DD}$: both equal $V_{DD}$ up to 0.7 V and then follow the diode curve $V_X = 0.7 + [\sqrt{1+2\beta R_1(V_{DD}-0.7)}-1]/(\beta R_1)$, rising ever more slowly.

- KCL: $I_{D2} = (V_{DD}-V_X)/R_1 + I_{D3}$ and, with $M_1$ saturated, $I_{D1} = I_{D2} = (V_{DD}-V_Y)/R_1$. Subtracting: $I_{D3} = (V_X - V_Y)/R_1$.
- $M_3$ (gate at Y, source at X) conducts only if $V_Y - V_X > V_{TH3} > 0$, which would make $I_{D3}$ negative — impossible. So $I_{D3} = 0$ and $V_Y = V_X$; with $V_{GS3} = 0$, $M_3$ is off. (A triode $M_1$ would require $V_Y < V_X - 0.7$ V, also inconsistent.)
- The circuit therefore behaves as the plain resistor-loaded mirror; the follower $M_3$ is idle.

## Grading notes

+2: $M_3$ off (zero current) with $V_X = V_Y$ for all $V_{DD}$, following $V_{DD}$ below 0.7 V and the slowly rising diode curve above, with a valid argument (KCL contradiction or symmetry). +1: correct curves but the reason $M_3$ is off not given. 0: $M_3$ assumed to conduct with a small current but curves otherwise similar. -2 (asserted as fact): $M_3$ conducting a significant current that pulls $V_Y$ well above or below $V_X$, $V_X$ pinned near $V_{DD} - V_{TH}$, or $M_1$ in triode.
