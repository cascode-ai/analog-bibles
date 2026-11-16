# Golden Solution - R250

## Reference answer

Both rise monotonically with $V_1$: $V_X$ only slowly (it is a diode voltage, slightly below $V_{GS}(I_{REF})$ at small $V_1$ and slightly above it at large $V_1$), $V_Y$ roughly linearly. They cross at $V_1 = V_{GS}(I_{REF}) + R_1I_{REF}$, where $V_X = V_Y = V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$ and $R_2$ carries no current.

- KCL: $I_{D2} = I_{REF} + (V_Y - V_X)/R_2$ at X; $(V_1 - V_Y)/R_1 = I_{D1} + (V_Y-V_X)/R_2$ at Y; $M_1$ copies $M_2$ while saturated.
- Small $V_1$: $Y$ is pulled low through $R_1$, part of $I_{REF}$ flows from X through $R_2$ to Y, so $M_2$ carries less than $I_{REF}$ and $V_X < V_{GS}(I_{REF})$; $V_Y$ is a few hundred mV. $M_1$ can be in triode here only if $I_{REF}R_2 > 0.7$ V, since $V_X - V_Y = R_2(I_{REF} - I_{D2}) \le R_2I_{REF}$ (a small $R_1$ makes it more likely).
- If $I_{REF}(R_1+R_2) < 0.7$ V, both transistors are off for $V_1 < 0.7\ \mathrm{V} - I_{REF}(R_1+R_2)$: all of $I_{REF}$ flows through $R_2$ and $R_1$ into $V_1$, so $V_X = V_1 + I_{REF}(R_1+R_2)$ and $V_Y = V_1 + I_{REF}R_1$ (slope 1, X above Y by $I_{REF}R_2$).
- With $M_1$ saturated and $V_X$ nearly constant, $(V_1 - V_Y)/R_1 = I_{REF} + 2(V_Y - V_X)/R_2$, so $dV_Y/dV_1 \approx R_2/(R_2 + 2R_1)$.
- Large $V_1$: $V_Y > V_X$, current flows from Y into X, $M_2$ carries more than $I_{REF}$ and $V_X$ rises above $V_{GS}(I_{REF})$.
- Example ($I_{REF}$ = 100 μA, W/L = 10/0.5, $R_1 = R_2$ = 10 kΩ): $V_1$ = 0, 2, 3 V → $V_X$ ≈ 0.87, 0.97, 1.02 V; $V_Y$ ≈ 0.25, 0.98, 1.34 V.

## Grading notes

+2: both increasing; $V_X$ nearly flat around $V_{GS}(I_{REF})$, $V_Y$ rising much faster (slope ≈ $R_2/(R_2+2R_1)$ or "roughly linear"), crossing $V_X$ at $V_1 = V_{GS}(I_{REF}) + R_1I_{REF}$ (where $R_2$ carries no current); $V_Y < V_X$ below and $V_Y > V_X$ above. +1: correct trends but the crossing point not identified. 0: $V_X$ treated as exactly constant and $V_Y$ as $V_1 - R_1I_{REF}$ (ignoring $R_2$) with otherwise consistent reasoning. -2 (asserted as fact): $V_Y$ decreasing with $V_1$, $V_X$ varying strongly once the transistors conduct (e.g., following $V_1$ over the whole on-state range), or $R_1$ read as returned to $V_{DD}$. A correct slope-1 cutoff segment at small $V_1$ (when $I_{REF}(R_1+R_2) < 0.7$ V) is not an error.
