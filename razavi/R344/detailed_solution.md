# Detailed solution - R344

**Approach.** Represent the noise by an input-referred voltage (in series with the input) and current (in parallel with the input). **Short the input** to find the voltage: compute the output noise and divide by the squared voltage gain. **Open the input** to find the current: compute the output noise and divide by the squared transimpedance. The resistor $R_1$ from output to input behaves very differently in the two cases.

### Step 1 — Small-signal model

**Nodes:** the input (the source of $M_1$) and the output (drain). The gate is at the fixed bias $V_b$, i.e. ac ground.

- **$M_1$**: current $g_m(0 - v_{in}) = -g_mv_{in}$ from the output to the source, with channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel ($\lambda = 0$, no body effect).
- **$R_1$**: between the output and the input, with Norton noise current $I_{n,R1}$ ($\overline{I_{n,R1}^2} = 4kT/R_1$) in parallel.
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with Norton noise current $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$).

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

So $M_1$ and $R_1$ are two parallel paths between the output and the input, and $R_D$ goes from the output to ac ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — Voltage gain

Drive the input with an ideal source $v_{in}$ (noise off). KCL at the output: the current arriving from $V_{DD}$ through $R_D$ equals the current leaving toward the input through $M_1$ and $R_1$:

$$\frac{0 - v_{out}}{R_D} = -g_mv_{in} + \frac{v_{out} - v_{in}}{R_1}.$$

Collect terms:

$$
\begin{aligned}
-\frac{v_{out}}{R_D} - \frac{v_{out}}{R_1} &= -g_mv_{in} - \frac{v_{in}}{R_1}\\
v_{out}\left(\frac{1}{R_D} + \frac{1}{R_1}\right) &= \left(g_m + \frac{1}{R_1}\right)v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= \left(g_m + \frac{1}{R_1}\right)(R_D\parallel R_1).
\end{aligned}
$$

Interpretation: if the output is shorted, the input pushes a current $(g_m + 1/R_1)v_{in}$ into it, through both $M_1$ and $R_1$. With the input held by an ideal source, the output resistance is $R_D\parallel R_1$.

### Step 3 — Input-referred noise voltage (input shorted)

With the input at ac ground:

- $M_1$ has $v_{gs} = 0$, so only its noise current $I_{n1}$ remains, flowing from the output to ground.
- $R_1$ now connects the output to ground, **in parallel with $R_D$**, and its noise current $I_{n,R1}$ flows into the same node.

All three noise currents see the same resistance $R_D\parallel R_1$. They are uncorrelated, so

$$\overline{V_{n,out}^2}\Big|_{short} = \left(4kT\gamma g_m + \frac{4kT}{R_D} + \frac{4kT}{R_1}\right)(R_D\parallel R_1)^2 .$$

Divide by $A_v^2 = (g_m + 1/R_1)^2(R_D\parallel R_1)^2$; the factor $(R_D\parallel R_1)^2$ cancels:

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_1}\right)}{\left(g_m + \dfrac{1}{R_1}\right)^2}.$$

Equivalently, this is the ratio of the short-circuit output noise current to the short-circuit transconductance $G_m = g_m + 1/R_1$. Note that $R_1$ helps the signal (it adds $1/R_1$ to the transconductance) while adding its own noise.

### Step 4 — Input-referred noise current (input open)

With the input **open**, the source node is connected only to $M_1$ and $R_1$, and both lead back to the output. KCL at the source node:

$$\underbrace{-g_mv_S + I_{n1}}_{M_1} + \underbrace{\frac{v_{out} - v_S}{R_1} + I_{n,R1}}_{R_1} = 0 .$$

So the **total** current flowing from the output into the $M_1$–$R_1$ pair is zero. The noise currents $I_{n1}$ and $I_{n,R1}$ circulate around the loop formed by $M_1$ and $R_1$ and only change the floating voltage $v_S$.

KCL at the output then says that the $R_D$ branch carries no net current: $(0 - v_{out})/R_D + I_{nD} = 0$, so $v_{out} = R_DI_{nD}$ and

$$\overline{V_{n,out}^2}\Big|_{open} = 4kTR_D .$$

**Transimpedance.** An input current $i_{in}$ injected into the source node can leave only through $M_1$ and $R_1$, to the output, and then must flow through $R_D$. Hence $|v_{out}| = R_D|i_{in}|$, i.e. $|R_T| = R_D$.

**Input-referred current:**

$$\overline{I_{n,in}^2} = \frac{4kTR_D}{R_D^2} = \frac{4kT}{R_D}.$$

### Step 5 — Checks

- **$R_1 \to \infty$** (remove $R_1$): $\overline{V_{n,in}^2} \to (4kT\gamma g_m + 4kT/R_D)/g_m^2 = 4kT\gamma/g_m + 4kT/(g_m^2R_D)$, the plain common-gate result, and $\overline{I_{n,in}^2} = 4kT/R_D$ is unchanged.
- **Large $g_mR_1$:** the $R_1$ terms become small, and the voltage noise approaches that of the plain common-gate stage.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_1}\right)}{\left(g_m + \dfrac{1}{R_1}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

- Voltage (input shorted): $R_1$ is in parallel with $R_D$; the short-circuit noise current $I_{n1} + I_{nD} + I_{n,R1}$ is divided by the transconductance $g_m + 1/R_1$ (voltage gain $(g_m + 1/R_1)(R_D\parallel R_1)$).
- Current (input open): $M_1$ and $R_1$ carry zero net current, so their noise circulates locally. Output noise $4kTR_D$, transimpedance $R_D$.

**Common mistake.** Keeping the noise of $M_1$ or $R_1$ in the input-referred current, for example quoting $4kT(\gamma g_m + 1/R_D + 1/R_1)$. That is the input-*shorted* noise current; with the input open, the $M_1$–$R_1$ loop carries no net current, and only $R_D$'s noise reaches the output.

**Common mistake.** Ignoring $R_1$ in the voltage, i.e. using the gain $g_mR_D$. With the input shorted, $R_1$ loads the output in parallel with $R_D$ and adds its noise current; with the input driven, it adds the feedforward current $v_{in}/R_1$. Both effects appear in the result.

**Common mistake.** Treating $R_1$ as a source-degeneration or gate resistor. It connects the drain to the source, so it is in parallel with the transistor's drain–source path, not in series with it.
