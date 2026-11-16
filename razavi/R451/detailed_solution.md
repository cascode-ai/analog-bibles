# Detailed solution - R451

**Approach.** The argument looks only at the current in $r_{O2}$, but $M_2$ also contains the controlled source $g_{m2}v_{GS2}$ in parallel with $r_{O2}$. Write the complete small-signal equations, compute the true output resistance, and show numerically that the controlled source cancels almost all of the $r_{O2}$ current, so very little current flows into the drain terminal.

### Step 1 — Small-signal model of $M_2$, written out completely

$A_1$ compares $V_X$ (at its "−" input) with the fixed $V_b$ and drives the gate of $M_2$, so

$$v_g = -A_1v_X .$$

The small-signal drain current of $M_2$ (drain to source) has **two** parts:

$$i_{D2} = \underbrace{g_{m2}v_{GS2}}_{\text{controlled source}} + \underbrace{\frac{v_D - v_X}{r_{O2}}}_{\text{current in } r_{O2}} ,$$

with $v_{GS2} = v_g - v_X$ (body effect neglected; it would only add $g_{mb2}$ to $g_{m2}$). The flawed argument keeps only the second term. With $v_g = -A_1v_X$:

$$v_{GS2} = -A_1v_X - v_X = -(1 + A_1)\,v_X .$$

The test source $v_t = \Delta V$ drives the drain; $r_{O2}$ and $g_{m2}(v_g - v_X)$ run from the drain to X, and $r_{O1}$ from X to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at X: the key constraint

The input of $A_1$ draws no current, so everything entering the drain must leave X through $r_{O1}$:

$$i = i_{D2} = \frac{v_X}{r_{O1}} \qquad\Longrightarrow\qquad v_X = i\,r_{O1}.$$

This alone exposes the flaw: the terminal current is $\Delta V_X/r_{O1}$, and since $A_1$ makes $\Delta V_X$ *very small*, the terminal current is very small, whatever happens inside $M_2$.

### Step 3 — The output resistance

Substituting $v_{GS2} = -(1 + A_1)v_X$ and $v_X = ir_{O1}$, with $v_D = v_t$:

$$
\begin{aligned}
i &= -(1 + A_1)g_{m2}v_X + \frac{v_t - v_X}{r_{O2}}\\
i &= -(1 + A_1)g_{m2}r_{O1}\,i + \frac{v_t - r_{O1}i}{r_{O2}}\\
v_t &= i\left[r_{O1} + r_{O2} + (1 + A_1)g_{m2}r_{O1}r_{O2}\right].
\end{aligned}
$$

So

$$R_{out} = \frac{v_t}{i} = r_{O1} + r_{O2} + (1 + A_1)g_{m2}r_{O1}r_{O2} \approx (1 + A_1)\,g_{m2}r_{O2}r_{O1}.$$

$A_1 = 0$ recovers the ordinary cascode, $r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}$: the auxiliary amplifier **multiplies** the output resistance by about $1 + A_1$.

### Step 4 — Where the "large current in $r_{O2}$" goes

The argument is right that, with X nearly constant, almost all of $\Delta V$ appears across $r_{O2}$, so its current is about $\Delta V/r_{O2}$. But to hold X, $A_1$ pulls the gate *down* as soon as X starts to rise, so $v_{GS2}$ goes negative and the controlled source carries a current **in the opposite direction**:

$$g_{m2}v_{GS2} = -(1 + A_1)g_{m2}v_X = -(1 + A_1)g_{m2}r_{O1}\frac{v_t}{R_{out}} \approx -\frac{v_t}{r_{O2}} .$$

The two currents circulate inside $M_2$ (down through $r_{O2}$, back up through the controlled source) and never reach the terminal; only $v_t/R_{out}$ is left.

**Numerical illustration** (example values $g_{m2} = 1$ mS, $r_{O1} = r_{O2} = 50\ \mathrm{k}\Omega$, $A_1 = 50$, $\Delta V = 1$ V):

| Quantity | With $A_1 = 50$ | Plain cascode ($A_1 = 0$) |
|---|---|---|
| $R_{out}$ | 127.6 MΩ | 2.6 MΩ |
| $\Delta V_X$ | 0.39 mV | 19.2 mV |
| Current in $r_{O2}$ | +19.99 μA | +19.62 μA |
| Controlled source $g_{m2}v_{GS2}$ | −19.98 μA | −19.23 μA |
| Net terminal current $= \Delta V_X/r_{O1}$ | 0.0078 μA | 0.385 μA |

The $r_{O2}$ current is indeed slightly *larger* with $A_1$, but the terminal current is about 50 times *smaller*, because the controlled source cancels it far more precisely.

### Result

The argument equates the change in the current through $r_{O2}$ with the change in the current drawn from the output, ignoring the controlled source $g_{m2}v_{GS2}$ of $M_2$. When the drain rises, $A_1$ lowers the gate, so $g_{m2}v_{GS2}$ changes opposite to the $r_{O2}$ current and cancels almost all of it. The net current through $M_2$ equals the current in $r_{O1}$, $\Delta V_X/r_{O1}$, which is very small precisely because $V_X$ is held nearly constant. Therefore

$$R_{out} = r_{O1} + r_{O2} + (1 + A_1)g_{m2}r_{O1}r_{O2} \approx (1 + A_1)g_{m2}r_{O2}r_{O1},$$

i.e. gain boosting *raises* the output impedance by about $1 + A_1$; it does not reduce it to $r_{O2}$.

**Common mistake.** Accepting $R_{out} \approx r_{O2}$, or concluding that gain boosting lowers the output impedance; raising it by about $1 + A_1$ is the whole purpose of the technique.

**Common mistake.** "Fixing" the argument by claiming that $V_X$ actually changes a lot. $\Delta V_X$ is about $1 + A_1$ times *smaller* than in a plain cascode; the resolution is the cancelling controlled-source current.

**Common mistake.** Treating the transistor as just the resistor $r_{O2}$ when reasoning about currents. Its drain current always includes $g_m v_{GS}$, which in feedback circuits often dominates.
