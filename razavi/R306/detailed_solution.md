# Detailed solution - R306

**Approach.** At very low frequency $C_1$ and $C_2$ are open circuits, at very high frequency they are short circuits. For each extreme, decide what each transistor and resistor becomes (cascode device, diode-connected load, current source, extra load resistor) and compute the gain with KCL. The key point is that $C_1$ and $C_2$ swap the roles of $M_2$ and $M_3$ between the two extremes.

### Step 1 — Very low frequencies: what the circuit becomes

Call the drain of $M_1$ node X, the gate of $M_2$ G2 and the gate of $M_3$ G3; $V_{DD}$, $V_b$ and ground are ac grounds. With $C_1$ and $C_2$ open, $R_1$ and $R_2$ carry no current (they only feed gates), so:

- **G2** sits at $V_b$, an ac ground: $M_2$ is a **cascode** (common-gate) device.
- **G3** sits at $V_{out}$: $M_3$ is **diode-connected**.

So the circuit is a cascode $M_1$–$M_2$ loaded by a diode-connected PMOS.

<!-- diagram: diagram-01.cir -->

**Load at the output.** The diode-connected PMOS draws $g_{m3}v_{out}$ in parallel with $r_{O3}$:

$$R_L = \frac{1}{g_{m3}}\parallel r_{O3} = \frac{r_{O3}}{1 + g_{m3}r_{O3}}.$$

**Output resistance of the cascode** ($\gamma = 0$):

$$R_{casc} = r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}.$$

**Short-circuit transconductance $G_m$.** With the output shorted to ac ground, the current from the output down through $M_2$ is $g_{m2}(0 - V_X) + (0 - V_X)/r_{O2} = -V_X(g_{m2} + 1/r_{O2})$, and at X it equals $M_1$'s current $g_{m1}V_{in} + V_X/r_{O1}$:

$$
\begin{aligned}
-V_X\left(g_{m2} + \frac{1}{r_{O2}}\right) &= g_{m1}V_{in} + \frac{V_X}{r_{O1}}\\
V_X &= -\frac{g_{m1}V_{in}}{g_{m2} + 1/r_{O2} + 1/r_{O1}}.
\end{aligned}
$$

So the output short-circuit current is

$$i_{out} = -V_X\left(g_{m2} + \frac{1}{r_{O2}}\right) = g_{m1}V_{in}\,\frac{g_{m2} + 1/r_{O2}}{g_{m2} + 1/r_{O2} + 1/r_{O1}},$$

$$G_m = \frac{i_{out}}{V_{in}} = \frac{g_{m1}r_{O1}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}} = \frac{g_{m1}r_{O1}(1 + g_{m2}r_{O2})}{R_{casc}}\approx g_{m1}.$$

### Step 2 — Very low frequencies: the gain

$$A_{v,low} = -G_m\,\frac{R_{casc}R_L}{R_{casc} + R_L} = -\frac{g_{m1}r_{O1}(1 + g_{m2}r_{O2})\,R_L}{R_{casc} + R_L}.$$

Substituting $R_L = r_{O3}/(1 + g_{m3}r_{O3})$ and multiplying numerator and denominator by $(1 + g_{m3}r_{O3})$:

$$A_{v,low} = -\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{(1 + g_{m3}r_{O3})(r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}) + r_{O3}}.$$

$R_{casc}$ is of order $g_mr_O^2$ while $R_L\approx1/g_{m3}$, so $R_{casc}\parallel R_L\approx 1/g_{m3}$; with $G_m\approx g_{m1}$ and $g_{m3}r_{O3}\gg1$,

$$A_{v,low}\approx -\frac{g_{m1}}{g_{m3}},$$

a CS amplifier with a diode load.

### Step 3 — Very high frequencies: what the circuit becomes

With $C_1$ and $C_2$ shorted:

- **$C_1$ shorts G2 to the output.** $M_2$ is **diode-connected** and no longer a cascode, and $R_1$, now from the output to $V_b$ (ac ground), **loads the output**.
- **$C_2$ shorts G3 to ground.** $M_3$ becomes a **current source** with output resistance $r_{O3}$, and $R_2$, now from the output to ac ground, **also loads the output**.

The total conductance from the output to ac ground is

$$G = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{r_{O3}} .$$

<!-- diagram: diagram-02.cir -->

### Step 4 — Very high frequencies: the gain

Let $g' = g_{m2} + 1/r_{O2}$. With its gate at the output, $M_2$ (with $r_{O2}$) carries $g'(V_{out} - V_X)$ from the output to X. KCL at X and at the output:

$$g'(V_{out} - V_X) = g_{m1}V_{in} + \frac{V_X}{r_{O1}} , \qquad (1)$$

$$-GV_{out} = g'(V_{out} - V_X). \qquad (2)$$

From (2):

$$V_X = V_{out}\left(1 + \frac{G}{g'}\right). \qquad (3)$$

Comparing (1) and (2), $-GV_{out} = g_{m1}V_{in} + V_X/r_{O1}$, i.e.

$$V_X = -r_{O1}\left(g_{m1}V_{in} + GV_{out}\right). \qquad (4)$$

Equate (3) and (4):

$$
\begin{aligned}
V_{out}\left(1 + \frac{G}{g'}\right) &= -g_{m1}r_{O1}V_{in} - r_{O1}GV_{out}\\
V_{out}\left(1 + Gr_{O1} + \frac{G}{g'}\right) &= -g_{m1}r_{O1}V_{in}\\
A_{v,high} &= \frac{-g_{m1}r_{O1}}{1 + Gr_{O1} + G/g'} = -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + G\left(1 + \dfrac{1}{g'r_{O1}}\right)}.
\end{aligned}
$$

Since $g'r_{O1}\approx g_{m2}r_{O1}\gg1$, the term $1/(g'r_{O1})$ is negligible:

$$A_{v,high}\approx -\frac{g_{m1}}{1/r_{O1} + 1/R_1 + 1/R_2 + 1/r_{O3}} = -g_{m1}\,(r_{O1}\parallel R_1\parallel R_2\parallel r_{O3}).$$

$r_{O1}$ appears in parallel with the output loads because the diode-connected $M_2$ (about $1/g_{m2}$) makes X follow the output closely, $V_X\approx V_{out}$.

### Step 5 — Comparison of the two extremes

At low frequency the output is loaded by a diode ($\approx 1/g_{m3}$); at high frequency by $r_{O1}\parallel R_1\parallel R_2\parallel r_{O3}$, usually much larger. So typically $|A_{v,high}|\gg|A_{v,low}|$: the gain *rises* with frequency.

*Illustration* (example values, not part of the problem): with $g_{m1} = g_{m2} = 5$ mS, $g_{m3} = 2$ mS, $r_{O1} = r_{O2} = 10\ \mathrm{k\Omega}$, $r_{O3} = 5\ \mathrm{k\Omega}$ and $R_1 = R_2 = 50\ \mathrm{k\Omega}$, the exact formulas give $A_{v,low} = -2.23$ (approximation $-2.5$) and $A_{v,high} = -14.5$ (approximation $-14.7$).

### Result

**Very low frequencies** ($C_1$, $C_2$ open: $M_2$ cascode with gate at $V_b$, $M_3$ diode-connected through $R_2$):

$$A_{v,low} = -\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{(1 + g_{m3}r_{O3})(r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}) + r_{O3}}\approx -\frac{g_{m1}}{g_{m3}}.$$

**Very high frequencies** ($C_1$, $C_2$ shorted: $M_2$ diode-connected, $M_3$ a current source, $R_1$ and $R_2$ loading the output):

$$A_{v,high} = -\frac{g_{m1}}{\dfrac{1}{r_{O1}} + G\left(1 + \dfrac{1}{(g_{m2} + 1/r_{O2})r_{O1}}\right)},\quad G = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{r_{O3}},\qquad A_{v,high}\approx -g_{m1}(r_{O1}\parallel R_1\parallel R_2\parallel r_{O3}).$$

**Common mistake.** Treating $M_3$ as a current source at low frequency. With $C_2$ open, $R_2$ carries no current, so $M_3$'s gate sits at the output and $M_3$ is diode-connected; the low-frequency gain is only about $-g_{m1}/g_{m3}$.

**Common mistake.** Keeping $M_2$ as a cascode at high frequency. $C_1$ ties its gate to its drain, so the boost $g_{m2}r_{O2}$ disappears and the gain is set by $r_{O1}\parallel R_1\parallel R_2\parallel r_{O3}$.

**Common mistake.** Forgetting $R_1$ or $R_2$ at high frequency, or including them at low frequency. At dc they only feed gates and carry no signal current; once $C_1$ and $C_2$ are shorts, each connects the output to an ac ground.
