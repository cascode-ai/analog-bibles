# Golden Solution - A200

## Reference answer

$A_v = \dfrac{v_{out}}{v_{in}} = \dfrac{r_{ds3} + g_{m2}r_{ds2}r_{ds3}}{r_{ds2}+r_{ds3}}$; $A_i = \dfrac{i_{out}}{i_{in}} = -\dfrac{r_{ds1}(1+g_{m2}r_{ds2})}{r_{ds1}(1+g_{m2}r_{ds2}) + r_{ds2}}$.

- M2 is a common-gate stage (source = input node, drain = output node), M1 a current sink ($r_{ds1}$) at the input node and M3 a current source ($r_{ds3}$) at the output.
- Voltage gain: M2's drain-to-source current is $g_{m2}(0-v_{in}) + (v_{out}-v_{in})/r_{ds2}$; with the output unloaded it must equal the current $-v_{out}/r_{ds3}$ arriving from M3: $v_{out}(g_{ds2}+g_{ds3}) = v_{in}(g_{m2}+g_{ds2})$, i.e. the expression above (≈ $g_{m2}(r_{ds2}\|r_{ds3})$, non-inverting).
- Current gain: with $v_{out}$ = 0, $i_{in} = v_{in}(g_{ds1}+g_{m2}+g_{ds2})$ and the current entering the output terminal is $i_{out} = -(g_{m2}+g_{ds2})v_{in}$, so $A_i = -(g_{m2}+g_{ds2})/(g_{m2}+g_{ds1}+g_{ds2})$, the ratio above (≈ −1: the input current passes through M2 to the output, minus the small part lost in $r_{ds1}$). $r_{ds3}$ does not appear because the short across the output takes all of M2's signal current.

## Grading notes

+2: both expressions equivalent to the reference. +1: one of the two right and the other with a minor slip (e.g. $A_i$ with an extra $r_{ds3}$ in the denominator, which corresponds to an unshorted output), or both right but with the sign of $A_i$ wrong. 0: only one correct. −2 (asserted as fact): M2 treated as a source follower or common-source stage (gain ≈ −$g_mr_{ds}$ or ≈ 1), or $|A_i| \gg 1$.
