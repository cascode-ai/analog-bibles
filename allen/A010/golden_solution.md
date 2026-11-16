# Golden Solution - A010

## Reference answer

Simplified circuit: $\dfrac{v_{out}}{i_{in}} = -\dfrac{g_mR_1R_2R_3}{R_1 + R_2 + g_mR_1R_3}$. Exact: $\dfrac{v_{out}}{i_{in}} = \dfrac{R_1R_3(1 - g_mR_2)}{R_1 + R_2 + R_3 + g_mR_1R_3}$. They agree when $g_mR_2 \gg 1$ and $R_3 \ll R_2$. For $g_m > G_2$ the simplified result always overstates the magnitude, only slightly when both conditions hold; if $g_mR_2 < 1$ the exact transresistance even changes sign while the simplified one stays negative.

- [Fig. 1]: $v_1 = i_{in}(R_1 \parallel R_2')$ with $R_1 \parallel \dfrac{R_2}{1 + g_mR_3} = \dfrac{R_1R_2}{R_1 + R_2 + g_mR_1R_3}$, and $v_{out} = -g_mR_3v_1$, hence the result.
- Exact result in resistance form: multiply numerator and denominator by $R_1R_2R_3$.
- Differences: (1) numerator $1 - g_mR_2$ versus $-g_mR_2$: the simplified circuit drops the feedforward current that $R_2$ carries directly from input to output (negligible when $g_mR_2 \gg 1$); (2) the extra $R_3$ in the exact denominator: the simplified circuit ignores the current $R_2$ draws from the output node, i.e. the loading of $R_3$ by $R_2$ (negligible when $R_3 \ll R_2$, more precisely $R_3 \ll R_1 + R_2 + g_mR_1R_3$). These are exactly the assumptions $R_2 \gg R_3$ and $v_{out} \approx -g_mR_3v_1$ used to build [Fig. 1].
- Example: $R_1 = 10$ kΩ, $R_2 = 100$ kΩ, $R_3 = 10$ kΩ, $g_m = 1$ mS: exact −45.0 kΩ, simplified −47.6 kΩ (≈ 6 % high); with $R_3 = 1$ kΩ: −8.18 kΩ versus −8.33 kΩ (≈ 2 %).

## Grading notes

+2: the simplified-circuit result $-g_mR_1R_2R_3/(R_1 + R_2 + g_mR_1R_3)$ (any equivalent form, e.g. $-g_mR_3/[G_1 + G_2(1 + g_mR_3)]$) and a comparison that identifies both differences from the exact result (the dropped "1" of $1 - g_mR_2$, i.e. feedforward through $R_2$, and the missing $R_3$ term, i.e. output loading by $R_2$) with the conditions $g_mR_2 \gg 1$, $R_3 \ll R_2$ under which they agree. Saying that the simplified result overstates the magnitude slightly, in the context of these conditions, is correct and not a deduction. +1: correct simplified result with a comparison that is right but mentions only one of the two differences or stays qualitative ("agrees when $R_2 \gg R_3$"). 0: correct simplified result with no or a wrong comparison, or the right method with an algebra slip. −2 (asserted as fact): $-g_mR_1R_2R_3/(R_1 + R_2 + R_3 + g_mR_1R_3)$ given as the transfer function of [Fig. 1] (that form has no basis in the simplified circuit), $R_2'$ treated as a series element, the two results claimed identical, or the sign of the gain wrong.
