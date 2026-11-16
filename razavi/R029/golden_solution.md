# Golden Solution - R029

## Reference answer

$M_1$ (gate at 2 V) transfers charge from $C_1$ to $C_2$: $I_X$ jumps to $\tfrac12\beta(2 - 0.7)^2 = 0.845\beta$ at $t = 0^+$ and decays to zero; $V_X$ falls from 3 V while the source voltage $V_S$ rises from 0. Charge conservation: $C_1(3 - V_X) = C_2V_S$.
- Case 1, $C_2 < 1.75\,C_1$: $M_1$ stays saturated and turns off as $V_S \to 2 - V_{TH}(V_S) = 1.09$ V (asymptotically, square-law tail; 1.3 V without body effect). Final $V_X = 3 - 1.09\,C_2/C_1$ V.
- Case 2, $C_2 > 1.75\,C_1$: $V_X$ drops to $V_S$ first; $M_1$ ends in triode with $V_{DS} \to 0$ and both nodes settle at $3C_1/(C_1 + C_2)$ (simple charge sharing).
- $I_X = -C_1\,dV_X/dt$ starts at 0.845β (saturation, $V_{GS} = 2$ V, $V_{TH} = 0.7$ V at $V_S = 0$) and decreases monotonically to zero; the body effect ($V_{SB} = V_S$) speeds up the decay.

## Grading notes

+2: charge transfer from $C_1$ to $C_2$ through $M_1$, initial $I_X = \tfrac12\beta(1.3\ \mathrm{V})^2$, $V_X$ falling and $V_S$ rising, termination either by $M_1$ cutting off at $V_S \approx 2\ \mathrm{V} - V_{TH} \approx 1.09$ V (body effect; 1.3 V acceptable if body effect ignored) or by equalization $V_X = V_S = 3C_1/(C_1+C_2)$, with the final $V_X$ consistent with charge conservation. Treating only one case with a stated capacitor-ratio assumption is acceptable. +1: correct mechanism and final-value logic but no charge-conservation expression. 0: final value wrong through a slip, mechanism right. -2 (asserted as fact): $V_X$ discharged to 0 V, $C_2$ ignored (treating the source as grounded), or $I_X$ increasing.
