# Golden Solution - R144

## Reference answer

- Input resistance at $X$ (drain loaded by $R_D$): a test source at $X$ gives $R_{in} = \dfrac{R_D + r_O}{1 + (g_m + g_{mb})r_O}$.
- General CG gain with source resistance: $\dfrac{V_{out}}{V_{in}} = \dfrac{[1 + (g_m+g_{mb})r_O]R_D}{r_O + [1 + (g_m+g_{mb})r_O]R_S + R_D}$ (KCL at $X$ and at the drain).
- Matching $R_S = R_{in}$ means $[1 + (g_m+g_{mb})r_O]R_S = R_D + r_O$, so the denominator becomes $2(r_O + R_D)$: $\dfrac{V_{out}}{V_{in}} = \dfrac{[1 + (g_m+g_{mb})r_O]R_D}{2(r_O + R_D)} = \dfrac{1 + (g_m+g_{mb})r_O}{2(1 + r_O/R_D)}$.
- Substituting $1 + (g_m+g_{mb})r_O = (R_D + r_O)/R_S$ gives $\dfrac{V_{out}}{V_{in}} = \dfrac{R_D}{2R_S}$.
- Intuition: with matching, $v_X = V_{in}/2$, the current entering $X$ is $V_{in}/(2R_S)$, and since the gate draws nothing this whole current flows out of the drain into $R_D$: $v_{out} = R_DV_{in}/(2R_S)$.

## Grading notes

+2: both results proved (via $R_{in}$ and the general gain, or via the half-voltage/current argument for the second plus the first by substitution). +1: both results with a minor gap. 0: only one of the two proved. -2 (asserted as fact): $R_{in}$ taken as $1/(g_m + g_{mb})$ and used to claim the exact first result, a different final expression asserted, or an inverting gain.
