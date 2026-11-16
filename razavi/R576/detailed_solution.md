# Detailed solution - R576

**Approach.** While tracking, the switch is in deep triode, a resistor set by the overdrive $V_{DD} - V_{in} - V_{TH}$. Raising the input's dc level reduces this overdrive and raises $R_{on1}$, and with it the RC delay and phase lag. Compute both cases, then show how an on-resistance that depends on the instantaneous input becomes distortion, with a first-order estimate of the second harmonic.

### Step 1 — On-resistance and phase in deep triode

The output tracks the input, so $V_{DS}$ is well under a millivolt, the source sits at about $V_{in}$, and

$$R_{on1} = \frac{1}{\beta\,(V_{DD} - V_{in} - V_{TH})}, \qquad \beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2}.$$

With $C_H$ this forms the low-pass $V_{out}/V_{in} = 1/(1 + j\omega R_{on1}C_H)$, so

$$\phi = -\arctan(\omega_{in}R_{on1}C_H), \qquad \omega_{in} = 2\pi\times10^{8}\ \mathrm{rad/s}.$$

### Step 2 — Case $V_m = 1$ V, $V_0 = 10$ mV

At the mean level $V_{in} = 1$ V:

$$
\begin{aligned}
V_{ov} &= 3 - 1 - 0.7 = 1.3\ \mathrm{V},\\
R_{on1} &= \frac{1}{(5.36\ \mathrm{mA/V^2})(1.3\ \mathrm{V})} = \frac{1}{6.97\ \mathrm{mS}} = 143.5\ \Omega,\\
\omega_{in}R_{on1}C_H &= (6.283\times10^{8})(143.5\ \Omega)(10^{-12}\ \mathrm{F}) = 0.0902,\\
\phi &= -\arctan(0.0902) = -0.0899\ \mathrm{rad} = -5.15^\circ,
\end{aligned}
$$

a delay of $0.0899/(6.283\times10^{8}) = 143$ ps $\approx R_{on1}C_H$. At the extremes of the ±10-mV swing:

| $V_{in}$ | $V_{ov}$ | $R_{on1}$ | $\phi$ |
|---|---|---|---|
| 0.99 V | 1.31 V | $1/(5.36\times1.31)\ \mathrm{k}\Omega = 142.4\ \Omega$ | −5.11° |
| 1.00 V | 1.30 V | 143.5 Ω | −5.15° |
| 1.01 V | 1.29 V | $1/(5.36\times1.29)\ \mathrm{k}\Omega = 144.6\ \Omega$ | −5.19° |

### Step 3 — Comparison with $V_m = V_0 = 10$ mV

At $V_{in} = 10$ mV the overdrive is $3 - 0.01 - 0.7 = 2.29$ V:

$$R_{on1} = \frac{1}{(5.36\ \mathrm{mA/V^2})(2.29\ \mathrm{V})} = 81.5\ \Omega,\quad \omega R_{on1}C_H = 0.0512,\quad \phi = -2.93^\circ\ (81\ \mathrm{ps}).$$

| Input level $V_m$ | $R_{on1}$ | Phase | Delay |
|---|---|---|---|
| 10 mV | 81.5 Ω | −2.93° | 81 ps |
| 1 V | 143.5 Ω | −5.15° | 143 ps |

Raising the input level by 1 V cuts the overdrive from 2.29 V to 1.3 V, which raises $R_{on1}$ by about 76 % and nearly doubles the delay. The amplitude loss stays small (0.4 % at 1 V, against 0.13 % at 10 mV).

### Step 4 — Why a level-dependent phase means distortion

$R_{on1}$ depends on the **instantaneous** input voltage, so the time constant $\tau = R_{on1}C_H$ changes through the cycle and different parts of the waveform are delayed by different amounts. A signal-dependent time shift is a nonlinear operation, and it creates harmonics.

**First-order estimate.** For $\omega\tau \ll 1$ the output lags by about $\tau$:

$$V_{out}(t) \approx V_{in}(t) - \tau(V_{in})\,\frac{dV_{in}}{dt}.$$

Expanding $\tau(V_{in}) \approx \tau_0 + \tau'(V_{in} - V_m)$ with

$$\tau' = \frac{d\tau}{dV_{in}} = \frac{d}{dV_{in}}\left[\frac{C_H}{\beta(V_{DD} - V_{in} - V_{TH})}\right] = \frac{C_H}{\beta(V_{DD} - V_{in} - V_{TH})^2} ,$$

and $V_{in} - V_m = V_0\sin\omega t$, $dV_{in}/dt = V_0\omega\cos\omega t$, the extra term is

$$\tau'(V_{in} - V_m)\frac{dV_{in}}{dt} = \tau'V_0^2\omega\sin\omega t\cos\omega t = \frac12\tau'\omega V_0^2\sin 2\omega t,$$

a **second harmonic** of amplitude $\tfrac12\tau'\omega V_0^2$. For $V_m = 1$ V:

$$
\begin{aligned}
\tau' &= \frac{1\ \mathrm{pF}}{(5.36\ \mathrm{mA/V^2})(1.3\ \mathrm{V})^2} = 110\ \mathrm{ps/V},\\
V_{2\omega} &= \tfrac12(110\times10^{-12})(6.283\times10^{8})(0.01)^2 = 3.5\ \mu\mathrm{V},
\end{aligned}
$$

about $3.5\times10^{-4}$ of the 10-mV fundamental (−69 dB). For $V_m = 10$ mV, $\tau' = 1\ \mathrm{pF}/[(5.36\ \mathrm{mA/V^2})(2.29\ \mathrm{V})^2] = 36$ ps/V, giving about 1.1 μV (−79 dB). A numerical simulation of the nonlinear circuit confirms both values.

The distortion grows with the input level (smaller overdrive, steeper $\tau'$), with the input amplitude ($\propto V_0$ relative to the fundamental) and with frequency ($\propto\omega$). With swings of hundreds of millivolts it dominates a simple MOS sampler, which motivates complementary and bootstrapped switches that keep $V_{GS}$, and hence $R_{on}$, constant.

### Result

| Case | $R_{on1}$ | Phase shift |
|---|---|---|
| $V_0 = 10$ mV, $V_m = 1$ V | ≈ 143.5 Ω (142.4–144.6 Ω over the swing) | ≈ −5.15° (−5.11° to −5.19°), delay ≈ 143 ps |
| $V_0 = V_m = 10$ mV | 81.5 Ω | −2.93°, delay ≈ 81 ps |

These follow from $R_{on1} = 1/[5.36\ \mathrm{mA/V^2}\times(3 - V_{in} - 0.7)\ \mathrm{V}]$ and $\phi = -\arctan(\omega R_{on1}C_H)$. Raising the input level by 1 V raises $R_{on}$ by about 76 % and the lag from 2.9° to 5.2°.

**Distortion:** the on-resistance, and with it the delay and the attenuation, depends on the *instantaneous* input level. The output is therefore a signal-dependent, time-shifted copy of the input, a nonlinear operation that creates harmonics. Even within ±10 mV around 1 V the phase varies by about ±0.04°, which produces a second harmonic of about $\tfrac12\tau'\omega V_0^2 \approx 3.5\ \mu$V (−69 dB).

**Common mistake.** Thinking $R_{on}$ *decreases* when the input level rises. With the gate fixed at $V_{DD}$, a higher input (and source) voltage means a smaller overdrive and a *larger* on-resistance.

**Common mistake.** Claiming the phase shift is independent of the input level because the circuit "is just an RC filter". That holds only for a constant $R_{on}$, whereas here $R_{on} = 1/[\beta(V_{DD} - V_{in} - V_{TH})]$.

**Common mistake.** Using a saturation-region model for the switch. During tracking $V_{DS} \approx 0$ (deep triode); saturation formulas give a wrong resistance and hide the $1/(V_{DD} - V_{in} - V_{TH})$ dependence that causes the distortion.
