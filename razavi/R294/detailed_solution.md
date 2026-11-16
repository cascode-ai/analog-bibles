# Detailed solution - R294

**Approach.** The two transistors form a CMOS inverter whose input is node A (the tied gates) and whose output is node D (the tied drains). Replace each transistor by its small-signal model, apply a test source at the input, and write KCL at the drain node. The test current must pass through $C_1$ and $C_2$ and is then absorbed by the two transistors and their output resistances. Solve for $V_A/I_x$ and add the impedance of $C_1$.

### Step 1 — Reading the circuit

From the figure:

- The input terminal connects through $C_1$ to node **A**, which is the common gate of $M_1$ (NMOS, source grounded) and $M_2$ (PMOS, source at $V_{DD}$).
- The drains of $M_1$ and $M_2$ are tied together at node **D**.
- $C_2$ connects A to D.

Both devices are in saturation with finite output resistances $r_{O1}$, $r_{O2}$. All other capacitances are neglected.

### Step 2 — Small-signal model of the inverter

For small signals, ground and $V_{DD}$ are both ac grounds, so both sources are at ac ground and each transistor has $v_{gs} = V_A$.

- **$M_1$ (NMOS):** a current $g_{m1}V_A$ flowing from D to ground, in parallel with $r_{O1}$.
- **$M_2$ (PMOS):** the small-signal model of a PMOS has the same form, a current $g_{m2}v_{gs2}$ from drain to source. With its source at ac ground, that is a current $g_{m2}V_A$ flowing **from D to ac ground**, in parallel with $r_{O2}$.

*Why the two currents add.* If $V_A$ rises, $M_1$ conducts more and pulls D down. $M_2$'s source–gate voltage $V_{DD} - V_A$ shrinks, so it pushes *less* current into D, which also pulls D down. Both effects act in the same direction, so the inverter's total transconductance is

$$G_m = g_{m1} + g_{m2}.$$

The two output resistances are both connected from D to ac ground, so they appear in parallel:

$$R = r_{O1}\parallel r_{O2} = \frac{r_{O1}r_{O2}}{r_{O1} + r_{O2}}.$$

The whole inverter, seen from D, is therefore a current $G_mV_A$ leaving D in parallel with $R$ to ground. Its low-frequency voltage gain is $V_D/V_A = -G_mR = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})$.

<!-- diagram: diagram-01.cir -->

Apply a test voltage $V_x$ at the input; $I_x$ is the current flowing into the input terminal.

### Step 3 — Where the test current goes

**KCL at node A.** The gates draw no current and only $C_1$ and $C_2$ touch node A. So the current through $C_1$ equals the current through $C_2$, and both equal $I_x$:

$$I_x = (V_A - V_D)\,C_2s .$$

Solve for the drain voltage:

$$V_D = V_A - \frac{I_x}{C_2s}. \qquad (1)$$

**KCL at node D.** $I_x$ arrives through $C_2$ and leaves through the two controlled sources and through $R$:

$$I_x = (g_{m1} + g_{m2})V_A + \frac{V_D}{R} = G_mV_A + \frac{V_D}{R}. \qquad (2)$$

### Step 4 — Solve for the impedance at node A

Substitute (1) into (2):

$$I_x = G_mV_A + \frac{1}{R}\left(V_A - \frac{I_x}{C_2s}\right).$$

Move all $I_x$ terms to the left and all $V_A$ terms to the right:

$$
\begin{aligned}
I_x + \frac{I_x}{RC_2s} &= V_A\left(G_m + \frac{1}{R}\right)\\
I_x\,\frac{RC_2s + 1}{RC_2s} &= V_A\,\frac{G_mR + 1}{R}.
\end{aligned}
$$

Divide to get the ratio:

$$
\begin{aligned}
\frac{V_A}{I_x} &= \frac{RC_2s + 1}{RC_2s}\cdot\frac{R}{1 + G_mR}\\
&= \frac{1 + RC_2s}{C_2s\,(1 + G_mR)}.
\end{aligned}
$$

### Step 5 — Add $C_1$

From the input terminal to ground, $C_1$ is in series with the impedance just found (KVL: $V_x = I_x/(C_1s) + V_A$):

$$Z_{in} = \frac{V_x}{I_x} = \frac{1}{C_1s} + \frac{1 + RC_2s}{C_2s\,(1 + G_mR)}.$$

**Splitting into elements.** Separate the second fraction into two terms:

$$\frac{1 + RC_2s}{C_2s\,(1 + G_mR)} = \frac{1}{(1 + G_mR)\,C_2s} + \frac{R}{1 + G_mR}.$$

So

$$Z_{in} = \frac{1}{C_1s} + \frac{1}{\left[1 + (g_{m1} + g_{m2})R\right]C_2s} + \frac{R}{1 + (g_{m1} + g_{m2})R}, \qquad R = r_{O1}\parallel r_{O2}.$$

### Step 6 — Interpretation

$Z_{in}$ is three elements in series:

1. **$C_1$ itself.**
2. **A Miller-multiplied $C_2$:** $C_{M} = \left[1 + (g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})\right]C_2$. This is exactly the Miller effect: $C_2$ bridges an inverting amplifier of gain $-G_mR$, so seen from its input it is multiplied by $1 + G_mR$.
3. **A resistance** $R_{eq} = \dfrac{R}{1 + G_mR}$. Since the intrinsic gain of the inverter is large, $G_mR\gg1$, this is approximately $1/(g_{m1} + g_{m2})$.

The resistive term is missed by a simple Miller argument, which uses only the low-frequency gain. It appears because at high frequencies $C_2$ shorts A to D and the inverter becomes "diode-connected"; the impedance of a diode-connected inverter is $\dfrac{1}{G_m}\parallel R = \dfrac{R}{1 + G_mR}$.

**Limiting cases.**

- $s\to0$: the $C_2$ term dominates; node A looks like the large capacitance $(1 + G_mR)C_2$.
- $s\to\infty$: node A looks like $R/(1 + G_mR)\approx 1/(g_{m1} + g_{m2})$.
- If $M_2$ were an ideal current source ($g_{m2} = 0$, $r_{O2}\to\infty$) and $\lambda = 0$ ($r_{O1}\to\infty$), then $R\to\infty$ and $V_A/I_x \to RC_2s/(C_2s\,g_{m1}R) = 1/g_{m1}$: the result of the same circuit with an ideal current-source load.

### Result

$$Z_{in} = \frac{1}{C_1s} + \frac{1 + RC_2s}{C_2s\,\left[1 + (g_{m1} + g_{m2})R\right]}, \qquad R = r_{O1}\parallel r_{O2},$$

equivalently

$$Z_{in} = \frac{1}{C_1s} + \frac{1}{\left[1 + (g_{m1} + g_{m2})R\right]C_2s} + \frac{R}{1 + (g_{m1} + g_{m2})R}.$$

The input is $C_1$ in series with the Miller capacitance $\left[1 + (g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})\right]C_2$ and with a resistance $(r_{O1}\parallel r_{O2})/\left[1 + (g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})\right]\approx 1/(g_{m1} + g_{m2})$.

**Common mistake.** Treating $M_2$ as a plain current source and keeping only $g_{m1}$. $M_2$'s gate is not at a fixed bias; it is tied to node A. It is the second half of a CMOS inverter, and its transconductance adds to that of $M_1$, so the effective transconductance is $g_{m1} + g_{m2}$.

**Common mistake.** Reading $M_2$ as diode-connected. Its gate goes to A, not to its own drain D; only through $C_2$ (at high frequency) does the drain couple back to the gate.

**Common mistake.** Stopping at a Miller capacitance $(1 + G_mR)C_2$ and claiming the result is exact. With finite $r_O$ the exact impedance also contains the series resistance $R/(1 + G_mR)$, which takes over at high frequency. Dropping it is only justified as an explicit low-frequency approximation.
