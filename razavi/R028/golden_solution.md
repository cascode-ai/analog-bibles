# Golden Solution - R028

## Reference answer

At first $M_1$ is off ($V_G = 0$), so $I_X = I_1$ and $V_X$ ramps down linearly at $I_1/C_1$ while $I_1$ charges $C_2$ (gate) linearly at $I_1/C_2$. After $t_1 = V_{TH}C_2/I_1$ the gate passes 0.7 V and $M_1$ turns on with a growing (square-law) current, so $I_X = I_1 + I_{D1}$ increases smoothly and $V_X$ falls faster. $M_1$ then enters triode, $I_X$ peaks and falls, and $C_1$ is discharged to about 0 V: $V_X$ dips slightly below 0 and creeps back toward $0^-$, while $I_X$ crosses zero and decays to zero from below.
- $I_X$ is the total current leaving node X: $I_X = I_1 + I_{D1} = -C_1\,dV_X/dt$.
- $t < t_1$: $I_X = I_1$, $V_X = 3 - I_1t/C_1$, $V_G = I_1t/C_2$ (this sequence assumes $3C_1 > V_{TH}C_2$, so $V_X$ is still positive at $t_1$).
- $t > t_1$: $I_{D1} = \tfrac12\beta(V_G - 0.7)^2$ grows quadratically from zero (no jump) while $M_1$ is saturated ($V_X > V_G - V_{TH}$); $V_X$ drops faster than linearly. Once $V_X < V_G - V_{TH}$, $M_1$ is in triode and $I_X$ peaks there, then falls.
- At $V_X = 0$, $I_{D1} = 0$ so $I_X = I_1$ still and $V_X$ overshoots below 0; $M_1$ conducts in reverse (X acting as source) and, as $V_G = I_1t/C_2$ keeps rising, its on-resistance falls, so $V_X \approx -I_1/[\beta(V_G - V_{TH})] \to 0^-$ and $I_X$ is a small negative tail $\to 0^-$. There is no true DC steady state with an ideal $I_1$ (the gate keeps charging); the size of the negative dip depends on $I_1/\beta$ and may be limited by the drain–bulk junction (≈ −0.6 V).
- If $3C_1 < V_{TH}C_2$, $V_X$ crosses 0 at $3C_1/I_1$ before $M_1$ turns on, $I_X$ stays at $I_1$ without a peak above it, and $M_1$ (reverse conduction) or the drain–bulk junction then stops the fall below 0; the end state is the same.
(Level-1 simulation, $C_1 = C_2 = 1$ pF, $I_1 = 100$ µA: with $\beta = 1$ mA/V², $I_X$ peaks at 0.41 mA, $V_X$ dips to −76 mV and is −11 mV at 100 ns; with $\beta = 50$ µA/V² the dip reaches −0.53 V.)

## Grading notes

+2: initial linear ramp of $V_X$ with $I_X = I_1$ while $M_1$ is off, turn-on when $V_G$ reaches $V_{TH}$ at $t_1 = V_{TH}C_2/I_1$, rising $I_X$ and accelerating fall of $V_X$, a peak in $I_X$, and final $V_X \approx 0$ with $I_X \to 0$. The small negative overshoot of $V_X$ and negative $I_X$ tail are correct extra detail but not required; "settles near 0 V" is enough. The $3C_1 < V_{TH}C_2$ branch, if stated as a separate case, is fine.
+1: correct sequence without $t_1$ or without the peak in $I_X$; or off phase, $t_1$, smooth rise of $I_X$ and triode entry all correct with the late-time behaviour left open or only loosely described (e.g. "no DC steady state because the gate keeps charging", which is true), provided no wrong final value is asserted.
0: misses the initial off phase but describes the discharge correctly; or a correct early sequence with a wrong final state asserted (e.g. $V_X$ falling without limit).
-2 (asserted as fact): $M_1$ on from $t = 0$, $V_X$ settling at a high value, $I_1$ direction reversed (charging X or discharging $C_2$), or $C_2$ treated as connected to X.
