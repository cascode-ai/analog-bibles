# Detailed solution - R085

**Approach.** Use KCL at the output to find the current in the diode-connected PMOS $M_2$ (the current source $I_S$ supplies part of $M_1$'s current). The edge-of-triode condition for $M_1$ fixes $V_{out}$, which in turn fixes $|V_{GS2}|$; the square law then gives $(W/L)_2$. Finally, in the small-signal model the ideal current source is an open circuit, so $A_v = -g_{m1}/g_{m2}$.

### Step 1 — The circuit

Reading the figure:

- **$M_1$** (NMOS): gate at $V_{in}$, source at ground, drain at $V_{out}$. It is a common-source device carrying the drain current $I_1 = 1$ mA.
- **$M_2$** (PMOS): source at $V_{DD} = 3$ V, gate tied to its drain at $V_{out}$. It is a **diode-connected** load with source–gate voltage $V_{SG2} = V_{DD} - V_{out}$.
- **$I_S$** $= 0.75$ mA: an ideal current source from $V_{DD}$ into the output node, in parallel with $M_2$. It is a "bleeding" (current-steering) source.

**Body effect.** $M_1$'s bulk is at ground, the same as its source; $M_2$'s bulk is at $V_{DD}$, the same as its source. So $V_{SB} = 0$ for both devices and their thresholds are $V_{TH1} = 0.7$ V and $|V_{TH2}| = 0.8$ V. With $\lambda = 0$ there is no channel-length modulation either.

### Step 2 — Current in $M_2$ (KCL at the output)

No current flows out of the $V_{out}$ terminal. **KCL at the output node**: the current $I_1$ drawn by $M_1$ is supplied partly by $I_S$ and partly by $M_2$:

$$
\begin{aligned}
I_1 &= I_S + |I_{D2}|\\
|I_{D2}| &= I_1 - I_S = 1\ \mathrm{mA} - 0.75\ \mathrm{mA} = 0.25\ \mathrm{mA}.
\end{aligned}
$$

$M_2$ carries only a quarter of $M_1$'s current.

### Step 3 — $M_1$: overdrive and the edge of triode

Current factor and overdrive of $M_1$ from the **square-law saturation current** $I_1 = \frac12\beta_1V_{ov1}^2$, with $\beta_1 = \mu_nC_{ox}(W/L)_1$ and $V_{ov1} = V_{GS1} - V_{TH1}$:

$$
\begin{aligned}
\left(\frac{W}{L}\right)_1 &= \frac{20}{0.5} = 40,\\
\beta_1 &= (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2},\\
V_{ov1} &= \sqrt{\frac{2I_1}{\beta_1}} = \sqrt{\frac{2\,(1\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.3731\ \mathrm{V^2}} = 0.611\ \mathrm{V}.
\end{aligned}
$$

**Edge of triode:** $V_{DS1} = V_{GS1} - V_{TH1}$, i.e.

$$V_{out} = V_{ov1} = 0.611\ \mathrm{V} .$$

The corresponding input voltage is $V_{in} = V_{TH1} + V_{ov1} = 0.7 + 0.611 = 1.311$ V. $M_1$'s current is set by $V_{in}$ alone, but the output voltage depends on how the load is sized. That is why we can choose $(W/L)_2$ to put $V_{out}$ exactly at 0.611 V.

### Step 4 — Size $M_2$

**Source–gate voltage of $M_2$:**

$$V_{SG2} = V_{DD} - V_{out} = 3\ \mathrm{V} - 0.611\ \mathrm{V} = 2.389\ \mathrm{V} .$$

**Overdrive of $M_2$:**

$$|V_{ov2}| = V_{SG2} - |V_{TH2}| = 2.389\ \mathrm{V} - 0.8\ \mathrm{V} = 1.589\ \mathrm{V} .$$

**Region.** $M_2$ is diode-connected, so $V_{SD2} = V_{SG2} > V_{SG2} - |V_{TH2}|$ and it is saturated.

**Square law for the PMOS** (it must use $\mu_pC_{ox}$):

$$|I_{D2}| = \frac12\mu_pC_{ox}\left(\frac{W}{L}\right)_2|V_{ov2}|^2 .$$

Solve for the aspect ratio:

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{2|I_{D2}|}{\mu_pC_{ox}|V_{ov2}|^2} = \frac{2\,(0.25\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(1.589\ \mathrm{V})^2}\\
&= \frac{0.5\ \mathrm{mA}}{(38.4\ \mu\mathrm{A/V^2})(2.525\ \mathrm{V^2})} = \frac{500\ \mu\mathrm{A}}{96.98\ \mu\mathrm{A}} = 5.16 .
\end{aligned}
$$

With $L = 0.5$ μm, for example, $W_2 \approx 2.6$ μm.

### Step 5 — Small-signal model

With $\lambda = 0$ and no body effect, each transistor is just a voltage-controlled current source. $V_{DD}$ is an AC ground. The one node of interest is $out$:

- **$M_1$:** current source $g_{m1}v_{in}$ from $out$ to ground.
- **$M_2$:** source at AC ground, gate and drain at $out$. Its source–gate voltage is $v_{sg2} = 0 - v_{out} = -v_{out}$, so it delivers a current $g_{m2}v_{sg2} = -g_{m2}v_{out}$ from AC ground into $out$. This is equivalent to a resistance $1/g_{m2}$ to ground.
- **$I_S$:** an ideal current source has a constant current whatever the voltage across it, so its small-signal current is zero: it is an **open circuit**.

<!-- diagram: diagram-01.cir -->

**KCL at $out$**: current supplied by $M_2$ = current drawn by $M_1$:

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2}} .
\end{aligned}
$$

### Step 6 — Numerical gain

Use $g_m = 2I_D/V_{ov}$ for each device, with its own current:

$$
\begin{aligned}
g_{m1} &= \frac{2I_1}{V_{ov1}} = \frac{2\,(1\ \mathrm{mA})}{0.611\ \mathrm{V}} = 3.27\ \mathrm{mS},\\
g_{m2} &= \frac{2|I_{D2}|}{|V_{ov2}|} = \frac{2\,(0.25\ \mathrm{mA})}{1.589\ \mathrm{V}} = 0.315\ \mathrm{mS},\\
A_v &= -\frac{3.27\ \mathrm{mS}}{0.315\ \mathrm{mS}} = -10.4 .
\end{aligned}
$$

**Check with $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$:** $g_{m2} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(5.16)(0.25\ \mathrm{mA})} = \sqrt{9.9\times10^{-8}}\ \mathrm{A/V} = 0.315$ mS, the same.

**Why the bleeding source helps.** Writing the gain as

$$|A_v| = \frac{2I_1/V_{ov1}}{2|I_{D2}|/|V_{ov2}|} = \frac{I_1}{|I_{D2}|}\cdot\frac{|V_{ov2}|}{V_{ov1}} = 4\times\frac{1.589}{0.611} = 10.4$$

shows the two factors. The voltage ratio $|V_{ov2}|/V_{ov1} = 2.6$ is fixed by the bias voltages. The current ratio $I_1/|I_{D2}| = 4$ comes from $I_S$: without it, $M_2$ would carry the full 1 mA at the same overdrive and the gain would be only about $-2.6$. Removing current from the diode-connected load lowers its $g_m$, raising its small-signal resistance $1/g_{m2}$ without using up more voltage headroom.

### Result

$$\left(\frac{W}{L}\right)_2 = \frac{2(I_1 - I_S)}{\mu_pC_{ox}(V_{DD} - V_{ov1} - |V_{TH2}|)^2} \approx 5.16 \quad(\text{e.g. } 2.6/0.5),$$

with $V_{ov1} = V_{out} = 0.611$ V and $V_{in} \approx 1.311$ V. The small-signal gain is

$$A_v = -\frac{g_{m1}}{g_{m2}} = -\frac{3.27\ \mathrm{mS}}{0.315\ \mathrm{mS}} \approx -10.4 .$$

**Common mistake.** Giving $M_2$ the full 1 mA (or 0.75 mA). KCL at the output says $M_2$ carries only $I_1 - I_S = 0.25$ mA, and both its size and its $g_m$ must be computed at this current.

**Common mistake.** Sizing the PMOS with $\mu_nC_{ox}$ or with $V_{TH} = 0.7$ V. $M_2$ is a PMOS device: use $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ and $|V_{TH2}| = 0.8$ V. No body effect applies, since its source and bulk are both at $V_{DD}$.

**Common mistake.** Using the wrong edge condition ($V_{out} = V_{TH}$ or $V_{out} = V_{in}$). $M_1$ is at the edge of triode when $V_{DS1} = V_{GS1} - V_{TH1}$, i.e. $V_{out} = V_{ov1} = 0.611$ V. Also, the ideal $I_S$ must be left out of the small-signal model (open circuit), not treated as a resistor.
