# Detailed solution - R573

**Approach.** With the input at $V_{DD}$, the switch charges $C_H$ as a source follower: its source is the output node, and the overdrive shrinks as $V_{out}$ rises. Show that $M_1$ stays saturated, write KCL with the square-law current, and solve the resulting nonlinear differential equation exactly by separating variables. Then evaluate it at 2.1 V and explain why no single time constant describes the waveform.

### Step 1 — Terminals and region of operation

After $t = 0$ the gate is at $V_{DD} = 3$ V and the input terminal is at $V_{in} = V_{DD} = 3$ V. The output starts at 0 V and can only rise toward the input, so $V_{out}$ is the lower terminal and therefore the **source**. The input terminal is the **drain**:

$$V_{GS} = V_{DD} - V_{out}, \qquad V_{DS} = V_{DD} - V_{out}.$$

Since $V_{DS} = V_{GS}$, the saturation condition $V_{DS} \ge V_{GS} - V_{TH}$ always holds while the device is on. **$M_1$ is saturated throughout the transient.** It conducts as long as $V_{GS} > V_{TH}$, i.e. $V_{out} < V_{DD} - V_{TH} = 2.3$ V.

The device constant is

$$\beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})\times40 = 5.36\ \mathrm{mA/V^2}.$$

### Step 2 — The differential equation

**KCL at the output node.** The drain current of $M_1$ charges $C_H$. The square-law saturation current, with $\lambda = 0$ and $\gamma = 0$, gives

$$C_H\frac{dV_{out}}{dt} = I_D = \frac12\beta\left(V_{DD} - V_{out} - V_{TH}\right)^2 .$$

Introduce the remaining overdrive

$$w(t) = V_{DD} - V_{TH} - V_{out}(t),$$

which starts at $w(0) = 2.3 - 0 = 2.3$ V and decreases toward 0 as $V_{out}$ rises. Since $dw/dt = -dV_{out}/dt$:

$$\frac{dw}{dt} = -\frac{\beta}{2C_H}\,w^2 .$$

### Step 3 — Solve by separation of variables

Put all $w$ terms on one side:

$$\frac{dw}{w^2} = -\frac{\beta}{2C_H}\,dt .$$

Integrate from $t = 0$ (where $w = w_0 = V_{DD} - V_{TH}$) to $t$. Since $\int w^{-2}\,dw = -1/w$:

$$
\begin{aligned}
-\frac{1}{w} + \frac{1}{w_0} &= -\frac{\beta}{2C_H}\,t\\
\frac1w &= \frac{\beta}{2C_H}\,t + \frac{1}{w_0}.
\end{aligned}
$$

Return to $V_{out} = V_{DD} - V_{TH} - w$:

$$V_{out}(t) = V_{DD} - V_{TH} - \frac{1}{\dfrac{\beta}{2C_H}\,t + \dfrac{1}{V_{DD} - V_{TH}}}.$$

As $t \to \infty$ the fraction goes to zero, so $V_{out} \to V_{DD} - V_{TH} = 2.3$ V. It approaches this value only asymptotically, and only as $1/t$, much more slowly than an exponential.

### Step 4 — Time to reach 2.1 V

The constant is

$$\frac{\beta}{2C_H} = \frac{5.36\times10^{-3}\ \mathrm{A/V^2}}{2\times10^{-12}\ \mathrm{F}} = 2.68\times10^{9}\ \mathrm{V^{-1}s^{-1}}.$$

At $V_{out} = 2.1$ V the remaining overdrive is $w = 2.3 - 2.1 = 0.2$ V. From $1/w = (\beta/2C_H)t + 1/w_0$:

$$
\begin{aligned}
\frac{\beta}{2C_H}\,t &= \frac{1}{0.2\ \mathrm{V}} - \frac{1}{2.3\ \mathrm{V}} = 5.000 - 0.435 = 4.565\ \mathrm{V^{-1}},\\
t &= \frac{4.565\ \mathrm{V^{-1}}}{2.68\times10^{9}\ \mathrm{V^{-1}s^{-1}}} = 1.70\times10^{-9}\ \mathrm{s} = 1.70\ \mathrm{ns}.
\end{aligned}
$$

### Step 5 — Why there is no single time constant

At any instant, the small-signal resistance seen by $C_H$ is $1/g_{m1}$, with $g_{m1} = \beta w$ (square law, $g_m = \beta V_{ov}$). The "instantaneous time constant" is

$$\tau_{inst} = \frac{C_H}{g_{m1}} = \frac{C_H}{\beta w} = \frac{C_H}{\beta}\left(\frac{\beta}{2C_H}t + \frac{1}{w_0}\right) = \frac{C_H}{\beta w_0} + \frac{t}{2} = 81\ \mathrm{ps} + \frac t2 .$$

It grows linearly with time, so the charging keeps slowing down:

| $t$ (ns) | $V_{out}$ (V) | $g_{m1}$ (mS) | $\tau_{inst} = C_H/g_{m1}$ (ps) |
|---|---|---|---|
| 0 | 0 | 12.3 | 81 |
| 0.1 | 0.88 | 7.6 | 131 |
| 0.2 | 1.27 | 5.5 | 181 |
| 0.5 | 1.74 | 3.0 | 331 |
| 1.0 | 1.98 | 1.7 | 581 |
| 1.70 | 2.10 | 1.1 | 931 |
| 3.0 | 2.18 | 0.63 | 1581 |

The output rises fastest at the start: the initial slope is $I_D/C_H = 14.2\ \mathrm{mA}/1\ \mathrm{pF} = 14.2$ V/ns. It then bends over, crawling toward 2.3 V. Covering the first 1.27 V takes only 0.2 ns, while the last 0.12 V up to 2.1 V takes about 0.7 ns. This is why an NMOS switch cannot pass a voltage close to $V_{DD}$ quickly.

**Aside on body effect.** With a realistic $\gamma = 0.45\ \mathrm{V^{1/2}}$ (bulk grounded, source at $V_{out}$), the threshold would rise as $V_{out}$ rises, and the output could not exceed about 1.97 V, so 2.1 V would never be reached. The problem sets $\gamma = 0$, so this does not apply here.

### Result

$$t \approx 1.70\ \mathrm{ns}.$$

Gate and drain are both at $V_{DD}$, so $M_1$ is saturated:

$$C_H\frac{dV_{out}}{dt} = \frac12\beta(V_{DD} - V_{out} - V_{TH})^2, \qquad \beta = 5.36\ \mathrm{mA/V^2}.$$

Integrating from $V_{out}(0) = 0$ gives $V_{out} = V_{DD} - V_{TH} - \dfrac{1}{\frac{\beta}{2C_H}t + \frac{1}{V_{DD} - V_{TH}}}$, which approaches 2.3 V only asymptotically. With $\beta/(2C_H) = 2.68\times10^9\ \mathrm{V^{-1}s^{-1}}$ and a remaining overdrive of 0.2 V at 2.1 V, $2.68\times10^9\,t = 1/0.2 - 1/2.3 = 4.565\ \mathrm{V^{-1}}$, so $t = 1.70$ ns.

**Common mistake.** Treating $M_1$ as a fixed triode resistor $1/[\beta(V_{DD} - V_{TH})] = 81\ \Omega$ and using an exponential with $\tau = 81$ ps. That gives a time of about 0.1–0.2 ns, roughly ten times too short. The device is a source follower in saturation, and its effective resistance $1/g_m$ grows without bound as $V_{out}$ approaches $V_{DD} - V_{TH}$.

**Common mistake.** Dropping the ½ in the saturation current, which halves the time to 0.85 ns. The square-law saturation current is $\tfrac12\beta V_{ov}^2$.

**Common mistake.** Claiming that 2.1 V is unreachable because of body effect. That is true for a real device with $\gamma \approx 0.45\ \mathrm{V^{1/2}}$, but this problem explicitly sets $\gamma = 0$. With a constant threshold the output approaches 2.3 V and passes 2.1 V after 1.70 ns.
