# Detailed solution - G165

With only the mirror thresholds mismatched, the offset is the mirror's current error referred to the input through the input transconductance, $V_{OS}=V_{t(3-4)}\,g_{m3}/g_{m1}$. The remaining task is the ratio $g_{m3}/g_{m1}$, which follows from the square law because $M_1$ and $M_3$ carry the same current and have equal $W/L$.

### Step 1 — Offset from the mirror threshold mismatch

$M_4$ has the same $V_{GS}$ as the diode $M_3$. With $V_{t3}>V_{t4}$, $M_4$ has 10 mV more overdrive and carries an extra current $g_{m3}(V_{t3}-V_{t4})$. For balance, $M_2$ must supply this extra current, which requires the input difference to steer $g_{m1}V_{OS}$ toward $M_2$:

$$
g_{m1}V_{OS}=g_{m3}\left(V_{t3}-V_{t4}\right)\ \Rightarrow\ V_{OS}=\frac{g_{m3}}{g_{m1}}\left(V_{t3}-V_{t4}\right).
$$

$M_2$ must conduct more, so (p-channel) the gate of $M_2$ must be lower: $V_{G1}-V_{G2}>0$.

### Step 2 — Transconductance ratio

In the square law, $g_m=\sqrt{2\mu C_{ox}(W/L)|I_D|}$. $M_1$ and $M_3$ both carry $I_{TAIL}/2$ and have equal $W/L$, so only the mobilities differ:

$$
\frac{g_{m3}}{g_{m1}}=\sqrt{\frac{\mu_nC_{ox}}{\mu_pC_{ox}}}=\sqrt{\frac{194\ \mu\mathrm{A/V^2}}{64.7\ \mu\mathrm{A/V^2}}}=\sqrt{3.0}=1.73 .
$$

### Step 3 — Result

$$
V_{OS}=1.73\times10\ \mathrm{mV}=+17.3\ \mathrm{mV}\quad(V_{G1}-V_{G2}).
$$

The low-mobility p-channel input pair has the smaller $g_m$, so it magnifies the mirror's threshold error when referred to the input.
