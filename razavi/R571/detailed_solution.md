# Detailed solution - R571

**Approach.** Follow the discharge of $C_H$ in two regions. While $M_1$ is saturated it draws a constant current and $V_{out}$ falls linearly; in the triode region the square-law current gives a nonlinear differential equation that separation of variables solves exactly. The total time is the sum of the two intervals.

### Step 1 — Terminals, overdrive and device constant

After $t_0$ the gate is at 3 V. The lower-potential terminal, the grounded input, is the source, and $V_{out}$ is the drain:

$$V_{GS} = 3\ \mathrm{V}, \qquad V_{DS} = V_{out}, \qquad V_{SB} = 0 ,$$

so there is no body effect, $V_{TH} = 0.7$ V, and the overdrive is constant during the whole transient:

$$V_{ov} = V_{GS} - V_{TH} = 3 - 0.7 = 2.3\ \mathrm{V},$$

$$\beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})\times\frac{20}{0.5} = 134\times40\ \mu\mathrm{A/V^2} = 5.36\ \mathrm{mA/V^2}.$$

The capacitor discharges only through the transistor:

$$C_H\frac{dV_{out}}{dt} = -I_D .$$

### Step 2 — Interval 1: saturation (3 V → 2.3 V)

$M_1$ is saturated while $V_{out} \ge V_{ov} = 2.3$ V, and with $\lambda = 0$ its current is constant:

$$I_D = \frac12\beta V_{ov}^2 = \frac12(5.36\ \mathrm{mA/V^2})(2.3\ \mathrm{V})^2 = \frac12(5.36)(5.29)\ \mathrm{mA} = 14.18\ \mathrm{mA}.$$

The time to drop by $\Delta V = 3 - 2.3 = 0.7$ V ($= V_{TH}$) is

$$t_1 = \frac{C_H\,\Delta V}{I_D} = \frac{(1\ \mathrm{pF})(0.7\ \mathrm{V})}{14.18\ \mathrm{mA}} = 49.4\ \mathrm{ps},$$

or symbolically $t_1 = 2V_{TH}C_H/[\beta(V_{DD} - V_{TH})^2]$.

### Step 3 — Interval 2: the triode-region equation

For $V_{out} < 2.3$ V,

$$I_D = \beta\left[V_{ov}V_{out} - \frac{V_{out}^2}{2}\right],$$

$$C_H\frac{dV_{out}}{dt} = -\beta\left[V_{ov}V_{out} - \frac{V_{out}^2}{2}\right] = -\frac{\beta}{2}\,V_{out}\,(2V_{ov} - V_{out}).$$

Separating the variables:

$$\frac{dV_{out}}{V_{out}(2V_{ov} - V_{out})} = -\frac{\beta}{2C_H}\,dt ,$$

with the partial fractions

$$\frac{1}{V(2V_{ov} - V)} = \frac{1}{2V_{ov}}\left[\frac1V + \frac{1}{2V_{ov} - V}\right].$$

Integrating from the start of the triode region ($t = t_1$, $V = V_{ov}$):

$$
\begin{aligned}
\frac{1}{2V_{ov}}\left[\ln V - \ln(2V_{ov} - V)\right]_{V_{ov}}^{V_{out}} &= -\frac{\beta}{2C_H}(t - t_1)\\
\ln\frac{V_{out}}{2V_{ov} - V_{out}} - \ln\frac{V_{ov}}{2V_{ov} - V_{ov}} &= -\frac{\beta V_{ov}}{C_H}(t - t_1).
\end{aligned}
$$

The second logarithm is $\ln 1 = 0$. With the normalized time $u = \beta V_{ov}(t - t_1)/C_H$:

$$\frac{V_{out}}{2V_{ov} - V_{out}} = e^{-u} \quad\Longrightarrow\quad V_{out}(t) = \frac{2V_{ov}\,e^{-u}}{1 + e^{-u}} .$$

The time unit is

$$\frac{C_H}{\beta V_{ov}} = \frac{1\ \mathrm{pF}}{(5.36\ \mathrm{mA/V^2})(2.3\ \mathrm{V})} = \frac{1\ \mathrm{pF}}{12.33\ \mathrm{mS}} = 81.1\ \mathrm{ps},$$

i.e. $R_{on}C_H$ with the deep-triode on-resistance $R_{on} = 1/(\beta V_{ov}) = 81.1\ \Omega$. For small $V_{out}$, $V_{out} \approx 2V_{ov}e^{-u}$, a pure exponential with this time constant.

### Step 4 — Time to reach 1 mV

$$
\begin{aligned}
e^{-u} &= \frac{0.001}{4.6 - 0.001} = \frac{0.001}{4.599} = 2.174\times10^{-4},\\
u &= -\ln(2.174\times10^{-4}) = 8.434,\\
t - t_1 &= u\cdot\frac{C_H}{\beta V_{ov}} = 8.434\times81.1\ \mathrm{ps} = 684\ \mathrm{ps}.
\end{aligned}
$$

The total time after $t_0$ is

$$t_{total} = t_1 + (t - t_1) = 49.4\ \mathrm{ps} + 684\ \mathrm{ps} \approx 733\ \mathrm{ps} \approx 0.73\ \mathrm{ns},$$

and a direct numerical integration of $C_H\,dV_{out}/dt = -I_D(V_{out})$ gives the same 733 ps.

### Step 5 — Shape of the waveform

| Time after $t_0$ | Region | $V_{out}$ |
|---|---|---|
| 0 | saturation | 3.00 V |
| 49 ps | edge of triode | 2.30 V |
| 130 ps ($u = 1$) | triode | 1.24 V |
| 212 ps ($u = 2$) | triode | 0.55 V |
| 293 ps ($u = 3$) | triode | 0.22 V |
| 455 ps ($u = 5$) | triode | 0.031 V |
| 733 ps ($u = 8.43$) | triode | 0.001 V |

$V_{out}$ first falls on a straight line, then curves into an exponential tail with time constant $R_{on}C_H = 81$ ps; the tail takes most of the time, about 8.4 time constants.

**Comparison.** A fixed resistor $R_{on} = 81.1\ \Omega$ for the whole transient gives $81.1\ \mathrm{ps}\times\ln(3\ \mathrm{V}/1\ \mathrm{mV}) = 81.1\times8.01 = 649$ ps, about 0.65 ns. That underestimates the time because the real device conducts less than $V_{out}/R_{on}$ at large $V_{DS}$.

### Result

About **0.73 ns** after $t_0$ (≈ 49 ps in saturation plus ≈ 684 ps in the triode region):

- $\beta = 5.36$ mA/V² and $V_{DD} - V_{TH} = 2.3$ V. The source is the grounded input terminal, so $V_{SB} = 0$ and there is no body effect.
- Saturation ($V_{out}$ from 3 V to 2.3 V): constant current $\tfrac12\beta(2.3\ \mathrm{V})^2 = 14.2$ mA, so $t_1 = 0.7\ \mathrm{V}\times1\ \mathrm{pF}/14.2\ \mathrm{mA} = 49.4$ ps.
- Triode: $V_{out} = \dfrac{2(V_{DD} - V_{TH})e^{-u}}{1 + e^{-u}}$ with $u = \beta(V_{DD} - V_{TH})(t - t_1)/C_H$ and $C_H/[\beta(V_{DD} - V_{TH})] = 81.1$ ps. $V_{out} = 1$ mV at $u = 8.43$, i.e. $t - t_1 = 684$ ps.

**Common mistake.** Treating $M_1$ as saturated throughout, i.e. discharging at 14.2 mA all the way down, which gives about 0.21 ns. Below $V_{out} = 2.3$ V the device is in triode, and its current falls in proportion to $V_{out}$, giving the long exponential tail.

**Common mistake.** Dropping the ½ in the saturation or triode current, or using $V_{DD}$ instead of $V_{DD} - V_{TH}$ as the overdrive. Each error changes the time scale by 30 % or more (using 3 V instead of 2.3 V shortens the triode time constant to 62 ps).

**Common mistake.** Adding a body effect. The source is the grounded input terminal and the bulk is grounded, so $V_{SB} = 0$ and $V_{TH} = 0.7$ V throughout.
