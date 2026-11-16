# Detailed solution - R291

**Approach.** Replace the PMOS current source by its small-signal equivalent (a resistance $r_{O2}$ plus the capacitances it hangs on the output node), so that the circuit becomes the standard common-source stage with a drain resistance $R_{out} = r_{O1}\parallel r_{O2}$ and a total output capacitance $C_{out}$. Then write KCL at the two nodes, obtain the exact second-order transfer function, and solve for its poles and zero with the device values.

### Step 1 — What the PMOS load adds to the circuit

$V_{DD}$, the bias on $M_2$'s gate and $M_2$'s bulk (at $V_{DD}$) are all ac grounds. So $v_{gs2} = 0$ and only $r_{O2}$ remains of $M_2$'s channel, from the output to ac ground; $C_{GD2}$ (to the ac-grounded gate) and $C_{DB2}$ (to the bulk) are both **capacitances from the output to ground**. $C_{GS2}$ sits between two ac grounds and does not matter, nor does $C_{SB1}$ of $M_1$ (source and bulk both grounded). The circuit is therefore the CS stage of the figure with

$$R_{out} = r_{O1}\parallel r_{O2}, \qquad C_{out} = C_{DB1} + C_{DB2} + C_{GD2}$$

in place of the drain resistor and $C_{DB}$.

### Step 2 — Bias point and small-signal parameters

With $(W/L)_1 = 50/0.5 = 100$:

$$g_{m1} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}.$$

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
r_{O2} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k\Omega},\\
R_{out} &= r_{O1}\parallel r_{O2} = \frac{(10)(5)}{10 + 5}\ \mathrm{k\Omega} = 3.33\ \mathrm{k\Omega}.
\end{aligned}
$$

**Check of $M_2$.** With $(W/L)_2 = 162.8/0.5 = 325.6$ and $V_{ov2} = 0.4$ V,

$$I_{D2} = \tfrac12\mu_pC_{ox}\left(\tfrac{W}{L}\right)_2V_{ov2}^2 = \tfrac12(38.4\ \mu\mathrm{A/V^2})(325.6)(0.4\ \mathrm{V})^2 = 1.00\ \mathrm{mA},$$

so $M_2$ indeed supplies the 1 mA that $M_1$ draws.

**Low-frequency gain:**

$$A_0 = -g_{m1}R_{out} = -(5.18\ \mathrm{mS})(3.33\ \mathrm{k\Omega}) = -17.3 .$$

### Step 3 — Capacitances of $M_1$

In saturation, $C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$ and $C_{GD} = WC_{ov}$, with $C_{ov}$ the overlap capacitance per unit width:

$$
\begin{aligned}
\tfrac23W_1LC_{ox} &= \tfrac23(50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = \tfrac23(96\ \mathrm{fF}) = 64\ \mathrm{fF},\\
W_1C_{ov} &= (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF},\\
C_{GS1} &= 64 + 20 = 84\ \mathrm{fF},\\
C_{GD1} &= 20\ \mathrm{fF}.
\end{aligned}
$$

The zero-bias drain junction capacitance is $C_{DB} = WEC_j + 2(W + E)C_{jsw}$, with $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m} = 3.5\times10^{-18}\ \mathrm{F/\mu m} = 0.0035\ \mathrm{fF/\mu m}$:

$$
\begin{aligned}
W_1EC_{j} &= (50)(1.5)\ \mu\mathrm{m^2}\times0.56\ \mathrm{fF/\mu m^2} = 42.0\ \mathrm{fF},\\
2(W_1 + E)C_{jsw} &= 2(51.5\ \mu\mathrm{m})(0.0035\ \mathrm{fF/\mu m}) = 0.36\ \mathrm{fF},\\
C_{DB1} &= 42.0 + 0.36 = 42.4\ \mathrm{fF}.
\end{aligned}
$$

### Step 4 — Capacitances of $M_2$ and the total output capacitance

$W_2 = 162.8\ \mu$m, and the PMOS sidewall value is $0.32\times10^{-11}\ \mathrm{F/m} = 0.0032\ \mathrm{fF/\mu m}$. $M_2$ is saturated, so $C_{GD2}$ is the overlap alone:

$$
\begin{aligned}
W_2EC_{j} &= (162.8)(1.5)\ \mu\mathrm{m^2}\times0.94\ \mathrm{fF/\mu m^2} = 244.2\times0.94 = 229.5\ \mathrm{fF},\\
2(W_2 + E)C_{jsw} &= 2(164.3\ \mu\mathrm{m})(0.0032\ \mathrm{fF/\mu m}) = 1.05\ \mathrm{fF},\\
C_{DB2} &= 229.5 + 1.05 = 230.6\ \mathrm{fF},\\
C_{GD2} &= W_2C_{ov,p} = (162.8\ \mu\mathrm{m})(0.3\ \mathrm{fF/\mu m}) = 48.8\ \mathrm{fF}.
\end{aligned}
$$

**Total capacitance from the output node to ground:**

$$C_{out} = C_{DB1} + C_{DB2} + C_{GD2} = 42.4 + 230.6 + 48.8 = 321.8\ \mathrm{fF}\approx 322\ \mathrm{fF}.$$

The load device is more than three times wider than $M_1$ (a PMOS needs a large $W/L$ to carry 1 mA with only 0.4 V of overdrive), so its capacitances dominate the output node: $C_{out}$ is 7.6 times $C_{DB1}$ alone.

### Step 5 — Small-signal model and the transfer function

<!-- diagram: diagram-01.cir -->

Node $X$ (gate of $M_1$) connects to $V_{in}$ through $R_S$, to ground through $C_{GS1}$ and to the output through $C_{GD1}$; the output has $g_{m1}V_X$, $R_{out}$ and $C_{out}$ to ground and $C_{GD1}$ back to $X$. Below, $C_{GS} \equiv C_{GS1}$, $C_{GD} \equiv C_{GD1}$, $g_m \equiv g_{m1}$.

**KCL at $X$** (currents leaving $X$), multiplied by $R_S$:

$$\frac{V_X - V_{in}}{R_S} + V_XC_{GS}s + (V_X - V_{out})C_{GD}s = 0 \quad\Longrightarrow\quad V_X\left[1 + R_S(C_{GS} + C_{GD})s\right] - V_{out}R_SC_{GD}s = V_{in}. \qquad (1)$$

**KCL at the output** (currents leaving the node):

$$(V_{out} - V_X)C_{GD}s + g_mV_X + \frac{V_{out}}{R_{out}} + V_{out}C_{out}s = 0 ,$$

$$V_X(g_m - C_{GD}s) = -V_{out}\left[\frac{1}{R_{out}} + (C_{GD} + C_{out})s\right] \quad\Longrightarrow\quad V_X = -V_{out}\,\frac{1 + R_{out}(C_{GD} + C_{out})s}{R_{out}(g_m - C_{GD}s)}. \qquad (2)$$

**Eliminate $V_X$.** Substituting (2) into (1) and multiplying both sides by $R_{out}(g_m - C_{GD}s)$:

$$-V_{out}\Big\{\left[1 + R_{out}(C_{GD} + C_{out})s\right]\left[1 + R_S(C_{GS} + C_{GD})s\right] + R_SR_{out}C_{GD}s\,(g_m - C_{GD}s)\Big\} = V_{in}R_{out}(g_m - C_{GD}s).$$

Expanding the curly bracket $D(s)$:

$$
\begin{aligned}
D(s) &= 1 + \left[R_{out}(C_{GD} + C_{out}) + R_S(C_{GS} + C_{GD}) + g_mR_SR_{out}C_{GD}\right]s\\
&\quad + R_SR_{out}\left[(C_{GD} + C_{out})(C_{GS} + C_{GD}) - C_{GD}^2\right]s^2 ,
\end{aligned}
$$

where the $C_{GD}^2$ terms cancel:

$$(C_{GD} + C_{out})(C_{GS} + C_{GD}) - C_{GD}^2 = C_{GS}C_{GD} + C_{GS}C_{out} + C_{GD}C_{out} \equiv \xi .$$

Grouping the $s$ coefficient as $R_S(1 + g_mR_{out})C_{GD} + R_SC_{GS} + R_{out}(C_{GD} + C_{out})$:

$$\frac{V_{out}}{V_{in}}(s) = \frac{(C_{GD}s - g_m)\,R_{out}}{R_SR_{out}\,\xi\,s^2 + \left[R_S(1 + g_mR_{out})C_{GD} + R_SC_{GS} + R_{out}(C_{GD} + C_{out})\right]s + 1},$$

which gives $-g_mR_{out}$ at $s = 0$, as in Step 2.

### Step 6 — Numerical coefficients of the denominator

**The $s^2$ coefficient.**

$$
\begin{aligned}
\xi &= (84)(20) + (84)(321.8) + (20)(321.8)\ \mathrm{fF^2}\\
&= 1680 + 27\,031 + 6436\ \mathrm{fF^2} = 35\,147\ \mathrm{fF^2} = 3.51\times10^{-26}\ \mathrm{F^2},\\
R_SR_{out}\,\xi &= (1\ \mathrm{k\Omega})(3.33\ \mathrm{k\Omega})(3.51\times10^{-26}\ \mathrm{F^2}) = 1.17\times10^{-19}\ \mathrm{s^2}.
\end{aligned}
$$

**The $s$ coefficient** ($g_mR_{out} = 17.26$):

$$
\begin{aligned}
R_S(1 + g_mR_{out})C_{GD} &= (1\ \mathrm{k\Omega})(18.26)(20\ \mathrm{fF}) = 0.365\ \mathrm{ns},\\
R_SC_{GS} &= (1\ \mathrm{k\Omega})(84\ \mathrm{fF}) = 0.084\ \mathrm{ns},\\
R_{out}(C_{GD} + C_{out}) &= (3.33\ \mathrm{k\Omega})(341.8\ \mathrm{fF}) = 1.139\ \mathrm{ns},\\
\text{sum} &= 1.588\ \mathrm{ns} = 1.59\times10^{-9}\ \mathrm{s}.
\end{aligned}
$$

So

$$D(s) = 1.17\times10^{-19}s^2 + 1.59\times10^{-9}s + 1 .$$

The first term ($0.365$ ns) is the Miller-multiplied $C_{GD1}$ seen from the input, and the third ($1.139$ ns) is the output node's time constant, the slower one because of the large load capacitance.

### Step 7 — The poles

With $a = 1.1716\times10^{-19}\ \mathrm{s^2}$ and $b = 1.5885\times10^{-9}\ \mathrm{s}$:

$$
\begin{aligned}
s_{1,2} &= \frac{-b \pm \sqrt{b^2 - 4a}}{2a},\\
b^2 &= 2.523\times10^{-18}\ \mathrm{s^2}, \qquad 4a = 0.469\times10^{-18}\ \mathrm{s^2},\\
\sqrt{b^2 - 4a} &= \sqrt{2.054\times10^{-18}}\ \mathrm{s} = 1.433\times10^{-9}\ \mathrm{s},\\
s_1 &= \frac{(-1.5885 + 1.4333)\times10^{-9}}{2.343\times10^{-19}} = -6.6\times10^{8}\ \mathrm{rad/s},\\
s_2 &= \frac{(-1.5885 - 1.4333)\times10^{-9}}{2.343\times10^{-19}} = -1.29\times10^{10}\ \mathrm{rad/s}.
\end{aligned}
$$

In hertz:

$$f_{p1} = \frac{6.62\times10^8}{2\pi} \approx 105\ \mathrm{MHz}, \qquad f_{p2} = \frac{1.29\times10^{10}}{2\pi} \approx 2.05\ \mathrm{GHz}.$$

The poles are only about a factor of 20 apart, so the dominant-pole shortcut $\omega_{p1}\approx 1/b = 6.3\times10^8$ rad/s, $\omega_{p2}\approx b/a = 1.36\times10^{10}$ rad/s is off by about 5 %; hence the exact quadratic.

### Step 8 — The zero

The numerator $(C_{GD1}s - g_{m1})R_{out}$ vanishes at

$$s_z = +\frac{g_{m1}}{C_{GD1}} = \frac{5.18\times10^{-3}\ \mathrm{S}}{20\times10^{-15}\ \mathrm{F}} = +2.59\times10^{11}\ \mathrm{rad/s}, \qquad f_z = \frac{2.59\times10^{11}}{2\pi} \approx 41\ \mathrm{GHz},$$

in the **right half plane**: there the non-inverted feedforward current $C_{GD1}sV_X$ through $C_{GD1}$ cancels the inverted transistor current $g_{m1}V_X$, and no signal current reaches the output node.

### Step 9 — The ideal-current-source version ($\lambda = 0$)

If channel-length modulation is neglected, $R_{out}\to\infty$. Dividing the numerator and denominator by $R_{out}$ and letting $R_{out}\to\infty$:

$$\frac{V_{out}}{V_{in}} = \frac{C_{GD}s - g_m}{R_S\,\xi\,s^2 + \left[R_Sg_mC_{GD} + C_{GD} + C_{out}\right]s}.$$

The constant term has disappeared, so one pole is at **the origin** (the output integrates a current into a capacitor with no resistive path). The other pole is

$$
\begin{aligned}
|s_2| &= \frac{R_Sg_mC_{GD} + C_{GD} + C_{out}}{R_S\,\xi}\\
&= \frac{(103.5 + 20 + 321.8)\ \mathrm{fF}}{(1\ \mathrm{k\Omega})(3.51\times10^{-26}\ \mathrm{F^2})} = 1.27\times10^{10}\ \mathrm{rad/s}\ \ (\approx 2.0\ \mathrm{GHz}),
\end{aligned}
$$

with $R_Sg_mC_{GD} = (1\ \mathrm{k\Omega})(5.18\ \mathrm{mS})(20\ \mathrm{fF}) = 103.5$ fF. The zero is unchanged. With the given $\lambda$ values, however, $R_{out} = 3.33\ \mathrm{k\Omega}$ is finite and the results of Steps 7–8 apply.

### Result

With $g_{m1} = 5.18$ mS, $R_{out} = r_{O1}\parallel r_{O2} = 3.33\ \mathrm{k\Omega}$, $C_{GS1} = 84$ fF, $C_{GD1} = 20$ fF, and $C_{out} = C_{DB1} + C_{DB2} + C_{GD2} = 42.4 + 230.6 + 48.8 \approx 322$ fF:

$$\frac{V_{out}}{V_{in}} = \frac{(C_{GD1}s - g_{m1})R_{out}}{1.17\times10^{-19}s^2 + 1.59\times10^{-9}s + 1}, \qquad A_0 = -g_{m1}R_{out} \approx -17 .$$

- **Poles:** $\omega_{p1} \approx 6.6\times10^8$ rad/s ($f \approx 105$ MHz) and $\omega_{p2} \approx 1.29\times10^{10}$ rad/s ($f \approx 2.05$ GHz), both in the left half plane.
- **Zero:** $s_z = +g_{m1}/C_{GD1} \approx +2.59\times10^{11}$ rad/s ($\approx 41$ GHz), in the right half plane.
- If $\lambda$ is neglected (ideal current source): one pole at the origin, the other at $\approx 1.27\times10^{10}$ rad/s ($\approx 2.0$ GHz), and the same zero.

**Common mistake.** Leaving out the capacitances of the PMOS load. $C_{DB2}$ and $C_{GD2}$ (about 280 fF together) are much larger than $C_{DB1}$ because $M_2$ is very wide; dropping them leaves only 42 fF at the output and predicts poles near 255 MHz and 4.9 GHz, more than twice too high.

**Common mistake.** Placing the zero in the left half plane, or ignoring $C_{GD1}$'s feedforward altogether. The numerator is $C_{GD1}s - g_{m1}$, not $C_{GD1}s + g_{m1}$, so the zero is at $s = +g_{m1}/C_{GD1}$.

**Common mistake.** Using the wrong output resistance, for example a fixed drain resistor or $1/g_{m2}$. $M_2$'s gate is at a fixed bias, so it is not diode-connected; it presents only $r_{O2}$, in parallel with $r_{O1}$.
