# Golden Solution - A053

## Reference answer

n-channel: $C_{BX}$ = 5.20 fF at 0 V and 4.07 fF at 0.75 V reverse bias ($v_{BX}$ = −0.75 V). p-channel: 4.31 fF at 0 V and 3.43 fF at 0.75 V reverse bias ($v_{BX}$ = +0.75 V).

- Geometry: each diffusion is 1.6 µm (from the gate edge to the edge of the active area) by 2.0 µm (the transistor width; the gate length is 0.8 µm): $AX$ = 3.2 µm², $PX$ = 2(1.6 + 2.0) = 7.2 µm.
- Model (reverse bias, $v_{BX} \le$ FC·PB): $C_{BX} = \dfrac{CJ\cdot AX}{(1 + |V_{BX}|/PB)^{MJ}} + \dfrac{CJSW\cdot PX}{(1 + |V_{BX}|/PB)^{MJSW}}$.
- n-channel, zero bias: $770\times10^{-6}\times3.2\times10^{-12}$ = 2.464 fF (bottom) + $380\times10^{-12}\times7.2\times10^{-6}$ = 2.736 fF (sidewall) = 5.20 fF. At 0.75 V: 2.464/1.75^0.5 = 1.863 fF plus 2.736/1.75^0.38 = 2.212 fF gives 4.07 fF.
- p-channel, zero bias: 1.792 + 2.520 = 4.31 fF. At 0.75 V: 1.792/1.75^0.5 = 1.355 fF plus 2.520/1.75^0.35 = 2.071 fF gives 3.43 fF.
- The sidewall is about half of the total for such small diffusions; since MJSW < MJ it falls less with reverse bias.

## Grading notes

+2: the four values within ±3% (5.20, 4.07, 4.31, 3.43 fF) from the correct area (3.2 µm²) and perimeter (7.2 µm), with the 0.75 V applied as reverse bias for both types. +1: one value wrong by a slip, or the gate-side edge left out of the perimeter (5.2 µm, giving 4.44, 3.46, 3.61, 2.85 fF) with everything else right. 0: zero-bias values right but the reverse-bias values wrong because of a computational slip in the bias factors, or the sidewall ignored (2.46, 1.86, 1.79, 1.35 fF). −2 (asserted as fact): area or perimeter misread from the figure (e.g. the 0.8 µm gate length used as the diffusion length, or the whole active area including the gate), capacitance increasing with reverse bias (this includes evaluating the 0.75 V point with $(1 - 0.75/\mathrm{PB})^{-M}$, i.e. as forward bias, although the question states the junction is always reverse biased; the reverse-bias values are the point of the question, and the zero-bias values, being only CJ·A + CJSW·P, do not lift such an answer above −2), or the n- and p-channel parameters swapped.
