# Golden Solution - R582

## Reference answer

After many clock cycles (steady state), $\overline{v_{n,out}^2} = kT/C$ (rms $\sqrt{kT/C}$). For the first transfer, with $C_2$ initially noise-free: $3kT/(4C)$.

- When $M_1$ turns off, $C_1$ holds a sampled noise of variance kT/C.
- While $M_2$ is on, its thermal noise only moves charge between $C_1$ and $C_2$. The sum of the charges (the average $(V_1 + V_2)/2$) is unchanged, but the difference $V_1 - V_2$ is re-randomized. When $M_2$ opens, $V_1 - V_2$ has variance $kT/(C_1 \text{ in series with } C_2) = 2kT/C$, independent of earlier values.
- $V_{out} = (V_1 + V_{2,old})/2 - (V_1 - V_2)_{noise}/2$, so $\sigma_{out}^2 = (kT/C)/4 + \sigma_{old}^2/4 + (2kT/C)/4 = \sigma_{old}^2/4 + 3kT/(4C)$.
- First transfer ($\sigma_{old}$ = 0): $3kT/(4C)$. Steady state: $\sigma^2 = \sigma^2/4 + 3kT/(4C)$, so $\sigma^2 = kT/C$.

## Grading notes

+2: kT/C (steady state) or 3kT/(4C) (single transfer, stated as such), with both contributions: $M_1$'s kT/C on $C_1$ reduced to a quarter by the sharing, and $M_2$'s noise as a 2kT/C differential term (kT/(2C) at the output). +1: a correct final value with a vague or partly wrong breakdown, or one of the two cases right while the other is not addressed. 0: only one contribution counted (e.g., kT/(4C) from $M_1$ alone, or kT/(2C) from $M_2$ alone), explicitly marked as partial. -2 (asserted as fact): a total such as kT/(2C) "of the total capacitance $C_1 + C_2$", kT/(4C), or rms noise voltages added linearly, presented as the complete answer.
