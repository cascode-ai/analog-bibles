# Golden Solution - R092

## Reference answer

A straight line through the origin (resistive divider) until $M_1$ turns on, then a steeper follower region with slope approaching ≈ $1/(1+\eta)$.

- $M_1$ off: no drain current, $R_F$ and $R_S$ divide the input: $V_{out} = V_{in}R_S/(R_S+R_F)$, slope $R_S/(R_S+R_F)$. $M_1$ stays off while $V_{GS} = V_{in}R_F/(R_F+R_S) < V_{TH}(V_{out})$.
- Turn-on at $V_{in,on} = \dfrac{R_F+R_S}{R_F}V_{TH}(V_{out,on})$, i.e. above $0.7(1 + R_S/R_F)$ V because of the body effect ($V_{SB} = V_{out,on} = V_{in,on}R_S/(R_F+R_S)$ is not small; e.g. for $R_S = R_F$, $V_{in,on} \approx 1.74$ V instead of 1.40 V). If $R_F/R_S < 0.527$ the turn-on point lies above 3 V and $M_1$ stays off over the whole sweep, so the characteristic is just the divider line.
- On: $M_1$ is saturated throughout (drain at $V_{DD}$, gate at most $V_{DD}$). KCL at the output: $(V_{in} - V_{out})/R_F + \tfrac12\beta(V_{in} - V_{out} - V_{TH})^2 = V_{out}/R_S$; slope $= (g_m + 1/R_F)/(g_m + g_{mb} + 1/R_F + 1/R_S)$, rising from $R_S/(R_S+R_F)$ toward ≈ $1/(1+\eta)$ for large $g_m$.
- At $V_{in} = V_{DD}$: $V_{out} \approx 3 - V_{TH}(V_{out}) - \sqrt{2I_D/\beta}$, slightly higher than for a plain follower because $R_F$ also feeds current into $R_S$.
- Transition points: turn-on point above; end point at $V_{in} = 3$ V.

## Grading notes

+2: divider line $V_{out} = V_{in}R_S/(R_S+R_F)$ below turn-on, turn-on at $V_{in} \approx V_{TH}(1 + R_S/R_F)$, saturated follower above it with slope rising toward ≈ $1/(1+\eta)$ < 1. +1: one feature missing or the body effect ignored. 0: $V_{out} = 0$ assumed below turn-on (ignoring $R_F$) with an otherwise correct follower region. -2 (asserted as fact): inverting characteristic, slope above 1, $M_1$ claimed to enter triode, or $R_F$ read as connected to $V_{DD}$ or ground.
