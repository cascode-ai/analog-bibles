# Detailed solution - R013

**Approach.** $R_1$ is connected directly across the drain and source of $M_1$, and the two together must carry the fixed current $I_1$. So the source voltage $V_S$ adjusts itself until KCL is satisfied, and $I_X = I_1 - V_{DS}/R_1$. Express $V_{GS}$, $V_{DS}$ and $V_{SB}$ in terms of $V_S$ and $V_X$, find the boundaries of triode, saturation and cut-off, and follow $I_X$ and $g_m$ across the sweep. A numerical example makes the sketch concrete.

### Step 1 — Reading the circuit and the KCL equation

From the figure:

- the gate of $M_1$ is at $+2$ V;
- the drain is driven by $V_X$ (0 to 3 V); $I_X$ is the drain current of $M_1$;
- $R_1$ connects the drain node to the source node;
- the source node is pulled down by the current source $I_1$ to ground;
- the bulk is grounded.

Call the source voltage $V_S$ (unknown). Then

$$
\begin{aligned}
V_{GS} &= 2 - V_S,\\
V_{DS} &= V_X - V_S,\\
V_{SB} &= V_S - 0 = V_S .
\end{aligned}
$$

**KCL at the source node.** Current arrives from $M_1$ ($I_X$) and through $R_1$ ($V_{DS}/R_1$), and leaves through the current source ($I_1$):

$$I_X + \frac{V_X - V_S}{R_1} = I_1 \quad\Longrightarrow\quad I_X = I_1 - \frac{V_{DS}}{R_1}.$$

So $I_X$ can never exceed $I_1$, and it is large only when $V_{DS}$ is small.

The threshold with body effect ($V_{TH0} = 0.7$ V, $\gamma = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V) is

$$V_{TH}(V_S) = 0.7 + 0.45\left(\sqrt{0.9 + V_S} - 0.9487\right)\ \mathrm{V}.$$

Symbols: $\beta = \mu_nC_{ox}W/L$, $V_{ov} = V_{GS} - V_{TH}$.

### Step 2 — Region boundaries

**Triode versus saturation.** $M_1$ is saturated when $V_{DS} \ge V_{GS} - V_{TH}$:

$$
\begin{aligned}
V_X - V_S &\ge 2 - V_S - V_{TH}\\
V_X &\ge 2 - V_{TH}(V_S).
\end{aligned}
$$

$V_S$ cancels except inside $V_{TH}$: the device saturates once the drain is more than one threshold below the gate, i.e. at $V_X \approx 1.1$–$1.3$ V for typical $V_S$ values. **Below that, $M_1$ is in triode.**

**Cut-off.** $M_1$ is off when $V_{GS} \le V_{TH}$, i.e. $2 - V_S \le V_{TH}(V_S)$. Set them equal and substitute $u = \sqrt{0.9 + V_S}$ ($V_S = u^2 - 0.9$):

$$
\begin{aligned}
2 - (u^2 - 0.9) &= 0.7 + 0.45u - 0.4269\\
u^2 + 0.45u - 2.6269 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 10.5076}}{2} = \frac{-0.45 + 3.2726}{2} = 1.4113\\
V_{S,\mathrm{off}} &= u^2 - 0.9 = 1.9918 - 0.9 = 1.09\ \mathrm{V}.
\end{aligned}
$$

(Here $V_{TH} = 2 - 1.09 = 0.91$ V. Without body effect it would be $V_{S,\mathrm{off}} = 2 - 0.7 = 1.3$ V.)

At cut-off $I_X = 0$, so all of $I_1$ flows through $R_1$, giving $V_{DS} = I_1R_1$ and

$$V_{X,\mathrm{off}} = V_{S,\mathrm{off}} + I_1R_1 \approx 1.09\ \mathrm{V} + I_1R_1 .$$

For $V_X > V_{X,\mathrm{off}}$ (if this is below 3 V), $M_1$ is off, $I_X = 0$, and $V_S = V_X - I_1R_1$ simply follows $V_X$.

### Step 3 — Small $V_X$: $M_1$ in triode shares $I_1$ with $R_1$

At $V_X = 0$ the drain is at ground. For current to flow through $R_1$ from drain to source, the source must be *below* ground: $V_S = -V_{DS} = -(I_1 - I_X)R_1 < 0$. Then $V_{GS} = 2 + V_{DS} > 2$ V, a large gate drive, and $M_1$ is deep in triode.

In deep triode $M_1$ behaves like a resistor

$$R_{on} \approx \frac{1}{\beta\,(V_{GS} - V_{TH})},$$

connected in parallel with $R_1$, the pair being fed by $I_1$:

<!-- diagram: diagram-01.cir -->

The current divides like a current divider:

$$I_X \approx I_1\,\frac{R_1}{R_1 + R_{on}} = I_1\,\frac{\beta R_1(V_{GS} - V_{TH})}{1 + \beta R_1(V_{GS} - V_{TH})}.$$

So $I_X(0)$ is a large fraction of $I_1$, approaching $I_1$ only when $\beta R_1(V_{GS} - V_{TH}) \gg 1$.

**Example: $I_1 = 1$ mA, $\beta = 1\ \mathrm{mA/V^2}$, $R_1 = 1\ \mathrm{k\Omega}$.** Let $x = V_{DS} = -V_S$. The exact triode KCL is

$$\beta\left[(2 + x - V_{TH})x - \tfrac12x^2\right] + \frac{x}{R_1} = I_1 .$$

Try $x = 0.385$ V:

$$
\begin{aligned}
V_{SB} &= -0.385\ \mathrm{V} \quad(\text{bulk slightly above the source}),\\
V_{TH} &= 0.7 + 0.45\left(\sqrt{0.9 - 0.385} - 0.9487\right) = 0.7 + 0.45\,(0.7176 - 0.9487) = 0.596\ \mathrm{V},\\
V_{ov} &= 2 + 0.385 - 0.596 = 1.789\ \mathrm{V},\\
I_X &= (1\ \mathrm{mA/V^2})\left[(1.789)(0.385) - \tfrac12(0.385)^2\right]\mathrm{V^2} = (0.689 - 0.074)\ \mathrm{mA} = 0.615\ \mathrm{mA},\\
\frac{V_{DS}}{R_1} &= \frac{0.385\ \mathrm{V}}{1\ \mathrm{k\Omega}} = 0.385\ \mathrm{mA},\\
I_X + \frac{V_{DS}}{R_1} &= 1.000\ \mathrm{mA} = I_1 .\ \checkmark
\end{aligned}
$$

So **$I_X(0) \approx 0.61\,I_1$**. The simple divider estimate gives $R_{on} = 1/(1\ \mathrm{mA/V^2}\times1.789\ \mathrm{V}) = 559\ \Omega$ and $I_X \approx 1000/1559 = 0.64$ mA, close. With a larger $R_1 = 10\ \mathrm{k\Omega}$ the same calculation gives $I_X(0) \approx 0.95\,I_1$; with a weaker device ($\beta = 0.2\ \mathrm{mA/V^2}$, $R_1 = 1\ \mathrm{k\Omega}$) only about $0.28\,I_1$.

The source sits 0.385 V below the grounded bulk, so the source–bulk junction is slightly forward-biased; at this level its current is negligible. (If $I_1R_1$ were large enough to push $V_S$ below about $-0.5$ V, that junction would start to conduct and take part of $I_1$.)

### Step 4 — $I_X$ decreases monotonically as $V_X$ rises

**Intuition.** Raising $V_X$ while $V_S$ stayed put would increase the current in both $R_1$ and $M_1$, exceeding $I_1$. So $V_S$ must rise too. That lowers $V_{GS}$ (and raises $V_{TH}$), making $M_1$ weaker, while $V_{DS}$ still grows. More of $I_1$ is pushed into $R_1$, and $I_X = I_1 - V_{DS}/R_1$ falls.

**Proof with small changes.** Let $g_m$, $g_{mb}$ and $g_{ds}$ be the device's sensitivities to $V_{GS}$, to the bulk, and to $V_{DS}$, and $G_1 = 1/R_1$. A change $dV_X$ produces a change $dV_S$. Since $I_1$ is constant, the total current change at the source node is zero:

$$\underbrace{g_{ds}(dV_X - dV_S) - (g_m + g_{mb})\,dV_S}_{dI_X} + G_1(dV_X - dV_S) = 0 .$$

Solve for $dV_S$:

$$dV_S = \frac{g_{ds} + G_1}{g_m + g_{mb} + g_{ds} + G_1}\,dV_X .$$

Substitute back into $dI_X = -G_1(dV_X - dV_S)$ (from $I_X = I_1 - V_{DS}/R_1$):

$$
\begin{aligned}
dI_X &= -G_1\left(1 - \frac{g_{ds} + G_1}{g_m + g_{mb} + g_{ds} + G_1}\right)dV_X\\
\frac{dI_X}{dV_X} &= -\frac{G_1\,(g_m + g_{mb})}{g_m + g_{mb} + g_{ds} + G_1} < 0 .
\end{aligned}
$$

So $I_X$ always decreases. In saturation with a strong device ($g_m \gg G_1$, $g_{ds} \approx 0$) the slope approaches $-1/R_1$: $V_S$ barely moves and every extra volt of $V_X$ appears across $R_1$. Near cut-off $g_m \to 0$ and the slope goes to zero, so **$I_X$ reaches zero tangentially**.

### Step 5 — Transconductance

- **Triode** ($V_X < 2 - V_{TH}$): $g_m = \partial I_D/\partial V_{GS} = \beta V_{DS}$. At $V_X = 0$ it is small ($\beta\times0.385$ V in the example), and it **grows** as $V_X$ rises because $V_{DS} = (I_1 - I_X)R_1$ grows.
- **Edge of saturation** ($V_{DS} = V_{ov}$): $g_m = \beta(V_{GS} - V_{TH}) = \beta V_{DS}$, its maximum.
- **Saturation**: $g_m = \beta(V_{GS} - V_{TH}) = \sqrt{2\beta I_X}$, which **falls** with $I_X$ and reaches zero at cut-off.
- **Off**: $g_m = 0$.

So $g_m$ rises, peaks near the triode/saturation boundary, and then falls to zero.

**Example values at the boundary** ($I_1 = 1$ mA, $\beta = 1\ \mathrm{mA/V^2}$, $R_1 = 1\ \mathrm{k\Omega}$). There $V_{DS} = V_{ov}$, so KCL reads $\tfrac12\beta V_{ov}^2 + V_{ov}/R_1 = I_1$:

$$
\begin{aligned}
\tfrac12V_{ov}^2 + V_{ov} &= 1 \quad(\text{V, mA units})\\
V_{ov}^2 + 2V_{ov} - 2 &= 0\\
V_{ov} &= -1 + \sqrt3 = 0.732\ \mathrm{V},
\end{aligned}
$$

giving $I_X = \tfrac12(1\ \mathrm{mA/V^2})(0.732\ \mathrm{V})^2 = 0.268$ mA and $g_m = (1\ \mathrm{mA/V^2})(0.732\ \mathrm{V}) = 0.732$ mS. Solving $V_S = 2 - V_{TH}(V_S) - 0.732$ in the same way as in Step 2 gives $V_S = 0.468$ V and $V_{TH} = 0.800$ V, so the boundary is at $V_X = V_S + V_{DS} = 0.468 + 0.732 = 1.20$ V (consistent with $V_X = 2 - V_{TH}$).

### Step 6 — The full example curve

$I_1 = 1$ mA, $\beta = 1\ \mathrm{mA/V^2}$, $R_1 = 1\ \mathrm{k\Omega}$ (each row solves the KCL of Step 1 with the appropriate square-law formula):

| $V_X$ (V) | $V_S$ (V) | $V_{TH}$ (V) | Region | $I_X$ (mA) | $g_m$ (mS) |
|---|---|---|---|---|---|
| 0 | −0.385 | 0.596 | triode | 0.615 | 0.385 |
| 0.5 | 0.010 | 0.703 | triode | 0.510 | 0.490 |
| 1.0 | 0.353 | 0.777 | triode | 0.353 | 0.647 |
| 1.20 | 0.468 | 0.800 | edge | 0.268 | 0.732 |
| 1.5 | 0.640 | 0.832 | saturation | 0.140 | 0.529 |
| 1.75 | 0.806 | 0.861 | saturation | 0.056 | 0.334 |
| 2.0 | 1.005 | 0.894 | saturation | 0.005 | 0.101 |
| 2.09 | 1.09 | 0.91 | cut-off | 0 | 0 |
| 2.09 – 3 | $V_X - 1$ | 0.91 → 1.04 | off | 0 | 0 |

Here $V_{X,\mathrm{off}} = 1.09 + (1\ \mathrm{mA})(1\ \mathrm{k\Omega}) = 2.09$ V. If $I_1R_1 > 3 - 1.09 = 1.91$ V, cut-off is never reached in the sweep: for $R_1 = 10\ \mathrm{k\Omega}$, $I_X$ starts at $0.95I_1$ and falls only slowly, with slope ≈ $-1/R_1$, to about $0.71I_1$ at $V_X = 3$ V.

### Result

$R_1$ sits across drain and source and the pair carries $I_1$, so

$$I_X = I_1 - \frac{V_{DS}}{R_1}, \qquad V_{GS} = 2 - V_S,\quad V_{SB} = V_S,\quad V_{DS} = V_X - V_S .$$

- **Small $V_X$:** $V_S$ is below ground and $V_{GS} > 2$ V, so $M_1$ is in **triode** and acts as $R_{on} \approx 1/[\beta(V_{GS} - V_{TH})]$ in parallel with $R_1$: $I_X(0) \approx I_1R_1/(R_1 + R_{on})$, a large fraction of $I_1$ that approaches $I_1$ only when $\beta R_1(V_{GS} - V_{TH}) \gg 1$ (example: $0.61I_1$ for $\beta = 1\ \mathrm{mA/V^2}$, $R_1 = 1\ \mathrm{k\Omega}$, $I_1 = 1$ mA).
- **As $V_X$ rises**, $I_X$ **decreases** monotonically: $V_S$ rises, $V_{GS}$ falls, and $R_1$ takes more of $I_1$. $M_1$ enters saturation at $V_X = 2 - V_{TH}(V_S)$ (about 1.1–1.3 V), where $I_X = \tfrac12\beta(2 - V_S - V_{TH})^2$.
- **Cut-off** when $V_S = 2 - V_{TH}(V_S) \approx 1.09$ V (1.3 V without body effect), i.e. at $V_X \approx 1.09\ \mathrm{V} + I_1R_1$; $I_X = 0$ beyond (if this is below 3 V).
- **$g_m$** $= \beta V_{DS}$ in triode (small at $V_X = 0$, growing), peaks near the triode/saturation boundary, then $g_m = \sqrt{2\beta I_X}$ in saturation, falling to zero at cut-off.

**Common mistake.** Assuming $I_X = I_1$ for all $V_X$, as if $R_1$ were not there, or reading $R_1$ as connected from the drain to ground. $R_1$ is in parallel with the channel, so KCL gives $I_X = I_1 - V_{DS}/R_1$, which falls as $V_{DS}$ grows.

**Common mistake.** Writing the overdrive as $V_G - V_{TH} = 2 - 0.7$ V, as if the source were grounded. The source floats at $V_S$, which moves from below ground to above 1 V; using $2 - V_S - V_{TH}(V_S)$ is what places the saturation boundary near 1.2 V and cut-off at $1.09\ \mathrm{V} + I_1R_1$.

**Common mistake.** Claiming that $M_1$ is saturated at $V_X = 0$. With the drain at ground and the source below it, $V_{DS}$ is a few tenths of a volt while $V_{GS} - V_{TH}$ is well above 1 V, so the device is deep in triode, and its $g_m = \beta V_{DS}$ is small there.
