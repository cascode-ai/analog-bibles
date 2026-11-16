# Golden Solution - R375

## Reference answer

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2}$$

- Since $I_1$ is ideal and λ = 0, KCL at the output: $g_mV_G + I_{n,M1} + I_F = 0$ ($I_F$ = current in $R_F$ from output to gate). At the gate: $V_G = R_SI_F$. Hence $I_F = -I_{n,M1}/(1 + g_mR_S)$, independent of $R_F$'s noise.
- KVL along $R_F$: $V_{out} = V_G + R_FI_F + V_{n,RF} = (R_S + R_F)I_F + V_{n,RF}$, so $V_{out} = V_{n,RF} - \dfrac{R_S + R_F}{1 + g_mR_S}I_{n,M1}$.
- Limits: $R_S = 0$ gives $4kTR_F + 4kT\gamma g_mR_F^2 = (4kT/R_F + 4kT\gamma g_m)R_F^2$; $R_S \to \infty$ gives $4kTR_F + 4kT\gamma/g_m$.

## Grading notes

+2: expression equivalent to the reference, with $R_F$'s noise appearing at the output with unity gain and $M_1$'s with $(R_S+R_F)/(1+g_mR_S)$. +1: correct structure with a slip in one factor that still satisfies one of the limits. 0: correct for one limit only ($R_S = 0$ or open) presented as general but with sound steps. -2 (asserted as fact): $R_F$'s noise said to be suppressed by the loop, $M_1$'s noise transfer given as $R_F$ regardless of $R_S$, $I_1$ treated as a resistor, or $R_S$ placed in the source of $M_1$.
