# Detailed solution - R079

**Approach.** The negative bulk voltage raises the threshold through the body effect. Compute the new $V_{TH}$ and the reduced overdrive, then evaluate the intrinsic gain $g_m r_{ds}$ in triode and in saturation with the square-law equations and the new threshold.

### Step 1 — Threshold voltage with the body effect

$$V_{SB} = V_S - V_B = 0 - (-1\ \mathrm{V}) = +1\ \mathrm{V},$$

which reverse-biases the source–bulk junction and raises the threshold:

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right),$$

$$
\begin{aligned}
\sqrt{2|\phi_F| + V_{SB}} &= \sqrt{0.9 + 1}\ \sqrt{\mathrm{V}} = \sqrt{1.9}\ \sqrt{\mathrm{V}} = 1.3784\ \sqrt{\mathrm{V}},\\
\sqrt{2|\phi_F|} &= \sqrt{0.9}\ \sqrt{\mathrm{V}} = 0.9487\ \sqrt{\mathrm{V}},\\
V_{TH} &= 0.7\ \mathrm{V} + (0.45\ \mathrm{V^{1/2}})(1.3784 - 0.9487)\ \mathrm{V^{1/2}}\\
&= 0.7\ \mathrm{V} + (0.45)(0.4297)\ \mathrm{V} = 0.7\ \mathrm{V} + 0.1934\ \mathrm{V} = 0.893\ \mathrm{V}.
\end{aligned}
$$

The threshold rises by about 0.19 V.

### Step 2 — Overdrive, current factor and the region boundary

$$V_{ov} = V_{GS} - V_{TH} = 1.2\ \mathrm{V} - 0.893\ \mathrm{V} = 0.307\ \mathrm{V}$$

(0.5 V without the body effect), and

$$
\begin{aligned}
\frac{W}{L} &= \frac{50}{0.5} = 100,\\
\beta &= \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.
\end{aligned}
$$

The device is in **triode** for $0 \le V_{DS} < 0.307$ V and **saturated** for $0.307\ \mathrm{V} \le V_{DS} \le 3$ V: the break point has moved from 0.5 V (no body effect) down to 0.31 V.

$g_{mb}$ does not appear: the problem asks for the gate transconductance, and in any case bulk and source are both at fixed potentials, so $v_{bs} = 0$. The body effect enters only through the higher $V_{TH}$ and smaller $V_{ov}$.

### Step 3 — Triode region ($V_{DS} < 0.307$ V)

With $I_D = \beta\left[V_{ov}V_{DS} - \frac12V_{DS}^2\right]$:

$$
\begin{aligned}
g_m &= \frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS}, \qquad \frac{1}{r_{ds}} = \frac{\partial I_D}{\partial V_{DS}} = \beta\,(V_{ov} - V_{DS}),\\
g_mr_{ds} &= \frac{\beta V_{DS}}{\beta\,(V_{ov} - V_{DS})} = \frac{V_{DS}}{0.307\ \mathrm{V} - V_{DS}} .
\end{aligned}
$$

**Worked point, $V_{DS} = 0.1$ V:**

$$
\begin{aligned}
g_m &= (13.4\ \mathrm{mA/V^2})(0.1\ \mathrm{V}) = 1.34\ \mathrm{mS},\\
r_{ds} &= \frac{1}{(13.4\ \mathrm{mA/V^2})(0.307 - 0.1)\ \mathrm{V}} = \frac{1}{2.77\ \mathrm{mS}} = 361\ \Omega,\\
g_mr_{ds} &= (1.34\ \mathrm{mS})(361\ \Omega) = 0.48 .
\end{aligned}
$$

**Other points:**

| $V_{DS}$ (V) | 0 | 0.05 | 0.1 | 0.15 | 0.2 | 0.25 | 0.28 | 0.30 |
|---|---|---|---|---|---|---|---|---|
| $g_mr_{ds}$ | 0 | 0.19 | 0.48 | 0.96 | 1.9 | 4.4 | 10.5 | 45 |

The gain is zero at $V_{DS} = 0$, equals 1 at $V_{DS} = V_{ov}/2 \approx 0.15$ V, and rises ever more steeply toward the edge, where this simple model ($\lambda$ left out of the triode equation) diverges. If $(1+\lambda V_{DS})$ is kept in the triode equation, $1/r_{ds}$ approaches $\frac12\lambda\beta V_{ov}^2$ at the edge instead of zero, and the curve joins the saturation value continuously (0.48 at 0.1 V, 4.1 at 0.25 V, 27 at 0.3 V and 67 at the edge).

### Step 4 — Saturation ($V_{DS} \ge 0.307$ V)

With $I_D = \frac12\beta V_{ov}^2$ (simple model), $g_m = \beta V_{ov}$ and $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
V_{ov}^2 &= (0.307\ \mathrm{V})^2 = 0.0940\ \mathrm{V^2},\\
I_D &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.0940\ \mathrm{V^2}) = 0.630\ \mathrm{mA},\\
g_m &= (13.4\ \mathrm{mA/V^2})(0.307\ \mathrm{V}) = 4.11\ \mathrm{mS},\\
r_O &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.630\ \mathrm{mA})} = 15.9\ \mathrm{k}\Omega,\\
g_mr_O &= (4.11\ \mathrm{mS})(15.9\ \mathrm{k}\Omega) = 65 .
\end{aligned}
$$

In symbols: $g_mr_O = \beta V_{ov}/(\lambda\cdot\frac12\beta V_{ov}^2) = 2/(\lambda V_{ov}) = 2/[(0.1\ \mathrm{V^{-1}})(0.3066\ \mathrm{V})] = 65.2$, the same number, independent of $V_{DS}$: the curve is **flat at about 65**.

**With the $(1+\lambda V_{DS})$ factor kept** in $I_D = \frac12\beta V_{ov}^2(1+\lambda V_{DS})$:

$$
g_m = \beta V_{ov}(1+\lambda V_{DS}), \qquad \frac{1}{r_O} = \frac{\partial I_D}{\partial V_{DS}} = \frac12\lambda\beta V_{ov}^2,
$$

$$
g_mr_O = \frac{2}{\lambda V_{ov}}(1 + \lambda V_{DS}) = 65.2\,(1 + 0.1\,V_{DS}) ,
$$

which rises gently from about 67 at the edge to $65.2\times1.3 \approx 85$ at $V_{DS} = 3$ V.

### Step 5 — The plot, and comparison with zero bulk voltage

Horizontal axis $V_{DS}$ from 0 to 3 V, vertical axis $g_m r_{ds}$:

| Region | $V_{DS}$ | Intrinsic gain |
|---|---|---|
| Triode | 0 → 0.307 V | $V_{DS}/(0.307 - V_{DS})$: 0, 0.48, 1.9, 4.4 at 0, 0.1, 0.2, 0.25 V; steep rise near the edge |
| Break point | 0.307 V | $V_{DS} = V_{GS} - V_{TH}$ |
| Saturation | 0.307 → 3 V | flat ≈ 65 (or $65(1 + 0.1V_{DS})$: 67 → 85) |

The shape is the same as with the bulk at 0 V, but:

| | $V_B = 0$ | $V_B = -1$ V |
|---|---|---|
| $V_{TH}$ | 0.700 V | 0.893 V |
| $V_{ov}$ (break point) | 0.500 V | 0.307 V |
| $I_D$ in saturation | 1.68 mA | 0.63 mA |
| $g_m$ in saturation | 6.7 mS | 4.1 mS |
| $g_mr_O$ plateau | 40 | 65 |

The smaller overdrive lowers $I_D \propto V_{ov}^2$ faster than $g_m \propto V_{ov}$, so $g_m/I_D = 2/V_{ov}$, and with it $g_mr_O = (g_m/I_D)/\lambda$, rises, at the price of a lower current and a slower device.

### Result

With $V_B = -1$ V, the body effect raises the threshold to $V_{TH} = 0.7 + 0.45(\sqrt{1.9} - \sqrt{0.9}) \approx 0.893$ V, so $V_{ov} \approx 0.307$ V.

- **Triode, $V_{DS} < 0.307$ V:** $g_mr_{ds} = V_{DS}/(0.307\ \mathrm{V} - V_{DS})$, rising from 0 (0.19 at 0.05 V, 0.48 at 0.1 V, 1.9 at 0.2 V) and climbing steeply toward the edge.
- **Break point** at $V_{DS} \approx 0.31$ V (instead of 0.5 V with zero bulk voltage).
- **Saturation:** a plateau $g_mr_O = 2/(\lambda V_{ov}) \approx 65$ (about 67 at the edge rising to about 85 at 3 V if the $(1+\lambda V_{DS})$ factor is kept in $g_m$), higher than the plateau of 40 obtained with zero bulk voltage, while the current falls to about 0.63 mA.

**Common mistake.** Getting the sign of $V_{SB}$ wrong and concluding that the negative bulk voltage *lowers* the threshold. $V_{SB} = V_S - V_B = +1$ V *raises* $V_{TH}$; with $V_{SB} = -1$ V the formula would even need $\sqrt{0.9 - 1}$.

**Common mistake.** Ignoring the body effect and redrawing the zero-bulk curve (break point at 0.5 V, plateau 40). The bulk bias moves both the break point and the plateau.

**Common mistake.** Adding $g_{mb}$ to $g_m$ in the intrinsic gain. Bulk and source are both at fixed potentials, so $v_{bs} = 0$ and the $g_{mb}$ source does nothing here.
