# Detailed solution - R420

**Approach.** $C_1$ is either an open circuit (very low frequencies) or a short circuit (very high frequencies), so each limit is a purely resistive circuit. At low frequencies $R_2 + R_3$ forms a shunt feedback resistor from the output to the gate of $M_1$; at high frequencies $C_1$ grounds the middle of that resistor and the feedback disappears. We solve each case with KCL, and then check both limits with the full transfer function.

### Step 1 — The circuit and its small-signal model

Reading the figure:

- $M_1$ (NMOS, source grounded): gate at node G, drain at $V_{out}$.
- $M_2$ (PMOS, gate at the fixed bias $V_b$): a current source from $V_{DD}$ into $V_{out}$.
- $R_1$ from $V_{in}$ to G; $R_2$ from G to node N; $R_3$ from N to $V_{out}$; $C_1$ from N to ground.

Small-signal model with $\lambda = 0$:

- $M_1$ is a current $g_{m1}v_G$ flowing out of the output node to ground (no $r_{O1}$).
- $M_2$ has its gate and source at fixed potentials, so its small-signal current is zero; with $\lambda = 0$ it has no $r_O$ either. It is simply an **open circuit**, and $g_{m2}$ plays no role.
- The gate of $M_1$ draws no current.

Numbers: $g_{m1} = 1/(200\ \Omega) = 5$ mS, $R_1 = R_2 = R_3 = 2\ \mathrm{k\Omega}$, so $g_{m1}R = 10$ for each resistor.

### Step 2 — Very low frequencies: $C_1$ open

With $C_1$ open, $R_2$ and $R_3$ are in series and form one feedback resistor

$$R_F = R_2 + R_3 = 4\ \mathrm{k\Omega}$$

from the output back to G. This is an inverting amplifier with shunt–shunt feedback.

**KCL at the output.** The only paths at the output node are $M_1$ and $R_F$ ($M_2$ is open), so the current through $R_F$ must equal $M_1$'s drain current:

$$\frac{v_G - v_{out}}{R_F} = g_{m1}v_G\ \Longrightarrow\ v_{out} = v_G\,(1 - g_{m1}R_F) .$$

**KCL at G.** The current from $V_{in}$ through $R_1$ continues through $R_F$ (no gate current), and we just found that this current is $g_{m1}v_G$:

$$\frac{v_{in} - v_G}{R_1} = g_{m1}v_G\ \Longrightarrow\ v_G = \frac{v_{in}}{1 + g_{m1}R_1} .$$

**Gain:**

$$
\begin{aligned}
A_v(0) &= \frac{v_{out}}{v_{in}} = \frac{1 - g_{m1}(R_2 + R_3)}{1 + g_{m1}R_1}\\
&= \frac{1 - (5\ \mathrm{mS})(4\ \mathrm{k\Omega})}{1 + (5\ \mathrm{mS})(2\ \mathrm{k\Omega})} = \frac{1 - 20}{1 + 10} = -\frac{19}{11} = -1.73 .
\end{aligned}
$$

For comparison, the ideal (infinite-loop-gain) value is $-R_F/R_1 = -2$. The "1" in the numerator is the small signal fed forward directly through $R_F$, and the "1" in the denominator reflects the finite transconductance of $M_1$.

**Intuition.** With $\lambda = 0$ and an ideal current-source load, the open-loop gain at the output is set only by $R_F$, so the loop gain is modest ($g_{m1}R_1 = 10$). That is why the gain is close to, but not exactly, $-2$.

### Step 3 — Very high frequencies: $C_1$ a short

When $C_1$ is a short circuit, node N is at ac ground. The circuit splits into two independent parts:

- **Input side:** $V_{in}$ → $R_1$ → G → $R_2$ → ground. With no gate current, this is a voltage divider:
$$v_G = v_{in}\,\frac{R_2}{R_1 + R_2} = \frac{v_{in}}{2} .$$
- **Output side:** $M_1$'s drain current flows from the output through $R_3$ to ground (N grounded), and $M_2$ is an open circuit. A common-source stage with load $R_3$:
$$v_{out} = -g_{m1}R_3\,v_G .$$

There is no path from the output back to G any more: **the feedback is gone.**

**Gain:**

$$A_v(\infty) = -g_{m1}R_3\,\frac{R_2}{R_1 + R_2} = -(5\ \mathrm{mS})(2\ \mathrm{k\Omega})\times\frac12 = -10\times\frac12 = -5 .$$

### Step 4 — Check with the full transfer function

For insight into the transition, solve the three-node circuit with $C_1$ present. All resistors equal $R$; let $k = g_{m1}R = 10$ and $\tau = RC_1 = (2\ \mathrm{k\Omega})(100\ \mathrm{pF}) = 200$ ns. Multiply each KCL equation by $R$:

$$
\begin{aligned}
\text{G:}&\quad (v_{in} - v_G) + (v_N - v_G) = 0\ \Longrightarrow\ v_N = 2v_G - v_{in},\\
\text{out:}&\quad kv_G + (v_{out} - v_N) = 0\ \Longrightarrow\ v_N = v_{out} + kv_G,\\
\text{N:}&\quad (v_G - v_N) + (v_{out} - v_N) - s\tau\,v_N = 0\ \Longrightarrow\ v_G + v_{out} = (2 + s\tau)\,v_N .
\end{aligned}
$$

From the first two, $v_{out} = (2 - k)v_G - v_{in}$. Substituting $v_N$ and $v_{out}$ into the third:

$$
\begin{aligned}
(3 - k)\,v_G - v_{in} &= (2 + s\tau)(2v_G - v_{in})\\
v_G\,(-1 - k - 2s\tau) &= -v_{in}\,(1 + s\tau)\\
v_G &= \frac{1 + s\tau}{1 + k + 2s\tau}\,v_{in} .
\end{aligned}
$$

Then

$$
\begin{aligned}
v_{out} &= \frac{(2 - k)(1 + s\tau) - (1 + k + 2s\tau)}{1 + k + 2s\tau}\,v_{in} = \frac{1 - 2k - ks\tau}{1 + k + 2s\tau}\,v_{in},\\
A_v(s) &= -\frac{19 + 10\,s\tau}{11 + 2\,s\tau} .
\end{aligned}
$$

- $s \to 0$: $A_v = -19/11 = -1.73$. ✓
- $s \to \infty$: $A_v = -10/2 = -5$. ✓

The magnitude rises from 1.73 to 5 between a zero at $\omega_z = 1.9/\tau = 9.5\times10^6$ rad/s (about 1.5 MHz) and a pole at $\omega_p = 5.5/\tau = 2.75\times10^7$ rad/s (about 4.4 MHz). The ratio $\omega_p/\omega_z = 5/1.73$ matches the ratio of the two gains.

### Result

$$A_v\big|_{\omega\to0} = \frac{1 - g_{m1}(R_2 + R_3)}{1 + g_{m1}R_1} = -\frac{19}{11} \approx -1.73,\qquad A_v\big|_{\omega\to\infty} = -g_{m1}R_3\,\frac{R_2}{R_1 + R_2} = -5 .$$

At low frequencies $R_2 + R_3$ provides shunt feedback and the gain is near the ideal $-(R_2 + R_3)/R_1 = -2$. At high frequencies $C_1$ grounds the $R_2$–$R_3$ junction, which removes the feedback: the input sees the $R_1$–$R_2$ divider and $M_1$ drives only $R_3$. $g_{m2}$ plays no role.

**Common mistake.** Giving the ideal value $-2$ at low frequencies. That assumes an infinite loop gain; with $g_{m1}R_1 = 10$ and the feedforward through $R_F$, the actual value is $-19/11$.

**Common mistake.** Forgetting the $R_1$–$R_2$ divider at high frequencies and answering $-g_{m1}R_3 = -10$. With N grounded, $R_2$ goes from G to ground, so only half of $v_{in}$ reaches the gate.

**Common mistake.** Using $g_{m2}$ as a load conductance or saying the gain is zero at high frequency. $M_2$'s gate and source are fixed, so with $\lambda = 0$ it is an open circuit in the small-signal model; at high frequency the output is still loaded by $R_3$ to (ac) ground, so the gain is $-5$, not zero.
