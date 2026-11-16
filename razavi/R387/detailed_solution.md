# Detailed solution - R387

**Approach.** Without feedback, the input resistance of the common-gate device $M_1$ is $1/g_{m1}$. The divider $C_1$/$C_2$ returns half of the output voltage to the gate of $M_2$, whose drain current also flows out of the input node, lowering the input resistance by $1 + g_{m2}R_D/2$. Derive $R_{in}$ with a test source, express both transconductances through the common bias current, and solve $R_{in} = 50\ \Omega$.

### Step 1 — The bias current

Call the gate of $M_2$ node P. $M_2$'s drain current has no dc path other than through $M_1$ and $R_D$, so the two devices are **in series** and share one bias current, $I_{D1} = I_{D2} = I$, the single unknown.

### Step 2 — Input resistance with feedback

Apply a test voltage $V_x$ at the input. $M_1$'s gate is at ac ground, so $v_{gs1} = -V_x$ and $M_1$ carries $g_{m1}V_x$ from the input up to the output; $R_D$ goes from out to ac ground (no $r_O$, no body effect); $C_1$ runs from out to P and $C_2$ from P to ground; $M_2$ draws $g_{m2}V_P$ from the input to ground.

<!-- diagram: diagram-01.cir -->

At low frequencies the divider draws negligible current, so $g_{m1}V_x$ flows through $R_D$, and P (no gate current) is set by the divider:

$$V_{out} = g_{m1}R_D\,V_x, \qquad V_P = \frac{C_1}{C_1 + C_2}V_{out} = \frac12V_{out} = \frac{g_{m1}R_D}{2}V_x \qquad (C_1 = C_2).$$

KCL at the input node (the test current leaves through $M_1$ and $M_2$):

$$
\begin{aligned}
I_x &= g_{m1}V_x + g_{m2}V_P\\
&= g_{m1}V_x + g_{m2}\frac{g_{m1}R_D}{2}V_x\\
&= g_{m1}V_x\left(1 + \frac{g_{m2}R_D}{2}\right),
\end{aligned}
$$

$$R_{in} = \frac{V_x}{I_x} = \frac{1}{g_{m1}}\cdot\frac{1}{1 + g_{m2}R_D\dfrac{C_1}{C_1 + C_2}} = \frac{1}{g_{m1}\left(1 + g_{m2}R_D/2\right)}.$$

A rising input raises the output and P, so $M_2$ draws more current from the input: the shunt feedback divides $1/g_{m1}$ by $1 + g_{m2}R_D/2$.

### Step 3 — Transconductances in terms of the bias current

With $(W/L)_1 = 50/0.5 = 100$ and $(W/L)_2 = 100/0.5 = 200$, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$ gives ($I$ in A, $g_m$ in S)

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,(134\times10^{-6})(100)\,I} = \sqrt{0.0268\,I} = 0.1637\sqrt{I},\\
g_{m2} &= \sqrt{2\,(134\times10^{-6})(200)\,I} = \sqrt{0.0536\,I} = 0.2315\sqrt{I}.
\end{aligned}
$$

### Step 4 — Solving $R_{in} = 50\ \Omega$

The condition is $g_{m1}(1 + g_{m2}R_D/2) = 1/(50\ \Omega) = 0.02$ S, with $R_D/2 = 1\ \mathrm{k}\Omega$. With $x = \sqrt{I}$:

$$
\begin{aligned}
0.1637\,x\,(1 + 0.2315\,x\times1000) &= 0.02\\
0.1637\,x\,(1 + 231.5\,x) &= 0.02\\
37.90\,x^2 + 0.1637\,x - 0.02 &= 0 .
\end{aligned}
$$

Taking the positive root:

$$
\begin{aligned}
x &= \frac{-0.1637 + \sqrt{0.1637^2 + 4(37.90)(0.02)}}{2(37.90)} = \frac{-0.1637 + \sqrt{0.0268 + 3.032}}{75.80}\\
&= \frac{-0.1637 + 1.749}{75.80} = \frac{1.585}{75.80} = 0.02091\ \sqrt{\mathrm{A}},
\end{aligned}
$$

$$I = x^2 = (0.02091)^2 = 4.37\times10^{-4}\ \mathrm{A} = 0.437\ \mathrm{mA}.$$

### Step 5 — Check

$$
\begin{aligned}
g_{m1} &= 0.1637\times0.02091 = 3.42\ \mathrm{mS}, \qquad \frac{1}{g_{m1}} = 292\ \Omega,\\
g_{m2} &= 0.2315\times0.02091 = 4.84\ \mathrm{mS}, \qquad \frac{g_{m2}R_D}{2} = 4.84\times10^{-3}\times1000 = 4.84,\\
R_{in} &= \frac{292\ \Omega}{1 + 4.84} = \frac{292}{5.84}\ \Omega = 50.0\ \Omega\ \checkmark
\end{aligned}
$$

Overdrives ($V_{ov} = 2I/g_m$): $V_{ov1} = 0.874\ \mathrm{mA}/3.42\ \mathrm{mS} = 0.26$ V and $V_{ov2} = 0.874\ \mathrm{mA}/4.84\ \mathrm{mS} = 0.18$ V, reasonable values; the dc drop across $R_D$ is $IR_D = 0.87$ V.

Without feedback, $1/g_{m1} = 50\ \Omega$ would need $g_{m1} = 20$ mS, i.e. $I = (0.02)^2/0.0268 \approx 15$ mA: the feedback saves a factor of about 34 in current.

### Result

$$R_{in} = \frac{1}{g_{m1}\left(1 + g_{m2}R_D\,\dfrac{C_1}{C_1 + C_2}\right)} = \frac{1}{g_{m1}(1 + g_{m2}\cdot1\ \mathrm{k}\Omega)} = 50\ \Omega \;\Rightarrow\; I_{D1} = I_{D2} \approx 0.44\ \mathrm{mA}\ (0.437\ \mathrm{mA}),$$

with $g_{m1} \approx 3.42$ mS, $g_{m2} \approx 4.84$ mS and a loop gain $g_{m2}R_D/2 \approx 4.84$.

**Common mistake.** Ignoring the feedback and setting $1/g_{m1} = 50\ \Omega$, which gives about 15 mA.

**Common mistake.** Dropping the divider factor $C_1/(C_1 + C_2) = 1/2$, i.e. using $1 + g_{m2}R_D$, which gives about 0.23 mA. Only half of $V_{out}$ reaches the gate of $M_2$.

**Common mistake.** Assigning different bias currents to $M_1$ and $M_2$, or claiming the feedback raises $R_{in}$. The devices are in series, and $M_2$'s extra current flows *out of* the input node when the input rises.
