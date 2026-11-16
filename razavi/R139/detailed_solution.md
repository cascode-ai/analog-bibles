# Detailed solution - R139

**Approach.** $V_b$ sets the voltage at node $X$ (the drain of $M_1$): $V_X = V_b - V_{GS2}$. As $V_b$ rises from 0, $M_2$ turns on, then $X$ rises and $M_1$ moves from deep triode into saturation. One small-signal model, with $M_1$ described by $g_{m1}$ and $g_{ds1}$ in any region and $M_2$ as a common-gate device, gives the gain everywhere; following $g_{m1}$ and $g_{ds1}$ as $V_b$ increases gives the shape of the curve.

### Step 1 — Fixed quantities

With $\lambda = \gamma = 0$ both thresholds are 0.7 V and saturated devices have infinite output resistance. $M_1$ has the fixed overdrive $A \equiv V_{in} - 0.7$ V and, when saturated, carries $I_1 = \tfrac12\beta_1A^2$ ($\beta_1 = \mu_nC_{ox}(W/L)_1$). $M_2$ has $V_{GS2} = V_b - V_X$, and $V_{out} = V_{DD} - I_DR_D$.

### Step 2 — $V_b \le 0.7$ V: no current, zero gain

If $M_2$ conducted, $V_X \ge 0$ would give $V_{GS2} \le V_b \le 0.7$ V, below threshold, a contradiction. So $M_2$ is off and $I_D = 0$: $V_{out} = V_{DD}$, $V_X = 0$ ($M_1$ is on but carries no current), and $v_{in}$ cannot produce any output current:

$$A_v = 0\quad\text{for } 0 \le V_b \le 0.7\ \mathrm{V}.$$

### Step 3 — Small-signal model with $M_2$ conducting

With $V_b$ and $V_{DD}$ at ac ground:

- **$M_1$**: $g_{m1}v_{in}$ from $X$ to ground, in parallel with $1/g_{ds1}$ ($g_{m1} = \partial I_{D1}/\partial V_{GS1}$, $g_{ds1} = \partial I_{D1}/\partial V_{DS1}$);
- **$M_2$** (saturated, common gate): $v_{gs2} = -v_X$, a current $-g_{m2}v_X$ from out to $X$;
- **$R_D$** from out to ac ground.

<!-- diagram: diagram-01.cir -->

**KCL at $X$:**

$$-g_{m2}v_X = g_{m1}v_{in} + g_{ds1}v_X\quad\Longrightarrow\quad v_X = -\frac{g_{m1}}{g_{m2} + g_{ds1}}\,v_{in}.$$

**Output.** The current $-g_{m2}v_X$ flowing down through $M_2$ comes through $R_D$:

$$v_{out} = -(-g_{m2}v_X)R_D = g_{m2}R_Dv_X = -\frac{g_{m1}g_{m2}R_D}{g_{m2} + g_{ds1}}\,v_{in},$$

$$A_v = -g_{m1}R_D\cdot\frac{g_{m2}}{g_{m2} + g_{ds1}} .$$

$M_1$'s signal current divides between its own $g_{ds1}$ and the conductance $g_{m2}$ looking into the source of $M_2$; only the part entering $M_2$ reaches $R_D$. For $M_1$:

| $M_1$ region | $g_{m1}$ | $g_{ds1}$ |
|---|---|---|
| triode ($V_X < A$) | $\beta_1V_X$ | $\beta_1(A - V_X)$ |
| saturation ($V_X \ge A$) | $\beta_1A$ | 0 |

### Step 4 — Just above $V_{TH}$: $M_1$ in deep triode, gain rising from zero

For $V_b$ slightly above 0.7 V the current is small, $V_{out} \approx V_{DD}$ and $M_2$ is saturated, while $X$ sits just above 0 V, so $M_1$ is in **deep triode**: $g_{m1} = \beta_1V_X \approx 0$, and the large $g_{ds1} \approx \beta_1A$ keeps most of the little signal current inside $M_1$. So $|A_v|$ starts at **zero** (continuous with Step 2). As $V_b$ rises, $V_X = V_b - V_{GS2}$ rises, $g_{m1}$ grows and $g_{ds1}$ shrinks: **$|A_v|$ increases**. For small currents $V_X \approx \beta_2(V_b - 0.7)^2/(2\beta_1A)$, so the gain grows very gently at first, roughly as $(V_b - 0.7)^3$, and then faster.

### Step 5 — $M_1$ saturates: the gain reaches its maximum

$M_1$ saturates at $V_X = A = V_{in} - 0.7$ V, where the current is $I_1$ and $V_{GS2} = 0.7 + \sqrt{2I_1/\beta_2}$:

$$V_b = V_X + V_{GS2} = (V_{in} - 0.7) + 0.7 + \sqrt{\frac{2I_1}{\beta_2}} = V_{in} + \sqrt{\frac{2I_1}{\beta_2}} .$$

There $g_{ds1} = 0$, so the whole signal current enters $M_2$:

$$|A_v| = g_{m1}R_D = \beta_1(V_{in} - 0.7)R_D = \sqrt{2\beta_1I_1}\,R_D ,$$

the maximum.

### Step 6 — Beyond: a flat plateau up to $V_b = 3$ V

For larger $V_b$, $M_1$ stays saturated, an **ideal current source** ($I_D = I_1$, $g_{m1} = \beta_1A$, $g_{ds1} = 0$), so $V_{out} = V_{DD} - I_1R_D$ is constant and

$$A_v = -g_{m1}R_D .$$

$M_2$ enters triode when $V_{out} < V_b - 0.7$, i.e. for $V_b > V_{DD} - I_1R_D + 0.7$ V, but this does **not** change the gain: by KCL at $X$, the signal current $g_{m1}v_{in}$ from $M_1$ (infinite output resistance) can only flow through $M_2$ into $R_D$, whatever $M_2$'s small-signal parameters. $M_1$ stays saturated, since $V_X$ moves toward $V_{out} = V_{DD} - I_1R_D$, which by assumption is above $V_{in} - 0.7$ V. The plateau continues to $V_b = V_{DD}$.

### Step 7 — Numerical example

Take $V_{in} = 1.2$ V ($A = 0.5$ V), $\beta_1 = \beta_2 = 2\ \mathrm{mA/V^2}$, $R_D = 4$ kΩ:

$$
\begin{aligned}
I_1 &= \tfrac12(2\ \mathrm{mA/V^2})(0.5\ \mathrm{V})^2 = 0.25\ \mathrm{mA},\\
V_{out} &= 3 - (0.25\ \mathrm{mA})(4\ \mathrm{k\Omega}) = 2\ \mathrm{V} > A\ \ (\text{assumption satisfied}),\\
\text{break point } V_b &= 1.2 + \sqrt{2(0.25)/2}\ \mathrm{V} = 1.2 + 0.5 = 1.7\ \mathrm{V},\\
\text{plateau } |A_v| &= (2\ \mathrm{mA/V^2})(0.5\ \mathrm{V})(4\ \mathrm{k\Omega}) = 4,\\
M_2 \text{ enters triode for } V_b &> 2 + 0.7 = 2.7\ \mathrm{V}.
\end{aligned}
$$

Solving the square-law equations at each $V_b$:

| $V_b$ (V) | ≤ 0.7 | 0.8 | 0.9 | 1.0 | 1.2 | 1.4 | 1.5 | 1.6 | 1.65 | 1.7 | 2.0 | 2.5 | 2.8 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $V_X$ (V) | 0 | 0.008 | 0.03 | 0.06 | 0.15 | 0.26 | 0.33 | 0.41 | 0.45 | 0.50 | 0.80 | 1.30 | 1.59 | 1.72 |
| $\lvert A_v\rvert$ | 0 | 0.01 | 0.06 | 0.17 | 0.59 | 1.35 | 1.94 | 2.76 | 3.30 | **4.0** | 4.0 | 4.0 | 4.0 | 4.0 |
| $M_1$ / $M_2$ | – / off | tri / sat | tri / sat | tri / sat | tri / sat | tri / sat | tri / sat | tri / sat | tri / sat | edge / sat | sat / sat | sat / sat | sat / tri | sat / tri |

### Result

Sketch of $|A_v| = |V_{out}/V_{in}|$ versus $V_b$:

- **$0 \le V_b \le V_{TH} = 0.7$ V:** $M_2$ off, no current, $A_v = 0$.
- **$0.7\ \mathrm{V} < V_b < V_{in} + \sqrt{2I_1/\beta_2}$:** $M_1$ in triode. The gain rises smoothly from 0 as $X$ rises, following $|A_v| = g_{m1}R_D\,g_{m2}/(g_{m2} + g_{ds1})$ with $g_{m1} = \beta_1V_X$ and $g_{ds1} = \beta_1(V_{in} - 0.7 - V_X)$.
- **$V_b = V_{in} + \sqrt{2I_1/\beta_2}$** (i.e. $V_{in} - V_{TH} + V_{GS2}$): $M_1$ saturates and the gain reaches $|A_v| = g_{m1}R_D = \sqrt{2\beta_1I_1}\,R_D$.
- **Above that, up to $V_b = V_{DD}$:** a flat plateau $A_v = -g_{m1}R_D$ (inverting), unchanged even after $M_2$ enters triode (for $V_b > V_{DD} - I_1R_D + 0.7$ V), because with $\lambda = 0$ all of $M_1$'s signal current must flow into $R_D$.

**Common mistake.** Drawing the gain as maximal at small $V_b$ and decreasing. At small $V_b$, $X$ is near ground and $M_1$ is in deep triode with almost no transconductance, so the gain is near zero.

**Common mistake.** Claiming that the gain drops when $M_2$ enters triode. With $\lambda = 0$, $M_1$'s signal current has no path other than through $M_2$ to $R_D$, so the plateau stays at $g_{m1}R_D$.

**Common mistake.** A plateau of the intrinsic cascode type ($g_{m1}g_{m2}r_{O1}r_{O2}$), or a nonzero gain with $M_2$ off. The load is the resistor $R_D$, and below $V_b = 0.7$ V there is no current path.
