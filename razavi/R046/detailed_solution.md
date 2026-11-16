# Detailed solution - R046

**Approach.** Express the square-law transconductance in terms of $W/L$ and the overdrive, hold $g_m$ fixed, and solve for $W/L$. The result is an inverse (first-power) law; we describe the curve, tabulate it, and note how the drain current must change along it.

### Step 1 — Square-law current and transconductance

For an NMOS transistor in saturation (channel-length modulation neglected), the **square-law** drain current is

$$I_D = \frac12\,\mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH})^2 ,$$

where $\mu_nC_{ox}$ is the process transconductance parameter (electron mobility times oxide capacitance per unit area), $W/L$ is the aspect ratio, $V_{GS}$ the gate–source voltage and $V_{TH}$ the threshold voltage. Define the **overdrive voltage** $V_{ov} = V_{GS} - V_{TH}$.

The **transconductance** is the derivative of $I_D$ with respect to $V_{GS}$:

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac12\,\mu_nC_{ox}\frac{W}{L}\cdot2\,(V_{GS} - V_{TH}) = \mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH}) .$$

The same quantity can be written as $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ or $g_m = 2I_D/V_{ov}$. All three are equivalent; here the first one is the convenient form, because the problem fixes $g_m$ and lets $I_D$ vary.

### Step 2 — Solve for $W/L$ at constant $g_m$

Start from

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov}$$

and divide both sides by $\mu_nC_{ox}V_{ov}$:

$$\frac{W}{L} = \frac{g_m}{\mu_nC_{ox}\,(V_{GS} - V_{TH})} .$$

With $g_m$ and $\mu_nC_{ox}$ fixed, $g_m/(\mu_nC_{ox})$ is a constant (unit V), so

$$\frac{W}{L} \propto \frac{1}{V_{GS} - V_{TH}} .$$

**Check with the other form.** From $g_m = 2I_D/V_{ov}$, the current along the curve is $I_D = g_mV_{ov}/2$. Substituting into the constant-current relation $W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2)$:

$$\frac{W}{L} = \frac{2\,(g_mV_{ov}/2)}{\mu_nC_{ox}V_{ov}^2} = \frac{g_mV_{ov}}{\mu_nC_{ox}V_{ov}^2} = \frac{g_m}{\mu_nC_{ox}V_{ov}},$$

the same result.

### Step 3 — Shape of the curve

Plot $W/L$ (vertical axis) against $V_{ov}$ (horizontal axis):

- **Hyperbola.** $(W/L)\cdot V_{ov} = g_m/(\mu_nC_{ox})$ = constant: a rectangular hyperbola.
- **Asymptotes.** $W/L \to \infty$ as $V_{ov} \to 0$ (vertical axis), and $W/L \to 0$ as $V_{ov} \to \infty$ (horizontal axis).
- **Slope.**
$$\frac{d(W/L)}{dV_{ov}} = -\frac{g_m}{\mu_nC_{ox}V_{ov}^2} = -\frac{W/L}{V_{ov}},$$
so a 1 % increase in overdrive reduces $W/L$ by 1 %.
- **Scaling rule.** Halving $V_{ov}$ doubles $W/L$.
- **Log–log plot.** A straight line of slope $-1$.

**Comparison with constant $I_D$.** At constant current, $W/L \propto 1/V_{ov}^2$ (slope $-2$ on log–log axes). The constant-$g_m$ curve falls more slowly, because along it the current is not fixed: $I_D = g_mV_{ov}/2$ grows linearly with the overdrive. A larger overdrive needs less width per unit of $g_m$, but it also burns more current.

### Step 4 — Numerical example

Take, for illustration, $g_m = 1$ mS and $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$:

$$\frac{g_m}{\mu_nC_{ox}} = \frac{1\times10^{-3}\ \mathrm{A/V}}{134\times10^{-6}\ \mathrm{A/V^2}} = 7.46\ \mathrm{V}, \qquad \frac{W}{L} = \frac{7.46\ \mathrm{V}}{V_{ov}} .$$

At $V_{ov} = 0.2$ V, for example:

$$\frac{W}{L} = \frac{7.46\ \mathrm{V}}{0.2\ \mathrm{V}} = 37.3, \qquad I_D = \frac{g_mV_{ov}}{2} = \frac{(1\ \mathrm{mS})(0.2\ \mathrm{V})}{2} = 0.1\ \mathrm{mA}.$$

| $V_{GS} - V_{TH}$ (V) | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.8 | 1.0 |
|---|---|---|---|---|---|---|---|---|
| $W/L$ | 74.6 | 37.3 | 24.9 | 18.7 | 14.9 | 12.4 | 9.3 | 7.5 |
| $I_D$ (mA) | 0.05 | 0.10 | 0.15 | 0.20 | 0.25 | 0.30 | 0.40 | 0.50 |

From 0.2 V to 0.4 V, $W/L$ halves (37.3 to 18.7) while $I_D$ doubles.

### Step 5 — Practical remarks

- At very small overdrive the device approaches **weak inversion**, where $g_m = I_D/(\zeta V_T)$ no longer depends on $V_{ov}$ in the square-law way. The vertical asymptote then disappears in practice: there is a maximum $g_m/I_D$, and a required $g_m$ needs at least a minimum current, however wide the device.
- At large overdrive, velocity saturation makes $g_m$ saturate with $V_{ov}$, so $W/L$ falls less than $1/V_{ov}$ predicts.
- **Design trade-off.** For a given $g_m$, a small overdrive saves current ($I_D = g_mV_{ov}/2$) but needs a wide device with large capacitance; a large overdrive saves area but costs power and headroom.

### Result

$$\frac{W}{L} = \frac{g_m}{\mu_nC_{ox}\,(V_{GS} - V_{TH})} \propto \frac{1}{V_{GS} - V_{TH}}$$

The plot is a rectangular hyperbola: $W/L$ falls as the overdrive rises, going to infinity as $V_{GS} - V_{TH} \to 0$ and to zero for large overdrive (slope $-1$ on log–log axes). It falls more slowly than the constant-$I_D$ curve ($\propto 1/V_{ov}^2$) because along it the current $I_D = g_m(V_{GS} - V_{TH})/2$ grows linearly with the overdrive. Example ($g_m = 1$ mS, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$): $W/L = 37.3$ at 0.2 V, 18.7 at 0.4 V, 7.5 at 1 V.

**Common mistake.** Using $W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2)$ with $I_D$ treated as constant, which gives a $1/V_{ov}^2$ curve. Here $g_m$, not $I_D$, is held fixed, so the current changes along the curve and the exponent is $-1$.

**Common mistake.** Using $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ with a fixed $I_D$ and concluding that $W/L$ does not depend on $V_{ov}$. The three $g_m$ formulas are equivalent only if $I_D$, $W/L$ and $V_{ov}$ are linked by the square law; when $g_m$ is held fixed and $V_{ov}$ varies, $I_D$ must vary too.
