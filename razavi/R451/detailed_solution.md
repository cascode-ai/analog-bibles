# Detailed solution - R451

**Approach.** The argument looks only at the current in the resistor $r_{O2}$. But $r_{O2}$ is just one part of the transistor $M_2$: the other part is the voltage-controlled current source $g_{m2}v_{GS2}$, which sits in parallel with $r_{O2}$, between the same drain and source. We write the complete small-signal equations, compute the true output resistance, and then show numerically that the large current in $r_{O2}$ is cancelled almost exactly by the controlled source, so that very little current actually flows into the drain terminal.

### Step 1 — What the circuit is

From the figure:

- $M_2$ is a cascode device. Its drain is the output, where a step $\Delta V$ is applied, and its source is node X.
- $r_{O1}$ (the output resistance of the lower device) connects X to ground; $r_{O2}$ is drawn explicitly between the drain and source of $M_2$.
- The auxiliary amplifier $A_1$ compares $V_X$ (at its "−" input) with the fixed bias $V_b$ (at its "+" input) and drives the gate of $M_2$.

So $v_G = A_1(V_b - V_X)$, and in small-signal terms ($V_b$ fixed):

$$v_g = -A_1v_X .$$

### Step 2 — Small-signal model of $M_2$, written out completely

The small-signal drain current of $M_2$ (flowing from drain to source) has **two** parts:

$$i_{D2} = \underbrace{g_{m2}v_{GS2}}_{\text{controlled source}} + \underbrace{\frac{v_D - v_X}{r_{O2}}}_{\text{current in } r_{O2}} .$$

Here $g_{m2}$ is the transconductance of $M_2$ and $v_{GS2} = v_g - v_X$. Body effect is neglected; including it would only add $g_{mb2}$ to $g_{m2}$ below. The flawed argument keeps only the second term.

Using $v_g = -A_1v_X$:

$$v_{GS2} = -A_1v_X - v_X = -(1 + A_1)\,v_X .$$

**Model in words:** the test source $v_t = \Delta V$ drives the drain node; $r_{O2}$ and a controlled current $g_{m2}(v_g - v_X)$ both run from the drain to X; $r_{O1}$ runs from X to ground; and an ideal voltage amplifier makes $v_g = -A_1v_X$.

<!-- diagram: diagram-01.cir -->

### Step 3 — KCL at X: the key constraint

The input of $A_1$ draws no current, so the only path out of X is $r_{O1}$. Hence everything that enters the drain terminal must leave through $r_{O1}$:

$$i = i_{D2} = \frac{v_X}{r_{O1}} \qquad\Longrightarrow\qquad v_X = i\,r_{O1}.$$

This alone exposes the flaw: the terminal current $i$ is set by the current in $r_{O1}$, which is $\Delta V_X/r_{O1}$. Since $A_1$ makes $\Delta V_X$ *very small*, the terminal current must also be very small, whatever happens inside $M_2$.

### Step 4 — The output resistance

Substitute $v_{GS2} = -(1 + A_1)v_X$ and $v_X = ir_{O1}$ into the drain-current equation, with $v_D = v_t$:

$$
\begin{aligned}
i &= -(1 + A_1)g_{m2}v_X + \frac{v_t - v_X}{r_{O2}}\\
i &= -(1 + A_1)g_{m2}r_{O1}\,i + \frac{v_t - r_{O1}i}{r_{O2}}\\
ir_{O2} &= -(1 + A_1)g_{m2}r_{O1}r_{O2}\,i + v_t - r_{O1}i\\
v_t &= i\left[r_{O1} + r_{O2} + (1 + A_1)g_{m2}r_{O1}r_{O2}\right].
\end{aligned}
$$

So

$$R_{out} = \frac{v_t}{i} = r_{O1} + r_{O2} + (1 + A_1)g_{m2}r_{O1}r_{O2} \approx (1 + A_1)\,g_{m2}r_{O2}r_{O1}.$$

Setting $A_1 = 0$ recovers the ordinary cascode, $r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}$. The auxiliary amplifier **multiplies** the output resistance by about $1 + A_1$; it does not reduce it to $r_{O2}$.

### Step 5 — Where the "large current in $r_{O2}$" goes

The argument is right that holding X nearly constant makes the current in $r_{O2}$ large: almost all of $\Delta V$ appears across $r_{O2}$, so that current is about $\Delta V/r_{O2}$. But to hold X constant, $A_1$ must pull the gate of $M_2$ *down* as soon as X starts to rise. That makes $v_{GS2} = -(1 + A_1)v_X$ negative, and the controlled source carries a current **in the opposite direction**:

$$g_{m2}v_{GS2} = -(1 + A_1)g_{m2}v_X = -(1 + A_1)g_{m2}r_{O1}\frac{v_t}{R_{out}} \approx -\frac{v_t}{r_{O2}} .$$

The two currents nearly cancel. They circulate inside $M_2$ (down through $r_{O2}$, back up through the controlled source) and never reach the external terminal. What is left over is just $v_t/R_{out}$.

**Numerical illustration** (example values $g_{m2} = 1$ mS, $r_{O1} = r_{O2} = 50\ \mathrm{k}\Omega$, $A_1 = 50$, $\Delta V = 1$ V):

| Quantity | With $A_1 = 50$ | Plain cascode ($A_1 = 0$) |
|---|---|---|
| $R_{out}$ | 127.6 MΩ | 2.6 MΩ |
| $\Delta V_X$ | 0.39 mV | 19.2 mV |
| Current in $r_{O2}$ | +19.99 μA | +19.62 μA |
| Controlled source $g_{m2}v_{GS2}$ | −19.98 μA | −19.23 μA |
| Net terminal current $= \Delta V_X/r_{O1}$ | 0.0078 μA | 0.385 μA |

The current in $r_{O2}$ is indeed slightly *larger* with $A_1$ (as the argument says), but the terminal current is about 50 times *smaller*, because the controlled source cancels the $r_{O2}$ current far more precisely.

### Step 6 — The flaw, stated plainly

The argument equates "the change in the current through $r_{O2}$" with "the change in the current drawn from the output". These are different: the output current is the *sum* of the $r_{O2}$ current and the controlled-source current $g_{m2}v_{GS2}$, and the feedback of $A_1$ drives $v_{GS2}$ exactly so that the two cancel. KCL at X guarantees that the net current equals $\Delta V_X/r_{O1}$, which is tiny because $A_1$ holds $V_X$ almost constant.

### Result

The reasoning ignores the controlled current source $g_{m2}v_{GS2}$ of $M_2$. When the drain rises, $A_1$ lowers the gate, so $g_{m2}v_{GS2}$ changes opposite to the $r_{O2}$ current and cancels almost all of it. The net current through $M_2$ equals the current in $r_{O1}$, $\Delta V_X/r_{O1}$, which is very small precisely because $V_X$ is held nearly constant. Therefore

$$R_{out} = r_{O1} + r_{O2} + (1 + A_1)g_{m2}r_{O1}r_{O2} \approx (1 + A_1)g_{m2}r_{O2}r_{O1},$$

i.e. gain boosting *raises* the output impedance by about $1 + A_1$; it does not reduce it to $r_{O2}$.

**Common mistake.** Accepting $R_{out} \approx r_{O2}$, or concluding that gain boosting lowers the output impedance. The impedance rises by a factor of about $1 + A_1$, which is the whole purpose of the technique.

**Common mistake.** "Fixing" the argument by claiming that $V_X$ actually changes a lot. It does not: $\Delta V_X$ is about $1 + A_1$ times *smaller* than in a plain cascode. The resolution is the cancelling controlled-source current, not a large $\Delta V_X$.

**Common mistake.** Treating the transistor as just the resistor $r_{O2}$ when reasoning about currents. A MOSFET's small-signal drain current always includes the $g_m v_{GS}$ term, and in feedback circuits that term often dominates.
