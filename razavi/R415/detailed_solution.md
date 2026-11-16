# Detailed solution - R415

**Approach.** With equal dc levels at input and output, no dc current flows through $R_1$ and $R_2$, so the inverter is biased at its switching threshold $V_M$. We reduce the inverter to one transconductance $G_m = g_{m1} + g_{m2}$ and one output resistance $R_0 = r_{O1}\parallel r_{O2}$, solve the two node equations exactly, and then read the result as shunt–shunt feedback to see why the gain is far from the ideal $-R_2/R_1$.

### Step 1 — Bias point

Reading the figure: $V_{in}$ drives the common gate node G of the inverter $M_1$–$M_2$ through $R_1$, and $R_2$ connects G to the output.

The gates draw no current. If $V_{in}$ and $V_{out}$ have the same dc level, the series path $R_1$–$R_2$ has no dc voltage across it, so no dc current flows, and G sits at that same level. The inverter's input (G) and output are therefore at the same dc voltage, which means it sits at its switching threshold $V_M$. Each device then has $|V_{DS}| = |V_{GS}|$, so both are saturated, and they carry equal currents (square law, $\lambda$ neglected in the bias):

$$
\begin{aligned}
134\,(V_M - 0.7)^2 &= 38.4\,(3 - 0.8 - V_M)^2\\
1.868\,(V_M - 0.7) &= 2.2 - V_M\quad(\text{square root of both sides, } \sqrt{134/38.4} = 1.868)\\
V_M &= \frac{2.2 + 1.308}{2.868} = 1.223\ \mathrm{V}.
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

Both gates are driven by G and both drains drive the output, so the inverter acts as one controlled current source $G_mv_G$ pulling current out of the output node, in parallel with one resistance $R_0$:

$$G_m = g_{m1} + g_{m2} = 10.76\ \mathrm{mS},\qquad R_0 = r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}\ \ (1/R_0 = 0.550\ \mathrm{mS}).$$

The open-loop inverter gain is $-G_mR_0 = -19.6$.

<!-- diagram: diagram-01.cir -->

### Step 3 — Node equations

**Node G** (no current enters the gates, so the current through $R_1$ continues through $R_2$):

$$
\begin{aligned}
\frac{v_{in} - v_G}{R_1} &= \frac{v_G - v_{out}}{R_2}\\
v_G\left(\frac{1}{R_1} + \frac{1}{R_2}\right) &= \frac{v_{in}}{R_1} + \frac{v_{out}}{R_2}\\
v_G &= \frac{R_2v_{in} + R_1v_{out}}{R_1 + R_2} = (1 - \alpha)\,v_{in} + \alpha\,v_{out},
\end{aligned}
$$

with $\alpha = R_1/(R_1 + R_2) = 1/11 = 0.0909$.

**Output node** (currents leaving through the controlled source, through $R_0$ and through $R_2$):

$$G_mv_G + \frac{v_{out}}{R_0} + \frac{v_{out} - v_G}{R_2} = 0\ \Longrightarrow\ v_G\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right) = 0 .$$

### Step 4 — Voltage gain

Substitute $v_G$:

$$
\begin{aligned}
\big[(1 - \alpha)v_{in} + \alpha v_{out}\big]\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right) &= 0\\
v_{out}\left[\frac{1}{R_0} + \frac{1}{R_2} + \alpha\left(G_m - \frac{1}{R_2}\right)\right] &= -(1 - \alpha)\left(G_m - \frac{1}{R_2}\right)v_{in}
\end{aligned}
$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{(1 - \alpha)\,(G_m - 1/R_2)}{1/R_0 + 1/R_2 + \alpha\,(G_m - 1/R_2)} .$$

**Numbers** (mS): $G_m - 1/R_2 = 10.76 - 0.10 = 10.66$.

$$
\begin{aligned}
\text{denominator} &= 0.550 + 0.100 + 0.0909\times10.66 = 0.550 + 0.100 + 0.969 = 1.619\ \mathrm{mS},\\
\text{numerator} &= 0.9091\times10.66 = 9.691\ \mathrm{mS},\\
A_v &= -\frac{9.691}{1.619} = -5.99 .
\end{aligned}
$$

### Step 5 — Output impedance

Set $v_{in} = 0$. Then $v_G = \alpha v_{out}$ (G sits on the divider $R_2$–$R_1$ from the output to ac ground). A test source $v_X$ at the output delivers

$$I_X = G_m\alpha v_X + \frac{v_X}{R_0} + \frac{v_X(1 - \alpha)}{R_2},$$

where the last term is the current through $R_2$ (the voltage across it is $v_X - \alpha v_X$). Therefore

$$
\begin{aligned}
R_{out} &= \frac{1}{1/R_0 + (1 - \alpha)/R_2 + \alpha G_m}\\
&= \frac{1}{0.550 + 0.091 + 0.978}\ \mathrm{k\Omega} = \frac{1}{1.619}\ \mathrm{k\Omega} = 0.618\ \mathrm{k\Omega}.
\end{aligned}
$$

### Step 6 — Feedback view: why the gain is −6 and not −10

$R_2$ senses the output voltage and returns a current to node G: **shunt–shunt** feedback. Replace $V_{in}$ and $R_1$ by their Norton equivalent, a current $v_{in}/R_1$ in parallel with $R_1$.

- **Loading of $R_2$:** at the input (output shorted) $R_2$ appears from G to ground, so G sees $R_1\parallel R_2 = 0.909\ \mathrm{k\Omega}$; at the output (input shorted) $R_2$ appears from the output to ground, so the output sees $R_0\parallel R_2 = 1.54\ \mathrm{k\Omega}$.
- **Open-loop transimpedance:**
$$R_{T,open} = -(R_1\parallel R_2)\,G_m\,(R_0\parallel R_2) = -(0.909\ \mathrm{k\Omega})(10.76\ \mathrm{mS})(1.54\ \mathrm{k\Omega}) = -15.0\ \mathrm{k\Omega}.$$
- **Feedback factor** (current returned to G per volt of output): $-1/R_2 = -0.1$ mS.
- **Loop gain:** $T = (15.0\ \mathrm{k\Omega})(0.1\ \mathrm{mS}) = 1.50$.
- **Closed loop:**
$$R_{T} = \frac{-15.0\ \mathrm{k\Omega}}{1 + 1.50} = -6.0\ \mathrm{k\Omega},\qquad A_v = \frac{R_T}{R_1} = -6.0,\qquad R_{out} = \frac{R_0\parallel R_2}{1 + T} = \frac{1.54\ \mathrm{k\Omega}}{2.50} = 0.61\ \mathrm{k\Omega}.$$

These agree with the exact −5.99 and 618 Ω. (The small difference comes from the signal that $R_2$ feeds forward from G to the output, which the two-port method neglects.)

The ideal gain $-R_2/R_1 = -10$ requires a large loop gain. Here the inverter's open-loop gain is only 19.6, and only the fraction $R_1/(R_1 + R_2) \approx 1/11$ of the output is fed back, so $T \approx 1.5$ and the gain falls well short of −10.

### Result

$$A_v = -\frac{(1 - \alpha)(G_m - 1/R_2)}{1/R_0 + 1/R_2 + \alpha(G_m - 1/R_2)} \approx -6.0,\qquad R_{out} = \frac{1}{1/R_0 + (1 - \alpha)/R_2 + \alpha G_m} \approx 0.62\ \mathrm{k\Omega},$$

with $V_M = 1.22$ V, $I_D = 1.83$ mA, $G_m = g_{m1} + g_{m2} = 10.76$ mS, $R_0 = r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}$ and $\alpha = R_1/(R_1 + R_2) = 1/11$. The loop gain is only about 1.5. (If $\lambda$ is also kept in the bias calculation, the gain stays near −6 and $R_{out}$ comes out near 0.5 kΩ; the low loop gain makes the result sensitive to such modelling details.)

**Common mistake.** Quoting the ideal inverting-amplifier gain $-R_2/R_1 = -10$. That formula assumes a very large loop gain; with $T \approx 1.5$ the actual gain is only about 60 % of it.

**Common mistake.** Using only $g_{m1}$ for the inverter. Both gates are connected to G, so both transistors convert $v_G$ into output current, and $G_m = g_{m1} + g_{m2}$.

**Common mistake.** Ignoring the loading of $R_2$ at the output, or claiming an $R_{out}$ larger than $r_{O1}\parallel r_{O2}$. $R_2$ both loads the output and provides shunt feedback; both effects *lower* the output resistance below the open-loop 1.82 kΩ.
