# Golden Solution - R145

## Reference answer

$A_v = \dfrac{g_m}{g_m + g_{mb} + 1/r_O + 1/R_L} = g_m\left(\dfrac{1}{g_m} \,\Big\|\, \dfrac{1}{g_{mb}} \,\Big\|\, r_O \,\Big\|\, R_L\right)$.

- $G_m$: with the source shorted to ac ground, $v_{gs} = v_{in}$, $v_{bs} = 0$ and $v_{ds} = 0$, so the device delivers $g_mv_{in}$ out of its source into the short. In the sign convention of the lemma (current drawn from the output node into the circuit, which gives $G_m = g_m$ for a CS stage), $G_m = -g_m$.
- $R_{out}$ (input at ac zero): the source looks like $1/g_m \| 1/g_{mb} \| r_O$, in parallel with $R_L$ (the ideal current source adds nothing).
- $A_v = -G_mR_{out} = g_mR_{out}$, positive and below 1 (→ $g_m/(g_m + g_{mb}) = 1/(1+\eta)$ for $R_L, r_O \to \infty$).

## Grading notes

+2: final expression equivalent to $g_m/(g_m + g_{mb} + 1/r_O + 1/R_L)$ with $G_m$ of magnitude $g_m$ and the correct $R_{out}$. +1: correct final result with the $G_m$ sign convention handled loosely (e.g., $G_m$ quoted as $+g_m$ and the lemma's minus sign then dropped or overridden), or $R_L$ included but one parallel term mislabelled without effect. An alternative form that writes $g_{mb} = \gamma g_m$ (confusing the body-effect coefficient γ, in $\mathrm{V^{1/2}}$, with $\eta = \gamma/(2\sqrt{2|\phi_F|+V_{SB}})$), e.g. $A_v = g_m/[(1+\gamma)g_m + 1/r_O + 1/R_L]$, is a minor false claim in a rewrite: at most +1 when the main result in terms of $g_{mb}$ is correct. 0: $R_{out}$ missing $1/g_{mb}$ or $r_O$ (an approximate result) with otherwise correct use of the lemma. -2 (asserted as fact): $R_{out} = R_L$ or $1/g_m$ alone asserted as exact, a negative gain, or $G_m$ including $g_{mb}$ for a shorted output.
