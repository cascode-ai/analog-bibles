# Golden Solution - R282

## Reference answer

$R_{on,R}\,g_{m,B} = \dfrac{(W/L)_B}{(W/L)_R}\exp\!\left(\dfrac{V_{GS,B} - V_{GS,R}}{V_T}\right) = \dfrac{(W/L)_B}{(W/L)_R}\exp\!\left(\dfrac{2V_B - V_G}{V_T}\right)$ (equal thresholds assumed; with different thresholds the exponent becomes $[(V_{GS,B}-V_{TH,B}) - (V_{GS,R}-V_{TH,R})]/V_T$).

- $M_B$: $V_{GS,B} = V_B$ (the node voltage at its drain/gate), $g_{m,B} = I_B/V_T = \mu C_d(W/L)_BV_T\exp[(V_B - V_{TH})/V_T]$.
- $M_R$: both channel terminals sit at $V_B$ (no dc current, and the gate of $M_1$ draws none), so $V_{GS,R} = V_G - V_B$ and $R_{on,R} = 1/\{\mu C_d(W/L)_RV_T\exp[(V_G - V_B - V_{TH})/V_T]\}$.
- Multiplying: the product above. If $V_G$ is chosen so that $V_{GS,R} = V_{GS,B}$ (i.e., $V_G = 2V_B$), $R_{on,R} = \dfrac{(W/L)_B}{(W/L)_R}\cdot\dfrac{1}{g_{m,B}}$. Since the exponential makes $R_{on,R}$ very sensitive to $V_G - V_B$, a large, well-defined resistance requires $V_G$ to track $V_B$; a small $(W/L)_R$ and large $(W/L)_B$ raise $R_{on,R}$.
- ($M_R$'s source is at $V_B$ with its bulk grounded, so its threshold is slightly higher than $M_B$'s; this adds a factor $\exp[(V_{TH,R}-V_{TH,B})/V_T]$.)

## Grading notes

+2: $R_{on,R}\,g_{m,B} = [(W/L)_B/(W/L)_R]\exp[(V_{GS,B} - V_{GS,R})/V_T]$ with $V_{GS,R} = V_G - V_B$ (or the equivalent explicit form), noting the special case $R_{on,R} = [(W/L)_B/(W/L)_R]/g_{m,B}$ when the gate–source voltages are equal. An answer giving only that special case with the assumption $V_{GS,R} = V_{GS,B}$ clearly stated earns +1. 0: correct individual expressions for $g_{m,B}$ and $R_{on,R}$ but no relation formed. -2 (asserted as fact): $R_{on,R} = 1/g_{m,B}$ independent of sizes and bias, the W/L ratio inverted, or strong-inversion square-law expressions used.
