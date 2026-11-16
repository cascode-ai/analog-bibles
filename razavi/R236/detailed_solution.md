# Detailed solution - R236

**Approach.** Treat the change of $V_P$ as a small signal applied at the drain of the cascode device $M_3$, with all bias voltages ($V_b$ and the gate of $M_2$) at ac ground. Node Y is fed from P through $M_3$ and loaded by the output resistance of $M_2$. KCL at Y gives the attenuation $\Delta V_Y/\Delta V_P$, which turns out to be about $1/(g_{m3}r_{O3})$: this is the "shielding" a cascode provides.

### Step 1 — Bias and small-signal parameters

All three transistors have $W/L = 40/0.5 = 80$ and carry about $I_{REF} = 0.3$ mA (the cascode copies the reference current). With $\gamma = 0$ there is no body effect.

**Transconductance of $M_3$** (square law, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$):

$$g_{m3} = \sqrt{2(134\ \mu\mathrm{A/V^2})(80)(0.3\ \mathrm{mA})} = \sqrt{6.432\times10^{-6}}\ \mathrm{A/V} = 2.54\ \mathrm{mS} .$$

**Output resistances** ($r_O = 1/(\lambda I_D)$):

$$r_{O2} = r_{O3} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.3\ \mathrm{mA})} = 33.3\ \mathrm{k}\Omega .$$

**Intrinsic gain:**

$$g_{m3}r_{O3} = (2.54\ \mathrm{mS})(33.3\ \mathrm{k}\Omega) = 84.5 .$$

### Step 2 — Small-signal circuit

- The gate of $M_2$ is held at $V_X$, which is set by $I_{REF}$ and $M_1$ and does not respond to P. So $v_{gs2} = 0$ and $M_2$ reduces to its output resistance $r_{O2}$ from Y to ground.
- The gate of $M_3$ is at the constant $V_b$ (ac ground). Its source is Y and its drain is P, so $v_{gs3} = 0 - v_Y = -v_Y$. $M_3$ is a current source $g_{m3}v_{gs3}$ from P to Y in parallel with $r_{O3}$.
- The analog circuit imposes the change $v_P = \Delta V_P$ at P (a voltage source).

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at node Y

The current flowing down through $M_3$ (from P to Y) must equal the current flowing into $r_{O2}$:

$$\underbrace{g_{m3}(-v_Y) + \frac{v_P - v_Y}{r_{O3}}}_{\text{through } M_3} = \underbrace{\frac{v_Y}{r_{O2}}}_{\text{through } r_{O2}} .$$

**Collect the $v_Y$ terms** on the right:

$$\frac{v_P}{r_{O3}} = v_Y\left(g_{m3} + \frac{1}{r_{O3}} + \frac{1}{r_{O2}}\right) .$$

**Multiply both sides by $r_{O3}r_{O2}$:**

$$v_Pr_{O2} = v_Y\left(g_{m3}r_{O3}r_{O2} + r_{O2} + r_{O3}\right) .$$

**Solve:**

$$\frac{v_Y}{v_P} = \frac{r_{O2}}{r_{O2} + r_{O3} + g_{m3}r_{O3}r_{O2}} .$$

With $r_{O2} = r_{O3} = r_O$, divide the numerator and denominator by $r_O$:

$$\frac{v_Y}{v_P} = \frac{1}{2 + g_{m3}r_O} .$$

**Interpretation.** A voltage change at P drives a current through $r_{O3}$. As soon as Y starts to rise, $v_{gs3}$ becomes negative, and $M_3$'s controlled source removes almost all of that current. Only a fraction of about $1/(g_mr_O)$ of the drain change reaches the source. $M_3$ is a common-gate stage operated "backwards", from drain to source, where its gain is very small.

### Step 4 — Numerical value

$$\frac{\Delta V_Y}{\Delta V_P} = \frac{1}{2 + 84.5} = \frac{1}{86.5} = 0.0116 .$$

For $\Delta V_P = 1$ V:

$$\Delta V_Y = \frac{1\ \mathrm{V}}{86.5} = 11.6\ \mathrm{mV},$$

in the **same direction** as $\Delta V_P$. The simpler estimate $\Delta V_P/(g_{m3}r_{O3}) = 1\ \mathrm{V}/84.5 = 11.8$ mV is essentially the same.

### Step 5 — Cross-check with the cascode output resistance

The change in output current is the current through $r_{O2}$:

$$\Delta I_{out} = \frac{\Delta V_Y}{r_{O2}} = \frac{11.6\ \mathrm{mV}}{33.3\ \mathrm{k}\Omega} = 0.35\ \mu\mathrm{A} .$$

The cascode output resistance is $R_{out} = r_{O3} + r_{O2} + g_{m3}r_{O3}r_{O2} = 33.3\ \mathrm{k}\Omega\times(2 + 84.5) = 2.88\ \mathrm{M}\Omega$, which gives the same current: $1\ \mathrm{V}/2.88\ \mathrm{M}\Omega = 0.35\ \mu$A ✓.

Without the cascode, the full 1 V would sit across $r_{O2}$, changing the current by $1\ \mathrm{V}/33.3\ \mathrm{k}\Omega = 30\ \mu$A (10 %). With the cascode, $M_2$ sees only 11.6 mV, and the current changes by about 0.1 %.

### Result

$$\frac{\Delta V_Y}{\Delta V_P} = \frac{r_{O2}}{r_{O2} + r_{O3} + g_{m3}r_{O3}r_{O2}} = \frac{1}{2 + g_{m3}r_{O3}} = \frac{1}{86.5},$$

with $g_{m3} = 2.54$ mS and $r_{O2} = r_{O3} = 33.3\ \mathrm{k}\Omega$. So a 1-V change of $V_P$ changes $V_Y$ by **about 12 mV (11.6 mV)**, in the same direction.

**Common mistake.** Assuming no shielding and letting $V_Y$ follow $V_P$ (1 V), or splitting the change between two equal resistances (0.5 V). That treats $M_3$ as a plain resistor $r_{O3}$ and ignores its controlled source, which is what attenuates the change by $\approx g_mr_O$.

**Common mistake.** Claiming that $V_Y$ does not change at all. The attenuation is large but finite. A nonzero $\Delta V_Y$ is exactly what produces the small current change $\Delta V_Y/r_{O2}$, i.e. the finite output resistance of the cascode.

**Common mistake.** Attenuating by $(g_mr_O)^2$ (≈ 0.14 mV). Squared factors do appear in cascode results (for instance the gain of a cascode amplifier is about $(g_mr_O)^2$), but the path from P to Y passes through only one cascode device, $M_3$, so the attenuation is a single factor of about $g_mr_O$.
