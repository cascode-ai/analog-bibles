# Detailed solution - R420

**Approach.** $C_1$ is open at very low frequencies and a short at very high frequencies, so each limit is a resistive circuit. At low frequencies $R_2 + R_3$ is a shunt feedback resistor from the output to the gate of $M_1$; at high frequencies $C_1$ grounds the middle of that resistor and the feedback disappears. Solve each case with KCL, then check both limits with the full transfer function.

### Step 1 — Small-signal model

Call the gate of $M_1$ node G and the junction of $R_2$, $R_3$ and $C_1$ node N. With $\lambda = 0$, $M_1$ is a current $g_{m1}v_G$ out of the output node to ground, with no $r_{O1}$. $M_2$ has its gate and source at fixed potentials and no $r_O$, so it is an **open circuit** and $g_{m2}$ plays no role. With $g_{m1} = 1/(200\ \Omega) = 5$ mS and $R_1 = R_2 = R_3 = 2\ \mathrm{k\Omega}$, $g_{m1}R = 10$ for each resistor.

### Step 2 — Very low frequencies: $C_1$ open

$R_2$ and $R_3$ in series form one feedback resistor from the output to G,

$$R_F = R_2 + R_3 = 4\ \mathrm{k\Omega} .$$

**KCL at the output.** Only $M_1$ and $R_F$ connect to the output ($M_2$ is open), so

$$\frac{v_G - v_{out}}{R_F} = g_{m1}v_G\ \Longrightarrow\ v_{out} = v_G\,(1 - g_{m1}R_F) .$$

**KCL at G.** The current through $R_1$ continues through $R_F$, and it equals $g_{m1}v_G$:

$$\frac{v_{in} - v_G}{R_1} = g_{m1}v_G\ \Longrightarrow\ v_G = \frac{v_{in}}{1 + g_{m1}R_1} .$$

**Gain:**

$$
\begin{aligned}
A_v(0) &= \frac{v_{out}}{v_{in}} = \frac{1 - g_{m1}(R_2 + R_3)}{1 + g_{m1}R_1}\\
&= \frac{1 - (5\ \mathrm{mS})(4\ \mathrm{k\Omega})}{1 + (5\ \mathrm{mS})(2\ \mathrm{k\Omega})} = \frac{1 - 20}{1 + 10} = -\frac{19}{11} = -1.73 .
\end{aligned}
$$

The ideal (infinite-loop-gain) value is $-R_F/R_1 = -2$; the "1" in the numerator is the signal fed forward through $R_F$, and the "1" in the denominator reflects the finite transconductance of $M_1$ ($g_{m1}R_1 = 10$).

### Step 3 — Very high frequencies: $C_1$ a short

Node N is at ac ground, and the circuit splits in two:

- **Input side:** $R_1$ and $R_2$ form a divider (no gate current):
$$v_G = v_{in}\,\frac{R_2}{R_1 + R_2} = \frac{v_{in}}{2} .$$
- **Output side:** $M_1$ drives only $R_3$ to ground ($M_2$ open):
$$v_{out} = -g_{m1}R_3\,v_G .$$

There is no path from the output back to G: **the feedback is gone.**

$$A_v(\infty) = -g_{m1}R_3\,\frac{R_2}{R_1 + R_2} = -(5\ \mathrm{mS})(2\ \mathrm{k\Omega})\times\frac12 = -10\times\frac12 = -5 .$$

### Step 4 — Check with the full transfer function

With all resistors equal to $R$, $k = g_{m1}R = 10$ and $\tau = RC_1 = (2\ \mathrm{k\Omega})(100\ \mathrm{pF}) = 200$ ns, each KCL equation times $R$ reads:

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

The magnitude rises from 1.73 to 5 between a zero at $\omega_z = 1.9/\tau = 9.5\times10^6$ rad/s (about 1.5 MHz) and a pole at $\omega_p = 5.5/\tau = 2.75\times10^7$ rad/s (about 4.4 MHz); $\omega_p/\omega_z = 5/1.73$, the ratio of the two gains.

### Result

$$A_v\big|_{\omega\to0} = \frac{1 - g_{m1}(R_2 + R_3)}{1 + g_{m1}R_1} = -\frac{19}{11} \approx -1.73,\qquad A_v\big|_{\omega\to\infty} = -g_{m1}R_3\,\frac{R_2}{R_1 + R_2} = -5 .$$

At low frequencies $R_2 + R_3$ provides shunt feedback and the gain is near the ideal $-(R_2 + R_3)/R_1 = -2$. At high frequencies $C_1$ grounds the $R_2$–$R_3$ junction, which removes the feedback: the input sees the $R_1$–$R_2$ divider and $M_1$ drives only $R_3$. $g_{m2}$ plays no role.

**Common mistake.** Giving the ideal value $-2$ at low frequencies. With $g_{m1}R_1 = 10$ and the feedforward through $R_F$, the actual value is $-19/11$.

**Common mistake.** Forgetting the $R_1$–$R_2$ divider at high frequencies and answering $-g_{m1}R_3 = -10$. With N grounded, only half of $v_{in}$ reaches the gate.

**Common mistake.** Using $g_{m2}$ as a load conductance, or saying the gain is zero at high frequency. $M_2$ is an open circuit, and the output is still loaded by $R_3$ to ac ground, so the gain is $-5$.
