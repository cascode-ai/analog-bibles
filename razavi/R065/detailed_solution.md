# Detailed solution - R065

**Approach.** The circuit is a common-source (CS) stage with a PMOS current-source load: $M_1$ converts $v_{in}$ into a signal current $g_{m1}v_{in}$, and $M_2$, whose gate and source are at fixed potentials, contributes only its output resistance $r_{O2}$. The gain is $-g_{m1}(r_{O1}\parallel r_{O2})$. The key detail is that $\lambda$ scales as $1/L$, so the 2-µm-long PMOS has a much smaller $\lambda$ than the tabulated value.

### Step 1 — Reading the circuit

From the figure:

- $M_1$ (NMOS): gate driven by $V_{in}$, source at ground, drain at $V_{out}$.
- $M_2$ (PMOS): source at $V_{DD}$, gate at a fixed bias $V_b$, drain at $V_{out}$.

Both carry $I_D = 0.5$ mA and are saturated. $M_2$ is a **current source**: its $V_{SG}$ is fixed by $V_b$ and $V_{DD}$, so for small signals it is just a resistance $r_{O2}$.

### Step 2 — Transconductance of $M_1$

$(W/L)_1 = 50/0.5 = 100$. The **square-law transconductance** is

$$g_{m1} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_1I_D} = \sqrt{2(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} .$$

The product under the root is $2\times134\times10^{-6}\times100\times0.5\times10^{-3} = 1.34\times10^{-5}\ \mathrm{A^2/V^2}$, so

$$g_{m1} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

### Step 3 — Channel-length modulation coefficients

$\lambda$ is inversely proportional to the channel length, and the given values apply to $L = 0.5\ \mu$m:

$$\lambda(L) = \lambda(0.5\ \mu\mathrm{m})\times\frac{0.5\ \mu\mathrm{m}}{L} .$$

**$M_1$** ($L = 0.5\ \mu$m): $\lambda_1 = 0.1\ \mathrm{V^{-1}}$.

**$M_2$** ($L = 2\ \mu$m, four times longer):

$$\lambda_2 = 0.2\ \mathrm{V^{-1}}\times\frac{0.5\ \mu\mathrm{m}}{2\ \mu\mathrm{m}} = 0.2\times0.25\ \mathrm{V^{-1}} = 0.05\ \mathrm{V^{-1}}.$$

Physically, the change of the pinch-off point with $V_{DS}$ is a smaller *fraction* of a longer channel, so the current depends less on $V_{DS}$.

### Step 4 — Output resistances

The **output resistance** of a saturated MOSFET is $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{5\times10^{-5}}\ \Omega = 20\ \mathrm{k}\Omega,\\
r_{O2} &= \frac{1}{(0.05\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{2.5\times10^{-5}}\ \Omega = 40\ \mathrm{k}\Omega.
\end{aligned}
$$

Their parallel combination:

$$r_{O1}\parallel r_{O2} = \frac{r_{O1}r_{O2}}{r_{O1} + r_{O2}} = \frac{(20)(40)}{20 + 40}\ \mathrm{k}\Omega = \frac{800}{60}\ \mathrm{k}\Omega = 13.33\ \mathrm{k}\Omega.$$

### Step 5 — Small-signal model and gain

**Small-signal model.** $V_{DD}$, $V_b$ and ground are all ac grounds. The output node is connected to:

- the controlled source $g_{m1}v_{in}$ of $M_1$ (from the output to ground), with $v_{gs1} = v_{in}$;
- $r_{O1}$, from the output to ground;
- $r_{O2}$, from the output to ac ground ($V_{DD}$). $M_2$'s own controlled source is $g_{m2}v_{sg2} = 0$, because both its gate and its source are at ac ground. $M_2$'s body effect is absent too, since its source and bulk are both at $V_{DD}$.

<!-- diagram: diagram-01.cir -->

**KCL at the output node** (sum of currents leaving the node = 0):

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0 .$$

Collect the $v_{out}$ terms:

$$v_{out}\left(\frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right) = -g_{m1}v_{in} .$$

Solve for the gain:

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{1/r_{O1} + 1/r_{O2}} = -g_{m1}\,(r_{O1}\parallel r_{O2}) .$$

**Numbers:**

$$A_v = -(3.66\times10^{-3}\ \mathrm{S})(13.33\times10^{3}\ \Omega) = -48.8 .$$

The gain is negative (inverting): an increase of $V_{in}$ makes $M_1$ draw more current than $M_2$ supplies, pulling $V_{out}$ down.

**Why the long PMOS helps.** With an unscaled $\lambda_2 = 0.2\ \mathrm{V^{-1}}$, $r_{O2}$ would be only 10 kΩ, $r_{O1}\parallel r_{O2} = 6.67\ \mathrm{k}\Omega$, and $|A_v| = 24.4$. Making the load device four times longer quadruples $r_{O2}$ and doubles the gain. The gain could be raised further by lengthening $M_1$ as well; then $r_{O1}$ becomes the limit.

### Result

$$A_v = -g_{m1}\,(r_{O1}\parallel r_{O2}) = -(3.66\ \mathrm{mS})(20\ \mathrm{k}\Omega\parallel40\ \mathrm{k}\Omega) = -(3.66\ \mathrm{mS})(13.3\ \mathrm{k}\Omega) \approx -48.8,$$

with $g_{m1} = 3.66$ mS, $\lambda_1 = 0.1\ \mathrm{V^{-1}}$ ($r_{O1} = 20\ \mathrm{k}\Omega$) and $\lambda_2 = 0.2\times(0.5/2) = 0.05\ \mathrm{V^{-1}}$ ($r_{O2} = 40\ \mathrm{k}\Omega$).

**Common mistake.** Using $\lambda_2 = 0.2\ \mathrm{V^{-1}}$ without scaling it for the 2-µm length, which gives $r_{O2} = 10\ \mathrm{k}\Omega$ and $A_v \approx -24.4$. The problem states that $\lambda \propto 1/L$, so the four-times-longer PMOS has a four-times-smaller $\lambda$.

**Common mistake.** Using $g_{m2}$, or including only one output resistance. $M_2$'s gate and source are both at ac ground, so its transconductance produces no signal current; it acts only through $r_{O2}$, which appears in parallel with $r_{O1}$ at the output.
