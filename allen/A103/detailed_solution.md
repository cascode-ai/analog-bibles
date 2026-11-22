# Detailed solution - A103

The circuit is a $V_{EB}$ multiplier fed from $V_{DD}$ through $R$. Choose the total current and how it divides between the divider and the transistor, compute $V_{EB}$ from the exponential law, and size $R_1$ and $R_2$ including the base current that flows into the divider tap. The sensitivity then follows from the small-signal divider formed by $R$ and the output resistance of the transistor–divider combination.

### Step 1 — Choose the currents

With $V_{REF}=2.5$ V and $V_{DD}=5$ V, the drop across $R$ is 2.5 V. Choose a total current of 100 µA:

$$
R=\frac{V_{DD}-V_{REF}}{I_{tot}}=\frac{2.5\ \mathrm V}{100\ \mu\mathrm A}=25\ \mathrm{k\Omega}.
$$

Let 20 µA flow through $R_1$ and the rest into the emitter, $I_E=80$ µA. With $\beta_F=100$,

$$
I_C=\frac{\beta_F}{\beta_F+1}I_E=79.21\ \mu\mathrm A,\qquad
I_B=\frac{I_E}{\beta_F+1}=0.792\ \mu\mathrm A .
$$

The collector is grounded and the base sits about 1.85 V above it, so the collector–base junction is reverse-biased and the pnp is in the forward-active region.

### Step 2 — Emitter–base voltage and $R_1$

In the forward-active region $I_C=I_s\exp(V_{EB}/V_t)$, so

$$
V_{EB}=V_t\ln\frac{I_C}{I_s}=(0.026\ \mathrm V)\ln\frac{79.21\ \mu\mathrm A}{1\ \mathrm{fA}}=0.6525\ \mathrm V .
$$

$R_1$ connects the emitter (at $V_{REF}$) to the base, so it carries $V_{EB}$:

$$
R_1=\frac{V_{EB}}{20\ \mu\mathrm A}=\frac{0.6525\ \mathrm V}{20\ \mu\mathrm A}=32.6\ \mathrm{k\Omega}.
$$

### Step 3 — Size $R_2$ with the base current

KCL at the base: the current in $R_2$ is the divider current through $R_1$ plus the base current, which flows out of the pnp base into the tap. The voltage across $R_2$ is $V_{REF}-V_{EB}$:

$$
R_2=\frac{V_{REF}-V_{EB}}{20\ \mu\mathrm A+I_B}=\frac{2.5-0.6525\ \mathrm V}{20.79\ \mu\mathrm A}=88.9\ \mathrm{k\Omega}.
$$

Equivalently $V_{REF}=V_{EB}(1+R_2/R_1)+I_BR_2$; the ideal multiplier term alone would give $(0.6525\ \mathrm V)(3.724)=2.430$ V, and $I_BR_2=70$ mV makes up the difference. The design is $R=25$ kΩ, $R_1=32.6$ kΩ, $R_2=88.9$ kΩ.

### Step 4 — Output resistance of the multiplier

Treat $V_{DD}$ as a small-signal source $v_{dd}$. The node $V_{REF}$ sees $R$ from $v_{dd}$ and, to ground, the resistance $r_{out}$ of the transistor with its divider. The hybrid-π parameters at this bias are

$$
g_m=\frac{I_C}{V_t}=\frac{79.21\ \mu\mathrm A}{26\ \mathrm{mV}}=3.046\ \mathrm{mS},\qquad
r_\pi=\frac{\beta_F}{g_m}=32.8\ \mathrm{k\Omega}.
$$

Apply $v_{out}$ at the emitter. With the emitter–base signal $v_{eb}$ across $R_1\|r_\pi$ and $v_{out}-v_{eb}$ across $R_2$, KCL at the base gives $v_{eb}(1/R_1+1/r_\pi)=(v_{out}-v_{eb})/R_2$. The current drawn from the node is the $R_1$ current plus the emitter current $g_m(1+1/\beta)v_{eb}$, which yields

$$
r_{out}=\frac{R_1+R_2+R_1R_2/r_\pi}{1+g_mR_1(1+1/\beta)}
=\frac{32.6+88.9+88.3\ \mathrm{k\Omega}}{1+(3.046\ \mathrm{mS})(32.6\ \mathrm{k\Omega})(1.01)}
=2.07\ \mathrm{k\Omega}.
$$

### Step 5 — Sensitivity to $V_{DD}$

$R$ and $r_{out}$ form a divider from $v_{dd}$ to $V_{REF}$:

$$
\frac{\partial V_{REF}}{\partial V_{DD}}=\frac{r_{out}}{R+r_{out}}=\frac{2.07}{25+2.07}=0.0764,
\qquad
S_{V_{DD}}^{V_{REF}}=\frac{V_{DD}}{V_{REF}}\frac{\partial V_{REF}}{\partial V_{DD}}=\frac{5}{2.5}(0.0764)\approx0.15 .
$$

A DC sweep of $V_{DD}$ in ngspice with this design ($I_s=1$ fA, $\beta_F=100$) gives $S=0.152$, confirming the value.

If the base current's loading of the divider is neglected ($\beta\to\infty$), $r_{out}\approx(R_1+R_2)/(1+g_mR_1)=1.21$ kΩ and $S\approx0.09$; the finite $\beta$ raises $r_{out}$ and roughly doubles $S$. For other designs $S\approx(V_{DD}/V_{REF})\,r_{out}/R$ with $r_{out}\approx(V_{REF}/V_{EB})/g_m$, typically 0.08–0.2: putting a larger share of the current through the transistor raises $g_m$ and lowers $S$.
