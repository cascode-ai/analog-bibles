Find the differential-mode transconductance $G_m[dm]$ of a source-coupled pair with a current-mirror load with nonzero mismatch (the circuit of [Fig. 1]: input pair $T_1$, $T_2$; p-channel mirror load $T_3$ (diode-connected), $T_4$; tail current source $T_5$; $G_m[dm] = i_{out}/v_{id}$ with the output shorted to small-signal ground, $v_{id} = v_{i1} - v_{i2}$), and show that it is approximately given by
$G_m[dm] \simeq g_{m1-2}\,\dfrac{1 - \left(\dfrac{\Delta g_{m1-2}}{2g_{m1-2}}\right)^2}{1 + \dfrac{\Delta g_{m3-4}}{2g_{m3-4}}}$,
where $\Delta g_{m1-2} = g_{m1} - g_{m2}$, $g_{m1-2} = (g_{m1}+g_{m2})/2$, $\Delta g_{m3-4} = g_{m3} - g_{m4}$ and $g_{m3-4} = (g_{m3}+g_{m4})/2$. Calculate the value of $G_m[dm]$ using the following data:

| | $T_1$ | $T_2$ | $T_3$ | $T_4$ | $T_5$ |
|---|---|---|---|---|---|
| $g_m$ (mA/V) | 1.05 | 0.95 | 1.1 | 0.9 | 2.0 |
| $r_o$ (MΩ) | 0.95 | 1.05 | 1.0 | 1.0 | 0.5 |

Compare your answer with a SPICE simulation. Also, compare your answer to the result that would apply without mismatch. Ignore the body effect.
