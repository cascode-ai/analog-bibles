# Detailed solution - R082

**Approach.** Impose the condition $V_{DS1} = V_{GS1} - V_{TH} - 50$ mV, equate the **triode** current of $M_1$ to the **saturation** current of the diode-connected load $M_2$, and solve the resulting quadratic for $V_{in}$. Then build the small-signal model with the triode parameters of $M_1$: its transconductance $g_{m1} = \beta_1V_{DS1}$ and its channel conductance $g_{ds1}$, which is no longer zero.

### Step 1 — The circuit and the device parameters

From the figure: $M_1$ is a common-source device (gate at $V_{in}$, source grounded, drain at $V_{out}$). $M_2$ has gate and drain at $V_{DD} = 3$ V and source at $V_{out}$, so it is a **diode-connected load** with $V_{GS2} = V_{DS2} = V_{DD} - V_{out}$. Both devices carry the same current $I_D$. With $\lambda = \gamma = 0$, $V_{TH} = 0.7$ V for both.

Current factors, $\beta = \mu_nC_{ox}(W/L)$:

$$
\begin{aligned}
\beta_1 &= (134\ \mu\mathrm{A/V^2})(50/0.5) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
\beta_2 &= (134\ \mu\mathrm{A/V^2})(10/0.5) = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.
\end{aligned}
$$

### Step 2 — Regions and the "50 mV into triode" condition

**$M_2$ is saturated.** Since $V_{DS2} = V_{GS2}$, the saturation condition $V_{DS2} \ge V_{GS2} - V_{TH}$ always holds while $M_2$ conducts. Its current is

$$I_{D2} = \frac12\beta_2(V_{DD} - V_{out} - V_{TH})^2 = \frac12\beta_2(2.3\ \mathrm{V} - V_{out})^2 .$$

**$M_1$ is 50 mV into triode.** Define its overdrive $V_{ov1} = V_{GS1} - V_{TH} = V_{in} - 0.7$ V. The edge of triode is $V_{DS1} = V_{ov1}$; the problem asks for $V_{DS1}$ to be 50 mV smaller:

$$V_{DS1} = V_{ov1} - 0.05\ \mathrm{V} \quad\Longrightarrow\quad V_{out} = V_{in} - 0.75\ \mathrm{V}.$$

Its current follows the **triode-region square law**:

$$I_{D1} = \beta_1\left[V_{ov1}V_{DS1} - \frac12V_{DS1}^2\right].$$

### Step 3 — Set up the current equation

KCL at the output (no load current) gives $I_{D1} = I_{D2}$. Write $x = V_{ov1}$, so that $V_{DS1} = V_{out} = x - 0.05$ (all voltages in volts).

**Simplify the triode bracket** by factoring out $(x - 0.05)$:

$$
\begin{aligned}
x(x - 0.05) - \frac12(x - 0.05)^2 &= (x - 0.05)\left[x - \frac12(x - 0.05)\right]\\
&= (x - 0.05)\cdot\frac{x + 0.05}{2}\\
&= \frac{x^2 - 0.0025}{2}.
\end{aligned}
$$

**The load overdrive** is $2.3 - V_{out} = 2.3 - (x - 0.05) = 2.35 - x$.

Equating the currents:

$$13.4\ \mathrm{mA/V^2}\cdot\frac{x^2 - 0.0025}{2} = \frac12(2.68\ \mathrm{mA/V^2})(2.35 - x)^2 .$$

Multiply both sides by $2/(2.68\ \mathrm{mA/V^2})$; note $13.4/2.68 = 5$:

$$5\,(x^2 - 0.0025) = (2.35 - x)^2 .$$

### Step 4 — Solve the quadratic

Expand both sides:

$$5x^2 - 0.0125 = 5.5225 - 4.7x + x^2 .$$

Collect all terms on the left:

$$4x^2 + 4.7x - 5.535 = 0 .$$

Quadratic formula, with $a = 4$, $b = 4.7$, $c = -5.535$:

$$
\begin{aligned}
x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{-4.7 \pm \sqrt{4.7^2 + 4(4)(5.535)}}{8}\\
&= \frac{-4.7 \pm \sqrt{22.09 + 88.56}}{8} = \frac{-4.7 \pm \sqrt{110.65}}{8} = \frac{-4.7 \pm 10.519}{8}.
\end{aligned}
$$

The "−" root is negative, which is not a valid overdrive for a conducting device, so

$$x = V_{ov1} = \frac{5.819}{8} = 0.727\ \mathrm{V}.$$

Therefore

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

They agree.

**Why $V_{in}$ moved only about 17 mV.** At the edge of triode, $V_{in} = 1.411$ V. To go 50 mV into triode, the quantity $V_{GS1} - V_{DS1} = V_{in} - V_{out}$ must grow by 50 mV. When $V_{in}$ rises by $\Delta V_{in}$, $V_{out}$ *falls* by about $|A_v|\,\Delta V_{in}$ with $|A_v| \approx 2$, so $V_{in} - V_{out}$ grows by about $(1 + 2)\Delta V_{in}$. Hence $\Delta V_{in} \approx 50\ \mathrm{mV}/3 \approx 17$ mV, consistent with $1.427 - 1.411 = 0.016$ V. Simply adding 50 mV to the edge input would be wrong.

### Step 5 — Small-signal parameters

**$M_1$ in triode.** Differentiate $I_{D1} = \beta_1[(V_{GS1} - V_{TH})V_{DS1} - \frac12V_{DS1}^2]$:

$$
\begin{aligned}
g_{m1} &= \frac{\partial I_{D1}}{\partial V_{GS1}} = \beta_1V_{DS1} = (13.4\ \mathrm{mA/V^2})(0.677\ \mathrm{V}) = 9.08\ \mathrm{mS},\\
g_{ds1} &= \frac{\partial I_{D1}}{\partial V_{DS1}} = \beta_1(V_{GS1} - V_{TH} - V_{DS1}) = (13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.67\ \mathrm{mS}.
\end{aligned}
$$

So in triode $M_1$ has a finite channel resistance $r_{ds1} = 1/g_{ds1} = 1/(0.67\ \mathrm{mS}) = 1.49\ \mathrm{k}\Omega$, even though $\lambda = 0$. (At the edge of triode $g_{ds1}$ was zero.)

**$M_2$ in saturation:**

$$g_{m2} = \beta_2(V_{GS2} - V_{TH}) = (2.68\ \mathrm{mA/V^2})(2.3 - 0.677)\ \mathrm{V} = (2.68\ \mathrm{mA/V^2})(1.623\ \mathrm{V}) = 4.35\ \mathrm{mS}.$$

### Step 6 — Small-signal model and gain

The model has a single node, $out$; $V_{DD}$ is an AC ground.

- **$M_1$:** a current source $g_{m1}v_{in}$ from $out$ to ground, in parallel with the channel resistance $r_{ds1}$ from $out$ to ground.
- **$M_2$:** gate and drain at AC ground, source at $out$, so $v_{gs2} = -v_{out}$. It supplies a current $g_{m2}v_{gs2} = -g_{m2}v_{out}$ into $out$ (equivalent to a resistance $1/g_{m2}$ to ground).

<!-- diagram: diagram-01.cir -->

**KCL at $out$**: current supplied by $M_2$ = current through $M_1$'s source + current through $r_{ds1}$:

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in} + g_{ds1}v_{out}\\
-(g_{m2} + g_{ds1})\,v_{out} &= g_{m1}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2} + g_{ds1}} .
\end{aligned}
$$

**Numbers:**

$$A_v = -\frac{9.08\ \mathrm{mS}}{4.35\ \mathrm{mS} + 0.67\ \mathrm{mS}} = -\frac{9.08}{5.02} = -1.81 .$$

**Comparison with the edge of triode** (where $A_v = -\sqrt5 = -2.24$, with $g_{m1} = 9.52$ mS and $g_{m2} = 4.26$ mS):

- $g_{m1}$ has dropped to 9.08 mS, because in triode it is proportional to $V_{DS1}$, which fell. At the same time $g_{m2}$ rose slightly to 4.35 mS because $V_{out}$ fell. These changes alone give $-9.08/4.35 = -2.09$.
- The channel conductance $g_{ds1} = 0.67$ mS now loads the output in parallel with $1/g_{m2}$, which brings the gain down to $-1.81$.

Only 50 mV into triode, the gain has already dropped by about 19 %. This is why amplifying transistors are kept out of the triode region.

### Result

$$V_{in} \approx 1.427\ \mathrm{V} \qquad (V_{out} \approx 0.677\ \mathrm{V},\ I_D \approx 3.53\ \mathrm{mA}),$$

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{ds1}} = -\frac{9.08\ \mathrm{mS}}{4.35\ \mathrm{mS} + 0.67\ \mathrm{mS}} \approx -1.81 ,$$

with $g_{m1} = \beta_1V_{DS1}$ and $g_{ds1} = \beta_1(V_{GS1} - V_{TH} - V_{DS1})$ for $M_1$ in triode.

**Common mistake.** Keeping the saturation gain $-\sqrt5 = -2.24$, or using the triode $g_{m1}$ but forgetting $g_{ds1}$ (which gives $-2.09$). In triode the channel acts as a resistor of $1/[\beta_1(V_{ov1} - V_{DS1})] = 1.49\ \mathrm{k}\Omega$ that appears in parallel with the load, even with $\lambda = 0$.

**Common mistake.** Adding 50 mV to the edge input ($1.411 + 0.05 = 1.461$ V). The condition concerns $V_{in} - V_{out}$, and $V_{out}$ moves opposite to $V_{in}$ with a gain of about 2, so the input only needs to rise by about 17 mV.

**Common mistake.** Assuming $M_2$ also enters the triode region. A diode-connected transistor has $V_{DS} = V_{GS}$ and is always saturated while it conducts.
