# Detailed solution - R549

**Approach.** The ideal amplifier forces $V_X = V_Y$, which makes the two branch currents equal and puts $\Delta V_{BE} = V_T\ln n$ across $R_3$; the given current through $R_3$ fixes $n$. $V_{out}$ is then a $V_{BE}$ plus a scaled copy of the PTAT voltage $V_T\ln n$, and setting its TC to zero fixes $R_2$, and hence $R_1 = R_2$.

### Step 1 — Branch currents and $n$

With $V_X = V_Y$, $R_1$ and $R_2$ see the same voltage and, since $R_1 = R_2$, carry equal currents. $R_3$ carries $I_2$, so

$$I_1 = I_2 = I = 50\ \mu\mathrm{A}.$$

KVL to ground gives $V_X = V_{BE1}$ and $V_Y = V_{BE2} + IR_3$, so with $I_{S2} = nI_{S1}$ (base currents neglected)

$$IR_3 = V_{BE1} - V_{BE2} = V_T\ln\frac{I}{I_{S1}} - V_T\ln\frac{I}{nI_{S1}} = V_T\ln n .$$

Numerically:

$$
\begin{aligned}
V_{R3} &= IR_3 = (50\ \mu\mathrm{A})(1\ \mathrm{k}\Omega) = 50\ \mathrm{mV},\\
V_T &= \frac{kT}{q} = (8.617\times10^{-5}\ \mathrm{V/K})(300\ \mathrm{K}) = 25.85\ \mathrm{mV},\\
\ln n &= \frac{50\ \mathrm{mV}}{25.85\ \mathrm{mV}} = 1.934,\\
n &= e^{1.934} = 6.92 \approx 7 .
\end{aligned}
$$

### Step 2 — Zero-TC condition and $R_2$

Through the second branch ($Q_2$, $R_3$, $R_2$), with $I = V_T\ln n/R_3$:

$$V_{out} = V_{BE2} + I(R_2 + R_3) = V_{BE2} + \left(1 + \frac{R_2}{R_3}\right)V_T\ln n .$$

The PTAT term has

$$\frac{\partial}{\partial T}\left(V_T\ln n\right) = \frac{k}{q}\ln n = \frac{V_T\ln n}{T} = \frac{50\ \mathrm{mV}}{300\ \mathrm{K}} = 0.1667\ \mathrm{mV/K},$$

and $R_2/R_3$ is temperature-independent, so

$$\frac{\partial V_{out}}{\partial T} = \frac{\partial V_{BE2}}{\partial T} + \left(1 + \frac{R_2}{R_3}\right)\frac{k}{q}\ln n .$$

With $\partial V_{BE2}/\partial T = -1.5$ mV/K:

$$
\begin{aligned}
-1.5\ \mathrm{mV/K} + \left(1 + \frac{R_2}{R_3}\right)(0.1667\ \mathrm{mV/K}) &= 0\\
1 + \frac{R_2}{R_3} &= \frac{1.5}{0.1667} = 9.0\\
\frac{R_2}{R_3} &= 8.0\\
R_2 &= 8.0\times1\ \mathrm{k}\Omega = 8\ \mathrm{k}\Omega .
\end{aligned}
$$

Hence $R_1 = R_2 \approx 8$ kΩ.

**Cross-check with the textbook rule.** Writing the condition as $(1 + R_2/R_3)\ln n = 1.5\ \mathrm{mV/K}/(k/q)$ with the rounded $k/q \approx 0.087$ mV/K gives the familiar $(1 + R_2/R_3)\ln n \approx 17.2$, so $1 + R_2/R_3 = 17.2/1.934 = 8.89$ and $R_2 = 7.9$ kΩ. The small difference comes only from rounding $k/q$.

### Step 3 — Which $V_{BE}$ has the −1.5 mV/K?

Through the first branch,

$$V_{out} = V_{BE1} + IR_1 = V_{BE1} + \frac{R_1}{R_3}V_T\ln n ,$$

the same voltage, since $V_{BE1} = V_{BE2} + V_T\ln n$ and $R_1 = R_2$. The two TCs differ, however; differentiating $V_{BE1} - V_{BE2} = V_T\ln n$,

$$\frac{\partial V_{BE2}}{\partial T} = \frac{\partial V_{BE1}}{\partial T} - \frac{k}{q}\ln n = \frac{\partial V_{BE1}}{\partial T} - 0.167\ \mathrm{mV/K}:$$

$Q_2$ runs at $n$ times lower current density, so its $V_{BE}$ is lower and falls slightly faster. Taking −1.5 mV/K as the TC of $V_{BE1}$ instead:

$$
\begin{aligned}
-1.5\ \mathrm{mV/K} + \frac{R_1}{R_3}(0.1667\ \mathrm{mV/K}) &= 0\\
\frac{R_1}{R_3} &= 9.0, \qquad R_1 = R_2 = 9\ \mathrm{k}\Omega .
\end{aligned}
$$

The problem does not say which transistor the −1.5 mV/K refers to, and the two readings differ by $(k/q)\ln n \approx 0.17$ mV/K. The usual convention (the textbook form $V_{BE2} + (1 + R_2/R_3)V_T\ln n$) applies it to $Q_2$, giving 8 kΩ. Either value is a consistent first-order design; in practice $R_2$ is trimmed in simulation.

### Step 4 — Checks

- **Currents.** $I_1 = I_2 = 50\ \mu\mathrm{A}$, so the amplifier supplies 100 μA in total.
- **Output voltage.** The PTAT part is $(1 + R_2/R_3)V_T\ln n = 9\times50\ \mathrm{mV} = 0.45$ V. With a typical $V_{BE2} \approx 0.75$–0.8 V, $V_{out} \approx 1.2$–1.25 V, close to $E_g/q$.
- **Integer $n$.** $Q_2$ is built from whole unit devices, so $n = 7$. Then $V_T\ln 7 = 25.85\times1.946 = 50.3$ mV, so the current is 50.3 μA instead of 50 μA, and $1 + R_2/R_3 = 1.5/(0.08617\times1.946) = 8.95$, i.e. $R_2 = 7.95$ kΩ: negligible changes. (Many layouts use $n = 8$ instead, so that $Q_1$ can sit at the centre of a 3×3 common-centroid array.)

### Result

$$n = \exp\!\left(\frac{50\ \mathrm{mV}}{25.85\ \mathrm{mV}}\right) \approx 6.9 \;(\approx 7), \qquad R_1 = R_2 \approx 8\ \mathrm{k}\Omega,$$

from $V_T\ln n = IR_3 = 50$ mV and $(1 + R_2/R_3)\times0.167\ \mathrm{mV/K} = 1.5$ mV/K, with −1.5 mV/K taken as the TC of $V_{BE2}$. The "$(1 + R_2/R_3)\ln n = 17.2$" rule gives 7.9 kΩ. If −1.5 mV/K is taken as the TC of $V_{BE1}$, then $V_{out} = V_{BE1} + (R_1/R_3)V_T\ln n$ gives $R_1 = R_2 \approx 9$ kΩ. Both branches carry 50 μA, and $V_{out} \approx V_{BE2} + 0.45\ \mathrm{V} \approx 1.2$ V.

**Common mistake.** Dropping the "1 +" and writing $V_{out} = V_{BE2} + (R_2/R_3)V_T\ln n$, which forgets that the PTAT current flows through $R_3$ as well as $R_2$. It gives $R_2 = 9$ kΩ for the wrong reason (with $V_{BE2}$'s TC it is then 1 kΩ too large).

**Common mistake.** Getting $n$ from a wrong relation, such as $n = 50\ \mathrm{mV}/V_T = 1.93$ (forgetting the logarithm) or $\ln n = 17.2$ (confusing the zero-TC product $(1 + R_2/R_3)\ln n$ with $\ln n$ itself).

**Common mistake.** Using the TC of $V_T$ alone (0.0862 mV/K) for the PTAT term instead of $(k/q)\ln n = 0.167$ mV/K. That doubles the required resistor ratio.
