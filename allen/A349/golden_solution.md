# Golden Solution - A349

## Reference answer

$LG \approx -(g_mr_{ds})^2/6$ (negative feedback).

- Sensing: the resistors put the output common mode $v_c$ on the gate of M13; M14 is at $V_{CMREF}$; the M13 drain goes to ground, the M14 drain feeds the diode M15.
- A CM rise reduces M13's current and increases M14's by $g_mv_c/2$ (tail M12 fixed); M15 mirrors this to M16 and M17, which, through the cascodes M18 and M19, sink an extra $g_mv_c/2$ directly from each output.
- Output CM resistance: three cascode branches in parallel — the p-channel M4–M6 (M5–M7) branch (≈ $g_mr_{ds}^2$, the input pair not loading the folding node for CM), the n-channel M10–M8 (M11–M9) branch ($g_mr_{ds}^2$), and the CMFB branch M16–M18 (M17–M19) ($g_mr_{ds}^2$): $g_mr_{ds}^2/3$.
- $LG = -(g_m/2)(g_mr_{ds}^2/3) = -(g_mr_{ds})^2/6$ (nodal check: −0.165). The only high-impedance node in the loop is the output, so the load capacitors compensate it — much better frequency behaviour than the circuit whose CMFB drives the gates of the bottom sinks.

## Grading notes

+2: $|LG| \approx (g_mr_{ds})^2/6$ with the half-current of the M13–M14 pair (M13's half is dumped to ground), injection at the outputs through M16–M19, and an output resistance including the CMFB cascodes ($g_mr_{ds}^2/3$); negative feedback. +1: $(g_mr_{ds})^2/8$ from using the differential-mode folding-node resistance, or $(g_mr_{ds})^2/4$ from omitting the CMFB cascode branch; otherwise sound. 0: correct injection path (M14 → M15 → M16/M17 → M18/M19 into the outputs) and cascode output resistance, but the pair current not halved ($(g_mr_{ds})^2/3$), or not halved and the CMFB cascode branch also omitted ($(g_mr_{ds})^2/2$); or the right order with no derivation. −2 (asserted as fact): a loop gain of order $(g_mr_{ds})^3$ (as if a high-impedance gate node were in the loop) or $g_mr_{ds}$, or positive feedback; also a $(g_mr_{ds})^2$-order result obtained from an explicitly wrong model (e.g., the CMFB pair treated as a $g_mr_{ds}$ voltage-gain stage and the output stage as another $g_mr_{ds}$, or a CM sensing factor of 1/2), which does not qualify for 0.
