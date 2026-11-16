# Golden Solution - R008

## Reference answer

$M_1$ (gate at 1 V) conducts only for $V_X \lesssim 0.25$ V, with the $V_X$ node as its source, so $I_X$ is a small negative (reverse) saturated current there and zero for all larger $V_X$.
- For $V_X$ above about 0.25 V both channel terminals are at or above $V_X$ or 1.9 V with the gate at 1 V, so $V_{GS} < V_{TH}$ and $M_1$ is off: $I_X = 0$, $g_m = 0$.
- For small $V_X$ the $V_X$ node is the source ($V_{GS} = 1 - V_X$, $V_{SB} = V_X$) and the 1.9-V node the drain; $M_1$ is on when $1 - V_X > V_{TH}(V_X)$, i.e. $V_X < 0.245$ V (0.3 V without body effect), and saturated ($V_{DS} = 1.9 - V_X$ ≫ overdrive). Current flows from the 1.9-V source into the $V_X$ source: $I_X = -\tfrac12\beta(1 - V_X - V_{TH})^2$: −0.045β at $V_X = 0$, −0.016β at 0.1 V, −0.0015β at 0.2 V, 0 at 0.245 V.
- $g_m = \beta(1 - V_X - V_{TH})$: 0.3β at $V_X = 0$ falling to 0 at ≈ 0.245 V, zero beyond.

## Grading notes

+2: conduction only for small $V_X$ (cutoff ≈ 0.25 V with body effect), with the $V_X$ node as source, negative saturated $I_X$ of magnitude $\tfrac12\beta(0.3\ \mathrm{V})^2 = 0.045\beta$ at $V_X = 0$, zero elsewhere; $g_m$ from 0.3β to 0. +1: cutoff placed at 0.3 V (body effect neglected) or the sign convention of $I_X$ unclear, otherwise correct. 0: "M1 is always off" with otherwise sound reasoning (misses the small-$V_X$ conduction). -2 (asserted as fact): positive $I_X$ with the 1.9-V node as source, conduction over a wide range of $V_X$, or $M_1$ treated as a PMOS.
