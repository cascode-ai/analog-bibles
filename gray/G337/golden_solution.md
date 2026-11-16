# Golden Solution - G337

## Reference answer

$|V_{id}| \approx 0.20\,V_T \approx 5.2$ mV.

- Transfer curve: $\Delta I_c = I_{EE}\tanh(V_{id}/2V_T)$; slope $\dfrac{d\Delta I_c}{dV_{id}} = \dfrac{I_{EE}}{2V_T}\,\mathrm{sech}^2\!\left(\dfrac{V_{id}}{2V_T}\right)$, with the maximum $I_{EE}/2V_T$ at the origin.
- Condition: $\mathrm{sech}^2(x) = 0.99$, $x = V_{id}/2V_T$ → $\cosh x = 1/\sqrt{0.99} = 1.00504$ → $x = 0.1003$ (equivalently $\mathrm{sech}^2 x \approx 1 - x^2 = 0.99$ gives $x = 0.1$).
- $|V_{id}| = 2V_T x = 0.2007\,V_T = 5.2$ mV.

## Grading notes

+2: $|V_{id}| \approx 5.2$ mV (5.0–5.4 mV) or $0.20\,V_T$, from the derivative of the tanh characteristic. +1: correct method and result in units of $V_T$ but a slip in the conversion to millivolts, or the value given only approximately (e.g. "about 5 mV") with sound reasoning. 0: correct setup with an arithmetic error in the final value. −2 (asserted as fact): the large-signal ratio $\Delta I_c/V_{id}$ used instead of the derivative (gives ≈ 0.35 $V_T$ ≈ 9.1 mV), a missing factor 2 in the tanh argument (≈ 2.6 mV), or a slope taken from a linear model so that no deviation exists.
