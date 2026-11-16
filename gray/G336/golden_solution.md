# Golden Solution - G336

## Reference answer

$I_{\text{out}} = I_{EE}\tanh\!\left(\dfrac{V_1}{2V_T}\right)\tanh\!\left(\dfrac{V_2}{2V_T}\right)$, so for each $V_1$ the curve versus $V_2$ is a tanh curve of the same shape, odd-symmetric through the origin, scaled by $\tanh(V_1/2V_T)$:
- $V_1 = 0.1V_T$: $\tanh(0.05) = 0.050$; limits $\pm 0.050\,I_{EE}$, slope at the origin $0.025\,I_{EE}/V_T$.
- $V_1 = 0.5V_T$: $\tanh(0.25) = 0.245$; limits $\pm 0.245\,I_{EE}$, slope $0.122\,I_{EE}/V_T$.
- $V_1 = V_T$: $\tanh(0.5) = 0.462$; limits $\pm 0.462\,I_{EE}$, slope $0.231\,I_{EE}/V_T$.
- Each curve is nearly linear for $|V_2| \lesssim V_T$, reaches 46% of its limit at $V_2 = V_T$, 76% at $2V_T$, 96% at $4V_T$, and is flat (saturated) beyond about $\pm 4V_T$. $I_{\text{out}}$ has the sign of $V_1V_2$ (positive for $V_1, V_2 > 0$ with the polarities marked).
- The saturation levels are in the ratio 1 : 4.9 : 9.2 rather than 1 : 5 : 10: the $V_1$ input is itself compressed by the tanh at $V_1 = V_T$.

Derivation: the lower pair gives $I_{c1} - I_{c2} = I_{EE}\tanh(V_2/2V_T)$. The + terminal of $V_1$ drives the bases of $Q_3$ and $Q_6$, so $I_{c3} - I_{c4} = I_{c1}\tanh(V_1/2V_T)$ and $I_{c6} - I_{c5} = I_{c2}\tanh(V_1/2V_T)$. Then $I_{\text{out}} = (I_{c3} + I_{c5}) - (I_{c4} + I_{c6}) = (I_{c1} - I_{c2})\tanh(V_1/2V_T)$.

## Grading notes

+2: the product form $I_{EE}\tanh(V_1/2V_T)\tanh(V_2/2V_T)$ (or curves equivalent to it), three tanh-shaped curves through the origin saturating at about $\pm0.05$, $\pm0.245$, $\pm0.46\,I_{EE}$ (±5%), saturation within a few $V_T$ of $V_2$, and the correct sign. +1: correct form and shapes but the levels taken as linear in $V_1$ (0.05, 0.25, 0.5 $I_{EE}$, i.e. ignoring the tanh of $V_1$ at $V_1 = V_T$), or one numerical slip, or no numbers for the slopes. 0: overall sign inverted (misreading which $V_1$ terminal drives $Q_3$/$Q_6$) with everything else right; or the correct expression with a wrong sketch for one curve. −2 (asserted as fact): $I_{\text{out}}$ linear in $V_2$ without saturation, saturation level equal to $I_{EE}$ for every $V_1$, a missing factor 2 in the arguments ($\tanh(V/V_T)$, giving levels 0.10, 0.46, 0.76 $I_{EE}$), or a sum instead of a product of the two inputs.
