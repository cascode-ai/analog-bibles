# Detailed solution - R643

**Approach.** The steering pair $M_5$–$M_6$ can move any fraction of $I_T$ from the input pair to the cross-coupled pair. The worst case for start-up is when all of $I_T$ goes to $M_3$–$M_4$: the input pair is then left with only $I_H$. We find the stage gain including the negative resistance of the cross-coupled pair, impose the three-stage ring condition (gain ≥ 2 per stage) in that worst case, and solve for $I_H$. Finally we check that every other control setting gives more gain.

### Step 1 — The stage and its operating states

Reading the figure:

- $M_1$–$M_2$: input differential pair with load resistors $R_1 = R_2 = R = 546\ \Omega$; its common source is node P.
- $M_3$–$M_4$: cross-coupled pair on the same output nodes, $(W/L)_{3,4}$ chosen so that $g_{m3,4}R = 0.5$ at 0.5 mA per device.
- $M_5$ sends a current $I_{SS}$ to P, and $M_6$ sends $I_1$ to the cross-coupled pair, with $I_{SS} + I_1 = I_T = 1$ mA; the split depends on $V_{cont1}$ and $V_{cont2}$.
- $I_H$ is an extra constant current source from P to ground, so the input pair always carries at least $I_H$.

For the oscillation condition we need the small-signal gain at the balanced point, where each pair splits its tail current equally.

### Step 2 — Small-signal gain of one stage

For differential signals both tail nodes are virtual grounds. Consider the half circuit at one output node:

- $M_1$ (or $M_2$) is a controlled current $g_{m1,2}v_{in}$ from the output node to ground.
- $R$ connects the output to AC ground.
- The cross-coupled transistor connected to this output has its gate on the *opposite* output, which in differential mode is at $-v_{out}$. Its drain current, $g_{m3,4}(-v_{out})$, flows from the output node to ground. A current $-g_{m3,4}v_{out}$ in response to $v_{out}$ is a **negative resistance** $-1/g_{m3,4}$ from the output to ground.
- $C$ is the capacitance at the output node.

<!-- diagram: diagram-01.cir -->

**KCL at the output** (low frequency, $C$ ignored):

$$g_{m1,2}v_{in} + \frac{v_{out}}{R} - g_{m3,4}v_{out} = 0 .$$

Solve:

$$
\begin{aligned}
v_{out}\left(\frac{1}{R} - g_{m3,4}\right) &= -g_{m1,2}v_{in},\\
\frac{v_{out}}{v_{in}} &= -\frac{g_{m1,2}}{1/R - g_{m3,4}} = -\frac{g_{m1,2}R}{1 - g_{m3,4}R}.
\end{aligned}
$$

The effective load is $R \parallel (-1/g_{m3,4}) = R/(1 - g_{m3,4}R)$: the cross-coupled pair *increases* the load resistance and hence the gain, as long as $g_{m3,4}R < 1$. With the capacitance, the stage has a single pole at $\omega_0 = (1 - g_{m3,4}R)/(RC)$. Shifting current to the cross-coupled pair lowers this pole, which is how the frequency is tuned.

### Step 3 — The ring condition

For a three-stage ring of identical one-pole stages, the poles must supply 60° each, which happens at $\sqrt3\,\omega_0$, where each stage's gain has fallen by a factor $\sqrt{1 + 3} = 2$. Oscillation therefore requires a low-frequency gain of at least 2 per stage:

$$A_0 = \frac{g_{m1,2}R}{1 - g_{m3,4}R} \ge 2 .$$

### Step 4 — The worst case and the minimum $I_H$

**Worst case:** $M_6$ takes all of $I_T$, so $I_1 = I_T$ and $I_{SS} = 0$. Then

- each of $M_3$, $M_4$ carries $I_T/2 = 0.5$ mA, so $g_{m3,4}R = 0.5$ (by design);
- the input pair carries only $I_H$, i.e. $I_H/2$ per device.

Substitute $g_{m3,4}R = 0.5$ into the ring condition:

$$\frac{g_{m1,2}R}{1 - 0.5} \ge 2 \quad\Longrightarrow\quad g_{m1,2}R \ge 1 .$$

With $I_H/2$ per device, the square-law transconductance is

$$g_{m1,2} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}\frac{I_H}{2}} = \sqrt{\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_H} .$$

So the condition becomes

$$\sqrt{\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_H}\;R \ge 1 \quad\Longrightarrow\quad I_H \ge \frac{1}{\mu_nC_{ox}(W/L)_{1,2}R^2} .$$

Numerically, with $(W/L)_{1,2} = 50/0.5 = 100$:

$$
\begin{aligned}
\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}R^2 &= (134\times10^{-6}\ \mathrm{A/V^2})(100)(546\ \Omega)^2 = (1.34\times10^{-2})(2.981\times10^5)\ \mathrm{V/A} = 3995\ \mathrm{V/A},\\
I_{H,min} &= \frac{1}{3995\ \mathrm{V/A}} = 2.50\times10^{-4}\ \mathrm{A} = 0.25\ \mathrm{mA}.
\end{aligned}
$$

**Check by scaling.** $R = 546\ \Omega$ was chosen so that $g_{m1,2}R = 2$ when the input pair carries the full 1 mA. We now need $g_{m1,2}R = 1$, half of that. Since $g_m \propto \sqrt{I}$, half the transconductance needs a quarter of the current: $I_H = 1\ \mathrm{mA}/4 = 0.25$ mA. ✓

### Step 5 — Every other control setting is better

Let a fraction $x$ of $I_T$ go to the input pair (so it carries $xI_T + I_H$) and $1 - x$ to the cross-coupled pair. With $I_H = I_T/4$ and $g_m \propto \sqrt{I}$:

$$g_{m1,2}R = 2\sqrt{x + 0.25}, \qquad g_{m3,4}R = 0.5\sqrt{1 - x}, \qquad A_0 = \frac{2\sqrt{x + 0.25}}{1 - 0.5\sqrt{1 - x}} .$$

| $x$ (fraction of $I_T$ to $M_1$–$M_2$) | $g_{m1,2}R$ | $g_{m3,4}R$ | $A_0$ |
|---|---|---|---|
| 0 (all to $M_3$–$M_4$) | 1.00 | 0.50 | **2.00** |
| 0.25 | 1.41 | 0.43 | 2.49 |
| 0.5 | 1.73 | 0.35 | 2.68 |
| 0.75 | 2.00 | 0.25 | 2.67 |
| 1 (all to $M_1$–$M_2$) | 2.24 | 0 | 2.24 |

The gain is lowest at $x = 0$, where it just equals 2, so $I_H = 0.25$ mA guarantees $A_0 \ge 2$ over the whole control range. In the opposite extreme, $I_H$ adds to $I_T$ in the input pair and the gain is above 2. Note also that $g_{m3,4}R \le 0.5 < 1$ everywhere, so the net load stays positive and the stage never latches.

**Why $I_H$ is needed at all.** Without it, the input pair would carry no current at $x = 0$, so $g_{m1,2} = 0$: the stage would have no gain, and the ring would stop oscillating at that end of the tuning range.

### Result

The worst case is all of $I_T$ in $M_3$–$M_4$ ($g_{m3,4}R = 0.5$) and only $I_H$ in $M_1$–$M_2$. The stage gain $g_{m1,2}R/(1 - g_{m3,4}R) \ge 2$ then requires $g_{m1,2}R \ge 1$, with $g_{m1,2} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_H}$:

$$I_{H,min} = \frac{1}{\mu_nC_{ox}(W/L)_{1,2}R^2} = \frac{1}{(134\ \mu\mathrm{A/V^2})(100)(546\ \Omega)^2} \approx 0.25\ \mathrm{mA}\ \left(= \frac{I_T}{4}\right).$$

**Common mistake.** Treating the cross-coupled pair as a positive resistance, i.e. using a gain of $g_{m1,2}R/(1 + g_{m3,4}R)$ or $g_{m1,2}R(1 - g_{m3,4}R)$. This gives $g_{m1,2}R \ge 3$ or $g_{m1,2}R \ge 4$ and $I_H$ of 2.25 mA or 4 mA. The cross-coupled pair is a positive-feedback element that presents $-1/g_{m3,4}$ per side and *raises* the gain.

**Common mistake.** Using a gain requirement of 1 per stage. In a three-stage ring each pole halves the gain at the oscillation frequency, so the low-frequency gain must be at least 2.

**Common mistake.** Computing $g_{m1,2}$ with all of $I_H$ in one device, $g_{m1,2} = \sqrt{2\mu_nC_{ox}(W/L)I_H}$, which gives 0.125 mA. At the edge of oscillation the pair is balanced and each device carries $I_H/2$.
