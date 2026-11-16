# Golden Solution - R687

## Reference answer

Lower. The threshold shift is smaller than intended, so both thresholds stay closer to their native values: the NMOS $V_{TH}$ is below 0.7 V (somewhere between ≈ 0 and 0.7 V), and the PMOS $V_{TH}$ is more negative than −0.8 V (larger $|V_{THP}|$).

- With the beam aligned to a crystal axis, the ions channel and penetrate far deeper than the intended shallow profile. Much of the dose ends up well below the surface.
- The threshold depends on the charge in the depletion region under the gate. An acceptor sheet of dose $D$ at depth $x$ shifts $V_{TH}$ by about $qD(1 - x/x_{d})/C_{ox}$, where $x_d$ is the maximum depletion width. Dopants near the surface are fully effective; deeper ones are less so, and those beyond $x_d$ only change the neutral bulk.
- So the positive shift is smaller than designed, and both thresholds come out lower (less positive) than the target. The deep doping also raises the bulk doping somewhat (more body effect), and the dopant distribution, and hence $V_{TH}$, is poorly controlled.

## Grading notes

+2: "lower" (less positive) for the NMOS and more negative (larger magnitude) for the PMOS, with the reason: channeling sends the dopants deep, away from the surface/depletion region where they set the threshold, so the intended positive shift is only partly realized.
+1: correct direction for the NMOS with correct reasoning, but the PMOS left out or stated vaguely; or correct directions with a thin explanation.
0: correct physical picture (dopants go deep) but no clear conclusion on the direction.
-2 (asserted as fact): thresholds higher than the target (e.g., "more dopants enter the silicon so the threshold rises more"), or channeling said to keep the dopants at the surface. The NMOS threshold asserted higher than the target is also −2 when the PMOS direction is not supported by the depth/depletion argument either (e.g., right only through an invented mechanism), since then no part of the answer is soundly right. If the NMOS direction is wrong but the PMOS direction is right with the correct reasoning, cap at 0.
