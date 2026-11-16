# Golden Solution - A393

## Reference answer

$R_2 = 2R_1 = 200$ kΩ and $V_{REF} = 2/3$ V.
- Noninverting input voltage: $v_+ = \dfrac{R_2v_{IN}+R_1v_{OUT}}{R_1+R_2}$; switching occurs when $v_+ = V_{REF}$.
- With the output low ($V_{OL}$), $V_{TRP}^+ = \dfrac{R_1+R_2}{R_2}V_{REF}-\dfrac{R_1}{R_2}V_{OL}$; with the output high, $V_{TRP}^- = \dfrac{R_1+R_2}{R_2}V_{REF}-\dfrac{R_1}{R_2}V_{OH}$.
- Width: $V_{TRP}^+-V_{TRP}^- = \dfrac{R_1}{R_2}(V_{OH}-V_{OL}) = 1$ V → $R_1/R_2 = 1/2$, $R_2 = 200$ kΩ.
- $V_{TRP}^+ = 1.5V_{REF}-0 = 1$ V → $V_{REF} = 0.667$ V; check $V_{TRP}^- = 1.5(0.667)-0.5(2) = 0$ V.

## Grading notes

+2: $R_2$ = 200 kΩ and $V_{REF}$ ≈ 0.667 V with the trip-point equations. +1: one of the two right with a slip in the other. 0: correct trip-point expressions but both values wrong by algebra slips. −2 (asserted as fact): the inverting (clockwise) formulas used (giving $R_2 = R_1$, $V_{REF} = 0$), the roles of $R_1$ and $R_2$ swapped ($R_2$ = 50 kΩ), or $V_{REF}$ taken as the centre of the loop (0.5 V).
