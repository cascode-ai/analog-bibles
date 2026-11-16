# Detailed solution - R017

**Approach.** Identify the source of $M_1$: the current in $R_1$ must come from $V_{in}$ through $M_1$, so $V_{out} \le V_{in}$ and the $V_{out}$ node is the source. With the gate fixed at 2 V, $M_1$ is a closed switch (triode) while $V_{in}$ is low, and then saturates, after which $V_{out}$ no longer depends on $V_{in}$. Find the boundary, the behaviour in each region and the final constant level, including the body effect.

### Step 1 — Which terminal is the source?

From the figure:

- the gate of $M_1$ is held at $+2$ V;
- the lower diffusion terminal (drawn with the arrow) is driven by $V_{in}$ (0 to 3 V);
- the upper diffusion terminal is the output, loaded by $R_1$ to ground;
- the bulk is grounded.

$R_1$ draws $V_{out}/R_1 \ge 0$ from the output node, and the only supply is $V_{in}$ through the channel of $M_1$. Channel current in an NMOS flows from the higher terminal to the lower one, so

$$V_{out} \le V_{in}.$$

Hence the **$V_{out}$ node is the source and the $V_{in}$ node is the drain**:

$$
\begin{aligned}
V_{GS} &= 2 - V_{out},\\
V_{DS} &= V_{in} - V_{out},\\
V_{SB} &= V_{out}.
\end{aligned}
$$

At $V_{in} = 0$ there is nothing to drive current, so $V_{out} = 0$.

Threshold with body effect ($V_{TH0} = 0.7$ V, $\gamma = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V):

$$V_{TH}(V_{out}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right)\ \mathrm{V}.$$

Symbols: $\beta = \mu_nC_{ox}W/L$, $V_{ov} = V_{GS} - V_{TH}$.

### Step 2 — Region boundary

$M_1$ is in triode when $V_{DS} < V_{GS} - V_{TH}$:

$$
\begin{aligned}
V_{in} - V_{out} &< 2 - V_{out} - V_{TH}\\
V_{in} &< 2 - V_{TH}(V_{out}).
\end{aligned}
$$

So for $V_{in}$ below roughly $2 - 0.8 \approx 1.1$–$1.2$ V the device is in **triode**, and above that it is **saturated**. Physically: the gate is at 2 V, so the channel reaches the drain end as long as the drain is more than one threshold below the gate.

### Step 3 — Low $V_{in}$: $M_1$ as a closed switch

In triode, KCL at the output node (channel current = resistor current) reads

$$\frac{V_{out}}{R_1} = \beta\left[(2 - V_{out} - V_{TH})(V_{in} - V_{out}) - \tfrac12(V_{in} - V_{out})^2\right].$$

For small $V_{DS} = V_{in} - V_{out}$ the quadratic term is negligible and the channel acts as a resistor

$$R_{on} \approx \frac{1}{\beta\,(2 - V_{out} - V_{TH})},$$

in series with $R_1$. The pair forms a voltage divider:

$$V_{out} \approx V_{in}\,\frac{R_1}{R_1 + R_{on}} .$$

If $R_1 \gg R_{on}$, **$V_{out} \approx V_{in}$** (a slope close to 1). As $V_{in}$ and $V_{out}$ rise, $V_{GS} = 2 - V_{out}$ shrinks and $V_{TH}$ grows, so $R_{on}$ increases and the slope gradually decreases.

### Step 4 — High $V_{in}$: saturation and a constant output

In saturation (and with $\lambda = 0$) the drain voltage does not affect the current:

$$\frac{V_{out}}{R_1} = \tfrac12\beta\,\left(2 - V_{out} - V_{TH}(V_{out})\right)^2 .$$

$V_{in}$ does **not appear**: once saturated, $V_{out}$ is constant at the solution $V_{out,s}$ of this equation, for all larger $V_{in}$. The transistor is now a source follower driven by the fixed 2-V gate; raising its drain does nothing.

**Upper bound of the plateau.** The equation can be written $V_{out} = 2 - V_{TH}(V_{out}) - \sqrt{2V_{out}/(\beta R_1)}$. The last term vanishes only for $\beta R_1 \to \infty$, so the highest possible plateau satisfies $V_{GS} = V_{TH}$:

$$2 - V_{out} = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right).$$

Substitute $u = \sqrt{0.9 + V_{out}}$ ($V_{out} = u^2 - 0.9$) and $0.7 - 0.45\times0.9487 = 0.2731$:

$$
\begin{aligned}
2 - u^2 + 0.9 &= 0.2731 + 0.45u\\
u^2 + 0.45u - 2.6269 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 10.5076}}{2} = \frac{-0.45 + 3.2726}{2} = 1.4113\\
V_{out} &= 1.4113^2 - 0.9 = 1.9918 - 0.9 = 1.09\ \mathrm{V}.
\end{aligned}
$$

At this point $V_{TH} = 2 - 1.09 = 0.91$ V. Without the body effect the bound would be $2 - 0.7 = 1.3$ V. **The plateau always lies a little below 1.09 V.**

### Step 5 — Numerical examples

**Plateau for $\beta R_1 = 10\ \mathrm{V^{-1}}$.** Solve $V_{out} = 5\,(2 - V_{out} - V_{TH})^2$ by trial. Try $V_{out} = 0.758$ V:

$$
\begin{aligned}
V_{TH} &= 0.7 + 0.45\left(\sqrt{1.658} - 0.9487\right) = 0.7 + 0.45\times0.3389 = 0.8525\ \mathrm{V},\\
V_{ov} &= 2 - 0.758 - 0.8525 = 0.3895\ \mathrm{V},\\
5\,V_{ov}^2 &= 5\times0.1517\ \mathrm{V} = 0.758\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

The break point is at $V_{in} = 2 - V_{TH}(V_{out,s}) = 2 - 0.8525 = 1.15$ V.

**A triode point, $\beta R_1 = 10\ \mathrm{V^{-1}}$, $V_{in} = 0.5$ V.** With $V_{out} = 0.440$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.34} - 0.9487) = 0.794$ V, $V_{ov} = 2 - 0.440 - 0.794 = 0.766$ V, and $R_{on}/R_1 = 1/(\beta R_1V_{ov}) = 1/7.66 = 0.131$. The divider gives $V_{out} \approx 0.5/1.131 = 0.442$ V, consistent.

| $V_{in}$ (V) | $V_{out}$, $\beta R_1 = 10\ \mathrm{V^{-1}}$ | $V_{out}$, $\beta R_1 = 100\ \mathrm{V^{-1}}$ | $V_{out}$, $\beta R_1 \to \infty$ |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0.25 | 0.228 | 0.248 | 0.25 |
| 0.5 | 0.440 | 0.493 | 0.50 |
| 0.75 | 0.622 | 0.732 | 0.75 |
| 1.0 | 0.738 | 0.937 | 1.00 |
| break | 1.15 V | 1.11 V | 1.09 V |
| 1.25 – 3 | 0.758 (flat) | 0.972 (flat) | 1.09 (flat) |

(For $\beta R_1 = 1\ \mathrm{V^{-1}}$ the plateau is only 0.37 V, reached at $V_{in} \approx 1.22$ V.)

**Shape.** A line rising with slope close to 1 from the origin (lower for small $\beta R_1$), bending over as $V_{GS}$ shrinks, joining a **horizontal plateau** at $V_{out,s} < 1.09$ V for $V_{in} \gtrsim 1.1$–$1.2$ V, flat all the way to 3 V.

### Result

- The $V_{out}$ node is the source of $M_1$ ($V_{GS} = 2 - V_{out}$, $V_{SB} = V_{out}$) and the $V_{in}$ node is the drain, because current flows from $V_{in}$ through $M_1$ into $R_1$ and $V_{out} \le V_{in}$.
- **$V_{in} < 2 - V_{TH}(V_{out})$:** triode. $M_1$ is a closed switch and $V_{out} = V_{in}R_1/(R_1 + R_{on}) \approx V_{in}$ for $R_1 \gg R_{on}$, with $R_{on} \approx 1/[\beta(2 - V_{out} - V_{TH})]$. The slope falls as $V_{GS}$ shrinks.
- **Larger $V_{in}$ (from about 1.1–1.2 V):** saturation. $V_{out}$ is fixed by $\tfrac12\beta(2 - V_{out} - V_{TH}(V_{out}))^2 = V_{out}/R_1$, independent of $V_{in}$, and stays **flat up to 3 V**. Its upper bound ($\beta R_1 \to \infty$) is the solution of $2 - V_{out} = V_{TH}(V_{out})$: **1.09 V** with body effect (1.3 V without). Examples: 0.76 V for $\beta R_1 = 10\ \mathrm{V^{-1}}$, 0.97 V for $\beta R_1 = 100\ \mathrm{V^{-1}}$.

**Common mistake.** Taking the $V_{in}$ terminal (the one with the arrow) as the source. That would make $V_{GS} = 2 - V_{in}$ and give an inverting or ever-increasing output. The source is the lower-potential terminal, which is the $V_{out}$ node here.

**Common mistake.** Letting $V_{out}$ follow $V_{in}$ up to 2 V or 3 V. With the gate at 2 V, the source can rise only to where $V_{GS}$ just exceeds $V_{TH}$; beyond the break point the device saturates and the output is clamped.

**Common mistake.** Using $V_{TH} = 0.7$ V for the clamp, which gives 1.3 V. The source sits about 1 V above the grounded bulk, raising $V_{TH}$ to about 0.91 V, so the clamp is at most 1.09 V.
