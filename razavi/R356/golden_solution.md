# Golden Solution - R356

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1+g_mR_S)^2}{g_m^2R_D}\right]$$

- $M_1$: drain noise current equivalent to a gate voltage $4kT\gamma/g_m$ for any $R_S$ (λ = 0, no body effect).
- $R_S$: its series noise voltage at the source acts like an input voltage: $4kTR_S$.
- $R_D$: output noise $4kTR_D$ divided by the squared gain $[g_mR_D/(1+g_mR_S)]^2$.

## Grading notes

+2: all three terms, including the $(1+g_mR_S)^2$ factor on the $R_D$ term. +1: the $R_D$ term without the degeneration factor, rest right. 0: correct method with the $R_S$ term missing or wrong. -2 (asserted as fact): $R_S$ noise divided by the gain, the transistor term divided by $(1+g_mR_S)^2$, or the $M_1$ term written as $4kT\gamma g_m$.
