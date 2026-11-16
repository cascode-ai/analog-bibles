# Detailed solution - R415

**Approach.** With equal dc levels at input and output, no dc current flows through $R_1$ and $R_2$, so the inverter is biased at its switching threshold $V_M$. Reduce the inverter to one transconductance $G_m = g_{m1} + g_{m2}$ and one output resistance $R_0 = r_{O1}\parallel r_{O2}$, solve the two node equations exactly, and then read the result as shunt–shunt feedback to see why the gain is far from the ideal $-R_2/R_1$.

### Step 1 — Bias point

Call the common gate node G. The gates draw no current and $V_{in}$, $V_{out}$ have the same dc level, so no dc current flows in $R_1$–$R_2$ and G sits at that same level: the inverter is at its switching threshold $V_M$, with $|V_{DS}| = |V_{GS}|$ for both devices (saturated). Equating the square-law currents ($\lambda$ neglected in the bias):

$$
\begin{aligned}
134\,(V_M - 0.7)^2 &= 38.4\,(3 - 0.8 - V_M)^2\\
1.868\,(V_M - 0.7) &= 2.2 - V_M\quad(\sqrt{134/38.4} = 1.868)\\
V_M &= \frac{2.2 + 1.308}{2.868} = 1.223\ \mathrm{V},
\end{aligned}
$$

$$I_D = \frac12(134\ \mu\mathrm{A/V^2})(100)(1.223 - 0.7)^2 = (6.7\ \mathrm{mA/V^2})(0.523\ \mathrm{V})^2 = 1.83\ \mathrm{mA}.$$

### Step 2 — Small-signal parameters of the inverter

$$
\begin{aligned}
g_{m1} &= \frac{2I_D}{V_{ov1}} = \frac{2(1.83\ \mathrm{mA})}{0.523\ \mathrm{V}} = 7.01\ \mathrm{mS}, &
g_{m2} &= \frac{2I_D}{|V_{ov2}|} = \frac{2(1.83\ \mathrm{mA})}{0.977\ \mathrm{V}} = 3.75\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1)(1.83\ \mathrm{mA})} = 5.46\ \mathrm{k\Omega}, &
r_{O2} &= \frac{1}{(0.2)(1.83\ \mathrm{mA})} = 2.73\ \mathrm{k\Omega}.
\end{aligned}
$$

Both gates are driven by G and both drains drive the output, so the inverter is one controlled current $G_mv_G$ pulling current out of the output node, in parallel with $R_0$:

$$G_m = g_{m1} + g_{m2} = 10.76\ \mathrm{mS},\qquad R_0 = r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}\ \ (1/R_0 = 0.550\ \mathrm{mS}),$$

with open-loop gain $-G_mR_0 = -19.6$.

<!-- diagram: diagram-01.cir -->

### Step 3 — Node equations

**Node G** (the current through $R_1$ continues through $R_2$):

$$
\begin{aligned}
\frac{v_{in} - v_G}{R_1} &= \frac{v_G - v_{out}}{R_2}\\
v_G\left(\frac{1}{R_1} + \frac{1}{R_2}\right) &= \frac{v_{in}}{R_1} + \frac{v_{out}}{R_2}\\
v_G &= \frac{R_2v_{in} + R_1v_{out}}{R_1 + R_2} = (1 - \alpha)\,v_{in} + \alpha\,v_{out},
\end{aligned}
$$

with $\alpha = R_1/(R_1 + R_2) = 1/11 = 0.0909$.

**Output node** (currents leaving through the controlled source, $R_0$ and $R_2$):

$$G_mv_G + \frac{v_{out}}{R_0} + \frac{v_{out} - v_G}{R_2} = 0\ \Longrightarrow\ v_G\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right) = 0 .$$

### Step 4 — Voltage gain

Substituting $v_G$:

$$
\begin{aligned}
\big[(1 - \alpha)v_{in} + \alpha v_{out}\big]\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right) &= 0\\
v_{out}\left[\frac{1}{R_0} + \frac{1}{R_2} + \alpha\left(G_m - \frac{1}{R_2}\right)\right] &= -(1 - \alpha)\left(G_m - \frac{1}{R_2}\right)v_{in}
\end{aligned}
$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{(1 - \alpha)\,(G_m - 1/R_2)}{1/R_0 + 1/R_2 + \alpha\,(G_m - 1/R_2)} .$$

In mS, $G_m - 1/R_2 = 10.76 - 0.10 = 10.66$:

$$
\begin{aligned}
\text{denominator} &= 0.550 + 0.100 + 0.0909\times10.66 = 0.550 + 0.100 + 0.969 = 1.619\ \mathrm{mS},\\
\text{numerator} &= 0.9091\times10.66 = 9.691\ \mathrm{mS},\\
A_v &= -\frac{9.691}{1.619} = -5.99 .
\end{aligned}
$$

### Step 5 — Output impedance

With $v_{in} = 0$, G sits on the divider $R_2$–$R_1$ from the output to ac ground, so $v_G = \alpha v_{out}$. A test source $v_X$ at the output delivers

$$I_X = G_m\alpha v_X + \frac{v_X}{R_0} + \frac{v_X(1 - \alpha)}{R_2},$$

the last term being the current through $R_2$. Therefore

$$
\begin{aligned}
R_{out} &= \frac{1}{1/R_0 + (1 - \alpha)/R_2 + \alpha G_m}\\
&= \frac{1}{0.550 + 0.091 + 0.978}\ \mathrm{k\Omega} = \frac{1}{1.619}\ \mathrm{k\Omega} = 0.618\ \mathrm{k\Omega}.
\end{aligned}
$$

### Step 6 — Feedback view: why the gain is −6 and not −10

$R_2$ senses the output voltage and returns a current to G: **shunt–shunt** feedback. Replace $V_{in}$ and $R_1$ by their Norton equivalent, $v_{in}/R_1$ in parallel with $R_1$.

- **Loading of $R_2$:** G sees $R_1\parallel R_2 = 0.909\ \mathrm{k\Omega}$; the output sees $R_0\parallel R_2 = 1.54\ \mathrm{k\Omega}$.
- **Open-loop transimpedance:**
$$R_{T,open} = -(R_1\parallel R_2)\,G_m\,(R_0\parallel R_2) = -(0.909\ \mathrm{k\Omega})(10.76\ \mathrm{mS})(1.54\ \mathrm{k\Omega}) = -15.0\ \mathrm{k\Omega}.$$
- **Feedback factor** (current returned to G per volt of output): $-1/R_2 = -0.1$ mS, so the loop gain is $T = (15.0\ \mathrm{k\Omega})(0.1\ \mathrm{mS}) = 1.50$.
- **Closed loop:**
$$R_{T} = \frac{-15.0\ \mathrm{k\Omega}}{1 + 1.50} = -6.0\ \mathrm{k\Omega},\qquad A_v = \frac{R_T}{R_1} = -6.0,\qquad R_{out} = \frac{R_0\parallel R_2}{1 + T} = \frac{1.54\ \mathrm{k\Omega}}{2.50} = 0.61\ \mathrm{k\Omega}.$$

These agree with the exact −5.99 and 618 Ω (the two-port method neglects the small signal $R_2$ feeds forward from G to the output). The ideal $-R_2/R_1 = -10$ needs a large loop gain, but the inverter's open-loop gain is only 19.6 and only about $1/11$ of the output is fed back, so $T \approx 1.5$.

### Result

$$A_v = -\frac{(1 - \alpha)(G_m - 1/R_2)}{1/R_0 + 1/R_2 + \alpha(G_m - 1/R_2)} \approx -6.0,\qquad R_{out} = \frac{1}{1/R_0 + (1 - \alpha)/R_2 + \alpha G_m} \approx 0.62\ \mathrm{k\Omega},$$

with $V_M = 1.22$ V, $I_D = 1.83$ mA, $G_m = g_{m1} + g_{m2} = 10.76$ mS, $R_0 = r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}$ and $\alpha = R_1/(R_1 + R_2) = 1/11$. The loop gain is only about 1.5. (If $\lambda$ is also kept in the bias calculation, the gain stays near −6 and $R_{out}$ comes out near 0.5 kΩ; the low loop gain makes the result sensitive to such modelling details.)

**Common mistake.** Quoting the ideal gain $-R_2/R_1 = -10$. With $T \approx 1.5$ the actual gain is only about 60 % of it.

**Common mistake.** Using only $g_{m1}$ for the inverter. Both gates are connected to G, so $G_m = g_{m1} + g_{m2}$.

**Common mistake.** Ignoring the loading of $R_2$ at the output, or claiming an $R_{out}$ larger than $r_{O1}\parallel r_{O2}$. $R_2$ both loads the output and provides shunt feedback; both effects *lower* $R_{out}$ below the open-loop 1.82 kΩ.
