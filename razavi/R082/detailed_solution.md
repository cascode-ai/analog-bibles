# Detailed solution - R082

**Approach.** Impose $V_{DS1} = V_{GS1} - V_{TH} - 50$ mV, equate the **triode** current of $M_1$ to the **saturation** current of the diode-connected load $M_2$, and solve the resulting quadratic for $V_{in}$. Then build the small-signal model with the triode parameters of $M_1$: $g_{m1} = \beta_1V_{DS1}$ and a channel conductance $g_{ds1}$ that is no longer zero.

### Step 1 — Device parameters and the "50 mV into triode" condition

$M_2$ is diode-connected with its source at the output, so $V_{GS2} = V_{DS2} = V_{DD} - V_{out}$, and both devices carry the same current. With $\lambda = \gamma = 0$, $V_{TH} = 0.7$ V for both, and

$$
\begin{aligned}
\beta_1 &= (134\ \mu\mathrm{A/V^2})(50/0.5) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
\beta_2 &= (134\ \mu\mathrm{A/V^2})(10/0.5) = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.
\end{aligned}
$$

Since $V_{DS2} = V_{GS2}$, $M_2$ is saturated while it conducts:

$$I_{D2} = \frac12\beta_2(V_{DD} - V_{out} - V_{TH})^2 = \frac12\beta_2(2.3\ \mathrm{V} - V_{out})^2 .$$

With $V_{ov1} = V_{GS1} - V_{TH} = V_{in} - 0.7$ V, the edge of triode is $V_{DS1} = V_{ov1}$, and the problem asks for 50 mV less:

$$V_{DS1} = V_{ov1} - 0.05\ \mathrm{V} \quad\Longrightarrow\quad V_{out} = V_{in} - 0.75\ \mathrm{V},$$

with the triode current

$$I_{D1} = \beta_1\left[V_{ov1}V_{DS1} - \frac12V_{DS1}^2\right].$$

### Step 2 — Set up the current equation

Set $I_{D1} = I_{D2}$ and write $x = V_{ov1}$, so that $V_{DS1} = V_{out} = x - 0.05$ (all voltages in volts). The triode bracket factors as

$$
\begin{aligned}
x(x - 0.05) - \frac12(x - 0.05)^2 &= (x - 0.05)\left[x - \frac12(x - 0.05)\right]\\
&= (x - 0.05)\cdot\frac{x + 0.05}{2}\\
&= \frac{x^2 - 0.0025}{2},
\end{aligned}
$$

and the load overdrive is $2.3 - V_{out} = 2.3 - (x - 0.05) = 2.35 - x$. So

$$13.4\ \mathrm{mA/V^2}\cdot\frac{x^2 - 0.0025}{2} = \frac12(2.68\ \mathrm{mA/V^2})(2.35 - x)^2 .$$

Multiplying by $2/(2.68\ \mathrm{mA/V^2})$, with $13.4/2.68 = 5$:

$$5\,(x^2 - 0.0025) = (2.35 - x)^2 .$$

### Step 3 — Solve the quadratic

$$5x^2 - 0.0125 = 5.5225 - 4.7x + x^2 \quad\Longrightarrow\quad 4x^2 + 4.7x - 5.535 = 0 ,$$

$$
\begin{aligned}
x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{-4.7 \pm \sqrt{4.7^2 + 4(4)(5.535)}}{8}\\
&= \frac{-4.7 \pm \sqrt{22.09 + 88.56}}{8} = \frac{-4.7 \pm \sqrt{110.65}}{8} = \frac{-4.7 \pm 10.519}{8}.
\end{aligned}
$$

The "−" root is a negative overdrive, so

$$x = V_{ov1} = \frac{5.819}{8} = 0.727\ \mathrm{V},$$

$$
\begin{aligned}
V_{in} &= V_{TH} + V_{ov1} = 0.7 + 0.727 = 1.427\ \mathrm{V},\\
V_{out} &= V_{DS1} = 0.727 - 0.05 = 0.677\ \mathrm{V}.
\end{aligned}
$$

**Check the currents:**

$$
\begin{aligned}
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(2.3 - 0.677)^2\ \mathrm{V^2} = 1.34\times(1.623)^2\ \mathrm{mA} = 1.34\times2.633\ \mathrm{mA} = 3.53\ \mathrm{mA},\\
I_{D1} &= (13.4\ \mathrm{mA/V^2})\cdot\frac{0.727^2 - 0.0025}{2}\ \mathrm{V^2} = 6.7\times0.5266\ \mathrm{mA} = 3.53\ \mathrm{mA}.
\end{aligned}
$$

**Why $V_{in}$ moved only about 17 mV** from the edge value 1.411 V: the condition is on $V_{in} - V_{out}$, and $V_{out}$ falls by about $|A_v| \approx 2$ times any rise of $V_{in}$, so $V_{in} - V_{out}$ grows by about $3\,\Delta V_{in}$. Hence $\Delta V_{in} \approx 50\ \mathrm{mV}/3 \approx 17$ mV, consistent with $1.427 - 1.411 = 0.016$ V.

### Step 4 — Small-signal parameters

**$M_1$ in triode.** Differentiating $I_{D1} = \beta_1[(V_{GS1} - V_{TH})V_{DS1} - \frac12V_{DS1}^2]$:

$$
\begin{aligned}
g_{m1} &= \frac{\partial I_{D1}}{\partial V_{GS1}} = \beta_1V_{DS1} = (13.4\ \mathrm{mA/V^2})(0.677\ \mathrm{V}) = 9.08\ \mathrm{mS},\\
g_{ds1} &= \frac{\partial I_{D1}}{\partial V_{DS1}} = \beta_1(V_{GS1} - V_{TH} - V_{DS1}) = (13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.67\ \mathrm{mS}.
\end{aligned}
$$

So $M_1$ has a finite channel resistance $r_{ds1} = 1/g_{ds1} = 1/(0.67\ \mathrm{mS}) = 1.49\ \mathrm{k}\Omega$ even though $\lambda = 0$ (at the edge of triode $g_{ds1}$ was zero).

**$M_2$ in saturation:**

$$g_{m2} = \beta_2(V_{GS2} - V_{TH}) = (2.68\ \mathrm{mA/V^2})(2.3 - 0.677)\ \mathrm{V} = (2.68\ \mathrm{mA/V^2})(1.623\ \mathrm{V}) = 4.35\ \mathrm{mS}.$$

### Step 5 — Small-signal model and gain

$V_{DD}$ is ac ground, and the model has one node, $out$:

- **$M_1$:** a current source $g_{m1}v_{in}$ from $out$ to ground, in parallel with $r_{ds1}$.
- **$M_2$:** gate and drain at ac ground, source at $out$, so $v_{gs2} = -v_{out}$; it supplies $g_{m2}v_{gs2} = -g_{m2}v_{out}$ into $out$ (a resistance $1/g_{m2}$ to ground).

<!-- diagram: diagram-01.cir -->

KCL at $out$:

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in} + g_{ds1}v_{out}\\
-(g_{m2} + g_{ds1})\,v_{out} &= g_{m1}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2} + g_{ds1}} .
\end{aligned}
$$

**Numbers:**

$$A_v = -\frac{9.08\ \mathrm{mS}}{4.35\ \mathrm{mS} + 0.67\ \mathrm{mS}} = -\frac{9.08}{5.02} = -1.81 .$$

**Comparison with the edge of triode** ($A_v = -\sqrt5 = -2.24$, $g_{m1} = 9.52$ mS, $g_{m2} = 4.26$ mS):

- $g_{m1}$ has dropped to 9.08 mS because it is proportional to $V_{DS1}$, which fell, while $g_{m2}$ rose slightly to 4.35 mS because $V_{out}$ fell. These changes alone give $-9.08/4.35 = -2.09$.
- The channel conductance $g_{ds1} = 0.67$ mS now loads the output in parallel with $1/g_{m2}$, bringing the gain down to $-1.81$.

Only 50 mV into triode, the gain has already dropped by about 19 %.

### Result

$$V_{in} \approx 1.427\ \mathrm{V} \qquad (V_{out} \approx 0.677\ \mathrm{V},\ I_D \approx 3.53\ \mathrm{mA}),$$

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{ds1}} = -\frac{9.08\ \mathrm{mS}}{4.35\ \mathrm{mS} + 0.67\ \mathrm{mS}} \approx -1.81 ,$$

with $g_{m1} = \beta_1V_{DS1}$ and $g_{ds1} = \beta_1(V_{GS1} - V_{TH} - V_{DS1})$ for $M_1$ in triode.

**Common mistake.** Keeping the saturation gain $-\sqrt5 = -2.24$, or using the triode $g_{m1}$ but forgetting $g_{ds1}$ (which gives $-2.09$). In triode the channel is a resistor of $1/[\beta_1(V_{ov1} - V_{DS1})] = 1.49\ \mathrm{k}\Omega$ in parallel with the load, even with $\lambda = 0$.

**Common mistake.** Adding 50 mV to the edge input ($1.411 + 0.05 = 1.461$ V). The condition concerns $V_{in} - V_{out}$, and $V_{out}$ moves opposite to $V_{in}$ with a gain of about 2, so the input only needs to rise by about 17 mV.

**Common mistake.** Assuming $M_2$ also enters triode. A diode-connected transistor has $V_{DS} = V_{GS}$ and stays saturated while it conducts.
