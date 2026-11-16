# Golden Solution - A237

## Reference answer

Without modification $R_{out} = r_{ds3}\|r_{ds4} = r_{ds}/2$.

Smallest result with one transistor — shunt feedback around the second inverter with a common-gate transistor M5: source of M5 at $v_{out}$, gate at a battery (ac ground), drain at the input X of the second inverter, with an ideal current source from $V_{DD}$ into X supplying M5's bias (the battery sets the output dc level).
- A rise of $v_{out}$ reduces M5's current by $g_mv_{out}$; that current change appears at X, whose resistance is $r_{ds1}\|r_{ds2} = r_{ds}/2$, so $v_X = (g_mr_{ds}/2)v_{out}$; the second inverter (both devices active, total transconductance $2g_m$) then pulls the output down by $2g_mv_X = g_m^2r_{ds}v_{out}$: negative feedback.
- Test-source current: $i_x = v_x(2/r_{ds} + g_m + g_m^2r_{ds})$ → $R_{out} = \dfrac{1}{g_m^2r_{ds}+g_m+2/r_{ds}} \approx \dfrac{1}{g_m^2r_{ds}}$, i.e. about $g_mr_{ds}$ times smaller than $1/g_m$. (The overall voltage gain drops to about +2 because the feedback also acts on the signal.)

Other valid one-transistor solutions (larger $R_{out}$):
- Source-follower buffer M5 (gate at the second inverter's output, ideal current-source load, output at its source): $R_{out} \approx 1/(g_m+g_{mbs}) \approx 1/g_m$, and the voltage gain is kept.
- M5 biased as a resistor (gate at a battery, in nonsaturation) from $v_{out}$ to X: shunt feedback with feedback factor near 1 gives $R_{out} \approx 1/(2g_m)$.

## Grading notes

Open design question: accept any single-transistor modification with correct (negative) feedback polarity or buffering and a correct estimate. +2: a valid circuit with a correct estimate of order $1/g_m$ or smaller (≈ $1/(g_m^2r_{ds})$ for the common-gate feedback, ≈ $1/(2g_m)$ for resistive feedback, ≈ $1/g_m$ for a follower buffer), with bias handled by the allowed ideal sources/batteries. +1: valid circuit with a wrong-by-factor-2 estimate, or a correct estimate with incomplete biasing. 0: only the unmodified $r_{ds}/2$ found, or a valid idea without an estimate. −2 (asserted as fact): a feedback connection with positive feedback (e.g. a common-source transistor from the output back to X, or feedback to the first inverter's input from the non-inverted output) presented as lowering $R_{out}$, or an estimate that increases $R_{out}$.
