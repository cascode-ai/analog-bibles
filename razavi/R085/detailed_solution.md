# Detailed solution - R085

**Approach.** KCL at the output gives the current in the diode-connected PMOS $M_2$ (the source $I_S$ supplies part of $M_1$'s current). The edge-of-triode condition for $M_1$ fixes $V_{out}$, hence $|V_{GS2}|$, and the square law then gives $(W/L)_2$. In the small-signal model the ideal current source is an open circuit, so $A_v = -g_{m1}/g_{m2}$.

### Step 1 — Current in $M_2$ (KCL at the output)

$I_S$ feeds the output node in parallel with the diode-connected load $M_2$, so the current $I_1$ drawn by $M_1$ is

$$
\begin{aligned}
I_1 &= I_S + |I_{D2}|\\
|I_{D2}| &= I_1 - I_S = 1\ \mathrm{mA} - 0.75\ \mathrm{mA} = 0.25\ \mathrm{mA}.
\end{aligned}
$$

$M_2$ carries only a quarter of $M_1$'s current. Both bulks are tied to their sources, so there is no body effect: $V_{TH1} = 0.7$ V and $|V_{TH2}| = 0.8$ V.

### Step 2 — $M_1$: overdrive and the edge of triode

From $I_1 = \frac12\beta_1V_{ov1}^2$:

$$
\begin{aligned}
\left(\frac{W}{L}\right)_1 &= \frac{20}{0.5} = 40,\\
\beta_1 &= (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2},\\
V_{ov1} &= \sqrt{\frac{2I_1}{\beta_1}} = \sqrt{\frac{2\,(1\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.3731\ \mathrm{V^2}} = 0.611\ \mathrm{V}.
\end{aligned}
$$

At the edge of triode, $V_{DS1} = V_{GS1} - V_{TH1}$:

$$V_{out} = V_{ov1} = 0.611\ \mathrm{V} ,$$

with $V_{in} = V_{TH1} + V_{ov1} = 0.7 + 0.611 = 1.311$ V. $M_1$'s current is set by $V_{in}$ alone, while $V_{out}$ depends on the load size, which is why $(W/L)_2$ can place $V_{out}$ at exactly 0.611 V.

### Step 3 — Size $M_2$

$$V_{SG2} = V_{DD} - V_{out} = 3\ \mathrm{V} - 0.611\ \mathrm{V} = 2.389\ \mathrm{V}, \qquad |V_{ov2}| = V_{SG2} - |V_{TH2}| = 2.389\ \mathrm{V} - 0.8\ \mathrm{V} = 1.589\ \mathrm{V} .$$

$M_2$ is diode-connected, so it is saturated, and $|I_{D2}| = \frac12\mu_pC_{ox}(W/L)_2|V_{ov2}|^2$ gives

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{2|I_{D2}|}{\mu_pC_{ox}|V_{ov2}|^2} = \frac{2\,(0.25\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(1.589\ \mathrm{V})^2}\\
&= \frac{0.5\ \mathrm{mA}}{(38.4\ \mu\mathrm{A/V^2})(2.525\ \mathrm{V^2})} = \frac{500\ \mu\mathrm{A}}{96.98\ \mu\mathrm{A}} = 5.16 .
\end{aligned}
$$

With $L = 0.5$ μm, for example, $W_2 \approx 2.6$ μm.

### Step 4 — Small-signal model

With $\lambda = 0$ and no body effect, $V_{DD}$ is ac ground and the model has one node, $out$:

- **$M_1$:** current source $g_{m1}v_{in}$ from $out$ to ground.
- **$M_2$:** source at ac ground, gate and drain at $out$, so $v_{sg2} = -v_{out}$; it delivers $g_{m2}v_{sg2} = -g_{m2}v_{out}$ into $out$, i.e. a resistance $1/g_{m2}$ to ground.
- **$I_S$:** an ideal current source, so an **open circuit**.

<!-- diagram: diagram-01.cir -->

KCL at $out$:

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2}} .
\end{aligned}
$$

### Step 5 — Numerical gain

With $g_m = 2I_D/V_{ov}$ for each device at its own current:

$$
\begin{aligned}
g_{m1} &= \frac{2I_1}{V_{ov1}} = \frac{2\,(1\ \mathrm{mA})}{0.611\ \mathrm{V}} = 3.27\ \mathrm{mS},\\
g_{m2} &= \frac{2|I_{D2}|}{|V_{ov2}|} = \frac{2\,(0.25\ \mathrm{mA})}{1.589\ \mathrm{V}} = 0.315\ \mathrm{mS},\\
A_v &= -\frac{3.27\ \mathrm{mS}}{0.315\ \mathrm{mS}} = -10.4 .
\end{aligned}
$$

Check: $g_{m2} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(5.16)(0.25\ \mathrm{mA})} = \sqrt{9.9\times10^{-8}}\ \mathrm{A/V} = 0.315$ mS.

**Why the bleeding source helps.**

$$|A_v| = \frac{2I_1/V_{ov1}}{2|I_{D2}|/|V_{ov2}|} = \frac{I_1}{|I_{D2}|}\cdot\frac{|V_{ov2}|}{V_{ov1}} = 4\times\frac{1.589}{0.611} = 10.4 .$$

The voltage ratio $|V_{ov2}|/V_{ov1} = 2.6$ is fixed by the bias voltages; the current ratio $I_1/|I_{D2}| = 4$ comes from $I_S$. Without $I_S$, $M_2$ would carry the full 1 mA at the same overdrive and the gain would be only about $-2.6$: taking current away from the diode-connected load lowers $g_{m2}$ without using more headroom.

### Result

$$\left(\frac{W}{L}\right)_2 = \frac{2(I_1 - I_S)}{\mu_pC_{ox}(V_{DD} - V_{ov1} - |V_{TH2}|)^2} \approx 5.16 \quad(\text{e.g. } 2.6/0.5),$$

with $V_{ov1} = V_{out} = 0.611$ V and $V_{in} \approx 1.311$ V. The small-signal gain is

$$A_v = -\frac{g_{m1}}{g_{m2}} = -\frac{3.27\ \mathrm{mS}}{0.315\ \mathrm{mS}} \approx -10.4 .$$

**Common mistake.** Giving $M_2$ the full 1 mA (or 0.75 mA). KCL at the output says $M_2$ carries only $I_1 - I_S = 0.25$ mA, and both its size and its $g_m$ follow from this current.

**Common mistake.** Sizing the PMOS with $\mu_nC_{ox}$ or with $V_{TH} = 0.7$ V. Use $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ and $|V_{TH2}| = 0.8$ V.

**Common mistake.** Treating the ideal $I_S$ as a resistor in the small-signal model. It is an open circuit.
