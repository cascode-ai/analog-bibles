# Detailed solution - G263

Write the loop gain of the differential half circuit with the two-port series–shunt method and locate the output load resistor $R_{C3}$ (200 Ω). It does not enter the feedback network, so it affects $T$ only through the forward gain.

### Step 1 — Loop gain of the half circuit

In the differential half circuit (midpoint of the 50-Ω resistors and the joined emitters of $Q_3$, $Q_4$ at ac ground), with $g_{m1}=0.262$ S, $r_{\pi1}=382\ \Omega$, $g_{m3}=0.131$ S, $r_{\pi3}=765\ \Omega$, the two-port analysis gives

$$
f=\frac{R_E}{R_E+R_F}=\frac{50}{550}=0.0909,
$$

$$
T=af=\frac{\beta}{r_b+r_{\pi1}+(\beta+1)(R_E\parallel R_F)}\bigl[R_{C1}\parallel(r_b+r_{\pi3})\bigr]\frac{r_{\pi3}}{r_b+r_{\pi3}}\,g_{m3}\bigl[R_{C3}\parallel(R_E+R_F)\bigr]\,f .
$$

### Step 2 — Dependence on $R_{C3}$

$f$ does not contain $R_{C3}$, and the only factor of $a$ that contains $R_{C3}$ is the total load at the collector of $Q_3$, where the output loading of the feedback network, $R_E+R_F=550\ \Omega$, sits in parallel with $R_{C3}$ (the combination is nominally 147 Ω):

$$
T\propto R_{C3}\parallel(R_E+R_F)=\frac{R_{C3}(550\ \Omega)}{R_{C3}+550\ \Omega},\qquad 200\ \Omega\parallel550\ \Omega=147\ \Omega .
$$

Increasing $R_{C3}$ therefore increases $T$, and decreasing $R_{C3}$ decreases $T$. Because 550 Ω is in parallel, the increase is sublinear: $T$ tends toward the value set by 550 Ω alone as $R_{C3}\to\infty$.

### Step 3 — Numerical trend

| $R_{C3}$ (Ω) | 100 | 160 | 200 | 240 | 400 | 1000 | ∞ |
|---|---|---|---|---|---|---|---|
| $R_{C3}\parallel550\ \Omega$ (Ω) | 85 | 124 | 147 | 167 | 232 | 355 | 550 |
| $T$ | 5.8 | 8.5 | 10.1 | 11.5 | 15.9 | 24.4 | 37.9 |

A 20% increase of the load resistors raises $T$ by about 14%. The 200-Ω resistors also set the dc operating point of $Q_3$, $Q_4$, which tempers the increase somewhat but does not change its direction. The closed-loop gain stays close to $1+R_F/R_E$ throughout, since $f$ is unchanged.
