# Detailed solution - R006

**Approach.** $M_1$ is diode-connected with its source at $V_X$, so it can only be saturated. Use the square-law saturation current, with the body effect because the source rises above the grounded bulk, to find $I_X$ and $g_m$ point by point, then use their derivatives to fix the shape of the curves.

### Step 1 — Terminal voltages and region of operation

The lower-potential terminal, at $V_X \le 1.5$ V, is the source; the terminal at $V_{DD} = 3$ V is the drain. With the gate at 3 V and the bulk at 0:

$$V_{GS} = V_{DS} = 3 - V_X, \qquad V_{SB} = V_X ,$$

and, since the gate draws no current, $I_X = I_D$.

Gate and drain are tied, so $V_{DS} = V_{GS} > V_{GS} - V_{TH}$: **whenever $M_1$ conducts, it is saturated**, never in triode. Step 3 checks with numbers that it stays on ($V_{GS} > V_{TH}$) over the whole range $0 \le V_X \le 1.5$ V.

### Step 2 — Threshold voltage with the body effect

The source–bulk junction is reverse-biased by $V_{SB} = V_X$, which raises the threshold ($\sqrt{0.9} = 0.9487$):

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.9487\right)\ \mathrm{V}.$$

- $V_X = 0$: the bracket is $\sqrt{0.9} - 0.9487 = 0$, so $V_{TH} = 0.7000$ V.
- $V_X = 0.5$ V: $\sqrt{1.4} = 1.1832$, then $1.1832 - 0.9487 = 0.2345$, then $0.45 \times 0.2345 = 0.1055$, so $V_{TH} = 0.8055$ V.
- $V_X = 1.0$ V: $\sqrt{1.9} = 1.3784$, then $1.3784 - 0.9487 = 0.4297$, then $0.45 \times 0.4297 = 0.1934$, so $V_{TH} = 0.8934$ V.
- $V_X = 1.5$ V: $\sqrt{2.4} = 1.5492$, then $1.5492 - 0.9487 = 0.6005$, then $0.45 \times 0.6005 = 0.2702$, so $V_{TH} = 0.9702$ V.

Over the range, the threshold rises by about 0.27 V.

### Step 3 — The current $I_X$

With $\lambda = 0$ (not specified) and $\beta = \mu_nC_{ox}W/L$:

$$I_X = \frac12\,\beta\,V_{ov}^2, \qquad V_{ov} = V_{GS} - V_{TH} = 3 - V_X - V_{TH}(V_X).$$

- $V_X = 0$: $V_{ov} = 3 - 0 - 0.7000 = 2.300$ V, $V_{ov}^2 = 5.290\ \mathrm{V^2}$, so $I_X = \tfrac12(5.290\ \mathrm{V^2})\,\beta = 2.645\,\beta$.
- $V_X = 0.5$ V: $V_{ov} = 3 - 0.5 - 0.8055 = 1.6945$ V, $V_{ov}^2 = 2.871\ \mathrm{V^2}$, so $I_X = \tfrac12(2.871\ \mathrm{V^2})\,\beta = 1.436\,\beta$.
- $V_X = 1.0$ V: $V_{ov} = 3 - 1.0 - 0.8934 = 1.1066$ V, $V_{ov}^2 = 1.2246\ \mathrm{V^2}$, so $I_X = \tfrac12(1.2246\ \mathrm{V^2})\,\beta = 0.612\,\beta$.
- $V_X = 1.5$ V: $V_{ov} = 3 - 1.5 - 0.9702 = 0.5298$ V, $V_{ov}^2 = 0.2807\ \mathrm{V^2}$, so $I_X = \tfrac12(0.2807\ \mathrm{V^2})\,\beta = 0.140\,\beta$.

With $\beta$ in $\mathrm{A/V^2}$, $I_X$ is in amperes; for example, $\beta = 1\ \mathrm{mA/V^2}$ gives $I_X$ falling from 2.65 mA to 0.14 mA.

$V_{ov} > 0$ at every point (smallest 0.53 V, at $V_X = 1.5$ V), so $M_1$ is on, and therefore saturated, over the whole range.

### Step 4 — The transconductance $g_m$

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta\,V_{ov} = \beta\,(3 - V_X - V_{TH}),$$

i.e. $\beta$ times the overdrive of Step 3:

- $g_m = 2.300\,\beta$ at $V_X = 0$;
- $g_m = 1.694\,\beta$ at 0.5 V;
- $g_m = 1.107\,\beta$ at 1.0 V;
- $g_m = 0.530\,\beta$ at 1.5 V.

With $\beta$ in $\mathrm{A/V^2}$, $g_m$ is in A/V; for example, $\beta = 1\ \mathrm{mA/V^2}$ gives $g_m$ falling from 2.3 mS to 0.53 mS.

### Step 5 — Shape of the curves: slopes and curvature

Let $\eta = \partial V_{TH}/\partial V_{SB} = \gamma/\left(2\sqrt{2|\phi_F| + V_{SB}}\right)$. Since $V_{SB} = V_X$,

$$\frac{dV_{ov}}{dV_X} = \frac{d}{dV_X}\left[3 - V_X - V_{TH}\right] = -1 - \eta ,$$

so, by the chain rule,

$$
\begin{aligned}
\frac{dg_m}{dV_X} &= \beta\,\frac{dV_{ov}}{dV_X} = -\beta\,(1+\eta),\\
\frac{dI_X}{dV_X} &= \beta V_{ov}\,\frac{dV_{ov}}{dV_X} = -(1+\eta)\,g_m .
\end{aligned}
$$

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

- **$I_X$ versus $V_X$**: monotonically decreasing and concave up, roughly a parabola. It starts steep ($-2.85\beta$ per volt) at $2.65\beta$ and flattens toward $0.14\beta$ at $V_X = 1.5$ V. The parabola's minimum, where the current reaches zero, lies beyond the plotted range (Step 6).
- **$g_m$ versus $V_X$**: an almost straight line falling from $2.30\beta$ to $0.53\beta$. Its slope eases slightly, from $-1.24\beta$ to $-1.15\beta$ per volt, so the curve is very slightly concave up. Without the body effect it would be an exactly straight line of slope $-\beta$ per volt; the body effect makes it fall faster.

### Step 6 — Where $M_1$ would turn off (outside the range)

$M_1$ turns off when $V_{ov} = 0$, i.e. $3 - V_X = V_{TH}(V_X)$. Put $u = \sqrt{0.9 + V_X}$, so that $V_X = u^2 - 0.9$:

$$
\begin{aligned}
3 - (u^2 - 0.9) &= 0.7 + 0.45u - 0.45(0.9487)\\
3.9 - u^2 &= 0.2731 + 0.45u\\
u^2 + 0.45u - 3.6269 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 4(3.6269)}}{2} = \frac{-0.45 + 3.8354}{2} = 1.6927\\
V_X &= u^2 - 0.9 = 2.8652 - 0.9 = 1.965\ \mathrm{V}.
\end{aligned}
$$

Without the body effect, turn-off would occur at $3 - V_X = 0.7$, i.e. $V_X = 2.3$ V. Both values lie above 1.5 V, so $M_1$ conducts over the entire requested range.

For comparison, at $V_X = 1.5$ V without the body effect, $V_{ov} = 0.8$ V, $I_X = 0.32\beta$ and $g_m = 0.8\beta$: the body effect cuts the end-point current by more than half.

### Result

$M_1$ (gate and drain at $V_{DD}$, source at $V_X$, bulk grounded) is **saturated over the whole range**, and

$$I_X = \tfrac12\beta\,(3 - V_X - V_{TH})^2, \qquad g_m = \beta\,(3 - V_X - V_{TH}),$$

$$V_{TH} = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right)\ \mathrm{V}.$$

- $V_{TH}$: 0.70 → 0.81 → 0.89 → 0.97 V at $V_X$ = 0, 0.5, 1.0, 1.5 V.
- $I_X$: 2.65β → 1.44β → 0.61β → 0.14β, falling roughly quadratically (concave up). The overdrive is 2.3 V at the start and 0.53 V at the end.
- $g_m$: 2.3β → 1.69β → 1.11β → 0.53β, falling almost linearly. The slope magnitude is $\beta(1+\eta)$, from about 1.24β/V to 1.15β/V, which is faster than the $\beta$/V decline without body effect.
- $M_1$ would turn off only at $V_X \approx 1.97$ V (2.3 V without body effect), outside the range.

**Common mistake.** Ignoring the body effect (keeping $V_{TH} = 0.7$ V), although the source moves up with $V_X$ while the bulk stays grounded. This gives $I_X = 0.32\beta$ and $g_m = 0.8\beta$ at 1.5 V, more than twice the correct current.

**Common mistake.** Claiming that $M_1$ enters the triode region as $V_X$ rises. $V_{DS} = V_{GS}$ always, so the device can only be saturated or off.

**Common mistake.** Mixing up source and drain: taking the $V_{DD}$ terminal as the source gives $V_{GS} = 0$ ("always off"), and treating $V_X$ as a drain voltage gives an $I_X$ that grows with $V_X$. The source is the $V_X$ node, so raising $V_X$ *reduces* $V_{GS}$, and both $I_X$ and $g_m = \beta V_{ov}$ fall.
