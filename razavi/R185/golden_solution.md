# Golden Solution - R185

## Reference answer

An inverting S-curve centered at $V_{in1} = 1.5$ V, going from $+I_{SS}R_1/2$ to $-I_{SS}R_1/2$, with central slope $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}R_1/2$; flat outside the steering window $|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$.
- $M_3$, $M_4$ are PMOS current sources, each supplying $I_P$; with all devices saturated and $2I_P = I_{SS}$, KCL at the left output gives $(V_{X} - V_{Y})/R_1 = I_P - I_{D1}$, so $V_{out} = -R_1(I_{D1} - I_{D2})/2$.
- Full steering ($I_{D1} = 0$ or $I_{SS}$): $V_{out} = \pm I_{SS}R_1/2$, the whole current $I_P$ of one PMOS flowing through $R_1$ to the other side.
- The curve clips earlier if $I_{SS}R_1/2$ exceeds the available headroom (a PMOS leaving saturation near $V_{DD} - |V_{GS3} - V_{TH3}|$, or, at the low side, the tail $M_5$ leaving saturation; the conducting input device entering triode does not clip the level by itself, since $M_5$ still forces its current $I_{SS}$). The output CM level is fixed only by the current balance $2I_P = I_{SS}$; a mismatch pushes both outputs toward a rail.

## Grading notes

+2: inverting S-curve with saturation at ±$I_{SS}R_1/2$ (or a stated headroom clip) and central slope $-g_{m1}R_1/2$. +1: correct shape with a factor-2 slip in the level (±$I_{SS}R_1$) or slope. 0: shape right, levels and slope missing. -2 (asserted as fact): outputs saturating near the rails as for an ideal current-source load (ignoring $R_1$), a non-inverting curve, or $R_1$ ignored.
