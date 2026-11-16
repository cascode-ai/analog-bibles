# Detailed solution - R226

**Approach.** Write $I_{out}$ as an explicit function of $V_{DD}$ (the divider makes $V_{GS}$ a fixed fraction of $V_{DD}$, and the square law turns $V_{GS}$ into current), differentiate, evaluate at the design point ($I_{out} = 0.5$ mA at $V_{DD} = 3$ V), and divide by $I_{out}$.

### Step 1 — $I_{out}$ as a function of $V_{DD}$

The gate draws no current and the source is grounded, so

$$V_{GS} = \alpha V_{DD}, \qquad \alpha \equiv \frac{R_2}{R_1 + R_2} ,$$

with the divider ratio $\alpha$ fixed by the resistors. With $M_1$ saturated and $\lambda = 0$,

$$I_{out} = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2 = \frac12\mu_nC_{ox}\frac{W}{L}\left(\alpha V_{DD} - V_{TH}\right)^2 .$$

### Step 2 — Differentiate

$$
\begin{aligned}
\frac{\partial I_{out}}{\partial V_{DD}} &= \frac12\mu_nC_{ox}\frac{W}{L}\cdot2\left(\alpha V_{DD} - V_{TH}\right)\cdot\alpha\\
&= \mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)\alpha\\
&= g_m\,\alpha .
\end{aligned}
$$

A change $\Delta V_{DD}$ moves the gate by $\alpha\Delta V_{DD}$, which $M_1$ converts into $g_m\alpha\Delta V_{DD}$. Dividing by $I_{out} = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$:

$$\frac{1}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})\,\alpha}{\frac12\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})^2} = \frac{2\alpha}{V_{GS} - V_{TH}} = \frac{2}{V_{GS} - V_{TH}}\cdot\frac{R_2}{R_1 + R_2} .$$

The factor 2 comes from the square law: a relative change in overdrive produces twice that relative change in current.

### Step 3 — The design point

With $W/L = 50/0.5 = 100$,

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} ,$$

$$V_{ov} = V_{GS} - V_{TH} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V} ,$$

$$V_{GS} = V_{TH} + V_{ov} = 0.7 + 0.273 = 0.973\ \mathrm{V}, \qquad \alpha = \frac{R_2}{R_1 + R_2} = \frac{V_{GS}}{V_{DD}} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V}} = 0.324 ,$$

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS}$$

(check: $g_m = 2I_{out}/V_{ov} = 1\ \mathrm{mA}/0.273\ \mathrm{V} = 3.66$ mS).

### Step 4 — Numerical sensitivity

$$\frac{\partial I_{out}}{\partial V_{DD}} = g_m\alpha = (3.66\ \mathrm{mS})(0.324) = 1.19\ \mathrm{mA/V} ,$$

$$\frac{1}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{1.19\ \mathrm{mA/V}}{0.5\ \mathrm{mA}} = 2.37\ \mathrm{V^{-1}} .$$

The closed form agrees: $2\alpha/V_{ov} = 2(0.324)/(0.273\ \mathrm{V}) = 2.37\ \mathrm{V^{-1}}$. ✓ So the current changes by about **237 % per volt** of supply change, or 2.37 % per 10 mV.

**Dimensionless form.** Multiplying by $V_{DD}$ and using $\alpha V_{DD} = V_{GS}$:

$$\frac{V_{DD}}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{2\alpha V_{DD}}{V_{ov}} = \frac{2V_{GS}}{V_{GS} - V_{TH}} = \frac{2(0.973)}{0.273} = 7.1 .$$

A 1 % change in $V_{DD}$ changes $I_{out}$ by about 7 %.

### Step 5 — Check with the exact square law

Raising $V_{DD}$ by 1 %, to 3.03 V:

$$
\begin{aligned}
V_{GS} &= 0.324\times3.03\ \mathrm{V} = 0.983\ \mathrm{V},\\
V_{ov} &= 0.983 - 0.7 = 0.283\ \mathrm{V},\\
I_{out} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.283\ \mathrm{V})^2 = 0.536\ \mathrm{mA} ,
\end{aligned}
$$

a $+7.3$ % change, close to the linearized $+7.1$ % (the difference is the curvature of the square law).

The sensitivity is high because the current depends only on the 0.273 V of $V_{GS}$ above $V_{TH}$, out of 0.973 V: a relative change in $V_{GS}$ becomes a 3.6 times larger relative change in overdrive ($0.973/0.273$), and the square law doubles it again. This is why a resistive divider from the supply is a poor way to bias a current source.

### Result

$$\frac{1}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{2}{V_{GS} - V_{TH}}\cdot\frac{R_2}{R_1 + R_2} = \frac{2(0.324)}{0.273\ \mathrm{V}} \approx 2.37\ \mathrm{V^{-1}},$$

i.e. about 237 % per volt; the unnormalized value is $\partial I_{out}/\partial V_{DD} = g_m R_2/(R_1 + R_2) \approx 1.19$ mA/V. As a dimensionless relative sensitivity, $(V_{DD}/I_{out})\,\partial I_{out}/\partial V_{DD} = 2V_{GS}/(V_{GS} - V_{TH}) \approx 7.1$: a 1 % change in $V_{DD}$ changes $I_{out}$ by about 7 %.

**Common mistake.** Forgetting the factor 2 from the square law, which gives $\alpha/V_{ov} = 1.19\ \mathrm{V^{-1}}$ (or 3.6 in dimensionless form), half the correct value.

**Common mistake.** Normalizing to $V_{GS}$ instead of $V_{GS} - V_{TH}$, e.g. $(1/I)\,\partial I/\partial V_{DD} = 2/V_{DD}$ (only $0.67\ \mathrm{V^{-1}}$). The current depends on the small *overdrive*, which is what makes the sensitivity large.
