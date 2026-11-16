# Detailed solution - R078

**Approach.** With $V_{GS}$ fixed, the device is in triode for small $V_{DS}$ and saturated once $V_{DS}$ exceeds the overdrive. In each region, differentiate the square-law current to get $g_m = \partial I_D/\partial V_{GS}$ and the drain–source conductance $\partial I_D/\partial V_{DS}$; their ratio is the intrinsic gain, evaluated point by point.

### Step 1 — Bias quantities and the triode/saturation boundary

$$
\begin{aligned}
\frac{W}{L} &= \frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 100,\\
\beta &= \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.
\end{aligned}
$$

Source and bulk are both at 0 V, so $V_{TH} = V_{TH0} = 0.7$ V and

$$V_{ov} = V_{GS} - V_{TH} = 1.2\ \mathrm{V} - 0.7\ \mathrm{V} = 0.5\ \mathrm{V} .$$

The device is therefore in **triode** for $0 \le V_{DS} < 0.5$ V and in **saturation** for $0.5\ \mathrm{V} \le V_{DS} \le 3$ V.

### Step 2 — Small-signal parameters in the triode region

With $I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \frac12V_{DS}^2\right]$:

$$
\begin{aligned}
g_m &= \frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS},\\
\frac{1}{r_{ds}} &= \frac{\partial I_D}{\partial V_{DS}} = \beta\left[(V_{GS} - V_{TH}) - V_{DS}\right] = \beta\,(V_{ov} - V_{DS}),\\
g_mr_{ds} &= \frac{\beta V_{DS}}{\beta\,(V_{ov} - V_{DS})} = \frac{V_{DS}}{V_{ov} - V_{DS}} = \frac{V_{DS}}{0.5\ \mathrm{V} - V_{DS}} .
\end{aligned}
$$

$\beta$ cancels, so the triode curve depends only on $V_{DS}$ and $V_{ov}$.

**Worked point, $V_{DS} = 0.1$ V:**

$$
\begin{aligned}
g_m &= (13.4\ \mathrm{mA/V^2})(0.1\ \mathrm{V}) = 1.34\ \mathrm{mS},\\
r_{ds} &= \frac{1}{(13.4\ \mathrm{mA/V^2})(0.5 - 0.1)\ \mathrm{V}} = \frac{1}{5.36\ \mathrm{mS}} = 186.6\ \Omega,\\
g_mr_{ds} &= (1.34\ \mathrm{mS})(186.6\ \Omega) = 0.25 .
\end{aligned}
$$

**Other points** from $V_{DS}/(0.5 - V_{DS})$:

| $V_{DS}$ (V) | 0 | 0.05 | 0.1 | 0.2 | 0.25 | 0.3 | 0.4 | 0.45 | 0.48 |
|---|---|---|---|---|---|---|---|---|---|
| $g_mr_{ds}$ | 0 | 0.11 | 0.25 | 0.67 | 1.0 | 1.5 | 4.0 | 9.0 | 24 |

The gain is zero at $V_{DS} = 0$ (where $g_m = \beta V_{DS} = 0$), starts with slope $1/V_{ov} = 2\ \mathrm{V^{-1}}$, and reaches 1 only at $V_{DS} = V_{ov}/2 = 0.25$ V. Near the edge it shoots up, because the channel approaches pinch-off and $r_{ds}$ becomes very large.

### Step 3 — Small-signal parameters in saturation (simple model)

The saturation current is $I_D = \frac12\beta V_{ov}^2(1 + \lambda V_{DS})$. In the simple model the factor $(1+\lambda V_{DS})$ is dropped from $I_D$ and $g_m$, and channel-length modulation appears only through $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
I_D &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{V})^2 = \tfrac12(13.4)(0.25)\ \mathrm{mA} = 1.675\ \mathrm{mA},\\
g_m &= \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{V}) = 6.7\ \mathrm{mS},\\
r_O &= \frac{1}{\lambda I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1.675\ \mathrm{mA})} = 5.97\ \mathrm{k}\Omega,\\
g_mr_O &= (6.7\ \mathrm{mS})(5.97\ \mathrm{k}\Omega) = 40 .
\end{aligned}
$$

In symbols, $g_mr_O = \beta V_{ov}\big/\big(\lambda\cdot\tfrac12\beta V_{ov}^2\big) = 2/(\lambda V_{ov})$. Check:

$$\frac{2}{\lambda V_{ov}} = \frac{2}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{V})} = 40 .$$

Neither $g_m$ nor $r_O$ depends on $V_{DS}$ in this model, so **the curve is flat at 40** for $0.5\ \mathrm{V} \le V_{DS} \le 3$ V.

### Step 4 — Refinement: keeping the $(1+\lambda V_{DS})$ factor

**Saturation.** Differentiating $I_D = \frac12\beta V_{ov}^2(1 + \lambda V_{DS})$ exactly:

$$
\begin{aligned}
g_m &= \frac{\partial I_D}{\partial V_{GS}} = \beta V_{ov}(1 + \lambda V_{DS}),\\
\frac{1}{r_O} &= \frac{\partial I_D}{\partial V_{DS}} = \frac12\beta V_{ov}^2\lambda,\\
g_mr_O &= \frac{\beta V_{ov}(1 + \lambda V_{DS})}{\frac12\lambda\beta V_{ov}^2} = \frac{2}{\lambda V_{ov}}(1 + \lambda V_{DS}) = 40\,(1 + 0.1\,V_{DS}) .
\end{aligned}
$$

This gives 42 at $V_{DS} = 0.5$ V, 44 at 1 V, 48 at 2 V and **52 at 3 V**: a gently rising straight line instead of a flat one.

**Triode, with the same factor.** Writing $I_D = \beta(V_{ov}V_{DS} - \frac12V_{DS}^2)(1+\lambda V_{DS})$ and using the product rule,

$$
\begin{aligned}
g_m &= \beta V_{DS}(1 + \lambda V_{DS}),\\
\frac{1}{r_{ds}} &= \beta(V_{ov} - V_{DS})(1 + \lambda V_{DS}) + \beta\lambda\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right).
\end{aligned}
$$

At the edge ($V_{DS} = V_{ov}$) the first term of $1/r_{ds}$ vanishes and the second becomes $\frac12\beta\lambda V_{ov}^2$, exactly the saturation value. So the gain no longer diverges at the edge; it reaches $2(1+\lambda V_{ov})/(\lambda V_{ov}) = 42$ and joins the saturation line continuously. Away from the edge the values hardly change: 0.25 at 0.1 V, 0.97 at 0.25 V, 3.6 at 0.4 V, 7.3 at 0.45 V, 15 at 0.48 V.

### Step 5 — The plot

Horizontal axis $V_{DS}$ from 0 to 3 V, vertical axis $g_m \times r_{ds}$:

| Region | $V_{DS}$ | Intrinsic gain | Shape |
|---|---|---|---|
| Triode | 0 → 0.5 V | $V_{DS}/(0.5 - V_{DS})$: 0, 0.25, 1, 4, 9 at 0, 0.1, 0.25, 0.4, 0.45 V | starts at 0 with slope 2 V⁻¹, then rises ever more steeply |
| Edge | 0.5 V | jumps up to the plateau (≈ 42 if λ is kept in the triode equation) | break point |
| Saturation | 0.5 → 3 V | 40 (simple model), or $40(1 + 0.1V_{DS})$: 42 → 52 | flat, or a gentle linear rise |

In triode the drain controls the current almost as strongly as the gate, so $r_{ds}$ is only hundreds of ohms; after pinch-off only channel-length modulation remains, $r_O$ jumps to kilo-ohms, and the gain jumps to $2/(\lambda V_{ov})$.

### Result

- **Triode, $0 \le V_{DS} < 0.5$ V:** $g_mr_{ds} = V_{DS}/(0.5\ \mathrm{V} - V_{DS})$, rising from 0 (0.25 at 0.1 V, 1 at 0.25 V, 4 at 0.4 V, 9 at 0.45 V) and climbing steeply toward the edge.
- **Break point** at $V_{DS} = V_{GS} - V_{TH} = 0.5$ V ($\beta = 13.4\ \mathrm{mA/V^2}$, $V_{ov} = 0.5$ V).
- **Saturation, $0.5\ \mathrm{V} \le V_{DS} \le 3$ V** ($I_D \approx 1.68$ mA, $g_m = 6.7$ mS, $r_O \approx 6$ kΩ): a plateau $g_mr_O = 2/(\lambda V_{ov}) = 40$. If the $(1+\lambda V_{DS})$ factor is kept in $g_m$, it is $40(1 + 0.1V_{DS})$, rising gently from 42 at the edge to 52 at 3 V.

**Common mistake.** Putting the break point at $V_{DS} = V_{GS} = 1.2$ V or at $V_{DS} = V_{TH} = 0.7$ V. The boundary is set by the overdrive: $V_{DS} = V_{GS} - V_{TH} = 0.5$ V.

**Common mistake.** Using the saturation formula $g_m = \beta V_{ov}$ in triode, which gives a large gain there. In triode $g_m = \beta V_{DS}$ is smaller and $r_{ds} = 1/[\beta(V_{ov} - V_{DS})]$ is only a few hundred ohms.

**Common mistake.** Dropping the $\tfrac12$ in $I_D = \tfrac12\beta V_{ov}^2$, which halves $r_O$ and gives a plateau of 20 instead of $2/(\lambda V_{ov}) = 40$.
