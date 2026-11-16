# Golden Solution - A151

## Reference answer

$R_{out} \approx \dfrac{1}{g_{ds2} + g_{ds8}}$ and $\dfrac{v_{out}}{v_{in}} \approx \dfrac{g_{m1} + g_{m2}}{2(g_{ds2} + g_{ds8})} = \dfrac{g_{m1}}{g_{ds2} + g_{ds8}}$ (noninverting, $g_{m1} = g_{m2}$).

- M7 is diode-connected and M8 mirrors it: a current-mirror load. The output at the M2/M8 drains sees $r_{ds2}\,\|\,r_{ds8}$.
- M1's current change $+g_{m1}v_{in}/2$ flows into M7 and is mirrored by M8 into the output. M2's current falls by $g_{m2}v_{in}/2$, which also raises the output. The total $(g_{m1}+g_{m2})v_{in}/2 = g_{m1}v_{in}$ flows into $R_{out}$.

## Grading notes

Credit is split between $R_{out}$ and the gain. +2: $R_{out} \approx 1/(g_{ds2} + g_{ds8})$ and gain ≈ $g_{m1}/(g_{ds2} + g_{ds8})$ (or $(g_{m1}+g_{m2})/[2(g_{ds2}+g_{ds8})]$). +1: one right and the other with a factor-of-2 error. 0: one right, the other wrong. −2 (asserted as fact): gain with a factor 1/2 claimed (mirror ignored), $R_{out} = 1/g_{m8}$, or M7 read as a current source with a fixed bias.
