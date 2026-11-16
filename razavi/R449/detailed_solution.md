# Detailed solution - R449

**Approach.** Model the five-transistor op amp as a single-pole transconductance amplifier, a current $g_{m1}(v_{in} - v_X)$ into $R_{out} = r_{O2}\parallel r_{O4}$. The output drives the capacitive divider $C_1$–$C_2$, whose midpoint X feeds the inverting input; KCL at the output gives a first-order closed-loop response whose time constant is the answer.

### Step 1 — Feedback polarity

Raising the gate of $M_1$ raises $I_{D1}$, which the mirror copies into $M_4$, pushing the output up; so the gate of $M_1$ is the non-inverting input and the gate of $M_2$ (node X) the inverting one. Feeding part of $V_{out}$ back to X is negative feedback: a non-inverting amplifier with capacitive feedback. The bias network at X is assumed to have a very high impedance (an ac open circuit).

### Step 2 — Op-amp parameters

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}, \qquad \frac{W}{L} = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 ,$$

$$g_{m1} = g_{m2} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{S} = 5.18\ \mathrm{mS},$$

$$
\begin{aligned}
r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
R_{out} &= r_{O2}\parallel r_{O4} = \frac{20\times10}{20+10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega .
\end{aligned}
$$

With the mirror load the short-circuit output current is $g_{m1}(v_{in} - v_X)$, so $G_m = g_{m1}$ and

$$A_v = g_{m1}R_{out} = (5.18\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 34.5 .$$

Transistor capacitances (including the mirror pole) are neglected, so $C_1$ and $C_2$ are the only capacitances.

### Step 3 — What the output sees: load capacitance and feedback factor

X connects only to $C_1$, $C_2$ and the gate of $M_2$, so the same current flows through both capacitors:

$$v_X = \frac{1/(sC_2)}{1/(sC_1) + 1/(sC_2)}\,v_{out} = \frac{C_1}{C_1 + C_2}\,v_{out} = \beta\,v_{out},$$

$$\beta = \frac{C_1}{C_1 + C_2} = \frac{0.5\ \mathrm{pF}}{0.5\ \mathrm{pF} + 0.5\ \mathrm{pF}} = 0.5 ,$$

and the output drives $C_1$ in series with $C_2$:

$$C_s = \frac{C_1C_2}{C_1 + C_2} = \frac{(0.5\ \mathrm{pF})(0.5\ \mathrm{pF})}{1\ \mathrm{pF}} = 0.25\ \mathrm{pF}.$$

### Step 4 — Small-signal model and KCL at the output

The controlled current $g_{m1}(v_{in} - v_X)$ is injected into the output, which has $R_{out}$ to ground and the $C_1$–$C_2$ divider.

<!-- diagram: diagram-01.cir -->

KCL at the output:

$$
\begin{aligned}
g_{m1}(v_{in} - \beta v_{out}) &= \frac{v_{out}}{R_{out}} + sC_s\,v_{out}\\
g_{m1}v_{in} &= v_{out}\left(\frac{1}{R_{out}} + g_{m1}\beta + sC_s\right)\\
\frac{v_{out}}{v_{in}} &= \frac{g_{m1}R_{out}}{1 + \beta g_{m1}R_{out} + sR_{out}C_s}\\
\frac{v_{out}}{v_{in}} &= \frac{A_v}{1 + \beta A_v}\cdot\frac{1}{1 + s\,\dfrac{R_{out}C_s}{1 + \beta A_v}} .
\end{aligned}
$$

This is a single-pole response with closed-loop dc gain $A_v/(1 + \beta A_v)$ and time constant

$$\tau = \frac{R_{out}C_s}{1 + \beta A_v} ,$$

the open-loop $R_{out}C_s$ divided by $1 + \beta A_v$, the factor by which feedback lowers the output resistance.

### Step 5 — Numerical time constant

$$
\begin{aligned}
R_{out}C_s &= (6.67\ \mathrm{k}\Omega)(0.25\ \mathrm{pF}) = 1.667\ \mathrm{ns} \quad\text{(open-loop time constant)},\\
1 + \beta A_v &= 1 + (0.5)(34.5) = 18.26,\\
\tau &= \frac{1.667\ \mathrm{ns}}{18.26} = 91\ \mathrm{ps}.
\end{aligned}
$$

For $\beta A_v \gg 1$,

$$\tau \approx \frac{R_{out}C_s}{\beta g_{m1}R_{out}} = \frac{C_s}{\beta g_{m1}} = \frac{C_1C_2/(C_1 + C_2)}{g_{m1}C_1/(C_1 + C_2)} = \frac{C_2}{g_{m1}} = \frac{0.5\ \mathrm{pF}}{5.18\ \mathrm{mS}} = 97\ \mathrm{ps},$$

about 6 % above the exact value because $\beta A_v = 17$ is only moderately large.

### Step 6 — Step response

For a small input step of height $V_0$ (the input pair stays linear, so there is no slewing):

$$V_{out}(t) = \frac{A_v}{1 + \beta A_v}\,V_0\left(1 - e^{-t/\tau}\right), \qquad \frac{A_v}{1 + \beta A_v} = \frac{34.5}{18.26} = 1.89 .$$

The output rises with $\tau \approx 91$ ps toward $1.89V_0$, slightly below the ideal $1 + C_2/C_1 = 2$ because of the finite open-loop gain.

### Result

$$\tau = \frac{R_{out}\,\dfrac{C_1C_2}{C_1 + C_2}}{1 + A_v\dfrac{C_1}{C_1 + C_2}} = \frac{(6.67\ \mathrm{k}\Omega)(0.25\ \mathrm{pF})}{1 + 0.5\times34.5} \approx 91\ \mathrm{ps}$$

(≈ $C_2/g_{m1} = 97$ ps for large loop gain), with $g_{m1} = 5.18$ mS, $R_{out} = r_{O2}\parallel r_{O4} = 6.67$ kΩ and $A_v = 34.5$.

**Common mistake.** Giving the open-loop time constant $R_{out}C_s = 1.67$ ns. Closing the loop lowers the effective output resistance, and the time constant, by $1 + \beta A_v \approx 18$.

**Common mistake.** Using $C_1 + C_2 = 1$ pF or $C_1$ alone as the load. X is a floating node driven only by the divider, so the output sees $C_1$ in series with $C_2$.

**Common mistake.** Taking the feedback factor as 1 or 2. The divider returns $\beta = C_1/(C_1 + C_2) = 0.5$; 2 is the ideal closed-loop *gain* $1/\beta$.
