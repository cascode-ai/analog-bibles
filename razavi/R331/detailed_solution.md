# Detailed solution - R331

**Approach.** With the gate, drain and bulk at ac ground, the only unknown node voltage is the source voltage $V_S$. One KCL equation at the source gives $V_S$, and the output current equals the current through $Z_S$.

### Step 1 — Terminal voltages and small-signal model

All quantities are small-signal values. With $V_G = V_D = 0$, the NMOS bulk tied to ground ($V_B = 0$) and the source at $V_S$,

$$V_{GS} = V_{BS} = V_{DS} = -V_S .$$

Between drain and source, with drain-to-source taken as positive, $M_1$ has four parallel branches: $g_mV_{GS}$, $g_{mb}V_{BS}$, $r_O$ carrying $V_{DS}/r_O$, and the noise current $I_n$. $Z_S$ connects the source to ground, and the drain short carries $I_{n,out1}$ from ac ground into the drain.

<!-- diagram: diagram-01.cir -->

### Step 2 — Current flowing through the device

Adding the four branch currents and substituting the terminal voltages:

$$
\begin{aligned}
I_{DS} &= g_mV_{GS} + g_{mb}V_{BS} + \frac{V_{DS}}{r_O} + I_n\\
&= g_m(-V_S) + g_{mb}(-V_S) + \frac{-V_S}{r_O} + I_n\\
&= I_n - V_S\left(g_m + g_{mb} + \frac{1}{r_O}\right).
\end{aligned}
$$

### Step 3 — KCL and solution

There is no gate current, so the device current leaves the source only through $Z_S$ and enters the drain only through the short:

$$I_{DS} = \frac{V_S}{Z_S}, \qquad I_{n,out1} = I_{DS}.$$

Equating the two expressions for $I_{DS}$ and collecting the $V_S$ terms:

$$
\begin{aligned}
\frac{V_S}{Z_S} &= I_n - V_S\left(g_m + g_{mb} + \frac{1}{r_O}\right)\\
V_S\left(\frac{1}{Z_S} + g_m + g_{mb} + \frac{1}{r_O}\right) &= I_n\\
V_S &= \frac{I_nZ_S}{1 + Z_S\left(g_m + g_{mb} + 1/r_O\right)} .
\end{aligned}
$$

Therefore

$$I_{n,out1} = \frac{V_S}{Z_S} = \frac{I_n}{Z_S\left(g_m + g_{mb} + 1/r_O\right) + 1}. \qquad\blacksquare$$

### Step 4 — Current-divider view and limiting cases

Seen from its source, the transistor with gate, drain and bulk grounded is a conductance $g_m + g_{mb} + 1/r_O$ to ground. $I_n$, injected into the source node, splits between this conductance and $Z_S$, and only the part through $Z_S$ also passes through the drain short:

$$I_{n,out1} = I_n\,\frac{1/Z_S}{1/Z_S + g_m + g_{mb} + 1/r_O} = \frac{I_n}{1 + Z_S(g_m + g_{mb} + 1/r_O)},$$

the same answer. Physically, the noise current raises $V_S$, which lowers $V_{GS}$, $V_{BS}$ and $V_{DS}$, so the device's own current opposes the noise and returns most of $I_n$ through the transistor.

- $Z_S = 0$: $I_{n,out1} = I_n$, the familiar common-source result.
- $g_{mb} = 0$, $r_O \to \infty$: $I_{n,out1} = I_n/(1 + g_mZ_S)$, the standard degeneration factor.
- $Z_S \to \infty$: $I_{n,out1} \to 0$; the noise current can only circulate through the device itself.

### Result

With $V_{GS} = V_{BS} = V_{DS} = -V_S$, KCL at the source gives

$$I_n - V_S\left(g_m + g_{mb} + \frac{1}{r_O}\right) = \frac{V_S}{Z_S}\quad\Longrightarrow\quad V_S = \frac{I_nZ_S}{1 + Z_S(g_m + g_{mb} + 1/r_O)},$$

and since the drain-short current equals the current through $Z_S$,

$$I_{n,out1} = \frac{V_S}{Z_S} = \frac{I_n}{Z_S\left(g_m + g_{mb} + 1/r_O\right) + 1}.$$

**Common mistake.** Writing $V_{DS} = +V_S$ or $V_{GS} = +V_S$. With the drain and gate at ac ground these are $0 - V_S = -V_S$, and a slip in even one of the three terms changes the denominator (for example to $1 + Z_S(g_m + g_{mb} - 1/r_O)$).

**Common mistake.** Proving only the case $g_{mb} = 0$, $r_O = \infty$, i.e. $I_n/(1 + g_mZ_S)$, and asserting the general one. The body effect and $r_O$ each add a branch that depends on $V_S$ and must appear in the KCL equation.

**Common mistake.** Taking the output current as simply $I_n$ because the noise source connects to the drain. That holds only for $Z_S = 0$; with degeneration only the fraction $1/[1 + Z_S(g_m + g_{mb} + 1/r_O)]$ reaches the drain short.
