# Detailed solution - R236

**Approach.** Treat the change of $V_P$ as a small signal at the drain of the cascode device $M_3$, with $V_b$ and the gate of $M_2$ at ac ground. Node Y is fed from P through $M_3$ and loaded by $r_{O2}$; KCL at Y gives the attenuation $\Delta V_Y/\Delta V_P \approx 1/(g_{m3}r_{O3})$, the "shielding" a cascode provides.

### Step 1 — Bias and small-signal parameters

All three transistors have $W/L = 40/0.5 = 80$ and carry about $I_{REF} = 0.3$ mA; $\gamma = 0$.

$$g_{m3} = \sqrt{2(134\ \mu\mathrm{A/V^2})(80)(0.3\ \mathrm{mA})} = \sqrt{6.432\times10^{-6}}\ \mathrm{A/V} = 2.54\ \mathrm{mS} ,$$

$$r_{O2} = r_{O3} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.3\ \mathrm{mA})} = 33.3\ \mathrm{k}\Omega, \qquad g_{m3}r_{O3} = (2.54\ \mathrm{mS})(33.3\ \mathrm{k}\Omega) = 84.5 .$$

### Step 2 — Small-signal circuit

The gate of $M_2$ is held at $V_X$, which does not respond to P, so $M_2$ reduces to $r_{O2}$ from Y to ground. The gate of $M_3$ is at ac ground, so $v_{gs3} = -v_Y$, and $M_3$ is $g_{m3}v_{gs3}$ from P to Y in parallel with $r_{O3}$. The analog circuit imposes $v_P = \Delta V_P$.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at node Y

The current down through $M_3$ equals the current into $r_{O2}$:

$$\underbrace{g_{m3}(-v_Y) + \frac{v_P - v_Y}{r_{O3}}}_{\text{through } M_3} = \underbrace{\frac{v_Y}{r_{O2}}}_{\text{through } r_{O2}} .$$

Collecting terms and multiplying by $r_{O3}r_{O2}$:

$$\frac{v_P}{r_{O3}} = v_Y\left(g_{m3} + \frac{1}{r_{O3}} + \frac{1}{r_{O2}}\right) \quad\Longrightarrow\quad v_Pr_{O2} = v_Y\left(g_{m3}r_{O3}r_{O2} + r_{O2} + r_{O3}\right) ,$$

$$\frac{v_Y}{v_P} = \frac{r_{O2}}{r_{O2} + r_{O3} + g_{m3}r_{O3}r_{O2}} ,$$

and with $r_{O2} = r_{O3} = r_O$,

$$\frac{v_Y}{v_P} = \frac{1}{2 + g_{m3}r_O} .$$

As soon as Y starts to rise, $v_{gs3}$ goes negative and $M_3$'s controlled source removes almost all the current that the change at P drives through $r_{O3}$: a common-gate stage driven "backwards", from drain to source, has a very small gain.

### Step 4 — Numerical value

$$\frac{\Delta V_Y}{\Delta V_P} = \frac{1}{2 + 84.5} = \frac{1}{86.5} = 0.0116 ,$$

so for $\Delta V_P = 1$ V,

$$\Delta V_Y = \frac{1\ \mathrm{V}}{86.5} = 11.6\ \mathrm{mV},$$

in the **same direction** as $\Delta V_P$. The estimate $\Delta V_P/(g_{m3}r_{O3}) = 1\ \mathrm{V}/84.5 = 11.8$ mV is essentially the same.

### Step 5 — Cross-check with the cascode output resistance

$$\Delta I_{out} = \frac{\Delta V_Y}{r_{O2}} = \frac{11.6\ \mathrm{mV}}{33.3\ \mathrm{k}\Omega} = 0.35\ \mu\mathrm{A} ,$$

consistent with $R_{out} = r_{O3} + r_{O2} + g_{m3}r_{O3}r_{O2} = 33.3\ \mathrm{k}\Omega\times(2 + 84.5) = 2.88\ \mathrm{M}\Omega$: $1\ \mathrm{V}/2.88\ \mathrm{M}\Omega = 0.35\ \mu$A ✓. Without the cascode, the full 1 V across $r_{O2}$ would change the current by $1\ \mathrm{V}/33.3\ \mathrm{k}\Omega = 30\ \mu$A (10 %); with it, $M_2$ sees only 11.6 mV and the current changes by about 0.1 %.

### Result

$$\frac{\Delta V_Y}{\Delta V_P} = \frac{r_{O2}}{r_{O2} + r_{O3} + g_{m3}r_{O3}r_{O2}} = \frac{1}{2 + g_{m3}r_{O3}} = \frac{1}{86.5},$$

with $g_{m3} = 2.54$ mS and $r_{O2} = r_{O3} = 33.3\ \mathrm{k}\Omega$. So a 1-V change of $V_P$ changes $V_Y$ by **about 12 mV (11.6 mV)**, in the same direction.

**Common mistake.** Letting $V_Y$ follow $V_P$ (1 V), or splitting the change between two equal resistances (0.5 V). That treats $M_3$ as a plain resistor $r_{O3}$ and ignores the controlled source that attenuates the change by $\approx g_mr_O$.

**Common mistake.** Claiming $V_Y$ does not change at all. The nonzero $\Delta V_Y$ is what produces the small current change $\Delta V_Y/r_{O2}$, i.e. the finite output resistance of the cascode.

**Common mistake.** Attenuating by $(g_mr_O)^2$ (≈ 0.14 mV). The path from P to Y passes through only one cascode device, so the attenuation is a single factor of about $g_mr_O$.
