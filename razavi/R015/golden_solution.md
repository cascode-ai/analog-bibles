# Golden Solution - R015

## Reference answer

$V_{GS} = V_X$. $I_X = 0$ below 0.7 V, then rises as a square law (saturation) until $I_X$ exceeds $I_1 + V_{TH}/R_1$, after which $M_1$ is in triode and $I_X$ keeps rising more gently. $g_m$ is zero, then rises linearly, and in triode follows $g_m = \beta V_D$: usually it peaks at the saturation/triode boundary and then falls, but it keeps rising (more slowly, toward $1/R_1$) if $\beta R_1 u_B < 1$, with $u_B = \sqrt{2(I_1 + 0.7/R_1)/\beta}$.
- Drain node: $I_1 = I_X + (V_D - V_X)/R_1$, so $V_D = V_X + R_1(I_1 - I_X)$.
- $V_X < 0.7$ V: $M_1$ off, $I_X = 0$, $g_m = 0$; $I_1$ flows through $R_1$ into the $V_X$ source ($V_D = V_X + I_1R_1$, assumed below 3 V).
- $V_X > 0.7$ V, saturation: $I_X = \tfrac12\beta(V_X - 0.7)^2$, $g_m = \beta(V_X - 0.7)$. Saturation needs $V_D > V_X - V_{TH}$, i.e. $I_X < I_1 + V_{TH}/R_1$; the boundary is at $V_{X1} = 0.7 + \sqrt{2(I_1 + 0.7/R_1)/\beta}$. Note $I_X$ can exceed $I_1$: the extra current comes from $V_X$ through $R_1$.
- $V_X > V_{X1}$: triode, $I_X = I_1 + (V_X - V_D)/R_1$ keeps increasing (no longer quadratically; once $V_D$ is small the slope approaches $1/R_1$), while $g_m = \beta V_D$. In triode $dV_D/dV_X = (1/R_1 - \beta V_D)/[1/R_1 + \beta(V_X - 0.7 - V_D)]$, so $V_D$ tends to $1/(\beta R_1)$ and $g_m$ tends to $1/R_1$: if $\beta R_1 u_B > 1$ (the usual case) $g_m$ peaks at the boundary and then falls; if $\beta R_1 u_B < 1$ it keeps rising, more slowly, toward $1/R_1$ (e.g. β = 1 mA/V², $I_1$ = 0.1 mA, $R_1$ = 500 Ω: $V_{X1}$ = 2.43 V and $g_m$ rises from 1.73 to 1.79 mS by $V_X$ = 3 V).

## Grading notes

+2: off below 0.7 V, square-law rise in saturation with linearly rising $g_m$, transition to triode when $I_X$ exceeds $I_1 + V_{TH}/R_1$ (or equivalently when $V_D < V_X - V_{TH}$), continued but slower rise of $I_X$ and $g_m = \beta V_D$ in triode. Describing $g_m$ as falling after the boundary (the usual case, $\beta R_1 u_B > 1$) is correct, and so is a case analysis in which $g_m$ keeps rising toward $1/R_1$ when $\beta R_1 u_B < 1$; both are +2. +1: correct but the triode transition only described qualitatively without the condition, or $g_m$ in triode not addressed. 0: square-law part right but the triode region missed entirely (square law extended to 3 V). -2 (asserted as fact): $I_X$ decreasing with $V_X$, $I_X$ capped at $I_1$, or $V_{GS}$ taken as anything other than $V_X$.
