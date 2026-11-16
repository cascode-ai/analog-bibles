# Detailed solution - R407

**Approach.** Represent the circuit's noise by a voltage $V_{n,in}$ in series with the input port and a current $I_{n,in}$ across it. $V_{n,in}$ follows with the port **shorted** (output noise divided by the voltage gain), and $I_{n,in}$ with the port **open** (output noise divided by the transimpedance). Each stage's noise is its input-referred voltage, $V_{n1}$ or $V_{n2}$, in series with that stage's differential input.

### Step 1 — Model of the circuit with its noise sources

Each stage sends $\mp G_mv_d/2$ into its two output nodes for a differential input $v_d$, and each output has $R_0$ to ground (differential gain $-G_mR_0$). $V_{n1}$ and $V_{n2}$ include the noise of all transistors of each stage, including the loads whose output resistances form the $R_0$'s, so the $R_0$'s add no further noise and both stages are otherwise noiseless.

Call the input terminals A (top) and B (bottom) and the outputs of $G_{m2}$ $O_1$ (top) and $O_2$ (bottom).

- $G_{m2}$: input $v_A - v_B$ plus its noise $V_{n2}$; it drives $O_1$, $O_2$, each loaded by $Z_L = R_0\parallel(1/sC_1)$.
- $G_{m1}$: input from the output lines (cross-connected so that the loop is negative) plus its noise $V_{n1}$; it drives A and B, each loaded by $R_0$.

Differential variables: port voltage $v_d = v_A - v_B$, output $v_o = v_{O1} - v_{O2}$, and port current $I_{in}$ entering A and leaving B. Gains: $A_1 = G_{m1}R_0$ and $A_2 = G_{m2}Z_L$.

<!-- diagram: diagram-01.cir -->

(Half circuit: node A with $I_{in}$, $R_0$ and the current of $G_{m1}$, whose input is $v_{O1}$ minus half of $V_{n1}$; node $O_1$ with $R_0\parallel C_1$ and the current of $G_{m2}$, whose input is $v_A$ plus half of $V_{n2}$.)

### Step 2 — Circuit equations with noise

**Stage $G_{m2}$.** Its differential input is $v_d + V_{n2}$, and its output currents $\mp G_{m2}(v_d + V_{n2})/2$ flow into $Z_L$ on each side:

$$
\begin{aligned}
v_{O1} &= -\tfrac12G_{m2}Z_L\,(v_d + V_{n2}), \qquad v_{O2} = +\tfrac12G_{m2}Z_L\,(v_d + V_{n2}),\\
v_o &= -A_2\,(v_d + V_{n2}) .
\end{aligned}
$$

**Stage $G_{m1}$.** Its "+" input is at $O_2$ and its "−" input at $O_1$, so its differential input is $v_{O2} - v_{O1} + V_{n1} = -v_o + V_{n1}$. It injects $-G_{m1}(-v_o + V_{n1})/2$ into A and $+G_{m1}(-v_o + V_{n1})/2$ into B.

**KCL at A and at B:**

$$
\begin{aligned}
I_{in} - \tfrac12G_{m1}(-v_o + V_{n1}) &= \frac{v_A}{R_0},\\
-I_{in} + \tfrac12G_{m1}(-v_o + V_{n1}) &= \frac{v_B}{R_0}.
\end{aligned}
$$

Subtracting and multiplying by $R_0$:

$$
\begin{aligned}
2I_{in} - G_{m1}(-v_o + V_{n1}) &= \frac{v_d}{R_0}\\
v_d &= 2R_0I_{in} + A_1v_o - A_1V_{n1} .
\end{aligned}
$$

These two equations, $v_o = -A_2(v_d + V_{n2})$ and $v_d = 2R_0I_{in} + A_1v_o - A_1V_{n1}$, describe the whole circuit.

### Step 3 — Input-referred noise voltage (port shorted)

With the port shorted, $v_d = 0$ and whatever current $G_{m1}$ produces circulates through the short. The first equation gives

$$v_{o,n}\big|_{short} = -A_2V_{n2} .$$

A signal $v_d$ from an ideal source (noise off) gives $v_o = -A_2v_d$, again independent of $G_{m1}$. Dividing:

$$V_{n,in} = \frac{-A_2V_{n2}}{-A_2} = V_{n2} .$$

### Step 4 — Closed-loop transimpedance (port open, noiseless)

Drive the port with $I_{in}$ and set $V_{n1} = V_{n2} = 0$:

$$
\begin{aligned}
v_o &= -A_2\,v_d = -A_2\,(2R_0I_{in} + A_1v_o)\\
v_o\,(1 + A_1A_2) &= -2R_0A_2\,I_{in}\\
Z_t = \frac{v_o}{I_{in}} &= -\frac{2R_0A_2}{1 + L}, \qquad L = A_1A_2 ,
\end{aligned}
$$

the open-loop transimpedance $2R_0A_2$ divided by one plus the loop gain $L$.

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

$I_{n,in}$ is the port current that produces the same open-port output noise in the noiseless circuit:

$$
\begin{aligned}
I_{n,in} &= \frac{v_{o,n}|_{open}}{Z_t} = \frac{-A_2(V_{n2} - A_1V_{n1})/(1 + L)}{-2R_0A_2/(1 + L)}\\
&= \frac{V_{n2} - A_1V_{n1}}{2R_0}\\
&= \frac{V_{n2}}{2R_0} - \frac{G_{m1}V_{n1}}{2} .
\end{aligned}
$$

The loop gain $1 + L$ and the load $Z_L$ (with it $C_1$) cancel. The sign of the $V_{n1}$ term is only a polarity convention. $V_{n1}$ and $V_{n2}$ are uncorrelated, so

$$\overline{I_{n,in}^2} = \frac{G_{m1}^2\,\overline{V_{n1}^2}}{4} + \frac{\overline{V_{n2}^2}}{4R_0^2} .$$

The amplitude ratio of the two terms is $V_{n2}/(G_{m1}R_0V_{n1})$: for comparable $V_{n1}$, $V_{n2}$ and $G_{m1}R_0 \gg 1$, $\overline{I_{n,in}^2} \approx G_{m1}^2\overline{V_{n1}^2}/4$.

### Step 7 — Interpretation

- **Norton view of $G_{m1}$'s noise.** $V_{n1}$ makes $G_{m1}$ push $G_{m1}V_{n1}/2$ into one input node and pull it from the other: literally a noise current at the input port. As usual in shunt feedback, the feedback transconductor's noise appears as an input noise *current*.
- **The $V_{n2}/(2R_0)$ term.** With the port open, the input sees its open-loop resistance $2R_0$, so $G_{m2}$'s noise needs a current component $V_{n2}/(2R_0)$ when the source impedance is large. It is **fully correlated** with $V_{n,in}$.
- **Definition of $G_m$.** Here $G_m$ is the transconductance of each input transistor. If $G_m$ were defined by the differential output current, the current term would read $G_{m1}V_{n1}$; only the factor 2 changes.

### Result

$$\overline{V_{n,in}^2} = \overline{V_{n2}^2},$$

$$I_{n,in} = \frac{G_{m1}V_{n1}}{2} + \frac{V_{n2}}{2R_0}\ \ (\text{signs by convention}),\qquad \overline{I_{n,in}^2} = \frac{G_{m1}^2\overline{V_{n1}^2}}{4} + \frac{\overline{V_{n2}^2}}{4R_0^2} \approx \frac{G_{m1}^2\overline{V_{n1}^2}}{4},$$

where the approximation holds when $G_{m1}^2R_0^2\overline{V_{n1}^2} \gg \overline{V_{n2}^2}$. The $V_{n2}$ part of the current is correlated with $V_{n,in}$. $C_1$ and the loop gain do not appear in the input-referred quantities.

**Common mistake.** Including $V_{n1}$ in the input-referred noise *voltage* (for example $V_{n1} + V_{n2}$, or $V_{n1}G_{m1}/G_{m2}$). With the port shorted, $G_{m1}$'s noise current flows into the short and never reaches $G_{m2}$.

**Common mistake.** Claiming that the feedback reduces the noise by the loop gain. $1 + L$ divides the output noise and the transimpedance equally, so it cancels from $I_{n,in}$.

**Common mistake.** Quoting the open-circuit noise voltage at the port, which contains $V_{n1}$ and a factor $1/(1 + L)$, as $V_{n,in}$. That is a Thevenin port voltage; $V_{n,in}$ is defined with the input shorted.
