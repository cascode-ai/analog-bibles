# Detailed solution - R014

**Approach.** $R_1$ is connected between the gate and the source, so the voltage across it *is* $V_{GS}$. KCL at the source node then gives $I_X = I_1 - V_{GS}/R_1$, and the square law gives a second relation between $I_X$ and $V_{GS}$. Together they fix $V_{GS}$ and $I_X$ independently of $V_X$: $M_1$ behaves as a source follower whose source simply tracks $V_X$. The only way $V_X$ enters is through the body effect, since the source rises above the grounded bulk. We then check the region of operation, the conduction condition and the transconductance.

### Step 1 — Reading the circuit and KCL

From the figure:

- the gate of $M_1$ is driven by $V_X$ (0 to 3 V);
- the drain is at $+2$ V, and $I_X$ flows from that supply into the drain;
- $R_1$ connects the gate node to the source node;
- the source node is pulled down by the current source $I_1$;
- the bulk is grounded.

Call the source voltage $V_S$. Then

$$
\begin{aligned}
V_{GS} &= V_X - V_S \quad(\text{this is also the voltage across } R_1),\\
V_{DS} &= 2 - V_S,\\
V_{SB} &= V_S .
\end{aligned}
$$

**KCL at the source node.** Current arrives from $M_1$ ($I_X$) and through $R_1$ ($V_{GS}/R_1$, flowing from the gate node to the source node), and leaves through $I_1$:

$$I_X + \frac{V_{GS}}{R_1} = I_1 \quad\Longrightarrow\quad I_X = I_1 - \frac{V_{GS}}{R_1}.$$

(The source $V_X$ supplies the current $V_{GS}/R_1$; no current enters the MOS gate itself.)

Symbols: $\beta = \mu_nC_{ox}W/L$, $V_{ov} = V_{GS} - V_{TH}$, and the threshold with body effect

$$V_{TH}(V_S) = 0.7 + 0.45\left(\sqrt{0.9 + V_S} - 0.9487\right)\ \mathrm{V}.$$

### Step 2 — Solving for $V_{GS}$ and $I_X$ (saturation)

Assume saturation (checked in Step 5). The square law gives

$$I_X = \tfrac12\beta\,(V_{GS} - V_{TH})^2 .$$

Insert this into the KCL equation:

$$\tfrac12\beta\,(V_{GS} - V_{TH})^2 + \frac{V_{GS}}{R_1} = I_1 .$$

Write $V_{GS} = V_{ov} + V_{TH}$ and rearrange into a quadratic in $V_{ov}$:

$$
\begin{aligned}
\tfrac12\beta V_{ov}^2 + \frac{V_{ov} + V_{TH}}{R_1} &= I_1\\
\tfrac12\beta V_{ov}^2 + \frac{V_{ov}}{R_1} - \left(I_1 - \frac{V_{TH}}{R_1}\right) &= 0 .
\end{aligned}
$$

Positive root:

$$V_{ov} = \frac{-1/R_1 + \sqrt{1/R_1^2 + 2\beta\,(I_1 - V_{TH}/R_1)}}{\beta} = \frac{1}{\beta R_1}\left[\sqrt{1 + 2\beta R_1\,(I_1R_1 - V_{TH})} - 1\right],$$

and then

$$I_X = \tfrac12\beta V_{ov}^2 = I_1 - \frac{V_{ov} + V_{TH}}{R_1}, \qquad g_m = \beta V_{ov} = \sqrt{2\beta I_X}.$$

**Key observation.** $V_X$ does not appear in these formulas at all; it enters only through $V_{TH}(V_S)$. **Without body effect, $V_{GS}$, $I_X$ and $g_m$ are constant**: as $V_X$ rises, the source simply follows it, $V_S = V_X - V_{GS}$, with a fixed offset.

### Step 3 — Conduction condition

$M_1$ conducts only if $I_1 - V_{TH}/R_1 > 0$, i.e.

$$I_1R_1 > V_{TH}(V_S).$$

Physically: if $M_1$ were off, all of $I_1$ would flow through $R_1$ and $V_{GS} = I_1R_1$; the device is on if that voltage exceeds its threshold.

Because $V_{TH}$ grows as the source rises, a design with $I_1R_1$ only slightly above 0.7 V can be **cut off by the body effect within the sweep**. When $M_1$ is off, $V_S = V_X - I_1R_1$, so cut-off happens at $V_X = V_{S,\mathrm{off}} + I_1R_1$, where $V_{TH}(V_{S,\mathrm{off}}) = I_1R_1$. For example, with $I_1R_1 = 0.9$ V:

$$
\begin{aligned}
0.45\left(\sqrt{0.9 + V_{S,\mathrm{off}}} - 0.9487\right) &= 0.9 - 0.7 = 0.2\\
\sqrt{0.9 + V_{S,\mathrm{off}}} &= 0.9487 + 0.4444 = 1.3931\\
V_{S,\mathrm{off}} &= 1.9408 - 0.9 = 1.04\ \mathrm{V},\\
V_{X,\mathrm{off}} &= 1.04 + 0.9 = 1.94\ \mathrm{V}.
\end{aligned}
$$

For $I_1R_1 = 1.0$ V the same steps give $V_{X,\mathrm{off}} \approx 2.71$ V; for $I_1R_1 \gtrsim 1.04$ V the device stays on up to $V_X = 3$ V. If $I_1R_1$ is below the threshold even at the low end, $I_X = 0$ throughout.

### Step 4 — Effect of the body effect on $I_X$

As $V_X$ rises, $V_S = V_X - V_{GS}$ rises almost one-for-one, so $V_{TH}$ rises. How much does $I_X$ change? Differentiate the KCL equation $\tfrac12\beta V_{ov}^2 + (V_{ov} + V_{TH})/R_1 = I_1$:

$$
\begin{aligned}
\beta V_{ov}\,dV_{ov} + \frac{dV_{ov} + dV_{TH}}{R_1} &= 0\\
dV_{ov}\left(g_m + \frac{1}{R_1}\right) &= -\frac{dV_{TH}}{R_1}\\
dV_{ov} &= -\frac{dV_{TH}}{1 + g_mR_1},
\end{aligned}
$$

and therefore

$$dI_X = g_m\,dV_{ov} = -\frac{g_m}{1 + g_mR_1}\,dV_{TH} \;\approx\; -\frac{dV_{TH}}{R_1} \quad (g_mR_1 \gg 1).$$

**Intuition.** A higher threshold forces $V_{GS}$ up by about the same amount. That extra voltage across $R_1$ diverts an extra $\Delta V_{TH}/R_1$ of the fixed $I_1$ into $R_1$, leaving less for $M_1$. So:

- if $I_1R_1 \gg V_{TH}$ (large $R_1$, large overdrive), the decrease of $I_X$ is only a small fraction of $I_X$;
- if $I_1R_1$ is not far above $V_{TH}$, $I_X$ can fall substantially, or even to zero (Step 3).

### Step 5 — Region of operation

Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$:

$$
\begin{aligned}
2 - V_S &\ge V_{GS} - V_{TH}\\
2 - (V_X - V_{GS}) &\ge V_{GS} - V_{TH}\\
V_X &\le 2\ \mathrm{V} + V_{TH}(V_S).
\end{aligned}
$$

Since $V_{TH} \ge 0.7$ V, and it has risen to about 0.9–1.0 V by the time $V_X$ approaches 3 V, $M_1$ is **saturated over practically the whole range**. It can enter triode only in the last ≈ 0.1–0.3 V of the sweep. There $V_{GS}$ must rise further to carry the current, so $I_X$ drops a little more, and $g_m = \beta V_{DS}$ becomes smaller.

### Step 6 — Numerical example

Take $\beta = 2\ \mathrm{mA/V^2}$, $I_1 = 1$ mA, $R_1 = 1.5\ \mathrm{k\Omega}$ ($I_1R_1 = 1.5$ V, moderately above threshold).

**At $V_S = 0$** ($V_{TH} = 0.7$ V):

$$
\begin{aligned}
\beta R_1 &= (2\ \mathrm{mA/V^2})(1.5\ \mathrm{k\Omega}) = 3\ \mathrm{V^{-1}},\\
2\beta R_1(I_1R_1 - V_{TH}) &= 2(3\ \mathrm{V^{-1}})(1.5 - 0.7)\ \mathrm{V} = 4.8,\\
V_{ov} &= \frac{1}{3\ \mathrm{V^{-1}}}\left(\sqrt{1 + 4.8} - 1\right) = \frac{2.408 - 1}{3}\ \mathrm{V} = 0.469\ \mathrm{V},\\
V_{GS} &= 0.469 + 0.7 = 1.169\ \mathrm{V} \quad(\text{so } V_X = V_S + V_{GS} = 1.17\ \mathrm{V}),\\
I_X &= \tfrac12(2\ \mathrm{mA/V^2})(0.469\ \mathrm{V})^2 = 0.220\ \mathrm{mA},\\
g_m &= (2\ \mathrm{mA/V^2})(0.469\ \mathrm{V}) = 0.94\ \mathrm{mS}.
\end{aligned}
$$

Check with KCL: $I_X + V_{GS}/R_1 = 0.220 + 1.169/1.5 = 0.220 + 0.779 = 0.999\ \mathrm{mA} \approx I_1$. ✓

**Across the sweep** (each row solves the same equations with $V_{TH}(V_S)$, $V_S = V_X - V_{GS}$):

| $V_X$ (V) | $V_S$ (V) | $V_{TH}$ (V) | $V_{GS}$ (V) | $I_X$ (mA) | $g_m$ (mS) |
|---|---|---|---|---|---|
| 0.7 | −0.40 | 0.590 | 1.104 | 0.264 | 1.03 |
| 1.17 | 0.00 | 0.700 | 1.169 | 0.220 | 0.94 |
| 1.5 | 0.29 | 0.765 | 1.207 | 0.196 | 0.88 |
| 2.0 | 0.75 | 0.850 | 1.255 | 0.164 | 0.81 |
| 2.5 | 1.20 | 0.926 | 1.295 | 0.137 | 0.74 |
| 3.0 | 1.67 | 0.994 | 1.330 | 0.113 | ≈ 0.67 |

$V_{GS}$ changes by only 0.16 V while $V_X$ changes by 1.8 V, so $V_S$ follows $V_X$ with a slope of about 0.9: this is the source-follower action. Yet $I_X$ halves, because each 0.1 V of extra threshold costs roughly $0.1\ \mathrm{V}/R_1 \times g_mR_1/(1 + g_mR_1) \approx 0.036$ mA. At $V_X = 3$ V, $V_{DS} = 2 - 1.67 = 0.33$ V ≈ $V_{ov} = 0.34$ V, so the device just reaches the edge of triode.

For comparison, with $R_1 = 5\ \mathrm{k\Omega}$ ($I_1R_1 = 5$ V ≫ $V_{TH}$) the same calculation gives $I_X \approx 0.69$ mA at $V_X = 1.5$ V and 0.65 mA at 3 V: only a 6 % decrease.

**Small $V_X$.** For $V_X < V_{GS}$ the source sits below ground ($V_S = V_X - V_{GS} < 0$), slightly forward-biasing the source–bulk junction. In the ideal analysis this only lowers $V_{TH}$ a little (first row of the table). If $V_X$ is so low that $V_S$ would fall more than about 0.5 V below ground, the real junction starts conducting and supplies part of $I_1$; that is outside the square-law model and is ignored here.

### Result

$M_1$ is a **source follower whose $V_{GS}$ (the voltage across $R_1$) is set by $I_1$, $R_1$ and $\beta$, not by $V_X$**:

$$I_X = I_1 - \frac{V_{GS}}{R_1}, \qquad \tfrac12\beta\,(V_{GS} - V_{TH})^2 + \frac{V_{GS}}{R_1} = I_1, \qquad g_m = \beta\,(V_{GS} - V_{TH}) = \sqrt{2\beta I_X}.$$

- **Without body effect**, $I_X$ and $g_m$ are constant over the sweep.
- **With body effect** ($V_{SB} = V_S = V_X - V_{GS}$), raising $V_X$ raises $V_{TH}$, so $V_{GS}$ rises and $I_X$ and $g_m$ **decrease**, at a rate $dI_X \approx -dV_{TH}/R_1$ for large $g_mR_1$. The decrease is slight when $I_1R_1 \gg V_{TH}$ (e.g. 6 % for $\beta = 2\ \mathrm{mA/V^2}$, $I_1 = 1$ mA, $R_1 = 5\ \mathrm{k\Omega}$). It is substantial when $I_1R_1$ is close to $V_{TH}$: for $R_1 = 1.5\ \mathrm{k\Omega}$, from 0.22 mA at $V_S = 0$ to 0.11 mA at $V_X = 3$ V.
- $M_1$ conducts only while $I_1R_1 > V_{TH}(V_S)$. If $0.7\ \mathrm{V} < I_1R_1 \lesssim 1.04$ V, the body effect cuts it off within the sweep at $V_X = V_{S,\mathrm{off}} + I_1R_1$ (≈ 1.94 V for $I_1R_1 = 0.9$ V, ≈ 2.71 V for 1.0 V).
- $M_1$ is saturated while $V_X < 2\ \mathrm{V} + V_{TH}(V_S)$, i.e. practically the whole range. Near $V_X = 3$ V it may enter triode, where $I_X$ drops a little more and $g_m = \beta V_{DS}$ falls.

**Common mistake.** Treating the source as grounded so that $V_{GS} = V_X$ and $I_X = \tfrac12\beta(V_X - V_{TH})^2$ grows as a square law. The source is not grounded: it is the node fed by $I_1$, and it follows $V_X$. The gate–source voltage is the voltage across $R_1$, fixed by KCL.

**Common mistake.** Writing $I_X = I_1$. Part of $I_1$ is supplied by $V_X$ through $R_1$ (namely $V_{GS}/R_1$), so $I_X = I_1 - V_{GS}/R_1$ is smaller, and much smaller when $I_1R_1$ is close to $V_{TH}$.

**Common mistake.** Ignoring the body effect and stating that nothing changes with $V_X$. The source rises by almost the full sweep above the grounded bulk, raising $V_{TH}$ by up to about 0.3 V; through $R_1$ this directly reduces $I_X$, and can even cut $M_1$ off if $I_1R_1$ is close to the threshold.
