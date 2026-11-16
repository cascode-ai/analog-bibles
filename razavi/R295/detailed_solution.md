# Detailed solution - R295

**Approach.** The input is the source of $M_1$, so $M_1$ acts as a common-gate device whose gate is not grounded but sits on the capacitive divider $C_1$–$C_2$. Drive the source with a test source and follow the test current: it must cross the channel, and at the drain the only way out is through $C_1$ and then $C_2$. That fixes the gate voltage. The transistor equation, including the body effect (the bulk is grounded while the source moves), then gives the source voltage and hence $Z_{in}$.

### Step 1 — Reading the circuit

From the figure:

- The ideal current source $I_1$ feeds the drain of $M_1$ (node **D**) from $V_{DD}$.
- $C_1$ connects D to the gate of $M_1$ (node **G**), and $C_2$ connects G to ground.
- The input terminal is the source of $M_1$ (node **S**). The bulk is tied to ground.
- $\lambda = 0$, so there is no $r_O$. All other capacitances are neglected.

### Step 2 — Small-signal model

- $V_{DD}$ is an ac ground and an ideal current source is an **open circuit** for small signals, so nothing connects D to ac ground except $C_1$ (through G and $C_2$).
- $M_1$ is a current source from drain to source, $i_d = g_mv_{gs} + g_{mb}v_{bs}$, where $g_m$ is the transconductance and $g_{mb}$ the body transconductance. With the bulk grounded, $v_{bs} = -V_S$, so
$$i_d = g_m(V_G - V_S) - g_{mb}V_S .$$
- No $r_O$ ($\lambda = 0$).

Apply a test voltage $V_x = V_S$ at the source and let $I_x$ be the current flowing from the test source into node S.

<!-- diagram: diagram-01.cir -->

### Step 3 — Follow the test current

**KCL at S.** Only the test source and the transistor touch node S. The current $I_x$ that enters S must therefore flow through the channel from S to D. In terms of the drain-to-source current:

$$i_d = -I_x . \qquad (1)$$

**KCL at D.** The current $I_x$ arrives at D from the channel. The ideal current source is an open circuit and there is no $r_O$, so the current has only one exit: through $C_1$ to node G.

**KCL at G.** The gate draws no current. So the current $I_x$ that arrives through $C_1$ continues through $C_2$ to ground. The gate voltage is the voltage across $C_2$:

$$V_G = \frac{I_x}{C_2s}. \qquad (2)$$

The drain voltage is then $V_D = V_G + I_x/(C_1s)$: it simply adjusts to push $I_x$ through $C_1$, and it does not enter the transistor equation (no $r_O$). That is why **$C_1$ will not appear** in $Z_{in}$.

### Step 4 — Solve for the source voltage

Combine the transistor equation with (1):

$$g_m(V_G - V_S) - g_{mb}V_S = -I_x .$$

Collect the $V_S$ terms:

$$
\begin{aligned}
g_mV_G + I_x &= (g_m + g_{mb})V_S\\
V_S &= \frac{I_x + g_mV_G}{g_m + g_{mb}}.
\end{aligned}
$$

Substitute $V_G$ from (2):

$$V_S = \frac{I_x + g_m\dfrac{I_x}{C_2s}}{g_m + g_{mb}} = \frac{I_x}{g_m + g_{mb}}\left(1 + \frac{g_m}{C_2s}\right).$$

### Step 5 — The input impedance

$$Z_{in} = \frac{V_S}{I_x} = \frac{1}{g_m + g_{mb}}\left(1 + \frac{g_m}{C_2s}\right).$$

Expand into two series terms:

$$Z_{in} = \frac{1}{g_m + g_{mb}} + \frac{g_m}{g_m + g_{mb}}\cdot\frac{1}{C_2s}.$$

**Element interpretation.** This is a resistance $1/(g_m + g_{mb})$ in series with a capacitance

$$C_{eq} = \frac{g_m + g_{mb}}{g_m}\,C_2 = (1 + \eta)\,C_2, \qquad \eta = \frac{g_{mb}}{g_m}.$$

**Without the body effect** ($g_{mb} = 0$):

$$Z_{in} = \frac{1}{g_m} + \frac{1}{C_2s}.$$

### Step 6 — Physical picture and checks

- **The resistive part** $1/(g_m + g_{mb})$ is the familiar impedance looking into the source of a MOSFET whose gate is held still: changing $V_S$ changes both $v_{gs}$ and $v_{bs}$.
- **The capacitive part** arises because the gate is not held still. The current that flows through the channel ends up charging $C_2$, which raises the gate voltage by $I_x/(C_2s)$. To keep carrying the same current, the source must rise by roughly the same amount (by the fraction $g_m/(g_m + g_{mb})$ when the body effect is included). So the source voltage contains a term proportional to $I_x/(C_2s)$, a capacitive term.
- **At dc** ($s\to0$), $Z_{in}\to\infty$. This is correct: there is no dc path from S to ground for a signal current, because the drain sees an ideal current source and the gate path is capacitive.
- **At high frequency**, $C_2$ shorts the gate to ground and the circuit becomes a common-gate input, $Z_{in}\to 1/(g_m + g_{mb})$.

### Result

$$Z_{in} = \frac{1}{g_m + g_{mb}}\left(1 + \frac{g_m}{C_2s}\right) = \frac{1}{g_m + g_{mb}} + \frac{g_m}{g_m + g_{mb}}\cdot\frac{1}{C_2s}$$

which reduces to

$$Z_{in} = \frac{1}{g_m} + \frac{1}{C_2s}$$

if the body effect is neglected. $C_1$ does not appear: with an ideal current source at the drain, all of the test current must flow through $C_1$ and $C_2$ in turn, and only the voltage across $C_2$ (the gate voltage) influences the transistor.

**Common mistake.** Combining $C_1$ and $C_2$ in series or in parallel and using the combination as "the" input capacitance. The two capacitors play different roles: $C_2$ sets the gate voltage, which controls the transistor, while $C_1$ only sets the drain voltage, which has no effect when $\lambda = 0$. (Replacing the string by its series equivalent from D to ground is legitimate only if the gate is still taken as the tap of the divider, $V_G = V_D\,C_1/(C_1 + C_2)$; done that way it leads to the same answer.)

**Common mistake.** Claiming a negative input resistance by analogy with the Colpitts oscillator core. In that circuit the capacitors are connected gate–source and source–ground and the impedance is measured at the gate, which is a different topology. Here the test current flows in series through the channel and then through $C_1$ and $C_2$, and the real part of $Z_{in}$ is the positive $1/(g_m + g_{mb})$.

**Common mistake.** Silently dropping $g_{mb}$. The bulk is tied to ground while the source carries the signal, so $v_{bs} = -V_S\ne0$ and the body effect is present. Neglecting it is acceptable only as a stated approximation.
