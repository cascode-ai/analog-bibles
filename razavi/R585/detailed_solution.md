# Detailed solution - R585

**Approach.** The quantity that matters is the total charge on node X, the op amp's inverting input. The op amp's high gain keeps X at virtual ground, so any charge change at X must appear on $C_2$, and any voltage change at P is copied to the output with gain $-C_1/C_2$. We follow the circuit through each switching event in time order, applying charge conservation at X (and at P when P floats), and then assemble the waveform.

### Step 1 — Notation and the switch error model

- $C_1$ connects P to X; $C_2$ and $S_2$ connect X to $V_{out}$; $S_1$ connects $V_{in}$ to P; $S_3$ connects P to ground.
- High op-amp gain: X stays at virtual ground, $V_X \approx 0$, whenever a feedback path exists.
- Switch $S_j$ ($j = 1, 2, 3$) is an NMOS with width $W_j$, length $L_j$, oxide capacitance per unit area $C_{ox}$ and overlap capacitance $W_jC_{ov}$ on each side.
- When an on switch whose terminals sit at voltage $V_s$ turns off, its channel holds electrons of total charge magnitude
$$q_j = W_jL_jC_{ox}\,(V_{DD} - V_s - V_{TH,j}),$$
and a fraction $\alpha_j$ of them flows to the node of interest. Its gate falls by $V_{DD}$ and couples a charge $-W_jC_{ov}V_{DD}$ to each side through the overlaps (clock feedthrough).
- Any charge delivered to a low-impedance node (the op-amp output, the input source, ground) is absorbed there and has no effect.

Both effects of a turning-off NMOS deliver **negative** charge (electrons, and a falling gate).

Let $t_1$ be the instant $S_2$ turns off, $V_{in0} = V_{in}(t_1)$ and $V_{in1} = V_{in}(t_1 + \Delta t)$.

### Step 2 — Sampling phase ($t < t_1$)

$S_1$ and $S_2$ are on, $S_3$ is off. $S_2$ shorts the output to X, so the op amp is a unity-gain follower of its grounded + input:

$$V_{out} = V_X = 0, \qquad V_P = V_{in}(t).$$

$C_2$ has 0 V across it, and $C_1$ has $V_{in}$ across it. The total charge on the plates connected to X is

$$Q_X = C_1\,(V_X - V_P) + C_2\,(V_X - V_{out}) = C_1\,(0 - V_{in}) + C_2\,(0 - 0) = -C_1V_{in}.$$

**Output:** $V_{out} \approx 0$ during the whole sampling phase.

### Step 3 — $S_2$ turns off at $t_1$: a constant positive step

$S_2$'s terminals are both at about 0 V (X and the output), so its channel charge is

$$q_2 = W_2L_2C_{ox}\,(V_{DD} - 0 - V_{TH,2}),$$

which **does not depend on $V_{in}$**.

- The fraction $1 - \alpha_2$ that goes to the op-amp output, and the feedthrough on that side, are absorbed by the low-impedance output.
- The fraction $\alpha_2$ lands on X, together with the feedthrough charge $-W_2C_{ov}V_{DD}$ through the X-side overlap.

After $t_1$, X is no longer connected to any conducting path (only to capacitors and the op amp input), so its charge stays constant from now on:

$$Q_X(t_1^+) = -C_1V_{in0} - \alpha_2q_2 - W_2C_{ov}V_{DD}.$$

The op amp now keeps X at 0 through the feedback capacitor $C_2$. With $V_X = 0$ and $V_P = V_{in0}$ (still connected to the input):

$$
\begin{aligned}
C_1\,(0 - V_{in0}) + C_2\,(0 - V_{out}) &= -C_1V_{in0} - \alpha_2q_2 - W_2C_{ov}V_{DD}\\
-C_2V_{out} &= -\alpha_2q_2 - W_2C_{ov}V_{DD}\\
V_{out} = \Delta V_2 &\equiv \frac{\alpha_2W_2L_2C_{ox}(V_{DD} - V_{TH,2}) + W_2C_{ov}V_{DD}}{C_2}.
\end{aligned}
$$

**Output:** a small **upward** step $\Delta V_2$. The electrons dumped on X cannot stay on X (it is held at 0 V), so the op amp pulls them onto $C_2$'s X-side plate by raising its output. Because X is always at 0 V, $\Delta V_2$ is the same for every input level: it is a **constant offset**. This instant, $t_1$, is the true sampling instant.

### Step 4 — $t_1 < t < t_1 + \Delta t$: an inverting amplifier for input changes

$S_1$ is still on, so P keeps following $V_{in}(t)$. X holds the constant charge of Step 3, and $V_X = 0$:

$$
\begin{aligned}
C_1\,(0 - V_{in}(t)) - C_2V_{out}(t) &= -C_1V_{in0} - C_2\Delta V_2\\
V_{out}(t) &= \Delta V_2 - \frac{C_1}{C_2}\,\big[V_{in}(t) - V_{in0}\big].
\end{aligned}
$$

Changes of the input after $t_1$ pass through $C_1$ into the virtual ground and appear on $C_2$, with gain $-C_1/C_2$. For the rising input of the inset, **$V_{out}$ ramps down**, mirroring the shape of $V_{in}$ and scaled by $C_1/C_2$. At the end of this interval

$$V_{out}\big((t_1 + \Delta t)^-\big) = \Delta V_2 - \frac{C_1}{C_2}\,(V_{in1} - V_{in0}).$$

### Step 5 — $S_1$ turns off at $t_1 + \Delta t$: an upward jump, then a flat segment

$S_1$'s terminals are at $V_{in1}$, so its channel charge **depends on the input**:

$$q_1 = W_1L_1C_{ox}\,(V_{DD} - V_{in1} - V_{TH,1}).$$

The part $\alpha_1q_1$ and the feedthrough $-W_1C_{ov}V_{DD}$ land on P; the rest goes to the input source. P is now floating. The capacitance at P is $C_1$, whose other plate is the virtual ground X (other parasitics at P are neglected). So $V_P$ drops by

$$\Delta V_P = \frac{\alpha_1q_1 + W_1C_{ov}V_{DD}}{C_1}, \qquad V_P = V_{in1} - \Delta V_P.$$

**Effect at the output.** X's charge is still conserved. The X-side plate of $C_1$ carries $C_1(0 - V_P)$, which **rises** by $C_1\Delta V_P$ when $V_P$ falls. To keep $Q_X$ constant, the X-side plate of $C_2$ must change by $-C_1\Delta V_P$:

$$
\begin{aligned}
C_2\,\Delta(0 - V_{out}) &= -C_1\Delta V_P\\
\Delta V_{out} &= +\frac{C_1}{C_2}\,\Delta V_P .
\end{aligned}
$$

**Output:** an **upward** jump of $(C_1/C_2)\Delta V_P$. For the next $\Delta t$, P floats, so the input no longer reaches the circuit and nothing changes: $V_{out}$ is **flat** at

$$V_{out} = \Delta V_2 - \frac{C_1}{C_2}\,(V_{in1} - V_{in0}) + \frac{C_1}{C_2}\,\Delta V_P .$$

### Step 6 — $S_3$ turns on at $t_1 + 2\Delta t$: settling to the final value

$S_3$ connects P to ground. Its channel charge (and the charge coupled by its rising gate) is supplied mostly by ground, and once $S_3$ is fully on, P is forced to exactly 0 V whatever charge had been there. These effects can only cause a brief glitch.

**Final value from charge conservation at X.** At the end, $V_P = 0$ and $V_X = 0$, so $C_1$ carries no charge, and all of X's frozen charge sits on $C_2$:

$$
\begin{aligned}
C_1\,(0 - 0) + C_2\,(0 - V_{out}) &= -C_1V_{in0} - C_2\Delta V_2\\
V_{out,final} &= \frac{C_1}{C_2}\,V_{in0} + \Delta V_2 .
\end{aligned}
$$

The step from the flat level of Step 5 to this final value is

$$\frac{C_1}{C_2}V_{in0} + \Delta V_2 - \left[\Delta V_2 - \frac{C_1}{C_2}(V_{in1} - V_{in0}) + \frac{C_1}{C_2}\Delta V_P\right] = \frac{C_1}{C_2}\,(V_{in1} - \Delta V_P),$$

an upward move by the voltage P held, times $C_1/C_2$. It is completed with the op amp's settling (or slewing) time constant.

**Key insight.** $\Delta V_P$, $V_{in1}$ and everything that happens after $t_1$ cancel out of the final value. The reason: once $S_2$ is off, the charge on X is frozen, and at the end both plates of $C_1$ are at 0 V. Only $S_2$'s injection, which is input-independent, remains, so this "bottom-plate" timing makes the output a linear function of $V_{in0}$ plus a constant offset.

### Step 7 — The waveform to plot

| interval | $V_{out}$ | shape |
|---|---|---|
| sampling, $t < t_1$ | $0$ | flat at virtual ground |
| at $t_1$ ($S_2$ off) | $0 \to \Delta V_2$ | small step **up**, same for every input |
| $t_1 \to t_1 + \Delta t$ | $\Delta V_2 - \dfrac{C_1}{C_2}[V_{in}(t) - V_{in0}]$ | ramps **down**, inverted copy of the rising input |
| at $t_1 + \Delta t$ ($S_1$ off) | jump **up** by $\dfrac{C_1}{C_2}\Delta V_P$ | input-dependent jump |
| $t_1 + \Delta t \to t_1 + 2\Delta t$ | constant | flat (P floating) |
| from $t_1 + 2\Delta t$ ($S_3$ on) | rises by $\dfrac{C_1}{C_2}(V_{in1} - \Delta V_P)$ | brief glitch, then settling/slewing upward |
| final | $\dfrac{C_1}{C_2}V_{in0} + \Delta V_2$ | flat |

How large is each feature: $\Delta V_2$ and $(C_1/C_2)\Delta V_P$ are small (millivolts for small switches); the ramp in the first $\Delta t$ is small if $\Delta t$ is short; the final rise to $(C_1/C_2)V_{in0}$ is the large, signal-carrying transition.

### Result

$$V_{out,final} = \frac{C_1}{C_2}\,V_{in0} + \Delta V_2, \qquad \Delta V_2 \approx \frac{\alpha_2W_2L_2C_{ox}(V_{DD} - V_{TH}) + W_2C_{ov}V_{DD}}{C_2},$$

where $V_{in0}$ is the input when $S_2$ turned off and $\Delta V_2$ is an input-independent offset (X sits at 0 V). The waveform: $V_{out} \approx 0$ during sampling; a small step up by $\Delta V_2$ when $S_2$ opens; a downward ramp $-(C_1/C_2)[V_{in}(t) - V_{in0}]$ while $S_1$ is still on; an upward jump $(C_1/C_2)\Delta V_P$ when $S_1$ opens, followed by a flat segment; and, when $S_3$ closes, a (slewing/settling) rise to the final value. The charge injection of $S_1$ and $S_3$ and the input change after $S_2$ opens leave no trace in the final value.

**Common mistake.** Concluding that the final output depends on $S_1$'s charge injection, or on the input at $S_1$'s turn-off. These only move P while X's charge is frozen; at the end P is grounded, so they cancel exactly. This is why $S_2$ is made to turn off first.

**Common mistake.** Getting the polarity of the switching steps wrong. A turning-off NMOS injects electrons, and its falling gate also couples negative charge, so both act in the same direction. Negative charge on X pushes $V_{out}$ **up** (offset $+\Delta V_2$), and a drop of $V_P$ is inverted by $-C_1/C_2$, so the $S_1$ jump is also **up**.

**Common mistake.** Drawing the output tracking the input with a positive gain right after $S_2$ opens. With X at virtual ground and P still driven, the circuit is an inverting amplifier for input changes, so $V_{out}$ moves *opposite* to $V_{in}$ during the first $\Delta t$.
