# Golden Solution - A348

## Reference answer

$LG \approx -(g_mr_{ds})^3/4$ (negative feedback).

- Sensing: the two resistors put the output common mode $v_c$ on the gate of M13; M14 is at $V_{CMREF}$. M13–M14 form a p-channel pair (tail M12) with an n-channel mirror load (M15 diode on the M13 side, M16 on the M14 side); its single-ended output at the M14/M16 drains drives the gates of M10 and M11.
- CMFB amplifier: output current $g_mv_c$ (mirror load) into $r_{ds14}\|r_{ds16} = r_{ds}/2$: gain $+g_mr_{ds}/2$ (CM up → M13 current down → M16 sinks less, M14 sources more → node rises).
- M10, M11 (bottom sinks of the n-channel cascodes) then sink $g_m(g_mr_{ds}/2)v_c$ more from each output.
- Output CM resistance: down $g_{m8}r_{ds8}r_{ds10} = g_mr_{ds}^2$; up M6 over the folding node, which for common-mode signals sees only $r_{ds4}$ (the input pair's total current is fixed): $g_mr_{ds}^2$. Parallel: $g_mr_{ds}^2/2$.
- $LG = -(g_mr_{ds}/2)\cdot g_m\cdot(g_mr_{ds}^2/2) = -(g_mr_{ds})^3/4$ (nodal check: −0.25). Two high-impedance nodes (the M10/M11 gate node and the outputs) lie in the loop, hence the need for the dashed Miller capacitors.

## Grading notes

+2: $|LG| \approx (g_mr_{ds})^3/4$ with the path sensing → mirror-loaded pair (gain $g_mr_{ds}/2$) → M10/M11 → cascode output resistance $g_mr_{ds}^2/2$, negative sign or negative feedback stated. +1: $(g_mr_{ds})^3/6$ obtained by using the differential-mode folding-node resistance $r_{ds}/2$ (output $g_mr_{ds}^2/3$), or $(g_mr_{ds})^3/4$ without the sign; otherwise sound. 0: right structure with a factor-of-2 error in the CMFB amplifier gain, or only the cubic order stated. −2 (asserted as fact): a loop gain of order $(g_mr_{ds})^2$ or $g_mr_{ds}$ (a high-impedance node missed), or positive feedback claimed.
