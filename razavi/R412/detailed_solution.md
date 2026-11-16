# Detailed solution - R412

**Approach.** Find the bias point (it sets the body effect of $M_1$), then treat the circuit as a series–shunt feedback amplifier: the divider $R_2$–$R_1$ samples $V_{out}$ and returns a fraction to the source of $M_1$. Compute the loaded open-loop gain, the loop gain (including the effect of $g_{mb1}$ on the returned signal), the closed-loop gain and the output resistance, and confirm them by exact nodal analysis.

### Step 1 — Bias point

Call the drain of $M_1$ (gate of $M_2$) node A and the junction of $R_2$ and $R_1$ node B. At the output $M_4$ supplies 0.5 mA and $M_2$ sinks 0.5 mA, so no dc current flows in $R_2$ and $V_{out} = V_B$; all of $I_{D1} = 0.5$ mA flows in $R_1$:

$$V_B = V_{out} = (0.5\ \mathrm{mA})(0.973\ \mathrm{k\Omega}) = 0.487\ \mathrm{V}.$$

So $V_{SB1} = 0.487$ V. ($R_1 = 0.973\ \mathrm{k\Omega}$ is the midpoint of the allowed range 0.546–1.40 kΩ: $M_2$ needs $V_{out} \ge 0.273$ V and $M_1$ needs $V_B \le 0.70$ V.)

### Step 2 — Small-signal parameters

All devices carry 0.5 mA with $W/L = 100$:

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
\eta &= \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB1}}} = \frac{0.45}{2\sqrt{0.9 + 0.487}} = \frac{0.45}{2(1.1775)} = 0.191,\\
g_{mb1} &= \eta\,g_{m1} = 0.191\times3.66\ \mathrm{mS} = 0.70\ \mathrm{mS},\\
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad
r_{O3} = r_{O4} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.
\end{aligned}
$$

### Step 3 — Identify the feedback

The forward path is two common-source stages ($M_1$ to A, $M_2$ to $V_{out}$), hence non-inverting. $R_2$–$R_1$ sense the output voltage and apply a voltage to the source of $M_1$, where it subtracts from the input ($v_{GS1} = v_{in} - v_B$): **series–shunt** negative feedback. With B unloaded,

$$\beta = \frac{R_1}{R_1 + R_2} = \frac{0.973}{3.973} = 0.245 ,$$

and the ideal closed-loop gain would be $1/\beta = 1 + R_2/R_1 = 4.08$.

### Step 4 — Open-loop gain with the loading of the divider

Two-port loading:

- at the source of $M_1$ (output shorted): $R_{deg} = R_1\parallel R_2 = \dfrac{0.973\times3}{3.973}\ \mathrm{k\Omega} = 0.735\ \mathrm{k\Omega}$;
- at the output (B opened): $R_1 + R_2 = 3.97\ \mathrm{k\Omega}$ to ground.

**Stage 1** (degenerated common source, with body effect and $r_{O1}$):

$$
\begin{aligned}
G_{m1} &= \frac{g_{m1}}{1 + (g_{m1} + g_{mb1})R_{deg} + R_{deg}/r_{O1}} = \frac{3.66\ \mathrm{mS}}{1 + (4.36\ \mathrm{mS})(0.735\ \mathrm{k\Omega}) + 0.037} = \frac{3.66}{4.24}\ \mathrm{mS} = 0.863\ \mathrm{mS},\\
R_{d1} &= \big[1 + (g_{m1} + g_{mb1})R_{deg}\big]r_{O1} + R_{deg} = (4.20)(20\ \mathrm{k\Omega}) + 0.735\ \mathrm{k\Omega} = 84.8\ \mathrm{k\Omega},\\
R_A &= r_{O3}\parallel R_{d1} = \frac{10\times84.8}{94.8}\ \mathrm{k\Omega} = 8.95\ \mathrm{k\Omega},\\
A_1 &= -G_{m1}R_A = -(0.863\ \mathrm{mS})(8.95\ \mathrm{k\Omega}) = -7.72 .
\end{aligned}
$$

**Stage 2** (common source $M_2$):

$$
\begin{aligned}
R_L &= r_{O2}\parallel r_{O4}\parallel(R_1 + R_2) = \frac{1}{1/20 + 1/10 + 1/3.973}\ \mathrm{k\Omega} = \frac{1}{0.4017}\ \mathrm{k\Omega} = 2.49\ \mathrm{k\Omega},\\
A_2 &= -g_{m2}R_L = -(3.66\ \mathrm{mS})(2.49\ \mathrm{k\Omega}) = -9.11 ,\\
A_{open} &= A_1A_2 = (-7.72)(-9.11) = 70.4 .
\end{aligned}
$$

### Step 5 — Loop gain, closed-loop gain and output resistance

**How $g_{mb1}$ enters the loop.** The drain current of $M_1$ responds to the gate with weight $g_{m1}$ but to the source with weight $g_{m1} + g_{mb1}$. Ignoring $r_{O1}$, with $v_B = R_{deg}\,i_{d1} + \beta v_{out}$ (two-port model of the divider):

$$
\begin{aligned}
i_{d1} &= g_{m1}v_{in} - (g_{m1} + g_{mb1})(R_{deg}\,i_{d1} + \beta v_{out})\\
i_{d1} &= G_{m1}\big[v_{in} - (1 + \eta)\beta\,v_{out}\big].
\end{aligned}
$$

The returned voltage is effectively multiplied by $(1 + \eta)$, so

$$
\begin{aligned}
T &= (1 + \eta)\,\beta\,A_{open} = 1.191\times0.245\times70.4 = 20.5 ,\\
A_v &= \frac{A_{open}}{1 + T} = \frac{70.4}{21.5} = 3.27 ,\\
R_{out} &= \frac{R_L}{1 + T} = \frac{2.49\ \mathrm{k\Omega}}{21.5} = 116\ \Omega .
\end{aligned}
$$

For infinite loop gain, the gain would tend to $(1 + R_2/R_1)/(1 + \eta) = 4.08/1.191 = 3.43$, not 4.08.

### Step 6 — Check by exact nodal analysis

$M_1$ is a current $g_{m1}(v_{in} - v_B) - g_{mb1}v_B$ from A to B with $r_{O1}$ in parallel; $M_3$ is $r_{O3}$ from A to ground; $M_2$ is a current $g_{m2}v_A$ from the output to ground with $r_{O2}$; $M_4$ is $r_{O4}$ from the output to ground.

<!-- diagram: diagram-01.cir -->

Units: mS and kΩ. $g_{m1} + g_{mb1} + 1/r_{O1} = 3.661 + 0.699 + 0.05 = 4.410$ mS, $1/R_1 + 1/R_2 = 1.028 + 0.333 = 1.361$ mS.

**KCL at A** ($r_{O3}$ current plus $M_1$ current is zero):

$$
\begin{aligned}
0.1\,v_A + 3.661\,v_{in} - 4.410\,v_B + 0.05\,v_A &= 0\\
v_A &= 29.40\,v_B - 24.40\,v_{in} .
\end{aligned}
$$

**KCL at B.** The $M_1$ current, $-0.1\,v_A$ by KCL at A, flows into $R_1$ and $R_2$:

$$
\begin{aligned}
-0.1\,v_A &= 1.361\,v_B - 0.333\,v_{out}\\
v_A &= -13.61\,v_B + 3.333\,v_{out} .
\end{aligned}
$$

Equating the two expressions for $v_A$:

$$
\begin{aligned}
43.01\,v_B &= 24.40\,v_{in} + 3.333\,v_{out}\\
v_B &= 0.5674\,v_{in} + 0.0775\,v_{out} .
\end{aligned}
$$

**KCL at the output** ($1/r_{O2} + 1/r_{O4} + 1/R_2 = 0.483$ mS):

$$3.661\,v_A + 0.483\,v_{out} - 0.333\,v_B = 0 .$$

Inserting $v_A = -13.61v_B + 3.333v_{out}$:

$$
\begin{aligned}
-49.82\,v_B + 12.20\,v_{out} + 0.483\,v_{out} - 0.333\,v_B &= 0\\
v_B &= \frac{12.69}{50.16}\,v_{out} = 0.2529\,v_{out} .
\end{aligned}
$$

**Combine:**

$$
\begin{aligned}
0.2529\,v_{out} - 0.0775\,v_{out} &= 0.5674\,v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= \frac{0.5674}{0.1754} = 3.23 .
\end{aligned}
$$

**Output resistance.** With $v_{in} = 0$: $v_B = 0.0775\,v_{out}$ and $v_A = -13.61(0.0775\,v_{out}) + 3.333\,v_{out} = 2.279\,v_{out}$. A test current $I_X$ into the output must satisfy

$$
\begin{aligned}
I_X &= g_{m2}v_A + 0.483\,v_{out} - 0.333\,v_B = (8.341 + 0.483 - 0.026)\,v_{out} = 8.80\,v_{out}\ \mathrm{mA},\\
R_{out} &= \frac{1}{8.80\ \mathrm{mS}} = 0.114\ \mathrm{k\Omega} = 114\ \Omega .
\end{aligned}
$$

The feedback estimates (3.27, 116 Ω) agree within about 1–2 %. Without the body effect the same analysis gives 3.83 and 120 Ω. With $\lambda = 0$ (ideal current sources) the open-loop gain would be infinite, giving exactly $A_v = 3.43$ and $R_{out} = 0$; the finite output resistances limit the loop gain to about 20.

### Result

$$A_v = \frac{V_{out}}{V_{in}} \approx +3.2\ \ (3.23\ \text{exact};\ 3.27\ \text{from the feedback analysis}),\qquad R_{out} \approx 0.11\ \mathrm{k\Omega}\ \ (114\ \Omega),$$

with $A_{open} \approx 70$, $\beta = 0.245$ and loop gain $\approx 20.5$. The gain is below the ideal $1 + R_2/R_1 = 4.08$, partly because the loop gain is finite and partly because the body effect of $M_1$ strengthens the feedback by $1 + \eta = 1.19$.

**Common mistake.** Using the plain formula $A_{open}/(1 + \beta A_{open})$ with $g_{mb1}$ only in the degeneration (about 3.86 and 137 Ω). The returned voltage acts on the source, with weight $g_{m1} + g_{mb1}$, so it counts $(1 + \eta)$ times more than a gate signal.

**Common mistake.** Taking $\beta = R_2/(R_1 + R_2)$. The voltage returned to the source of $M_1$ is the one across $R_1$, so $\beta = R_1/(R_1 + R_2) = 0.245$.

**Common mistake.** Getting a gain above $1 + R_2/R_1 = 4.08$, or an inverting gain. Negative feedback brings the gain up to $1/\beta$ only from below, and the two inverting stages make it positive.
