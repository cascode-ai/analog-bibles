# Detailed solution - R516

**Approach.** The transconductance is the derivative of the drain current with respect to the gate–source voltage. If $g_m(V_{GS})$ is known, $I_D$ follows by integration. The integration constant is fixed by the physical condition that no current flows at threshold.

### Step 1 — Definition of $g_m$

The transconductance of a MOSFET is the slope of its drain current versus gate–source voltage, taken at a constant drain–source voltage:

$$g_m = \left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS}\ \text{const}} .$$

In saturation (and neglecting channel-length modulation) the drain current depends on $V_{GS}$ only, through the overdrive voltage

$$V_{ov} = V_{GS} - V_{TH},$$

where $V_{TH}$ is the threshold voltage, a constant here. Since $V_{TH}$ is constant, $dV_{ov} = dV_{GS}$, and the derivative can be taken with respect to the overdrive:

$$g_m = \frac{dI_D}{dV_{ov}} .$$

### Step 2 — Set up the integral

The given device law is

$$\frac{dI_D}{dV_{ov}} = \beta V_{ov}^2 ,$$

where $\beta$ is a device constant. Its unit must be A/V³, so that $\beta V_{ov}^2$ is in A/V = S. Separate the variables:

$$dI_D = \beta V_{ov}^2\,dV_{ov} .$$

### Step 3 — Integrate

Integrate both sides, using $\int x^2\,dx = x^3/3$:

$$I_D = \int \beta V_{ov}^2\,dV_{ov} = \frac{\beta}{3}V_{ov}^3 + C ,$$

where $C$ is a constant of integration.

### Step 4 — Fix the integration constant

At the threshold, $V_{GS} = V_{TH}$ (i.e. $V_{ov} = 0$), there is no inversion charge to carry current, so in this model $I_D = 0$, just as in the square law. Substituting:

$$0 = \frac{\beta}{3}\cdot0^3 + C \quad\Longrightarrow\quad C = 0 .$$

Therefore

$$\boxed{I_D = \frac{\beta}{3}\,(V_{GS} - V_{TH})^3}$$

valid in saturation for $V_{GS} \ge V_{TH}$.

### Step 5 — Check and comparison with the square law

**Check by differentiation:**

$$\frac{dI_D}{dV_{GS}} = \frac{\beta}{3}\cdot3\,(V_{GS} - V_{TH})^2 = \beta\,(V_{GS} - V_{TH})^2 = g_m. \ \checkmark$$

**Comparison with the square law.** For a long-channel MOSFET, $I_D = \tfrac12\mu_nC_{ox}\tfrac{W}{L}V_{ov}^2$ and $g_m = \mu_nC_{ox}\tfrac{W}{L}V_{ov}$ (here $\mu_n$ is the electron mobility, $C_{ox}$ the oxide capacitance per unit area and $W/L$ the aspect ratio). The same rule links the two laws: if $g_m \propto V_{ov}^{n}$, then $I_D \propto V_{ov}^{n+1}/(n+1)$. The square law has $n = 1$, which gives the factor $\tfrac12$. The hypothetical device has $n = 2$, which gives the factor $\tfrac13$.

**A useful by-product.** Dividing $g_m$ by $I_D$:

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\beta V_{ov}^3/3} = \frac{3}{V_{ov}},$$

compared with $2/V_{ov}$ for the square law. At a given overdrive this device produces 1.5 times more transconductance per unit of current.

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

**Common mistake.** Writing $I_D = \beta(V_{GS} - V_{TH})^3$ without the factor $\tfrac13$. Differentiating it gives $3\beta(V_{GS} - V_{TH})^2$, three times the given $g_m$. Always check the result by differentiating it back.

**Common mistake.** Falling back on the square law, $I_D = \tfrac12\beta(V_{GS} - V_{TH})^2$. That law corresponds to $g_m \propto V_{GS} - V_{TH}$, not to $(V_{GS} - V_{TH})^2$. The device law is defined by the given $g_m$, and the current must be derived from it.

**Common mistake.** Leaving an arbitrary integration constant in the answer. The condition $I_D = 0$ at threshold sets it to zero; a nonzero constant would mean current flowing with no channel present.
