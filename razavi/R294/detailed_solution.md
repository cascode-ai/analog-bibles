# Detailed solution - R294

**Approach.** $M_1$ and $M_2$ form a CMOS inverter from the tied gates (node A) to the tied drains (node D). Apply a test source at the input; the test current passes through $C_1$ and $C_2$ and is absorbed at D by the two transistors and their output resistances. KCL at D gives $V_A/I_x$, to which the impedance of $C_1$ is added.

### Step 1 — Small-signal model of the inverter

Ground and $V_{DD}$ are both ac grounds, so both sources are at ac ground and each transistor has $v_{gs} = V_A$. $M_1$ is a current $g_{m1}V_A$ from D to ground in parallel with $r_{O1}$; $M_2$ is a current $g_{m2}V_A$ from D to ac ground in parallel with $r_{O2}$. The two currents add (a rising $V_A$ makes $M_1$ sink more and $M_2$ source less), so the inverter's transconductance and output resistance are

$$G_m = g_{m1} + g_{m2}, \qquad R = r_{O1}\parallel r_{O2} = \frac{r_{O1}r_{O2}}{r_{O1} + r_{O2}},$$

and its low-frequency gain is $V_D/V_A = -G_mR = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})$.

<!-- diagram: diagram-01.cir -->

Apply a test voltage $V_x$ at the input, drawing $I_x$.

### Step 2 — KCL at the gate (A) and the drain (D)

The gates draw no current, so the current through $C_1$ also flows through $C_2$:

$$I_x = (V_A - V_D)\,C_2s \quad\Longrightarrow\quad V_D = V_A - \frac{I_x}{C_2s}. \qquad (1)$$

At D, $I_x$ arrives through $C_2$ and leaves through the two controlled sources and $R$:

$$I_x = (g_{m1} + g_{m2})V_A + \frac{V_D}{R} = G_mV_A + \frac{V_D}{R}. \qquad (2)$$

### Step 3 — Solve for the impedance at node A

Substitute (1) into (2):

$$I_x = G_mV_A + \frac{1}{R}\left(V_A - \frac{I_x}{C_2s}\right).$$

Collect the $I_x$ and $V_A$ terms:

$$
\begin{aligned}
I_x + \frac{I_x}{RC_2s} &= V_A\left(G_m + \frac{1}{R}\right)\\
I_x\,\frac{RC_2s + 1}{RC_2s} &= V_A\,\frac{G_mR + 1}{R},
\end{aligned}
$$

$$
\begin{aligned}
\frac{V_A}{I_x} &= \frac{RC_2s + 1}{RC_2s}\cdot\frac{R}{1 + G_mR}\\
&= \frac{1 + RC_2s}{C_2s\,(1 + G_mR)}.
\end{aligned}
$$

### Step 4 — Add $C_1$

$C_1$ is in series with this impedance ($V_x = I_x/(C_1s) + V_A$):

$$Z_{in} = \frac{V_x}{I_x} = \frac{1}{C_1s} + \frac{1 + RC_2s}{C_2s\,(1 + G_mR)}.$$

Splitting the second fraction,

$$\frac{1 + RC_2s}{C_2s\,(1 + G_mR)} = \frac{1}{(1 + G_mR)\,C_2s} + \frac{R}{1 + G_mR},$$

so

$$Z_{in} = \frac{1}{C_1s} + \frac{1}{\left[1 + (g_{m1} + g_{m2})R\right]C_2s} + \frac{R}{1 + (g_{m1} + g_{m2})R}, \qquad R = r_{O1}\parallel r_{O2}.$$

### Step 5 — Interpretation

$Z_{in}$ is three elements in series:

1. **$C_1$ itself.**
2. **A Miller-multiplied $C_2$:** $C_{M} = \left[1 + (g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})\right]C_2$, since $C_2$ bridges an inverting amplifier of gain $-G_mR$.
3. **A resistance** $R_{eq} = \dfrac{R}{1 + G_mR}\approx 1/(g_{m1} + g_{m2})$, since the inverter's intrinsic gain $G_mR\gg1$.

A simple Miller argument, using only the low-frequency gain, misses the resistive term. It appears because at high frequency $C_2$ shorts A to D, and the "diode-connected" inverter presents $\dfrac{1}{G_m}\parallel R = \dfrac{R}{1 + G_mR}$.

**Limiting cases.**

- $s\to0$: the $C_2$ term dominates; node A looks like the large capacitance $(1 + G_mR)C_2$.
- $s\to\infty$: node A looks like $R/(1 + G_mR)\approx 1/(g_{m1} + g_{m2})$.
- If $M_2$ were an ideal current source ($g_{m2} = 0$, $r_{O2}\to\infty$) and $\lambda = 0$ ($r_{O1}\to\infty$), then $R\to\infty$ and $V_A/I_x \to RC_2s/(C_2s\,g_{m1}R) = 1/g_{m1}$, the result for an ideal current-source load.

### Result

$$Z_{in} = \frac{1}{C_1s} + \frac{1 + RC_2s}{C_2s\,\left[1 + (g_{m1} + g_{m2})R\right]}, \qquad R = r_{O1}\parallel r_{O2},$$

equivalently

$$Z_{in} = \frac{1}{C_1s} + \frac{1}{\left[1 + (g_{m1} + g_{m2})R\right]C_2s} + \frac{R}{1 + (g_{m1} + g_{m2})R}.$$

The input is $C_1$ in series with the Miller capacitance $\left[1 + (g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})\right]C_2$ and with a resistance $(r_{O1}\parallel r_{O2})/\left[1 + (g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})\right]\approx 1/(g_{m1} + g_{m2})$.

**Common mistake.** Treating $M_2$ as a plain current source and keeping only $g_{m1}$. $M_2$'s gate is tied to A, not to a fixed bias, so it is the second half of a CMOS inverter and its transconductance adds: $g_{m1} + g_{m2}$.

**Common mistake.** Reading $M_2$ as diode-connected. Its gate goes to A, not to its drain D; the drain couples back to the gate only through $C_2$.

**Common mistake.** Stopping at the Miller capacitance $(1 + G_mR)C_2$ and calling it exact. With finite $r_O$ the impedance also contains the series resistance $R/(1 + G_mR)$, which takes over at high frequency; dropping it is only a low-frequency approximation.
