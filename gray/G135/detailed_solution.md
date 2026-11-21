# Detailed solution - G135

Find the output limits for $R_L=1\ \mathrm{k\Omega}$; the smaller one sets the unclipped sine amplitude. The quiescent current of the output pair is small compared with the signal current, so the class B relations for power, efficiency and device dissipation apply.

### Step 1 — Output limits and amplitude

- **Negative:** $Q_{17}$ saturates, and the pnp followers $Q_{23}$ and $Q_{20}$ each add $V_{BE(\text{on})}$: $V_o^-=-15\ \mathrm V+0.2\ \mathrm V+0.7\ \mathrm V+0.7\ \mathrm V=-13.4$ V.
- **Positive:** $Q_{13A}$ saturates, so $V_o^+=15\ \mathrm V-0.2\ \mathrm V-0.7\ \mathrm V=14.1$ V. This needs $14.1$ mA from $Q_{14}$, well below its drive limit $(\beta_F+1)(0.2\ \mathrm{mA})=40.2$ mA, so the drive does not limit.

A symmetric sinusoid clips first on the negative side, so $\hat V_o=13.4$ V.

### Step 2 — Output power and efficiency

Each output device conducts a half sine of peak $\hat V_o/R_L$ from its supply, averaging $\hat V_o/(\pi R_L)$ over a period. Hence

$$
P_L=\frac{\hat V_o^2}{2R_L}=\frac{(13.4\ \mathrm V)^2}{2(1\ \mathrm{k\Omega})}=89.8\ \mathrm{mW},
$$
$$
P_{\text{supply}}=2V_{CC}\frac{\hat V_o}{\pi R_L}=\frac{2(15\ \mathrm V)(13.4\ \mathrm V)}{\pi(1\ \mathrm{k\Omega})}=128\ \mathrm{mW},
$$
$$
\eta=\frac{P_L}{P_{\text{supply}}}=\frac{\pi}{4}\frac{\hat V_o}{V_{CC}}=\frac{\pi}{4}\cdot\frac{13.4}{15}=70.2\%.
$$

The efficiency counts only the output devices $Q_{14}$ and $Q_{20}$; the bias currents of the driver are excluded.

### Step 3 — Peak instantaneous dissipation per output device

While $Q_{14}$ conducts, $I_{c14}\approx V_o/R_L$ and $V_{ce14}=V_{CC}-V_o$, so

$$
P_{14}=\frac{V_o}{R_L}\left(V_{CC}-V_o\right),
$$

a parabola in $V_o$ with its maximum at $V_o=V_{CC}/2=7.5$ V (the midpoint of the load line). The swing reaches 13.4 V, so this point is passed:

$$
P_{\max}=\frac{V_{CC}^2}{4R_L}=\frac{(15\ \mathrm V)^2}{4(1\ \mathrm{k\Omega})}=56.3\ \mathrm{mW}.
$$

By symmetry $Q_{20}$ has the same peak, at $V_o=-7.5$ V. At the output peak the dissipation is lower, only $(13.4\ \mathrm{mA})(1.6\ \mathrm V)=21$ mW.

The stage delivers **89.8 mW** at **70% efficiency**, and each output transistor dissipates at most **56.3 mW** instantaneously.
