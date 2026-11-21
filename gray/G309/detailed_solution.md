# Detailed solution - G309

With Miller compensation and a large second-stage gain, the unity-gain frequency is $\omega_u=g_{mI}/C$ and the slew rate is $SR=I_{EE}/C$, where $g_{mI}$ is the input-stage transconductance. Keeping $\omega_u$ fixed sets the new $C$, and the slew rate then improves by the ratio of $I_{EE}/g_{mI}$ for the two input stages.

### Step 1 — Original unity-gain frequency and slew rate

Each bipolar input transistor carries $I_C=I_{EE}/2=10$ μA. With the mirror load, the stage transconductance is the full $g_{m1}$ (both halves add at the output node):
$$
g_{m1}=\frac{I_C}{V_T}=\frac{10\ \mu\mathrm A}{26\ \mathrm{mV}}=0.3846\ \mathrm{mA/V}.
$$
The Miller capacitor makes the gain $a(j\omega)\approx g_{m1}/(j\omega C)$ above the dominant pole, so
$$
\omega_u=\frac{g_{m1}}{C}=\frac{0.3846\ \mathrm{mA/V}}{10\ \mathrm{pF}}=3.846\times10^7\ \mathrm{rad/s}\quad(6.12\ \mathrm{MHz}).
$$
During slewing the input stage delivers at most $I_{EE}$ into $C$, and the second stage holds the base of $Q_5$ nearly fixed, so $dV_o/dt=I_{EE}/C$:
$$
SR_{\text{old}}=\frac{20\ \mu\mathrm A}{10\ \mathrm{pF}}=2\ \mathrm{V/\mu s}.
$$

### Step 2 — New compensation capacitor

The PMOS pair with the same mirror load has $G_m=g_m=300$ μA/V. The same $\omega_u$ requires
$$
C=\frac{g_m}{\omega_u}=\frac{300\ \mu\mathrm{A/V}}{3.846\times10^7\ \mathrm{rad/s}}=7.80\ \mathrm{pF}.
$$

### Step 3 — New slew rate and improvement

The full tail current $I_{EE}=600$ μA can be steered into $C$:
$$
SR_{\text{new}}=\frac{I_{EE}}{C}=\frac{600\ \mu\mathrm A}{7.80\ \mathrm{pF}}=76.9\ \mathrm{V/\mu s}.
$$
Since $C=g_{mI}/\omega_u$ in both designs, $SR=\omega_u\,(I_{EE}/g_{mI})$, and at equal $\omega_u$ the improvement is
$$
\frac{SR_{\text{new}}}{SR_{\text{old}}}=\frac{(I_{EE}/g_{mI})_{\text{new}}}{(I_{EE}/g_{mI})_{\text{old}}}=\frac{600\ \mu\mathrm A/300\ \mu\mathrm{A/V}}{20\ \mu\mathrm A/0.3846\ \mathrm{mA/V}}=\frac{2\ \mathrm V}{0.052\ \mathrm V}=38.5 .
$$
The gain comes from the MOS pair's much larger $I_{EE}/g_{mI}$. For a bipolar pair, $I_{EE}/g_m=2V_T=52$ mV is fixed; for MOS it is $V_{ov}$ (here 2 V), set by the bias and device size.

### Step 4 — Check on the second stage

$SR=I_{EE}/C$ assumes that the output node can supply the capacitor current $I_{EE}$ in both directions. For a falling output, $Q_6$ can sink this current. For a rising output, the current through $C$ must come from the 300-μA source at the collector of $Q_6$ (with $Q_6$ cut off). In [Fig. 1] that source is smaller than the new 600-μA tail current, so with that output stage the positive-going rate would be limited to $300\ \mu\mathrm A/7.80\ \mathrm{pF}=38.5\ \mathrm{V/\mu s}$. The 76.9 V/μs is reached only if the second-stage bias is raised to at least $I_{EE}$; in the original design, $20\ \mu\mathrm A\ll300\ \mu\mathrm A$, so this limit did not arise.
