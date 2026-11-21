# Detailed solution - G117

The driver sees the base of $Q_1$: its signal voltage is essentially the output voltage (the follower gain is close to 1), and its signal current is the load current divided by $\beta_F$. Compute the maximum unclipped amplitude for each load, the corresponding signal base current, the driver power, and the ratio of load to driver power.

### Step 1 — Bias current and maximum amplitudes

With $R_1=R_2=0$ and the base currents of the mirror neglected, $I_Q=(V_{CC}-V_{BE(\text{on})})/R_3=14.3\ \mathrm V/5\ \mathrm{k\Omega}=2.86$ mA. The positive swing is limited by $Q_1$ saturation at $V_{CC}-V_{CE(\text{sat})}=14.8$ V, the negative swing by $Q_1$ cutoff at $-I_QR_L$ or $Q_2$ saturation at $-14.8$ V, so $\hat V_o=\min(14.8\ \mathrm V,\ I_QR_L)$:

| $R_L$ | $\hat V_o$ | $P_L=\hat V_o^2/(2R_L)$ |
|---|---|---|
| 2 kΩ | 5.72 V | 8.18 mW |
| 10 kΩ | 14.8 V | 10.95 mW |

### Step 2 — Signal current and voltage at the base of $Q_1$

The signal component of the emitter current of $Q_1$ is the load current $i_o=v_o/R_L$, because $Q_2$ carries a constant $I_Q$. With $I_c=\beta_FI_b$, the signal base current has amplitude

$$
\hat I_b=\frac{\hat V_o}{\beta_FR_L}.
$$

The emitter follower's voltage gain is close to 1 (its $1/g_m$ of about 9 Ω is negligible against $R_L$), so the signal voltage at the base has amplitude $\hat V_i\approx\hat V_o$. Base voltage and base signal current are in phase, so the average power the driver delivers is

$$
P_i=\tfrac12\hat V_i\hat I_b\approx\frac{\hat V_o^2}{2\beta_FR_L}=\frac{P_L}{\beta_F}.
$$

### Step 3 — Driver power for each load

For $R_L=2\ \mathrm{k\Omega}$:

$$
\hat I_b=\frac{5.72\ \mathrm V}{(100)(2\ \mathrm{k\Omega})}=28.6\ \mu\mathrm A,\qquad
P_i=\tfrac12(5.72\ \mathrm V)(28.6\ \mu\mathrm A)=81.8\ \mu\mathrm W.
$$

For $R_L=10\ \mathrm{k\Omega}$:

$$
\hat I_b=\frac{14.8\ \mathrm V}{(100)(10\ \mathrm{k\Omega})}=14.8\ \mu\mathrm A,\qquad
P_i=\tfrac12(14.8\ \mathrm V)(14.8\ \mu\mathrm A)=109.5\ \mu\mathrm W.
$$

### Step 4 — Power gain

$$
G_P=\frac{P_L}{P_i}=\frac{8.18\ \mathrm{mW}}{81.8\ \mu\mathrm W}=\frac{10.95\ \mathrm{mW}}{109.5\ \mu\mathrm W}=\beta_F=100\quad(20\ \mathrm{dB})
$$

for both loads. The voltage gain is about 1, so all of the power gain comes from current gain. Relating the load current to the emitter current, $I_e=(\beta_F+1)I_b$, gives 101 instead of 100.

If $\beta=100$ is also applied to $Q_2$ and $Q_3$, their two base currents reduce the mirror output to $I_Q=2.86\ \mathrm{mA}/1.02=2.80$ mA. At $R_L=2\ \mathrm{k\Omega}$ this lowers $\hat V_o$ to 5.61 V and $P_i$ to about 78 µW; at $10\ \mathrm{k\Omega}$ the amplitude is still 14.8 V, and the power gain is unchanged.
