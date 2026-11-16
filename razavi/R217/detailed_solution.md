# Detailed solution - R217

**Approach.** A DC imbalance $V_{OS}$ between the inputs moves the pair away from its balanced operating point: one transistor carries more of $I_{SS}$ than the other. The small sinusoids then see the **local slope** of the large-signal characteristic $I_{D1} - I_{D2}$ versus $V_{in1} - V_{in2}$, evaluated at $V_{in1} - V_{in2} = V_{OS}$. We differentiate the square-law steering formula, normalise it to its value at balance, and solve for the $V_{OS}$ that lowers it by 5 %.

### Step 1 — The large-signal characteristic

From the figure: a resistively loaded NMOS pair ($R_D$ on each side) with an ideal tail $I_{SS}$, $\lambda = 0$. Write $k = \mu_nC_{ox}W/L$. With both devices saturated, the square-law steering relation is

$$\Delta I \equiv I_{D1} - I_{D2} = \frac{k}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2}, \qquad \Delta V_{in} = V_{in1} - V_{in2},$$

valid while both devices conduct, i.e. for $|\Delta V_{in}| \le \sqrt{2I_{SS}/k}$. The differential output is $V_X - V_Y = -R_D\,\Delta I$.

### Step 2 — Small-signal gain at the shifted operating point

The inputs are $V_{in1} = V_{DC1} + v_1$ and $V_{in2} = V_{DC2} + v_2$, with $V_{DC1} - V_{DC2} = V_{OS}$ and small sinusoids of amplitude $V_0$. For small $V_0$ the output follows the tangent of the characteristic at $\Delta V_{in} = V_{OS}$:

$$|A_v| = R_D\,G_m(V_{OS}), \qquad G_m(V_{OS}) = \frac{d\,\Delta I}{d\,\Delta V_{in}}\bigg|_{\Delta V_{in} = V_{OS}} .$$

Differentiate with the product rule:

$$
\begin{aligned}
\frac{d\,\Delta I}{d\,\Delta V_{in}} &= \frac{k}{2}\left[\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2} + \Delta V_{in}\cdot\frac{-\Delta V_{in}}{\sqrt{4I_{SS}/k - \Delta V_{in}^2}}\right]\\
&= \frac{k}{2}\cdot\frac{4I_{SS}/k - 2\Delta V_{in}^2}{\sqrt{4I_{SS}/k - \Delta V_{in}^2}} .
\end{aligned}
$$

So

$$G_m(V_{OS}) = \frac{k}{2}\cdot\frac{4I_{SS}/k - 2V_{OS}^2}{\sqrt{4I_{SS}/k - V_{OS}^2}} .$$

**Check at balance:** $G_m(0) = \dfrac{k}{2}\cdot\dfrac{4I_{SS}/k}{\sqrt{4I_{SS}/k}} = \dfrac{k}{2}\sqrt{\dfrac{4I_{SS}}{k}} = \sqrt{kI_{SS}}$, which equals $g_m$ of each device at $I_{SS}/2$, as expected.

### Step 3 — Normalised form

Define the normalised imbalance

$$x = \frac{V_{OS}}{\sqrt{I_{SS}/k}} .$$

Note that $\sqrt{I_{SS}/k}$ is the overdrive of each transistor at balance, since $I_{SS}/2 = \tfrac12kV_{ov}^2$. Substitute $V_{OS}^2 = x^2I_{SS}/k$:

$$
\begin{aligned}
4\frac{I_{SS}}{k} - 2V_{OS}^2 &= \frac{I_{SS}}{k}(4 - 2x^2),\\
\sqrt{4\frac{I_{SS}}{k} - V_{OS}^2} &= \sqrt{\frac{I_{SS}}{k}}\sqrt{4 - x^2},\\
G_m(V_{OS}) &= \frac{k}{2}\sqrt{\frac{I_{SS}}{k}}\cdot\frac{4 - 2x^2}{\sqrt{4 - x^2}} = \sqrt{kI_{SS}}\cdot\frac{2 - x^2}{\sqrt{4 - x^2}} .
\end{aligned}
$$

Dividing by $G_m(0) = \sqrt{kI_{SS}}$:

$$\frac{G_m(V_{OS})}{G_m(0)} = \frac{2 - x^2}{\sqrt{4 - x^2}} .$$

| $x$ | 0 | 0.2 | 0.3 | 0.363 | 0.5 | 0.707 | 1.0 | 1.414 |
|---|---|---|---|---|---|---|---|---|
| $G_m/G_m(0)$ | 1 | 0.985 | 0.966 | 0.950 | 0.904 | 0.802 | 0.577 | 0 |

The gain falls slowly at first (the drop is quadratic in $x$) and reaches zero at the edge of the input range, $x = \sqrt2$, where one transistor turns off.

### Step 4 — Solve for a 5 % drop

Set the ratio to 0.95 and let $u = x^2$:

$$
\begin{aligned}
\frac{2 - u}{\sqrt{4 - u}} &= 0.95\\
(2 - u)^2 &= 0.9025\,(4 - u)\\
4 - 4u + u^2 &= 3.61 - 0.9025u\\
u^2 - 3.0975u + 0.39 &= 0 .
\end{aligned}
$$

Quadratic formula; take the small root (the other root, about 2.97, is beyond the valid range $u \le 2$):

$$u = \frac{3.0975 - \sqrt{3.0975^2 - 4(0.39)}}{2} = \frac{3.0975 - \sqrt{9.5945 - 1.56}}{2} = \frac{3.0975 - 2.8345}{2} = 0.1315 .$$

So $x = \sqrt{0.1315} = 0.363$. (Check: $(2 - 0.1315)/\sqrt{4 - 0.1315} = 1.8685/1.9668 = 0.950$ ✓.)

### Step 5 — The tolerable imbalance

$$V_{OS} \le 0.363\sqrt{\frac{I_{SS}}{\mu_nC_{ox}W/L}} .$$

This is about 36 % of the equilibrium overdrive. Equivalently, since the full input range is $\Delta V_{in,max} = \sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$:

$$V_{OS} \le \frac{0.363}{\sqrt2}\sqrt{\frac{2I_{SS}}{\mu_nC_{ox}W/L}} = 0.257\sqrt{\frac{2I_{SS}}{\mu_nC_{ox}W/L}},$$

i.e. about 26 % of the input range.

*Example:* with $I_{SS} = 1$ mA and $\mu_nC_{ox}W/L = 13.4\ \mathrm{mA/V^2}$, $\sqrt{I_{SS}/k} = 0.273$ V, so $V_{OS} \le 0.363\times0.273\ \mathrm{V} = 99$ mV.

*Check against the table:* an imbalance of half the input range ($x = 0.707$) costs 20 % of the gain, consistent with a 5 % drop at $x = 0.363$.

### Result

$$V_{OS} \le 0.36\sqrt{\frac{I_{SS}}{\mu_nC_{ox}W/L}} \approx 0.26\sqrt{\frac{2I_{SS}}{\mu_nC_{ox}W/L}},$$

i.e. about 36 % of the equilibrium overdrive, or about 26 % of the input range. It follows from $G_m(V_{OS})/G_m(0) = (2 - x^2)/\sqrt{4 - x^2} = 0.95$ with $x = V_{OS}/\sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$.

**Common mistake.** Assuming the gain does not depend on $V_{OS}$ because "the signal is small". The small signal rides on a shifted bias point, and the slope of the nonlinear steering characteristic there is lower than at balance, because one device's $g_m$ falls faster than the other's rises.

**Common mistake.** Approximating the gain as falling linearly with $V_{OS}$ (for example, allowing only 5 % of the overdrive). The characteristic is odd, so its slope is an even function of $V_{OS}$ and the drop is quadratic for small imbalance. That is why a sizeable 36 % of the overdrive is tolerated.

**Common mistake.** Giving a result beyond the input range $\sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$, or picking the wrong root of the quadratic (about 2.97). Outside the input range one transistor is off and the formula does not apply.
