# Golden Solution - R664

## Reference answer

The oxide becomes safer, since its field drops by α. In exchange the device loses the benefit of a larger $C_{ox}$: drive current and transconductance fall more than in ideal scaling, and the gate's control over the channel weakens.
- Oxide field: $E_{ox} \approx V_{GS}/t_{ox}$ falls by α (ideal scaling keeps it constant). Breakdown is therefore no concern; the oxide is simply thicker than it needs to be.
- $C_{ox} = \epsilon_{ox}/t_{ox}$ stays constant instead of rising by α. With $W/L$ unchanged and the overdrive divided by α (assuming $V_{TH}$ can still be brought down by α), $I_D = \tfrac12\mu C_{ox}(W/L)(V_{GS}-V_{TH})^2$ drops by α² instead of α. Likewise $g_m = \mu C_{ox}(W/L)(V_{GS}-V_{TH})$ drops by α instead of staying constant, so, e.g., a common-gate input impedance $1/g_m$ rises by α.
- Speed: the gate capacitance $WLC_{ox}$ falls by α², but junction and wiring capacitances fall only by α. The delay $CV_{DD}/I$ of nodes dominated by those capacitances therefore stops improving (≈ constant instead of falling by α); only gate-loaded nodes still speed up by α.
- Threshold voltage: in $V_{TH} = \phi_{MS} + 2\phi_F + Q_{dep}/C_{ox}$, $Q_{dep} = \sqrt{2q\epsilon_{si}N_{sub}\cdot 2\phi_F}$ grows by ≈ √α with the α-times-higher doping, and $C_{ox}$ no longer rises. The depletion term therefore grows instead of shrinking, so $V_{TH}$ cannot be scaled down through the doping; it tends to rise and needs separate threshold adjustment. The body-effect coefficient $\gamma = \sqrt{2q\epsilon_{si}N_{sub}}/C_{ox}$ grows by √α (instead of falling by √α).
- Gate control and short-channel effects: $C_d/C_{ox}$ rises (higher doping, same $C_{ox}$), so $\zeta = 1 + C_d/C_{ox}$ and the subthreshold slope $S = 2.3\zeta kT/q$ get worse. The channel length shrinks but $t_{ox}$ does not, so the drain gains influence over the channel potential relative to the gate: $V_{TH}$ roll-off, DIBL and punch-through grow and the output resistance degrades. This is why $t_{ox}$ has to scale with L, and why oxide breakdown, rather than convenience, sets how thin it can be made.

## Grading notes

Three points: (1) the oxide field falls by α, so breakdown is not a problem; (2) $C_{ox}$ does not increase, so the drive current falls by ≈ α² and $g_m$ by ≈ α (instead of α and 1), or an equivalent statement that the current/transconductance benefit of scaling is lost (the statement must give the direction: drive current and/or $g_m$ smaller than with ideal scaling, or the delay/current benefit lost; saying only that the current or charge scaling "is not obtained" or "must be re-evaluated" does not earn this point); (3) at least one consequence of weaker gate control: the $Q_{dep}/C_{ox}$ part of $V_{TH}$ no longer scales, γ grows, the subthreshold slope worsens, or short-channel effects (DIBL, $V_{TH}$ roll-off) get worse.
- +2: all three points.
- +1: two of the three points, or all three with a wrong scaling factor in (2).
- 0: only one point, e.g., only "the device becomes slower/weaker".
- -2 (asserted as fact): the oxide field claimed to increase or the oxide to break down in this scenario; $C_{ox}$ claimed to increase; or current/$g_m$ claimed to be better than with ideal scaling.
