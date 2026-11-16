# Detailed solution - R137

**Approach.** In a source follower the level shift is just the gate–source voltage of the follower device: $V_{in} - V_{out} = V_{GS1}$. The current source $M_2$ has its own $V_{GS2}$ (set by $V_b$), which is fixed by the given difference $V_{GS2} - V_{GS1}$. Knowing both gate–source voltages and the common current, the square law gives each aspect ratio directly.

### Step 1 — Reading the circuit

From the figure:

- $M_1$: NMOS follower, drain at $V_{DD} = 3$ V, gate at $V_{in}$, source at $V_{out}$.
- $M_2$: NMOS current source, gate at the bias $V_b$, source at ground, drain at $V_{out}$.

Both carry the same current: $I_{D1} = I_{D2} = 0.5$ mA. With $\lambda = \gamma = 0$, the threshold of both devices is $V_{TH} = 0.7$ V (no body effect for $M_1$, even though its source is not at ground), and the square law has no $(1 + \lambda V_{DS})$ factor.

### Step 2 — Gate–source voltages

**$M_1$.** Its gate is at $V_{in}$ and its source at $V_{out}$, so

$$V_{GS1} = V_{in} - V_{out} = 1\ \mathrm{V}.$$

**$M_2$.** From the given difference:

$$V_{GS2} = V_{GS1} + 0.5\ \mathrm{V} = 1.5\ \mathrm{V}.$$

Since the source of $M_2$ is at ground, this also fixes the bias: $V_b = V_{GS2} = 1.5$ V.

**Overdrive voltages** ($V_{ov} = V_{GS} - V_{TH}$):

$$
\begin{aligned}
V_{ov1} &= 1 - 0.7 = 0.3\ \mathrm{V},\\
V_{ov2} &= 1.5 - 0.7 = 0.8\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Aspect ratio of $M_1$

Square-law saturation current: $I_D = \tfrac12\mu_nC_{ox}\frac{W}{L}V_{ov}^2$. Solving for $W/L$:

$$\frac{W}{L} = \frac{2I_D}{\mu_nC_{ox}V_{ov}^2}.$$

For $M_1$:

$$\left(\frac{W}{L}\right)_1 = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(0.09\ \mathrm{V^2})} = \frac{1000\ \mu\mathrm{A}}{12.06\ \mu\mathrm{A}} = 82.9 .$$

For example, $W/L = 41.5\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$.

### Step 4 — Aspect ratio of $M_2$

$$\left(\frac{W}{L}\right)_2 = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(0.64\ \mathrm{V^2})} = \frac{1000\ \mu\mathrm{A}}{85.76\ \mu\mathrm{A}} = 11.7 .$$

For example, $W/L = 5.83\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$.

Only the ratios are determined. The channel length is a free choice (0.5 μm is used here as an example); doubling both $W$ and $L$ gives the same bias.

### Step 5 — Checks of the operating regions

**$M_2$ saturated** requires $V_{DS2} = V_{out} \ge V_{ov2} = 0.8$ V, i.e.

$$V_{in} = V_{out} + 1\ \mathrm{V} \ge 1.8\ \mathrm{V}.$$

For lower inputs $M_2$ enters triode, its current falls below 0.5 mA, and the 1-V shift is no longer maintained.

**$M_1$ saturated** requires $V_{DS1} = V_{DD} - V_{out} \ge V_{ov1} = 0.3$ V, i.e. $V_{out} \le 2.7$ V, i.e. $V_{in} \le 3.7$ V. This always holds for inputs within the supply.

So the level shifter works as designed for $1.8\ \mathrm{V} \le V_{in} \le 3$ V. Because $\gamma = 0$ and $\lambda = 0$, the shift is exactly 1 V everywhere in this range: the current is fixed by $M_2$, so $V_{GS1}$ is fixed.

**Why the two devices are so different in size.** Both carry 0.5 mA, but $M_1$ has only 0.3 V of overdrive while $M_2$ has 0.8 V. Since $I_D \propto (W/L)V_{ov}^2$, $M_1$ must be $(0.8/0.3)^2 = 7.1$ times wider relative to its length: $82.9/11.7 = 7.1$ ✓.

### Step 6 — Verification of the design

**Currents.** Substituting the sizes back into the square law:

$$
\begin{aligned}
I_{D1} &= \tfrac12(134\ \mu\mathrm{A/V^2})(82.9)(0.3\ \mathrm{V})^2 = \tfrac12(134)(82.9)(0.09)\ \mu\mathrm{A} = 0.500\ \mathrm{mA},\\
I_{D2} &= \tfrac12(134\ \mu\mathrm{A/V^2})(11.66)(0.8\ \mathrm{V})^2 = \tfrac12(134)(11.66)(0.64)\ \mu\mathrm{A} = 0.500\ \mathrm{mA}.
\end{aligned}
$$

Both match the required 0.5 mA ✓.

**Small-signal behaviour.** With $\lambda = \gamma = 0$, $M_2$ is an ideal current source, so $M_1$'s current, and hence its $V_{GS1}$, cannot change. The follower then has a small-signal gain of exactly 1, which is why the shift is the same at every input level. Its output resistance is $1/g_{m1}$, with
$$g_{m1} = \frac{2I_D}{V_{ov1}} = \frac{2(0.5\ \mathrm{mA})}{0.3\ \mathrm{V}} = 3.33\ \mathrm{mS},\qquad \frac{1}{g_{m1}} = 300\ \Omega .$$
The wide $M_1$ (small overdrive) therefore also gives the level shifter a low output resistance.

### Result

$$\left(\frac{W}{L}\right)_1 = \frac{2I_D}{\mu_nC_{ox}(V_{GS1} - V_{TH})^2} \approx 82.9\ \ (\text{e.g. } 41.5/0.5),\qquad \left(\frac{W}{L}\right)_2 = \frac{2I_D}{\mu_nC_{ox}(V_{GS2} - V_{TH})^2} \approx 11.7\ \ (\text{e.g. } 5.8/0.5),$$

with $V_{GS1} = 1$ V, $V_{GS2} = V_b = 1.5$ V. $M_2$ stays saturated for $V_{in} \ge 1.8$ V.

**Common mistake.** Reading the given condition as $V_{GS2} = 0.5$ V, or as $V_{GS1} - V_{GS2} = 0.5$ V. The problem states $V_{GS2} - V_{GS1} = 0.5$ V, and $V_{GS1}$ is the level shift (1 V), so $V_{GS2} = 1.5$ V. A $V_{GS}$ of 0.5 V would even be below the threshold.

**Common mistake.** Using $V_{GS}$ instead of the overdrive $V_{GS} - V_{TH}$ in the square law, e.g. $(W/L)_1 = 2I_D/(\mu_nC_{ox}\cdot1^2) = 7.5$. The current depends on how far $V_{GS}$ is above the threshold: 0.3 V for $M_1$, not 1 V.

**Common mistake.** Dropping the factor $\tfrac12$ in $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, which halves both ratios (41.5 and 5.8), or using it twice, which doubles them. Use $W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2)$.
