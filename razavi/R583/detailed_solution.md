# Detailed solution - R583

**Approach.** The circuit is a track-and-hold: while $S_1$ is closed, $C_H$ (and therefore the buffered output) follows the input; while $S_1$ is open, $C_H$ keeps the last value. We find the timing of the input and the clock, compute the input at every switching instant, and then build the output waveform segment by segment.

### Step 1 — How the circuit behaves with ideal parts

- **Switch closed (clock high).** An ideal switch has zero resistance, so the voltage on $C_H$ equals $V_{in}$ at every instant: the circuit **tracks** the input.
- **Switch open (clock low).** $C_H$ is disconnected from the input. An ideal op amp draws no input current and an ideal open switch has no leakage, so no charge can leave $C_H$. Its voltage stays at the value $V_{in}$ had at the instant the switch opened: the circuit **holds**.
- **Buffer.** The op amp has its output tied to its inverting input, so it is a voltage follower. With infinite open-loop gain, $V^- = V^+$, hence

$$V_{out} = V^- = V^+ = V_{C_H}.$$

The gain is exactly $+1$: no inversion, no scaling. The buffer only isolates $C_H$ from whatever is connected to $V_{out}$.

So $V_{out}(t) = V_{in}(t)$ while the clock is high, and $V_{out}(t)$ = constant (the last tracked value) while the clock is low.

### Step 2 — Input and clock timing

**Input.** $V_{in} = V_0\sin\omega_0 t + V_0$ with $V_0 = 0.5$ V:

- minimum: $0.5 - 0.5 = 0$ V; maximum: $0.5 + 0.5 = 1$ V; average: 0.5 V;
- period: $T_{in} = 1/f_0 = 1/(10\ \mathrm{MHz}) = 100$ ns.

**Clock.** $f_{CK} = 50$ MHz with 50 % duty cycle:

- period: $T_{CK} = 1/(50\ \mathrm{MHz}) = 20$ ns;
- high (track) phase: $0.5 \times 20\ \mathrm{ns} = 10$ ns; low (hold) phase: 10 ns.

**Samples per input period:** $T_{in}/T_{CK} = 100\ \mathrm{ns}/20\ \mathrm{ns} = 5$. Since $5$ is an integer, the pattern repeats exactly every 100 ns.

The relative phase of clock and input is not specified, so we choose one: the clock is high during 0–10 ns, 20–30 ns, 40–50 ns, 60–70 ns and 80–90 ns. Then $S_1$ **opens** at 10, 30, 50, 70 and 90 ns and **closes** at 0, 20, 40, 60 and 80 ns.

### Step 3 — Input value at the switching instants

The phase of the sine at time $t$ is $\theta = \omega_0 t = 360^\circ\times t/(100\ \mathrm{ns})$, i.e. $3.6^\circ$ per ns. Then $V_{in} = 0.5 + 0.5\sin\theta$ (in volts).

**Sampling (switch-opening) instants — these become the held levels:**

$$
\begin{aligned}
t = 10\ \mathrm{ns}:&\quad \theta = 36^\circ,\quad V_{in} = 0.5 + 0.5(0.5878) = 0.794\ \mathrm{V},\\
t = 30\ \mathrm{ns}:&\quad \theta = 108^\circ,\quad V_{in} = 0.5 + 0.5(0.9511) = 0.976\ \mathrm{V},\\
t = 50\ \mathrm{ns}:&\quad \theta = 180^\circ,\quad V_{in} = 0.5 + 0.5(0) = 0.500\ \mathrm{V},\\
t = 70\ \mathrm{ns}:&\quad \theta = 252^\circ,\quad V_{in} = 0.5 + 0.5(-0.9511) = 0.024\ \mathrm{V},\\
t = 90\ \mathrm{ns}:&\quad \theta = 324^\circ,\quad V_{in} = 0.5 + 0.5(-0.5878) = 0.206\ \mathrm{V}.
\end{aligned}
$$

**Switch-closing instants — where the output jumps back onto the input:**

$$
\begin{aligned}
t = 0\ (100)\ \mathrm{ns}:&\quad \theta = 0^\circ,\quad V_{in} = 0.500\ \mathrm{V},\\
t = 20\ \mathrm{ns}:&\quad \theta = 72^\circ,\quad V_{in} = 0.5 + 0.5(0.9511) = 0.976\ \mathrm{V},\\
t = 40\ \mathrm{ns}:&\quad \theta = 144^\circ,\quad V_{in} = 0.5 + 0.5(0.5878) = 0.794\ \mathrm{V},\\
t = 60\ \mathrm{ns}:&\quad \theta = 216^\circ,\quad V_{in} = 0.5 + 0.5(-0.5878) = 0.206\ \mathrm{V},\\
t = 80\ \mathrm{ns}:&\quad \theta = 288^\circ,\quad V_{in} = 0.5 + 0.5(-0.9511) = 0.024\ \mathrm{V}.
\end{aligned}
$$

**Mid-track points** (to draw the curved parts): $V_{in}(5\ \mathrm{ns}) = 0.5 + 0.5\sin18^\circ = 0.655$ V, $V_{in}(25) = 1.000$ V (the peak), $V_{in}(45) = 0.5 + 0.5\sin162^\circ = 0.655$ V, $V_{in}(65) = 0.5 + 0.5\sin234^\circ = 0.096$ V, $V_{in}(85) = 0.5 + 0.5\sin306^\circ = 0.096$ V.

**Slope while tracking.** $dV_{in}/dt = V_0\omega_0\cos\theta$, with $V_0\omega_0 = 0.5\ \mathrm{V}\times2\pi\times10^7\ \mathrm{s^{-1}} = 3.14\times10^7$ V/s $= 31.4$ mV/ns. So the steepest tracking slope is 31.4 mV/ns (at 0 and 50 ns), and the slope is $\pm9.7$ mV/ns near the peak and the trough ($\cos72^\circ = 0.309$).

### Step 4 — The output waveform, segment by segment

| time (ns) | switch | $V_{out}$ |
|---|---|---|
| 0 → 10 | closed (track) | follows $V_{in}$: 0.500 → 0.655 → 0.794 V, rising |
| 10 → 20 | open (hold) | flat at **0.794 V** |
| 20 | closes | jumps up from 0.794 to 0.976 V |
| 20 → 30 | track | 0.976 → 1.000 (peak at 25 ns) → 0.976 V |
| 30 → 40 | hold | flat at **0.976 V** |
| 40 | closes | jumps down from 0.976 to 0.794 V |
| 40 → 50 | track | 0.794 → 0.655 → 0.500 V, falling |
| 50 → 60 | hold | flat at **0.500 V** |
| 60 | closes | jumps down from 0.500 to 0.206 V |
| 60 → 70 | track | 0.206 → 0.096 → 0.024 V, falling |
| 70 → 80 | hold | flat at **0.024 V** |
| 80 | closes | no jump: $V_{in}(80) = 0.024$ V equals the held value |
| 80 → 90 | track | 0.024 → 0.096 → 0.206 V, rising |
| 90 → 100 | hold | flat at **0.206 V** |
| 100 | closes | jumps up from 0.206 to 0.500 V; the pattern repeats |

**How to sketch it.** Draw the input sinusoid (0 to 1 V, period 100 ns) lightly. The output lies exactly on it during 0–10, 20–30, 40–50, 60–70 and 80–90 ns. In each of the gaps it is a horizontal line at the level where the previous tracking segment ended, followed by a vertical step back onto the sine when the switch closes. The step size equals how far the input moved during the 10-ns hold, so steps are largest where the sine is steepest (0.29 V at 60 ns) and vanish where the hold straddles an extremum (at 80 ns, because the trough at 75 ns lies in the middle of the hold).

### Step 5 — Observations

- The output never returns to zero between samples; it holds the last value.
- The output stays between 0 and 1 V. With this clock phase the true minimum (0 V at 75 ns) occurs during a hold, so the output only gets down to 0.024 V; the peak (1 V at 25 ns) occurs during tracking and does appear.
- Five held levels per input period (0.794, 0.976, 0.500, 0.024, 0.206 V). A different clock phase shifts all sampling instants by the same amount and changes these levels, but not the track/hold pattern.
- The sampling rate (50 MHz) is above twice the input frequency (20 MHz), so the held samples represent the 10-MHz sine without aliasing.
- Real switches would add small negative pedestals at each opening (charge injection, clock feedthrough); these are ignored here because the switch is ideal.

### Result

$V_{out}$ is a **track-and-hold waveform** between 0 and 1 V with unity gain and no inversion. It follows the sinusoid during each 10-ns high clock phase and stays flat during each 10-ns low phase, giving 5 samples per 100-ns input period. With the clock high during 0–10, 20–30, … ns, the held levels are

$$0.794\ \mathrm{V},\ 0.976\ \mathrm{V},\ 0.500\ \mathrm{V},\ 0.024\ \mathrm{V},\ 0.206\ \mathrm{V}$$

(for holds starting at 10, 30, 50, 70 and 90 ns), repeating every 100 ns. The output does not return to zero between samples.

**Common mistake.** Drawing a return-to-zero waveform, with $V_{out} = 0$ while $S_1$ is open. When the switch opens, nothing discharges $C_H$ (the op amp input draws no current), so the capacitor and the output keep the last value.

**Common mistake.** Drawing a flat staircase during the whole clock period. While the switch is closed the output follows the input continuously; it is flat only during the low phase. A related error is miscounting the samples: the clock is 5 times faster than the input, so there are 5 tracking and 5 holding intervals per input period, each 10 ns long.

**Common mistake.** Inverting the output or giving it a gain other than one. The op amp is wired as a follower (output to the inverting input, $C_H$ on the non-inverting input), so $V_{out} = V_{C_H}$.
