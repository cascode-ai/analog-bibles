# Detailed solution - R344

**Approach.** Short the input to find the input-referred noise voltage (output noise divided by the squared voltage gain), and open it to find the input-referred noise current (output noise divided by the squared transimpedance). The resistor $R_1$ from output to input behaves very differently in the two cases.

### Step 1 — Small-signal model

The gate is at ac ground; $\lambda = 0$ and there is no body effect.

- **$M_1$:** a current $g_m(0 - v_{in}) = -g_mv_{in}$ from the output to the source (the input), with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel.
- **$R_1$:** between the output and the input, with its Norton noise $I_{n,R1}$ ($\overline{I_{n,R1}^2} = 4kT/R_1$) in parallel.
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$).

So $M_1$ and $R_1$ are two parallel paths between the output and the input.

<!-- diagram: diagram-01.cir -->

### Step 2 — Voltage gain

With an ideal $v_{in}$ and the noise off, the current arriving through $R_D$ leaves toward the input through $M_1$ and $R_1$:

$$\frac{0 - v_{out}}{R_D} = -g_mv_{in} + \frac{v_{out} - v_{in}}{R_1},$$

$$
\begin{aligned}
-\frac{v_{out}}{R_D} - \frac{v_{out}}{R_1} &= -g_mv_{in} - \frac{v_{in}}{R_1}\\
v_{out}\left(\frac{1}{R_D} + \frac{1}{R_1}\right) &= \left(g_m + \frac{1}{R_1}\right)v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= \left(g_m + \frac{1}{R_1}\right)(R_D\parallel R_1).
\end{aligned}
$$

The input drives the short-circuit output current $(g_m + 1/R_1)v_{in}$ through both $M_1$ and $R_1$, into the output resistance $R_D\parallel R_1$.

### Step 3 — Input-referred noise voltage (input shorted)

With the input at ac ground, $M_1$ has $v_{gs} = 0$ and only its noise current $I_{n1}$ remains, from the output to ground, while $R_1$ connects the output to ground **in parallel with $R_D$**, its noise current $I_{n,R1}$ acting at the same node. All three uncorrelated noise currents see $R_D\parallel R_1$:

$$\overline{V_{n,out}^2}\Big|_{short} = \left(4kT\gamma g_m + \frac{4kT}{R_D} + \frac{4kT}{R_1}\right)(R_D\parallel R_1)^2 .$$

Dividing by $A_v^2 = (g_m + 1/R_1)^2(R_D\parallel R_1)^2$, the factor $(R_D\parallel R_1)^2$ cancels:

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_1}\right)}{\left(g_m + \dfrac{1}{R_1}\right)^2}.$$

This is the short-circuit output noise current divided by the transconductance $G_m = g_m + 1/R_1$: $R_1$ adds $1/R_1$ to the signal transconductance while adding its own noise.

### Step 4 — Input-referred noise current (input open)

With the input open, the source node connects only to $M_1$ and $R_1$, both of which lead back to the output. KCL at the source node:

$$\underbrace{-g_mv_S + I_{n1}}_{M_1} + \underbrace{\frac{v_{out} - v_S}{R_1} + I_{n,R1}}_{R_1} = 0 .$$

So the **total** current from the output into the $M_1$–$R_1$ pair is zero: $I_{n1}$ and $I_{n,R1}$ circulate in the $M_1$–$R_1$ loop and only move the floating $v_S$. The $R_D$ branch then carries no net current, $(0 - v_{out})/R_D + I_{nD} = 0$, so $v_{out} = R_DI_{nD}$ and

$$\overline{V_{n,out}^2}\Big|_{open} = 4kTR_D .$$

An input current $i_{in}$ can leave the source node only through $M_1$ and $R_1$ to the output, and then through $R_D$, so $|v_{out}| = R_D|i_{in}|$, i.e. $|R_T| = R_D$, and

$$\overline{I_{n,in}^2} = \frac{4kTR_D}{R_D^2} = \frac{4kT}{R_D}.$$

### Step 5 — Checks

- **$R_1 \to \infty$:** $\overline{V_{n,in}^2} \to (4kT\gamma g_m + 4kT/R_D)/g_m^2 = 4kT\gamma/g_m + 4kT/(g_m^2R_D)$, the plain common-gate result, and $\overline{I_{n,in}^2} = 4kT/R_D$ is unchanged.
- **Large $g_mR_1$:** the $R_1$ terms become small, and the voltage noise approaches that of the plain common-gate stage.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_1}\right)}{\left(g_m + \dfrac{1}{R_1}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

- Voltage (input shorted): $R_1$ is in parallel with $R_D$; the short-circuit noise current $I_{n1} + I_{nD} + I_{n,R1}$ is divided by the transconductance $g_m + 1/R_1$ (voltage gain $(g_m + 1/R_1)(R_D\parallel R_1)$).
- Current (input open): $M_1$ and $R_1$ carry zero net current, so their noise circulates locally. Output noise $4kTR_D$, transimpedance $R_D$.

**Common mistake.** Keeping the noise of $M_1$ or $R_1$ in the input-referred current, for example quoting $4kT(\gamma g_m + 1/R_D + 1/R_1)$, the input-*shorted* noise current. With the input open, the $M_1$–$R_1$ loop carries no net current, and only $R_D$'s noise reaches the output.

**Common mistake.** Ignoring $R_1$ in the voltage, i.e. using the gain $g_mR_D$. With the input shorted, $R_1$ loads the output and adds its noise; with the input driven, it adds the feedforward current $v_{in}/R_1$.

**Common mistake.** Treating $R_1$ as a degeneration or gate resistor. It connects the drain to the source, in parallel with the transistor's drain–source path.
