# Golden Solution - R209

## Reference answer

$V_{out} = -(R_{D1} + R_{D2})\,\dfrac{\dfrac{g_{m1}}{g_{m1}+g_{mb1}}V_{in1} - \dfrac{g_{m2}}{g_{m2}+g_{mb2}}V_{in2}}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1}+g_{mb1}} + \dfrac{1}{g_{m2}+g_{mb2}}}$.

With equal body-effect coefficients ($g_{mb}/g_m = \eta$ on both sides) this depends only on $V_{in1} - V_{in2}$:
$\dfrac{V_{out}}{V_{in1} - V_{in2}} = -\dfrac{R_{D1} + R_{D2}}{(1+\eta)(R_{S1} + R_{S2}) + 1/g_{m1} + 1/g_{m2}}$.
- Small-signal currents $i_1$, $i_2$ flow down through $M_1$, $M_2$; the ideal tail forces $i_1 + i_2 = 0$.
- Source voltages: $v_{S1} = v_P + i_1R_{S1}$, $v_{S2} = v_P + i_2R_{S2}$; with the bulks grounded, $i_1 = g_{m1}(v_{in1} - v_{S1}) - g_{mb1}v_{S1}$ and likewise for $M_2$.
- Eliminating $v_P$: $i_1\left[R_{S1} + R_{S2} + \frac{1}{g_{m1}+g_{mb1}} + \frac{1}{g_{m2}+g_{mb2}}\right] = \frac{g_{m1}v_{in1}}{g_{m1}+g_{mb1}} - \frac{g_{m2}v_{in2}}{g_{m2}+g_{mb2}}$.
- Outputs: $v_{D1} = -R_{D1}i_1$ and $v_{D2} = -R_{D2}i_2 = +R_{D2}i_1$, so $v_{out} = -(R_{D1} + R_{D2})i_1$.
- If $g_{m1}/(g_{m1}+g_{mb1}) \ne g_{m2}/(g_{m2}+g_{mb2})$ (different source voltages), a common-mode input also produces some output, so the ratio $V_{out}/(V_{in1} - V_{in2})$ is exact only for the equal-η case or for a purely differential drive.

## Grading notes

+2: the general superposition result or the equal-η form, with $(R_{D1}+R_{D2})$ in the numerator and $R_{S1} + R_{S2} + 1/(g_{m1}+g_{mb1}) + 1/(g_{m2}+g_{mb2})$ (or the equivalent $(1+\eta)(R_{S1}+R_{S2}) + 1/g_{m1} + 1/g_{m2}$) in the denominator, including the factors $g_m/(g_m+g_{mb})$. +1: body effect left out ($-(R_{D1}+R_{D2})/(R_{S1}+R_{S2}+1/g_{m1}+1/g_{m2})$) with the rest right, or a sign convention slip. 0: correct equations with an algebra error. -2 (asserted as fact): only one load resistor in the numerator, the tail treated as ac ground (each side a separate degenerated CS stage), or $g_{mb}$ entering with the wrong sign (increasing the gain).
