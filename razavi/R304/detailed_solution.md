# Detailed solution - R304

**Approach.** $M_1$ and $M_2$ form a CMOS inverter from the common gates (node A) to the common drains (the output). With $\lambda = 0$ it is just a transconductance $g_m = g_{m1} + g_{m2}$ with no output resistance. Write KCL at A and at the output, derive the full transfer function, and take its limits $s\to0$ and $s\to\infty$.

### Step 1 — Small-signal model

Call the common gate node A; both transistors are saturated (A biased near the inverter's trip point). Ground and $V_{DD}$ are ac grounds, so both transistors have $v_{gs} = V_A$: $M_1$ draws $g_{m1}V_A$ and $M_2$ draws $g_{m2}V_A$ from the output to ac ground (a rising A makes $M_1$ pull down harder and $M_2$ push up less). With no $r_O$, the inverter is a single transconductance

$$g_m = g_{m1} + g_{m2}$$

drawing $g_mV_A$ from the output, with no resistance at the output.

<!-- diagram: diagram-01.cir -->

### Step 2 — The same current flows through $C_1$, $C_2$ and the transistors

The gates draw no current, so KCL at A gives

$$(V_{in} - V_A)\,C_1s = (V_A - V_{out})\,C_2s . \qquad (1)$$

At the output, the current through $C_2$ leaves only through the transistors (no $r_O$, nothing else connected):

$$(V_A - V_{out})\,C_2s = g_mV_A . \qquad (2)$$

So one current, $g_mV_A$, flows in series through $C_1$, $C_2$ and the transistors.

### Step 3 — Solve for $V_A$ and $V_{out}$

From (1) and (2), the current through $C_1$ equals $g_mV_A$:

$$
\begin{aligned}
(V_{in} - V_A)\,C_1s &= g_mV_A\\
V_{in}C_1s &= V_A(C_1s + g_m)\\
V_A &= V_{in}\,\frac{C_1s}{C_1s + g_m}.
\end{aligned}
$$

From (2), the voltage across $C_2$ is $g_mV_A/(C_2s)$, so

$$V_{out} = V_A - \frac{g_mV_A}{C_2s} = V_A\,\frac{C_2s - g_m}{C_2s}.$$

Substitute $V_A$:

$$
\begin{aligned}
V_{out} &= V_{in}\,\frac{C_1s}{C_1s + g_m}\cdot\frac{C_2s - g_m}{C_2s}\\
\frac{V_{out}}{V_{in}}(s) &= \frac{C_1}{C_2}\cdot\frac{C_2s - g_m}{C_1s + g_m}, \qquad g_m = g_{m1} + g_{m2},
\end{aligned}
$$

with a pole at $s = -g_m/C_1$ (left half plane) and a zero at $s = +g_m/C_2$ (right half plane, from the feedforward through $C_2$).

### Step 4 — Very low frequencies

As $s\to0$, $C_2s - g_m\to -g_m$ and $C_1s + g_m\to g_m$:

$$\frac{V_{out}}{V_{in}}\bigg|_{s\to0} = \frac{C_1}{C_2}\cdot\frac{-g_m}{g_m} = -\frac{C_1}{C_2}.$$

With $\lambda = 0$ the inverter's gain is infinite and $C_2$ closes a negative-feedback loop around it, so A is a **virtual ground** ($V_A = V_{in}C_1s/(C_1s + g_m)\to0$). The input current $V_{in}C_1s$ flows through $C_2$, giving $V_{out} = -V_{in}C_1s/(C_2s) = -(C_1/C_2)V_{in}$, i.e. $-Z_{C2}/Z_{C1}$.

### Step 5 — Very high frequencies

As $s\to\infty$, $C_2s - g_m\to C_2s$ and $C_1s + g_m\to C_1s$:

$$\frac{V_{out}}{V_{in}}\bigg|_{s\to\infty} = \frac{C_1}{C_2}\cdot\frac{C_2s}{C_1s} = +1 .$$

The series current is at most the finite transistor current $g_mV_A$, which drops negligible voltage across the tiny impedances $1/(Cs)$. With no other load at the output, the capacitors pass the input straight through: $V_{out} = V_A = V_{in}$.

### Step 6 — The transition between the two limits

At $s = j\omega$,

$$\left|\frac{V_{out}}{V_{in}}\right| = \frac{C_1}{C_2}\sqrt{\frac{g_m^2 + C_2^2\omega^2}{g_m^2 + C_1^2\omega^2}},$$

which moves from $C_1/C_2$ (for $\omega\ll g_m/C_1, g_m/C_2$) to 1 (for $\omega\gg g_m/C_1, g_m/C_2$), while the phase moves from $180^\circ$ (inversion) to $0^\circ$. For example, for $C_1 = 2C_2$ the gain goes from $-2$ at low frequency to $+1$ at high frequency. For $C_1 = C_2$ the magnitude is exactly 1 at all frequencies: an all-pass network whose phase alone changes.

### Result

$$\frac{V_{out}}{V_{in}}(s) = \frac{C_1}{C_2}\cdot\frac{C_2s - (g_{m1} + g_{m2})}{C_1s + (g_{m1} + g_{m2})}$$

- **Very low frequencies:** $V_{out}/V_{in} = -C_1/C_2$ (node A is a virtual ground because the inverter gain is infinite with $\lambda = 0$).
- **Very high frequencies:** $V_{out}/V_{in} = +1$ (the transistor current is negligible compared with the capacitor currents, and nothing else loads the output).

**Common mistake.** Quoting the inverter's open-loop gain, $-(g_{m1} + g_{m2})r_O$ or "infinite", as the low-frequency gain. $C_2$ closes negative feedback around the inverter, so with infinite open-loop gain the closed-loop gain is the capacitor ratio, $-C_1/C_2$.

**Common mistake.** Claiming the high-frequency gain is 0 (output shorted), $C_1/(C_1 + C_2)$ (a capacitive divider to ground) or $-1$. There is no capacitance from the output to ground, so the only current in $C_2$ is the finite transistor current, and $V_{out}$ follows $V_A$, which follows $V_{in}$: the gain is $+1$.

**Common mistake.** Treating $M_2$ as a passive current-source load (keeping only $g_{m1}$). Its gate is node A, so it contributes $g_{m2}$; with $\lambda = 0$ this leaves the two limits unchanged but sets the pole and zero, $-(g_{m1} + g_{m2})/C_1$ and $+(g_{m1} + g_{m2})/C_2$.
