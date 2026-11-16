# Detailed solution - R573

**Approach.** With the input at $V_{DD}$, the switch charges $C_H$ as a source follower whose overdrive shrinks as $V_{out}$ rises. $M_1$ stays saturated, so KCL with the square-law current gives a nonlinear differential equation that separation of variables solves exactly. Evaluate it at 2.1 V and show why no single time constant describes the waveform.

### Step 1 — Terminals and region of operation

The output starts at 0 V and can only rise toward the 3-V input, so the lower-potential terminal, $V_{out}$, is the source and the input terminal is the drain:

$$V_{GS} = V_{DD} - V_{out}, \qquad V_{DS} = V_{DD} - V_{out}.$$

Since $V_{DS} = V_{GS}$, **$M_1$ is saturated throughout the transient**, and it conducts while $V_{out} < V_{DD} - V_{TH} = 2.3$ V. The device constant is

$$\beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})\times40 = 5.36\ \mathrm{mA/V^2}.$$

### Step 2 — The differential equation

The drain current charges $C_H$ (with $\lambda = 0$ and $\gamma = 0$):

$$C_H\frac{dV_{out}}{dt} = I_D = \frac12\beta\left(V_{DD} - V_{out} - V_{TH}\right)^2 .$$

With the remaining overdrive

$$w(t) = V_{DD} - V_{TH} - V_{out}(t),$$

which starts at $w(0) = 2.3 - 0 = 2.3$ V and falls toward 0, and $dw/dt = -dV_{out}/dt$:

$$\frac{dw}{dt} = -\frac{\beta}{2C_H}\,w^2 .$$

### Step 3 — Solve by separation of variables

$$\frac{dw}{w^2} = -\frac{\beta}{2C_H}\,dt .$$

Integrating from $t = 0$ ($w = w_0 = V_{DD} - V_{TH}$):

$$
\begin{aligned}
-\frac{1}{w} + \frac{1}{w_0} &= -\frac{\beta}{2C_H}\,t\\
\frac1w &= \frac{\beta}{2C_H}\,t + \frac{1}{w_0},
\end{aligned}
$$

$$V_{out}(t) = V_{DD} - V_{TH} - \frac{1}{\dfrac{\beta}{2C_H}\,t + \dfrac{1}{V_{DD} - V_{TH}}}.$$

As $t \to \infty$, $V_{out} \to V_{DD} - V_{TH} = 2.3$ V, but only asymptotically and only as $1/t$, much more slowly than an exponential.

### Step 4 — Time to reach 2.1 V

$$\frac{\beta}{2C_H} = \frac{5.36\times10^{-3}\ \mathrm{A/V^2}}{2\times10^{-12}\ \mathrm{F}} = 2.68\times10^{9}\ \mathrm{V^{-1}s^{-1}}.$$

At $V_{out} = 2.1$ V the remaining overdrive is $w = 2.3 - 2.1 = 0.2$ V, so

$$
\begin{aligned}
\frac{\beta}{2C_H}\,t &= \frac{1}{0.2\ \mathrm{V}} - \frac{1}{2.3\ \mathrm{V}} = 5.000 - 0.435 = 4.565\ \mathrm{V^{-1}},\\
t &= \frac{4.565\ \mathrm{V^{-1}}}{2.68\times10^{9}\ \mathrm{V^{-1}s^{-1}}} = 1.70\times10^{-9}\ \mathrm{s} = 1.70\ \mathrm{ns}.
\end{aligned}
$$

### Step 5 — Why there is no single time constant

The small-signal resistance seen by $C_H$ is $1/g_{m1}$ with $g_{m1} = \beta w$, so the instantaneous time constant is

$$\tau_{inst} = \frac{C_H}{g_{m1}} = \frac{C_H}{\beta w} = \frac{C_H}{\beta}\left(\frac{\beta}{2C_H}t + \frac{1}{w_0}\right) = \frac{C_H}{\beta w_0} + \frac{t}{2} = 81\ \mathrm{ps} + \frac t2 ,$$

which grows linearly with time:

| $t$ (ns) | $V_{out}$ (V) | $g_{m1}$ (mS) | $\tau_{inst} = C_H/g_{m1}$ (ps) |
|---|---|---|---|
| 0 | 0 | 12.3 | 81 |
| 0.1 | 0.88 | 7.6 | 131 |
| 0.2 | 1.27 | 5.5 | 181 |
| 0.5 | 1.74 | 3.0 | 331 |
| 1.0 | 1.98 | 1.7 | 581 |
| 1.70 | 2.10 | 1.1 | 931 |
| 3.0 | 2.18 | 0.63 | 1581 |

The initial slope is $I_D/C_H = 14.2\ \mathrm{mA}/1\ \mathrm{pF} = 14.2$ V/ns; the waveform then bends over and crawls toward 2.3 V. The first 1.27 V take only 0.2 ns, while the last 0.12 V up to 2.1 V take about 0.7 ns, which is why an NMOS switch cannot pass a voltage close to $V_{DD}$ quickly.

**Aside on body effect.** With a realistic $\gamma = 0.45\ \mathrm{V^{1/2}}$ (bulk grounded, source at $V_{out}$), the threshold would rise with $V_{out}$ and the output could not exceed about 1.97 V, so 2.1 V would never be reached. The problem sets $\gamma = 0$.

### Result

$$t \approx 1.70\ \mathrm{ns}.$$

Gate and drain are both at $V_{DD}$, so $M_1$ is saturated:

$$C_H\frac{dV_{out}}{dt} = \frac12\beta(V_{DD} - V_{out} - V_{TH})^2, \qquad \beta = 5.36\ \mathrm{mA/V^2}.$$

Integrating from $V_{out}(0) = 0$ gives $V_{out} = V_{DD} - V_{TH} - \dfrac{1}{\frac{\beta}{2C_H}t + \frac{1}{V_{DD} - V_{TH}}}$, which approaches 2.3 V only asymptotically. With $\beta/(2C_H) = 2.68\times10^9\ \mathrm{V^{-1}s^{-1}}$ and a remaining overdrive of 0.2 V at 2.1 V, $2.68\times10^9\,t = 1/0.2 - 1/2.3 = 4.565\ \mathrm{V^{-1}}$, so $t = 1.70$ ns.

**Common mistake.** Treating $M_1$ as a fixed triode resistor $1/[\beta(V_{DD} - V_{TH})] = 81\ \Omega$ with $\tau = 81$ ps, which gives about 0.1–0.2 ns, roughly ten times too short. The device is a saturated source follower whose $1/g_m$ grows without bound as $V_{out}$ approaches $V_{DD} - V_{TH}$.

**Common mistake.** Dropping the ½ in the saturation current, which halves the time to 0.85 ns.

**Common mistake.** Claiming that 2.1 V is unreachable because of body effect. That holds for a real device with $\gamma \approx 0.45\ \mathrm{V^{1/2}}$, but here $\gamma = 0$, so the output approaches 2.3 V and passes 2.1 V after 1.70 ns.
