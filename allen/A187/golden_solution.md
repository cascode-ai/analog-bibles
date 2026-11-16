# Golden Solution - A187

## Reference answer

$\dfrac{v_{out}}{v_{in}} \approx \dfrac{g_{m2}}{2}R_{out} = \dfrac{0.5\,g_{m1}}{\dfrac{g_{ds2}g_{ds4}}{g_{m4}} + \dfrac{g_{ds6}g_{ds8}}{g_{m6}}}$, with $R_{out} = [g_{m4}r_{ds4}r_{ds2}]\,\|\,[g_{m6}r_{ds6}r_{ds8}]$ (non-inverting, $g_{m1} = g_{m2}$).

- For a differential input the common source node is an ac ground, so M2 sees $v_{gs2} = -v_{in}/2$ and its drain current changes by $-g_{m2}v_{in}/2$.
- That current flows through the cascode M4 to the output node. The output sees the n-channel cascode (M4 over M2, $\approx g_{m4}r_{ds4}r_{ds2}$) in parallel with the p-channel cascode current source (M6 over M8, $\approx g_{m6}r_{ds6}r_{ds8}$), because M7–M8 are plain current sources (no mirror), so the left half does not contribute to the output.
- Hence $v_{out} = +\frac{g_{m2}}{2}v_{in}R_{out}$: only half of the differential transconductance is used, i.e. half the gain of the same stage with a current-mirror load.

## Grading notes

+2: gain $= \frac{g_m}{2}R_{out}$ with $R_{out}$ the parallel combination of the two cascode resistances (or the equivalent conductance form), positive sign for the stated polarity. +1: correct magnitude with the sign wrong or unstated, or $R_{out}$ written with $r_{ds1}$ in place of $r_{ds2}$ (same value). 0: structure right but factor 1/2 missing ($g_mR_{out}$) with an otherwise sound argument. −2 (asserted as fact): load treated as a current mirror (doubling the gain) or as a simple $r_{ds}$, gain of order $g_mr_{ds}$, or the common source node taken as a high-resistance node for differential signals.
