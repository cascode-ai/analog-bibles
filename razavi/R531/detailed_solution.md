# Detailed solution - R531

**Approach.** Measure the time constant of the exponential settling in Fig. 1(b) by tracking how fast the remaining error shrinks. Then predict the time constant from the op amp data: a dominant-pole op amp in a loop with feedback factor $\beta$ has a closed-loop bandwidth of about $(1 + \beta A_0)f_{p1}$. Finally compare the two, using the final value of the output to check the actual loop gain.

### Step 1 — What the waveforms show

- **Fig. 1(a).** After the 25-mV input step at $t = 0$, the differential output jumps very quickly (within about 0.5 ns) to about 60–65 mV. It then approaches its final value of 98.8 mV along a smooth exponential, settled after about 10 ns. The falling edge at 20 ns mirrors this.
- **Fig. 1(b).** A close-up of the approach to 98.82 mV between about 5 and 15 ns.

The final value is close to the ideal $25\ \mathrm{mV}\times C_1/C_2 = 25\times4 = 100$ mV. The initial fast jump is not the part that determines settling; the slow exponential is. We extract its time constant τ.

### Step 2 — Time constant from the close-up

For a single exponential, the error $e(t) = V_{final} - V_{out}(t)$ decays as $e(t) = e_0\,e^{-t/\tau}$, so $\ln e$ falls linearly with slope $-1/\tau$. Readings from Fig. 1(b), with $V_{final} = 98.82$ mV:

| $t$ (ns) | $V_{out}$ (mV) | $e$ (mV) | $\ln(e/1\ \mathrm{mV})$ |
|---|---|---|---|
| 5.0 | 96.95 | 1.87 | 0.63 |
| 6.0 | 97.89 | 0.93 | −0.07 |
| 7.0 | 98.35 | 0.47 | −0.76 |
| 8.0 | 98.59 | 0.23 | −1.47 |
| 9.0 | 98.71 | 0.11 | −2.21 |

Each nanosecond the error shrinks by a factor of about 2 (1.87 → 0.93 → 0.47 → 0.23 → 0.11). The slope of $\ln e$ between 5 and 9 ns is

$$\frac{-2.21 - 0.63}{9.0 - 5.0}\ \mathrm{ns^{-1}} = -0.71\ \mathrm{ns^{-1}}
\quad\Longrightarrow\quad
\tau = \frac{1}{0.71\ \mathrm{ns^{-1}}} \approx 1.4\ \mathrm{ns}.$$

**Two-point check.** At $t = 5$ ns, $e \approx 1.85$ mV; at $t \approx 7.6$ ns, $e \approx 0.31$ mV:

$$\tau = \frac{7.6 - 5.0}{\ln(1.85/0.31)}\ \mathrm{ns} = \frac{2.6}{\ln5.97}\ \mathrm{ns} = \frac{2.6}{1.79}\ \mathrm{ns} = 1.45\ \mathrm{ns}.$$

**Settling-time check.** The 1 % band ($0.99\times98.82 = 97.83$ mV) is reached at about 5.9 ns. For a pure exponential, 1 % settling takes $\ln100 = 4.6$ time constants, so $\tau \approx 5.9/4.6 = 1.3$ ns (slightly low, because the fast initial jump has already removed part of the error).

**Observed:** $\tau \approx 1.4$ ns (1.3–1.45 ns). The corresponding closed-loop −3-dB bandwidth is

$$f_{-3dB,obs} = \frac{1}{2\pi\tau} = \frac{1}{2\pi\times1.4\ \mathrm{ns}} \approx 113\ \mathrm{MHz}.$$

### Step 3 — Feedback factor of the capacitive amplifier

Each half of the fully differential amplifier is an inverting capacitive amplifier. The op amp input node connects to $C_1$ (to the input source, AC ground when computing the loop), to $C_2$ (to the output) and to $C_{in}$ (to ground). A change at the output reaches the op amp input through the capacitive divider formed by $C_2$ and $C_1 + C_{in}$:

$$\beta = \frac{C_2}{C_1 + C_2 + C_{in}} = \frac{0.25\ \mathrm{pF}}{1 + 0.25 + 0.05\ \mathrm{pF}} = \frac{0.25}{1.30} = 0.192 .$$

### Step 4 — Predicted time constant from $f_{p1} = 1.7$ MHz

For an op amp with a dominant pole $f_{p1}$, $H(s) = A_0/(1 + s/\omega_{p1})$, the closed-loop transfer function is

$$\frac{H}{1 + \beta H} = \frac{A_0}{1 + \beta A_0}\cdot\frac{1}{1 + \dfrac{s}{(1 + \beta A_0)\,\omega_{p1}}} ,$$

a single pole at $(1 + \beta A_0)f_{p1}$: feedback widens the bandwidth by the loop gain. With $A_0 = 500$:

$$
\begin{aligned}
\beta A_0 &= 0.192\times500 = 96.2,\\
f_{-3dB,pred} &= (1 + 96.2)\times1.7\ \mathrm{MHz} = 165\ \mathrm{MHz},\\
\tau_{pred} &= \frac{1}{2\pi\times165\ \mathrm{MHz}} = 0.96\ \mathrm{ns}.
\end{aligned}
$$

### Step 5 — Refine the loop gain from the final value

With finite gain, the closed-loop gain of the capacitive amplifier is

$$\frac{V_{out}}{V_{in}} = \frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{1}{\beta A_0}} .$$

The measured final value gives

$$\frac{98.82\ \mathrm{mV}}{100\ \mathrm{mV}} = \frac{1}{1 + 1/(\beta A_0)} \quad\Longrightarrow\quad \frac{1}{\beta A_0} = \frac{100}{98.82} - 1 = 0.0119,\qquad \beta A_0 = 84 .$$

So the actual DC gain is $A_0 = 84/0.192 \approx 435$, a bit less than the design value of 500. With this loop gain:

$$f_{-3dB,pred} = (1 + 84)\times1.7\ \mathrm{MHz} = 144\ \mathrm{MHz},\qquad \tau_{pred} = \frac{1}{2\pi\times144\ \mathrm{MHz}} = 1.1\ \mathrm{ns}.$$

### Step 6 — Comparison and interpretation

| | closed-loop bandwidth | τ |
|---|---|---|
| predicted, $A_0 = 500$, $f_{p1} = 1.7$ MHz | 165 MHz | 0.96 ns |
| predicted, $A_0 \approx 435$ (from final value) | 144 MHz | 1.1 ns |
| observed (Fig. 1(b)) | ≈ 113 MHz | ≈ 1.4 ns |

The two agree in **order of magnitude**, but not closely: the amplifier settles about 30–45 % more slowly than predicted. Working backward, the observed bandwidth implies a dominant pole of

$$f_{p1} \approx \frac{113\ \mathrm{MHz}}{1 + \beta A_0} \approx \frac{113}{85}\ \text{to}\ \frac{113}{97}\ \mathrm{MHz} \approx 1.2\text{–}1.3\ \mathrm{MHz},$$

rather than 1.7 MHz.

**Plausible reasons for the difference:**
- The 1.7-MHz figure was only an estimate (obtained from the design values, e.g. by scaling with $C_C$). The actual dominant pole appears to be lower.
- The actual open-loop gain is lower than 500 (Step 5).
- The feedback network ($C_2$ in series with $C_1 + C_{in}$) loads the output in addition to the 1-pF load capacitance.
- The closed-loop response is not a pure single pole. The fast initial jump to about 60 mV shows a second, much faster component. This comes from the zero created by $R_z$ and $C_C$ together with the nondominant pole: an imperfect pole–zero cancellation leaves the slow exponential with a time constant that is not exactly $1/[2\pi(1 + \beta A_0)f_{p1}]$. The jump is not direct capacitive feedthrough through $C_1$ and $C_2$, which amounts to only a few millivolts.

### Result

From the exponential approach in Fig. 1(b), the error falls by about 2 times per nanosecond (≈ 1.85 mV at 5 ns, ≈ 0.31 mV at 7.6 ns), giving a closed-loop time constant of **τ ≈ 1.4–1.5 ns** (bandwidth ≈ 110 MHz; 1 % settling at ≈ 5.9 ns).

The prediction uses $\beta = C_2/(C_1 + C_2 + C_{in}) = 0.25/1.3 \approx 0.19$ and a bandwidth of $(1 + \beta A_0)f_{p1} \approx 97\times1.7\ \mathrm{MHz} \approx 165$ MHz, i.e. **τ ≈ 1.0 ns**. With the loop gain inferred from the 1.18 % gain error ($\beta A_0 \approx 84$, $A_0 \approx 435$) it is ≈ 144 MHz and τ ≈ 1.1 ns.

The agreement is only **rough**: the amplifier settles about 40 % more slowly than predicted, as if the dominant pole were nearer 1.1–1.3 MHz than 1.7 MHz. The 1.7-MHz value was only an estimate; the lower actual gain, the extra loading by the feedback network, and the imperfect pole–zero cancellation by $R_z$ (which also produces the fast initial jump) all contribute.

**Common mistake.** Comparing τ with $1/(2\pi\times1.7\ \mathrm{MHz}) \approx 94$ ns and concluding that the waveform disagrees by a factor of 100. The open-loop pole is not the closed-loop pole. Feedback multiplies the bandwidth by $1 + \beta A_0 \approx 85$–97.

**Common mistake.** Using $\beta = 1$ (unity feedback) or $\beta = C_1/C_2 = 4$. In this capacitive amplifier the output is fed back through the divider $C_2/(C_1 + C_2 + C_{in}) \approx 0.19$. The closed-loop gain is about $1/\beta$ only in the sense of $(C_1 + C_2 + C_{in})/C_2 = 5.2$ for the noise gain; the signal gain is $C_1/C_2 = 4$.

**Common mistake.** Reading τ from the fast initial jump (about 0.3–0.4 ns) and concluding that the amplifier is faster than predicted. The jump covers only the first ~60 % of the step; the settling accuracy is governed by the slow exponential that follows.
