# Golden Solution - R252

## Reference answer

As $V_1$ rises, $M_1$'s gate–source voltage $V_X - V_1$ shrinks, its current falls and $V_Y$ rises; $M_1$ cuts off once $V_1 \approx V_X - V_{TH1}(V_1)$ (a few hundred mV, about the overdrive of $M_2$). From then on both voltages are constant: $V_Y = V_X + (V_{DD}-V_X)\dfrac{R_2}{R_1+R_2}$ and $V_X$ slightly above $V_{GS}(I_{REF})$.

- At $V_1 = 0$ the circuit is a resistor-loaded mirror with $R_2$ between X and Y.
- For $V_1 > 0$: $I_{D1} = \tfrac{\beta}{2}(V_X - V_1 - V_{TH1})^2$ with $V_{TH1}$ raised by the body effect ($V_{SB1} = V_1$), so $I_{D1}$ drops quickly and $V_Y$ climbs. As $V_Y$ exceeds $V_X$, current flows from Y through $R_2$ into $M_2$, so $V_X$ rises a little.
- After cutoff ($I_{D1} = 0$): $R_1$ and $R_2$ carry $(V_{DD}-V_X)/(R_1+R_2)$ into X; $M_2$ carries $I_{REF} + (V_{DD}-V_X)/(R_1+R_2)$, which fixes $V_X$; $V_Y$ is the divider point. Neither depends on $V_1$, and for $V_1 > V_Y$ the device stays off (its gate is below both channel terminals).
- Example ($I_{REF}$ = 100 μA, W/L = 10/0.5, $R_1 = R_2$ = 10 kΩ): $V_1$ = 0 → $V_X$ ≈ 1.02 V, $V_Y$ ≈ 1.34 V; $M_1$ off for $V_1 \gtrsim 0.31$ V, after which $V_X$ ≈ 1.08 V and $V_Y$ ≈ 2.04 V.

## Grading notes

+2: $V_Y$ rising and $M_1$ cutting off at a small $V_1$ (≈ $V_X - V_{TH}$), then both constant with $V_Y$ at the $R_1$–$R_2$ divider point between $V_{DD}$ and $V_X$; $V_X$ slightly increasing before becoming constant. +1: cutoff and flat region right, but $V_X$ claimed exactly constant or the flat $V_Y$ level not characterized; also +1 when everything graded above is right and the only error is in the body-effect term (e.g., $2|\phi_F|$ taken as 0.45 V), which only shifts the cutoff point by a few tens of mV and leaves the plateau levels unchanged. 0: rising $V_Y$ right but cutoff missed ($M_1$ assumed on up to large $V_1$). -2 (asserted as fact): $V_Y$ decreasing with $V_1$, $V_X$ following $V_1$, or the flat $V_Y$ level placed at $V_{DD}$ (ignoring $R_2$) or at $V_X$.
