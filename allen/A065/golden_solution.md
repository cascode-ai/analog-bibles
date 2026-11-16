# Golden Solution - A065

## Reference answer

$W_{eq} = W$ and $L_{eq} = \sum_{i=1}^{n} L_i$.

- Without body effect every device has the same $V_T$ and the same gate voltage $V_G$. With the source of device i at $V_{i-1}$ and its drain at $V_i$, its nonsaturation current is $i_D = \frac{K'W}{2L_i}\left[(V_G - V_T - V_{i-1})^2 - (V_G - V_T - V_i)^2\right]$, i.e. $\frac{2L_i}{K'W}i_D = F(V_{i-1}) - F(V_i)$ with $F(V) = (V_G - V_T - V)^2$.
- The same current flows through all devices, so summing over i telescopes: $\frac{2\sum L_i}{K'W}i_D = F(V_S) - F(V_D)$, which is the equation of a single transistor of width W and length $\sum L_i$ between the outer source $V_S = V_0$ and drain $V_D = V_n$.
- Saturation: only the top device can saturate (each lower one has $V_{GS} - V_T > V_{DS}$ because its drain is the next device's source); its drain-end term is then replaced by 0 (pinch-off), giving $i_D = \frac{K'W}{2\sum L_i}(V_G - V_S - V_T)^2$, again the single-device result.

## Grading notes

+2: $W_{eq} = W$ and $L_{eq} = \sum L_i$, with a derivation valid in nonsaturation (summing the per-device equations, e.g. through $F(V)$ or the channel integral $\int(V_G - V_T - V)\,dV$) and a statement for saturation. +1: correct result with a derivation only for two devices or only one region, or a heuristic (series channel resistances add) without the square-law check. 0: correct result asserted without any justification. −2 (asserted as fact): $L_{eq}$ as an average or harmonic combination, the width changed while the length is kept, or the claim that the stack cannot be represented by a single transistor under these assumptions.
