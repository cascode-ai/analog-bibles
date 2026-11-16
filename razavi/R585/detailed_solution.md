# Detailed solution - R585

**Approach.** Track the total charge on node X. The op amp's high gain keeps X at virtual ground, so any charge change at X must appear on $C_2$, and any voltage change at P is copied to the output with gain $-C_1/C_2$. Follow the switching events in time order, applying charge conservation at X (and at P when P floats), and assemble the waveform.

### Step 1 — Switch error model and notation

Switch $S_j$ ($j = 1, 2, 3$) has width $W_j$, length $L_j$ and overlap $W_jC_{ov}$ on each side. When it turns off with its terminals at $V_s$, its channel holds electrons of total charge magnitude

$$q_j = W_jL_jC_{ox}\,(V_{DD} - V_s - V_{TH,j}),$$

of which a fraction $\alpha_j$ flows to the node of interest, and its gate, falling by $V_{DD}$, couples $-W_jC_{ov}V_{DD}$ to each side. Both effects deliver **negative** charge. Charge delivered to a low-impedance node (the op-amp output, the input source, ground) is absorbed with no effect.

Let $t_1$ be the instant $S_2$ turns off, $V_{in0} = V_{in}(t_1)$ and $V_{in1} = V_{in}(t_1 + \Delta t)$.

### Step 2 — Sampling phase ($t < t_1$)

$S_2$ shorts the output to X, so the op amp follows its grounded + input:

$$V_{out} = V_X = 0, \qquad V_P = V_{in}(t).$$

The total charge on the plates connected to X is

$$Q_X = C_1\,(V_X - V_P) + C_2\,(V_X - V_{out}) = C_1\,(0 - V_{in}) + C_2\,(0 - 0) = -C_1V_{in}.$$

**Output:** $V_{out} \approx 0$ during the whole sampling phase.

### Step 3 — $S_2$ turns off at $t_1$: a constant positive step

Both terminals of $S_2$ (X and the output) are at about 0 V, so

$$q_2 = W_2L_2C_{ox}\,(V_{DD} - 0 - V_{TH,2}),$$

which **does not depend on $V_{in}$**. The fraction $1 - \alpha_2$ and the output-side feedthrough are absorbed by the op-amp output; the fraction $\alpha_2$ lands on X, together with $-W_2C_{ov}V_{DD}$ through the X-side overlap. From now on X has no conducting path, so its charge stays

$$Q_X(t_1^+) = -C_1V_{in0} - \alpha_2q_2 - W_2C_{ov}V_{DD}.$$

The op amp keeps $V_X = 0$ through $C_2$, and $V_P = V_{in0}$:

$$
\begin{aligned}
C_1\,(0 - V_{in0}) + C_2\,(0 - V_{out}) &= -C_1V_{in0} - \alpha_2q_2 - W_2C_{ov}V_{DD}\\
-C_2V_{out} &= -\alpha_2q_2 - W_2C_{ov}V_{DD}\\
V_{out} = \Delta V_2 &\equiv \frac{\alpha_2W_2L_2C_{ox}(V_{DD} - V_{TH,2}) + W_2C_{ov}V_{DD}}{C_2}.
\end{aligned}
$$

**Output:** a small **upward** step $\Delta V_2$: the electrons dumped on X cannot stay there (X is held at 0 V), so the op amp pulls them onto $C_2$ by raising its output. Because X is always at 0 V, $\Delta V_2$ is the same for every input level, a **constant offset**. $t_1$ is the true sampling instant.

### Step 4 — $t_1 < t < t_1 + \Delta t$: an inverting amplifier for input changes

$S_1$ is still on, so P follows $V_{in}(t)$, while X holds the charge of Step 3 at $V_X = 0$:

$$
\begin{aligned}
C_1\,(0 - V_{in}(t)) - C_2V_{out}(t) &= -C_1V_{in0} - C_2\Delta V_2\\
V_{out}(t) &= \Delta V_2 - \frac{C_1}{C_2}\,\big[V_{in}(t) - V_{in0}\big].
\end{aligned}
$$

Input changes after $t_1$ appear at the output with gain $-C_1/C_2$, so for the rising input of the inset **$V_{out}$ ramps down**, an inverted copy of $V_{in}$ scaled by $C_1/C_2$. At the end of this interval

$$V_{out}\big((t_1 + \Delta t)^-\big) = \Delta V_2 - \frac{C_1}{C_2}\,(V_{in1} - V_{in0}).$$

### Step 5 — $S_1$ turns off at $t_1 + \Delta t$: an upward jump, then a flat segment

$S_1$'s terminals are at $V_{in1}$, so its channel charge **depends on the input**:

$$q_1 = W_1L_1C_{ox}\,(V_{DD} - V_{in1} - V_{TH,1}).$$

$\alpha_1q_1$ and the feedthrough $-W_1C_{ov}V_{DD}$ land on P (the rest goes to the input source), and P now floats. Its capacitance is $C_1$, whose other plate is the virtual ground X (other parasitics neglected), so $V_P$ drops by

$$\Delta V_P = \frac{\alpha_1q_1 + W_1C_{ov}V_{DD}}{C_1}, \qquad V_P = V_{in1} - \Delta V_P.$$

X's charge is still conserved. The X-side plate of $C_1$, carrying $C_1(0 - V_P)$, rises by $C_1\Delta V_P$, so the X-side plate of $C_2$ must change by $-C_1\Delta V_P$:

$$
\begin{aligned}
C_2\,\Delta(0 - V_{out}) &= -C_1\Delta V_P\\
\Delta V_{out} &= +\frac{C_1}{C_2}\,\Delta V_P .
\end{aligned}
$$

**Output:** an **upward** jump of $(C_1/C_2)\Delta V_P$. For the next $\Delta t$, P floats and the input no longer reaches the circuit, so $V_{out}$ is **flat** at

$$V_{out} = \Delta V_2 - \frac{C_1}{C_2}\,(V_{in1} - V_{in0}) + \frac{C_1}{C_2}\,\Delta V_P .$$

### Step 6 — $S_3$ turns on at $t_1 + 2\Delta t$: settling to the final value

$S_3$ connects P to ground. Its channel charge and rising-gate feedthrough are supplied mostly by ground, and once it is fully on P is forced to exactly 0 V, so these cause at most a brief glitch.

At the end $V_P = V_X = 0$, so $C_1$ carries no charge and all of X's frozen charge sits on $C_2$:

$$
\begin{aligned}
C_1\,(0 - 0) + C_2\,(0 - V_{out}) &= -C_1V_{in0} - C_2\Delta V_2\\
V_{out,final} &= \frac{C_1}{C_2}\,V_{in0} + \Delta V_2 .
\end{aligned}
$$

The step from the flat level of Step 5 to this final value is

$$\frac{C_1}{C_2}V_{in0} + \Delta V_2 - \left[\Delta V_2 - \frac{C_1}{C_2}(V_{in1} - V_{in0}) + \frac{C_1}{C_2}\Delta V_P\right] = \frac{C_1}{C_2}\,(V_{in1} - \Delta V_P),$$

an upward move by the voltage P held, times $C_1/C_2$, completed with the op amp's settling (or slewing).

$\Delta V_P$, $V_{in1}$ and everything after $t_1$ cancel out of the final value, because X's charge is frozen at $t_1$ and both plates of $C_1$ end at 0 V. Only $S_2$'s input-independent injection remains, so this bottom-plate timing makes the output a linear function of $V_{in0}$ plus a constant offset.

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

$\Delta V_2$ and $(C_1/C_2)\Delta V_P$ are small (millivolts for small switches), and the ramp in the first $\Delta t$ is small if $\Delta t$ is short; the final rise to $(C_1/C_2)V_{in0}$ is the large, signal-carrying transition.

### Result

$$V_{out,final} = \frac{C_1}{C_2}\,V_{in0} + \Delta V_2, \qquad \Delta V_2 \approx \frac{\alpha_2W_2L_2C_{ox}(V_{DD} - V_{TH}) + W_2C_{ov}V_{DD}}{C_2},$$

where $V_{in0}$ is the input when $S_2$ turned off and $\Delta V_2$ is an input-independent offset (X sits at 0 V). The waveform: $V_{out} \approx 0$ during sampling; a small step up by $\Delta V_2$ when $S_2$ opens; a downward ramp $-(C_1/C_2)[V_{in}(t) - V_{in0}]$ while $S_1$ is still on; an upward jump $(C_1/C_2)\Delta V_P$ when $S_1$ opens, followed by a flat segment; and, when $S_3$ closes, a (slewing/settling) rise to the final value. The charge injection of $S_1$ and $S_3$ and the input change after $S_2$ opens leave no trace in the final value.

**Common mistake.** Concluding that the final output depends on $S_1$'s charge injection, or on the input at $S_1$'s turn-off. These only move P while X's charge is frozen, and at the end P is grounded, so they cancel exactly; this is why $S_2$ turns off first.

**Common mistake.** Getting the polarity of the steps wrong. Negative charge on X pushes $V_{out}$ **up** (offset $+\Delta V_2$), and the drop of $V_P$ is inverted by $-C_1/C_2$, so the $S_1$ jump is also **up**.

**Common mistake.** Drawing the output tracking the input with a positive gain right after $S_2$ opens. With X at virtual ground and P still driven, the circuit is an inverting amplifier for input changes, so $V_{out}$ moves *opposite* to $V_{in}$ during the first $\Delta t$.
