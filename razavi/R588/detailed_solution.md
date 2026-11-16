# Detailed solution - R588

**Approach.** First derive the cycle-by-cycle behavior from charge conservation: every clock period $C_1$ samples the input and dumps that charge onto $C_2$, so the output changes by $-(C_1/C_2)V_{in}$ per cycle (a staircase). Then replace $C_1$ with its switches by the average resistor $R_{eq} = 1/(C_1f_{CK})$, treat the circuit as a continuous-time RC integrator, and evaluate its gain at 10 MHz. An exact discrete-time check confirms the estimate.

### Step 1 — How the integrator works (charge transfer per cycle)

The clock period is $T = 1/f_{CK} = 1/(100\ \mathrm{MHz}) = 10$ ns. In each period:

- **Phase 1 ($S_1$ on, $S_2$ off):** $C_1$ is charged to the input. Its top plate P holds $Q_1 = C_1V_{in}[k]$, where $V_{in}[k]$ is the input at the end of this phase. The op amp holds $C_2$'s charge unchanged.
- **Phase 2 ($S_2$ on, $S_1$ off):** P is connected to X, which the high-gain op amp keeps at **virtual ground** ($V_X \approx 0$). $C_1$ is therefore fully discharged, and its charge must go somewhere: it flows onto the X-side plate of $C_2$.

**Charge conservation** on the node formed by P and X during phase 2 (no conducting path to it other than the capacitors):

$$
\begin{aligned}
\underbrace{C_1V_{in}[k]}_{\text{on }C_1\text{ before}} + \underbrace{C_2\,(0 - V_{out}[k])}_{\text{on }C_2\text{ before}} &= \underbrace{C_1\cdot 0}_{C_1\text{ after}} + \underbrace{C_2\,(0 - V_{out}[k+1])}_{C_2\text{ after}}\\
V_{out}[k+1] &= V_{out}[k] - \frac{C_1}{C_2}\,V_{in}[k].
\end{aligned}
$$

Each clock cycle the output takes a step of $-(C_1/C_2)V_{in}[k]$: a discrete-time **inverting integrator** (an accumulator). Here $C_1/C_2 = 1$, so every step equals minus the sampled input.

### Step 2 — Equivalent resistor

Each period, a charge $C_1V_{in}$ is carried from the input to the virtual ground. The **average current** is charge per period:

$$I_{avg} = \frac{C_1V_{in}}{T} = C_1f_{CK}V_{in}.$$

A resistor $R_{eq}$ from $V_{in}$ to the virtual ground would carry $V_{in}/R_{eq}$, so

$$
\begin{aligned}
R_{eq} &= \frac{V_{in}}{I_{avg}} = \frac{1}{C_1f_{CK}}\\
&= \frac{1}{(1\times10^{-12}\ \mathrm{F})(100\times10^{6}\ \mathrm{Hz})} = \frac{1}{10^{-4}}\ \Omega = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

This approximation is good when the input changes little within one clock period, i.e. $f_{in} \ll f_{CK}$. Here $f_{in}/f_{CK} = 0.1$, so we expect a few percent of error.

### Step 3 — Continuous-time estimate of the output amplitude

With $R_{eq}$ in place of $C_1$, $S_1$ and $S_2$, the circuit is the classic RC (Miller) integrator: $R_{eq}$ from the input to the virtual ground X, $C_2$ from X to the output.

<!-- diagram: diagram-01.cir -->

**KCL at X** (the current through $R_{eq}$ must flow through $C_2$, since the op amp draws none):

$$\frac{V_{in} - 0}{R_{eq}} = sC_2\,(0 - V_{out})\quad\Longrightarrow\quad \frac{V_{out}}{V_{in}} = -\frac{1}{sR_{eq}C_2}.$$

At $s = j\omega$ the magnitude is $1/(\omega R_{eq}C_2)$. Compute each quantity:

$$
\begin{aligned}
\omega &= 2\pi\times(10\times10^6\ \mathrm{Hz}) = 6.283\times10^7\ \mathrm{rad/s},\\
R_{eq}C_2 &= (10^4\ \Omega)(10^{-12}\ \mathrm{F}) = 10^{-8}\ \mathrm{s} = 10\ \mathrm{ns},\\
\omega R_{eq}C_2 &= (6.283\times10^7)(10^{-8}) = 0.628,\\
|H| &= \frac{1}{0.628} = 1.59.
\end{aligned}
$$

Output amplitude:

$$V_{out,p} = |H|\,V_{in,p} = 1.59\times0.5\ \mathrm{V} \approx 0.80\ \mathrm{V}.$$

The output is *larger* than the input because 10 MHz lies below the integrator's unity-gain frequency, $1/(2\pi R_{eq}C_2) = 1/(2\pi\times10\ \mathrm{ns}) = 15.9$ MHz.

**Phase.** $-1/(j\omega R_{eq}C_2) = +j/(\omega R_{eq}C_2)$, so the output leads the input by 90°: for $V_{in} = 0.5\sin\omega t$, the AC part of the output is $+0.8\cos\omega t$ (from $-\int\sin = +\cos$).

### Step 4 — Exact discrete-time check

From Step 1, $V_{out}(z) = z^{-1}V_{out}(z) - (C_1/C_2)z^{-1}V_{in}(z)$, so

$$H(z) = -\frac{C_1}{C_2}\cdot\frac{z^{-1}}{1 - z^{-1}}.$$

On the unit circle, $z = e^{j\omega T}$ and $|1 - e^{-j\omega T}| = 2\sin(\omega T/2)$:

$$
\begin{aligned}
\omega T &= 2\pi\times10^7\times10^{-8} = 0.2\pi\ \ (36^\circ),\\
|H| &= \frac{1}{2\sin(18^\circ)} = \frac{1}{2\times0.309} = 1.62,\\
V_{out,p} &= 1.62\times0.5\ \mathrm{V} = 0.81\ \mathrm{V}.
\end{aligned}
$$

The continuous-time estimate (0.80 V) is within 2 %, as expected for $f_{in}/f_{CK} = 0.1$ (the ratio is $(\pi/10)/\sin(\pi/10) = 1.017$).

### Step 5 — Sketch of the output

The input completes one cycle in $1/(10\ \mathrm{MHz}) = 100$ ns, so there are $100/10 = 10$ clock periods, i.e. **10 steps per input cycle**. The input is sampled every 36°, $V_{in}[k] = 0.5\sin(36^\circ k)$. Starting from $V_{out} = 0$ at $k = 0$ (input starting at 0):

| $k$ | $t_k$ (ns) | $V_{in}[k]$ (V) | step $-V_{in}[k]$ (V) | $V_{out}$ after the step (V) |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 10 | 0.294 | −0.294 | −0.294 |
| 2 | 20 | 0.476 | −0.476 | −0.769 |
| 3 | 30 | 0.476 | −0.476 | −1.245 |
| 4 | 40 | 0.294 | −0.294 | −1.539 |
| 5 | 50 | 0 | 0 | −1.539 |
| 6 | 60 | −0.294 | +0.294 | −1.245 |
| 7 | 70 | −0.476 | +0.476 | −0.769 |
| 8 | 80 | −0.476 | +0.476 | −0.294 |
| 9 | 90 | −0.294 | +0.294 | 0 |
| 10 | 100 | 0 | 0 | 0 |

**Shape of the sketch.**

- A **staircase**: $V_{out}$ changes only in phase 2 (when $C_1$ dumps its charge, with the op amp's settling) and is flat in phase 1. One step every 10 ns; the largest steps are 0.476 V, where the input is near its peaks.
- The staircase traces a **10-MHz sinusoid of about 0.8 V amplitude**: while the input is positive the output steps *down*, while it is negative the output steps *up*. Its extremes occur where the input crosses zero, i.e. it is 90° shifted from the input (inverted integration of a sine gives $+\cos$).
- **DC level.** An integrator has infinite DC gain, so the average output level is not set by the input but by the initial condition. Starting from 0 V as above, the staircase stays between 0 and −1.54 V (centred near −0.8 V). In practice the DC level must be defined by a reset or a feedback path.

### Result

$R_{eq} = 1/(C_1f_{CK}) = 10\ \mathrm{k}\Omega$, so the circuit behaves like an RC integrator with $|V_{out}/V_{in}| = 1/(\omega R_{eq}C_2) = 1/0.628 = 1.59$ at 10 MHz:

$$V_{out,p} \approx \frac{0.5\ \mathrm{V}}{0.628} \approx 0.8\ \mathrm{V}$$

(0.81 V with the exact discrete-time gain $1/[2\sin(\pi/10)] = 1.62$). The output is a staircase with 10 steps per 100-ns input period, each step equal to $-V_{in}(kT)$ (up to 0.5 V in magnitude), approximating a 10-MHz sinusoid of about 0.8 V amplitude, shifted by 90° from the input, on a DC level set by the initial condition.

**Common mistake.** Treating the circuit as an amplifier with gain $C_1/C_2 = 1$ and answering 0.5 V. $C_1/C_2$ is the size of *one step*; the steps accumulate on $C_2$ because nothing ever discharges it, so the output is the running sum (integral) of the input.

**Common mistake.** Errors in $R_{eq}$ or in $\omega$: writing $R_{eq} = f_{CK}/C_1$ (wrong units) or $1/(2\pi C_1f_{CK})$ (there is no $2\pi$: the charge $C_1V_{in}$ is moved once per *period*), or using $f$ instead of $\omega = 2\pi f$ in $1/(\omega R_{eq}C_2)$, which gives an amplitude of about 5 V.
