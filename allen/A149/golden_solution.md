# Golden Solution - A149

## Reference answer

$R_{out} \approx \dfrac{1}{g_{ds2} + g_{m8} + g_{ds8}} \approx \dfrac{1}{g_{m8}}$ and $\dfrac{v_{out}}{v_{in}} \approx \dfrac{0.5\,g_{m2}}{g_{ds2} + g_{m8} + g_{ds8}} \approx \dfrac{g_{m2}}{2g_{m8}}$ (noninverting).

- M7 and M8 are separate diode-connected loads (no mirror). The output is at the drain of M2, loaded by the diode M8 ($1/g_{m8}$) in parallel with $r_{ds8}$ and $r_{ds2}$.
- With the source node at ac ground, M2's gate sees $-v_{in}/2$, so its drain current changes by $-g_{m2}v_{in}/2$. Less current is pulled from the output, which rises by $(g_{m2}v_{in}/2)R_{out}$. M1's current goes only into M7 and does not reach the output.
- Equivalently $\dfrac{g_{m1}g_{m2}}{(g_{m1}+g_{m2})(g_{ds2}+g_{m8}+g_{ds8})}$ for an unmatched pair (ideal tail, $i_{d1} = -i_{d2}$); this reduces to the above for $g_{m1} = g_{m2}$.
- Refinement: in a single-ended test at the output (ideal tail, matched halves, $G = g_{m8}+g_{ds8}$), the common source node is not at ac ground and M2 contributes only about $g_{ds2}/2$: exactly $R_{out} = (2G+g_{ds2})/[2G(G+g_{ds2})] \approx 1/(G + g_{ds2}/2)$. The differential gain is still exactly $g_{m2}/[2(G+g_{ds2})]$ (symmetric drive keeps the source node at ac ground). Both corrections are second order; $R_{out} \approx 1/g_{m8}$ and $A_v \approx g_{m2}/(2g_{m8})$ are unchanged.

## Grading notes

Credit is split between $R_{out}$ and the gain. +2: $R_{out} \approx 1/(g_{m8} + g_{ds2} + g_{ds8})$ (or $1/g_{m8}$) and gain ≈ $g_{m2}/(2g_{m8})$ (or with the $g_{ds}$ terms), magnitude about 1/2 of a single-ended diode-load stage. Either sign is acceptable if the input polarity is stated. The $g_{ds2}/2$ refinement of $R_{out}$ (e.g. $1/(g_{m8}+g_{ds8}+g_{ds2}/2)$), the unmatched-pair form $g_{m1}g_{m2}/[(g_{m1}+g_{m2})g_{m8}]$, and M7-indexed terms substituted under a stated matching assumption are all equally correct. +1: one of the two right and the other with a factor-of-2 error. 0: one right, the other wrong. −2 (asserted as fact): a current-mirror action assumed (gain $g_m/g_{m8}$ without the 1/2), $R_{out} = 1/(g_{ds2} + g_{ds8})$ (diodes ignored), or the output taken at the M1/M7 drain (gain built from M1's current into M7's load).
