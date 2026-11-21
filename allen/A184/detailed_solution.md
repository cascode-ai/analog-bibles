# Detailed solution - A184

With $v_{IN}=V_{DD}$ the n-channel devices are driven hard into nonsaturation, while each load, with a fixed gate voltage, stays saturated and fixes the current. Find the load current of each amplifier, then the small drain–source voltages that the nonsaturated devices need to carry it; $v_{OUT}(\min)$ is $V_{SS}$ plus their sum. All voltages are referred to ground, with $V_{SS}=-5$ V.

### Step 1 — Inverter: load current

M2 is saturated with $V_{SG2}=V_{DD}-V_{GG2}=5$ V and $\beta_2=K'_P(W/L)_2=50\ \mu\mathrm{A/V^2}$:

$$
I=\frac{\beta_2}2(V_{SG2}-|V_{TP}|)^2=\frac{50\ \mu\mathrm{A/V^2}}2(5-0.7)^2=462\ \mu\mathrm A .
$$

### Step 2 — Inverter: $v_{OUT}(\min)$

M1 has $V_{GS1}=V_{DD}-V_{SS}=10$ V and $\beta_1=K'_N(W/L)_1=330\ \mu\mathrm{A/V^2}$. In nonsaturation

$$
I=\beta_1\left[(V_{GS1}-V_{TN})v_{DS1}-\frac{v_{DS1}^2}2\right]
\quad\Rightarrow\quad
462\ \mu\mathrm A=(330\ \mu\mathrm{A/V^2})\left[(9.3\ \mathrm V)v_{DS1}-\frac{v_{DS1}^2}2\right].
$$

The smaller root is $v_{DS1}=0.152$ V (in closed form, $v_{DS1}=(V_{DD}-V_{SS}-V_{TN})\{1-\sqrt{1-(\beta_2/\beta_1)[(V_{DD}-V_{GG2}-|V_{TP}|)/(V_{DD}-V_{SS}-V_{TN})]^2}\}$), so

$$
v_{OUT}(\min)=V_{SS}+v_{DS1}=-5+0.152=-4.85\ \mathrm V .
$$

### Step 3 — Cascode: load current

The cascode load M3 has $V_{SG3}=V_{DD}-V_{GG3}=2.5$ V and the same size as M2:

$$
I=\frac{50\ \mu\mathrm{A/V^2}}2(2.5-0.7)^2=81\ \mu\mathrm A ,
$$

much less than the inverter's 462 µA.

### Step 4 — Cascode: $v_{OUT}(\min)$

M1 ($V_{GS1}=10$ V) and M2 ($V_{GS2}=V_{GG2}-V_{SS}-v_{DS1}\approx5$ V) are both in deep nonsaturation, so each acts as a channel resistance $1/[\beta(V_{GS}-V_T)]$ (the series-resistance result for this circuit, with voltages now measured from $V_{SS}$):

$$
\begin{aligned}
v_{DS1}&\approx\frac{I}{\beta_1(V_{DD}-V_{SS}-V_{TN})}=\frac{81\ \mu\mathrm A}{(330\ \mu\mathrm{A/V^2})(9.3\ \mathrm V)}=0.026\ \mathrm V,\\
v_{DS2}&\approx\frac{I}{\beta_2(V_{GG2}-V_{SS}-V_{TN})}=\frac{81\ \mu\mathrm A}{(330\ \mu\mathrm{A/V^2})(4.3\ \mathrm V)}=0.057\ \mathrm V,
\end{aligned}
$$

$$
v_{OUT}(\min)=V_{SS}+v_{DS1}+v_{DS2}=-5+0.083=-4.92\ \mathrm V .
$$

Solving the full nonsaturation equations without the linearization gives the same value to within 1 mV.

### Step 5 — Comparison

Both amplifiers pull the output to within about 0.1–0.15 V of $V_{SS}$: −4.85 V for the inverter and −4.92 V for the cascode. The cascode is even slightly lower, because its load current (81 µA) is much smaller than the inverter's (462 µA), and with $v_{IN}=V_{DD}$ the extra series device M2 is a small triode resistance that costs only 57 mV. For comparison, the lowest output with all transistors still saturated would be $V_{SS}+V_{DS1}(\mathrm{sat})=-3.33$ V for the inverter and $V_{SS}+V_{DS1}(\mathrm{sat})+V_{DS2}(\mathrm{sat})=-3.60$ V for the cascode, but $v_{OUT}(\min)$ as defined here is the triode-region limit.
