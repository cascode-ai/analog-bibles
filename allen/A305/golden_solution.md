# Golden Solution - A305

## Reference answer

Both estimates are valid approximations: $A_v = -\tfrac12g_{m1}\left[r_{ds6}\,\|\,g_{m5}r_{ds5}(r_{ds1}\|r_{ds4})\right] \approx -0.5g_{m1}r_{ds6}$, because the cascode resistance $g_{m5}r_{ds5}(r_{ds1}\|r_{ds4})$ is much larger than $r_{ds6}$.

- Input stage: with M2's gate fixed, $v_{in}$ on M1 moves the common-source node by ≈ $v_{in}/2$ (equal transconductances, tail resistance $r_{ds3}$ large), so M1's drain current changes by $i = g_{m1}v_{in}/2$ (exactly $g_{m1}v_{in}/(2 + 1/(g_mr_{ds3}))$ to first order).
- Folding node (drain of M1, drain of M4, source of M5): low impedance (≈ $1/g_{m5}$), so essentially all of $i$ is taken from the M5 path; M4's current is fixed, hence the current through M5 into the output changes by −i.
- Output node: resistance $R_{out} = r_{ds6}\,\|\,[g_{m5}r_{ds5}(r_{ds1}\|r_{ds4})]$ (M6 current source in parallel with the M5 cascode on top of $r_{ds1}\|r_{ds4}$). Thus $A_v = -iR_{out}/v_{in} = -\tfrac12g_{m1}R_{out}$ (inverting: a rise of $v_{in}$ increases the M1 current, which steals current from M5 and lowers $v_{out}$).
- Upper amplifier: M1 n-channel, M6 n-channel, M5 p-channel: $A_v = -0.5g_{mN}[r_{dsN}\,\|\,g_{mP}r_{dsP}(r_{dsN}\|r_{dsP})] \approx -0.5g_{mN}r_{dsN}$ when $g_{mP}r_{dsP}(r_{dsN}\|r_{dsP}) \gg r_{dsN}$. Example ($g_{mN} = 100\ \mu$S, $r_{dsN} = 2$ MΩ, $g_{mP} = 50\ \mu$S, $r_{dsP} = 1$ MΩ): cascode 33 MΩ ≫ 2 MΩ, $A_v = -94$ vs. the estimate −100 (6% high).
- Lower amplifier: M1 p-channel, M6 p-channel, M5 n-channel: $A_v = -0.5g_{mP}[r_{dsP}\,\|\,g_{mN}r_{dsN}(r_{dsN}\|r_{dsP})] \approx -0.5g_{mP}r_{dsP}$ (same example: cascode 133 MΩ, $A_v = -24.8$ vs −25).
- The factor 0.5 arises because only half of the differential-pair current change is used (single-ended input, no current mirror).

## Grading notes

+2: derives for both amplifiers that M1's signal current is ≈ $g_{m1}v_{in}/2$, that it is folded through the low-impedance cascode source into the output node, and that the output resistance is $r_{ds6}$ in parallel with the (much larger) cascode resistance, giving $A_v \approx -0.5g_{m1}r_{ds6}$; states the condition (cascode resistance ≫ $r_{ds6}$) or quantifies the small error. An equivalent finite-conductance result counts as the parallel cascode term and its condition, e.g. $A_v \approx -\tfrac12g_{m1}/[g_{ds6} + g_{ds4}(g_{ds5} + g_{ds6})/(g_{m5} + g_{ds5})]$ (with $g_{ds4}$, or $g_{ds1} + g_{ds4}$, at the folding node), which reduces to $-\tfrac12g_{m1}r_{ds6}$ when the second term is small. +1: one amplifier fully derived and the other only by analogy, or both with the parallel cascode term omitted without comment. 0: only the final expressions restated with a hand-waving argument. −2 (asserted as fact): gain $-g_{m1}r_{ds6}$ (full current), a noninverting gain, or an output resistance equal to the cascode resistance alone (giving gains of order $(g_mr_{ds})^2$).
