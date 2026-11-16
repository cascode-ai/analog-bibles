# Detailed solution - R062

**Approach.** Write the square-law expression behind each of the three $g_m$ plots, then use it to obtain the requested relation: integrate $g_m$ with respect to the overdrive to get $I_D$, combine $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ with $g_m = 2I_D/(V_{GS} - V_{TH})$ to get the overdrive versus current, and combine $g_m = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$ with $g_m = 2I_D/(V_{GS} - V_{TH})$ to get $W/L$ at constant current. Each result is then described as a curve, with a numerical example.

### Step 1 — The three $g_m$ relations in the figure

For a saturated square-law MOSFET with $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, where $\mu_nC_{ox}$ is the process transconductance parameter, $W/L$ the aspect ratio and $V_{ov} = V_{GS} - V_{TH}$ the overdrive voltage, the transconductance can be written in three equivalent ways, one for each panel:

$$
\begin{aligned}
\text{(a)}\quad g_m &= \mu_nC_{ox}\frac{W}{L}V_{ov} &&\text{straight line vs } V_{ov}\ (W/L\ \text{fixed}),\\
\text{(b)}\quad g_m &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} &&\text{square root vs } I_D\ (W/L\ \text{fixed}),\\
\text{(c)}\quad g_m &= \frac{2I_D}{V_{ov}} &&\text{hyperbola vs } V_{ov}\ (I_D\ \text{fixed}).
\end{aligned}
$$

These are exactly the three shapes drawn in the figure. For the numerical examples below we take $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $W/L = 10$ (plots 1 and 2) and $I_D = 0.5$ mA (plot 3).

### Step 2 — Plot 1: $I_D$ versus $V_{GS} - V_{TH}$ with $W/L$ constant

By definition $g_m = \partial I_D/\partial V_{GS}$, and with $V_{TH}$ fixed $dV_{GS} = dV_{ov}$. So $I_D$ is the integral of the straight line (a), starting from $I_D = 0$ at $V_{ov} = 0$:

$$I_D = \int_0^{V_{ov}} \mu_nC_{ox}\frac{W}{L}\,v\,dv = \mu_nC_{ox}\frac{W}{L}\cdot\frac{V_{ov}^2}{2} = \frac12\,\mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH})^2 .$$

**Shape.** A parabola starting at the origin with zero slope, curving upward. Its slope at any point is $g_m$, which grows linearly with $V_{ov}$; doubling the overdrive quadruples the current.

**Example.** $\tfrac12\mu_nC_{ox}W/L = \tfrac12(134\ \mu\mathrm{A/V^2})(10) = 0.67\ \mathrm{mA/V^2}$, so $I_D = 0.67\ \mathrm{mA/V^2}\times V_{ov}^2$. At $V_{ov} = 0.4$ V: $I_D = 0.67\times0.16 = 0.107$ mA.

| $V_{GS} - V_{TH}$ (V) | 0 | 0.2 | 0.4 | 0.6 | 0.8 | 1.0 |
|---|---|---|---|---|---|---|
| $I_D$ (µA) | 0 | 26.8 | 107 | 241 | 429 | 670 |

### Step 3 — Plot 2: $V_{GS} - V_{TH}$ versus $I_D$ with $W/L$ constant

Use relation (c), which holds at any bias, solved for the overdrive: $V_{ov} = 2I_D/g_m$. Substitute $g_m$ from relation (b), the one plotted against $I_D$ for fixed $W/L$:

$$V_{ov} = \frac{2I_D}{\sqrt{2\mu_nC_{ox}(W/L)I_D}} .$$

Simplify, using $2I_D/\sqrt{2I_D} = \sqrt{2I_D}$:

$$V_{GS} - V_{TH} = \frac{\sqrt{2I_D}}{\sqrt{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} .$$

This is simply plot 1 with the axes exchanged (the inverse function).

**Shape.** A square-root curve: it starts at the origin with infinite slope and flattens as $I_D$ grows. Quadrupling the current only doubles the overdrive.

**Example.** $V_{ov} = \sqrt{I_D/(0.67\ \mathrm{mA/V^2})}$. At $I_D = 0.2$ mA: $V_{ov} = \sqrt{0.2/0.67}\ \mathrm{V} = \sqrt{0.2985}\ \mathrm{V} = 0.546$ V.

| $I_D$ (µA) | 0 | 50 | 100 | 200 | 400 | 800 |
|---|---|---|---|---|---|---|
| $V_{GS} - V_{TH}$ (V) | 0 | 0.273 | 0.386 | 0.546 | 0.773 | 1.093 |

### Step 4 — Plot 3: $W/L$ versus $V_{GS} - V_{TH}$ with $I_D$ constant

Relation (a) gives $W/L$ for given $g_m$ and overdrive: $W/L = g_m/(\mu_nC_{ox}V_{ov})$. At constant $I_D$, the transconductance is the hyperbola (c), $g_m = 2I_D/V_{ov}$. Substitute:

$$\frac{W}{L} = \frac{1}{\mu_nC_{ox}V_{ov}}\cdot\frac{2I_D}{V_{ov}} = \frac{2I_D}{\mu_nC_{ox}\,(V_{GS} - V_{TH})^2} .$$

**Shape.** A decreasing curve proportional to $1/V_{ov}^2$: it tends to infinity as the overdrive goes to zero and to zero for large overdrive. It falls **faster** than the $g_m$ hyperbola of panel (c) ($\propto 1/V_{ov}$): halving the overdrive doubles $g_m$ but quadruples $W/L$.

**Example.** $2I_D/(\mu_nC_{ox}) = 2(0.5\ \mathrm{mA})/(134\ \mu\mathrm{A/V^2}) = 7.46\ \mathrm{V^2}$, so $W/L = 7.46\ \mathrm{V^2}/V_{ov}^2$. At $V_{ov} = 0.4$ V: $W/L = 7.46/0.16 = 46.6$.

| $V_{GS} - V_{TH}$ (V) | 0.2 | 0.4 | 0.6 | 0.8 | 1.0 |
|---|---|---|---|---|---|
| $W/L$ | 186.6 | 46.6 | 20.7 | 11.7 | 7.5 |

### Step 5 — How the three plots fit together

- Plot 1 and plot 2 are the same curve with the axes swapped: a parabola $I_D \propto V_{ov}^2$ read in both directions.
- In plot 1 the slope is $g_m$, which grows linearly (panel a); in plot 2 the slope $dV_{ov}/dI_D = 1/g_m$ shrinks as $1/\sqrt{I_D}$, consistent with panel (b).
- Plot 3 shows the cost of a small overdrive at fixed current: the device must be made much wider, as $1/V_{ov}^2$.

### Result

- **$I_D$ vs $V_{GS} - V_{TH}$ ($W/L$ constant):** $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$, a parabola from the origin whose slope at each point is $g_m$.
- **$V_{GS} - V_{TH}$ vs $I_D$ ($W/L$ constant):** $V_{GS} - V_{TH} = \sqrt{2I_D/[\mu_nC_{ox}(W/L)]}$, a square-root curve, steep near the origin and flattening (the inverse of the first plot).
- **$W/L$ vs $V_{GS} - V_{TH}$ ($I_D$ constant):** $W/L = 2I_D/[\mu_nC_{ox}(V_{GS} - V_{TH})^2]$, falling as $1/(V_{GS} - V_{TH})^2$, faster than the $1/(V_{GS} - V_{TH})$ fall of $g_m$ in the third panel.

**Common mistake.** Drawing $I_D$ as a straight line in the overdrive because the $g_m$ plot is a straight line. The straight line is the *slope* of the $I_D$ curve; integrating a line gives a parabola.

**Common mistake.** Taking $W/L \propto 1/(V_{GS} - V_{TH})$ at constant current by copying the shape of the third $g_m$ panel. That panel shows $g_m = 2I_D/V_{ov}$; the aspect ratio needed to carry a fixed current falls as the *square* of the overdrive.
