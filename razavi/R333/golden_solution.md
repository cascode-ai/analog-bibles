# Golden Solution - R333

## Reference answer

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1+g_mR_S)^2}{g_m^2R_D}\right]$$

- $M_1$: its drain noise current is equivalent to a gate voltage $4kT\gamma/g_m$ for any source impedance (λ = 0, no body effect).
- $R_S$: its noise voltage $4kTR_S$ in series with the source acts like a voltage at the gate (only $V_{GS}$ matters), so it is referred one-to-one.
- $R_D$: output noise $4kTR_D$; the voltage gain is $g_mR_D/(1+g_mR_S)$, so it refers to $4kTR_D(1+g_mR_S)^2/(g_mR_D)^2$.

## Grading notes

+2: all three terms with the correct degeneration factor $(1+g_mR_S)^2$ on the $R_D$ term. +1: one term with a minor slip (e.g., the $R_D$ term divided by $g_m^2R_D$ without the degeneration factor) while the others are right. 0: correct method but two terms wrong, or the $R_S$ term missing. -2 (asserted as fact): $R_S$ noise divided by the gain or multiplied by $g_m^2$, the $M_1$ term written as $4kT\gamma g_m$, or the gain taken as $g_mR_D$ for the signal and the result presented as exact.
