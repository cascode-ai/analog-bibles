# Golden Solution - R334

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_S}\right)$$

- $M_1$: gate-referred $4kT\gamma/g_m$ (λ = 0, no body effect).
- $R_S$: its noise current flows into $R_S\|(1/g_m)$, giving $\overline{V_{out}^2} = \dfrac{4kT}{R_S}\left(R_S\|\dfrac1{g_m}\right)^2$; the voltage gain is $A_v = g_m\left(R_S\|\dfrac1{g_m}\right)$, so the referred value is $4kT/(g_m^2R_S)$.

## Grading notes

+2: both terms correct. +1: correct with a minor algebra slip in the $R_S$ term that keeps the $1/(g_m^2R_S)$ dependence wrong only by a constant. 0: only the transistor term, with $R_S$ said to be negligible without justification. -2 (asserted as fact): the $R_S$ term written as $4kTR_S$ (treated as in series with the input), gain taken as unity for both signal and noise so that $R_S$ appears with the wrong dependence, or the transistor term as $4kT\gamma g_m$.
