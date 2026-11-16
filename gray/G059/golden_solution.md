# Golden Solution - G059

## Reference answer

$R_o = r_o$.

An ideal voltage source holds the emitter at small-signal ground, so $v_e = 0$: the controlled source $g_m v_e$ is inactive and $r_e$ is shorted. A test voltage at the collector sees only $r_o$ (from collector to the grounded emitter), so $R_o = r_o$ (compare $\approx \beta_0 r_o$ for current-source drive).

## Grading notes

+2: $R_o = r_o$ with the reason that the emitter is at ac ground so $g_m v_e = 0$. +1: correct answer with a weak or partly wrong justification. 0: correct reasoning that $v_e = 0$ but a wrong final combination (e.g. $r_o \| r_e$). −2 (asserted as fact): $R_o = \beta_0 r_o$, $R_o = r_o(1 + g_m r_e)$, $R_o = \infty$ or $R_o = r_e$.
