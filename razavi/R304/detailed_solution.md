# Detailed solution - R304

**Approach.** $M_1$ and $M_2$ form a CMOS inverter whose input is node A (the common gates) and whose output is the common drain. With $\lambda = 0$ the inverter is just a transconductance $g_m = g_{m1} + g_{m2}$ with no output resistance. Write KCL at A and at the output, derive the full transfer function, and then take its limits $s\to0$ and $s\to\infty$. Each limit is also explained physically.

### Step 1 — Reading the circuit

From the figure:

- $V_{in}$ is coupled through $C_1$ to node **A**, the common gate of $M_1$ (NMOS, source grounded) and $M_2$ (PMOS, source at $V_{DD}$).
- The drains of $M_1$ and $M_2$ are tied together at the **output**.
- $C_2$ connects A to the output; it is a feedback capacitor around the inverter.

Both transistors are in saturation (we assume the gate is biased near the inverter's trip point; the dc bias of the floating node A is not part of the small-signal question).

### Step 2 — Small-signal model

- Ground and $V_{DD}$ are ac grounds, so both sources are at ac ground and both transistors have $v_{gs} = V_A$.
- **$M_1$:** current $g_{m1}V_A$ from the output to ground.
- **$M_2$:** a PMOS has the same small-signal form, a current $g_{m2}v_{gs}$ from drain to source; with $v_{gs} = V_A$ this is $g_{m2}V_A$ from the output to ac ground. (If A rises, $M_1$ pulls down harder and $M_2$ pushes up less; both lower the output.)
- $\lambda = 0$: no $r_O$. So the inverter is a single transconductance

$$g_m = g_{m1} + g_{m2},$$

drawing $g_mV_A$ from the output node, with no resistance at the output.

<!-- diagram: diagram-01.cir -->

### Step 3 — The same current flows through $C_1$, $C_2$ and the transistors

**KCL at A.** The gates draw no current, so the current through $C_1$ equals the current through $C_2$:

$$(V_{in} - V_A)\,C_1s = (V_A - V_{out})\,C_2s . \qquad (1)$$

**KCL at the output.** The current arriving through $C_2$ leaves only through the transistors (no $r_O$, nothing else connected):

$$(V_A - V_{out})\,C_2s = g_mV_A . \qquad (2)$$

So one current, $g_mV_A$, flows in series through $C_1$, then $C_2$, then the transistors.

### Step 4 — Solve for $V_A$ and $V_{out}$

Combine (1) and (2): the current through $C_1$ equals $g_mV_A$:

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
\frac{V_{out}}{V_{in}}(s) &= \frac{C_1}{C_2}\cdot\frac{C_2s - g_m}{C_1s + g_m}, \qquad g_m = g_{m1} + g_{m2}.
\end{aligned}
$$

It has a pole at $s = -g_m/C_1$ (left half plane) and a zero at $s = +g_m/C_2$ (right half plane, from the feedforward through $C_2$).

### Step 5 — Very low frequencies

Let $s\to0$. Then $C_2s - g_m\to -g_m$ and $C_1s + g_m\to g_m$:

$$\frac{V_{out}}{V_{in}}\bigg|_{s\to0} = \frac{C_1}{C_2}\cdot\frac{-g_m}{g_m} = -\frac{C_1}{C_2}.$$

**Why.** With $\lambda = 0$ the inverter has infinite voltage gain, and $C_2$ closes a negative-feedback loop around it. As in an op-amp inverting amplifier, node A becomes a **virtual ground** (indeed $V_A = V_{in}C_1s/(C_1s + g_m)\to0$). The input current $V_{in}C_1s$ flows through $C_2$, giving $V_{out} = -V_{in}C_1s/(C_2s) = -(C_1/C_2)V_{in}$, the ratio of the two capacitor impedances, $-Z_{C2}/Z_{C1}$.

### Step 6 — Very high frequencies

Let $s\to\infty$. Then $C_2s - g_m\to C_2s$ and $C_1s + g_m\to C_1s$:

$$\frac{V_{out}}{V_{in}}\bigg|_{s\to\infty} = \frac{C_1}{C_2}\cdot\frac{C_2s}{C_1s} = +1 .$$

**Why.** The series current is at most $g_mV_A$, a finite transistor current. At high frequency the capacitors' impedances $1/(Cs)$ become tiny, so this finite current produces negligible voltage drops across $C_1$ and $C_2$. The output has no other load that could draw current, so the capacitors simply pass the input straight to the output: $V_{out} = V_A = V_{in}$.

### Step 7 — The transition between the two limits

The magnitude of the gain at $s = j\omega$ is

$$\left|\frac{V_{out}}{V_{in}}\right| = \frac{C_1}{C_2}\sqrt{\frac{g_m^2 + C_2^2\omega^2}{g_m^2 + C_1^2\omega^2}},$$

which moves from $C_1/C_2$ (for $\omega\ll g_m/C_1, g_m/C_2$) to 1 (for $\omega\gg g_m/C_1, g_m/C_2$), while the phase moves from $180^\circ$ (inversion) to $0^\circ$. For example, for $C_1 = 2C_2$ the gain goes from $-2$ at low frequency to $+1$ at high frequency. In the special case $C_1 = C_2$ the magnitude is exactly 1 at all frequencies: the circuit becomes an all-pass network whose phase alone changes.

### Result

$$\frac{V_{out}}{V_{in}}(s) = \frac{C_1}{C_2}\cdot\frac{C_2s - (g_{m1} + g_{m2})}{C_1s + (g_{m1} + g_{m2})}$$

- **Very low frequencies:** $V_{out}/V_{in} = -C_1/C_2$ (node A is a virtual ground because the inverter gain is infinite with $\lambda = 0$).
- **Very high frequencies:** $V_{out}/V_{in} = +1$ (the transistor current is negligible compared with the capacitor currents, and nothing else loads the output).

**Common mistake.** Quoting the inverter's open-loop gain, $-(g_{m1} + g_{m2})r_O$ or "infinite", as the low-frequency gain. $C_2$ provides negative feedback around the inverter, and with infinite open-loop gain the closed-loop gain is set entirely by the capacitor ratio, $-C_1/C_2$.

**Common mistake.** Claiming the high-frequency gain is 0 (as if the output were shorted) or $C_1/(C_1 + C_2)$ (as if A were loaded by a capacitive divider to ground). There is no capacitance from the output to ground in this problem, so at high frequency the only current in $C_2$ is the finite transistor current, which produces a negligible drop across $C_2$'s tiny impedance. $V_{out}$ therefore follows $V_A$, which follows $V_{in}$. The gain is $+1$, not $-1$.

**Common mistake.** Treating $M_2$ as a passive current-source load (keeping only $g_{m1}$). The gate of $M_2$ is node A, so it is driven by the signal and contributes $g_{m2}$. With $\lambda = 0$ this does not change the two limits, but it does set the pole and zero locations, $-(g_{m1} + g_{m2})/C_1$ and $+(g_{m1} + g_{m2})/C_2$.
