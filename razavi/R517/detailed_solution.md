# Detailed solution - R517

**Approach.** Recover the drain-current law by integrating $g_m = dI_D/dV_{GS}$ with $I_D = 0$ at threshold. Then eliminate the overdrive to express $g_m$ through $I_D$ and $\beta$, and eliminate $\beta$ to express it through $I_D$ and the overdrive, mirroring the familiar square-law forms.

### Step 1 — Drain current and overdrive

With $V_{ov} = V_{GS} - V_{TH}$ ($V_{TH}$ constant), $g_m = dI_D/dV_{ov} = \beta V_{ov}^2$. Integrating, with $I_D = 0$ at $V_{ov} = 0$ (so the constant is zero):

$$I_D = \frac{\beta}{3}V_{ov}^3
\quad\Longrightarrow\quad
V_{ov}^3 = \frac{3I_D}{\beta}
\quad\Longrightarrow\quad
V_{ov} = \left(\frac{3I_D}{\beta}\right)^{1/3}.$$

### Step 2 — $g_m$ in terms of $I_D$ and $\beta$

Substituting $V_{ov}$ into $g_m = \beta V_{ov}^2$:

$$g_m = \beta\left(\frac{3I_D}{\beta}\right)^{2/3} = \beta\cdot\frac{(3I_D)^{2/3}}{\beta^{2/3}} = \beta^{1/3}\,(3I_D)^{2/3} = \left[\beta\,(3I_D)^2\right]^{1/3},$$

$$\boxed{g_m = \sqrt[3]{9\beta I_D^2} = 3^{2/3}\beta^{1/3}I_D^{2/3} \approx 2.08\,\beta^{1/3}I_D^{2/3}}$$

At fixed $\beta$, $g_m \propto I_D^{2/3}$: doubling the current raises $g_m$ by $2^{2/3} = 1.59$, against $\sqrt2 = 1.41$ for a square-law device ($g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$).

### Step 3 — $g_m$ in terms of $I_D$ and $V_{GS} - V_{TH}$

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\tfrac{\beta}{3}V_{ov}^3} = \frac{3}{V_{ov}}
\quad\Longrightarrow\quad
\boxed{g_m = \frac{3I_D}{V_{GS} - V_{TH}}}$$

$\beta$ cancels. In general, if $I_D \propto V_{ov}^{m}$, then $g_m/I_D = m/V_{ov}$; the square law ($m = 2$) gives $2I_D/V_{ov}$, this device ($m = 3$) gives $3I_D/V_{ov}$.

### Step 4 — Numerical cross-check

Take $\beta = 30\ \mathrm{mA/V^3}$ and $V_{ov} = 0.2$ V:

$$
\begin{aligned}
I_D &= \tfrac13(30\ \mathrm{mA/V^3})(0.2\ \mathrm{V})^3 = 80\ \mu\mathrm{A},\\
g_m\ \text{(definition)} &= (30\ \mathrm{mA/V^3})(0.2\ \mathrm{V})^2 = 1.2\ \mathrm{mS},\\
\sqrt[3]{9\beta I_D^2} &= \sqrt[3]{9\times(0.03\ \mathrm{A/V^3})\times(80\times10^{-6}\ \mathrm{A})^2} = \sqrt[3]{1.728\times10^{-9}}\ \mathrm{S} = 1.2\ \mathrm{mS}, \ \checkmark\\
\frac{3I_D}{V_{ov}} &= \frac{3\times80\ \mu\mathrm{A}}{0.2\ \mathrm{V}} = 1.2\ \mathrm{mS}. \ \checkmark
\end{aligned}
$$

(Units of the first: $(\mathrm{A/V^3}\cdot\mathrm{A^2})^{1/3} = (\mathrm{A^3/V^3})^{1/3} = \mathrm{A/V} = \mathrm{S}$.)

### Result

For the device with $g_m = \beta(V_{GS} - V_{TH})^2$ and $I_D = \tfrac{\beta}{3}(V_{GS} - V_{TH})^3$:

$$g_m = (3I_D)^{2/3}\beta^{1/3} = \sqrt[3]{9\beta I_D^2} \approx 2.08\,\beta^{1/3}I_D^{2/3},
\qquad
g_m = \frac{3I_D}{V_{GS} - V_{TH}} .$$

These replace the square-law forms $\sqrt{2\mu_nC_{ox}(W/L)I_D}$ and $2I_D/(V_{GS} - V_{TH})$.

**Common mistake.** Reusing the square-law formulas $g_m = \sqrt{2\beta I_D}$ or $g_m = 2I_D/(V_{GS} - V_{TH})$. They follow from $I_D \propto V_{ov}^2$; with $I_D \propto V_{ov}^3$ the power of $I_D$ becomes 2/3 instead of 1/2 and the factor in $g_m/I_D$ becomes 3 instead of 2.

**Common mistake.** A slip in the fractional powers, for example $g_m = \beta^{1/3}(3I_D)^{1/3}$ or $3^{1/3}\beta^{1/3}I_D^{2/3}$. Squaring $V_{ov} = (3I_D/\beta)^{1/3}$ gives $(3I_D/\beta)^{2/3}$, so the factor 3 also carries the exponent 2/3; a numeric check like Step 4 catches such slips.
