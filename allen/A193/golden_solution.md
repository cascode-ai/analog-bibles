# Golden Solution - A193

## Reference answer

$R_{in} = \dfrac{1}{g_{ds1} + \dfrac{(g_{m1}+g_{ds4})(g_{m3}+g_{ds3})}{g_{ds3}+g_{ds4}}} \approx \dfrac{g_{ds3}+g_{ds4}}{g_{m1}g_{m3}} = \dfrac{1}{g_{m1}g_{m3}(r_{ds3}\|r_{ds4})}$.

- Let $v_{in}$ be the input-node voltage and $v_g$ the gate voltage of M1/M2. M3 (gate at ac ground, source at $v_{in}$) conducts from source to drain $i_3 = g_{m3}v_{in} + g_{ds3}(v_{in}-v_g)$.
- Gate node: $i_3$ can only leave through $r_{ds4}$: $i_3 = g_{ds4}v_g$ → $v_g = v_{in}\dfrac{g_{m3}+g_{ds3}}{g_{ds3}+g_{ds4}}$ (a large voltage gain, ≈ $g_{m3}(r_{ds3}\|r_{ds4})$).
- Input node: $i_{in} = g_{m1}v_g + g_{ds1}v_{in} + i_3 = g_{ds1}v_{in} + (g_{m1}+g_{ds4})v_g$, which gives the expression above.
- The shunt feedback loop (M3 senses the input voltage and drives M1's gate) lowers the input resistance by about $g_{m3}(r_{ds3}\|r_{ds4})$ below the simple mirror's $1/g_{m1}$. For an ideal sink ($r_{ds4} \to \infty$): $R_{in} = 1/(g_{m1}+g_{ds1}+g_{m1}g_{m3}r_{ds3}) \approx 1/(g_{m1}g_{m3}r_{ds3})$.

## Grading notes

In the figure M1 is not diode-connected: its drain is the input node (source of M3) and its gate is the common gate node (drain of M3); "diode node" in the question only names the input node. +2: a correct exact expression equivalent to the reference (with or without the high-gain approximation $(g_{ds3}+g_{ds4})/(g_{m1}g_{m3}) = 1/[g_{m1}g_{m3}(r_{ds3}\|r_{ds4})]$). A further simplification that drops $r_{ds3}$ (e.g. $1/[g_{m3}(1+g_{m1}r_{ds4})]$) or $r_{ds4}$ is acceptable after a correct exact result when its condition is stated ($r_{ds3} \gg r_{ds4}$, $g_{ds3}$ neglected, ideal sink); it does not lower the score. +1: the correct approximate result $(g_{ds3}+g_{ds4})/(g_{m1}g_{m3})$ with a slightly incomplete exact form; or the exact form with an algebra slip that does not change the approximation. 0: correct circuit equations not solved; or, as the only result, one that keeps one of $r_{ds3}$, $r_{ds4}$ and silently drops the other (the ideal-sink result $1/(g_{m1}g_{m3}r_{ds3})$, or $1/(g_{m1}g_{m3}r_{ds4})$), since nothing given makes either negligible and the general result is set by $r_{ds3}\|r_{ds4}$; or an answer that explicitly points out the "diode node" wording conflicts with the figure and analyses only the literal diode-connected M1 (then M3's source and drain are shorted and $R_{in} = 1/(g_{m1}+g_{ds1}+g_{ds4})$). −2 (asserted as fact): $R_{in} \approx 1/g_{m1}$ (feedback missed) without noting the conflict, M3 treated as a source follower from the input to the gate node with gain ≈ 1 (e.g. $i_3 = g_{m3}(v_{in}-v_g)$), or a result increasing with $g_m$.
