# Detailed solution - G262

Write the loop gain of the differential half circuit with the two-port series–shunt method and see where the feedback resistor $R_F$ enters. It sets the feedback factor directly, and affects the forward gain only through loading.

### Step 1 — Half circuit and loop gain

In the differential half circuit the midpoint of the 50-Ω resistors ($R_E$) and the joined emitters of $Q_3$, $Q_4$ are ac grounds. $R_F$ runs from the collector of $Q_3$ (output) to the emitter of $Q_1$. With $g_{m1}=0.262$ S, $r_{\pi1}=382\ \Omega$, $g_{m3}=0.131$ S, $r_{\pi3}=765\ \Omega$ from the given bias, the two-port analysis gives

$$
f=\frac{R_E}{R_E+R_F},\qquad
T=af=\frac{\beta}{r_b+r_{\pi1}+(\beta+1)(R_E\parallel R_F)}\bigl[R_{C1}\parallel(r_b+r_{\pi3})\bigr]\frac{r_{\pi3}}{r_b+r_{\pi3}}\,g_{m3}\bigl[R_{C3}\parallel(R_E+R_F)\bigr]\frac{R_E}{R_E+R_F},
$$

where $R_E\parallel R_F$ degenerates $Q_1$ (input loading) and $R_E+R_F$ loads the output.

### Step 2 — Effect of $R_F$ on each factor

- Feedback factor: $f=R_E/(R_E+R_F)\approx R_E/R_F$ falls almost in inverse proportion to $R_F$ (here $R_F\gg R_E$).
- Input loading: $R_E\parallel R_F\approx R_E$ changes very little when $R_F\gg R_E$, so the input-stage transconductance hardly changes.
- Output loading: $R_E+R_F$ in parallel with $R_{C3}=200\ \Omega$ loads the output less as $R_F$ grows, so $a$ rises somewhat.

The dominant effect is the smaller $f$; the reduced loading partly offsets it. Approximately,

$$
T\approx K\,\frac{R_{C3}\parallel(R_E+R_F)}{R_F},
$$

which falls a little less than in proportion to $1/R_F$.

### Step 3 — Numerical trend

At the given bias:

| $R_F$ (Ω) | 250 | 400 | 500 | 600 | 1000 | 2000 |
|---|---|---|---|---|---|---|
| $f$ | 0.167 | 0.111 | 0.091 | 0.077 | 0.048 | 0.024 |
| $a$ | 98 | 107 | 111 | 114 | 122 | 129 |
| $T$ | 16.4 | 11.9 | 10.1 | 8.8 | 5.8 | 3.2 |

A 20% increase of $R_F$ lowers $T$ by about 13%, while the closed-loop gain $\approx1+R_F/R_E$ rises. Larger feedback resistors therefore trade loop gain (and with it gain accuracy, bandwidth extension and impedance improvement) for closed-loop gain. Because the 500-Ω resistors also carry bias current, re-biasing makes the drop slightly larger, in the same direction.
