# Detailed solution - R078

**Approach.** With $V_{GS}$ fixed, the device is in the triode region for small $V_{DS}$ and in saturation once $V_{DS}$ exceeds the overdrive. In each region, differentiate the square-law current equation to get the transconductance $g_m = \partial I_D/\partial V_{GS}$ and the small-signal drain–source conductance $\partial I_D/\partial V_{DS}$. Their ratio is the intrinsic gain, which we evaluate point by point.

### Step 1 — Bias quantities and the triode/saturation boundary

**Aspect ratio and current factor.** Define $\beta = \mu_nC_{ox}(W/L)$:

$$
\begin{aligned}
\frac{W}{L} &= \frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 100,\\
\beta &= \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.
\end{aligned}
$$

**Threshold voltage.** Source and bulk are both at 0 V, so the source–bulk voltage is $V_{SB} = 0$ and there is no body effect: $V_{TH} = V_{TH0} = 0.7$ V.

**Overdrive voltage**, $V_{ov} = V_{GS} - V_{TH}$:

$$V_{ov} = 1.2\ \mathrm{V} - 0.7\ \mathrm{V} = 0.5\ \mathrm{V} .$$

$V_{ov} > 0$, so a channel exists for every $V_{DS}$ in the sweep.

**Region boundary.** The channel pinches off at the drain end when $V_{DS} = V_{GS} - V_{TH}$. Hence

- **triode** for $0 \le V_{DS} < 0.5$ V,
- **saturation** for $0.5\ \mathrm{V} \le V_{DS} \le 3$ V.

### Step 2 — Small-signal parameters in the triode region

The **triode-region (square-law) current** is

$$I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \frac12V_{DS}^2\right].$$

**Transconductance.** Differentiate with respect to $V_{GS}$ at constant $V_{DS}$. Only the first term contains $V_{GS}$:

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS} .$$

**Drain–source conductance.** Differentiate with respect to $V_{DS}$ at constant $V_{GS}$:

$$
\begin{aligned}
\frac{1}{r_{ds}} = \frac{\partial I_D}{\partial V_{DS}} &= \beta\left[(V_{GS} - V_{TH}) - V_{DS}\right]\\
&= \beta\,(V_{ov} - V_{DS}) .
\end{aligned}
$$

**Intrinsic gain.** Multiply $g_m$ by $r_{ds}$:

$$g_mr_{ds} = \frac{\beta V_{DS}}{\beta\,(V_{ov} - V_{DS})} = \frac{V_{DS}}{V_{ov} - V_{DS}} = \frac{V_{DS}}{0.5\ \mathrm{V} - V_{DS}} .$$

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

- At $V_{DS} = 0$ the gain is zero: $g_m = \beta V_{DS} = 0$, because changing the gate voltage cannot change a current that has no drain–source voltage to drive it.
- Near $V_{DS} = 0$ the curve starts with slope $1/V_{ov} = 2\ \mathrm{V^{-1}}$.
- The gain reaches 1 only at $V_{DS} = V_{ov}/2 = 0.25$ V. Deep in triode the transistor behaves like a small resistor and is useless as an amplifier.
- Close to the edge the curve shoots up, because the channel is close to pinch-off and $r_{ds}$ becomes very large.

### Step 3 — Small-signal parameters in saturation (simple model)

The **saturation current** is

$$I_D = \frac12\beta V_{ov}^2(1 + \lambda V_{DS}) .$$

In the simple model the factor $(1+\lambda V_{DS})$ is dropped from $I_D$ and $g_m$, and channel-length modulation appears only through $r_O = 1/(\lambda I_D)$.

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

If the factor $(1+\lambda V_{DS})$ is kept in $I_D$, differentiate exactly.

**Saturation.**

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

Horizontal axis $V_{DS}$ from 0 to 3 V, vertical axis $g_m \times r_{ds}$.

| Region | $V_{DS}$ | Intrinsic gain | Shape |
|---|---|---|---|
| Triode | 0 → 0.5 V | $V_{DS}/(0.5 - V_{DS})$: 0, 0.25, 1, 4, 9 at 0, 0.1, 0.25, 0.4, 0.45 V | starts at 0 with slope 2 V⁻¹, then rises ever more steeply |
| Edge | 0.5 V | jumps up to the plateau (≈ 42 if λ is kept in the triode equation) | break point |
| Saturation | 0.5 → 3 V | 40 (simple model), or $40(1 + 0.1V_{DS})$: 42 → 52 | flat, or a gentle linear rise |

The key features are a small gain throughout the triode region, a sharp rise as $V_{DS}$ approaches the **break point at $V_{DS} = V_{GS} - V_{TH} = 0.5$ V**, and a **plateau of about 40** in saturation.

**Physical intuition.** In triode the drain voltage controls the current almost as strongly as the gate does, so $r_{ds}$ is tiny (hundreds of ohms) and the gain is small. Once the channel pinches off, the drain loses most of its control over the current; only channel-length modulation remains. Then $r_O$ jumps to kilo-ohms while $g_m$ stays at its maximum, and the gain jumps to $2/(\lambda V_{ov})$.

### Result

- **Triode, $0 \le V_{DS} < 0.5$ V:** $g_mr_{ds} = V_{DS}/(0.5\ \mathrm{V} - V_{DS})$, rising from 0 (0.25 at 0.1 V, 1 at 0.25 V, 4 at 0.4 V, 9 at 0.45 V) and climbing steeply toward the edge.
- **Break point** at $V_{DS} = V_{GS} - V_{TH} = 0.5$ V ($\beta = 13.4\ \mathrm{mA/V^2}$, $V_{ov} = 0.5$ V).
- **Saturation, $0.5\ \mathrm{V} \le V_{DS} \le 3$ V** ($I_D \approx 1.68$ mA, $g_m = 6.7$ mS, $r_O \approx 6$ kΩ): a plateau $g_mr_O = 2/(\lambda V_{ov}) = 40$. If the $(1+\lambda V_{DS})$ factor is kept in $g_m$, it is $40(1 + 0.1V_{DS})$, rising gently from 42 at the edge to 52 at 3 V.

**Common mistake.** Putting the break point at $V_{DS} = V_{GS} = 1.2$ V or at $V_{DS} = V_{TH} = 0.7$ V. The triode/saturation boundary is set by the *overdrive*: $V_{DS} = V_{GS} - V_{TH} = 0.5$ V.

**Common mistake.** Using the saturation formula $g_m = \beta V_{ov}$ in the triode region, which gives a large gain there. In triode $g_m = \beta V_{DS}$ is smaller, and $r_{ds} = 1/[\beta(V_{ov} - V_{DS})]$ is only a few hundred ohms, so the gain is small. The intrinsic gain is large only in saturation.

**Common mistake.** Getting the plateau wrong by a factor of 2, for example dropping the $\tfrac12$ in $I_D = \tfrac12\beta V_{ov}^2$. That gives $r_O$ half as large and a plateau of 20 instead of $2/(\lambda V_{ov}) = 40$.
