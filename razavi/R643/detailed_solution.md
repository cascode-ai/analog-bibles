# Detailed solution - R643

**Approach.** The steering pair $M_5$–$M_6$ can move any fraction of $I_T$ from the input pair to the cross-coupled pair. The worst case for start-up is all of $I_T$ in $M_3$–$M_4$, leaving the input pair only $I_H$. Find the stage gain including the cross-coupled pair's negative resistance, impose the three-stage ring condition (gain ≥ 2 per stage) in that worst case, solve for $I_H$, and check that every other control setting gives more gain.

### Step 1 — Small-signal gain of one stage

$M_5$ sends $I_{SS}$ to P and $M_6$ sends $I_1$ to the cross-coupled pair, with $I_{SS} + I_1 = I_T = 1$ mA; $I_H$ keeps at least $I_H$ in the input pair. At the edge of oscillation each pair splits its tail current equally, and for differential signals both tail nodes are virtual grounds. In the half circuit at one output:

- $M_1$ (or $M_2$) is a current $g_{m1,2}v_{in}$ from the output to ground, and $R$ goes to ac ground;
- the cross-coupled transistor on this output has its gate on the *opposite* output, at $-v_{out}$, so its current $g_{m3,4}(-v_{out})$ from the output to ground is a **negative resistance** $-1/g_{m3,4}$;
- $C$ is the output-node capacitance.

<!-- diagram: diagram-01.cir -->

KCL at the output (low frequency, $C$ ignored):

$$g_{m1,2}v_{in} + \frac{v_{out}}{R} - g_{m3,4}v_{out} = 0 ,$$

$$
\begin{aligned}
v_{out}\left(\frac{1}{R} - g_{m3,4}\right) &= -g_{m1,2}v_{in},\\
\frac{v_{out}}{v_{in}} &= -\frac{g_{m1,2}}{1/R - g_{m3,4}} = -\frac{g_{m1,2}R}{1 - g_{m3,4}R}.
\end{aligned}
$$

The effective load $R \parallel (-1/g_{m3,4}) = R/(1 - g_{m3,4}R)$ *raises* the gain while $g_{m3,4}R < 1$. With $C$, the single pole is at $\omega_0 = (1 - g_{m3,4}R)/(RC)$; shifting current to the cross-coupled pair lowers it, which is how the frequency is tuned.

### Step 2 — The ring condition

In a three-stage ring of identical one-pole stages, each pole supplies 60° at $\sqrt3\,\omega_0$, where each stage's gain has fallen by $\sqrt{1 + 3} = 2$. So oscillation requires

$$A_0 = \frac{g_{m1,2}R}{1 - g_{m3,4}R} \ge 2 .$$

### Step 3 — The worst case and the minimum $I_H$

**Worst case:** $M_6$ takes all of $I_T$ ($I_1 = I_T$, $I_{SS} = 0$). Each of $M_3$, $M_4$ then carries $I_T/2 = 0.5$ mA, so $g_{m3,4}R = 0.5$ by design, and the input pair carries only $I_H$, i.e. $I_H/2$ per device. The ring condition becomes

$$\frac{g_{m1,2}R}{1 - 0.5} \ge 2 \quad\Longrightarrow\quad g_{m1,2}R \ge 1 ,$$

with

$$g_{m1,2} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}\frac{I_H}{2}} = \sqrt{\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_H} ,$$

so

$$\sqrt{\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_H}\;R \ge 1 \quad\Longrightarrow\quad I_H \ge \frac{1}{\mu_nC_{ox}(W/L)_{1,2}R^2} .$$

With $(W/L)_{1,2} = 50/0.5 = 100$:

$$
\begin{aligned}
\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}R^2 &= (134\times10^{-6}\ \mathrm{A/V^2})(100)(546\ \Omega)^2 = (1.34\times10^{-2})(2.981\times10^5)\ \mathrm{V/A} = 3995\ \mathrm{V/A},\\
I_{H,min} &= \frac{1}{3995\ \mathrm{V/A}} = 2.50\times10^{-4}\ \mathrm{A} = 0.25\ \mathrm{mA}.
\end{aligned}
$$

**Check by scaling.** $R = 546\ \Omega$ gives $g_{m1,2}R = 2$ with the full 1 mA in the input pair; half that transconductance needs a quarter of the current, $I_H = 1\ \mathrm{mA}/4 = 0.25$ mA. ✓

### Step 4 — Every other control setting is better

Let a fraction $x$ of $I_T$ go to the input pair (which then carries $xI_T + I_H$) and $1 - x$ to the cross-coupled pair. With $I_H = I_T/4$ and $g_m \propto \sqrt{I}$:

$$g_{m1,2}R = 2\sqrt{x + 0.25}, \qquad g_{m3,4}R = 0.5\sqrt{1 - x}, \qquad A_0 = \frac{2\sqrt{x + 0.25}}{1 - 0.5\sqrt{1 - x}} .$$

| $x$ (fraction of $I_T$ to $M_1$–$M_2$) | $g_{m1,2}R$ | $g_{m3,4}R$ | $A_0$ |
|---|---|---|---|
| 0 (all to $M_3$–$M_4$) | 1.00 | 0.50 | **2.00** |
| 0.25 | 1.41 | 0.43 | 2.49 |
| 0.5 | 1.73 | 0.35 | 2.68 |
| 0.75 | 2.00 | 0.25 | 2.67 |
| 1 (all to $M_1$–$M_2$) | 2.24 | 0 | 2.24 |

The gain is lowest at $x = 0$, where it just equals 2, so $I_H = 0.25$ mA guarantees $A_0 \ge 2$ over the whole control range. Since $g_{m3,4}R \le 0.5 < 1$ everywhere, the net load stays positive and the stage never latches. Without $I_H$, the input pair would carry no current at $x = 0$, the stage would have no gain, and the ring would stop at that end of the tuning range.

### Result

The worst case is all of $I_T$ in $M_3$–$M_4$ ($g_{m3,4}R = 0.5$) and only $I_H$ in $M_1$–$M_2$. The stage gain $g_{m1,2}R/(1 - g_{m3,4}R) \ge 2$ then requires $g_{m1,2}R \ge 1$, with $g_{m1,2} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_H}$:

$$I_{H,min} = \frac{1}{\mu_nC_{ox}(W/L)_{1,2}R^2} = \frac{1}{(134\ \mu\mathrm{A/V^2})(100)(546\ \Omega)^2} \approx 0.25\ \mathrm{mA}\ \left(= \frac{I_T}{4}\right).$$

**Common mistake.** Treating the cross-coupled pair as a positive resistance, i.e. a gain of $g_{m1,2}R/(1 + g_{m3,4}R)$ or $g_{m1,2}R(1 - g_{m3,4}R)$, which gives $g_{m1,2}R \ge 3$ or $\ge 4$ and $I_H$ of 2.25 mA or 4 mA. The pair presents $-1/g_{m3,4}$ per side and *raises* the gain.

**Common mistake.** Using a gain requirement of 1 per stage. Each pole halves the gain at the oscillation frequency, so the low-frequency gain must be at least 2.

**Common mistake.** Computing $g_{m1,2}$ with all of $I_H$ in one device, which gives 0.125 mA. At the edge of oscillation the pair is balanced, with $I_H/2$ per device.
