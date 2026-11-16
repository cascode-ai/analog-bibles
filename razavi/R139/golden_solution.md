# Golden Solution - R139

## Reference answer

$A_v = 0$ for $V_b \le V_{TH}$; for larger $V_b$ the gain magnitude rises from 0 while $M_1$ is in triode, reaches $g_{m1}R_D$ when $M_1$ saturates at $V_b = V_{in} + \sqrt{2I_1/\beta_2}$, and stays at $-g_{m1}R_D$ up to $V_b = V_{DD}$.

- $V_b \le 0.7$ V: $M_2$ off, no current, $A_v = 0$.
- Just above: $M_2$ saturated (drain near $V_{DD}$), small current, node $X$ near 0, so $M_1$ is in deep triode with $g_{m1} = \beta_1V_X$ and $g_{ds1} = \beta_1(V_{in} - 0.7 - V_X)$. The common-gate $M_2$ passes the current to $R_D$: $A_v = -g_{m1}R_D\,g_{m2}/(g_{m2} + g_{ds1})$, which starts at 0 and grows as $V_b$ (hence $V_X$) rises.
- $V_X$ reaches $V_{in} - 0.7$ V when $V_b = V_X + V_{GS2} = V_{in} + \sqrt{2I_1/\beta_2}$: $M_1$ saturates, $|A_v| = g_{m1}R_D = \sqrt{2\beta_1I_1}R_D$, the maximum.
- Beyond: $M_1$ is a current source fixed at $I_1$; even if $M_2$ enters triode (for $V_b > V_{DD} - I_1R_D + 0.7$ V), with λ = 0 the small-signal current $g_{m1}v_{in}$ still flows entirely into $R_D$, so the gain stays at $-g_{m1}R_D$ up to $V_b = 3$ V.

## Grading notes

+2: zero gain below $V_{TH}$, a rising gain while $M_1$ is in triode, the plateau $-g_{m1}R_D$ once $M_1$ saturates (break at $V_b \approx V_{in} + \sqrt{2I_1/\beta_2}$, i.e. $V_{in} - V_{TH} + V_{GS2}$), unchanged up to $V_{DD}$. +1: correct shape and plateau but the break point not given, or a drop of gain claimed when $M_2$ enters triode. 0: plateau value right but the low-$V_b$ behaviour wrong. -2 (asserted as fact): gain maximal at small $V_b$ and decreasing, plateau value other than $g_{m1}R_D$ (e.g., $g_{m1}g_{m2}r_Or_O$-type with λ = 0), or nonzero gain with $M_2$ off.
