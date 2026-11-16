# Detailed solution - R528

**Approach.** Ringing means the closed-loop transfer function has a pair of lightly damped complex poles. Closed-loop poles are the points where the loop gain $\beta H(s)$ equals $-1$. If they lie close to the $j\omega$ axis, then on that axis, at about the ringing frequency, $\beta H(j\omega)$ must be close to $-1$: magnitude ≈ 1 and phase ≈ −180°. A two-pole loop model makes this quantitative and lets us read the phase margin from the overshoot.

### Step 1 — What the figure shows

- At $t = 0$ the outputs step from 500 mV to about 520 mV ($V_{out1}$) and 480 mV ($V_{out2}$), a 20-mV final change each.
- $V_{out1}$ overshoots to about 528 mV at $t \approx 2.25$ ns, dips to about 517.6 mV at $t \approx 4.5$ ns, peaks again at about 521.5 mV near $t \approx 6.8$ ns, and settles by about 10 ns. $V_{out2}$ is the mirror image, and the same ringing appears when the step is removed at 20 ns.
- **Ringing period:** peak to peak $\approx 6.8 - 2.25 \approx 4.6$ ns, so
$$f_1 \approx \frac{1}{4.6\ \mathrm{ns}} \approx 220\ \mathrm{MHz}.$$
- **Overshoot:** $(528 - 520.3)/20.3 \approx 0.38$, i.e. about 38–40 %. This is a heavily underdamped response.

### Step 2 — Ringing means closed-loop poles where $\beta H \approx -1$

For a negative-feedback amplifier with open-loop gain $H(s)$ and feedback factor $\beta$, the closed-loop transfer function is

$$\frac{Y}{X}(s) = \frac{H(s)}{1 + \beta H(s)} .$$

Its poles are the roots of $1 + \beta H(s) = 0$, i.e. the values of $s$ where the **loop gain** $\beta H(s)$ equals exactly $-1$.

A step response that rings at $f_1$ and decays slowly contains a term $e^{-\sigma t}\cos(2\pi f_1t)$, with $\sigma \ll 2\pi f_1$. This comes from a pair of complex closed-loop poles $s = -\sigma \pm j\,2\pi f_1$ lying **close to the $j\omega$ axis**. Since $\beta H(s)$ varies smoothly, its value on the axis at $s = j2\pi f_1$ is close to its value at the pole, $-1$:

$$\beta H(j2\pi f_1) \approx -1 \quad\Longrightarrow\quad |\beta H(j2\pi f_1)| \approx 1\ \ \text{and}\ \ \angle\beta H(j2\pi f_1) \approx -180^\circ .$$

In frequency-domain terms: $|1 + \beta H(j\omega)|$ becomes small near $f_1$, so the closed-loop response $|H/(1 + \beta H)|$ **peaks** there. That peak is what rings in the time domain.

So yes, the step response does carry phase information. $f_1$ is approximately the **gain-crossover frequency** of the loop (where $|\beta H| = 1$), and there the open-loop phase is **close to −180°**, i.e. the phase margin (PM) is small. The more pronounced and longer-lasting the ringing, the closer the phase is to −180°.

### Step 3 — Making it quantitative with a two-pole loop

Model the loop gain as a dominant pole (effectively at the origin at these frequencies) and a second pole $\omega_{p2}$:

$$L(s) = \beta H(s) \approx \frac{K}{s\,(1 + s/\omega_{p2})},$$

where $K$ (in rad/s) is $\beta$ times the op amp's gain–bandwidth product.

**Closed-loop poles.** $1 + L(s) = 0$ gives $s(1 + s/\omega_{p2}) + K = 0$, i.e.

$$s^2 + \omega_{p2}s + K\omega_{p2} = 0 .$$

Compare with the standard form $s^2 + 2\zeta\omega_ns + \omega_n^2$ ($\omega_n$ is the natural frequency and $\zeta$ the damping ratio):

$$\omega_n^2 = K\omega_{p2},\qquad 2\zeta\omega_n = \omega_{p2}.$$

**Step response** (for $\zeta < 1$): it rings at the damped frequency $\omega_d = \omega_n\sqrt{1 - \zeta^2}$ (so $2\pi f_1 = \omega_d$), and its overshoot is $\mathrm{OS} = \exp\left(-\pi\zeta/\sqrt{1 - \zeta^2}\right)$.

**Crossover frequency.** $|L(j\omega_c)| = 1$ means $K^2 = \omega_c^2\left(1 + \omega_c^2/\omega_{p2}^2\right)$. Substitute $K = \omega_n/(2\zeta)$, $\omega_{p2} = 2\zeta\omega_n$ and $u = \omega_c/\omega_n$:

$$\frac{1}{4\zeta^2} = u^2 + \frac{u^4}{4\zeta^2}\quad\Longrightarrow\quad u^4 + 4\zeta^2u^2 - 1 = 0\quad\Longrightarrow\quad u^2 = \sqrt{1 + 4\zeta^4} - 2\zeta^2 .$$

**Phase margin.**

$$\mathrm{PM} = 180^\circ + \angle L(j\omega_c) = 90^\circ - \tan^{-1}\frac{\omega_c}{\omega_{p2}} = \tan^{-1}\frac{2\zeta}{u}.$$

| $\zeta$ | overshoot | $\omega_d/\omega_c$ | PM | $\angle\beta H$ at $\omega_d$ |
|---|---|---|---|---|
| 0.1 | 73 % | 1.005 | 11° | −169° |
| 0.2 | 53 % | 1.02 | 23° | −158° |
| 0.3 | 37 % | 1.04 | 33° | −148° |
| 0.4 | 25 % | 1.07 | 43° | −139° |
| 0.5 | 16 % | 1.10 | 52° | −131° |
| 0.6 | 9.5 % | 1.12 | 59° | −124° |

Two useful conclusions:
- The ringing frequency equals the crossover frequency to within about 10 % for any visibly ringing response ($\zeta \lesssim 0.6$).
- PM ≈ 100ζ degrees (for PM up to about 60°), so the overshoot, or the decay of the ringing, gives the phase margin.

### Step 4 — Reading the example

**Damping from the overshoot** (OS ≈ 0.38):

$$\frac{\pi\zeta}{\sqrt{1 - \zeta^2}} = -\ln0.38 = 0.96 \quad\Longrightarrow\quad \zeta = \frac{0.96}{\sqrt{\pi^2 + 0.96^2}} = 0.29 .$$

**Check from the decay.** The deviations from the final value at successive peaks of the same sign are about +7.8 mV and +1.2 mV, one ringing period apart. Their ratio gives $2\pi\zeta/\sqrt{1 - \zeta^2} = \ln(7.8/1.2) = 1.87$, i.e. $\zeta = 1.87/\sqrt{4\pi^2 + 1.87^2} \approx 0.29$ again.

**Open-loop information:**
- Phase margin: $\mathrm{PM} = \tan^{-1}(2\zeta/u)$ with $u = \sqrt{\sqrt{1 + 4(0.29)^4} - 2(0.29)^2} = 0.92$, so $\mathrm{PM} = \tan^{-1}(0.58/0.92) \approx 32^\circ$.
- Crossover frequency: $f_c \approx f_1/1.04 \approx 210$ MHz.
- At $f_1 \approx 220$ MHz the loop gain has a magnitude of about 0.93 and a phase of about $-90^\circ - \tan^{-1}(0.957/0.58) \approx -149^\circ$, roughly 30° away from −180°.

If $\beta$ is frequency independent (resistive or capacitive feedback), $\angle\beta H = \angle H$, so this is directly the phase of the open-loop amplifier. With unity feedback ($\beta = 1$) the crossover is the op amp's own unity-gain frequency. With $\beta < 1$ it is the frequency where $|\beta H| = 1$, which is lower.

### Step 5 — Limits of the inference

The exact numbers rely on the two-pole model. For a loop with more poles (or zeros) the correspondence is approximate, but the qualitative statement remains: a lightly damped closed-loop pole pair at $f_1$ requires $\beta H(j2\pi f_1) \approx -1$. A pole far from the axis (heavy damping) would produce no visible ringing and therefore says little about the phase.

### Result

**Yes.** Ringing at $f_1$ means the closed-loop transfer function $H/(1 + \beta H)$ has lightly damped complex poles near $\pm j2\pi f_1$, where $1 + \beta H \approx 0$. Hence:

- $f_1$ approximately marks the **gain-crossover frequency** of the loop transmission ($|\beta H| \approx 1$); for a two-pole loop the two agree within about 10 %.
- At that frequency the open-loop phase is **close to −180°**, i.e. the phase margin is small. The larger the overshoot and the slower the decay, the closer it is to −180°; quantitatively PM ≈ 100ζ degrees, with ζ estimated from the overshoot.
- In the example, $f_1 \approx 220$ MHz and the overshoot is ≈ 38–40 %, so ζ ≈ 0.29, PM ≈ 30°, and the open-loop phase near 220 MHz is about −150°.
- For unity feedback the crossover is the op amp's unity-gain frequency; with $\beta < 1$ it is where $|\beta H| = 1$.

**Common mistake.** Saying the step response contains no phase information. The ringing frequency and the damping are set by the closed-loop poles, which are fixed by where $\beta H = -1$. They therefore reveal both the crossover frequency and how close the phase is to −180° there.

**Common mistake.** Identifying $f_1$ with an open-loop pole (for instance the dominant pole). The closed-loop poles have moved far from the open-loop poles; ringing occurs near the *crossover* frequency, where the loop gain is about 1, not where the open-loop gain starts to roll off.

**Common mistake.** Stating that the phase at $f_1$ is about −90°. That would correspond to a large phase margin (≈ 90°), whose step response does not ring at all. Visible ringing requires a phase approaching −180°.
