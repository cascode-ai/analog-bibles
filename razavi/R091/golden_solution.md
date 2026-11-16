# Golden Solution - R091

## Reference answer

A source-follower characteristic: zero up to 0.7 V, then rising with slope below unity; if $R_D$ is large enough, $M_1$ enters triode and $V_{out}$ flattens toward $V_{DD}R_S/(R_S+R_D)$.

- $V_{in} \le 0.7$ V: $V_{out} = 0$.
- Saturation: $V_{out} = I_DR_S$, $V_{in} = V_{out} + V_{TH}(V_{out}) + \sqrt{2I_D/\beta}$; slope $g_mR_S/[1 + (g_m+g_{mb})R_S]$, rising from 0 toward ≈ $1/(1+\eta)$ (≈ 0.8–0.85) for $g_mR_S \gg 1$. $R_D$ does not affect this region (λ = 0).
- $M_1$ enters triode when its drain $V_{DD} - I_DR_D$ falls below $V_{in} - V_{TH}(V_{out})$, i.e. $V_{DD} - (R_D/R_S)V_{out} < V_{in} - V_{TH}$. Beyond that the slope decreases and $V_{out}$ levels off toward $V_{DD}R_S/(R_S+R_D)$ ($M_1$ acting as a small resistance). This happens within the 0–3 V range only for a large enough $R_D$ (and β); otherwise the follower stays saturated up to $V_{in} = V_{DD}$.
- Transition points: turn-on at 0.7 V, triode entry as above, ceiling $V_{DD}R_S/(R_D+R_S)$.

## Grading notes

+2: zero below 0.7 V; a follower region with slope < 1 (body effect; the exact saturation equation with $V_{TH}(V_{out})$ is enough); triode entry when the drain voltage $V_{DD} - I_DR_D$ drops to $V_{in} - V_{TH}$, which happens within 0–3 V only if $R_D$ (and β) is large enough; and, once in triode, $V_{out}$ flattening toward (bounded by) $V_{DD}R_S/(R_D+R_S)$. +1: follower part right, the effect of $R_D$ mentioned only vaguely; or every region and the triode-entry condition derived exactly but the flattening toward the ceiling $V_{DD}R_S/(R_D+R_S)$ never mentioned. 0: follower part right but $R_D$ ignored and a slope ≈ 0.85 up to 3 V asserted for any $R_D$. -2 (asserted as fact): inverting characteristic, slope above 1, or nonzero output below the threshold.
