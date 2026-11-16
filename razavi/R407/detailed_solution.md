# Detailed solution - R407

**Approach.** Represent the circuit's noise by a voltage source $V_{n,in}$ in series with the input port and a current source $I_{n,in}$ across it, driving a noiseless copy of the circuit. $V_{n,in}$ is found with the input port **shorted** (output noise divided by the voltage gain), and $I_{n,in}$ with the port **open** (output noise divided by the transimpedance). Each stage's noise is its input-referred voltage, $V_{n1}$ or $V_{n2}$, placed in series with that stage's differential input.

### Step 1 — Model of the circuit with its noise sources

**One stage ([Fig. 1]).** A differential input $v_d$ puts $\pm v_d/2$ on the two input transistors, so each output node receives a current $\mp G_mv_d/2$ (the output on the "+" input's side moves the opposite way). Each output has $R_0 = r_{ON}\parallel r_{OP}$ to ground, and the differential gain is $-G_mR_0$.

**Noise.** $V_{n1}$ and $V_{n2}$ are the input-referred thermal noise voltages of the two stages. They include the noise of all the transistors in each stage, including the loads whose output resistances form the $R_0$'s. The $R_0$'s are transistor output resistances, not physical resistors, so they add no further noise. After moving $V_{n1}$ and $V_{n2}$ to the stage inputs, both stages are noiseless.

**Connections in [Fig. 2].** Input terminals A (top) and B (bottom), output nodes $O_1$ (top) and $O_2$ (bottom).

- $G_{m2}$: input $v_A - v_B$ plus its noise $V_{n2}$; it drives $O_1$, $O_2$, each loaded by $R_0\parallel C_1$. Call this impedance $Z_L = R_0\parallel(1/sC_1)$.
- $G_{m1}$: input taken from the output lines (cross-connected so that the loop is negative) plus its noise $V_{n1}$; it drives A and B, each loaded by $R_0$.

Differential variables: port voltage $v_d = v_A - v_B$, output $v_o = v_{O1} - v_{O2}$, and port current $I_{in}$ entering A and leaving B. Gains: $A_1 = G_{m1}R_0$ and $A_2 = G_{m2}Z_L$.

<!-- diagram: diagram-01.cir -->

(Half circuit: node A with $I_{in}$, $R_0$, and the current of $G_{m1}$, whose input is $v_{O1}$ minus half of $V_{n1}$; node $O_1$ with $R_0\parallel C_1$ and the current of $G_{m2}$, whose input is $v_A$ plus half of $V_{n2}$.)

### Step 2 — Circuit equations with noise

**Stage $G_{m2}$.** Its differential input is $v_d + V_{n2}$. The output currents $\mp G_{m2}(v_d + V_{n2})/2$ flow into $Z_L$ on each side:

$$
\begin{aligned}
v_{O1} &= -\tfrac12G_{m2}Z_L\,(v_d + V_{n2}), \qquad v_{O2} = +\tfrac12G_{m2}Z_L\,(v_d + V_{n2}),\\
v_o &= -A_2\,(v_d + V_{n2}) .
\end{aligned}
$$

**Stage $G_{m1}$.** Its "+" input is connected to $O_2$ and its "−" input to $O_1$, so its differential input is $v_{O2} - v_{O1} + V_{n1} = -v_o + V_{n1}$. It injects $-G_{m1}(-v_o + V_{n1})/2$ into A and $+G_{m1}(-v_o + V_{n1})/2$ into B.

**KCL at A and at B** (injected currents equal the current through $R_0$):

$$
\begin{aligned}
I_{in} - \tfrac12G_{m1}(-v_o + V_{n1}) &= \frac{v_A}{R_0},\\
-I_{in} + \tfrac12G_{m1}(-v_o + V_{n1}) &= \frac{v_B}{R_0}.
\end{aligned}
$$

Subtract the second from the first and multiply by $R_0$:

$$
\begin{aligned}
2I_{in} - G_{m1}(-v_o + V_{n1}) &= \frac{v_d}{R_0}\\
v_d &= 2R_0I_{in} + A_1v_o - A_1V_{n1} .
\end{aligned}
$$

These two equations, $v_o = -A_2(v_d + V_{n2})$ and $v_d = 2R_0I_{in} + A_1v_o - A_1V_{n1}$, describe the whole circuit.

### Step 3 — Input-referred noise voltage (port shorted)

**Short the input port**, so $v_d = 0$. The second equation no longer matters: whatever current $G_{m1}$ produces simply circulates through the short. The first equation gives the output noise:

$$v_{o,n}\big|_{short} = -A_2V_{n2} .$$

**Voltage gain.** A signal voltage $v_d$ applied by an ideal source (noise off) gives $v_o = -A_2v_d$, again independent of $G_{m1}$ because the source fixes $v_d$.

**Divide:**

$$V_{n,in} = \frac{-A_2V_{n2}}{-A_2} = V_{n2} .$$

Physically, an ideal voltage source at the input swamps anything $G_{m1}$ does to the input nodes. So $G_{m1}$'s noise cannot reach the output, and $G_{m2}$'s noise is already at the input.

### Step 4 — Closed-loop transimpedance (port open, noiseless)

Drive the port with a current $I_{in}$ and set $V_{n1} = V_{n2} = 0$:

$$
\begin{aligned}
v_o &= -A_2\,v_d = -A_2\,(2R_0I_{in} + A_1v_o)\\
v_o\,(1 + A_1A_2) &= -2R_0A_2\,I_{in}\\
Z_t = \frac{v_o}{I_{in}} &= -\frac{2R_0A_2}{1 + L}, \qquad L = A_1A_2 .
\end{aligned}
$$

$L$ is the loop gain. This is the open-loop transimpedance ($2R_0$ times $A_2$) divided by $1 + L$.

### Step 5 — Output noise with the port open

Set $I_{in} = 0$ and keep the noise sources:

$$
\begin{aligned}
v_o &= -A_2\,(v_d + V_{n2}) = -A_2\,(A_1v_o - A_1V_{n1} + V_{n2})\\
v_o\,(1 + L) &= -A_2\,(V_{n2} - A_1V_{n1})\\
v_{o,n}\big|_{open} &= -\frac{A_2\,(V_{n2} - A_1V_{n1})}{1 + L} .
\end{aligned}
$$

### Step 6 — Input-referred noise current

The input-referred current is the current that, flowing into the open port of the noiseless circuit, produces the same output noise:

$$
\begin{aligned}
I_{n,in} &= \frac{v_{o,n}|_{open}}{Z_t} = \frac{-A_2(V_{n2} - A_1V_{n1})/(1 + L)}{-2R_0A_2/(1 + L)}\\
&= \frac{V_{n2} - A_1V_{n1}}{2R_0}\\
&= \frac{V_{n2}}{2R_0} - \frac{G_{m1}V_{n1}}{2} .
\end{aligned}
$$

The loop gain $1 + L$ and the load $Z_L$ (and with it $C_1$) cancel. The sign of the $V_{n1}$ term is only a polarity convention for $V_{n1}$.

**Power spectral density.** $V_{n1}$ and $V_{n2}$ come from different transistors and are uncorrelated, so

$$\overline{I_{n,in}^2} = \frac{G_{m1}^2\,\overline{V_{n1}^2}}{4} + \frac{\overline{V_{n2}^2}}{4R_0^2} .$$

**Which term dominates?** The ratio of the two amplitudes is $V_{n2}/(G_{m1}R_0V_{n1})$. For comparable $V_{n1}$ and $V_{n2}$ and $G_{m1}R_0 \gg 1$ (the stage's intrinsic gain), the second term is negligible and $\overline{I_{n,in}^2} \approx G_{m1}^2\overline{V_{n1}^2}/4$.

### Step 7 — Interpretation

- **Norton view of $G_{m1}$'s noise.** $V_{n1}$ at the input of $G_{m1}$ makes $G_{m1}$ push a current $G_{m1}V_{n1}/2$ into one input node and pull it from the other, which is literally a noise current at the input port. That is why it appears in $I_{n,in}$ and not in $V_{n,in}$. This is the usual behaviour of shunt feedback: the noise of the feedback transconductor shows up as an input noise *current*.
- **The $V_{n2}/(2R_0)$ term.** With the port open, the input sees its own open-loop resistance $2R_0$; a current $V_{n2}/(2R_0)$ through it would produce a voltage $V_{n2}$, so $G_{m2}$'s noise needs a current component to be represented when the source impedance is large. Because it comes from the same $V_{n2}$, this part of $I_{n,in}$ is **fully correlated** with $V_{n,in}$.
- **Definition of $G_m$.** Here $G_m$ is the transconductance of each input transistor, so a differential input produces $G_mv_d/2$ per output. If $G_m$ were instead defined by the differential output current, the current term would read $G_{m1}V_{n1}$; only the factor 2 changes.

### Result

$$\overline{V_{n,in}^2} = \overline{V_{n2}^2},$$

$$I_{n,in} = \frac{G_{m1}V_{n1}}{2} + \frac{V_{n2}}{2R_0}\ \ (\text{signs by convention}),\qquad \overline{I_{n,in}^2} = \frac{G_{m1}^2\overline{V_{n1}^2}}{4} + \frac{\overline{V_{n2}^2}}{4R_0^2} \approx \frac{G_{m1}^2\overline{V_{n1}^2}}{4},$$

where the approximation holds when $G_{m1}^2R_0^2\overline{V_{n1}^2} \gg \overline{V_{n2}^2}$. The $V_{n2}$ part of the current is correlated with $V_{n,in}$. $C_1$ and the loop gain do not appear in the input-referred quantities.

**Common mistake.** Including $V_{n1}$ in the input-referred noise *voltage* (for example $V_{n1} + V_{n2}$, or $V_{n1}G_{m1}/G_{m2}$). With the input port shorted, the noise current of $G_{m1}$ flows into the short and never reaches $G_{m2}$; it can only be represented by an input noise current.

**Common mistake.** Claiming that the feedback reduces the noise by the loop gain. The factor $1 + L$ divides the output noise and the transimpedance equally, so it cancels from $I_{n,in}$. Feedback with a noiseless loop changes the gain, not the input-referred noise.

**Common mistake.** Quoting the open-circuit noise voltage at the port, which contains $V_{n1}$ and a factor $1/(1 + L)$, as the input-referred noise voltage. That quantity is a Thevenin port voltage, not $V_{n,in}$, which is defined with the input shorted.
