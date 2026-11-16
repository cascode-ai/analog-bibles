# Detailed solution - R584

**Approach.** Analyse the two phases separately. In the sampling phase the op amp is in unity-gain feedback, so X is a virtual ground, the output sits near zero and $C_H$ charges to $V_{in}$. When $S_2$ opens, the charge on node X is frozen. In the amplification phase $C_H$ is flipped around the op amp, and charge conservation at X gives the output. We then compute the sampled values for the given input and clock and build the waveform.

### Step 1 — The circuit and its nodes

Reading the figure:

- $C_H$ connects node P (its left plate) to node X (its right plate). X is the op amp's inverting input; the non-inverting input is grounded.
- $S_1$ connects $V_{in}$ to P; $S_3$ connects P to $V_{out}$; $S_2$ connects X to $V_{out}$.
- The op amp has a high open-loop gain $A$: $V_{out} = A\,(V^+ - V^-) = -A\,V_X$.

### Step 2 — Sampling phase: output at virtual ground, $C_H$ charged to $V_{in}$

With $S_1$ and $S_2$ closed and $S_3$ open, P is connected to $V_{in}$ and the op amp output is shorted to its own inverting input.

<!-- diagram: diagram-01.cir -->

**Op amp with output tied to X.** $S_2$ forces $V_{out} = V_X$, and the op amp forces $V_{out} = -A\,V_X$. Equate the two:

$$
\begin{aligned}
V_X &= -A\,V_X\\
V_X\,(1 + A) &= 0\\
V_X &= 0 = V_{out}.
\end{aligned}
$$

So during sampling **the output is at (about) zero**, not at $V_{in}$. It is the capacitor, not the output, that follows the input.

**Voltage and charge on $C_H$.** The capacitor sees $V_P - V_X = V_{in} - 0 = V_{in}$. The charge on its right (X-side) plate is

$$Q_X = C_H\,(V_X - V_P) = C_H\,(0 - V_{in}) = -C_H\,V_{in}.$$

$Q_X$ follows the input continuously during this phase.

### Step 3 — End of sampling: $S_2$ opens first

At the end of the sampling phase, $S_2$ opens slightly before $S_1$. Call that instant $t_k$ and the input value then $V_{0k} = V_{in}(t_k)$.

- When $S_2$ opens, node X is left connected only to $C_H$ and to the op amp input, which draws no current. X is now **floating**, so its total charge can no longer change:

$$Q_X = -C_H\,V_{0k}\quad\text{(frozen at } t_k\text{)}.$$

- When $S_1$ opens a moment later, it only changes the voltage of P; it cannot add charge to X because no conducting path reaches X. So the sample is defined by the instant $S_2$ opens.

(This is *bottom-plate sampling*: the sampling instant is set by the switch at the virtual-ground node, whose charge injection does not depend on $V_{in}$ because X is always at 0 V.)

### Step 4 — Amplification phase: charge conservation at X

Now $S_3$ is closed and $S_1$, $S_2$ are open. $C_H$ is connected between $V_{out}$ (through $S_3$) and X: it has been "flipped around" the op amp and is now its feedback element. Let $C_{in}$ be the op amp's input capacitance at X (zero for an ideal op amp).

<!-- diagram: diagram-02.cir -->

**Charge at X in this phase:**

$$Q_X = C_H\,(V_X - V_{out}) + C_{in}\,V_X .$$

At $t_k$, $C_{in}$ had $V_X = 0$ across it, so the frozen charge is still just $-C_HV_{0k}$. **Conservation of charge at X:**

$$C_H\,(V_X - V_{out}) + C_{in}\,V_X = -C_H\,V_{0k}.$$

**Ideal op amp** ($A \to \infty$, so $V_X \to 0$):

$$
\begin{aligned}
-C_H\,V_{out} &= -C_H\,V_{0k}\\
V_{out} &= V_{0k}.
\end{aligned}
$$

The gain is $+1$, with no inversion: the capacitor that held $V_{0k}$ (positive plate at P) is now placed with P at the output and X at virtual ground, so the output reproduces exactly the stored voltage.

**Finite gain.** Substitute $V_X = -V_{out}/A$:

$$
\begin{aligned}
C_H\left(-\frac{V_{out}}{A} - V_{out}\right) - C_{in}\frac{V_{out}}{A} &= -C_H\,V_{0k}\\
V_{out}\left[C_H\left(1 + \frac1A\right) + \frac{C_{in}}{A}\right] &= C_H\,V_{0k}\\
V_{out} &= \frac{V_{0k}}{1 + \dfrac{1}{A}\left(1 + \dfrac{C_{in}}{C_H}\right)}.
\end{aligned}
$$

For a high-gain op amp the error is tiny. For example, with $A = 1000$ and $C_{in} = 0.1\,C_H$, $V_{out} = V_{0k}/1.0011$, a 0.11 % gain error. So $V_{out} \approx V_{0k}$.

### Step 5 — Timing and sampled values

**Input.** $V_{in} = 0.5 + 0.5\sin\omega_0t$ (volts): between 0 and 1 V, period $1/(10\ \mathrm{MHz}) = 100$ ns.

**Clock.** Period $1/(50\ \mathrm{MHz}) = 20$ ns; 50 % duty cycle, so each phase lasts 10 ns. That gives $100/20 = 5$ samples per input period.

Choose the sampling phases at 0–10, 20–30, 40–50, 60–70 and 80–90 ns; the amplification phases are 10–20, 30–40, 50–60, 70–80 and 90–100 ns. The samples are taken at the ends of the sampling phases, $t_k = 10, 30, 50, 70, 90$ ns. The phase of the sine is $\theta = 3.6^\circ$ per ns:

$$
\begin{aligned}
V_{0}(10\ \mathrm{ns}) &= 0.5 + 0.5\sin36^\circ = 0.5 + 0.5(0.5878) = 0.794\ \mathrm{V},\\
V_{0}(30\ \mathrm{ns}) &= 0.5 + 0.5\sin108^\circ = 0.5 + 0.5(0.9511) = 0.976\ \mathrm{V},\\
V_{0}(50\ \mathrm{ns}) &= 0.5 + 0.5\sin180^\circ = 0.500\ \mathrm{V},\\
V_{0}(70\ \mathrm{ns}) &= 0.5 + 0.5\sin252^\circ = 0.5 - 0.5(0.9511) = 0.024\ \mathrm{V},\\
V_{0}(90\ \mathrm{ns}) &= 0.5 + 0.5\sin324^\circ = 0.5 - 0.5(0.5878) = 0.206\ \mathrm{V}.
\end{aligned}
$$

### Step 6 — The output waveform

| time (ns) | phase | $V_{out}$ |
|---|---|---|
| 0 → 10 | sampling | ≈ 0 |
| 10 → 20 | amplification | rises to and holds **0.794 V** |
| 20 → 30 | sampling | back to ≈ 0 |
| 30 → 40 | amplification | **0.976 V** |
| 40 → 50 | sampling | ≈ 0 |
| 50 → 60 | amplification | **0.500 V** |
| 60 → 70 | sampling | ≈ 0 |
| 70 → 80 | amplification | **0.024 V** |
| 80 → 90 | sampling | ≈ 0 |
| 90 → 100 | amplification | **0.206 V** |
| 100 → | | repeats |

**How to sketch it.** Draw the input sine lightly (0 to 1 V, period 100 ns). The output is a train of 10-ns-wide rectangular pulses, one every 20 ns, returning to zero in between: a **return-to-zero** sample-and-hold waveform. The top of each pulse is flat and equal to the input value at the start of that pulse (the end of the preceding sampling phase), so the pulse tops follow the sine's envelope. In a real circuit each pulse edge is not vertical: the op amp must slew and settle from 0 to the new value at the start of each hold phase, and back to zero at the start of each sampling phase. The output is valid only near the end of each hold phase.

### Result

$V_{out}$ is a **return-to-zero** sample-and-hold waveform with unity, noninverting gain:

- during each 10-ns sampling phase, $V_{out} \approx 0$ (unity-gain feedback, X at virtual ground) while $C_H$ tracks $V_{in}$;
- during each 10-ns amplification phase, $V_{out} = V_{in}(t_k)$, the input value when $S_2$ opened, more precisely $V_{out} = V_{0k}/[1 + (1 + C_{in}/C_H)/A]$.

With sampling at 0–10, 20–30, … ns, the pulses are 0.794, 0.976, 0.500, 0.024 and 0.206 V (5 per 100-ns input period), each followed by a return to about 0 V.

**Common mistake.** Drawing $V_{out}$ tracking $V_{in}$ during the sampling phase. With $S_2$ closed the op amp is a unity-gain follower of its own grounded non-inverting input, so its output is pinned at 0 V; only the voltage across $C_H$ follows the input.

**Common mistake.** Drawing an inverted output, as if the circuit were an inverting amplifier. In the hold phase no input is applied; the capacitor that stored $+V_{0k}$ (P side positive) is reconnected with P at the output and X at virtual ground, so the output is $+V_{0k}$.

**Common mistake.** Drawing a continuous staircase without the returns to zero. Unlike a simple switch-and-buffer track-and-hold, this circuit resets the output to zero every sampling phase, so the held value exists only during the amplification phases.
