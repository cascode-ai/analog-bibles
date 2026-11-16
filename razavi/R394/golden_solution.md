# Golden Solution - R394

## Reference answer

$T = \dfrac{g_{m1}g_{m2}R_{D1}R_{D2}R_S}{R_{D2} + R_F + R_S + g_{m1}R_S(R_{D2} + R_F)} = g_{m2}R_{D1}\left[R_{D2}\,\Big\|\,\left(R_F + R_S\|\tfrac{1}{g_{m1}}\right)\right]\dfrac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}$,
whereas $g_{21}A_{v,open} = g_{m2}R_{D1}[R_{D2}\|(R_F + R_S)]\dfrac{g_{m1}R_S}{R_F + R_S + g_{m1}R_FR_S}$. The input-side factors are identical; the only difference is the loading of the output: the true loop sees $R_F$ in series with $R_S\|(1/g_{m1})$, the two-port estimate sees $R_F + R_S$. So $T < g_{21}A_{v,open}$; e.g. with all resistors 2 kΩ, $g_{m1}$ = 4.5 mS, $g_{m2}$ = 2.8 mS: T ≈ 2.4 versus 3.0.

Why: breaking the loop at a gate (no current flows into it) gives the exact return ratio. The two-port method treats the feedback network as unilateral: $g_{11}$ (the load it presents to the output) is computed with its output port open, i.e. assuming no current flows into the source of $M_1$, and the reverse transmission $g_{12}$ of the network is neglected. In reality the network's output port is terminated by the source of $M_1$ (≈ $1/g_{m1}$ in parallel with $R_S$), so it draws more current from the output and the signal at the source of $M_1$ also propagates back through $R_F$. The forward amplifier itself has no internal feedback here (λ = 0, no $C_{GD}$), so the discrepancy comes entirely from this bilateral feedback network.

Derivation of T: test voltage $v_t$ at the gate of $M_2$: $M_2$ drives $-g_{m2}v_t$ into node Y, loaded by $R_{D2}$ and by $R_F$ in series with ($R_S \| 1/g_{m1}$) (source of $M_1$ with gate grounded); the source voltage is the $R_F$/($R_S\|1/g_{m1}$) divider fraction of $v_Y$; $M_1$ then gives $v_X = g_{m1}R_{D1}v_S$; $T = -v_X/v_t$.

## Grading notes

+2: a loop-gain expression equivalent to the reference (positive return ratio, i.e. negative feedback) and an explanation identifying the approximate loading of the two-port method: the feedback network's output side assumed open (no current into $M_1$'s source) / its reverse transmission $g_{12}$ neglected, so the output loading $R_F + R_S$ replaces the true $R_F + R_S\|(1/g_{m1})$; breaking at a gate is exact. +1: T correct, explanation vaguely about "loading" or "bilateral network" without saying what differs. 0: correct explanation with a slip in T, or T correct with a wrong explanation offered tentatively; also a wrong polarity remark (feedback called positive) alongside a correct $|T|$ and a correct explanation of the loading difference. -2 (asserted as fact): the two results claimed identical, the difference attributed to channel-length modulation or body effect (both are zero here), or T with the wrong sign (positive feedback) together with a wrong or missing explanation of the difference.
