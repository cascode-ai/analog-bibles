# Golden Solution - R377

## Reference answer

$V_{n,out} = (1 - g_mR_F)\dfrac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}$, which after substitution becomes $V_{n,out} = V_{n,RF} - \dfrac{g_m(R_F + R_S)}{1 + g_mR_S}V_{n,M1}$, so
$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\frac{(R_F + R_S)^2}{(1 + g_mR_S)^2},$$
yes, identical to the direct analysis.

- Noiseless circuit: gate node $V_G$, current from $R_S$ into the gate node $-(V_G - V_{n,in})/R_S$, plus $I_{n,in}$, plus the feedback current $-g_mV_G$ (since $I_F = -g_mV_G$ with the ideal load) sum to zero: $V_G = \dfrac{V_{n,in} + R_SI_{n,in}}{1 + g_mR_S}$; $V_{out} = (1 - g_mR_F)V_G$.
- $V_{n,in} + R_SI_{n,in} = \dfrac{g_m(R_F + R_S)V_{n,M1} - (1 + g_mR_S)V_{n,RF}}{g_mR_F - 1}$; multiplying by $(1 - g_mR_F)/(1 + g_mR_S)$ gives the result.
- Direct analysis: with the ideal load, $I_F = -I_{n,M1}/(1+g_mR_S)$ and $V_{out} = (R_S + R_F)I_F + V_{n,RF}$: the same.
- Adding $\overline{V_{n,in}^2}$ and $R_S^2\overline{I_{n,in}^2}$ as uncorrelated powers would give a wrong result; the correlation must be kept.

## Grading notes

+2: correct superposition $V_{n,out} = (1 - g_mR_F)(V_{n,in} + R_SI_{n,in})/(1 + g_mR_S)$, correct substitution to $V_{n,RF} - g_m(R_F+R_S)V_{n,M1}/(1+g_mR_S)$, the PSD above, and "yes, the same". +1: correct final PSD and conclusion with a sign slip in an intermediate step. 0: correct superposition formula but the substitution not carried out, or the direct result not computed for comparison. -2 (asserted as fact): powers of $V_{n,in}$ and $I_{n,in}$ added as uncorrelated and the (different) result declared correct, or the conclusion that the two methods disagree.
