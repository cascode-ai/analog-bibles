# Detailed solution - R387

**Approach.** Without feedback, the input resistance of the common-gate device $M_1$ is $1/g_{m1}$. The capacitive divider $C_1$/$C_2$ returns half of the output voltage to the gate of $M_2$, whose drain current then also flows out of the input node; this negative feedback lowers the input resistance by the factor $1 + g_{m2}R_D/2$. We derive $R_{in}$ with a test source, express both transconductances through the common bias current (the two devices are in series), and solve $R_{in} = 50\ \Omega$ for the current.

### Step 1 — The circuit and the bias current

Reading the figure:

- $M_1$: gate at the fixed bias $V_b$, source = input node ($V_{in}$), drain = $V_{out}$, load $R_D = 2\ \mathrm{k}\Omega$ to $V_{DD}$. It is a common-gate (CG) stage.
- $M_2$: drain at the input node, source grounded, gate at node P.
- $C_1$ from $V_{out}$ to P and $C_2$ from P to ground form a capacitive divider; the dc bias of P is set by a network not shown.

$M_1$ and $M_2$ are **in series**: the only dc path for $M_2$'s drain current is through $M_1$ and $R_D$. So both carry the same bias current, $I_{D1} = I_{D2} = I$. That is the single unknown.

### Step 2 — Small-signal model for the input resistance

Apply a test voltage $V_x$ at the input node and find the current $I_x$ it supplies; $R_{in} = V_x/I_x$.

**Model in words.** Nodes: in, out and P.

- $M_1$: gate at AC ground, so $v_{gs1} = -V_x$. It carries $g_{m1}v_{gs1} = -g_{m1}V_x$ from drain (out) to source (in), i.e. a current $g_{m1}V_x$ from the input node up to the output node.
- $R_D$ from out to AC ground. No $r_O$ (channel-length modulation neglected), no body effect.
- $C_1$ from out to P, $C_2$ from P to ground.
- $M_2$: a controlled current $g_{m2}V_P$ from the input node (its drain) to ground.

Here $g_{m1}$ and $g_{m2}$ are the transconductances.

<!-- diagram: diagram-01.cir -->

**Output voltage.** The current $g_{m1}V_x$ that $M_1$ carries into the output node flows through $R_D$ (at low frequencies the current into the capacitive divider is negligible):

$$V_{out} = g_{m1}R_D\,V_x .$$

**Feedback voltage.** The gate of $M_2$ draws no current, so P is set by the capacitive divider:

$$V_P = \frac{C_1}{C_1 + C_2}V_{out} = \frac12V_{out} = \frac{g_{m1}R_D}{2}V_x \qquad (C_1 = C_2).$$

**KCL at the input node.** The test current leaves through $M_1$ (upward) and through $M_2$ (to ground):

$$
\begin{aligned}
I_x &= g_{m1}V_x + g_{m2}V_P\\
&= g_{m1}V_x + g_{m2}\frac{g_{m1}R_D}{2}V_x\\
&= g_{m1}V_x\left(1 + \frac{g_{m2}R_D}{2}\right).
\end{aligned}
$$

**Input resistance:**

$$R_{in} = \frac{V_x}{I_x} = \frac{1}{g_{m1}}\cdot\frac{1}{1 + g_{m2}R_D\dfrac{C_1}{C_1 + C_2}} = \frac{1}{g_{m1}\left(1 + g_{m2}R_D/2\right)}.$$

**Intuition.** If the input rises, the CG output rises, P rises, and $M_2$ draws more current from the input node. The input therefore looks "softer" than $1/g_{m1}$: the shunt feedback at the input divides the resistance by $1 + (\text{loop gain})$, with loop gain $g_{m2}R_D/2$.

### Step 3 — Transconductances in terms of the bias current

From the square law, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$, with $(W/L)_1 = 50/0.5 = 100$ and $(W/L)_2 = 100/0.5 = 200$:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,(134\times10^{-6})(100)\,I} = \sqrt{0.0268\,I} = 0.1637\sqrt{I},\\
g_{m2} &= \sqrt{2\,(134\times10^{-6})(200)\,I} = \sqrt{0.0536\,I} = 0.2315\sqrt{I},
\end{aligned}
$$

with $I$ in amperes and $g_m$ in siemens.

### Step 4 — Solving $R_{in} = 50\ \Omega$

The condition is $g_{m1}(1 + g_{m2}R_D/2) = 1/(50\ \Omega) = 0.02$ S, with $R_D/2 = 1\ \mathrm{k}\Omega$. Let $x = \sqrt{I}$:

$$
\begin{aligned}
0.1637\,x\,(1 + 0.2315\,x\times1000) &= 0.02\\
0.1637\,x\,(1 + 231.5\,x) &= 0.02\\
37.90\,x^2 + 0.1637\,x - 0.02 &= 0 .
\end{aligned}
$$

This is a quadratic in $x$; take the positive root:

$$
\begin{aligned}
x &= \frac{-0.1637 + \sqrt{0.1637^2 + 4(37.90)(0.02)}}{2(37.90)} = \frac{-0.1637 + \sqrt{0.0268 + 3.032}}{75.80}\\
&= \frac{-0.1637 + 1.749}{75.80} = \frac{1.585}{75.80} = 0.02091\ \sqrt{\mathrm{A}}.
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

Overdrives ($V_{ov} = 2I/g_m$): $V_{ov1} = 0.874\ \mathrm{mA}/3.42\ \mathrm{mS} = 0.26$ V and $V_{ov2} = 0.874\ \mathrm{mA}/4.84\ \mathrm{mS} = 0.18$ V, reasonable strong-inversion values. The dc drop across $R_D$ is $I R_D = 0.87$ V.

For comparison, without feedback ($R_{in} = 1/g_{m1} = 50\ \Omega$) we would need $g_{m1} = 20$ mS, i.e. $I = (0.02)^2/0.0268 \approx 15$ mA: the feedback saves a factor of about 34 in current.

### Result

$$R_{in} = \frac{1}{g_{m1}\left(1 + g_{m2}R_D\,\dfrac{C_1}{C_1 + C_2}\right)} = \frac{1}{g_{m1}(1 + g_{m2}\cdot1\ \mathrm{k}\Omega)} = 50\ \Omega \;\Rightarrow\; I_{D1} = I_{D2} \approx 0.44\ \mathrm{mA}\ (0.437\ \mathrm{mA}),$$

with $g_{m1} \approx 3.42$ mS, $g_{m2} \approx 4.84$ mS and a loop gain $g_{m2}R_D/2 \approx 4.84$.

**Common mistake.** Ignoring the feedback and setting $1/g_{m1} = 50\ \Omega$, which gives about 15 mA. $M_2$'s current, controlled by the fed-back output voltage, is drawn from the input node and lowers $R_{in}$ by $1 + g_{m2}R_D/2$.

**Common mistake.** Dropping the divider factor $C_1/(C_1 + C_2) = 1/2$, i.e. using $1 + g_{m2}R_D$. That gives about 0.23 mA. Only half of $V_{out}$ reaches the gate of $M_2$.

**Common mistake.** Assigning different bias currents to $M_1$ and $M_2$, or claiming the feedback raises $R_{in}$. The devices are in series, so they share one current; and because $M_2$'s extra current flows *out of* the input node when the input rises, the feedback lowers the input resistance.
