# Detailed solution - R514

**Approach.** Beyond the knee of each curve, model the drain current with the channel-length-modulation form $I_D = I_0(1 + \lambda V_{DS})$, where $I_0$ is the current extrapolated back to $V_{DS} = 0$. The ratio of the currents at two drain voltages depends only on $\lambda$, so reading $I_D$ at $V_{DS} = 0.2$ V and 1 V on each curve gives $\lambda$ for that overdrive.

### Step 1 — Formula for $\lambda$ from two points

In saturation, channel-length modulation (and, in a short device, drain-induced barrier lowering) makes the current rise with $V_{DS}$. The first-order model is

$$I_D = I_0\,(1 + \lambda V_{DS}),$$

where $\lambda$ (in V⁻¹) is the channel-length modulation coefficient and $I_0$ depends on $V_{GS}$ (in the square law, $I_0 = \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V_{GS} - V_{TH})^2$).

Evaluate it at $V_{DS1} = 0.2$ V and $V_{DS2} = 1$ V and take the ratio; $I_0$ cancels:

$$r \equiv \frac{I_D(1\ \mathrm{V})}{I_D(0.2\ \mathrm{V})} = \frac{1 + \lambda\cdot1}{1 + \lambda\cdot0.2} .$$

Solve for $\lambda$:

$$
\begin{aligned}
r\,(1 + 0.2\lambda) &= 1 + \lambda\\
r + 0.2r\lambda &= 1 + \lambda\\
\lambda\,(1 - 0.2r) &= r - 1\\
\lambda &= \frac{r - 1}{1 - 0.2r}\ \ \mathrm{V^{-1}} .
\end{aligned}
$$

This is equivalent to drawing a straight line through the two points: its slope is $\Delta I_D/\Delta V_{DS} = \lambda I_0$, and its intercept at $V_{DS} = 0$ is $I_0$. So $\lambda = \text{slope}/\text{intercept}$, which serves as a cross-check below.

Note the denominator: as $r \to 1/0.2 = 5$, $\lambda \to \infty$. When $r$ is large, small reading errors in the plot cause large errors in $\lambda$.

### Step 2 — Which curve is which, and is the model applicable at 0.2 V?

The curves are ordered from bottom to top by increasing overdrive $V_{GS} - V_{TH}$ (the overdrive voltage). So the **top** curve is 350 mV, the second from the top 300 mV, the third 250 mV and the fourth 200 mV.

The square law would put the knee (the edge of saturation) at $V_{DS} = V_{GS} - V_{TH}$, i.e. 0.35 V for the top curve. In this 40-nm device, velocity saturation makes the knee occur much earlier: the top curve bends over at roughly 0.1–0.15 V, and the lower curves even earlier. At $V_{DS} = 0.2$ V all four curves of interest are therefore at or beyond their knees, and the linear $I_0(1 + \lambda V_{DS})$ model is a reasonable description from 0.2 V to 1 V.

### Step 3 — Readings from the plot

Grid lines are every 0.2 V horizontally and every 0.2 mA vertically.

| $V_{GS} - V_{TH}$ | $I_D$ at $V_{DS} = 0.2$ V | $I_D$ at $V_{DS} = 1$ V |
|---|---|---|
| 350 mV (top curve) | 0.51 mA | 1.12 mA |
| 300 mV | 0.34 mA | 0.81 mA |
| 250 mV | 0.205 mA | 0.555 mA |
| 200 mV | 0.116 mA | 0.35 mA |

### Step 4 — $\lambda$ for $V_{GS} - V_{TH} = 350$ mV

$$
\begin{aligned}
r &= \frac{1.12\ \mathrm{mA}}{0.51\ \mathrm{mA}} = 2.196,\\
\lambda &= \frac{2.196 - 1}{1 - 0.2\times2.196} = \frac{1.196}{1 - 0.439} = \frac{1.196}{0.561} = 2.13\ \mathrm{V^{-1}} .
\end{aligned}
$$

**Cross-check with the straight line:**

$$
\begin{aligned}
\text{slope} &= \frac{1.12 - 0.51}{1 - 0.2}\ \frac{\mathrm{mA}}{\mathrm{V}} = 0.763\ \mathrm{mA/V} \quad (r_O = 1/\text{slope} = 1.31\ \mathrm{k\Omega}),\\
I_0 &= 0.51\ \mathrm{mA} - 0.2\ \mathrm{V}\times0.763\ \mathrm{mA/V} = 0.358\ \mathrm{mA},\\
\lambda &= \frac{0.763}{0.358} = 2.13\ \mathrm{V^{-1}}. \ \checkmark
\end{aligned}
$$

So $\lambda \approx 2.1\ \mathrm{V^{-1}}$ (2.2 V⁻¹ if the 0.2-V reading is taken as 0.505 mA; the third digit is beyond the accuracy of the plot).

### Step 5 — Repeat for 300, 250 and 200 mV

**300 mV:**

$$r = \frac{0.81}{0.34} = 2.382,\qquad \lambda = \frac{1.382}{1 - 0.476} = \frac{1.382}{0.524} = 2.6\ \mathrm{V^{-1}} .$$

**250 mV:**

$$r = \frac{0.555}{0.205} = 2.707,\qquad \lambda = \frac{1.707}{1 - 0.541} = \frac{1.707}{0.459} = 3.7\ \mathrm{V^{-1}} .$$

**200 mV:**

$$r = \frac{0.35}{0.116} = 3.017,\qquad \lambda = \frac{2.017}{1 - 0.603} = \frac{2.017}{0.397} = 5.1\ \mathrm{V^{-1}} .$$

**Sensitivity.** For 200 mV, $r$ is already about 3, closer to the pole of the formula at $r = 5$. Reading 0.110 mA or 0.122 mA instead of 0.116 mA at 0.2 V gives $\lambda = 6.0$ or $4.4\ \mathrm{V^{-1}}$. The values are therefore good to roughly ±10 % for the upper curves and ±15–20 % for the lower ones. Only their magnitude and trend are meaningful.

| $V_{GS} - V_{TH}$ | $r$ | $\lambda$ (V⁻¹) | $\lambda\,(V_{GS} - V_{TH})$ |
|---|---|---|---|
| 200 mV | 3.02 | ≈ 5.1 | 1.02 |
| 250 mV | 2.71 | ≈ 3.7 | 0.93 |
| 300 mV | 2.38 | ≈ 2.6 | 0.79 |
| 350 mV | 2.20 | ≈ 2.1 | 0.75 |

### Step 6 — The trend and its interpretation

**Trend: $\lambda$ decreases as the overdrive increases.** It falls by more than a factor of 2 (from about 5 to about 2.1 V⁻¹) as $V_{GS} - V_{TH}$ goes from 200 mV to 350 mV. Equivalently, the product $r_OI_D \approx 1/\lambda$ grows with overdrive: at low overdrive the curves are relatively much steeper than at high overdrive.

**Why.** In a short-channel device a large part of the output slope comes from drain-induced barrier lowering (DIBL): raising $V_{DS}$ effectively lowers the threshold, by $\Delta V_{TH} \approx -\eta\,\Delta V_{DS}$. With $I_D \propto (V_{GS} - V_{TH})^2$, the relative change of current is

$$\frac{1}{I_D}\frac{\partial I_D}{\partial V_{DS}} \approx \frac{2\eta}{V_{GS} - V_{TH}} ,$$

which is inversely proportional to the overdrive. A fixed threshold shift matters more when the overdrive is small. The last column of the table shows the same tendency: $\lambda(V_{GS} - V_{TH})$ is roughly constant (0.75–1.0, dimensionless). The same argument applies to any mechanism that acts like a $V_{DS}$-dependent threshold shift: its effect on the current, relative to the current itself, shrinks as the overdrive grows.

**Magnitude.** All these values are 20–50 times larger than the $\lambda \approx 0.1\ \mathrm{V^{-1}}$ typical of long-channel textbook examples. A minimum-length 40-nm transistor has a very low output resistance: for example $r_O \approx 1.3\ \mathrm{k\Omega}$ at about 0.8 mA (350 mV curve), giving an intrinsic gain $g_mr_O$ of only about 5–10.

### Result

Using $\lambda = (r - 1)/(1 - 0.2r)$ with $r = I_D(1\ \mathrm{V})/I_D(0.2\ \mathrm{V})$:

| $V_{GS} - V_{TH}$ | 350 mV | 300 mV | 250 mV | 200 mV |
|---|---|---|---|---|
| Readings (mA) | 0.51 → 1.12 | 0.34 → 0.81 | 0.205 → 0.555 | 0.116 → 0.35 |
| $\lambda$ (V⁻¹) | ≈ 2.1 | ≈ 2.6 | ≈ 3.7 | ≈ 5.1 |

**Trend:** $\lambda$ decreases as $V_{GS} - V_{TH}$ increases, roughly halving from 200 mV to 350 mV (approximately $\lambda \propto 1/(V_{GS} - V_{TH})$). All values are far above long-channel values (≈ 0.1 V⁻¹). Because the formula diverges as $r \to 5$, the numbers are reading-sensitive; only the magnitude and the trend are meaningful.

**Common mistake.** Assigning the curves in the wrong order (e.g. taking the top curve as 50 mV). A higher overdrive always gives a higher current, so the top curve is 350 mV.

**Common mistake.** Reporting $\lambda$ of order 0.1 V⁻¹, by habit from long-channel examples or by forgetting to normalize the slope by the current. $\lambda$ is a *relative* slope, $(\Delta I_D/\Delta V_{DS})/I_0$. Here the current roughly doubles from 0.2 V to 1 V, which means $\lambda$ of order 2 V⁻¹ or more.

**Common mistake.** Concluding that $\lambda$ increases with overdrive because the higher curves have a larger *absolute* slope (in mA/V). The absolute slope $\lambda I_0$ does grow, but $I_0$ grows faster, so the relative slope $\lambda$ falls.
