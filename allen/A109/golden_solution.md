# Golden Solution - A109

## Reference answer

$R_1$ = 1 kΩ, $R_2 \approx 11.06$ kΩ, $R_3 \approx 8.76$ kΩ.

- Zero TC at $T_0$: $\frac{R_3}{R_1}\frac{V_{PTAT}}{T_0} + \frac{R_3}{R_2}\frac{V_{CTAT} - V_{G0} - (\gamma - \alpha)V_{t0}}{T_0} = 0$, so $\dfrac{R_2}{R_1} = \dfrac{V_{G0} - V_{CTAT} + (\gamma - \alpha)V_{t0}}{V_{t0}\ln10} = \dfrac{1.205 - 0.6 + 0.0572}{0.0599} = 11.06$, and $R_2$ = 11.06 kΩ.
- With this ratio $V_{REF} = \frac{R_3}{R_2}\left[\frac{R_2}{R_1}V_{PTAT} + V_{CTAT}\right] = \frac{R_3}{R_2}\left[V_{G0} + (\gamma - \alpha)V_{t0}\right] = \frac{R_3}{R_2}\times1.262$ V.
- $V_{REF}$ = 1 V: $R_3/R_2 = 1/1.262 = 0.792$, $R_3$ = 8.76 kΩ.

## Grading notes

+2: $R_2$ = 11.0–11.1 kΩ and $R_3$ = 8.70–8.80 kΩ with $R_1$ = 1 kΩ, from the zero-TC condition and the scaling $V_{REF} = (R_3/R_2)\times1.262$ V. +1: correct method with a slip in one value. 0: correct $R_2$ but $R_3$ wrong or missing. −2 (asserted as fact): $R_3$ chosen from $V_{REF} = V_{PTAT}R_3/R_1$ alone, the zero-TC ratio inverted ($R_2/R_1$ ≈ 0.09), or $V_{REF}$ = 1 V claimed impossible for the parallel form.
