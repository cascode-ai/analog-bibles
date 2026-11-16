# Golden Solution - R146

## Reference answer

$A_v = \dfrac{[1 + (g_m + g_{mb})r_O]R_D}{r_O + [1 + (g_m + g_{mb})r_O]R_S + R_D}$ (non-inverting).

- $G_m$: output (drain) shorted. With $v_D = 0$, the channel current from drain to source is $i_d = -(g_m + g_{mb})v_X - v_X/r_O$ ($v_{gs} = v_{bs} = -v_X$). KCL at $X$: $(v_{in} - v_X)/R_S + i_d = 0$ → $v_X = v_{in}/[1 + (g_m + g_{mb} + 1/r_O)R_S]$. The current drawn into the drain from the short is $i_d$, so $G_m = -\dfrac{1 + (g_m+g_{mb})r_O}{r_O + [1 + (g_m+g_{mb})r_O]R_S}$ (negative: raising the source voltage reduces the drain current).
- $R_{out} = R_D \,\|\, \{r_O + [1 + (g_m+g_{mb})r_O]R_S\}$ (degenerated output resistance in parallel with $R_D$).
- $A_v = -G_mR_{out}$ gives the expression above; for $r_O \to \infty$: $(g_m+g_{mb})R_D/[1 + (g_m+g_{mb})R_S]$.

## Grading notes

+2: final expression equivalent to the one above, with $G_m$ and $R_{out}$ derived correctly. +1: the large-$r_O$ result stated as an approximation, or a $G_m$ sign-convention slip with the correct final gain. 0: correct $G_m$ or $R_{out}$ but the final combination wrong by algebra. -2 (asserted as fact): inverting gain, $G_m = g_m + g_{mb}$ with $R_S$ and $r_O$ ignored asserted as exact, or $R_{out} = R_D$ with an unrelated $G_m$ giving a different exact formula.
