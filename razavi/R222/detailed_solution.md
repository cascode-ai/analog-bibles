# Detailed solution - R222

**Approach.** Derive $I_{D1} - I_{D2}$ versus $\Delta V_{in}$ from the square law, find how the turn-off voltage $\Delta V_{in1}$ and the peak $G_m$ depend on $W/L$, and then integrate $G_m$. Since $G_m$ is the derivative of $I_{D1} - I_{D2}$, its area equals the total change of $I_{D1} - I_{D2}$, which is fixed by $I_{SS}$ alone.

### Step 1 — Large-signal characteristic of the pair

With $k = \mu_nC_{ox}W/L$ and $\lambda = 0$,

$$I_{D1} = \tfrac12 k(V_{GS1} - V_{TH})^2, \qquad I_{D2} = \tfrac12 k(V_{GS2} - V_{TH})^2, \qquad I_{D1} + I_{D2} = I_{SS} .$$

The sources share node P, so $\Delta V_{in} = V_{GS1} - V_{GS2}$, and with $V_{GS} - V_{TH} = \sqrt{2I_D/k}$,

$$\Delta V_{in} = \sqrt{\frac{2I_{D1}}{k}} - \sqrt{\frac{2I_{D2}}{k}} .$$

Squaring and using $I_{D1} + I_{D2} = I_{SS}$:

$$\Delta V_{in}^2 = \frac{2}{k}\left(I_{D1} + I_{D2} - 2\sqrt{I_{D1}I_{D2}}\right) = \frac{2}{k}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right) ,$$

$$2\sqrt{I_{D1}I_{D2}} = I_{SS} - \frac{k}{2}\Delta V_{in}^2 \quad\Longrightarrow\quad 4I_{D1}I_{D2} = \left(I_{SS} - \frac{k}{2}\Delta V_{in}^2\right)^2 .$$

With $(I_{D1} - I_{D2})^2 = (I_{D1} + I_{D2})^2 - 4I_{D1}I_{D2}$:

$$
\begin{aligned}
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - \left(I_{SS} - \frac{k}{2}\Delta V_{in}^2\right)^2\\
&= kI_{SS}\Delta V_{in}^2 - \frac{k^2}{4}\Delta V_{in}^4\\
&= \frac{k^2}{4}\Delta V_{in}^2\left(\frac{4I_{SS}}{k} - \Delta V_{in}^2\right),
\end{aligned}
$$

$$I_{D1} - I_{D2} = \frac{k}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2} .$$

$M_2$ turns off when $I_{D2} = 0$ and $I_{D1} = I_{SS}$, i.e. at $\Delta V_{in} = \sqrt{2I_{SS}/k} - 0$:

$$\Delta V_{in1} = \sqrt{\frac{2I_{SS}}{\mu_nC_{ox}W/L}} .$$

The formula holds for $|\Delta V_{in}| \le \Delta V_{in1}$; beyond that one transistor is off and $I_{D1} - I_{D2} = \pm I_{SS}$ stays constant.

### Step 2 — The overall transconductance $G_m$

Differentiating inside $|\Delta V_{in}| \le \Delta V_{in1}$:

$$
\begin{aligned}
G_m = \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V_{in}} &= \frac{k}{2}\left[\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2} - \frac{\Delta V_{in}^2}{\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2}}\right]\\
&= \frac{k}{2}\cdot\frac{\frac{4I_{SS}}{k} - 2\Delta V_{in}^2}{\sqrt{\frac{4I_{SS}}{k} - \Delta V_{in}^2}} .
\end{aligned}
$$

**Peak** (at $\Delta V_{in} = 0$), equal to the $g_m$ of each transistor at $I_D = I_{SS}/2$:

$$G_{m,\text{peak}} = \frac{k}{2}\cdot\frac{4I_{SS}/k}{\sqrt{4I_{SS}/k}} = \frac{k}{2}\sqrt{\frac{4I_{SS}}{k}} = \sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}} .$$

**Edges.** At $\Delta V_{in} = \pm\Delta V_{in1}$, $\frac{4I_{SS}}{k} - 2\Delta V_{in1}^2 = \frac{4I_{SS}}{k} - \frac{4I_{SS}}{k} = 0$, so $G_m$ falls smoothly to zero and stays zero outside, as drawn.

**Normalized shape.** With $u = \Delta V_{in}/\Delta V_{in1}$ and $4I_{SS}/k = 2\Delta V_{in1}^2$:

$$\frac{I_{D1}}{I_{SS}} = \frac12\left(1 + u\sqrt{2 - u^2}\right), \qquad \frac{G_m}{G_{m,\text{peak}}} = \frac{\sqrt2\,(1 - u^2)}{\sqrt{2 - u^2}}, \qquad |u| \le 1 .$$

$W/L$ does not appear: **every pair has the same curve shapes**, and $W/L$ only sets the horizontal scale $\Delta V_{in1}$ and the vertical scale $G_{m,\text{peak}}$. Some points ($I_{D2}(u) = I_{D1}(-u)$):

| $u = \Delta V_{in}/\Delta V_{in1}$ | 0 | 0.25 | 0.5 | 0.75 | 1 |
|---|---|---|---|---|---|
| $I_{D1}/I_{SS}$ | 0.500 | 0.674 | 0.831 | 0.950 | 1.000 |
| $G_m/G_{m,\text{peak}}$ | 1.000 | 0.953 | 0.802 | 0.516 | 0 |

### Step 3 — What happens as $W/L$ increases

With $I_{SS}$ fixed:

- **Turn-off voltage:** $\Delta V_{in1} = \sqrt{2I_{SS}/(\mu_nC_{ox}W/L)} \propto 1/\sqrt{W/L}$ **decreases**: a wider device carries all of $I_{SS}$ with less overdrive.
- **Current plots:** $I_{D1}$ and $I_{D2}$ still cross at $I_{SS}/2$ at $\Delta V_{in} = 0$ and still saturate at $0$ and $I_{SS}$ (set by the tail source), but the transition is compressed into $\pm\Delta V_{in1}$, so it is **steeper**: the slope at the origin, $\partial I_{D1}/\partial\Delta V_{in} = G_{m,\text{peak}}/2$, rises as $\sqrt{W/L}$.
- **$G_m$ plot:** **narrower** (base $2\Delta V_{in1}$) and **taller** ($G_{m,\text{peak}} \propto \sqrt{W/L}$).

For example, quadrupling $W/L$ halves $\Delta V_{in1}$ and doubles $G_{m,\text{peak}}$.

### Step 4 — Area under the $G_m$ plot

$G_m$ is the derivative of $I_{D1} - I_{D2}$ and is zero for $|\Delta V_{in}| > \Delta V_{in1}$, so

$$
\begin{aligned}
\int_{-\infty}^{+\infty} G_m\,d(\Delta V_{in}) &= \int_{-\Delta V_{in1}}^{+\Delta V_{in1}} \frac{\partial(I_{D1} - I_{D2})}{\partial\Delta V_{in}}\,d(\Delta V_{in})\\
&= (I_{D1} - I_{D2})\big|_{+\Delta V_{in1}} - (I_{D1} - I_{D2})\big|_{-\Delta V_{in1}}\\
&= (I_{SS} - 0) - (0 - I_{SS})\\
&= 2I_{SS} .
\end{aligned}
$$

**The area is $2I_{SS}$, independent of $W/L$**: however the switch-over happens, $I_{D1} - I_{D2}$ must climb from $-I_{SS}$ (all of $I_{SS}$ in $M_2$) to $+I_{SS}$ (all of it in $M_1$).

**Check by direct integration.** With $\Delta V_{in} = u\,\Delta V_{in1}$:

$$\text{Area} = G_{m,\text{peak}}\,\Delta V_{in1}\int_{-1}^{1}\frac{\sqrt2\,(1 - u^2)}{\sqrt{2 - u^2}}\,du .$$

With $u = \sqrt2\sin\theta$ ($du = \sqrt2\cos\theta\,d\theta$, $\sqrt{2 - u^2} = \sqrt2\cos\theta$, limits $\theta = \pm\pi/4$):

$$\int_{-1}^{1}\frac{1 - u^2}{\sqrt{2 - u^2}}\,du = \int_{-\pi/4}^{\pi/4}(1 - 2\sin^2\theta)\,d\theta = \int_{-\pi/4}^{\pi/4}\cos2\theta\,d\theta = \left[\frac{\sin2\theta}{2}\right]_{-\pi/4}^{\pi/4} = 1 ,$$

$$\text{Area} = \sqrt2\,G_{m,\text{peak}}\,\Delta V_{in1} = \sqrt2\sqrt{kI_{SS}}\sqrt{\frac{2I_{SS}}{k}} = 2I_{SS}\ \checkmark$$

### Step 5 — Why the peak $G_m$ must rise

The area is fixed at $2I_{SS}$ while the base $2\Delta V_{in1}$ shrinks as $1/\sqrt{W/L}$, so the average height grows:

$$\overline{G_m} = \frac{\text{Area}}{\text{base}} = \frac{2I_{SS}}{2\Delta V_{in1}} = \frac{I_{SS}}{\Delta V_{in1}} = \sqrt{\frac{\mu_nC_{ox}(W/L)I_{SS}}{2}} \propto \sqrt{\frac{W}{L}} .$$

Since the shape is the same for every $W/L$ (Step 2), the peak scales exactly like the average:

$$G_{m,\text{peak}} = \sqrt2\,\overline{G_m} = \sqrt{\mu_nC_{ox}\frac{W}{L}I_{SS}} \propto \sqrt{\frac{W}{L}} .$$

Equivalently, peak $\times$ base $= \sqrt{kI_{SS}}\cdot2\sqrt{2I_{SS}/k} = 2\sqrt2\,I_{SS}$, a constant. This is the basic trade-off of the pair: larger $W/L$ gives more gain at equilibrium but a narrower linear input range.

### Result

- As $W/L$ increases, $\Delta V_{in1} = \sqrt{2I_{SS}/(\mu_nC_{ox}W/L)}$ decreases. The $I_{D1}$, $I_{D2}$ curves keep their end levels ($0$ and $I_{SS}$) and their crossing at $I_{SS}/2$, but switch over a narrower input range (steeper transitions). The $G_m$ curve becomes narrower and taller.
- The area under the $G_m$ plot is
$$\int G_m\,d(\Delta V_{in}) = (I_{D1} - I_{D2})\big|_{+\Delta V_{in1}} - (I_{D1} - I_{D2})\big|_{-\Delta V_{in1}} = 2I_{SS},$$
independent of $W/L$.
- Because the width ($2\Delta V_{in1} \propto 1/\sqrt{W/L}$) shrinks while the area stays $2I_{SS}$, the height must grow: $G_{m,\text{peak}} = \sqrt{\mu_nC_{ox}(W/L)I_{SS}} \propto \sqrt{W/L}$ (peak $\times$ width $= 2\sqrt2\,I_{SS}$).

**Common mistake.** Giving the area as $I_{SS}$, which is the area under $\partial I_{D1}/\partial\Delta V_{in}$ of one side. $G_m$ is the derivative of the *difference* $I_{D1} - I_{D2}$, which swings from $-I_{SS}$ to $+I_{SS}$.

**Common mistake.** Saying the input range *widens* with larger $W/L$, or that the saturated current levels change. $\Delta V_{in1} \propto 1/\sqrt{W/L}$ shrinks, and the end levels are fixed at $0$ and $I_{SS}$ by the tail source.
