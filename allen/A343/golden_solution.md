# Golden Solution - A343

## Reference answer

$A_{vd} \approx (g_mr_{ds})^2$; differential output resistance $\approx g_mr_{ds}^2$ (each output $g_mr_{ds}^2/2$).

- Input stage: $v_{id}$ divides equally across the gate–source of M1 and the source–gate of M4 (and of M2 and M3), so $i_1 = g_mv_{id}/2$ flows in M1 and M4 and $i_2 = -g_mv_{id}/2$ in M2 and M3.
- Steering: $i_1$ is mirrored by M7 → M9 (sourcing into $v_{o1}$) and by M6 → M12 (sinking from $v_{o2}$); $i_2$ by M8 → M10 (sourcing into $v_{o2}$) and by M5 → M11 (sinking from $v_{o1}$). Net into $v_{o1}$: $i_1 - i_2 = g_mv_{id}$; into $v_{o2}$: $-g_mv_{id}$.
- Output resistance per side: cascodes M13 over M9 and M15 over M11: $g_mr_{ds}^2\|g_mr_{ds}^2 = g_mr_{ds}^2/2$; between outputs $g_mr_{ds}^2$.
- $v_{o1} = g_mv_{id}\cdot g_mr_{ds}^2/2 = (g_mr_{ds})^2v_{id}/2$; $A_{vd} = (v_{o1} - v_{o2})/v_{id} = (g_mr_{ds})^2$.
- These are the leading-order results for $g_mr_{ds} \gg 1$ (low frequency, no body effect). Keeping lower-order terms, each cascode branch is $2r_{ds} + g_mr_{ds}^2$, so $R_{od} = r_{ds}(2 + g_mr_{ds})$; the finite gain of the level shifters (M17–M22) and the diode loads lower the gain slightly below $(g_mr_{ds})^2$ at finite $g_mr_{ds}$.

## Grading notes

+2: gain ≈ $(g_mr_{ds})^2$ differential (or $(g_mr_{ds})^2/2$ per output, labelled) and output resistance ≈ $g_mr_{ds}^2$ differential ($g_mr_{ds}^2/2$ per output), with both mirrored currents combining at each output (M9 from M7 and M11 from M5 at $v_{o1}$; M10 from M8 and M12 from M6 at $v_{o2}$). Exact forms with lower-order terms (e.g., $R_{od} = r_{ds}(2 + g_mr_{ds})$) are fine when the leading term is right. +1: both right with unclear labelling; or both final results right but reached through a wrong mechanism (e.g., the gates of M11/M12 treated as a dc bias line while the input stage is credited with $g_{mN} + g_{mP}$ so that each output still gets $g_mv_{id}$). 0: one quantity right; or only one of the two mirror paths counted (gain halved) with otherwise correct reasoning. −2 (asserted as fact): output resistance of order $r_{ds}$ (cascodes ignored), input currents taken as $g_mv_{id}$ per device with the cross-coupling misread, or the two paths claimed to cancel.
