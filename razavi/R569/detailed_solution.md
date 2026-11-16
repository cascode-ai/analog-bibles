# Detailed solution - R569

**Approach.** Derive the transfer function from $V_{in}$ to node X with the op amp modelled as $G_m$ and $R_{out}$, evaluate its magnitude and phase at 100 MHz, and use them to write and sketch $V_X(t)$. A quick check with impedances (a capacitive divider between $C_1$ and the op amp's closed-loop output resistance) confirms the numbers.

### Step 1 — Transfer function from $V_{in}$ to X

In this mode the op-amp output is tied to its inverting input, so X and $V_{out}$ are the same node. Three currents meet at X:

- through $C_1$ from the input: $C_1s(V_{in} - V_X)$;
- from the op amp: $G_m(V_+ - V_-) = G_m(0 - V_X) = -G_mV_X$;
- out through $R_{out}$ to ground: $V_X/R_{out}$.

**KCL at X:**

$$C_1s(V_{in} - V_X) - G_mV_X - \frac{V_X}{R_{out}} = 0 .$$

Collect $V_X$ and multiply by $R_{out}$:

$$
\begin{aligned}
C_1sV_{in} &= V_X\left(C_1s + G_m + \frac{1}{R_{out}}\right)\\
H(s) = \frac{V_X}{V_{in}} &= \frac{R_{out}C_1s}{1 + G_mR_{out} + R_{out}C_1s}.
\end{aligned}
$$

This is a high-pass with a pole at $\omega_p = (1 + G_mR_{out})/(R_{out}C_1)$.

### Step 2 — Numbers

$$
\begin{aligned}
\omega &= 2\pi\times100\ \mathrm{MHz} = 6.283\times10^{8}\ \mathrm{rad/s},\\
G_mR_{out} &= \frac{20\ \mathrm{k}\Omega}{100\ \Omega} = 200, \qquad 1 + G_mR_{out} = 201,\\
\omega R_{out}C_1 &= (6.283\times10^{8})(20\times10^{3})(1\times10^{-12}) = 12.57,\\
\omega_p &= \frac{201}{(20\ \mathrm{k}\Omega)(1\ \mathrm{pF})} = 1.005\times10^{10}\ \mathrm{rad/s}\quad(f_p = 1.6\ \mathrm{GHz}).
\end{aligned}
$$

The input frequency (100 MHz) is 16 times *below* the pole, so the circuit works in the rising, differentiating part of its high-pass response.

### Step 3 — Magnitude and phase at 100 MHz

Put $s = j\omega$:

$$H(j\omega) = \frac{j\,12.57}{201 + j\,12.57}.$$

**Magnitude** (magnitude of numerator over magnitude of denominator):

$$|H| = \frac{12.57}{\sqrt{201^2 + 12.57^2}} = \frac{12.57}{\sqrt{40401 + 158}} = \frac{12.57}{201.4} = 0.0624 .$$

**Phase** (phase of numerator minus phase of denominator):

$$\angle H = 90° - \arctan\frac{12.57}{201} = 90° - 3.58° = 86.4° .$$

The positive phase means $V_X$ **leads** $V_{in}$.

**Impedance check.** In unity-gain feedback the op amp presents a closed-loop output resistance $1/(G_m + 1/R_{out}) = 1/(0.01 + 0.00005)\ \mathrm{S} = 99.5\ \Omega$ at X. At 100 MHz, $C_1$ has a reactance of $1/(\omega C_1) = 1/(6.283\times10^{-4}\ \mathrm{S}) = 1592\ \Omega$. The divider gives

$$|H| = \frac{99.5}{\sqrt{99.5^2 + 1592^2}} = \frac{99.5}{1595} = 0.0624,$$

the same result.

### Step 4 — The waveform at X

For $V_{in}(t) = (1\ \mathrm{V})\sin\omega t$, the steady-state response of a linear circuit is a sinusoid of the same frequency, scaled by $|H|$ and shifted by $\angle H$:

$$V_X(t) = (62.4\ \mathrm{mV})\,\sin(\omega t + 86.4°).$$

It is centred on the dc level of X, which is 0 V because the noninverting input is grounded and no dc current flows through $C_1$.

A lead of 86.4° is $86.4/360$ of the 10-ns period, i.e. **2.4 ns**. Sample values over one period:

| $t$ (ns) | $V_{in}$ (V) | $V_X$ (mV) |
|---|---|---|
| 0 | 0 | +62.3 |
| 1.25 | +0.707 | +46.8 |
| 2.5 | +1.000 | +3.9 |
| 3.75 | +0.707 | −41.3 |
| 5 | 0 | −62.3 |
| 6.25 | −0.707 | −46.8 |
| 7.5 | −1.000 | −3.9 |
| 8.75 | −0.707 | +41.3 |
| 10 | 0 | +62.3 |

**Sketch.** Draw $V_{in}$ as a 1-V-peak sine with a 10-ns period. On the same time axis, draw $V_X$ as a much smaller sine (±62 mV) shifted nearly a quarter period to the left. Its peaks (at $t \approx 0.1$ ns, 10.1 ns, ...) almost coincide with the rising zero crossings of $V_{in}$, and its zero crossings almost coincide with the peaks of $V_{in}$.

**Why it looks like this.** Far below the pole, $H(s) \approx R_{out}C_1s/(G_mR_{out}) = C_1s/G_m$, so

$$V_X(t) \approx \frac{C_1}{G_m}\,\frac{dV_{in}}{dt}.$$

The op amp must absorb the capacitor current $C_1\,dV_{in}/dt$, and doing so takes an input error of (current)/$G_m$. The approximation gives an amplitude of $\omega C_1/G_m = (6.283\times10^{8})(1\ \mathrm{pF})(100\ \Omega) = 62.8$ mV and a 90° lead, close to the exact 62.4 mV and 86.4°.

### Step 5 — Consequence for sampling

The voltage across $C_1$ is $V_{in} - V_X = (1 - H)V_{in}$, with

$$1 - H = \frac{201}{201 + j\,12.57}, \qquad |1 - H| = \frac{201}{201.4} = 0.998, \qquad \angle(1 - H) = -3.6° .$$

So $C_1$ sees a 0.998-V sinusoid lagging $V_{in}$ by 3.6°. The "virtual ground" is not perfectly quiet: it carries a 62-mV ripple at 100 MHz, about 6 % of the input.

### Result

$V_X$ is a 100-MHz sinusoid with a peak amplitude of about **62 mV** (0.0624 V), **leading $V_{in}$ by about 86°** (nearly 90°, i.e. 2.4 ns):

$$V_X(t) = 62.4\ \mathrm{mV}\cdot\sin(\omega t + 86.4°),$$

centred on the op amp's dc level (0 V). It follows from $H(j\omega) = j\omega R_{out}C_1/(1 + G_mR_{out} + j\omega R_{out}C_1)$ with $\omega R_{out}C_1 = 12.57$ and $1 + G_mR_{out} = 201$: $|H| = 12.57/\sqrt{201^2 + 12.57^2} = 0.0624$ and $\angle H = 90° - \arctan(12.57/201) = 86.4°$. Node X behaves like the output of a differentiator, $V_X \approx (C_1/G_m)\,dV_{in}/dt$, because 100 MHz is far below the pole at about 1.6 GHz. The voltage across $C_1$ has an amplitude of 0.998 V and lags $V_{in}$ by about 3.6°.

**Common mistake.** Treating X as an ideal virtual ground and drawing a flat line at 0 V. The op amp can hold X near ground only by developing an error voltage of (capacitor current)/$G_m$, which at 100 MHz is about 62 mV peak.

**Common mistake.** Drawing $V_X$ in phase with, or lagging, $V_{in}$, or inverted. Below its pole, the high-pass $C_1$–$1/G_m$ network differentiates. Its output leads the input by nearly 90°, peaking when $V_{in}$ crosses zero with its fastest rising slope.

**Common mistake.** Getting an amplitude near 1 V, for example by thinking the pole is below 100 MHz or by using $R_{out}$ alone (20 kΩ, much larger than $1/(\omega C_1)$) as the impedance at X. With feedback, the impedance at X is $1/(G_m + 1/R_{out}) \approx 100\ \Omega$, far smaller than the 1.6-kΩ reactance of $C_1$.
