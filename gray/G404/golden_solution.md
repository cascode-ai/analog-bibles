# Golden Solution - G404

## Reference answer

Triode: $g_m = k'(W/L)V_{ds}$ (equivalently $g_m = I_D/(V_{ov} - V_{ds}/2)$ with $V_{ov} = V_{gs} - V_t$). The active-region $g_m$ is larger at the same current.

- Active region at the same $I_D$: $g_{m,\text{sat}} = \sqrt{2k'(W/L)I_D}$.
- Using $I_D = k'(W/L)(V_{ov} - V_{ds}/2)V_{ds}$ in triode:
  $\dfrac{g_{m,\text{triode}}}{g_{m,\text{sat}}} = \dfrac{k'(W/L)V_{ds}}{\sqrt{2[k'(W/L)]^2(V_{ov} - V_{ds}/2)V_{ds}}} = \sqrt{\dfrac{V_{ds}}{2V_{ov} - V_{ds}}}$.
- In triode $V_{ds} < V_{ov}$, so $V_{ds} < 2V_{ov} - V_{ds}$ and the ratio is below 1. It equals 1 only at the edge of saturation ($V_{ds} = V_{ov}$) and goes to zero for small $V_{ds}$. So the triode device has lower $g_m$, which is why CMFB schemes that sense with triode transistors have lower loop gain and bandwidth.

## Grading notes

+2: $g_m = k'(W/L)V_{ds}$ and a correct comparison at equal $I_D$ showing the saturation $g_m$ is larger, e.g. via the ratio $\sqrt{V_{ds}/(2V_{ov} - V_{ds})} < 1$ or an equivalent argument. +1: right formula and right conclusion with an incomplete comparison (e.g. comparing at the same $V_{gs}$ only, with the conclusion stated for equal current without proof). 0: formula right, comparison missing or wrong in a hedged way. −2 (asserted as fact): $g_m = k'(W/L)(V_{gs} - V_t)$ for triode, or the claim that the triode $g_m$ is larger.
