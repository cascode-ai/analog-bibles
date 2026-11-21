# Detailed solution - A266

Tying the bulks of M1 and M2 to $V_{SS}$ makes their threshold depend on the voltage of the common source node above $-2.5$ V. The currents and transconductances are set by M5 and the W/L values and do not change, so only quantities that depend on $V_{T1}$ change: the input common-mode range. Evaluate $V_{T1}$ at the actual source–bulk voltage at each ICMR limit, with the same worst-case $V_{T0}$ values as the original design.

### Step 1 — Body-effect threshold

$$
V_{T1}=V_{T0}+\gamma_N\left(\sqrt{2|\phi_F|+V_{SB1}}-\sqrt{2|\phi_F|}\right)=V_{T0}+0.4\left(\sqrt{0.7+V_{SB1}}-\sqrt{0.7}\right),
$$

with $V_{SB1}$ the height of the M1/M2 source node above $V_{SS}=-2.5$ V. Bias quantities from the figure: $I_5=30\ \mu\mathrm A$, $S_1=3$, $S_3=15$, $S_5=4.5$, and

$$
V_{ov1}=\sqrt{\frac{2(I_5/2)}{K'_NS_1}}=\sqrt{\frac{30\ \mu\mathrm A}{(110\ \mu\mathrm{A/V^2})(3)}}=0.302\ \mathrm V .
$$

### Step 2 — Lower ICMR limit

At $V_{in}(\min)$ the tail transistor M5 is at the edge of saturation, so the source node is $V_{DS5}(\mathrm{sat})$ above $V_{SS}$:

$$
V_{SB1}=V_{DS5}(\mathrm{sat})=\sqrt{\frac{2I_5}{K'_NS_5}}=\sqrt{\frac{2(30\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(4.5)}}=0.348\ \mathrm V,
$$

$$
V_{T1}=0.85+0.4\left(\sqrt{1.048}-\sqrt{0.7}\right)=0.85+0.4(1.024-0.837)=0.925\ \mathrm V
$$

(worst case $V_{T0}=0.85$ V). Then

$$
V_{in}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{ov1}+V_{T1}=-2.5+0.348+0.302+0.925=-0.93\ \mathrm V,
$$

compared with $-1.00$ V without body effect: the lower limit is degraded by about 75 mV, and the $-1$ V specification is now missed.

### Step 3 — Upper ICMR limit

At $V_{in}(\max)$ M1 is at the edge of saturation: $V_{in}(\max)=V_{DD}-V_{SG3}+V_{T1}$, with (worst case $|V_{T03}|=0.85$ V)

$$
V_{SG3}=\sqrt{\frac{2(I_5/2)}{K'_PS_3}}+0.85=\sqrt{\frac{30\ \mu\mathrm A}{(50\ \mu\mathrm{A/V^2})(15)}}+0.85=1.05\ \mathrm V .
$$

The drain of M1 is then at $2.5-1.05=1.45$ V and its source at $1.45-V_{ov1}=1.148$ V, so $V_{SB1}=3.65$ V and, with the worst-case $V_{T0}=0.55$ V for this limit,

$$
V_{T1}=0.55+0.4\left(\sqrt{4.35}-\sqrt{0.7}\right)=0.55+0.4(2.085-0.837)=1.05\ \mathrm V,
$$

$$
V_{in}(\max)=2.5-1.05+1.05\approx2.5\ \mathrm V,
$$

compared with $2.0$ V without body effect. The larger input threshold raises the upper limit by about 0.5 V.

### Step 4 — Unchanged performance

- $g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(3)(15\ \mu\mathrm A)}=99.5\ \mu\mathrm S$ is fixed by the current, so GB $=g_{m1}/C_c\approx5.3$ MHz from the W/L shown (5 MHz design target) is unchanged.
- The differential gain is unchanged: for differential signals the common source node is an ac ground, so $g_{mbs}$ does not enter. With $g_{m6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(94)(95\ \mu\mathrm A)}=945\ \mu\mathrm S$, $A_v=\dfrac{g_{m1}g_{m6}}{(0.09)(15\ \mu\mathrm A)(0.09)(95\ \mu\mathrm A)}\approx8.1\times10^3$.
- Slew rate $I_5/C_c=10$ V/µs, output swing and $P_{diss}$ do not involve M1's threshold.

Secondary effects only: at a common-mode input of 0 V, $V_{T1}$ rises to about 0.93 V (nominal), so the tail node sits about 0.23 V lower; the body transconductance slightly changes the common-mode gain (CMRR), lets $V_{SS}$ fluctuations reach the pair through the bulks (a small PSRR$^-$ change), and the bulk junction capacitance adds to the tail node.

### Step 5 — Comparison

| Quantity | Original design (body effect ignored) | Bulks at $-2.5$ V |
|---|---|---|
| $V_{in}(\min)$ | $-1.00$ V | $-0.93$ V |
| $V_{in}(\max)$ | $2.0$ V | $\approx2.5$ V |
| ICMR width | 3.0 V | ≈ 3.4 V |
| $A_v$, GB, SR, swing, $P_{diss}$ | — | unchanged |

With nominal thresholds the range would be about $-1.08$ V to above $2.5$ V.
