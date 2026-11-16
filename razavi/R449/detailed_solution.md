# Detailed solution - R449

**Approach.** Model the five-transistor op amp ($M_1$–$M_4$ with tail $I_{SS}$) as a single-pole transconductance amplifier: a current $g_{m1}(v_{in} - v_X)$ driving an output resistance $R_{out} = r_{O2}\parallel r_{O4}$. The output drives the capacitive divider $C_1$–$C_2$, whose midpoint X is fed back to the inverting input. Writing KCL at the output gives a first-order closed-loop transfer function, and its time constant is the answer.

### Step 1 — Reading the circuit

From the figure:

- $M_1$–$M_2$: NMOS differential pair with tail current $I_{SS}$.
- $M_3$–$M_4$: PMOS current-mirror load; $M_3$ is diode-connected on the $M_1$ side, and the output is taken at the drains of $M_2$ and $M_4$.
- $V_{in}$ drives the gate of $M_1$. The gate of $M_2$ is node X, the midpoint of the capacitive divider: $C_1$ from $V_{out}$ to X and $C_2$ from X to ground.

**Which input is which?** Raising the gate of $M_1$ increases $I_{D1}$; the mirror copies this into $M_4$, which pushes the output up. So the gate of $M_1$ is the **non-inverting** input, and the gate of $M_2$ (node X) is the **inverting** input. Feeding a fraction of $V_{out}$ back to X is therefore negative feedback: this is a non-inverting amplifier with capacitive feedback. The bias network that sets the DC voltage of X is assumed to have a very high impedance, so it is an AC open circuit.

### Step 2 — Op-amp parameters

Each side carries half the tail current:

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}, \qquad \frac{W}{L} = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 .$$

**Transconductance** of the input devices (square law, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$):

$$g_{m1} = g_{m2} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{S} = 5.18\ \mathrm{mS}.$$

**Output resistances** ($r_O = 1/(\lambda I_D)$):

$$
\begin{aligned}
r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
R_{out} &= r_{O2}\parallel r_{O4} = \frac{20\times10}{20+10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega .
\end{aligned}
$$

**Transconductance of the op amp.** For a differential input $v_{in} - v_X$, $M_1$ and $M_2$ change their currents by $\pm g_{m1}(v_{in} - v_X)/2$. The mirror copies $M_1$'s change to the output, where it adds to $M_2$'s change. The output short-circuit current is therefore $g_{m1}(v_{in} - v_X)$, so $G_m = g_{m1}$.

**Open-loop gain:**

$$A_v = g_{m1}R_{out} = (5.18\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 34.5 .$$

As instructed, transistor capacitances (including the mirror pole at the gates of $M_3$/$M_4$) are neglected, so the only capacitance in the circuit is $C_1$, $C_2$.

### Step 3 — What the output sees: load capacitance and feedback factor

Node X is connected only to $C_1$, $C_2$ and the gate of $M_2$ (which draws no current, and whose capacitance is neglected). Therefore:

**Voltage at X (capacitive divider).** The same current flows through $C_1$ and $C_2$, so the impedances divide the voltage:

$$v_X = \frac{1/(sC_2)}{1/(sC_1) + 1/(sC_2)}\,v_{out} = \frac{C_1}{C_1 + C_2}\,v_{out} = \beta\,v_{out},$$

$$\beta = \frac{C_1}{C_1 + C_2} = \frac{0.5\ \mathrm{pF}}{0.5\ \mathrm{pF} + 0.5\ \mathrm{pF}} = 0.5 .$$

**Load capacitance.** The output drives $C_1$ in series with $C_2$:

$$C_s = \frac{C_1C_2}{C_1 + C_2} = \frac{(0.5\ \mathrm{pF})(0.5\ \mathrm{pF})}{1\ \mathrm{pF}} = 0.25\ \mathrm{pF}.$$

### Step 4 — Small-signal model and KCL at the output

Model: a controlled current $g_{m1}(v_{in} - v_X)$ injected into the output node; $R_{out}$ from the output to ground; $C_1$ from the output to X; $C_2$ from X to ground.

<!-- diagram: diagram-01.cir -->

KCL at the output: the injected current equals the current in $R_{out}$ plus the current into the capacitor branch:

$$
\begin{aligned}
g_{m1}(v_{in} - \beta v_{out}) &= \frac{v_{out}}{R_{out}} + sC_s\,v_{out}\\
g_{m1}v_{in} &= v_{out}\left(\frac{1}{R_{out}} + g_{m1}\beta + sC_s\right)\\
\frac{v_{out}}{v_{in}} &= \frac{g_{m1}R_{out}}{1 + \beta g_{m1}R_{out} + sR_{out}C_s}\\
\frac{v_{out}}{v_{in}} &= \frac{A_v}{1 + \beta A_v}\cdot\frac{1}{1 + s\,\dfrac{R_{out}C_s}{1 + \beta A_v}} .
\end{aligned}
$$

This is a single-pole response with closed-loop DC gain $A_v/(1 + \beta A_v)$ and time constant

$$\tau = \frac{R_{out}C_s}{1 + \beta A_v} .$$

**Intuition.** Without feedback, the output node would charge with $R_{out}C_s$. Feedback makes the output resistance look $(1 + \beta A_v)$ times smaller, so the node settles $(1 + \beta A_v)$ times faster.

### Step 5 — Numerical time constant

$$
\begin{aligned}
R_{out}C_s &= (6.67\ \mathrm{k}\Omega)(0.25\ \mathrm{pF}) = 1.667\ \mathrm{ns} \quad\text{(open-loop time constant)},\\
1 + \beta A_v &= 1 + (0.5)(34.5) = 18.26,\\
\tau &= \frac{1.667\ \mathrm{ns}}{18.26} = 91\ \mathrm{ps}.
\end{aligned}
$$

**Large-loop-gain approximation.** If $\beta A_v \gg 1$,

$$\tau \approx \frac{R_{out}C_s}{\beta g_{m1}R_{out}} = \frac{C_s}{\beta g_{m1}} = \frac{C_1C_2/(C_1 + C_2)}{g_{m1}C_1/(C_1 + C_2)} = \frac{C_2}{g_{m1}} = \frac{0.5\ \mathrm{pF}}{5.18\ \mathrm{mS}} = 97\ \mathrm{ps}.$$

The exact value is about 6 % smaller because $\beta A_v = 17$ is only moderately large.

### Step 6 — Step response

For a small input step of height $V_0$:

$$V_{out}(t) = \frac{A_v}{1 + \beta A_v}\,V_0\left(1 - e^{-t/\tau}\right), \qquad \frac{A_v}{1 + \beta A_v} = \frac{34.5}{18.26} = 1.89 .$$

The output rises exponentially with $\tau \approx 91$ ps toward $1.89V_0$, slightly below the ideal $1 + C_2/C_1 = 2$ because of the finite open-loop gain. "Small steps" means the input pair stays in its linear range, so slewing does not occur.

### Result

$$\tau = \frac{R_{out}\,\dfrac{C_1C_2}{C_1 + C_2}}{1 + A_v\dfrac{C_1}{C_1 + C_2}} = \frac{(6.67\ \mathrm{k}\Omega)(0.25\ \mathrm{pF})}{1 + 0.5\times34.5} \approx 91\ \mathrm{ps}$$

(≈ $C_2/g_{m1} = 97$ ps for large loop gain), with $g_{m1} = 5.18$ mS, $R_{out} = r_{O2}\parallel r_{O4} = 6.67$ kΩ and $A_v = 34.5$.

**Common mistake.** Giving the open-loop time constant $R_{out}C_s = 1.67$ ns. With the loop closed, negative feedback lowers the effective output resistance by $1 + \beta A_v \approx 18$, and the time constant shrinks by the same factor.

**Common mistake.** Using the wrong load capacitance: $C_1 + C_2 = 1$ pF (as if both capacitors were tied from the output to ground) or $C_1$ alone (as if X were grounded). X is a floating node driven only by the divider, so the output sees $C_1$ in series with $C_2$.

**Common mistake.** Taking the feedback factor as 1 or 2. The divider returns $\beta = C_1/(C_1 + C_2) = 0.5$ of the output to the inverting input; 2 is the ideal closed-loop *gain* $1/\beta$, not the feedback factor.
