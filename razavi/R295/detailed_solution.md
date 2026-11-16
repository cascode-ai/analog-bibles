# Detailed solution - R295

**Approach.** The input is the source of $M_1$, a common-gate device whose gate sits on the capacitive string $C_1$–$C_2$ instead of at ground. Follow the test current: it crosses the channel, and at the drain its only way out is through $C_1$ and then $C_2$, which fixes the gate voltage. The transistor equation, with the body effect (the bulk is grounded while the source moves), then gives the source voltage and $Z_{in}$.

### Step 1 — Small-signal model

Call the drain, gate and source of $M_1$ D, G and S. For small signals the ideal $I_1$ is an open circuit and $\lambda = 0$ removes $r_O$, so nothing connects D to ac ground except $C_1$ (through G and $C_2$). With the bulk grounded, $v_{bs} = -V_S$, and the drain-to-source current is

$$i_d = g_mv_{gs} + g_{mb}v_{bs} = g_m(V_G - V_S) - g_{mb}V_S .$$

Apply a test voltage $V_x = V_S$ at the source, with $I_x$ flowing from the test source into S.

<!-- diagram: diagram-01.cir -->

### Step 2 — Follow the test current

Only the test source and the transistor touch S, so $I_x$ flows through the channel from S to D:

$$i_d = -I_x . \qquad (1)$$

At D the only exit is $C_1$ ($I_1$ is open, no $r_O$), and the gate draws no current, so $I_x$ continues through $C_2$ to ground:

$$V_G = \frac{I_x}{C_2s}. \qquad (2)$$

The drain voltage, $V_D = V_G + I_x/(C_1s)$, just adjusts to push $I_x$ through $C_1$ and does not enter the transistor equation (no $r_O$), so **$C_1$ will not appear** in $Z_{in}$.

### Step 3 — Solve for the source voltage

Combine the transistor equation with (1) and collect the $V_S$ terms:

$$
\begin{aligned}
g_m(V_G - V_S) - g_{mb}V_S &= -I_x\\
g_mV_G + I_x &= (g_m + g_{mb})V_S\\
V_S &= \frac{I_x + g_mV_G}{g_m + g_{mb}}.
\end{aligned}
$$

Substitute $V_G$ from (2):

$$V_S = \frac{I_x + g_m\dfrac{I_x}{C_2s}}{g_m + g_{mb}} = \frac{I_x}{g_m + g_{mb}}\left(1 + \frac{g_m}{C_2s}\right).$$

### Step 4 — The input impedance

$$Z_{in} = \frac{V_S}{I_x} = \frac{1}{g_m + g_{mb}}\left(1 + \frac{g_m}{C_2s}\right) = \frac{1}{g_m + g_{mb}} + \frac{g_m}{g_m + g_{mb}}\cdot\frac{1}{C_2s}.$$

This is a resistance $1/(g_m + g_{mb})$ in series with a capacitance

$$C_{eq} = \frac{g_m + g_{mb}}{g_m}\,C_2 = (1 + \eta)\,C_2, \qquad \eta = \frac{g_{mb}}{g_m}.$$

**Without the body effect** ($g_{mb} = 0$):

$$Z_{in} = \frac{1}{g_m} + \frac{1}{C_2s}.$$

### Step 5 — Physical picture and checks

- **The resistive part** $1/(g_m + g_{mb})$ is the usual impedance looking into the source with the gate held still.
- **The capacitive part** arises because the gate is not held still: the channel current charges $C_2$ and raises $V_G$ by $I_x/(C_2s)$, and the source follows by the fraction $g_m/(g_m + g_{mb})$.
- **At dc** ($s\to0$), $Z_{in}\to\infty$: there is no dc path from S to ground for a signal current, since the drain sees an ideal current source and the gate path is capacitive.
- **At high frequency**, $C_2$ shorts the gate to ground and the circuit becomes a common-gate input, $Z_{in}\to 1/(g_m + g_{mb})$.

### Result

$$Z_{in} = \frac{1}{g_m + g_{mb}}\left(1 + \frac{g_m}{C_2s}\right) = \frac{1}{g_m + g_{mb}} + \frac{g_m}{g_m + g_{mb}}\cdot\frac{1}{C_2s}$$

which reduces to

$$Z_{in} = \frac{1}{g_m} + \frac{1}{C_2s}$$

if the body effect is neglected. $C_1$ does not appear: with an ideal current source at the drain, all of the test current flows through $C_1$ and $C_2$ in turn, and only the voltage across $C_2$ (the gate voltage) influences the transistor.

**Common mistake.** Combining $C_1$ and $C_2$ in series or in parallel as "the" input capacitance. $C_2$ sets the gate voltage, which controls the transistor; $C_1$ only sets the drain voltage, which has no effect when $\lambda = 0$. (Their series equivalent from D to ground works only if the gate is still taken as the divider tap, $V_G = V_D\,C_1/(C_1 + C_2)$, which leads to the same answer.)

**Common mistake.** Claiming a negative input resistance by analogy with the Colpitts core, where the capacitors are gate–source and source–ground and the impedance is measured at the gate. Here the test current flows in series through the channel, $C_1$ and $C_2$, and the real part of $Z_{in}$ is the positive $1/(g_m + g_{mb})$.

**Common mistake.** Silently dropping $g_{mb}$. The bulk is grounded while the source carries the signal, so $v_{bs} = -V_S\ne0$; neglecting it is acceptable only as a stated approximation.
