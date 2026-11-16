# Detailed solution - R516

**Approach.** Since $g_m = \partial I_D/\partial V_{GS}$, integrate the given $g_m$ and fix the integration constant by the condition that no current flows at threshold.

### Step 1 — Integrate $g_m$

With $V_{ov} = V_{GS} - V_{TH}$ and $V_{TH}$ constant, $dV_{ov} = dV_{GS}$, so in saturation

$$\frac{dI_D}{dV_{ov}} = \beta V_{ov}^2 ,$$

with $\beta$ in A/V³ (so that $\beta V_{ov}^2$ is in A/V = S). Integrating,

$$I_D = \int \beta V_{ov}^2\,dV_{ov} = \frac{\beta}{3}V_{ov}^3 + C .$$

At threshold ($V_{ov} = 0$) there is no inversion charge, so $I_D = 0$, as in the square law:

$$0 = \frac{\beta}{3}\cdot0^3 + C \quad\Longrightarrow\quad C = 0 ,$$

$$\boxed{I_D = \frac{\beta}{3}\,(V_{GS} - V_{TH})^3}$$

valid in saturation for $V_{GS} \ge V_{TH}$.

### Step 2 — Check and comparison with the square law

Differentiating back:

$$\frac{dI_D}{dV_{GS}} = \frac{\beta}{3}\cdot3\,(V_{GS} - V_{TH})^2 = \beta\,(V_{GS} - V_{TH})^2 = g_m. \ \checkmark$$

In general, if $g_m \propto V_{ov}^{n}$, then $I_D \propto V_{ov}^{n+1}/(n+1)$: the square law ($g_m = \mu_nC_{ox}\tfrac{W}{L}V_{ov}$) has $n = 1$ and the factor $\tfrac12$; this device has $n = 2$ and the factor $\tfrac13$. Also,

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\beta V_{ov}^3/3} = \frac{3}{V_{ov}},$$

against $2/V_{ov}$ for the square law: 1.5 times more transconductance per unit current at a given overdrive.

**Numerical illustration.** Take $\beta = 30\ \mathrm{mA/V^3}$ and $V_{ov} = 0.2$ V:

$$
\begin{aligned}
I_D &= \frac{30\ \mathrm{mA/V^3}}{3}\,(0.2\ \mathrm{V})^3 = 10\ \mathrm{mA/V^3}\times0.008\ \mathrm{V^3} = 80\ \mu\mathrm{A},\\
g_m &= 30\ \mathrm{mA/V^3}\times(0.2\ \mathrm{V})^2 = 1.2\ \mathrm{mS},\\
\frac{g_m}{I_D} &= \frac{1.2\ \mathrm{mS}}{80\ \mu\mathrm{A}} = 15\ \mathrm{V^{-1}} = \frac{3}{0.2\ \mathrm{V}}. \ \checkmark
\end{aligned}
$$

### Result

$$I_D = \frac{\beta}{3}\,(V_{GS} - V_{TH})^3 \qquad (V_{GS} \ge V_{TH},\ \text{saturation}),$$

obtained by integrating $g_m = dI_D/dV_{GS} = \beta(V_{GS} - V_{TH})^2$ with $I_D = 0$ at $V_{GS} = V_{TH}$.

**Common mistake.** Writing $I_D = \beta(V_{GS} - V_{TH})^3$ without the factor $\tfrac13$. Differentiating it gives $3\beta(V_{GS} - V_{TH})^2$, three times the given $g_m$.

**Common mistake.** Falling back on the square law, $I_D = \tfrac12\beta(V_{GS} - V_{TH})^2$, which corresponds to $g_m \propto V_{GS} - V_{TH}$, not to $(V_{GS} - V_{TH})^2$.

**Common mistake.** Leaving an arbitrary integration constant in the answer. $I_D = 0$ at threshold sets it to zero; a nonzero constant would mean current with no channel present.
