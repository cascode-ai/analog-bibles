# Golden Solution - G055

## Reference answer

$$\frac{v_o}{v_i} = -\frac{r_\pi}{R_S + r_\pi}\,g_m (R_C\|r_o) = -\frac{\beta_0 (R_C\|r_o)}{R_S + r_\pi} = -\frac{\beta_0 R_C V_A I_C}{(V_A + I_C R_C)(I_C R_S + \beta_0 V_T)},$$
with $g_m = I_C/V_T$, $r_\pi = \beta_0 V_T/I_C$, $r_o = V_A/I_C$.

Optimum: $I_{C,\text{opt}} = \sqrt{\dfrac{\beta_0 V_T V_A}{R_S R_C}}$ (at this point $R_C/r_o = r_\pi/R_S$).

Gain at the optimum: $\left|\dfrac{v_o}{v_i}\right|_{\max} = \dfrac{\beta_0 V_A R_C}{\left(\sqrt{\beta_0 V_T R_C} + \sqrt{V_A R_S}\right)^2}$, equivalently $\dfrac{V_A}{V_T}\dfrac{x^2}{(1+x)^2}$ with $x = I_{C,\text{opt}}R_C/V_A = \sqrt{\beta_0 V_T R_C/(V_A R_S)}$ (the gain is negative, inverting).

Derivation:
- The source and $r_\pi$ form a divider at the input; the collector node sees $R_C \| r_o$.
- Write $|A_v| = \beta_0 R_C V_A\, f(I_C)$ with $f = I_C/[(V_A + I_C R_C)(R_S I_C + \beta_0 V_T)]$. Setting $df/dI_C = 0$: the denominator $D = R_C R_S I_C^2 + (V_A R_S + \beta_0 V_T R_C) I_C + \beta_0 V_T V_A$ must satisfy $D = I_C D'$, which gives $R_C R_S I_C^2 = \beta_0 V_T V_A$.
- Substituting back gives the maximum above.

Why the gain falls:
- Very low $I_C$: $r_\pi \gg R_S$ and $r_o \gg R_C$, so $A_v \approx -g_m R_C = -I_C R_C/V_T$, proportional to $I_C$: too little transconductance.
- Very high $I_C$: $r_\pi = \beta_0 V_T/I_C$ becomes much smaller than $R_S$, so only the fraction $r_\pi/(R_S + r_\pi) \propto 1/I_C$ of $v_i$ reaches the base (the gain tends to the current-gain limit $-\beta_0 (R_C\|r_o)/R_S$), and $r_o = V_A/I_C$ drops below $R_C$, so the load term also falls as $1/I_C$.

## Grading notes

Four parts, equal weight: (1) gain expression, (2) $I_{C,\text{opt}}$, (3) qualitative explanation, (4) gain at the optimum. +2: all four correct (any algebraically equivalent forms; the gain may be written with $r_\pi$, $g_m$, $r_o$ as long as their $I_C$ dependence is stated). +1: one minor slip (e.g. sign of the gain missing, or the maximum given only as $-\beta_0(R_C\|r_o)/(R_S + r_\pi)$ evaluated at $I_{C,\text{opt}}$ without simplifying). 0: about half the parts right. −2 (asserted as fact): $I_{C,\text{opt}}$ with a wrong formula (e.g. $\sqrt{V_A V_T/(R_S R_C)}$ without $\beta_0$, or a claim that the gain increases monotonically with $I_C$), $r_o$ ignored in the optimization so that no finite optimum is found while the question requires it, or the high-current fall-off attributed to the wrong cause only (e.g. "saturation of the transistor").
