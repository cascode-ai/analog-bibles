# Detailed solution - G166

With only the mirror thresholds mismatched, the offset is the mirror's current error $g_{m3}V_{t(3-4)}$ referred to the input through $g_{m1}$. Here the input pair is n-channel and the mirror p-channel, so the transconductance ratio is inverted compared with a p-input op amp. Signed thresholds are used, negative for the p-channel devices.

### Step 1 — Offset from the mirror threshold mismatch

The diode $M_3$ sets the common $V_{SG}$ of $M_3$ and $M_4$. With $V_{t3}-V_{t4}=+10$ mV, the threshold of $M_4$ is 10 mV more negative, so $M_4$ has less overdrive and copies too little current: $|I_{D4}|=|I_{D3}|-g_{m3}(V_{t3}-V_{t4})$. For balance $M_2$ must conduct less than $M_1$ by this amount, which the input difference provides through $g_{m1}$:

$$
g_{m1}V_{OS}=g_{m3}\left(V_{t3}-V_{t4}\right)\ \Rightarrow\ V_{OS}=\frac{g_{m3}}{g_{m1}}\left(V_{t3}-V_{t4}\right),
$$

with the gate of $M_1$ higher, so $V_{G1}-V_{G2}>0$.

### Step 2 — Transconductance ratio

With $g_m=\sqrt{2\mu C_{ox}(W/L)|I_D|}$, equal $W/L$ and equal currents $I_{TAIL}/2$ in $M_1$ and $M_3$:

$$
\frac{g_{m3}}{g_{m1}}=\sqrt{\frac{\mu_pC_{ox}}{\mu_nC_{ox}}}=\sqrt{\frac{64.7\ \mu\mathrm{A/V^2}}{194\ \mu\mathrm{A/V^2}}}=0.577 .
$$

### Step 3 — Result

$$
V_{OS}=0.577\times10\ \mathrm{mV}=+5.8\ \mathrm{mV}\quad(V_{G1}-V_{G2}).
$$

The high-mobility n-channel input pair has the larger $g_m$ and attenuates the mirror's threshold error by $\sqrt3$, whereas a p-input stage with an n-channel mirror would magnify it by $\sqrt3$ (17.3 mV). If $V_{t3}$ and $V_{t4}$ are instead read as threshold magnitudes, $V_{t3}-V_{t4}=10$ mV makes $M_4$ the stronger device and the offset is $-5.8$ mV; the magnitude is the same.
