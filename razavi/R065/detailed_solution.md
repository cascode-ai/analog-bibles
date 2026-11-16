# Detailed solution - R065

**Approach.** The circuit is a common-source (CS) stage with a PMOS current-source load: $M_1$ converts $v_{in}$ into a signal current $g_{m1}v_{in}$, and $M_2$, whose gate and source are at fixed potentials, contributes only its output resistance $r_{O2}$. The gain is $-g_{m1}(r_{O1}\parallel r_{O2})$. The key detail is that $\lambda$ scales as $1/L$, so the 2-µm-long PMOS has a much smaller $\lambda$ than the tabulated value.

### Step 1 — Transconductance of $M_1$

With $(W/L)_1 = 50/0.5 = 100$ and $I_D = 0.5$ mA:

$$g_{m1} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_1I_D} = \sqrt{2(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

### Step 2 — Channel-length modulation coefficients

Since $\lambda \propto 1/L$ and the given values apply to $L = 0.5\ \mu$m,

$$\lambda(L) = \lambda(0.5\ \mu\mathrm{m})\times\frac{0.5\ \mu\mathrm{m}}{L} .$$

**$M_1$** ($L = 0.5\ \mu$m): $\lambda_1 = 0.1\ \mathrm{V^{-1}}$.

**$M_2$** ($L = 2\ \mu$m, four times longer):

$$\lambda_2 = 0.2\ \mathrm{V^{-1}}\times\frac{0.5\ \mu\mathrm{m}}{2\ \mu\mathrm{m}} = 0.2\times0.25\ \mathrm{V^{-1}} = 0.05\ \mathrm{V^{-1}}.$$

The change of the pinch-off point with $V_{DS}$ is a smaller *fraction* of a longer channel, so the current depends less on $V_{DS}$.

### Step 3 — Output resistances

$$
\begin{aligned}
r_{O1} &= \frac{1}{\lambda_1I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{5\times10^{-5}}\ \Omega = 20\ \mathrm{k}\Omega,\\
r_{O2} &= \frac{1}{\lambda_2I_D} = \frac{1}{(0.05\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{2.5\times10^{-5}}\ \Omega = 40\ \mathrm{k}\Omega,
\end{aligned}
$$

$$r_{O1}\parallel r_{O2} = \frac{r_{O1}r_{O2}}{r_{O1} + r_{O2}} = \frac{(20)(40)}{20 + 40}\ \mathrm{k}\Omega = \frac{800}{60}\ \mathrm{k}\Omega = 13.33\ \mathrm{k}\Omega.$$

### Step 4 — Small-signal model and gain

$V_{DD}$, $V_b$ and ground are all ac grounds. At the output, $M_1$ contributes $g_{m1}v_{in}$ (with $v_{gs1} = v_{in}$) and $r_{O1}$ to ground, while $M_2$ reduces to $r_{O2}$ to ac ground: its controlled source is $g_{m2}v_{sg2} = 0$, since its gate and source are both at ac ground, and it has no body effect, since its source and bulk are both at $V_{DD}$.

<!-- diagram: diagram-01.cir -->

KCL at the output node (sum of currents leaving = 0):

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0 \quad\Longrightarrow\quad A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{1/r_{O1} + 1/r_{O2}} = -g_{m1}\,(r_{O1}\parallel r_{O2}) .$$

**Numbers:**

$$A_v = -(3.66\times10^{-3}\ \mathrm{S})(13.33\times10^{3}\ \Omega) = -48.8 .$$

The gain is inverting: a rise in $V_{in}$ makes $M_1$ draw more current than $M_2$ supplies, pulling $V_{out}$ down.

**Why the long PMOS helps.** With an unscaled $\lambda_2 = 0.2\ \mathrm{V^{-1}}$, $r_{O2}$ would be only 10 kΩ, $r_{O1}\parallel r_{O2} = 6.67\ \mathrm{k}\Omega$, and $|A_v| = 24.4$. Making the load device four times longer quadruples $r_{O2}$ and doubles the gain. Lengthening $M_1$ as well would raise the gain further; then $r_{O1}$ becomes the limit.

### Result

$$A_v = -g_{m1}\,(r_{O1}\parallel r_{O2}) = -(3.66\ \mathrm{mS})(20\ \mathrm{k}\Omega\parallel40\ \mathrm{k}\Omega) = -(3.66\ \mathrm{mS})(13.3\ \mathrm{k}\Omega) \approx -48.8,$$

with $g_{m1} = 3.66$ mS, $\lambda_1 = 0.1\ \mathrm{V^{-1}}$ ($r_{O1} = 20\ \mathrm{k}\Omega$) and $\lambda_2 = 0.2\times(0.5/2) = 0.05\ \mathrm{V^{-1}}$ ($r_{O2} = 40\ \mathrm{k}\Omega$).

**Common mistake.** Using $\lambda_2 = 0.2\ \mathrm{V^{-1}}$ without scaling it for the 2-µm length, which gives $r_{O2} = 10\ \mathrm{k}\Omega$ and $A_v \approx -24.4$. Since $\lambda \propto 1/L$, the four-times-longer PMOS has a four-times-smaller $\lambda$.

**Common mistake.** Using $g_{m2}$, or including only one output resistance. $M_2$'s gate and source are both at ac ground, so it acts only through $r_{O2}$, which appears in parallel with $r_{O1}$ at the output.
