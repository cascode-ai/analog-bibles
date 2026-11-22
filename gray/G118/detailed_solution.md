# Detailed solution - G118

The slope $dV_o/dV_i$ at any point of the transfer characteristic is the small-signal gain of the emitter follower evaluated at the instantaneous collector current of $Q_1$. That current changes with $V_o$, so the gain is computed at the quiescent point and at $V_o=\pm1$ V.

### Step 1 — Incremental gain of the follower

Treat $Q_2$ as an ideal current sink (its output resistance is neglected) and let $\beta_F\to\infty$. With a zero-impedance source the base of $Q_1$ is driven directly, so the small-signal circuit is the emitter resistance $1/g_m$ in series with $R_L$:

$$
\frac{dV_o}{dV_i}=\frac{R_L}{R_L+1/g_{m1}},\qquad g_{m1}=\frac{I_{c1}}{V_T}.
$$

### Step 2 — Collector current at the three points

The mirror sets $I_Q=(V_{CC}-V_{BE(\text{on})})/R_3=14.3\ \mathrm V/5\ \mathrm{k\Omega}=2.86$ mA in $Q_2$. KCL at the output gives $I_{c1}=I_Q+V_o/R_L$, so with $V_o/R_L=\pm1\ \mathrm V/2\ \mathrm{k\Omega}=\pm0.5$ mA:

$$
I_{c1}=2.86\ \mathrm{mA}\ (V_o=0),\qquad 3.36\ \mathrm{mA}\ (V_o=+1\ \mathrm V),\qquad 2.36\ \mathrm{mA}\ (V_o=-1\ \mathrm V).
$$

### Step 3 — Slopes

At the quiescent point,

$$
\frac1{g_{m1}}=\frac{26\ \mathrm{mV}}{2.86\ \mathrm{mA}}=9.09\ \Omega,\qquad
\frac{dV_o}{dV_i}\bigg|_Q=\frac{2000\ \Omega}{2000\ \Omega+9.09\ \Omega}=0.99548.
$$

The extremes follow in the same way:

| Point | $V_o$ | $I_{c1}$ | $1/g_{m1}$ | $dV_o/dV_i$ | Change from $Q$ |
|---|---|---|---|---|---|
| Quiescent | 0 | 2.86 mA | 9.09 Ω | 0.99548 | — |
| Positive peak | +1 V | 3.36 mA | 7.74 Ω | 0.99615 | +0.07% |
| Negative peak | −1 V | 2.36 mA | 11.02 Ω | 0.99452 | −0.10% |

The slope is about 0.9955 at rest, 0.9961 at the positive peak and 0.9945 at the negative peak. It rises on the positive swing because $Q_1$ carries more current there and its $1/g_m$ falls; the small asymmetric change in slope is the source of the stage's (second-order) distortion.
