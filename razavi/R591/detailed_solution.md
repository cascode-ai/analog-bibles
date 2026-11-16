# Detailed solution - R591

**Approach.** Use the differential half circuit. In the amplification mode the left plate of $C_1$ sits at the constant $V_{CM}$, so for the natural (settling) response $C_1$ is a capacitor from the gate to AC ground and $C_3$ feeds the output back to the gate. With the transistor as $g_{m1}$ plus an output resistance $R_0$, the circuit has a single pole; we find it by writing KCL at the gate and output nodes with the input source zeroed.

### Step 1 — Half circuit and its elements

For differential signals the tail node P is an AC ground (the two halves push equal and opposite currents into it), so each side is a common-source stage. In the amplification mode one half contains:

- **Node X (gate of $M_1$):** $C_1 = 2$ pF to AC ground (its left plate is held at $V_{CM}$; the step from $V_{in}$ to $V_{CM}$ has already been applied and only starts the transient), and $C_3 = 0.5$ pF to the output.
- **Output node (drain of $M_1$):** a current $g_{m1}v_X$ drawn from the output to ground by $M_1$; the resistance $R_0 = r_{O1}\parallel r_{O3}$ to ground; the other end of $C_3$. There is no other capacitance (transistor capacitances neglected, no load).

<!-- diagram: diagram-01.cir -->

### Step 2 — Small-signal parameters

Each transistor carries $I_D = I_{SS}/2 = 0.5$ mA, and $W/L = 50/0.5 = 100$.

$$
\begin{aligned}
G_m = g_{m1} &= \sqrt{2\mu_nC_{ox}(W/L)I_D} = \sqrt{2(134\times10^{-6})(100)(0.5\times10^{-3})}\ \mathrm{S} = 3.66\ \mathrm{mS},\\
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1)(0.5\times10^{-3})}\ \Omega = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2)(0.5\times10^{-3})}\ \Omega = 10\ \mathrm{k}\Omega,\\
R_0 &= r_{O1}\parallel r_{O3} = \frac{20\times10}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega,\qquad \frac{1}{R_0} = 0.150\ \mathrm{mS}.
\end{aligned}
$$

The open-loop gain is $G_mR_0 = 3.66\ \mathrm{mS}\times6.67\ \mathrm{k}\Omega = 24.4$.

### Step 3 — Node equations for the natural response

With the input source zeroed, write KCL in the Laplace domain.

**KCL at X** (current into $C_1$ plus current into $C_3$ equals zero):

$$sC_1V_X + sC_3(V_X - V_{out}) = 0\quad\Longrightarrow\quad V_X = \frac{C_3}{C_1 + C_3}\,V_{out} = \beta\,V_{out},$$

where $\beta = C_3/(C_1 + C_3)$ is the **feedback factor**: the capacitive divider $C_3$–$C_1$ returns this fraction of the output to the gate.

**KCL at the output** (currents leaving the node through $M_1$, $R_0$ and $C_3$ sum to zero):

$$G_mV_X + \frac{V_{out}}{R_0} + sC_3(V_{out} - V_X) = 0 .$$

### Step 4 — Solve for the pole

Substitute $V_X = \beta V_{out}$:

$$
\begin{aligned}
G_m\beta V_{out} + \frac{V_{out}}{R_0} + sC_3(1 - \beta)V_{out} &= 0\\
s\,C_3(1 - \beta) &= -\left(G_m\beta + \frac{1}{R_0}\right).
\end{aligned}
$$

Note that $C_3(1 - \beta) = C_3\cdot\dfrac{C_1}{C_1 + C_3} = \dfrac{C_1C_3}{C_1 + C_3}$, the **series combination** of $C_1$ and $C_3$. The single pole is at $s = -1/\tau$ with

$$\tau = \frac{C_1C_3/(C_1 + C_3)}{1/R_0 + G_mC_3/(C_1 + C_3)} .$$

**Interpretation.** Looking into the output node, the capacitance is $C_3$ in series with $C_1$ (the only path to ground for capacitive current). The resistance is $R_0$ in parallel with $1/(G_m\beta)$: through the feedback, a voltage $v_{out}$ produces a gate voltage $\beta v_{out}$ and hence a current $G_m\beta v_{out}$, so the transistor looks like a resistor $1/(G_m\beta)$.

### Step 5 — Numbers

$$
\begin{aligned}
\beta &= \frac{0.5}{2 + 0.5} = 0.2,\\
\frac{C_1C_3}{C_1 + C_3} &= \frac{(2)(0.5)}{2.5}\ \mathrm{pF} = 0.4\ \mathrm{pF},\\
G_m\beta &= 3.66\ \mathrm{mS}\times0.2 = 0.732\ \mathrm{mS},\\
\frac{1}{R_0} + G_m\beta &= 0.150 + 0.732 = 0.882\ \mathrm{mS},\\
\tau &= \frac{0.4\times10^{-12}\ \mathrm{F}}{0.882\times10^{-3}\ \mathrm{S}} = 0.453\times10^{-9}\ \mathrm{s} = 0.45\ \mathrm{ns}.
\end{aligned}
$$

### Step 6 — Comparison with the large-loop-gain approximation

If $G_m\beta \gg 1/R_0$ (i.e. loop gain $G_mR_0\beta \gg 1$), the $1/R_0$ term is dropped:

$$\tau \approx \frac{C_1C_3/(C_1 + C_3)}{G_mC_3/(C_1 + C_3)} = \frac{C_1}{G_m} = \frac{2\ \mathrm{pF}}{3.66\ \mathrm{mS}} = 0.546\ \mathrm{ns}.$$

Here the loop gain is only $G_mR_0\beta = 24.4\times0.2 = 4.9$, so $1/R_0 = 0.15$ mS is about 20 % of $G_m\beta = 0.73$ mS and cannot be neglected: the finite $R_0$ adds a parallel conductance and makes the response about 20 % faster (0.45 ns instead of 0.55 ns). The price is a large static error: with a loop gain of 4.9 the output settles to a final value $1/(1 + 4.9) \approx 17\ \%$ below the nominal gain $C_1/C_3 = 4$.

### Result

$$\tau = \frac{C_1C_3/(C_1 + C_3)}{1/(r_{O1}\parallel r_{O3}) + g_{m1}C_3/(C_1 + C_3)} = \frac{0.4\ \mathrm{pF}}{0.15\ \mathrm{mS} + 0.732\ \mathrm{mS}} \approx 0.45\ \mathrm{ns}$$

(about 0.55 ns, i.e. $C_1/g_{m1}$, if the finite output resistance is neglected, which is a poor approximation here because the loop gain is only about 5).

**Common mistake.** Using an "RC" from the wrong elements: $R_0C_3$ (3.3 ns) or $R_0(C_1 + C_3)$ (17 ns) ignore the feedback, which makes $M_1$ look like a small resistance $1/(g_{m1}\beta)$ at the output; $C_3/g_{m1}$ (0.14 ns) ignores that only the fraction $\beta$ of the output reaches the gate.

**Common mistake.** Placing $C_1$ at the output, or treating its left plate as floating. In the amplification mode the left plate of $C_1$ is driven by $V_{CM}$, a low-impedance (AC-ground) node, so $C_1$ hangs from the gate X to ground and the output sees it only through $C_3$, in series.
