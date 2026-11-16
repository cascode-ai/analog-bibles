# Golden Solution - R272

## Reference answer

Neglecting channel-length modulation: $Z_{in} = -\dfrac{g_{m3} + sC_1}{g_{m1}g_{m2}} = -\dfrac{g_{m3}}{g_{m1}g_{m2}} - s\dfrac{C_1}{g_{m1}g_{m2}}$, i.e., a negative resistance $-g_{m3}/(g_{m1}g_{m2})$ (= $-1/g_{m1}$ if $M_2$ and $M_3$ are identical) in series with a negative inductance $L = -C_1/(g_{m1}g_{m2})$.

- A test voltage $v_{in}$ at the input drives $M_1$'s gate; its current $g_{m1}v_{in}$ is drawn from node Y, loaded by the diode $M_3$ and $C_1$: $v_Y = -g_{m1}v_{in}/(g_{m3} + sC_1)$.
- $M_2$ (gate at Y) pushes the current $-g_{m2}v_Y$ into the input node. Since $I_1$ is ideal, the input current is $i_{in} = g_{m2}v_Y = -\dfrac{g_{m1}g_{m2}}{g_{m3}+sC_1}v_{in}$: a positive-feedback loop that makes the admittance negative.
- With $r_O$ included: $Z_{in} = r_{O2}\,\Big\|\,\Big[-\dfrac{g_{m3} + 1/r_{O1} + 1/r_{O3} + sC_1}{g_{m1}g_{m2}}\Big]$; the inductive term is the same.

## Grading notes

+2: $Y_{in} = -g_{m1}g_{m2}/(g_{m3}+sC_1)$ or equivalent $Z_{in}$, with the inductance identified as $-C_1/(g_{m1}g_{m2})$ in series with a negative resistance ≈ $-g_{m3}/(g_{m1}g_{m2})$. Including $r_O$ terms correctly is fine. +1: correct $Z_{in}$ but the inductive component not explicitly identified, or a factor such as $g_{m3}$ vs $g_{m2}$ swapped in the resistive term only. 0: correct loop analysis with a sign error that makes the inductance positive, flagged as uncertain. -2 (asserted as fact): a positive inductance $C_1/(g_{m1}g_{m2})$ claimed as the answer, $Z_{in}$ purely capacitive, or $Z_{in} = 1/g_{m1}$ ignoring the feedback.
