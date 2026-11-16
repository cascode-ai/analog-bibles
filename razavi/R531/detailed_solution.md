# Detailed solution - R531

**Approach.** Measure the time constant of the exponential settling in Fig. 1(b) from how fast the remaining error shrinks. Predict it from the op amp data with the closed-loop bandwidth $(1 + \beta A_0)f_{p1}$, using the final output value to check the actual loop gain, and compare.

### Step 1 — What the waveforms show

After the 25-mV input step the differential output jumps very quickly (within about 0.5 ns) to about 60–65 mV, then approaches its final value of 98.8 mV along a smooth exponential, settled after about 10 ns; the falling edge at 20 ns mirrors this. The final value is close to the ideal $25\ \mathrm{mV}\times C_1/C_2 = 25\times4 = 100$ mV. Settling is governed by the slow exponential, whose time constant τ we extract.

### Step 2 — Time constant from the close-up

The error $e(t) = V_{final} - V_{out}(t) = e_0\,e^{-t/\tau}$, so $\ln e$ falls with slope $-1/\tau$. Readings from Fig. 1(b), with $V_{final} = 98.82$ mV:

| $t$ (ns) | $V_{out}$ (mV) | $e$ (mV) | $\ln(e/1\ \mathrm{mV})$ |
|---|---|---|---|
| 5.0 | 96.95 | 1.87 | 0.63 |
| 6.0 | 97.89 | 0.93 | −0.07 |
| 7.0 | 98.35 | 0.47 | −0.76 |
| 8.0 | 98.59 | 0.23 | −1.47 |
| 9.0 | 98.71 | 0.11 | −2.21 |

The error halves about every nanosecond (1.87 → 0.93 → 0.47 → 0.23 → 0.11). Between 5 and 9 ns,

$$\frac{-2.21 - 0.63}{9.0 - 5.0}\ \mathrm{ns^{-1}} = -0.71\ \mathrm{ns^{-1}}
\quad\Longrightarrow\quad
\tau = \frac{1}{0.71\ \mathrm{ns^{-1}}} \approx 1.4\ \mathrm{ns}.$$

**Two-point check.** $e \approx 1.85$ mV at $t = 5$ ns and $e \approx 0.31$ mV at $t \approx 7.6$ ns:

$$\tau = \frac{7.6 - 5.0}{\ln(1.85/0.31)}\ \mathrm{ns} = \frac{2.6}{\ln5.97}\ \mathrm{ns} = \frac{2.6}{1.79}\ \mathrm{ns} = 1.45\ \mathrm{ns}.$$

**Settling-time check.** The 1 % band ($0.99\times98.82 = 97.83$ mV) is reached at about 5.9 ns; with 1 % settling at $\ln100 = 4.6$ time constants, $\tau \approx 5.9/4.6 = 1.3$ ns (slightly low, because the fast initial jump has already removed part of the error).

**Observed:** $\tau \approx 1.4$ ns (1.3–1.45 ns), i.e. a closed-loop bandwidth

$$f_{-3dB,obs} = \frac{1}{2\pi\tau} = \frac{1}{2\pi\times1.4\ \mathrm{ns}} \approx 113\ \mathrm{MHz}.$$

### Step 3 — Feedback factor of the capacitive amplifier

In each half, the output reaches the op amp input through the divider formed by $C_2$ and $C_1 + C_{in}$:

$$\beta = \frac{C_2}{C_1 + C_2 + C_{in}} = \frac{0.25\ \mathrm{pF}}{1 + 0.25 + 0.05\ \mathrm{pF}} = \frac{0.25}{1.30} = 0.192 .$$

### Step 4 — Predicted time constant from $f_{p1} = 1.7$ MHz

A dominant-pole op amp in the loop gives a single closed-loop pole at $(1 + \beta A_0)f_{p1}$. With $A_0 = 500$:

$$
\begin{aligned}
\beta A_0 &= 0.192\times500 = 96.2,\\
f_{-3dB,pred} &= (1 + 96.2)\times1.7\ \mathrm{MHz} = 165\ \mathrm{MHz},\\
\tau_{pred} &= \frac{1}{2\pi\times165\ \mathrm{MHz}} = 0.96\ \mathrm{ns}.
\end{aligned}
$$

### Step 5 — Refine the loop gain from the final value

With finite gain,

$$\frac{V_{out}}{V_{in}} = \frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{1}{\beta A_0}} ,$$

so the measured final value gives

$$\frac{98.82\ \mathrm{mV}}{100\ \mathrm{mV}} = \frac{1}{1 + 1/(\beta A_0)} \quad\Longrightarrow\quad \frac{1}{\beta A_0} = \frac{100}{98.82} - 1 = 0.0119,\qquad \beta A_0 = 84 .$$

The actual DC gain is $A_0 = 84/0.192 \approx 435$, a bit below the design value of 500, and

$$f_{-3dB,pred} = (1 + 84)\times1.7\ \mathrm{MHz} = 144\ \mathrm{MHz},\qquad \tau_{pred} = \frac{1}{2\pi\times144\ \mathrm{MHz}} = 1.1\ \mathrm{ns}.$$

### Step 6 — Comparison and interpretation

| | closed-loop bandwidth | τ |
|---|---|---|
| predicted, $A_0 = 500$, $f_{p1} = 1.7$ MHz | 165 MHz | 0.96 ns |
| predicted, $A_0 \approx 435$ (from final value) | 144 MHz | 1.1 ns |
| observed (Fig. 1(b)) | ≈ 113 MHz | ≈ 1.4 ns |

The two agree in **order of magnitude**, but not closely: the amplifier settles about 30–45 % more slowly than predicted. Working backward, the observed bandwidth implies

$$f_{p1} \approx \frac{113\ \mathrm{MHz}}{1 + \beta A_0} \approx \frac{113}{85}\ \text{to}\ \frac{113}{97}\ \mathrm{MHz} \approx 1.2\text{–}1.3\ \mathrm{MHz},$$

rather than 1.7 MHz. Plausible reasons:
- The 1.7-MHz figure was only an estimate (e.g. by scaling with $C_C$); the actual dominant pole appears to be lower.
- The actual open-loop gain is lower than 500 (Step 5).
- The feedback network ($C_2$ in series with $C_1 + C_{in}$) loads the output in addition to the 1-pF load.
- The response is not a pure single pole: the fast initial jump to about 60 mV comes from the $R_z$–$C_C$ zero and the nondominant pole, and their imperfect cancellation shifts the slow time constant away from $1/[2\pi(1 + \beta A_0)f_{p1}]$. (Direct capacitive feedthrough through $C_1$ and $C_2$ amounts to only a few millivolts.)

### Result

From the exponential approach in Fig. 1(b), the error falls by about 2 times per nanosecond (≈ 1.85 mV at 5 ns, ≈ 0.31 mV at 7.6 ns), giving a closed-loop time constant of **τ ≈ 1.4–1.5 ns** (bandwidth ≈ 110 MHz; 1 % settling at ≈ 5.9 ns).

The prediction uses $\beta = C_2/(C_1 + C_2 + C_{in}) = 0.25/1.3 \approx 0.19$ and a bandwidth of $(1 + \beta A_0)f_{p1} \approx 97\times1.7\ \mathrm{MHz} \approx 165$ MHz, i.e. **τ ≈ 1.0 ns**. With the loop gain inferred from the 1.18 % gain error ($\beta A_0 \approx 84$, $A_0 \approx 435$) it is ≈ 144 MHz and τ ≈ 1.1 ns.

The agreement is only **rough**: the amplifier settles about 40 % more slowly than predicted, as if the dominant pole were nearer 1.1–1.3 MHz than 1.7 MHz. The 1.7-MHz value was only an estimate; the lower actual gain, the extra loading by the feedback network, and the imperfect pole–zero cancellation by $R_z$ (which also produces the fast initial jump) all contribute.

**Common mistake.** Comparing τ with $1/(2\pi\times1.7\ \mathrm{MHz}) \approx 94$ ns and concluding that the waveform disagrees by a factor of 100. Feedback multiplies the bandwidth by $1 + \beta A_0 \approx 85$–97.

**Common mistake.** Using $\beta = 1$ or $\beta = C_1/C_2 = 4$. The output is fed back through the divider $C_2/(C_1 + C_2 + C_{in}) \approx 0.19$; $1/\beta = 5.2$ is the noise gain, while the signal gain is $C_1/C_2 = 4$.

**Common mistake.** Reading τ from the fast initial jump (about 0.3–0.4 ns). The jump covers only the first ~60 % of the step; settling accuracy is governed by the slow exponential that follows.
