# Detailed solution - G167

A threshold mismatch in the current-mirror load produces a current error $g_{m,\text{load}}\Delta V_{t}$, which the input pair must cancel by an input difference that steers $g_{m,\text{input}}V_{OS}$. The input-referred offset is therefore the mismatch scaled by the ratio of load to input transconductance. Compare this ratio for the two device polarities.

### Step 1 — Offset from a load threshold mismatch

The mirror output device has the same gate-source voltage as the diode-connected device, so a threshold difference $\Delta V_{t}$ changes its current by $g_{m3}\Delta V_t$. Balancing this with the input pair, $g_{m1}V_{OS}=g_{m3}\Delta V_t$:

$$
V_{OS}=\frac{g_{m3}}{g_{m1}}\,\Delta V_t,\qquad \Delta V_t=10\ \mathrm{mV}.
$$

### Step 2 — Transconductance ratio for each configuration

With $g_m=\sqrt{2\mu C_{ox}(W/L)|I_D|}$, equal $W/L$ and equal currents per device, $g_m\propto\sqrt{\mu C_{ox}}$, and $\mu_nC_{ox}/\mu_pC_{ox}=194/64.7=3.0$.

- **(i) p-channel input, n-channel mirror:**

$$
\frac{g_{m3}}{g_{m1}}=\sqrt{\frac{\mu_nC_{ox}}{\mu_pC_{ox}}}=\sqrt3=1.73,\qquad V_{OS}=1.73\times10\ \mathrm{mV}=17.3\ \mathrm{mV}.
$$

- **(ii) n-channel input, p-channel mirror:**

$$
\frac{g_{m3}}{g_{m1}}=\sqrt{\frac{\mu_pC_{ox}}{\mu_nC_{ox}}}=\frac{1}{\sqrt3}=0.577,\qquad V_{OS}=0.577\times10\ \mathrm{mV}=5.8\ \mathrm{mV}.
$$

### Step 3 — Conclusion

**Configuration (ii), the n-channel input pair with a p-channel mirror, has the lower offset**, about 5.8 mV against 17.3 mV, a factor of 3. The higher-mobility n-channel devices give the input pair the larger $g_m$, which divides down the load's current error, while the low-$g_m$ p-channel devices generate a smaller current error for the same threshold mismatch. More generally, the load contribution to offset is reduced by making the load's $g_m$ small relative to the input pair's, for example with longer load channels or a smaller load $W/L$.
