# Detailed solution - R134

**Approach.** The PMOS load $M_2$ has a fixed gate–source voltage, so its edge of saturation corresponds to one specific output voltage, $V_{out} = V_b + |V_{THP}|$. At that point its current is its saturation current, which $M_1$ must also carry. That fixes $M_1$'s overdrive and hence the input level. We check that $M_1$ is saturated there and compute the gain with both devices saturated, using $r_O$ for the output resistances.

### Step 1 — The circuit and the fixed overdrive of $M_2$

From the figure: $M_1$ (NMOS, gate $V_{in}$, source at ground, drain at $V_{out}$) and $M_2$ (PMOS, source at $V_{DD} = 3$ V, gate at $V_b = 0$, drain at $V_{out}$). Each source is tied to its own bulk, so there is no body effect.

Device constants ($\beta = \mu C_{ox}W/L$):

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2},\qquad \beta_2 = (38.4\ \mu\mathrm{A/V^2})(8.8) = 0.338\ \mathrm{mA/V^2}.$$

$M_2$'s source–gate voltage is fixed at $V_{SG2} = V_{DD} - V_b = 3$ V, so its overdrive is fixed:

$$V_{ov2} = V_{SG2} - |V_{THP}| = 3 - 0.8 = 2.2\ \mathrm{V}.$$

### Step 2 — The edge-of-saturation condition for $M_2$

A PMOS is saturated when $V_{SD} \ge V_{SG} - |V_{THP}|$. At the edge:

$$V_{SD2} = V_{SG2} - |V_{THP}|\quad\Longrightarrow\quad V_{DD} - V_{out} = V_{DD} - V_b - |V_{THP}|\quad\Longrightarrow\quad V_{out} = V_b + |V_{THP}| = 0 + 0.8 = 0.8\ \mathrm{V}.$$

Equivalently, the drain is one threshold *above* the gate. For $V_{out} > 0.8$ V (the normal, gain-of-5 operating range), $V_{SD2} < 2.2$ V and $M_2$ is in triode. For $V_{out} < 0.8$ V it is saturated.

### Step 3 — Current at the edge

At the edge, both the triode and the saturation formulas give the same current (with $\lambda$ neglected for bias):

$$I_D = \tfrac12\beta_2V_{ov2}^2 = \tfrac12(0.338\ \mathrm{mA/V^2})(2.2\ \mathrm{V})^2 = \tfrac12(0.338)(4.84)\ \mathrm{mA} = 0.818\ \mathrm{mA}.$$

### Step 4 — Input level, and the region of $M_1$

$M_1$ carries the same 0.818 mA. Assuming it is saturated (checked below), its overdrive follows from the square law:

$$V_{ov1} = \sqrt{\frac{2I_D}{\beta_1}} = \sqrt{\frac{2(0.818\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.3051\ \mathrm{V^2}} = 0.552\ \mathrm{V}.$$

The input level is

$$V_{in} = V_{TH} + V_{ov1} = 0.7 + 0.552 = 1.252\ \mathrm{V}.$$

**Check that $M_1$ is saturated:** $V_{DS1} = V_{out} = 0.8$ V $\ge V_{ov1} = 0.552$ V ✓. The margin is 0.25 V, so $M_1$ is comfortably saturated when $M_2$ reaches its edge.

### Step 5 — Small-signal model and gain

At this point both transistors are (at least at the edge of being) saturated:

- **$M_1$**: a current $g_{m1}v_{in}$ from out to ground, in parallel with $r_{O1}$.
- **$M_2$**: its gate and source are at ac ground ($v_{sg2} = 0$), so its controlled source is zero and only $r_{O2}$, from out to ac ground, remains.

A note on the edge: from the triode side, $M_2$'s small-signal conductance $\beta_2(V_{ov2} - V_{SD2})$ shrinks to zero as $V_{SD2} \to 2.2$ V. What remains is the channel-length-modulation conductance $1/r_{O2}$. So the saturation model with $r_{O2}$ is the right one at the edge.

KCL at the output:

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0\quad\Longrightarrow\quad A_v = -g_{m1}\,(r_{O1}\parallel r_{O2}).$$

**Numbers** at $I_D = 0.818$ mA:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\beta_1I_D} = \sqrt{2(5.36\ \mathrm{mA/V^2})(0.818\ \mathrm{mA})} = \sqrt{8.77\times10^{-6}}\ \mathrm{A/V} = 2.96\ \mathrm{mS},\\
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.818\ \mathrm{mA})} = 12.2\ \mathrm{k\Omega},\\
r_{O2} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.818\ \mathrm{mA})} = 6.11\ \mathrm{k\Omega},\\
r_{O1}\parallel r_{O2} &= \frac{(12.2)(6.11)}{12.2 + 6.11}\ \mathrm{k\Omega} = 4.08\ \mathrm{k\Omega},\\
A_v &= -(2.96\ \mathrm{mS})(4.08\ \mathrm{k\Omega}) \approx -12.1 .
\end{aligned}
$$

### Step 6 — Interpretation

At the design point (0.5 mA, $V_{out} \approx 2.17$ V), $M_2$ is a triode resistor of 2.16 kΩ (small-signal), giving the gain of 5. As $V_{in}$ rises toward 1.25 V, $M_2$ moves toward saturation, and its incremental resistance rises sharply. In saturation only $r_{O2}$ remains. At the edge, the gain has therefore risen to about −12, set by the transistors' output resistances, and it would be unbounded for $\lambda = 0$. With $\lambda$ neglected for the bias, both devices remain saturated only along a vertical segment of the transfer curve at $V_{in} = 1.252$ V, from $V_{out} = 0.8$ V down to $V_{out} = V_{ov1} = 0.55$ V, where $M_1$ enters triode.

This shows that the gain of this stage is very nonlinear: it is 5 only near the design point and changes strongly with the output level.

### Result

$M_2$ is at the edge of saturation when

$$V_{out} = V_b + |V_{THP}| = 0.8\ \mathrm{V},\quad I_D = \tfrac12\beta_2(2.2\ \mathrm{V})^2 \approx 0.818\ \mathrm{mA},\quad V_{in} = 0.7 + 0.552 \approx 1.25\ \mathrm{V},$$

with $M_1$ saturated ($V_{DS1} = 0.8$ V $> V_{ov1} = 0.55$ V). The small-signal gain there is

$$A_v = -g_{m1}(r_{O1}\parallel r_{O2}) = -(2.96\ \mathrm{mS})(4.08\ \mathrm{k\Omega}) \approx -12,$$

far above the design value of 5 (and unbounded for $\lambda = 0$).

**Common mistake.** Writing the PMOS edge condition as $V_{out} = V_b - |V_{THP}|$ or as $V_{SD2} = V_{SG2}$. For a PMOS the edge is $V_{SD} = V_{SG} - |V_{THP}|$, which places the drain one $|V_{THP}|$ *above* the gate: $V_{out} = 0 + 0.8$ V.

**Common mistake.** Claiming that $M_1$ is in triode at this point. With 0.818 mA its overdrive is 0.552 V, below its $V_{DS} = 0.8$ V, so it is saturated.

**Common mistake.** Keeping the gain at about 5, or computing it with a triode resistance for $M_2$. At the edge of saturation, the triode conductance of $M_2$ has dropped to zero, so its small-signal resistance is $r_{O2} = 6.1$ kΩ, and the gain is about −12.
