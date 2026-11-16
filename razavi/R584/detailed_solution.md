# Detailed solution - R584

**Approach.** Analyse the two phases separately. In the sampling phase the op amp is in unity-gain feedback, so X is a virtual ground, the output sits near zero and $C_H$ charges to $V_{in}$. When $S_2$ opens, the charge on node X is frozen. In the amplification phase $C_H$ is flipped around the op amp, and charge conservation at X gives the output. Then compute the sampled values for the given input and clock and build the waveform.

### Step 1 — Sampling phase: output at virtual ground, $C_H$ charged to $V_{in}$

Call the left plate of $C_H$ P and its right plate, the op amp's inverting input, X. With $S_1$ and $S_2$ closed and $S_3$ open, P is at $V_{in}$ and the op amp output is tied to X.

<!-- diagram: diagram-01.cir -->

$S_2$ forces $V_{out} = V_X$, and the op amp (gain $A$, non-inverting input grounded) forces $V_{out} = -A\,V_X$, so $V_X(1 + A) = 0$ and $V_X = 0 = V_{out}$. During sampling **the output is at (about) zero**, not at $V_{in}$; it is the capacitor, not the output, that follows the input. $C_H$ sees $V_P - V_X = V_{in}$, and the charge on its X-side plate,

$$Q_X = C_H\,(V_X - V_P) = C_H\,(0 - V_{in}) = -C_H\,V_{in},$$

follows the input continuously.

### Step 2 — End of sampling: $S_2$ opens first

$S_2$ opens slightly before $S_1$; call that instant $t_k$ and the input then $V_{0k} = V_{in}(t_k)$. Node X is then connected only to $C_H$ and the op amp input, which draws no current, so its charge is frozen:

$$Q_X = -C_H\,V_{0k}\quad\text{(frozen at } t_k\text{)}.$$

When $S_1$ opens a moment later, it only changes the voltage of P; no conducting path reaches X, so the sample is set by the instant $S_2$ opens. This is *bottom-plate sampling*: the sampling switch is at the virtual-ground node, so its charge injection does not depend on $V_{in}$.

### Step 3 — Amplification phase: charge conservation at X

Now $S_3$ is closed and $S_1$, $S_2$ are open, so $C_H$ sits between $V_{out}$ and X as the op amp's feedback element. Let $C_{in}$ be the op amp's input capacitance at X (zero for an ideal op amp).

<!-- diagram: diagram-02.cir -->

The charge at X is now

$$Q_X = C_H\,(V_X - V_{out}) + C_{in}\,V_X .$$

At $t_k$, $C_{in}$ had $V_X = 0$ across it, so the frozen charge is still $-C_HV_{0k}$, and conservation at X gives

$$C_H\,(V_X - V_{out}) + C_{in}\,V_X = -C_H\,V_{0k}.$$

**Ideal op amp** ($A \to \infty$, so $V_X \to 0$):

$$
\begin{aligned}
-C_H\,V_{out} &= -C_H\,V_{0k}\\
V_{out} &= V_{0k}.
\end{aligned}
$$

The gain is $+1$, with no inversion: the capacitor that held $V_{0k}$ (positive plate at P) now has P at the output and X at virtual ground.

**Finite gain.** Substitute $V_X = -V_{out}/A$:

$$
\begin{aligned}
C_H\left(-\frac{V_{out}}{A} - V_{out}\right) - C_{in}\frac{V_{out}}{A} &= -C_H\,V_{0k}\\
V_{out}\left[C_H\left(1 + \frac1A\right) + \frac{C_{in}}{A}\right] &= C_H\,V_{0k}\\
V_{out} &= \frac{V_{0k}}{1 + \dfrac{1}{A}\left(1 + \dfrac{C_{in}}{C_H}\right)}.
\end{aligned}
$$

For example, with $A = 1000$ and $C_{in} = 0.1\,C_H$, $V_{out} = V_{0k}/1.0011$, a 0.11 % gain error, so $V_{out} \approx V_{0k}$.

### Step 4 — Timing and sampled values

**Input.** $V_{in} = 0.5 + 0.5\sin\omega_0t$ (volts): between 0 and 1 V, period $1/(10\ \mathrm{MHz}) = 100$ ns.

**Clock.** Period $1/(50\ \mathrm{MHz}) = 20$ ns; with 50 % duty cycle each phase lasts 10 ns, giving $100/20 = 5$ samples per input period.

Choose the sampling phases at 0–10, 20–30, 40–50, 60–70 and 80–90 ns; the amplification phases are 10–20, 30–40, 50–60, 70–80 and 90–100 ns. The samples are taken at $t_k = 10, 30, 50, 70, 90$ ns, with the sine's phase advancing $3.6^\circ$ per ns:

$$
\begin{aligned}
V_{0}(10\ \mathrm{ns}) &= 0.5 + 0.5\sin36^\circ = 0.5 + 0.5(0.5878) = 0.794\ \mathrm{V},\\
V_{0}(30\ \mathrm{ns}) &= 0.5 + 0.5\sin108^\circ = 0.5 + 0.5(0.9511) = 0.976\ \mathrm{V},\\
V_{0}(50\ \mathrm{ns}) &= 0.5 + 0.5\sin180^\circ = 0.500\ \mathrm{V},\\
V_{0}(70\ \mathrm{ns}) &= 0.5 + 0.5\sin252^\circ = 0.5 - 0.5(0.9511) = 0.024\ \mathrm{V},\\
V_{0}(90\ \mathrm{ns}) &= 0.5 + 0.5\sin324^\circ = 0.5 - 0.5(0.5878) = 0.206\ \mathrm{V}.
\end{aligned}
$$

### Step 5 — The output waveform

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

The output is a train of 10-ns-wide rectangular pulses, one every 20 ns, returning to zero in between: a **return-to-zero** sample-and-hold waveform. Each flat pulse top equals the input at the start of that pulse (the end of the preceding sampling phase), so the tops follow the sine (0 to 1 V, period 100 ns). In a real circuit the op amp must slew and settle at each pulse edge, so the output is valid only near the end of each hold phase.

### Result

$V_{out}$ is a **return-to-zero** sample-and-hold waveform with unity, noninverting gain:

- during each 10-ns sampling phase, $V_{out} \approx 0$ (unity-gain feedback, X at virtual ground) while $C_H$ tracks $V_{in}$;
- during each 10-ns amplification phase, $V_{out} = V_{in}(t_k)$, the input value when $S_2$ opened, more precisely $V_{out} = V_{0k}/[1 + (1 + C_{in}/C_H)/A]$.

With sampling at 0–10, 20–30, … ns, the pulses are 0.794, 0.976, 0.500, 0.024 and 0.206 V (5 per 100-ns input period), each followed by a return to about 0 V.

**Common mistake.** Drawing $V_{out}$ tracking $V_{in}$ during the sampling phase. With $S_2$ closed the op amp follows its own grounded non-inverting input, so its output is pinned at 0 V; only the voltage across $C_H$ follows the input.

**Common mistake.** Drawing an inverted output. In the hold phase no input is applied; the capacitor that stored $+V_{0k}$ (P side positive) is reconnected with P at the output and X at virtual ground, so the output is $+V_{0k}$.

**Common mistake.** Drawing a continuous staircase without the returns to zero. This circuit resets the output to zero every sampling phase, so the held value exists only during the amplification phases.
