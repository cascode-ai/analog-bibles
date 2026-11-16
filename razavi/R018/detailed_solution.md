# Detailed solution - R018

**Approach.** $V_{out}$ is the source of $M_1$. With the gate at 3 V, $M_1$ is a closed switch (triode) for low $V_{in}$ and saturates once the drain rises to within one threshold of the gate, after which $V_{out}$ is constant. Find the boundary, the two regions and the plateau level, including the body effect, and show how the plateau depends on $\beta R_1$.

### Step 1 — Terminal voltages

The current in $R_1$ can only come from $V_{in}$ through $M_1$, so $V_{out} \le V_{in}$: the lower-potential terminal, $V_{out}$, is the source and the $V_{in}$ terminal is the drain.

$$
\begin{aligned}
V_{GS} &= 3 - V_{out},\\
V_{DS} &= V_{in} - V_{out},\\
V_{SB} &= V_{out}.
\end{aligned}
$$

With the body effect,

$$V_{TH}(V_{out}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right)\ \mathrm{V}.$$

### Step 2 — Region boundary

Triode requires $V_{DS} < V_{GS} - V_{TH}$:

$$
\begin{aligned}
V_{in} - V_{out} &< 3 - V_{out} - V_{TH}\\
V_{in} &< 3 - V_{TH}(V_{out}).
\end{aligned}
$$

With $V_{TH}$ around 0.9–1.0 V in the relevant range, **$M_1$ is in triode for $V_{in}$ up to about 2 V**, and saturated above.

### Step 3 — Triode region: $V_{out}$ follows $V_{in}$

KCL at the output:

$$\frac{V_{out}}{R_1} = \beta\left[(3 - V_{out} - V_{TH})(V_{in} - V_{out}) - \tfrac12(V_{in} - V_{out})^2\right].$$

For small $V_{DS}$ the channel is a resistor $R_{on} \approx 1/[\beta(3 - V_{out} - V_{TH})]$ in series with $R_1$, giving the divider

$$V_{out} \approx V_{in}\,\frac{R_1}{R_1 + R_{on}} .$$

For $R_1 \gg R_{on}$, $V_{out}$ follows $V_{in}$ closely (slightly less). As $V_{out}$ rises, $V_{GS}$ falls and $V_{TH}$ rises, so $R_{on}$ grows and the slope decreases.

### Step 4 — Saturation region: a constant output

In saturation ($\lambda = 0$):

$$\frac{V_{out}}{R_1} = \tfrac12\beta\left(3 - V_{out} - V_{TH}(V_{out})\right)^2 .$$

$V_{in}$ does not appear, so **$V_{out}$ stays at the solution $V_{out,s}$** for all $V_{in}$ above the break point $V_{in} = 3 - V_{TH}(V_{out,s})$.

**Upper bound.** Written as $V_{out} = 3 - V_{TH} - \sqrt{2V_{out}/(\beta R_1)}$, $V_{out,s}$ is largest for $\beta R_1 \to \infty$, where $3 - V_{out} = V_{TH}(V_{out})$. With $u = \sqrt{0.9 + V_{out}}$:

$$
\begin{aligned}
3 - (u^2 - 0.9) &= 0.2731 + 0.45u\\
u^2 + 0.45u - 3.6269 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 14.5076}}{2} = \frac{-0.45 + 3.8354}{2} = 1.6927\\
V_{out} &= 1.6927^2 - 0.9 = 2.8652 - 0.9 = 1.965\ \mathrm{V}.
\end{aligned}
$$

There $V_{TH} = 3 - 1.965 = 1.035$ V. **The plateau is always below 1.965 V** (it would be $3 - 0.7 = 2.3$ V without body effect). Because $V_{TH}(V_{out,s}) \le 1.035$ V, the break point $V_{in} = 3 - V_{TH}(V_{out,s})$ lies between 1.965 V and 2.3 V.

### Step 5 — Dependence on $\beta R_1$, with numbers

**$\beta R_1 = 10\ \mathrm{V^{-1}}$.** Solving $V_{out} = 5\,(3 - V_{out} - V_{TH})^2$, try $V_{out} = 1.4865$ V:

$$
\begin{aligned}
V_{TH} &= 0.7 + 0.45\left(\sqrt{2.3865} - 0.9487\right) = 0.7 + 0.45\times0.5961 = 0.968\ \mathrm{V},\\
V_{ov} &= 3 - 1.4865 - 0.968 = 0.545\ \mathrm{V},\\
5\,V_{ov}^2 &= 5\times0.2972\ \mathrm{V} = 1.486\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

The break is at $V_{in} = 3 - 0.968 = 2.03$ V. The same procedure for other loads gives:

| $\beta R_1$ (V⁻¹) | $V_{out,s}$ (V) | $V_{TH}(V_{out,s})$ (V) | Break at $V_{in}$ (V) |
|---|---|---|---|
| 1 | 0.84 | 0.866 | 2.13 |
| 10 | 1.49 | 0.968 | 2.03 |
| 100 | 1.80 | 1.012 | 1.99 |
| $\to\infty$ | 1.965 | 1.035 | 1.965 |

Full transfer curves (triode values from Step 3's exact equation):

| $V_{in}$ (V) | $\beta R_1 = 1$ | $\beta R_1 = 10$ | $\beta R_1 = 100$ |
|---|---|---|---|
| 0.5 | 0.32 | 0.47 | 0.50 |
| 1.0 | 0.58 | 0.92 | 0.99 |
| 1.5 | 0.76 | 1.30 | 1.47 |
| 1.75 | 0.81 | 1.43 | 1.69 |
| 2.0 | 0.835 | 1.486 | 1.80 (sat.) |
| 2.5 – 3 | 0.84 (flat) | 1.49 (flat) | 1.80 (flat) |

**Shape.** With a large $\beta R_1$, $V_{out}$ tracks $V_{in}$ almost exactly up to a sharp corner near 1.97 V, then stays flat just below 1.97 V. With a small $\beta R_1$ the rising part is well below $V_{in}$ (the $R_{on}$–$R_1$ divider is significant), the corner is softer, and the plateau is lower.

### Result

- The $V_{out}$ node is the source ($V_{GS} = 3 - V_{out}$, $V_{SB} = V_{out}$) and the $V_{in}$ node is the drain, since current flows from $V_{in}$ through $M_1$ into $R_1$.
- **$V_{in} < 3 - V_{TH}(V_{out})$:** triode; $V_{out} = V_{in}R_1/(R_1 + R_{on})$, following $V_{in}$ (slightly less, close to $V_{in}$ for $R_1 \gg R_{on}$), with the slope falling as $V_{GS}$ shrinks.
- **Above the break** $V_{in} = 3 - V_{TH}(V_{out,s})$ (between 1.965 V and 2.3 V): saturation; $V_{out}$ is **constant** at $V_{out,s}$, the solution of $V_{out,s} = \tfrac12\beta R_1[3 - V_{out,s} - V_{TH}(V_{out,s})]^2$, flat up to $V_{in} = 3$ V.
- $V_{out,s} < 1.965$ V (where $V_{TH} \approx 1.035$ V; 2.3 V without body effect) and approaches this bound only for large $\beta R_1$. For example, $\beta R_1 = 1$, 10, 100 V⁻¹ give $V_{out,s} \approx 0.84$, 1.49, 1.80 V, with breaks at $V_{in} \approx 2.13$, 2.03, 1.99 V.

**Common mistake.** Letting $V_{out}$ follow $V_{in}$ all the way to 3 V. With the gate at 3 V, the source can rise only until $V_{GS}$ approaches $V_{TH}$, which with the body effect happens at about 1.97 V at most.

**Common mistake.** Ignoring the body effect and quoting a clamp at $3 - 0.7 = 2.3$ V. The source is about 2 V above the grounded bulk, raising $V_{TH}$ to about 1.03 V and lowering the bound to 1.965 V.

**Common mistake.** Treating the $V_{in}$ node as the source, which would give an inverting characteristic. The lower-potential terminal is always the output node, so $M_1$ is a pass device that follows and then clamps.
