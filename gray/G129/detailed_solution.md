# Detailed solution - G129

Each transistor conducts for one half cycle as an emitter follower, so the output can swing to within $V_{CE(\text{sat})}$ of either supply. Find the largest unclipped sinusoid, the average supply current that it draws, and the point on a device's load line where its dissipation peaks.

### Step 1 — Maximum unclipped output power

With crossover distortion neglected, $V_o$ follows the input; $Q_1$ supplies the positive half cycle and saturates at $V_o=V_{CC}-V_{CE(\text{sat})}$, $Q_2$ the negative half cycle with the symmetric limit. So

$$
\hat V_{om}=V_{CC}-V_{CE(\text{sat})}=12\ \mathrm V-0.2\ \mathrm V=11.8\ \mathrm V,
$$
$$
P_{L,\max}=\frac{\hat V_{om}^2}{2R_L}=\frac{(11.8\ \mathrm V)^2}{2(1\ \mathrm{k\Omega})}=69.6\ \mathrm{mW}.
$$

### Step 2 — Supply power and efficiency

Each supply delivers current only during its device's half cycle, a half sine of peak $\hat V_o/R_L$, whose average over a full period is $\hat V_o/(\pi R_L)$. The two supplies together give

$$
P_{\text{supply}}=2V_{CC}\frac{\hat V_o}{\pi R_L}=\frac{2(12\ \mathrm V)(11.8\ \mathrm V)}{\pi(1\ \mathrm{k\Omega})}=90.1\ \mathrm{mW}.
$$

Hence

$$
\eta=\frac{P_L}{P_{\text{supply}}}=\frac{\pi}{4}\frac{\hat V_o}{V_{CC}}=\frac{\pi}{4}\cdot\frac{11.8}{12}=\frac{69.6\ \mathrm{mW}}{90.1\ \mathrm{mW}}=77.2\%,
$$

just below the ideal class B limit $\pi/4=78.5\%$ because of the saturation voltage.

### Step 3 — Maximum instantaneous dissipation

While $Q_1$ conducts, $V_{ce1}=V_{CC}-V_o$ and $I_{c1}=V_o/R_L$, so its load line is $V_{ce1}=V_{CC}-I_{c1}R_L$, with intercepts $V_{CC}$ and $V_{CC}/R_L$. The dissipation

$$
P_{c1}=I_{c1}\left(V_{CC}-I_{c1}R_L\right)
$$

is maximum at the midpoint of the line, $I_{c1}=V_{CC}/(2R_L)=6$ mA and $V_{ce1}=V_{CC}/2=6$ V, which corresponds to $V_o=6$ V. The full-swing output reaches 11.8 V, so this point is passed through on every cycle:

$$
P_{c,\max}=\frac{V_{CC}^2}{4R_L}=\frac{(12\ \mathrm V)^2}{4(1\ \mathrm{k\Omega})}=36\ \mathrm{mW}.
$$

By symmetry the same holds for $Q_2$. The maximum power is **69.6 mW**, the efficiency **77.2%**, and the maximum instantaneous dissipation **36 mW per device**, which occurs at half the supply voltage, not at the output peak.
