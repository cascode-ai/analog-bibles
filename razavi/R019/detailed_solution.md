# Detailed solution - R019

**Approach.** $M_1$ is a PMOS whose gate is fixed at 1 V. The current in $R_1$ can only come from $V_{in}$ through $M_1$, so $V_{out} \le V_{in}$ and the $V_{in}$ node (the higher one) is the PMOS source. Compute $|V_{TH}|$ with the body effect (the n-well is at 3 V, above the source), find the turn-on point, then the saturation and triode regions.

### Step 1 — Source, drain and the body effect

From the figure:

- the gate of $M_1$ is held at $+1$ V;
- the upper diffusion terminal is driven by $V_{in}$ (0 to 3 V);
- the lower diffusion terminal is the output, loaded by $R_1$ to ground;
- the bulk (n-well) is at $V_{DD} = 3$ V.

$R_1$ draws $V_{out}/R_1 \ge 0$, supplied only through the channel from $V_{in}$, so $0 \le V_{out} \le V_{in}$. For a PMOS the **source is the higher terminal**: the $V_{in}$ node. The $V_{out}$ node is the drain.

Working with positive quantities:

$$
\begin{aligned}
V_{SG} &= V_{in} - 1,\\
V_{SD} &= V_{in} - V_{out},\\
V_{BS} &= 3 - V_{in} \ \ (\ge 0, \text{ reverse bias of the source–well junction}).
\end{aligned}
$$

**Threshold magnitude with body effect** ($|V_{TH0}| = 0.8$ V, $\gamma = 0.4\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.8$ V, $\sqrt{0.8} = 0.8944$):

$$|V_{TH}| = 0.8 + 0.4\left(\sqrt{0.8 + 3 - V_{in}} - 0.8944\right) = 0.8 + 0.4\left(\sqrt{3.8 - V_{in}} - 0.8944\right)\ \mathrm{V}.$$

As $V_{in}$ rises toward 3 V the source approaches the well potential and $|V_{TH}|$ **falls** toward 0.8 V; at low $V_{in}$ it is larger (for example 0.98 V at $V_{in} = 2$ V).

Symbols: $\beta_p = \mu_pC_{ox}W/L$, $V_{ov} = V_{SG} - |V_{TH}|$.

### Step 2 — Turn-on point

$M_1$ conducts when $V_{SG} > |V_{TH}|$:

$$V_{in} - 1 = 0.8 + 0.4\sqrt{3.8 - V_{in}} - 0.4\times0.8944 .$$

Substitute $w = \sqrt{3.8 - V_{in}}$, so $V_{in} = 3.8 - w^2$:

$$
\begin{aligned}
3.8 - w^2 - 1 &= 0.8 + 0.4w - 0.3578\\
2.8 - w^2 &= 0.4422 + 0.4w\\
w^2 + 0.4w - 2.3578 &= 0\\
w &= \frac{-0.4 + \sqrt{0.16 + 9.4311}}{2} = \frac{-0.4 + 3.0969}{2} = 1.3485\\
V_{in} &= 3.8 - 1.3485^2 = 3.8 - 1.8184 = 1.98\ \mathrm{V}.
\end{aligned}
$$

Check: $|V_{TH}| = 0.8 + 0.4(1.3485 - 0.8944) = 0.98$ V and $V_{SG} = 1.98 - 1 = 0.98$ V. ✓

So **$V_{out} = 0$ for $0 \le V_{in} \le 1.98$ V**. Without body effect the device would turn on at $1 + 0.8 = 1.8$ V; the well sitting above the source raises $|V_{TH}|$ and delays turn-on by about 0.18 V.

### Step 3 — Saturation region

Saturation requires $V_{SD} \ge V_{SG} - |V_{TH}|$:

$$
\begin{aligned}
V_{in} - V_{out} &\ge V_{in} - 1 - |V_{TH}|\\
V_{out} &\le 1 + |V_{TH}| .
\end{aligned}
$$

The drain may rise at most $|V_{TH}|$ above the gate, i.e. to about 1.8–1.98 V. Just after turn-on $V_{out}$ is small, so $M_1$ is saturated. KCL at the output node:

$$\frac{V_{out}}{R_1} = \tfrac12\beta_p\,(V_{SG} - |V_{TH}|)^2 \quad\Longrightarrow\quad V_{out} = \tfrac12\beta_pR_1\,(V_{in} - 1 - |V_{TH}|)^2 .$$

Here the right side depends on $V_{in}$ only (the source is the input, the gate is fixed): this is a **common-gate** configuration, not a follower. $V_{out}$ therefore rises **quadratically** from zero. It rises slightly faster than a pure parabola, because the overdrive grows at the rate $1 + \gamma/(2\sqrt{3.8 - V_{in}}) \approx 1.15$–$1.22$ per volt as $|V_{TH}|$ falls.

**At the top of the range** ($V_{in} = 3$ V): $V_{BS} = 0$, so $|V_{TH}| = 0.8$ V and

$$V_{ov} = 3 - 1 - 0.8 = 1.2\ \mathrm{V}, \qquad V_{out} = \tfrac12\beta_pR_1(1.2\ \mathrm{V})^2 = 0.72\,\beta_pR_1\ \mathrm{V^2},$$

with $\beta_p$ in A/V² and $R_1$ in Ω. This holds only if $0.72\,\beta_pR_1 \le 1 + 0.8 = 1.8$ V, i.e. $\beta_pR_1 \le 2.5\ \mathrm{V^{-1}}$.

### Step 4 — Triode region (large $\beta_pR_1$)

If $\beta_pR_1$ is large enough, $V_{out}$ reaches $1 + |V_{TH}|$ before $V_{in} = 3$ V and $M_1$ enters triode. Then

$$\frac{V_{out}}{R_1} = \beta_p\left[(V_{in} - 1 - |V_{TH}|)(V_{in} - V_{out}) - \tfrac12(V_{in} - V_{out})^2\right].$$

The device now behaves as a resistor $R_{on} \approx 1/[\beta_p(V_{in} - 1 - |V_{TH}|)]$ between $V_{in}$ and the output, and $V_{out} \approx V_{in}R_1/(R_1 + R_{on})$: the output **approaches $V_{in}$** from below, more closely as $\beta_pR_1$ grows. It never exceeds $V_{in}$.

### Step 5 — Numerical curves

Point-by-point threshold values:

$$
\begin{aligned}
V_{in} = 2.2\ \mathrm{V}:&\quad |V_{TH}| = 0.8 + 0.4(\sqrt{1.6} - 0.8944) = 0.8 + 0.4\times0.3705 = 0.948\ \mathrm{V},\ V_{ov} = 1.2 - 0.948 = 0.252\ \mathrm{V},\\
V_{in} = 2.5\ \mathrm{V}:&\quad |V_{TH}| = 0.8 + 0.4(\sqrt{1.3} - 0.8944) = 0.8 + 0.4\times0.2458 = 0.898\ \mathrm{V},\ V_{ov} = 1.5 - 0.898 = 0.602\ \mathrm{V},\\
V_{in} = 3.0\ \mathrm{V}:&\quad |V_{TH}| = 0.800\ \mathrm{V},\ V_{ov} = 1.200\ \mathrm{V}.
\end{aligned}
$$

For $\beta_pR_1 = 1\ \mathrm{V^{-1}}$, the output is $V_{out} = \tfrac12V_{ov}^2$: 0.032 V, 0.181 V and 0.72 V at these three points; the device stays saturated throughout.

For $\beta_pR_1 = 10\ \mathrm{V^{-1}}$, saturation gives $V_{out} = 5V_{ov}^2$: 0.317 V at 2.2 V and 1.81 V at 2.5 V. At 2.5 V this is just below $1 + |V_{TH}| = 1.90$ V. The triode boundary, where $5V_{ov}^2 = 1 + |V_{TH}|$, falls at $V_{in} \approx 2.51$ V; above it the triode equation gives 2.17 V at 2.6 V and 2.74 V at 3 V.

| $V_{in}$ (V) | $V_{out}$, $\beta_pR_1 = 1\ \mathrm{V^{-1}}$ | $V_{out}$, $\beta_pR_1 = 10\ \mathrm{V^{-1}}$ |
|---|---|---|
| 0 – 1.98 | 0 | 0 |
| 2.1 | 0.009 | 0.093 |
| 2.2 | 0.032 | 0.317 |
| 2.3 | 0.068 | 0.677 |
| 2.4 | 0.117 | 1.17 |
| 2.5 | 0.181 | 1.81 (edge of triode) |
| 2.6 | 0.259 | 2.17 (triode) |
| 2.8 | 0.459 | 2.49 (triode) |
| 3.0 | 0.720 | 2.74 (triode) |

**Shape.** Flat at zero up to 1.98 V, then a parabola-like rise (saturation). For small $\beta_pR_1$ it reaches only $0.72\beta_pR_1$ V at 3 V. For large $\beta_pR_1$ it bends over once $V_{out}$ passes about $1 + |V_{TH}| \approx 1.9$ V and then runs just below the line $V_{out} = V_{in}$.

### Result

- The source of the PMOS is the $V_{in}$ node (higher potential): $V_{SG} = V_{in} - 1$, $V_{BS} = 3 - V_{in}$, and $|V_{TH}| = 0.8 + 0.4(\sqrt{3.8 - V_{in}} - \sqrt{0.8})$.
- **Turn-on** where $V_{in} - 1 = |V_{TH}|$: **$V_{in} \approx 1.98$ V** ($|V_{TH}| \approx 0.98$ V there; it would be 1.8 V without body effect). $V_{out} = 0$ below.
- **Saturation** while $V_{out} < 1 + |V_{TH}|$ (drain at most $|V_{TH}|$ above the gate): $V_{out} = \tfrac12\beta_pR_1(V_{in} - 1 - |V_{TH}|)^2$, a quadratic rise. At $V_{in} = 3$ V the overdrive is 1.2 V ($|V_{TH}| = 0.8$ V), so $V_{out} = 0.72\,\beta_pR_1$ (V), unless triode limits it.
- **Triode** if $\beta_pR_1$ is large enough that $V_{out}$ would exceed $1 + |V_{TH}| \approx 1.8$–$1.9$ V: $V_{out}$ then approaches $V_{in}$. Always $V_{out} \le V_{in}$.

**Common mistake.** Treating $M_1$ as an NMOS, or taking the $V_{out}$ node as the source. For a PMOS the source is the higher terminal; the output, pulled down by $R_1$, is always below $V_{in}$, so the source is the input node and $V_{SG} = V_{in} - 1$.

**Common mistake.** Predicting a nonzero output at small $V_{in}$. With the gate at 1 V, the source must rise above $1 + |V_{TH}|$ before any channel forms, so nothing happens until $V_{in} \approx 1.98$ V.

**Common mistake.** Ignoring the body effect and placing turn-on at 1.8 V. The well is at 3 V while the source is near 2 V, so $|V_{TH}|$ is raised to about 0.98 V at turn-on.
