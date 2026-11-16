# Golden Solution - A229

## Reference answer

Here $V_{T1}$ and $|V_{T2}|$ are the device thresholds; the batteries $V_{TR1}$ and $V_{TR2}$ are separate gate offsets.

Maximum ($v_{IN} = V_{SS}$: M1 off, M2 driven with $V_{SG2} = V_{DD}-V_{SS}-V_{TR2}$ and in the nonsaturation region): with $V_2 = V_{DD}-V_{SS}-V_{TR2}-|V_{T2}|$,
$\dfrac{v_{OUT}}{R_L} = \beta_2\left[V_2(V_{DD}-v_{OUT}) - \dfrac{(V_{DD}-v_{OUT})^2}{2}\right]$ → $v_{OUT}(\max) = V_{DD} - \dfrac{(\beta_2V_2 + G_L) - \sqrt{(\beta_2V_2+G_L)^2 - 2\beta_2G_LV_{DD}}}{\beta_2}$, $G_L = 1/R_L$,
which for small $V_{SD2}$ (M2 acting as a resistor $1/(\beta_2V_2)$ dividing with $R_L$) is
$v_{OUT}(\max) \approx \dfrac{V_{DD}}{1 + \dfrac{1}{\beta_2R_L(V_{DD}-V_{SS}-V_{TR2}-|V_{T2}|)}}$.

Minimum ($v_{IN} = V_{DD}$: M2 off, M1 in nonsaturation with $V_{GS1} = V_{DD}-V_{TR1}-V_{SS}$): with $V_1 = V_{DD}-V_{SS}-V_{TR1}-V_{T1}$,
$-\dfrac{v_{OUT}}{R_L} = \beta_1\left[V_1(v_{OUT}-V_{SS}) - \dfrac{(v_{OUT}-V_{SS})^2}{2}\right]$ → $v_{OUT}(\min) \approx \dfrac{V_{SS}}{1 + \dfrac{1}{\beta_1R_L(V_{DD}-V_{SS}-V_{TR1}-V_{T1})}}$ (exact root analogous).

Why nonsaturation: since $R_L$ returns to ground, $v_{OUT}(\max) \ge 0$ and $V_{SD2} \le V_{DD}$, so M2 is necessarily in nonsaturation whenever $V_{DD} < V_2$, i.e. $|V_{SS}| > V_{TR2} + |V_{T2}|$ (the usual dual-supply case); likewise M1 at the minimum when $V_{DD} > V_{TR1} + V_{T1}$. Only for a small $|V_{SS}|$ (or $V_{DD}$) and a heavy load can the conducting device saturate, giving $v_{OUT}(\max) = \beta_2R_LV_2^2/2$ (valid while it is ≤ $V_{DD} - V_2$) and $v_{OUT}(\min) = -\beta_1R_LV_1^2/2$ (valid while it is ≥ $V_{SS} + V_1$).

No body effect enters because both sources are at their bulks. Unlike the source follower, this stage can swing to within a channel-resistance drop of the rails.

## Grading notes

+2: both limits with the conducting device in nonsaturation, the correct gate drives ($V_{DD}-V_{SS}-V_{TR2}$ for M2, $V_{DD}-V_{SS}-V_{TR1}$ for M1) and either the exact quadratic roots or the resistive-divider approximations. +1: correct approximations with one sign or subscript slip, or only the exact quadratic without solving. 0: only one limit. −2 (asserted as fact): swing limited by a threshold drop below the rails (follower behaviour), conducting device assumed saturated with $v_{OUT}$ independent of $R_L$, or the gate drive of M1 written with $V_{TR2}$ / $|V_{T2}|$. The question does not name the device thresholds, so any symbols are acceptable. An answer that openly takes the batteries equal to the device thresholds ($V_{TR1} = V_{T1}$, $V_{TR2} = |V_{T2}|$) and gives the results only for that case (e.g. $V_2 = V_{DD}-V_{SS}-2|V_{T2}|$), with an otherwise correct nonsaturation analysis, is 0 (a stated narrowing assumption, not −2); if it also gives the general form, grade the general form. A saturated-region result offered together with its validity condition, alongside the nonsaturation result, is correct.
