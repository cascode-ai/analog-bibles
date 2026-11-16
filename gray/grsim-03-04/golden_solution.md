# Golden Solution - grsim-03-04

## Reference answer

Edge of triode: $V_i \approx 1.281$ V, $V_o \approx 0.681$ V, $A_v \approx -6.81$. Unity gain (active region): $V_i = 0.70$ V, $V_o = 2.95$ V. Maximum gain magnitude 6.81, reached at the edge of the triode region.

- Active region: $V_o = V_{DD} - \frac{k'}{2}\frac{W}{L}R_D(V_i - V_t)^2 = 3 - 5\ \mathrm{V^{-1}}\,V_{ov}^2$; small-signal gain $A_v = -g_m R_D = -10\ \mathrm{V^{-1}}\,V_{ov}$ (with $V_{ov} = V_i - V_t$).
- Edge of triode: $V_o = V_{ov}$ → $5V_{ov}^2 + V_{ov} - 3 = 0$ → $V_{ov} = 0.681$ V; $V_i = 1.281$ V, $V_o = 0.681$ V, $A_v = -6.81$.
- Unity gain: $10 V_{ov} = 1$ → $V_{ov} = 0.1$ V, $V_i = 0.70$ V, $V_o = 3 - 5(0.01) = 2.95$ V.
- $|A_v|$ grows linearly with $V_{ov}$ in the active region; in the triode region $dV_o/dV_i = -R_D k'(W/L)V_o/[1 + R_D k'(W/L)(V_{ov} - V_o)]$ decreases, so the maximum $|A_v| = 6.81$ occurs at the triode edge.
- The expected SPICE result: the simulated $V_o(V_i)$ curve and its derivative reproduce these numbers with a level-1 model having the stated parameters.

## Grading notes

Hand results: +2 requires all of $V_i \approx 1.28$ V, $V_o \approx 0.68$ V, $A_v \approx -6.8$ at the triode edge; $V_i = 0.70$ V, $V_o = 2.95$ V at unity gain; maximum $|A_v| \approx 6.8$ (within ±2%). A correct simulation shows a flat $V_o = 3$ V below $V_i = 0.6$ V, a parabolic fall, slope −1 at $V_i = 0.70$ V, the steepest slope ≈ −6.8 at $V_i \approx 1.28$ V ($V_o \approx 0.68$ V), and a flattening triode tail (with $\lambda = 0$ and no LD, agreement within ~1%). −2 (asserted as fact): the maximum gain placed elsewhere than at the triode edge, unity gain placed in the triode region, or $g_m$ taken from a wrong formula.
