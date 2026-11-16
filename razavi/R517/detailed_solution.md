# Detailed solution - R517

**Approach.** First recover the drain-current law by integrating $g_m = dI_D/dV_{GS}$ with $I_D = 0$ at threshold. Then eliminate the overdrive voltage to express $g_m$ through $I_D$ and $\beta$, and eliminate $\beta$ to express it through $I_D$ and the overdrive. This mirrors the three familiar forms of $g_m$ for a square-law device.

### Step 1 — Drain current of the hypothetical device

Let $V_{ov} = V_{GS} - V_{TH}$ be the overdrive voltage. The transconductance is the derivative of the drain current with respect to $V_{GS}$ (at constant $V_{DS}$). Because $V_{TH}$ is constant, this is also the derivative with respect to $V_{ov}$:

$$g_m = \frac{dI_D}{dV_{ov}} = \beta V_{ov}^2 .$$

Integrate, using $\int x^2dx = x^3/3$:

$$I_D = \frac{\beta}{3}V_{ov}^3 + C .$$

With $I_D = 0$ at $V_{ov} = 0$ (given), $C = 0$:

$$I_D = \frac{\beta}{3}V_{ov}^3 .$$

### Step 2 — Solve for the overdrive in terms of $I_D$

Multiply by $3/\beta$ and take the cube root:

$$V_{ov}^3 = \frac{3I_D}{\beta}
\quad\Longrightarrow\quad
V_{ov} = \left(\frac{3I_D}{\beta}\right)^{1/3}.$$

### Step 3 — $g_m$ in terms of $I_D$ and $\beta$

Substitute $V_{ov}$ into $g_m = \beta V_{ov}^2$:

$$g_m = \beta\left(\frac{3I_D}{\beta}\right)^{2/3} = \beta\cdot\frac{(3I_D)^{2/3}}{\beta^{2/3}} = \beta^{1/3}\,(3I_D)^{2/3}.$$

Equivalent forms: write $\beta^{1/3}(3I_D)^{2/3} = \left[\beta\,(3I_D)^2\right]^{1/3}$, so

$$\boxed{g_m = \sqrt[3]{9\beta I_D^2} = 3^{2/3}\beta^{1/3}I_D^{2/3} \approx 2.08\,\beta^{1/3}I_D^{2/3}}$$

**Meaning.** At a fixed device size (fixed $\beta$), $g_m$ grows as $I_D^{2/3}$. Doubling the current raises $g_m$ by $2^{2/3} = 1.59$. For a square-law device, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D} \propto I_D^{1/2}$, and doubling the current raises $g_m$ by only $\sqrt2 = 1.41$. Here $\mu_n$ is the electron mobility, $C_{ox}$ the oxide capacitance per unit area and $W/L$ the aspect ratio.

### Step 4 — $g_m$ in terms of $I_D$ and $V_{GS} - V_{TH}$

Divide $g_m$ by $I_D$, both written in terms of $V_{ov}$:

$$\frac{g_m}{I_D} = \frac{\beta V_{ov}^2}{\tfrac{\beta}{3}V_{ov}^3} = \frac{3}{V_{ov}} .$$

So

$$\boxed{g_m = \frac{3I_D}{V_{GS} - V_{TH}}}$$

**Meaning.** $\beta$ has cancelled: at a given overdrive, the transconductance per unit current, $g_m/I_D = 3/V_{ov}$, is fixed by the device law alone. For the square law the corresponding result is $g_m = 2I_D/V_{ov}$. The general rule is that if $I_D \propto V_{ov}^{m}$, then $g_m/I_D = m/V_{ov}$, the exponent divided by the overdrive. Here $m = 3$.

### Step 5 — Numerical cross-check

Take $\beta = 30\ \mathrm{mA/V^3}$ and $V_{ov} = 0.2$ V. Then

$$
\begin{aligned}
I_D &= \tfrac13(30\ \mathrm{mA/V^3})(0.2\ \mathrm{V})^3 = 80\ \mu\mathrm{A},\\
g_m\ \text{(definition)} &= (30\ \mathrm{mA/V^3})(0.2\ \mathrm{V})^2 = 1.2\ \mathrm{mS}.
\end{aligned}
$$

From the two new expressions:

$$
\begin{aligned}
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

**Common mistake.** Reusing the square-law formulas $g_m = \sqrt{2\beta I_D}$ or $g_m = 2I_D/(V_{GS} - V_{TH})$. They were derived from $I_D \propto V_{ov}^2$ and do not apply to a device with $I_D \propto V_{ov}^3$. The exponent changes both the power of $I_D$ (2/3 instead of 1/2) and the factor in $g_m/I_D$ (3 instead of 2).

**Common mistake.** A slip in the fractional powers, for example $g_m = \beta^{1/3}(3I_D)^{1/3}$ or $3^{1/3}\beta^{1/3}I_D^{2/3}$. Squaring $V_{ov} = (3I_D/\beta)^{1/3}$ gives $(3I_D/\beta)^{2/3}$, so the factor 3 also carries the exponent 2/3. A quick numeric check like Step 5 catches such slips.
