# Detailed solution - R134

**Approach.** $M_2$ has a fixed gate–source voltage, so its edge of saturation corresponds to one output voltage, $V_{out} = V_b + |V_{THP}|$. Its current there is its saturation current, which $M_1$ must also carry; that fixes $M_1$'s overdrive and the input level. Check that $M_1$ is saturated there and compute the gain with both devices saturated, using $r_O$ for the output resistances.

### Step 1 — Device constants and the fixed overdrive of $M_2$

Each source is tied to its own bulk, so there is no body effect. With $\beta = \mu C_{ox}W/L$:

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2},\qquad \beta_2 = (38.4\ \mu\mathrm{A/V^2})(8.8) = 0.338\ \mathrm{mA/V^2}.$$

$V_{SG2} = V_{DD} - V_b = 3$ V, so

$$V_{ov2} = V_{SG2} - |V_{THP}| = 3 - 0.8 = 2.2\ \mathrm{V}.$$

### Step 2 — The edge-of-saturation condition for $M_2$

At the edge, $V_{SD2} = V_{SG2} - |V_{THP}|$:

$$V_{DD} - V_{out} = V_{DD} - V_b - |V_{THP}|\quad\Longrightarrow\quad V_{out} = V_b + |V_{THP}| = 0 + 0.8 = 0.8\ \mathrm{V}:$$

the drain is one threshold *above* the gate. For $V_{out} > 0.8$ V (the normal, gain-of-5 range) $M_2$ is in triode; below 0.8 V it is saturated.

### Step 3 — Current at the edge

With $\lambda$ neglected for bias, the triode and saturation formulas agree at the edge:

$$I_D = \tfrac12\beta_2V_{ov2}^2 = \tfrac12(0.338\ \mathrm{mA/V^2})(2.2\ \mathrm{V})^2 = \tfrac12(0.338)(4.84)\ \mathrm{mA} = 0.818\ \mathrm{mA}.$$

### Step 4 — Input level, and the region of $M_1$

$M_1$ carries the same 0.818 mA; assuming it is saturated,

$$V_{ov1} = \sqrt{\frac{2I_D}{\beta_1}} = \sqrt{\frac{2(0.818\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.3051\ \mathrm{V^2}} = 0.552\ \mathrm{V},$$

$$V_{in} = V_{TH} + V_{ov1} = 0.7 + 0.552 = 1.252\ \mathrm{V}.$$

$V_{DS1} = V_{out} = 0.8$ V $\ge V_{ov1} = 0.552$ V, so $M_1$ is saturated, with a 0.25-V margin ✓.

### Step 5 — Small-signal model and gain

$M_1$ is $g_{m1}v_{in}$ from out to ground with $r_{O1}$. $M_2$'s gate and source are at ac ground, so only $r_{O2}$ remains. At the edge this is the right model: approaching from the triode side, $M_2$'s small-signal conductance $\beta_2(V_{ov2} - V_{SD2})$ shrinks to zero as $V_{SD2} \to 2.2$ V, leaving only $1/r_{O2}$. KCL at the output:

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0\quad\Longrightarrow\quad A_v = -g_{m1}\,(r_{O1}\parallel r_{O2}).$$

At $I_D = 0.818$ mA:

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

At the design point (0.5 mA, $V_{out} \approx 2.17$ V), $M_2$ is a 2.16-kΩ (small-signal) triode resistor, giving the gain of 5. As $V_{in}$ rises toward 1.25 V, $M_2$'s incremental resistance rises sharply, until only $r_{O2}$ remains, so the gain reaches about −12 (unbounded for $\lambda = 0$). With $\lambda$ neglected for the bias, both devices are saturated only along a vertical segment of the transfer curve at $V_{in} = 1.252$ V, from $V_{out} = 0.8$ V down to $V_{out} = V_{ov1} = 0.55$ V, where $M_1$ enters triode. The gain of this stage is thus very nonlinear: it is 5 only near the design point.

### Result

$M_2$ is at the edge of saturation when

$$V_{out} = V_b + |V_{THP}| = 0.8\ \mathrm{V},\quad I_D = \tfrac12\beta_2(2.2\ \mathrm{V})^2 \approx 0.818\ \mathrm{mA},\quad V_{in} = 0.7 + 0.552 \approx 1.25\ \mathrm{V},$$

with $M_1$ saturated ($V_{DS1} = 0.8$ V $> V_{ov1} = 0.55$ V). The small-signal gain there is

$$A_v = -g_{m1}(r_{O1}\parallel r_{O2}) = -(2.96\ \mathrm{mS})(4.08\ \mathrm{k\Omega}) \approx -12,$$

far above the design value of 5 (and unbounded for $\lambda = 0$).

**Common mistake.** Writing the PMOS edge condition as $V_{out} = V_b - |V_{THP}|$ or $V_{SD2} = V_{SG2}$. The edge is $V_{SD} = V_{SG} - |V_{THP}|$, which places the drain one $|V_{THP}|$ *above* the gate: $V_{out} = 0 + 0.8$ V.

**Common mistake.** Claiming that $M_1$ is in triode here. At 0.818 mA its overdrive is 0.552 V, below its $V_{DS} = 0.8$ V.

**Common mistake.** Keeping the gain at about 5, or computing it with a triode resistance for $M_2$. At the edge its triode conductance is zero, so its small-signal resistance is $r_{O2} = 6.1$ kΩ and the gain is about −12.
