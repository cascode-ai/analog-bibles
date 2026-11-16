# Detailed solution - R416

**Approach.** Treat a small supply change $v_{dd}$ as a small-signal source. Only $M_2$ (source and bulk) is connected to $V_{DD}$, so the disturbance enters as a current that $M_2$ injects into the output node, and the output voltage is that current times the resistance seen at the output. Compute this for both circuits at the same bias point and compare.

### Step 1 — Common bias point

With equal dc levels at input and output, no dc current flows in $R_1$, $R_2$ of [Fig. 2], so its gate node G is at the same level too. Both inverters sit at the switching threshold $V_M$, where the saturated square-law currents are equal ($\lambda$ neglected in the bias):

$$
\begin{aligned}
134\,(V_M - 0.7)^2 &= 38.4\,(2.2 - V_M)^2\\
1.868\,(V_M - 0.7) &= 2.2 - V_M\ \Longrightarrow\ V_M = \frac{3.508}{2.868} = 1.223\ \mathrm{V},\\
I_D &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.523\ \mathrm{V})^2 = 1.83\ \mathrm{mA}.
\end{aligned}
$$

$$
\begin{aligned}
g_{m1} &= \frac{2(1.83)}{0.523} = 7.01\ \mathrm{mS}, & g_{m2} &= \frac{2(1.83)}{0.977} = 3.75\ \mathrm{mS},\\
r_{O1} &= \frac{1}{0.1\times1.83\ \mathrm{mA}} = 5.46\ \mathrm{k\Omega}, & r_{O2} &= \frac{1}{0.2\times1.83\ \mathrm{mA}} = 2.73\ \mathrm{k\Omega},\\
G_m &= g_{m1} + g_{m2} = 10.76\ \mathrm{mS}, & R_0 &= r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}.
\end{aligned}
$$

### Step 2 — How a supply change enters the circuit

$V_{in}$ is held by an ideal source, so $v_{in} = 0$. A supply change $v_{dd}$ moves the source and bulk of $M_2$ together ($v_{SB2} = 0$, no body effect), with its gate at $v_G$ and drain at $v_{out}$, so $M_2$ delivers into the output

$$i_{D2} = g_{m2}\,(v_{dd} - v_G) + \frac{v_{dd} - v_{out}}{r_{O2}} ,$$

while $M_1$ draws $g_{m1}v_G + v_{out}/r_{O1}$ from it.

<!-- diagram: diagram-01.cir -->

(The diagram shows the feedback version; for [Fig. 1], remove $R_1$ and $R_2$ and ground node G.)

### Step 3 — Inverter without feedback ([Fig. 1])

The gates are tied to $V_{in}$, so $v_G = 0$. KCL at the output:

$$
\begin{aligned}
g_{m2}v_{dd} + \frac{v_{dd} - v_{out}}{r_{O2}} &= \frac{v_{out}}{r_{O1}}\\
v_{dd}\left(g_{m2} + \frac{1}{r_{O2}}\right) &= v_{out}\left(\frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right)\\
\frac{v_{out}}{v_{dd}} &= \left(g_{m2} + \frac{1}{r_{O2}}\right)(r_{O1}\parallel r_{O2}) = (1 + g_{m2}r_{O2})\,\frac{r_{O1}}{r_{O1} + r_{O2}} .
\end{aligned}
$$

With $1/r_{O2} = 0.367$ mS:

$$\frac{v_{out}}{v_{dd}} = (3.75 + 0.37)\ \mathrm{mS}\times1.82\ \mathrm{k\Omega} = (4.12\ \mathrm{mS})(1.82\ \mathrm{k\Omega}) = 7.5 .$$

A 10-mV ripple on $V_{DD}$ produces 75 mV at the output: with its gate fixed, $M_2$ sees the supply change as a change of $V_{SG}$ and amplifies it like a common-gate stage into the large $R_0$.

### Step 4 — Inverter with feedback ([Fig. 2])

The left end of $R_1$ is at ac ground, so G sits on the divider $R_2$ (from the output)–$R_1$ (to ground):

$$v_G = \alpha\,v_{out},\qquad \alpha = \frac{R_1}{R_1 + R_2} = \frac{1}{11} = 0.0909 .$$

KCL at the output (current from $M_2$ = current into $M_1$ + current into $R_2$):

$$g_{m2}(v_{dd} - v_G) + \frac{v_{dd} - v_{out}}{r_{O2}} = g_{m1}v_G + \frac{v_{out}}{r_{O1}} + \frac{v_{out} - v_G}{R_2} ,$$

$$v_{dd}\left(g_{m2} + \frac{1}{r_{O2}}\right) = v_G\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right).$$

With $v_G = \alpha v_{out}$:

$$\frac{v_{out}}{v_{dd}} = \frac{g_{m2} + 1/r_{O2}}{1/R_0 + 1/R_2 + \alpha\,(G_m - 1/R_2)} .$$

In mS:

$$
\begin{aligned}
\text{denominator} &= 0.550 + 0.100 + 0.0909\times(10.76 - 0.10) = 0.550 + 0.100 + 0.969 = 1.619\ \mathrm{mS},\\
\frac{v_{out}}{v_{dd}} &= \frac{4.12}{1.619} = 2.54 .
\end{aligned}
$$

### Step 5 — Comparison and interpretation

| circuit | $\partial V_{out}/\partial V_{DD}$ | output resistance |
|---|---|---|
| no feedback | 7.5 | $R_0 = 1.82\ \mathrm{k\Omega}$ |
| resistive feedback | 2.5 | 0.62 kΩ |

The circuit **with feedback is less sensitive**, by a factor $7.49/2.54 \approx 2.9$. In both circuits the disturbance is a Norton current $(g_{m2} + 1/r_{O2})v_{dd}$ injected into the output (with the output shorted, $v_G = 0$ in both), so the output moves by that current times the output resistance: $R_0 = 1/(0.550\ \mathrm{mS}) = 1.82\ \mathrm{k\Omega}$ without feedback, $1/(1.619\ \mathrm{mS}) = 0.62\ \mathrm{k\Omega}$ with it. The shunt feedback through $R_2$ lowers the output resistance by about $1 + T$ (loop gain $T \approx 1.5$) plus the loading of $R_2$, and suppresses supply ripple by the same factor.

If $\lambda$ is also kept in the bias ($V_M \approx 1.254$ V, $I_D \approx 2.32$ mA) and the model is differentiated consistently, the two numbers become about 9.5 and 2.8 (or 7.7 and 2.7 with $g_o = \lambda I_D$); the conclusion is the same.

### Result

$$\left.\frac{\partial V_{out}}{\partial V_{DD}}\right|_{\text{no feedback}} = \left(g_{m2} + \frac{1}{r_{O2}}\right)(r_{O1}\parallel r_{O2}) = (1 + g_{m2}r_{O2})\frac{r_{O1}}{r_{O1} + r_{O2}} \approx 7.5,$$

$$\left.\frac{\partial V_{out}}{\partial V_{DD}}\right|_{\text{feedback}} = \frac{g_{m2} + 1/r_{O2}}{1/R_0 + 1/R_2 + \alpha\,(G_m - 1/R_2)} \approx 2.5,\qquad \alpha = \frac{R_1}{R_1 + R_2}.$$

The circuit with resistive feedback is less sensitive to the supply, by roughly $1 + T \approx 3$, because its output resistance is about three times lower.

**Common mistake.** Computing the shift of the switching threshold, $dV_M/dV_{DD} \approx 0.35$, instead of the output change. The input is held fixed, so the question asks for the small-signal gain from $V_{DD}$ to $V_{out}$.

**Common mistake.** Leaving out the $g_{m2}$ term. With the gate fixed, $V_{SG2}$ changes by $v_{dd}$, and $g_{m2}v_{dd}$, not the current through $r_{O2}$, dominates the sensitivity.

**Common mistake.** Concluding that the two circuits are equally sensitive, or that the plain inverter is better. The feedback lowers the impedance at the output, where the disturbance is injected.
