# Golden Solution - A152

## Reference answer

$R_{out} \approx \dfrac{1}{g_{ds2} + g_{ds6}g_{ds8}/g_{m6}} = \dfrac{g_{m6}}{g_{m6}g_{ds2} + g_{ds6}g_{ds8}}$ and $\dfrac{v_{out}}{v_{in}} \approx \dfrac{(g_{m1}+g_{m2})\,g_{m6}}{2(g_{m6}g_{ds2} + g_{ds6}g_{ds8})}$ (noninverting; matched input pair and 1:1 mirror, so $(g_{m1}+g_{m2})/2 = g_{m1}$). Since the cascode term is small, $R_{out} \approx r_{ds2}$ and $A_v \approx g_{m1}/g_{ds2}$.

- M7/M5 (diode stack) and M8/M6 form a cascode current mirror. Looking up into M6 the resistance is $\approx g_{m6}r_{ds6}r_{ds8}$, in parallel with $r_{ds2}$ looking down.
- As in the simple mirror, the full $g_{m1}v_{in}$ (half from M1 via the mirror, half from M2) flows into $R_{out}$.
- The looking-down conductance is $g_{ds2}$ only because the current M2's degenerated drain draws ($g_{ds2}/2$) returns through M1 and the mirror ($g_{ds2}/2$ again). For an unmatched pair with a 1:1 mirror, $G_m = 2g_{m1}g_{m2}/(g_{m1}+g_{m2})$ and the M2 term becomes $2g_{m1}g_{ds2}/(g_{m1}+g_{m2})$.

## Grading notes

Credit is split between $R_{out}$ and the gain. +2: $R_{out} = r_{ds2}\,\|\,(g_{m6}r_{ds6}r_{ds8})$ in any equivalent form and gain = $g_{m1}R_{out}$. +1: $R_{out} \approx r_{ds2}$ only, with the gain $g_{m1}/g_{ds2}$ (the cascode term dropped without comment), or one slip; also a correct main result followed by a side limit taken in the wrong direction (e.g. "neglecting $g_{ds2}$", $R_{out} \approx g_{m6}r_{ds6}r_{ds8}$ and gain $\approx g_{m1}g_{m6}/(g_{ds6}g_{ds8})$, although $g_{ds2}$ is the dominant term), which is a minor false claim. A side generalization to an unmatched pair that changes $G_m$ but keeps $g_{ds2}$ unchanged in $R_{out}$ is likewise a minor false claim (+1). 0: one of the two right (e.g. $R_{out}$ right but the gain halved by missing the mirror's doubling); or the simple-load result $R_{out} \approx r_{ds2}\,\|\,r_{ds6}$ (M6 treated as an uncascoded load) given as the main answer, with the correct cascode expression only added as a refinement. −2 (asserted as fact): $R_{out}$ claimed to be a cascode on both sides ($\approx g_mr_{ds}^2$, ignoring that M2 is not cascoded), M6 treated as an uncascoded load ($R_{out} \approx r_{ds2}\,\|\,r_{ds6}$, which roughly halves the gain) as the only result, or M5/M6 read as input devices.
