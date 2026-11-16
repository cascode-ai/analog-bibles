# Detailed solution - R331

**Approach.** Replace $M_1$ by its small-signal model (transconductance $g_m$, body transconductance $g_{mb}$, output resistance $r_O$) together with the noise current $I_n$. With the gate, drain and bulk all at ac ground, the only unknown node voltage is the source voltage $V_S$. One KCL equation at the source gives $V_S$, and the output current is the current that flows through $Z_S$.

### Step 1 — Terminal voltages

All quantities are small-signal (noise) values. From the figure:

- the gate is at ac ground: $V_G = 0$;
- the drain is shorted to ac ground: $V_D = 0$;
- the bulk of an NMOS is tied to the substrate (ground): $V_B = 0$;
- the source is at the unknown voltage $V_S$, connected to ground through $Z_S$.

The voltages that control the device are therefore

$$
\begin{aligned}
V_{GS} &= V_G - V_S = -V_S,\\
V_{BS} &= V_B - V_S = -V_S,\\
V_{DS} &= V_D - V_S = -V_S .
\end{aligned}
$$

All three equal $-V_S$: if the source rises, the gate–source, bulk–source and drain–source voltages all fall.

### Step 2 — Small-signal model

Between the drain and the source the model has four parallel branches. Take the drain-to-source direction as positive for every one of them:

1. the gate-controlled current source $g_mV_{GS}$;
2. the body-effect current source $g_{mb}V_{BS}$, which models the bulk acting as a second gate;
3. the output resistance $r_O$ (channel-length modulation), which carries $V_{DS}/r_O$ from drain to source;
4. the channel noise current $I_n$, drawn from drain to source in the figure.

From the source node, the impedance $Z_S$ goes to ground. The drain node is connected to ground through the short whose current is $I_{n,out1}$; in the figure that current flows from the ac ground into the drain.

<!-- diagram: diagram-01.cir -->

### Step 3 — Current flowing through the device

Add the four branch currents (drain to source), substituting the voltages of Step 1:

$$
\begin{aligned}
I_{DS} &= g_mV_{GS} + g_{mb}V_{BS} + \frac{V_{DS}}{r_O} + I_n\\
&= g_m(-V_S) + g_{mb}(-V_S) + \frac{-V_S}{r_O} + I_n\\
&= I_n - V_S\left(g_m + g_{mb} + \frac{1}{r_O}\right).
\end{aligned}
$$

### Step 4 — KCL at the source and at the drain

**KCL at the source node.** Current enters only from the device ($I_{DS}$) and leaves only through $Z_S$ (no gate current at low frequency, capacitances neglected):

$$I_{DS} = \frac{V_S}{Z_S}.$$

**KCL at the drain node.** The current arriving through the short must leave through the device:

$$I_{n,out1} = I_{DS}.$$

So the output current equals the current through $Z_S$: every bit of current that leaves the drain short ends up in $Z_S$.

### Step 5 — Solving for $V_S$ and $I_{n,out1}$

Equate the two expressions for $I_{DS}$ (Steps 3 and 4):

$$\frac{V_S}{Z_S} = I_n - V_S\left(g_m + g_{mb} + \frac{1}{r_O}\right).$$

Collect the $V_S$ terms on the left:

$$V_S\left(\frac{1}{Z_S} + g_m + g_{mb} + \frac{1}{r_O}\right) = I_n .$$

Multiply both sides by $Z_S$:

$$V_S\left[1 + Z_S\left(g_m + g_{mb} + \frac{1}{r_O}\right)\right] = I_nZ_S ,$$

so

$$V_S = \frac{I_nZ_S}{1 + Z_S\left(g_m + g_{mb} + 1/r_O\right)} .$$

Finally, from Step 4, $I_{n,out1} = I_{DS} = V_S/Z_S$:

$$I_{n,out1} = \frac{V_S}{Z_S} = \frac{I_n}{Z_S\left(g_m + g_{mb} + 1/r_O\right) + 1}. \qquad\blacksquare$$

### Step 6 — A current-divider view and the limiting cases

The result has a simple interpretation. With its gate, drain and bulk grounded, the transistor seen from its source looks like a conductance $g_m + g_{mb} + 1/r_O$ to ground (this is the familiar $1/(g_m + g_{mb})\parallel r_O$ "looking into the source"). The noise current $I_n$ is injected into the source node and splits between two paths to ground: back through the device itself, and through $Z_S$. Only the part through $Z_S$ also passes through the drain short. The current-divider rule gives

$$I_{n,out1} = I_n\,\frac{1/Z_S}{1/Z_S + g_m + g_{mb} + 1/r_O} = \frac{I_n}{1 + Z_S(g_m + g_{mb} + 1/r_O)},$$

the same answer.

**Physical intuition.** The noise current raises the source voltage. A higher source lowers $V_{GS}$, $V_{BS}$ and $V_{DS}$, and each of these reductions makes the device carry *less* current, opposing the noise. This local negative feedback returns most of $I_n$ through the transistor itself instead of letting it reach the drain.

**Limiting cases:**

- $Z_S = 0$: $I_{n,out1} = I_n$. With the source grounded, all the noise current flows out of the drain, the familiar result for a common-source device.
- $g_{mb} = 0$, $r_O \to \infty$: $I_{n,out1} = I_n/(1 + g_mZ_S)$, the standard degeneration factor.
- $Z_S \to \infty$ (ideal current source in the source): $I_{n,out1} \to 0$. The noise current then has nowhere to go except around the loop through the device itself.

### Result

With $V_{GS} = V_{BS} = V_{DS} = -V_S$, KCL at the source gives

$$I_n - V_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) = \frac{V_S}{Z_S}\quad\Longrightarrow\quad V_S = \frac{I_nZ_S}{1 + Z_S(g_m + g_{mb} + 1/r_O)},$$

and since the drain-short current equals the current through $Z_S$,

$$I_{n,out1} = \frac{V_S}{Z_S} = \frac{I_n}{Z_S\left(g_m + g_{mb} + 1/r_O\right) + 1}.$$

**Common mistake.** Getting the terminal voltages wrong, for example writing $V_{DS} = +V_S$ or $V_{GS} = +V_S$. With the drain and gate at ac ground, these voltages are $0 - V_S = -V_S$. A sign slip in even one of the three terms changes the denominator (for example to $1 + Z_S(g_m + g_{mb} - 1/r_O)$), and a derivation that lands on the right formula through two compensating sign errors is not a proof.

**Common mistake.** Proving the result only for $g_{mb} = 0$ and $r_O = \infty$, i.e. $I_n/(1 + g_mZ_S)$, and asserting the general case. The body effect and $r_O$ each add a branch that depends on $V_S$, and each must appear in the KCL equation.

**Common mistake.** Claiming that the output current is simply $I_n$ because "the noise source is connected to the drain". That holds only for $Z_S = 0$. With degeneration, the source voltage moves and the device's own transconductances send part of $I_n$ back around the internal loop, so only the fraction $1/[1 + Z_S(g_m + g_{mb} + 1/r_O)]$ reaches the drain short.
