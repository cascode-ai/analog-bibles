# Detailed solution - R226

**Approach.** Write $I_{out}$ as an explicit function of $V_{DD}$: the divider makes $V_{GS}$ a fixed fraction of $V_{DD}$, and the square law turns $V_{GS}$ into current. Differentiate with respect to $V_{DD}$, evaluate at the design point ($I_{out} = 0.5$ mA at $V_{DD} = 3$ V), and divide by $I_{out}$.

### Step 1 — $I_{out}$ as a function of $V_{DD}$

Reading the figure: $R_1$ connects $V_{DD}$ to the gate of $M_1$, $R_2$ connects the gate to ground, and the source and bulk of $M_1$ are grounded. The gate draws no current, so the divider is unloaded:

$$V_{GS} = \alpha V_{DD}, \qquad \alpha \equiv \frac{R_2}{R_1 + R_2} .$$

$\alpha$ is the divider ratio, a constant fixed by the resistors.

$M_1$ is saturated and $\lambda = 0$, so the square law applies:

$$I_{out} = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2 = \frac12\mu_nC_{ox}\frac{W}{L}\left(\alpha V_{DD} - V_{TH}\right)^2 .$$

$V_{DD}$ enters through $V_{GS}$, and the square law amplifies its effect.

### Step 2 — Differentiate

Apply the chain rule (the derivative of $u^2$ is $2u\,du$, with $u = \alpha V_{DD} - V_{TH}$ and $du/dV_{DD} = \alpha$):

$$
\begin{aligned}
\frac{\partial I_{out}}{\partial V_{DD}} &= \frac12\mu_nC_{ox}\frac{W}{L}\cdot2\left(\alpha V_{DD} - V_{TH}\right)\cdot\alpha\\
&= \mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)\alpha\\
&= g_m\,\alpha .
\end{aligned}
$$

Here $g_m = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$ is the transconductance of $M_1$. The result is intuitive: a change $\Delta V_{DD}$ moves the gate by $\alpha\Delta V_{DD}$, and $M_1$ converts that into a current change $g_m\alpha\Delta V_{DD}$.

**Normalize to $I_{out}$.** Divide by $I_{out} = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$:

$$\frac{1}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})\,\alpha}{\frac12\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})^2} = \frac{2\alpha}{V_{GS} - V_{TH}} = \frac{2}{V_{GS} - V_{TH}}\cdot\frac{R_2}{R_1 + R_2} .$$

The factor 2 comes from the square law: a relative change in overdrive produces twice that relative change in current.

### Step 3 — The design point

The resistors are chosen for $I_{out} = 0.5$ mA at $V_{DD} = 3$ V.

**Device parameter:** $W/L = 50/0.5 = 100$, so

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} .$$

**Overdrive** $V_{ov} = V_{GS} - V_{TH}$:

$$V_{ov} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V} .$$

**Gate–source voltage:**

$$V_{GS} = V_{TH} + V_{ov} = 0.7 + 0.273 = 0.973\ \mathrm{V} .$$

**Divider ratio:**

$$\alpha = \frac{R_2}{R_1 + R_2} = \frac{V_{GS}}{V_{DD}} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V}} = 0.324 .$$

**Transconductance:**

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS} .$$

(Check: $g_m = 2I_{out}/V_{ov} = 1\ \mathrm{mA}/0.273\ \mathrm{V} = 3.66$ mS.)

### Step 4 — Numerical sensitivity

**Absolute sensitivity:**

$$\frac{\partial I_{out}}{\partial V_{DD}} = g_m\alpha = (3.66\ \mathrm{mS})(0.324) = 1.19\ \mathrm{mA/V} .$$

**Normalized to $I_{out}$:**

$$\frac{1}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{1.19\ \mathrm{mA/V}}{0.5\ \mathrm{mA}} = 2.37\ \mathrm{V^{-1}} .$$

Check with the closed form: $2\alpha/V_{ov} = 2(0.324)/(0.273\ \mathrm{V}) = 2.37\ \mathrm{V^{-1}}$. ✓

So the current changes by about **237 % per volt** of supply change, or 2.37 % per 10 mV.

**Dimensionless form.** Multiplying by $V_{DD}$ gives the relative sensitivity (percent change of current per percent change of supply). Using $\alpha V_{DD} = V_{GS}$:

$$\frac{V_{DD}}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{2\alpha V_{DD}}{V_{ov}} = \frac{2V_{GS}}{V_{GS} - V_{TH}} = \frac{2(0.973)}{0.273} = 7.1 .$$

A 1 % change in $V_{DD}$ changes $I_{out}$ by about 7 %.

### Step 5 — Check with the exact square law

Raise $V_{DD}$ by 1 %, to 3.03 V:

$$
\begin{aligned}
V_{GS} &= 0.324\times3.03\ \mathrm{V} = 0.983\ \mathrm{V},\\
V_{ov} &= 0.983 - 0.7 = 0.283\ \mathrm{V},\\
I_{out} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.283\ \mathrm{V})^2 = 0.536\ \mathrm{mA} .
\end{aligned}
$$

That is a $+7.3$ % change, close to the linearized $+7.1$ % (the small difference is the curvature of the square law).

**Why it is so sensitive.** $V_{GS}$ is a fixed fraction of $V_{DD}$, but the current depends only on the part of $V_{GS}$ above $V_{TH}$. That part is just 0.273 V out of 0.973 V, so a given relative change in $V_{GS}$ becomes a 3.6 times larger relative change in overdrive ($0.973/0.273$), and the square law doubles it again. This is why a resistive divider from the supply is a poor way to bias a current source.

### Result

$$\frac{1}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{2}{V_{GS} - V_{TH}}\cdot\frac{R_2}{R_1 + R_2} = \frac{2(0.324)}{0.273\ \mathrm{V}} \approx 2.37\ \mathrm{V^{-1}},$$

i.e. about 237 % per volt; the unnormalized value is $\partial I_{out}/\partial V_{DD} = g_m R_2/(R_1 + R_2) \approx 1.19$ mA/V. As a dimensionless relative sensitivity, $(V_{DD}/I_{out})\,\partial I_{out}/\partial V_{DD} = 2V_{GS}/(V_{GS} - V_{TH}) \approx 7.1$: a 1 % change in $V_{DD}$ changes $I_{out}$ by about 7 %.

**Common mistake.** Forgetting the factor 2 from the square law, i.e. treating $I_{out}$ as if it were proportional to the overdrive. That gives $\alpha/V_{ov} = 1.19\ \mathrm{V^{-1}}$ (or 3.6 in dimensionless form), half the correct value.

**Common mistake.** Normalizing to $V_{GS}$ instead of $V_{GS} - V_{TH}$, e.g. writing $(1/I)\,\partial I/\partial V_{DD} = 2/V_{DD}$ (only $0.67\ \mathrm{V^{-1}}$). The current depends on the *overdrive*, which is a small fraction of $V_{GS}$, and that is exactly what makes the sensitivity large.

**Common mistake.** Claiming that $I_{out}$ is independent of $V_{DD}$ because "$M_1$ is a current source," or that it falls when $V_{DD}$ rises. The gate voltage tracks $V_{DD}$ through the divider, so $I_{out}$ rises steeply with $V_{DD}$.
