# Golden Solution - R274

## Reference answer

$|A_v| = g_{m1}\big(r_{O2}\,\|\,r_{O4}\,\|\,\tfrac{R_1}{2}\big)\cdot\dfrac{2g_{m4}r_{O4}+1}{2(g_{m4}r_{O4}+1)} \approx g_{m1}\big(r_{O2}\|r_{O4}\|\tfrac{R_1}{2}\big)$: $R_1$ loads the output as if it were $R_1/2$ to ground.

- At the balanced bias point $V_F = V_{out}$, so $R_1$ carries no dc current (no offset).
- A signal current $i$ flowing from the output through $R_1$ into F is absorbed by the diode $M_3$, reducing $M_3$'s current by $i$; $M_4$ copies this, so the output loses $2i$ in total: $R_1$ looks like $R_1/2$.
- $G_m$ is unchanged ($g_{m1}$, as F is low impedance); $R_{out} = r_{O2}\|r_{O4}\|(R_1/2)$. The exact small-signal solution gives the expression above, which reduces to the defect-free gain for $R_1 \to \infty$.
- Example ($g_{m1}$ = 2.6 mS, $r_{O2}$ = 40 kΩ, $r_{O4}$ = 20 kΩ): defect-free 33.9; $R_1$ = 100 kΩ → 26.8.

## Grading notes

+2: gain $\approx g_{m1}(r_{O2}\|r_{O4}\|R_1/2)$ (the factor 1/2 from the mirror action is essential), optionally with the correction factor $(2g_{m4}r_{O4}+1)/[2(g_{m4}r_{O4}+1)]$. +1: $g_{m1}(r_{O2}\|r_{O4}\|R_1)$ (factor 1/2 missed) with otherwise correct reasoning. 0: correct statement that the gain drops, without a usable expression. -2 (asserted as fact): gain unchanged because $V_F = V_{out}$ (ignoring signal current in $R_1$), gain increased, or $R_1$ read as connected to the tail node.
