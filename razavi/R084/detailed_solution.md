# Detailed solution - R084

**Approach.** Two effects combine: $M_1$ is 50 mV into triode, so it obeys the triode law and has a channel conductance $g_{ds1}$; and the load $M_2$ has its source at $V_{out}$ and bulk at ground, so its threshold depends on $V_{out}$ and it has a body transconductance $g_{mb2}$. Solve the DC current equation by iteration, then apply KCL to the small-signal model to get $A_v = -g_{m1}/(g_{m2} + g_{mb2} + g_{ds1})$.

### Step 1 — Parameters, thresholds and regions

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_2 = (134\ \mu\mathrm{A/V^2})(10/0.5) = 2.68\ \mathrm{mA/V^2}, \qquad \frac{\beta_1}{\beta_2} = 5 .$$

$M_1$ has $V_{SB1} = 0$, so $V_{TH1} = 0.7$ V. $M_2$ has $V_{SB2} = V_{out}$, so

$$V_{TH2} = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - \sqrt{0.9}\right)\ \mathrm{V} = 0.7\ \mathrm{V} + d, \qquad d \equiv 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right),$$

where $d$ is the threshold increase of $M_2$.

$M_2$ is diode-connected ($V_{DS2} = V_{GS2}$), so it is saturated. $M_1$ is 50 mV into triode: with $V_{ov1} = V_{in} - 0.7$ V,

$$V_{DS1} = V_{out} = V_{ov1} - 0.05\ \mathrm{V} \quad\Longleftrightarrow\quad V_{in} = V_{out} + 0.75\ \mathrm{V}.$$

### Step 2 — The current equation

Write $y = V_{out}$ (in volts), so $V_{ov1} = y + 0.05$. For $M_1$ (triode):

$$
\begin{aligned}
I_{D1} &= \beta_1\left[V_{ov1}V_{DS1} - \tfrac12V_{DS1}^2\right] = \beta_1\left[(y + 0.05)\,y - \tfrac12y^2\right]\\
&= \beta_1\left[\tfrac12y^2 + 0.05\,y\right] = \frac{\beta_1}{2}\,y\,(y + 0.1).
\end{aligned}
$$

For $M_2$ (saturated):

$$I_{D2} = \frac{\beta_2}{2}(V_{DD} - V_{out} - V_{TH2})^2 = \frac{\beta_2}{2}(3 - y - 0.7 - d)^2 = \frac{\beta_2}{2}(c - y)^2, \qquad c \equiv 2.3 - d .$$

Equating and dividing by $\beta_2/2$, with $\beta_1/\beta_2 = 5$:

$$
\begin{aligned}
5\,y\,(y + 0.1) &= (c - y)^2\\
5y^2 + 0.5y &= c^2 - 2cy + y^2\\
4y^2 + (0.5 + 2c)\,y - c^2 &= 0 .
\end{aligned}
$$

For a given $d$ (hence $c$), the positive root is

$$y = \frac{-(0.5 + 2c) + \sqrt{(0.5 + 2c)^2 + 16c^2}}{8} ,$$

but $d$ itself depends on $y$, so we iterate.

### Step 3 — Iterate between $V_{out}$ and $V_{TH2}$

Start with no body effect ($d = 0$), then update $d$ from the new $V_{out}$:

| $k$ | $d$ (V) | $c = 2.3 - d$ | $\sqrt{(0.5+2c)^2 + 16c^2}$ | $y = V_{out}$ (V) |
|---|---|---|---|---|
| 0 | 0 | 2.3000 | $\sqrt{110.65} = 10.519$ | 0.6774 |
| 1 | $0.45(\sqrt{1.5774} - 0.9487) = 0.1383$ | 2.1617 | $\sqrt{98.04} = 9.901$ | 0.6347 |
| 2 | $0.45(\sqrt{1.5347} - 0.9487) = 0.1306$ | 2.1694 | $\sqrt{98.72} = 9.936$ | 0.6371 |
| 3 | $0.45(\sqrt{1.5371} - 0.9487) = 0.1310$ | 2.1690 | $\sqrt{98.68} = 9.934$ | 0.6370 |

(Row 0 is the solution without body effect, $V_{out} = 0.677$ V.) The iteration has converged:

$$
\begin{aligned}
V_{out} &= 0.637\ \mathrm{V},\\
V_{ov1} &= 0.637 + 0.05 = 0.687\ \mathrm{V},\\
V_{in} &= 0.7 + 0.687 = 1.387\ \mathrm{V},\\
V_{TH2} &= 0.7 + 0.131 = 0.831\ \mathrm{V},\\
V_{ov2} &= 3 - 0.637 - 0.831 = 1.532\ \mathrm{V}.
\end{aligned}
$$

**Check the currents:**

$$
\begin{aligned}
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(1.532\ \mathrm{V})^2 = 1.34\times2.347\ \mathrm{mA} = 3.15\ \mathrm{mA},\\
I_{D1} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.637)(0.737)\ \mathrm{V^2} = 6.7\times0.4695\ \mathrm{mA} = 3.15\ \mathrm{mA}.
\end{aligned}
$$

Compared with the case without body effect ($V_{in} = 1.427$ V), the higher $V_{TH2}$ pulls the output down, so $M_1$ reaches this depth of triode at a lower input.

### Step 4 — Small-signal parameters

**$M_1$ (triode).** Differentiating $I_{D1} = \beta_1[(V_{GS1} - V_{TH1})V_{DS1} - \frac12V_{DS1}^2]$:

$$
\begin{aligned}
g_{m1} &= \frac{\partial I_{D1}}{\partial V_{GS1}} = \beta_1V_{DS1} = (13.4\ \mathrm{mA/V^2})(0.637\ \mathrm{V}) = 8.54\ \mathrm{mS},\\
g_{ds1} &= \frac{\partial I_{D1}}{\partial V_{DS1}} = \beta_1(V_{ov1} - V_{DS1}) = (13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.67\ \mathrm{mS}.
\end{aligned}
$$

**$M_2$ (saturated)**, with $\eta = \partial V_{TH2}/\partial V_{SB2}$ and $g_{mb2} = \eta g_{m2}$:

$$
\begin{aligned}
g_{m2} &= \beta_2V_{ov2} = (2.68\ \mathrm{mA/V^2})(1.532\ \mathrm{V}) = 4.11\ \mathrm{mS},\\
\eta &= \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB2}}} = \frac{0.45}{2\sqrt{0.9 + 0.637}} = \frac{0.45}{2\times1.2397} = 0.181,\\
g_{mb2} &= 0.181\times4.11\ \mathrm{mS} = 0.745\ \mathrm{mS}.
\end{aligned}
$$

### Step 5 — Small-signal model and gain

One node, $out$; $V_{DD}$ and ground are ac grounds, and $\lambda = 0$:

- **$M_1$:** current source $g_{m1}v_{in}$ from $out$ to ground, in parallel with its triode channel resistance $r_{ds1} = 1/g_{ds1} = 1.49\ \mathrm{k}\Omega$; no body term ($v_{bs1} = 0$).
- **$M_2$:** gate and drain at ac ground, source at $out$, bulk at ground, so $v_{gs2} = v_{bs2} = -v_{out}$; it delivers $g_{m2}v_{gs2} + g_{mb2}v_{bs2} = -(g_{m2} + g_{mb2})v_{out}$ into $out$.

<!-- diagram: diagram-01.cir -->

KCL at $out$:

$$
\begin{aligned}
-(g_{m2} + g_{mb2})\,v_{out} &= g_{m1}v_{in} + g_{ds1}v_{out}\\
-(g_{m2} + g_{mb2} + g_{ds1})\,v_{out} &= g_{m1}v_{in}\\
A_v &= -\frac{g_{m1}}{g_{m2} + g_{mb2} + g_{ds1}} .
\end{aligned}
$$

**Numbers:**

$$A_v = -\frac{8.54\ \mathrm{mS}}{4.11\ \mathrm{mS} + 0.745\ \mathrm{mS} + 0.67\ \mathrm{mS}} = -\frac{8.54}{5.52} = -1.55 .$$

Leaving out $g_{ds1}$ gives $-8.54/4.85 = -1.76$; leaving out $g_{mb2}$ gives $-8.54/4.78 = -1.79$. Together the two extra conductances cut the gain from the ideal $-\sqrt5 = -2.24$ to $-1.55$.

### Result

$$V_{in} \approx 1.387\ \mathrm{V} \qquad (V_{out} \approx 0.637\ \mathrm{V},\ V_{TH2} \approx 0.831\ \mathrm{V},\ I_D \approx 3.15\ \mathrm{mA}),$$

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{mb2} + g_{ds1}} = -\frac{8.54\ \mathrm{mS}}{(4.11 + 0.745 + 0.67)\ \mathrm{mS}} \approx -1.55 ,$$

with $g_{m1} = \beta_1V_{DS1}$ and $g_{ds1} = \beta_1(0.05\ \mathrm{V})$ for $M_1$ in triode, and $\eta = 0.181$ for $M_2$.

**Common mistake.** Treating $M_1$ as saturated, which gives $g_{m1} = \beta_1V_{ov1}$, no $g_{ds1}$, and a gain near $-1.9$. In triode $g_{m1} = \beta_1V_{DS1}$ is smaller, and the channel conductance $\beta_1(V_{ov1} - V_{DS1})$ appears even with $\lambda = 0$.

**Common mistake.** Ignoring the body effect (giving 1.427 V and $-1.81$), or including it in only one place. It raises $V_{TH2}$ in the DC solution *and* adds $g_{mb2}$ to the load conductance.

**Common mistake.** Applying the body effect to $M_1$ ($V_{SB1} = 0$) or assuming $M_2$ is in triode (it is diode-connected, so $V_{DS2} = V_{GS2}$ keeps it saturated).
