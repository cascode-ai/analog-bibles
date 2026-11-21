# Detailed solution - G136

For a class B pair, a device's instantaneous dissipation peaks at $V_{CC}^2/(4R_L)$ whenever the swing passes half the supply. The 100 mW limit therefore sets a minimum load resistance. The output power is largest at that minimum load, with the amplitude set by the clipping limits of the stage.

### Step 1 — Swing limits

As for this stage in general: the negative limit is set by $Q_{17}$ saturating, with the two pnp followers $Q_{23}$ and $Q_{20}$ adding a $V_{BE}$ each, $V_o^-=-15+0.2+0.7+0.7=-13.4$ V. The positive limit is the lower of $Q_{13A}$ saturation, $15-0.2-0.7=14.1$ V, and the drive limit $(\beta_F+1)(0.2\ \mathrm{mA})R_L=(40.2\ \mathrm{mA})R_L$.

### Step 2 — Dissipation constraint

The quiescent current of the output pair is negligible against the signal current, so while $Q_{14}$ conducts, $I_{c14}=V_o/R_L$ and $V_{ce14}=V_{CC}-V_o$:

$$
P_{14}=\frac{V_o(V_{CC}-V_o)}{R_L},
$$

maximum at $V_o=V_{CC}/2=7.5$ V, with value $V_{CC}^2/(4R_L)$; $Q_{20}$ behaves the same way at $V_o=-7.5$ V. Any swing of at least 7.5 V reaches this peak, so

$$
\frac{V_{CC}^2}{4R_L}\le100\ \mathrm{mW}\ \Rightarrow\ R_L\ge\frac{(15\ \mathrm V)^2}{4(0.1\ \mathrm W)}=562.5\ \Omega.
$$

A smaller $R_L$ would be allowed only with a swing below 7.5 V. There the peak dissipation is $\hat V_o(V_{CC}-\hat V_o)/R_L\le100$ mW at $\hat V_o$, so $P_L=\hat V_o^2/(2R_L)\le(100\ \mathrm{mW})\,\hat V_o/\left(2(V_{CC}-\hat V_o)\right)\le50$ mW, far less than below.

### Step 3 — Maximum power and efficiency

At $R_L=562.5\ \Omega$ the drive limit would allow $(40.2\ \mathrm{mA})(562.5\ \Omega)=22.6$ V, so the positive limit is 14.1 V and the negative limit 13.4 V is the smaller: $\hat V_o=13.4$ V.

$$
P_L=\frac{\hat V_o^2}{2R_L}=\frac{(13.4\ \mathrm V)^2}{2(562.5\ \Omega)}=160\ \mathrm{mW}.
$$

A larger $R_L$ keeps the same amplitude and lowers $P_L$, so this is the maximum. The efficiency of the output devices is

$$
\eta=\frac{\pi}{4}\frac{\hat V_o}{V_{CC}}=\frac{\pi}{4}\cdot\frac{13.4}{15}=70.2\%,
$$

with output-device supply power $2V_{CC}\hat V_o/(\pi R_L)=227$ mW.

The result is **$R_L\approx562.5\ \Omega$, $P_L\approx160$ mW, $\eta\approx70\%$**.
