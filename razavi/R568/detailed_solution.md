# Detailed solution - R568

**Approach.** In the sampling mode the op-amp output is tied to its inverting input, so X and $V_{out}$ are one node. With the op amp modeled as $G_m$ and $R_{out}$, a single KCL equation at that node gives $V_{out}/V_{in}$, which then shows how good a virtual ground X really is.

### Step 1 — Small-signal model

Three elements meet at X ($= V_{out}$): $C_1$ from A, carrying $C_1s\,(V_{in} - V_X)$ into X; the op-amp output current $G_m(V_+ - V_-) = G_m(0 - V_X) = -G_mV_X$ into X; and $R_{out}$, carrying $V_X/R_{out}$ to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at X and the transfer function

$$C_1s\,(V_{in} - V_X) - G_mV_X - \frac{V_X}{R_{out}} = 0 ,$$

$$C_1s\,V_{in} = V_X\left(C_1s + G_m + \frac{1}{R_{out}}\right), \qquad \frac{V_X}{V_{in}} = \frac{C_1s}{C_1s + G_m + 1/R_{out}} .$$

Multiplying numerator and denominator by $R_{out}$:

$$\frac{V_{out}}{V_{in}}(s) = \frac{R_{out}C_1s}{1 + G_mR_{out} + R_{out}C_1s} .$$

For a well-designed op amp $G_mR_{out} \gg 1$, so $1 + G_mR_{out} \approx G_mR_{out}$, and dividing by $G_mR_{out}$:

$$\frac{V_{out}}{V_{in}}(s) \approx \frac{C_1s/G_m}{1 + C_1s/G_m} .$$

### Step 3 — Poles, zeros and limits

- **Zero at the origin:** no dc current passes through $C_1$, so at dc X settles at 0 V.
- **One pole** at
$$\omega_p = \frac{1 + G_mR_{out}}{R_{out}C_1} \approx \frac{G_m}{C_1}.$$
- **High-frequency gain** ($s \to \infty$): $R_{out}C_1s/(R_{out}C_1s) = 1$; $C_1$ is then a short and X follows $V_{in}$.

So the response is a **first-order high-pass** with unity high-frequency gain and no inversion. In unity-gain feedback X looks like the closed-loop output resistance $1/(G_m + 1/R_{out}) \approx 1/G_m$ to ground, so the input sees $C_1$ in series with about $1/G_m$: an RC high-pass with time constant $C_1/G_m$.

### Step 4 — What it means for sampling

The goal is to hold X at virtual ground so that $C_1$ charges to the full input. The voltage actually across $C_1$ is

$$
\begin{aligned}
V_{in} - V_X &= V_{in}\left[1 - \frac{R_{out}C_1s}{1 + G_mR_{out} + R_{out}C_1s}\right]\\
&= V_{in}\,\frac{1 + G_mR_{out}}{1 + G_mR_{out} + R_{out}C_1s},
\end{aligned}
$$

a **low-pass** response with the same pole $\omega_p \approx G_m/C_1$. For $\omega \ll G_m/C_1$ the capacitor tracks $V_{in}$ and X is a good virtual ground; near or above $G_m/C_1$, part of the input appears at X instead of across $C_1$.

For a step input, X first jumps with $V_{in}$ and then decays back to 0 with time constant

$$\tau = \frac{R_{out}C_1}{1 + G_mR_{out}} \approx \frac{C_1}{G_m}.$$

**Illustration** (values not given in the problem): with $G_m = 1$ mS and $C_1 = 1$ pF, $\tau \approx 1\ \mathrm{pF}/1\ \mathrm{mS} = 1$ ns, and $\omega_p \approx 10^{9}$ rad/s ($f_p \approx 159$ MHz).

### Result

$$\frac{V_{out}}{V_{in}}(s) = \frac{R_{out}C_1s}{1 + G_mR_{out} + R_{out}C_1s} \approx \frac{C_1s/G_m}{1 + C_1s/G_m}\quad(G_mR_{out} \gg 1).$$

This is a first-order high-pass with a zero at the origin, a pole at $\omega_p = (1 + G_mR_{out})/(R_{out}C_1) \approx G_m/C_1$, a high-frequency gain of 1 and no inversion. Node X ($= V_{out}$) is a good virtual ground only for $\omega \ll G_m/C_1$. The voltage across $C_1$ is $V_{in}(1 + G_mR_{out})/(1 + G_mR_{out} + R_{out}C_1s)$.

**Common mistake.** Declaring $V_{out} = 0$ because X is a "virtual ground". That holds only at low frequencies; the transfer function shows X following the input as frequency rises: $V_{out}/V_{in} \approx C_1s/G_m$ well below the pole and 1 above it.

**Common mistake.** Getting the sign of the op-amp current wrong. With $V_+ = 0$ and $V_- = V_X$, the op amp injects $-G_mV_X$ (negative feedback); taking $+G_mV_X$ would put a right-half-plane pole at $(G_mR_{out} - 1)/(R_{out}C_1)$, i.e. an unstable circuit.

**Common mistake.** Borrowing the amplification-mode result, with a gain set by $C_1$ and a feedback capacitor. In this mode the output is wired directly to X and the only capacitor is $C_1$, so the response is high-pass, not a flat gain of $-C_1/C_2$.
