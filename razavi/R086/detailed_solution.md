# Detailed solution - R086

**Approach.** Find the small-signal gain of the stage for an arbitrary $I_S$ (it is $-g_{m1}/g_{m2}$, because the ideal current source is an open circuit for small signals). Then express both transconductances through their drain currents: $g_{m1}$ stays fixed because $I_1$ is fixed, while $g_{m2}$ falls because $M_2$ carries only $I_1 - I_S$. Normalizing to the gain at $I_S = 0$ gives the curve to plot.

### Step 1 — The circuit and the current in each branch

From the figure:

- $M_1$ (NMOS) is a common-source device with drain current $I_1$, held constant (so $V_{in}$ is fixed).
- $M_2$ (PMOS) is diode-connected: source at $V_{DD}$, gate and drain at $V_{out}$.
- $I_S$ is an ideal current source from $V_{DD}$ into the output node, in parallel with $M_2$.

**KCL at the output node** (no current leaves through $V_{out}$):

$$
\begin{aligned}
I_1 &= I_S + |I_{D2}|\\
|I_{D2}| &= I_1 - I_S .
\end{aligned}
$$

As $I_S$ grows from 0 to $0.75I_1$, the current in $M_2$ falls from $I_1$ to $0.25I_1$.

**Regions.** $M_1$ is saturated (given), and the diode-connected $M_2$ has $V_{SD2} = V_{SG2}$, so it is always saturated while it conducts. Channel-length modulation and body effect are neglected.

### Step 2 — Small-signal gain for any $I_S$

The small-signal model has one node, $out$; $V_{DD}$ is an AC ground.

- **$M_1$:** a current source $g_{m1}v_{in}$ from $out$ to ground.
- **$M_2$:** source at AC ground, gate and drain at $out$, so $v_{sg2} = -v_{out}$. It supplies a current $g_{m2}v_{sg2} = -g_{m2}v_{out}$ into $out$, i.e. it behaves as a resistance $1/g_{m2}$ to ground.
- **$I_S$:** an ideal current source does not change its current when its voltage changes, so it is an **open circuit** for small signals.

**KCL at $out$**:

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in}\\
A_v &= -\frac{g_{m1}}{g_{m2}} .
\end{aligned}
$$

This form holds for every value of $I_S$: the current source changes the gain only *indirectly*, through the bias current of $M_2$.

### Step 3 — Express the transconductances through the currents

For a saturated square-law device, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$. This form is convenient because the currents are what we know.

$$
\begin{aligned}
g_{m1} &= \sqrt{2\mu_nC_{ox}\left(\tfrac{W}{L}\right)_1I_1} &&\text{(fixed, since } I_1 \text{ is fixed)},\\
g_{m2} &= \sqrt{2\mu_pC_{ox}\left(\tfrac{W}{L}\right)_2(I_1 - I_S)} &&\text{(falls as } I_S \text{ rises)}.
\end{aligned}
$$

Divide:

$$
|A_v| = \frac{g_{m1}}{g_{m2}} = \sqrt{\frac{2\mu_nC_{ox}(W/L)_1I_1}{2\mu_pC_{ox}(W/L)_2(I_1 - I_S)}} = \sqrt{\frac{\mu_n(W/L)_1\,I_1}{\mu_p(W/L)_2\,(I_1 - I_S)}} .
$$

The factors $2$ and $C_{ox}$ cancel.

### Step 4 — Normalize to the gain at $I_S = 0$

At $I_S = 0$ both devices carry $I_1$, and the current ratio inside the square root is 1:

$$A_0 = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} .$$

Factor $A_0$ out of the general result, and write $I_1 - I_S = I_1(1 - I_S/I_1)$:

$$
|A_v| = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}}\cdot\sqrt{\frac{I_1}{I_1(1 - I_S/I_1)}} = \frac{A_0}{\sqrt{1 - I_S/I_1}} .
$$

The gain is negative (inverting) throughout: $A_v = -A_0/\sqrt{1 - I_S/I_1}$.

**Cross-check through the overdrives.** Using $g_m = 2I_D/|V_{ov}|$ instead,

$$|A_v| = \frac{2I_1/V_{ov1}}{2(I_1 - I_S)/|V_{ov2}|} = \frac{I_1}{I_1 - I_S}\cdot\frac{|V_{ov2}|}{V_{ov1}} .$$

$V_{ov1}$ is fixed, while $|V_{ov2}| = \sqrt{2(I_1 - I_S)/[\mu_pC_{ox}(W/L)_2]}$ shrinks as $\sqrt{1 - I_S/I_1}$. The product is again proportional to $(1 - I_S/I_1)^{-1}\cdot(1 - I_S/I_1)^{+1/2} = (1 - I_S/I_1)^{-1/2}$.

### Step 5 — Points and shape of the curve

Write $x = I_S/I_1$ and evaluate $|A_v|/A_0 = 1/\sqrt{1 - x}$:

$$
\begin{aligned}
x = 0.25:&\quad \frac{1}{\sqrt{0.75}} = \frac{1}{0.866} = 1.155,\\
x = 0.5:&\quad \frac{1}{\sqrt{0.5}} = \frac{1}{0.707} = 1.414,\\
x = 0.75:&\quad \frac{1}{\sqrt{0.25}} = \frac{1}{0.5} = 2 .
\end{aligned}
$$

| $I_S/I_1$ | 0 | 0.1 | 0.25 | 0.4 | 0.5 | 0.6 | 0.7 | 0.75 |
|---|---|---|---|---|---|---|---|---|
| $\lvert A_v\rvert/A_0$ | 1.000 | 1.054 | 1.155 | 1.291 | 1.414 | 1.581 | 1.826 | 2.000 |

**Slope.** Differentiating, $\dfrac{d(|A_v|/A_0)}{dx} = \dfrac12(1 - x)^{-3/2}$: 0.5 at $x = 0$, 1.41 at $x = 0.5$ and 4 at $x = 0.75$.

**Description of the plot** (horizontal axis $I_S$ from 0 to $0.75I_1$, vertical axis $|A_v|$):

- It starts at $A_0$ with a gentle slope ($A_0/2$ per unit of $I_S/I_1$).
- It rises **monotonically** and **ever faster** (convex, curving upward), since the slope grows as $(1 - x)^{-3/2}$.
- It reaches **$2A_0$ at $I_S = 0.75I_1$**: the gain doubles while the current in $M_2$ drops to a quarter.
- It would have a vertical asymptote at $I_S = I_1$, which lies outside the plotted range.

**Physical intuition.** The bleeding source takes over part of the load current, so the diode-connected $M_2$ runs at a lower current. Its transconductance falls, so its small-signal resistance $1/g_{m2}$ rises, and the gain rises with it, while $M_1$'s transconductance stays the same. The square root appears because $g_m$ is proportional to the square root of the current at a fixed $W/L$. (As $I_S$ rises, $V_{SG2}$ also falls, so $V_{out}$ moves up; this helps keep $M_1$ saturated. If $I_S$ were pushed close to $I_1$, $M_2$ would approach weak inversion and the neglected output resistances would limit the gain.)

### Result

$$|A_v| = \frac{g_{m1}}{g_{m2}} = \sqrt{\frac{\mu_n(W/L)_1\,I_1}{\mu_p(W/L)_2\,(I_1 - I_S)}} = \frac{A_0}{\sqrt{1 - I_S/I_1}}, \qquad A_0 = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}},$$

with an inverting (negative) gain. The plot rises monotonically and ever faster (convex): $A_0$, $1.15A_0$, $1.41A_0$ and $2A_0$ at $I_S/I_1 = 0$, 0.25, 0.5 and 0.75. The reason is that $g_{m1}$ is fixed while $g_{m2}$ falls with $M_2$'s current $I_1 - I_S$.

**Common mistake.** Using $g_{m2} \propto I_D$ (for example from $g_m = 2I_D/V_{ov}$ with $V_{ov}$ treated as constant), which gives $|A_v| = A_0/(1 - I_S/I_1)$ and a fourfold gain at $I_S = 0.75I_1$. At fixed $W/L$, $M_2$'s overdrive shrinks as its current falls, so $g_{m2} \propto \sqrt{I_1 - I_S}$, and the gain only doubles.

**Common mistake.** Concluding that the gain stays constant because "the gain of a diode-loaded stage is set by the device-size ratio". That rule, $\sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$, holds only when both transistors carry the same current. Here $I_S$ makes the two currents different.

**Common mistake.** Concluding that the gain decreases because "the current source adds a load". An ideal current source has infinite small-signal resistance; it does not load the output at all. Its only effect is to reduce the bias current of $M_2$.
