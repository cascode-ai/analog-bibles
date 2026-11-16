# Detailed solution - R105

**Approach.** Node $X$ is the drain of the bottom device $M_1$ and the *source* of $M_2$, which sits under the PMOS current source $M_3$. KCL at $X$ gives $I_X = I_{D1} - I_{D2}$. $M_1$'s current follows its ordinary output characteristic in $V_X$; the current down the $M_3$–$M_2$ branch is limited by the weaker of the two: $M_3$ (a fixed maximum $I_3$) or $M_2$ (whose gate–source voltage shrinks as $V_X$ rises, until it cuts off).

### Step 1 — KCL at node $X$

Call the common drain of $M_3$ and $M_2$ node $Y$. $I_X$ and the branch current $I_{D2}$ (down through $M_3$ and $M_2$) flow into $X$, and $M_1$'s drain current flows out:

$$I_X + I_{D2} = I_{D1} \quad\Longrightarrow\quad I_X = I_{D1} - I_{D2} .$$

### Step 2 — The bottom device $M_1$

With $V_{GS1} = V_{b2}$ fixed and $V_{DS1} = V_X$:

- **Triode, $V_X < V_{b2} - 0.7$ V:** $I_{D1} = \beta_1[(V_{b2} - 0.7)V_X - \frac12V_X^2]$, rising from 0.
- **Saturation, $V_X \ge V_{b2} - 0.7$ V:** $I_{D1} = I_1 = \frac12\beta_1(V_{b2} - 0.7)^2$.

### Step 3 — The upper branch $M_3$–$M_2$

$M_3$ has the fixed gate drive $V_{SG3} = 3 - V_{b3}$, so it can supply at most

$$I_3 = \frac12\beta_3(V_{DD} - V_{b3} - 0.8)^2 .$$

$M_2$ has $V_{GS2} = V_{b1} - V_X$ and, with $V_{SB2} = V_X$, $V_{TH2} = 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9})$ V, so it can pass at most $\frac12\beta_2(V_{b1} - V_X - V_{TH2})^2$, which **shrinks** as $V_X$ rises.

In series, the weaker device is saturated and sets the current, while the stronger one is pushed into triode with a small drain–source voltage at $Y$:

$$I_{D2} = \min\left\{I_3,\ \tfrac12\beta_2\left(V_{b1} - V_X - V_{TH2}(V_X)\right)^2\right\}.$$

- **Small $V_X$ (typically):** $M_2$ has a large $V_{GS}$, so $M_3$ limits: $I_{D2} = I_3$, $M_3$ saturated, $M_2$ in triode ($Y$ just above $X$).
- **$M_2$ takes over** when its capability drops to $I_3$:
$$\tfrac12\beta_2\left(V_{b1} - V_{X,a} - V_{TH2}\right)^2 = I_3 \quad\Longrightarrow\quad V_{X,a} = V_{b1} - V_{TH2}(V_{X,a}) - \sqrt{\frac{2I_3}{\beta_2}} .$$
Beyond it $M_2$ is saturated, $M_3$ in triode ($Y$ near $V_{DD}$), and $I_{D2} = \frac12\beta_2(V_{b1} - V_X - V_{TH2})^2$ **falls quadratically**.
- **$M_2$ cuts off** at $V_{X,off}$, where $V_{b1} - V_{X,off} = V_{TH2}(V_{X,off})$, slightly below $V_{b1} - 0.7$ V; above it $I_{D2} = 0$.

(If $\frac12\beta_2(V_{b1} - 0.7)^2 < I_3$, $M_2$ is already the weaker device at $V_X = 0$ and the $I_3$ segment is absent.)

### Step 4 — Combine: $I_X = I_{D1} - I_{D2}$

- **Start:** at $V_X = 0$, $I_{D1} = 0$, so
$$I_X(0) = -\min\left\{I_3,\ \tfrac12\beta_2(V_{b1} - 0.7)^2\right\} \;(= -I_3\ \text{when } M_3 \text{ is the limiting device}).$$
- **$M_1$ in triode:** $I_X$ rises as $I_{D1}$ grows.
- **Possible flat part:** if $M_1$ saturates before $M_2$ starts limiting ($V_{b2} - 0.7 < V_{X,a}$), $I_X = I_1 - I_3$ is constant between those two points.
- **$M_2$ limiting:** $I_X$ rises again as $I_{D2}$ falls, crossing zero where $I_{D2} = I_{D1}$.
- **Final plateau:** for $V_X \ge V_{X,off}$, $I_X = I_{D1}$; once $V_X$ also exceeds $V_{b2} - 0.7$ V, this is the constant $I_1$, flat up to 3 V.

The transition points are $V_X = V_{b2} - 0.7$ V, $V_X = V_{X,a}$ and $V_X = V_{X,off}$; their order depends on the bias voltages.

### Step 5 — A numerical example

For illustration take $V_{b3} = 1.5$ V, $V_{b1} = 2.0$ V, $V_{b2} = 1.0$ V, $\beta_1 = \beta_2 = 2\ \mathrm{mA/V^2}$, $\beta_3 = 1\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
I_3 &= \tfrac12(1\ \mathrm{mA/V^2})(3 - 1.5 - 0.8)^2\ \mathrm{V^2} = 0.245\ \mathrm{mA},\\
I_1 &= \tfrac12(2\ \mathrm{mA/V^2})(1.0 - 0.7)^2\ \mathrm{V^2} = 0.090\ \mathrm{mA}\quad(M_1\ \text{saturates at } V_X = 0.3\ \mathrm{V}).
\end{aligned}
$$

At $V_X = 0$, $M_2$ could pass $\frac12(2\ \mathrm{mA/V^2})(1.3\ \mathrm{V})^2 = 1.69$ mA $> I_3$, so $M_3$ limits and $I_X(0) = -0.245$ mA.

**$V_{X,a}$:** $V_{X,a} + V_{TH2}(V_{X,a}) = 2.0 - \sqrt{0.245} = 1.505$ V, which gives $V_{X,a} = 0.668$ V ($V_{TH2} = 0.837$ V).

**$V_{X,off}$:** $u^2 + 0.45u - 2.627 = 0$ gives $u = 1.411$, so $V_{X,off} = 1.092$ V.

| $V_X$ (V) | $I_{D1}$ (mA) | Branch current $I_{D2}$ (mA) | Limiting device | $I_X$ (mA) |
|---|---|---|---|---|
| 0 | 0 | 0.245 | $M_3$ | −0.245 |
| 0.1 | 0.050 | 0.245 | $M_3$ | −0.195 |
| 0.3 | 0.090 | 0.245 | $M_3$ | −0.155 |
| 0.668 | 0.090 | 0.245 | → $M_2$ | −0.155 |
| 0.8 | 0.090 | 0.116 | $M_2$ | −0.026 |
| 0.834 | 0.090 | 0.090 | $M_2$ | 0 |
| 1.0 | 0.090 | 0.011 | $M_2$ | 0.079 |
| 1.092 | 0.090 | 0 | ($M_2$ off) | 0.090 |
| 3.0 | 0.090 | 0 | — | 0.090 |

Here $M_1$ saturates (0.3 V) before $M_2$ starts limiting (0.668 V), so there is a flat segment at $I_1 - I_3 = -0.155$ mA.

### Result

$$I_X = I_{D1} - I_{D2},$$

where $I_{D2}$ is the current coming down through $M_3$–$M_2$. $I_X$ starts at $-I_3$ (or at $-\tfrac12\beta_2(V_{b1} - 0.7)^2$ if $M_2$ is the weaker device), rises as $M_1$'s triode current grows and later as $M_2$'s current falls, and ends flat at $I_1 = \tfrac12\beta_1(V_{b2} - 0.7)^2$ once $M_2$ is off.

- **$M_1$:** triode for $V_X < V_{b2} - 0.7$ V (current rising from 0), then saturated at $I_1$.
- **$M_3$–$M_2$ branch:** $M_3$ can supply at most $I_3 = \tfrac12\beta_3(V_{DD} - V_{b3} - 0.8)^2$; $M_2$ (gate $V_{b1}$, source $X$, body effect $V_{SB} = V_X$) can pass at most $\tfrac12\beta_2(V_{b1} - V_X - V_{TH2})^2$. The branch current is the smaller of the two: typically $I_3$ at small $V_X$ ($M_3$ saturated, $M_2$ in triode); once $V_X > V_{b1} - V_{TH2} - \sqrt{2I_3/\beta_2}$ it is $M_2$'s saturation current ($M_3$ now in triode), which falls quadratically to zero at $V_X = V_{b1} - V_{TH2}(V_X)$.
- **Hence:** $I_X(0) = -\min\{I_3, \tfrac12\beta_2(V_{b1} - 0.7)^2\}$. $I_X$ rises while $M_1$ is in triode, may be flat at $I_1 - I_3$ if $M_1$ saturates before $M_2$ starts limiting, rises again as $I_{D2}$ falls, and equals $I_{D1}$ for $V_X \ge V_{b1} - V_{TH2}$, i.e. the plateau $I_1$ (flat to 3 V) once $V_X$ also exceeds $V_{b2} - 0.7$ V.
- **Transition points:** $V_X = V_{b2} - 0.7$ V; $V_X = V_{b1} - V_{TH2} - \sqrt{2I_3/\beta_2}$; $V_X = V_{b1} - V_{TH2}$. Their order depends on the bias voltages.

**Common mistake.** Treating the upper branch as a constant $I_3$ for all $V_X$, so that $I_X$ ends at $I_1 - I_3$. $X$ is the *source* of $M_2$: as $V_X$ rises, $M_2$ eventually limits the current and then cuts off, so the final plateau is $I_1$.

**Common mistake.** Taking the branch current as always set by $M_2$. At small $V_X$, $M_2$ could pass far more than $M_3$ supplies; the series current is the *smaller* capability, so it starts at $I_3$.

**Common mistake.** Reading $X$ as the drain of $M_2$, or forgetting $M_2$'s body effect. $V_{SB2} = V_X$ raises $V_{TH2}$, which moves both $V_{X,a}$ and the cutoff below the values computed with $V_{TH} = 0.7$ V.
