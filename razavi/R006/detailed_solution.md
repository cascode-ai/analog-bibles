# Detailed solution - R006

**Approach.** First decide which terminal of $M_1$ is the source and show that the transistor can only be in saturation. Then use the square-law saturation current, with the body effect included because the source rises above the grounded bulk, to find $I_X$ and the transconductance $g_m$ point by point. Finally, use their derivatives to describe the shape of the curves.

### Step 1 — Identify the terminals and write the terminal voltages

Reading the circuit: the gate of $M_1$ and its upper diffusion terminal are both tied to $V_{DD} = 3$ V. The lower diffusion terminal connects to the "+" side of the voltage source $V_X$, and the bulk (substrate) is grounded. $I_X$ is the current that flows down out of $M_1$ into $V_X$.

A MOSFET is physically symmetric. In an NMOS the **source** is whichever diffusion terminal is at the *lower* potential, because that is where the electrons enter the channel. Here $V_X \le 1.5\ \mathrm{V} < V_{DD} = 3$ V, so:

- the terminal at $V_X$ is the source ($V_S = V_X$),
- the terminal at $V_{DD}$ is the drain ($V_D = 3$ V),
- the gate is at $V_G = 3$ V and the bulk is at $V_B = 0$.

The three voltages that control the device are therefore

$$
\begin{aligned}
V_{GS} &= V_G - V_S = 3 - V_X,\\
V_{DS} &= V_D - V_S = 3 - V_X,\\
V_{SB} &= V_S - V_B = V_X - 0 = V_X .
\end{aligned}
$$

Here $V_{GS}$, $V_{DS}$ and $V_{SB}$ are the gate–source, drain–source and source–bulk voltages. The gate draws no DC current, so Kirchhoff's current law (KCL) at the source node gives

$$I_X = I_D ,$$

where $I_D$ is the drain current of $M_1$.

### Step 2 — Region of operation

An NMOS is **on** when $V_{GS} > V_{TH}$, where $V_{TH}$ is the threshold voltage. It is in **saturation** when, in addition,

$$V_{DS} \ge V_{GS} - V_{TH}.$$

In this circuit the gate is tied to the drain (a "diode-connected" transistor), so $V_{DS} = V_{GS}$. For any positive threshold this gives

$$V_{DS} = V_{GS} > V_{GS} - V_{TH}.$$

So **whenever $M_1$ conducts, it is saturated**, and it can never enter the triode region. It remains to check with numbers (Step 4) that $M_1$ stays on, i.e. $V_{GS} > V_{TH}$, over the whole range $0 \le V_X \le 1.5$ V.

### Step 3 — Threshold voltage with the body effect

The bulk is at 0 V but the source sits at $V_X$. The source–bulk junction is therefore reverse-biased by $V_{SB} = V_X$, and this raises the threshold voltage (the **body effect**):

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right).$$

The symbols are:

- $V_{TH0} = 0.7$ V, the threshold voltage at $V_{SB} = 0$;
- $\gamma = 0.45\ \mathrm{V^{1/2}}$, the body-effect coefficient;
- $2|\phi_F| = 0.9$ V, twice the Fermi potential of the substrate.

Substitute the numbers ($\sqrt{0.9} = 0.9487$) and $V_{SB} = V_X$:

$$V_{TH} = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.9487\right)\ \mathrm{V}.$$

Evaluate this at the ends and at a few interior points:

- $V_X = 0$: the bracket is $\sqrt{0.9} - 0.9487 = 0$, so $V_{TH} = 0.7000$ V.
- $V_X = 0.5$ V: $\sqrt{1.4} = 1.1832$, then $1.1832 - 0.9487 = 0.2345$, then $0.45 \times 0.2345 = 0.1055$, so $V_{TH} = 0.8055$ V.
- $V_X = 1.0$ V: $\sqrt{1.9} = 1.3784$, then $1.3784 - 0.9487 = 0.4297$, then $0.45 \times 0.4297 = 0.1934$, so $V_{TH} = 0.8934$ V.
- $V_X = 1.5$ V: $\sqrt{2.4} = 1.5492$, then $1.5492 - 0.9487 = 0.6005$, then $0.45 \times 0.6005 = 0.2702$, so $V_{TH} = 0.9702$ V.

Over the range, the threshold rises by about 0.27 V.

### Step 4 — The current $I_X$ (square law in saturation)

No channel-length modulation is specified, so take $\lambda = 0$. The **square-law saturation current** is

$$I_X = I_D = \frac12\,\mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH})^2 = \frac12\,\beta\,V_{ov}^2 .$$

Here $\beta = \mu_nC_{ox}W/L$, and $V_{ov} = V_{GS} - V_{TH}$ is the **overdrive voltage**. Using Step 1, $V_{GS} = 3 - V_X$, so

$$V_{ov} = 3 - V_X - V_{TH}(V_X).$$

Evaluate this at the same four points:

- $V_X = 0$: $V_{ov} = 3 - 0 - 0.7000 = 2.300$ V, $V_{ov}^2 = 5.290\ \mathrm{V^2}$, so $I_X = \tfrac12(5.290\ \mathrm{V^2})\,\beta = 2.645\,\beta$.
- $V_X = 0.5$ V: $V_{ov} = 3 - 0.5 - 0.8055 = 1.6945$ V, $V_{ov}^2 = 2.871\ \mathrm{V^2}$, so $I_X = \tfrac12(2.871\ \mathrm{V^2})\,\beta = 1.436\,\beta$.
- $V_X = 1.0$ V: $V_{ov} = 3 - 1.0 - 0.8934 = 1.1066$ V, $V_{ov}^2 = 1.2246\ \mathrm{V^2}$, so $I_X = \tfrac12(1.2246\ \mathrm{V^2})\,\beta = 0.612\,\beta$.
- $V_X = 1.5$ V: $V_{ov} = 3 - 1.5 - 0.9702 = 0.5298$ V, $V_{ov}^2 = 0.2807\ \mathrm{V^2}$, so $I_X = \tfrac12(0.2807\ \mathrm{V^2})\,\beta = 0.140\,\beta$.

Units: with $\beta$ in $\mathrm{A/V^2}$, $I_X$ comes out in amperes. For example, $\beta = 1\ \mathrm{mA/V^2}$ gives $I_X$ falling from 2.65 mA to 0.14 mA.

**Region check.** $V_{ov} > 0$ at every point (the smallest value is 0.53 V, at $V_X = 1.5$ V). So $V_{GS} > V_{TH}$ throughout: $M_1$ is on, and by Step 2 it is saturated over the whole range.

### Step 5 — The transconductance $g_m$

The transconductance is defined as $g_m = \partial I_D/\partial V_{GS}$, with $V_{DS}$ and $V_{SB}$ held fixed. Differentiate the square law:

$$g_m = \frac{\partial}{\partial V_{GS}}\left[\frac12\beta(V_{GS} - V_{TH})^2\right] = \beta\,(V_{GS} - V_{TH}) = \beta\,V_{ov}.$$

Eliminating $V_{ov}$ with $I_D = \tfrac12\beta V_{ov}^2$ gives the equivalent form $g_m = \sqrt{2\beta I_D}$.

So $g_m$ is $\beta$ times the overdrive found in Step 4:

- $g_m = 2.300\,\beta$ at $V_X = 0$;
- $g_m = 1.694\,\beta$ at 0.5 V;
- $g_m = 1.107\,\beta$ at 1.0 V;
- $g_m = 0.530\,\beta$ at 1.5 V.

With $\beta$ in $\mathrm{A/V^2}$, $g_m$ is in A/V. For example, $\beta = 1\ \mathrm{mA/V^2}$ gives $g_m$ falling from 2.3 mS to 0.53 mS.

### Step 6 — Shape of the curves: slopes and curvature

To sketch the curves correctly we need their slopes. Define

$$\eta \equiv \frac{\partial V_{TH}}{\partial V_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}}.$$

$\eta$ measures how many volts the threshold rises per volt of $V_{SB}$. Since $V_{SB} = V_X$, differentiate the overdrive term by term:

$$\frac{dV_{ov}}{dV_X} = \frac{d}{dV_X}\left[3 - V_X - V_{TH}\right] = -1 - \eta .$$

Raising $V_X$ by 1 V lowers $V_{GS}$ by 1 V and *also* raises $V_{TH}$ by $\eta$ volts, so the overdrive shrinks by $(1+\eta)$ volts. Applying the chain rule to $g_m = \beta V_{ov}$ and $I_X = \tfrac12\beta V_{ov}^2$:

$$
\begin{aligned}
\frac{dg_m}{dV_X} &= \beta\,\frac{dV_{ov}}{dV_X} = -\beta\,(1+\eta),\\
\frac{dI_X}{dV_X} &= \beta V_{ov}\,\frac{dV_{ov}}{dV_X} = -(1+\eta)\,g_m .
\end{aligned}
$$

Numbers at the two ends:

- At $V_X = 0$: $\eta = 0.45/(2\times0.9487) = 0.237$. Then $dg_m/dV_X = -1.24\beta$ per volt and $dI_X/dV_X = -(1.237)(2.30\beta) = -2.85\beta$ per volt.
- At $V_X = 1.5$ V: $\eta = 0.45/(2\times1.5492) = 0.145$. Then $dg_m/dV_X = -1.15\beta$ per volt and $dI_X/dV_X = -(1.145)(0.53\beta) = -0.61\beta$ per volt.

All points (β in A/V²; $I_X$ in A; $g_m$ in A/V):

| $V_X$ (V) | $V_{SB}$ (V) | $V_{TH}$ (V) | $V_{ov}$ (V) | $I_X$ | $g_m$ | $dg_m/dV_X$ |
|---|---|---|---|---|---|---|
| 0 | 0 | 0.700 | 2.300 | $2.645\beta$ | $2.300\beta$ | $-1.24\beta$/V |
| 0.25 | 0.25 | 0.756 | 1.994 | $1.989\beta$ | $1.994\beta$ | $-1.21\beta$/V |
| 0.50 | 0.50 | 0.806 | 1.694 | $1.436\beta$ | $1.694\beta$ | $-1.19\beta$/V |
| 0.75 | 0.75 | 0.851 | 1.399 | $0.978\beta$ | $1.399\beta$ | $-1.18\beta$/V |
| 1.00 | 1.00 | 0.893 | 1.107 | $0.612\beta$ | $1.107\beta$ | $-1.16\beta$/V |
| 1.25 | 1.25 | 0.933 | 0.817 | $0.334\beta$ | $0.817\beta$ | $-1.15\beta$/V |
| 1.50 | 1.50 | 0.970 | 0.530 | $0.140\beta$ | $0.530\beta$ | $-1.15\beta$/V |

What the sketch looks like:

- **$I_X$ versus $V_X$**: monotonically decreasing and concave up, roughly a parabola. It starts steep ($-2.85\beta$ per volt) at $2.65\beta$ and flattens toward $0.14\beta$ at $V_X = 1.5$ V. The parabola's minimum, where the current reaches zero, lies beyond the plotted range (Step 7).
- **$g_m$ versus $V_X$**: an almost straight line falling from $2.30\beta$ to $0.53\beta$. Its slope eases slightly, from $-1.24\beta$ to $-1.15\beta$ per volt, so the curve is very slightly concave up. Without the body effect it would be an exactly straight line of slope $-\beta$ per volt. The body effect makes it fall faster.

### Step 7 — Where $M_1$ would turn off (outside the range)

$M_1$ turns off when $V_{ov} = 0$, i.e. $3 - V_X = V_{TH}(V_X)$. To solve, put $u = \sqrt{0.9 + V_X}$, so that $V_X = u^2 - 0.9$:

$$
\begin{aligned}
3 - (u^2 - 0.9) &= 0.7 + 0.45u - 0.45(0.9487)\\
3.9 - u^2 &= 0.2731 + 0.45u\\
u^2 + 0.45u - 3.6269 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 4(3.6269)}}{2} = \frac{-0.45 + 3.8354}{2} = 1.6927\\
V_X &= u^2 - 0.9 = 2.8652 - 0.9 = 1.965\ \mathrm{V}.
\end{aligned}
$$

Without the body effect, turn-off would occur at $3 - V_X = 0.7$, i.e. $V_X = 2.3$ V. Both values lie above 1.5 V, which confirms that $M_1$ conducts over the entire requested range.

For comparison, at $V_X = 1.5$ V without the body effect the results would be $V_{ov} = 0.8$ V, $I_X = 0.32\beta$ and $g_m = 0.8\beta$. The body effect therefore cuts the end-point current by more than half.

### Result

$M_1$ (gate and drain at $V_{DD}$, source at $V_X$, bulk grounded) is **saturated over the whole range**, and

$$I_X = \tfrac12\beta\,(3 - V_X - V_{TH})^2, \qquad g_m = \beta\,(3 - V_X - V_{TH}),$$

$$V_{TH} = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right)\ \mathrm{V}.$$

- $V_{TH}$: 0.70 → 0.81 → 0.89 → 0.97 V at $V_X$ = 0, 0.5, 1.0, 1.5 V.
- $I_X$: 2.65β → 1.44β → 0.61β → 0.14β, falling roughly quadratically (concave up). The overdrive is 2.3 V at the start and 0.53 V at the end.
- $g_m$: 2.3β → 1.69β → 1.11β → 0.53β, falling almost linearly. The slope magnitude is $\beta(1+\eta)$, from about 1.24β/V to 1.15β/V, which is faster than the $\beta$/V decline without body effect.
- $M_1$ would turn off only at $V_X \approx 1.97$ V (2.3 V without body effect), outside the range.

**Common mistake.** Ignoring the body effect (keeping $V_{TH} = 0.7$ V). The bulk stays at ground while the source moves up with $V_X$, so $V_{SB} = V_X \neq 0$. Neglecting this gives $I_X = 0.32\beta$ and $g_m = 0.8\beta$ at 1.5 V, which is more than twice the correct current.

**Common mistake.** Claiming that $M_1$ enters the triode region as $V_X$ rises. Here $V_{DS} = V_{GS}$ always, so $V_{DS} > V_{GS} - V_{TH}$ automatically. The device can only be saturated or off.

**Common mistake.** Mixing up source and drain. Taking the $V_{DD}$ terminal as the source gives $V_{GS} = 0$ and a transistor that is "always off". Treating $V_X$ as if it were a drain voltage leads to an $I_X$ that grows with $V_X$. The source of an NMOS is its lower-potential terminal, here the $V_X$ node, so raising $V_X$ *reduces* $V_{GS}$ and the current falls. For the same reason $g_m = \beta V_{ov}$ is not constant: it follows the overdrive down.
