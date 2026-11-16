# Detailed solution - R634

**Approach.** Two different elements produce the two kinds of waveform. The drain currents come out of the differential pair, which is a strongly nonlinear, *limiting* element: at large swings it switches the whole tail current from one side to the other, so the currents become nearly square. The drain voltages are those currents passed through the LC tanks, which are frequency-selective: they present a large impedance only near the resonance frequency and a small one at the harmonics. We quantify both effects with a Fourier series and the tank impedance.

### Step 1 — The circuit and the waveforms

Reading Fig. 1: $M_1$ and $M_2$ form a differential pair with tail current $I_{SS}$. Their drains X and Y each connect to $V_{DD}$ through a parallel tank ($L_P$, $R_P$, $C_P$). The pair is **cross-coupled**: the gate of $M_1$ is driven by Y and the gate of $M_2$ by X.

Fig. 2 shows the start-up. At first, $V_X$, $V_Y$ and $I_{D1}$, $I_{D2}$ are all small, growing sinusoids. As the oscillation builds up, the voltages remain smooth sinusoids centred at $V_{DD}$, while the currents develop flat tops and bottoms. They are clipped at 0 and $I_{SS}$, centred at $I_{SS}/2$, and end up close to square waves.

### Step 2 — Why the currents are distorted: the pair limits

The drain currents are set by the differential gate voltage $V_Y - V_X$ through the differential pair's large-signal characteristic. KCL at the tail node always gives

$$I_{D1} + I_{D2} = I_{SS},$$

so each current is confined to the range $0 \le I_D \le I_{SS}$. The pair responds roughly linearly only for small inputs. With the square law, once $|V_X - V_Y|$ exceeds $\sqrt2\,(V_{GS} - V_{TH})_{eq}$, where $(V_{GS} - V_{TH})_{eq}$ is the overdrive at balance, one transistor turns off and the other carries all of $I_{SS}$.

- **Early in the build-up**, the swings are small, the pair is linear, and both currents are sinusoids around $I_{SS}/2$.
- **As the amplitude grows**, $V_X - V_Y$ becomes much larger than this switching voltage for most of each cycle. Every half cycle the full $I_{SS}$ is steered to one side. The currents saturate at 0 and $I_{SS}$, spending only a short time in the transition, and approach **square waves**.

A 50 %-duty square wave from 0 to $I_{SS}$ has the Fourier series

$$I_{D1}(t) = \frac{I_{SS}}{2} + \frac{2I_{SS}}{\pi}\left[\cos\omega_0t - \frac13\cos3\omega_0t + \frac15\cos5\omega_0t - \frac17\cos7\omega_0t + \dots\right].$$

It contains only odd harmonics (the waveform is half-wave symmetric), with amplitudes $1/n$ of the fundamental: the 3rd harmonic is 33 %, the 5th 20 %, and so on. The total harmonic distortion is $\sqrt{\pi^2/8 - 1} \approx 48\%$. $I_{D2}$ is the same waveform shifted by half a period.

### Step 3 — How the drain voltages are formed

The voltage at X is $V_{DD}$ minus the drop across the tank. Each frequency component of the drain current produces a voltage equal to that component times the tank impedance at its frequency:

- **DC component** ($I_{SS}/2$): it flows through the inductor, whose DC resistance is zero (ideally), so it causes no drop. That is why $V_X$ and $V_Y$ are centred at $V_{DD}$.
- **The component at $n\omega_0$**, with amplitude $I_n$, produces a voltage of amplitude $I_n\,|Z(jn\omega_0)|$.

So the voltage spectrum is the current spectrum weighted by $|Z(j\omega)|$.

### Step 4 — Impedance of the tank versus frequency

The admittance of the parallel tank is

$$Y(j\omega) = \frac{1}{R_P} + j\omega C_P + \frac{1}{j\omega L_P} = \frac{1}{R_P} + j\left(\omega C_P - \frac{1}{\omega L_P}\right).$$

Let $\omega_0 = 1/\sqrt{L_PC_P}$ be the resonance frequency, so that $\omega_0C_P = 1/(\omega_0L_P)$, and define the quality factor $Q = R_P\,\omega_0C_P = R_P/(\omega_0L_P)$. Then

$$
\begin{aligned}
\omega C_P - \frac{1}{\omega L_P} &= \omega_0C_P\frac{\omega}{\omega_0} - \frac{1}{\omega_0L_P}\frac{\omega_0}{\omega} = \omega_0C_P\left(\frac{\omega}{\omega_0} - \frac{\omega_0}{\omega}\right),\\
Y(j\omega) &= \frac{1}{R_P}\left[1 + jQ\left(\frac{\omega}{\omega_0} - \frac{\omega_0}{\omega}\right)\right],\\
Z(j\omega) &= \frac{R_P}{1 + jQ\left(\dfrac{\omega}{\omega_0} - \dfrac{\omega_0}{\omega}\right)}.
\end{aligned}
$$

- **At resonance** ($\omega = \omega_0$) the inductor and capacitor admittances cancel and $Z = R_P$, the maximum.
- **At the $n$-th harmonic** ($\omega = n\omega_0$), $\omega/\omega_0 - \omega_0/\omega = n - 1/n = (n^2 - 1)/n$, so

$$|Z(jn\omega_0)| = \frac{R_P}{\sqrt{1 + Q^2\left(\dfrac{n^2 - 1}{n}\right)^2}} \approx \frac{n}{Q\,(n^2 - 1)}\,R_P .$$

For $n = 3$: $|Z(3\omega_0)| \approx 3R_P/(8Q)$.

**Physical picture.** At $3\omega_0$ the capacitor's admittance is three times larger, and the inductor's three times smaller, than at resonance. They no longer cancel, and $C_P$ provides a low-impedance path that shunts the harmonic currents to $V_{DD}$ (AC ground) before they can develop a voltage.

### Step 5 — Harmonic content of the drain voltage

Multiply each current harmonic by the tank impedance at its frequency, relative to the fundamental. For the 3rd harmonic:

$$\frac{V_3}{V_1} = \frac{I_3}{I_1}\cdot\frac{|Z(3\omega_0)|}{R_P} \approx \frac13\cdot\frac{3}{8Q} = \frac{1}{8Q}.$$

Numbers for a tank with $Q = 5$:

| Harmonic $n$ | Current, $I_n/I_1 = 1/n$ | Tank, $\lvert Z(jn\omega_0)\rvert/R_P$ | Voltage, $V_n/V_1$ |
|---|---|---|---|
| 1 | 1 | 1 | 1 |
| 3 | 0.333 | 0.075 | 0.025 |
| 5 | 0.200 | 0.042 | 0.0083 |
| 7 | 0.143 | 0.029 | 0.0042 |
| THD | ≈ 48 % | | ≈ 2.7 % |

The third harmonic drops from 33 % in the current to 2.5 % in the voltage, and the higher harmonics are suppressed even more. With $Q = 10$ the voltage THD falls to about 1.3 %. The drain voltages are therefore very nearly sinusoidal, at the fundamental, with amplitude about $(2/\pi)I_{SS}R_P$, even though the currents that produce them are nearly square.

### Step 6 — Putting it together

- The **currents** are the outputs of a limiting element, the differential pair, which clips them at 0 and $I_{SS}$. Their shape is not filtered by anything, so their harmonics remain.
- The **voltages** are these currents filtered by a high-$Q$ resonator. It passes the fundamental with the full resistance $R_P$ and shunts the harmonics through $C_P$ (and $L_P$ below resonance), so the voltages keep essentially only the fundamental.
- Early in the build-up, when the pair is still linear, both sets of waveforms are sinusoidal; the difference appears only once the pair starts switching.

This is why, in an LC oscillator, the tank voltages are the clean output, while the transistor currents may be strongly distorted.

### Result

The drain currents are generated by the differential pair, which limits: at large amplitudes $V_X - V_Y$ steers the entire tail current to one transistor every half cycle, so $I_{D1}$ and $I_{D2}$ are clipped between 0 and $I_{SS}$ and approach square waves, with large odd harmonics (3rd ≈ 1/3, 5th ≈ 1/5 of the fundamental). The drain voltages are these currents times the tank impedance, $Z = R_P/[1 + jQ(\omega/\omega_0 - \omega_0/\omega)]$, which equals $R_P$ only near resonance and is much smaller at the harmonics ($|Z(3\omega_0)| \approx 3R_P/(8Q)$) because $C_P$ shunts them. The 3rd-harmonic voltage is only about $1/(8Q)$ of the fundamental (≈ 2.5 % for $Q = 5$, versus 33 % in the current). Hence $V_X$ and $V_Y$ remain nearly sinusoidal around $V_{DD}$, while $I_{D1}$ and $I_{D2}$ become nearly rectangular.

**Common mistake.** Saying the voltages are sinusoidal "because the transistors stay linear". If the transistors were linear the currents would be sinusoidal too; Fig. 2 shows clearly clipped currents. The clean voltages come from the filtering of the tank, not from linear operation of the pair.

**Common mistake.** Explaining only the filtering ("the tank filters the harmonics") without saying why the currents are distorted in the first place, or without saying *why* the tank attenuates harmonics. The complete explanation needs both the limiting of the pair and the frequency selectivity of the resonator (large impedance only near $\omega_0$).

**Common mistake.** Attributing the smoothing to the inductor alone acting as an integrator. An inductor alone would *increase* its impedance at higher harmonics and pass them; it is the parallel resonance with $C_P$ that makes the impedance peak at $\omega_0$ and fall at $3\omega_0$, $5\omega_0$, and so on.
