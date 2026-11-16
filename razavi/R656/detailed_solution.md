# Detailed solution - R656

**Approach.** The type I PLL's closed-loop response is the second-order low-pass $\omega_n^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$. Compute $\omega_n$ and $\zeta$ from the given numbers (with $K_{VCO}$ in rad/s/V), then write the second-order step response and its decay time constant, ringing frequency, overshoot and settling time.

### Step 1 — Closed-loop transfer function

With the open-loop gain $H_{open}(s) = K_{PD}K_{VCO}/[s\,(1 + s/\omega_{LPF})]$ and unity feedback,

$$H(s) = \frac{\Phi_{out}}{\Phi_{in}} = \frac{\omega_{LPF}K_{PD}K_{VCO}}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} = \frac{\omega_n^2}{s^2 + 2\zeta\omega_ns + \omega_n^2},$$

with

$$\omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}}, \qquad \zeta = \frac{\omega_{LPF}}{2\omega_n} = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} .$$

The same $H(s)$ relates output and input *frequency* ($\Omega = s\Phi$ on both sides), so a phase step and a frequency step at the input give responses of the same shape.

### Step 2 — Convert the given values to consistent units

The phase-domain model needs $K_{VCO}$ in rad/s per volt:

$$K_{VCO} = 2\pi\times(100\ \mathrm{MHz/V}) = 2\pi\times10^8\ \mathrm{rad/(s\cdot V)} = 6.283\times10^8\ \mathrm{rad/(s\cdot V)},$$

$$K_{PD}K_{VCO} = (1\ \mathrm{V/rad})(2\pi\times10^8\ \mathrm{rad/(s\cdot V)}) = 2\pi\times10^8\ \mathrm{s^{-1}} = 6.283\times10^8\ \mathrm{s^{-1}},$$

$$\omega_{LPF} = 2\pi\times(1\ \mathrm{MHz}) = 6.283\times10^6\ \mathrm{rad/s}.$$

### Step 3 — Natural frequency and damping ratio

$$
\begin{aligned}
\omega_n &= \sqrt{\omega_{LPF}K_{PD}K_{VCO}} = \sqrt{(2\pi\times10^6)(2\pi\times10^8)}\ \mathrm{rad/s}\\
&= 2\pi\sqrt{10^{14}}\ \mathrm{rad/s} = 2\pi\times10^7\ \mathrm{rad/s} = 6.283\times10^7\ \mathrm{rad/s}\quad(f_n = 10\ \mathrm{MHz}).
\end{aligned}
$$

$$
\zeta = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} = \frac12\sqrt{\frac{2\pi\times10^6}{2\pi\times10^8}} = \frac12\sqrt{0.01} = \frac12(0.1) = 0.05 .
$$

**$\zeta = 0.05$: severely underdamped.** The loop gain $K_{PD}K_{VCO}$ is 100 times $\omega_{LPF}$, so the unity-gain frequency lies far above the filter pole, where the filter adds nearly 90° on top of the VCO's 90°.

**Phase margin (check).** With $x = \omega_u/\omega_{LPF}$ and $K_{PD}K_{VCO}/\omega_{LPF} = 100$, $|H_{open}(j\omega_u)| = 1$ gives

$$
\begin{aligned}
\frac{100}{x\sqrt{1 + x^2}} &= 1 \;\Rightarrow\; x^4 + x^2 - 10^4 = 0\\
x^2 &= \frac{-1 + \sqrt{1 + 4\times10^4}}{2} = 99.50 \;\Rightarrow\; x = 9.975 ,
\end{aligned}
$$

$$PM = 180^\circ - 90^\circ - \tan^{-1}(9.975) = 90^\circ - 84.28^\circ = 5.7^\circ,$$

consistent with the tiny damping.

### Step 4 — Derived time-domain parameters

**Decay rate** (real part of the poles):

$$\zeta\omega_n = 0.05\times6.283\times10^7\ \mathrm{s^{-1}} = 3.14\times10^6\ \mathrm{s^{-1}} \;\left(=\frac{\omega_{LPF}}{2}\right), \qquad \tau = \frac{1}{\zeta\omega_n} = \frac{2}{\omega_{LPF}} = \frac{2}{6.283\times10^6\ \mathrm{rad/s}} = 318\ \mathrm{ns}.$$

**Ringing frequency:**

$$
\begin{aligned}
\omega_d &= \omega_n\sqrt{1 - \zeta^2} = (6.283\times10^7)\sqrt{1 - 0.0025}\ \mathrm{rad/s}\\
&= (6.283\times10^7)(0.99875)\ \mathrm{rad/s} = 6.275\times10^7\ \mathrm{rad/s},
\end{aligned}
$$

i.e. $f_d = \omega_d/2\pi = 9.99$ MHz, a period of $1/f_d = 100$ ns.

**Phase angle.** $\theta = \cos^{-1}\zeta = \cos^{-1}(0.05) = 87.13^\circ$, and $1/\sqrt{1 - \zeta^2} = 1/0.99875 = 1.0013$.

### Step 5 — The step response

The underdamped second-order unit-step response is

$$y(t) = \left[1 - \frac{1}{\sqrt{1 - \zeta^2}}\,e^{-\zeta\omega_nt}\sin\!\left(\omega_dt + \theta\right)\right]u(t), \qquad \theta = \cos^{-1}\zeta ,$$

and $y(0) = 1 - \sin\theta/\sqrt{1 - \zeta^2} = 0$. For an input frequency step $\Delta\omega$ at $t = 0$, the output-frequency change is $\Delta\omega\,y(t)$; with the numbers, and $\sin(\alpha + 87.13^\circ) = \cos(\alpha - 2.87^\circ)$:

$$\Delta\omega_{out}(t) \approx \Delta\omega\left[1 - 1.0013\,e^{-t/318\ \mathrm{ns}}\cos\!\left(2\pi\cdot9.99\ \mathrm{MHz}\cdot t - 2.9^\circ\right)\right]u(t).$$

An input *phase* step $\Delta\phi$ gives $\phi_{out}(t) = \Delta\phi\,y(t)$, the same shape. The VCO control voltage follows $\Delta\omega_{out}/K_{VCO}$ and rings in the same way.

### Step 6 — Overshoot, peaks and settling

**Peaks.** The extrema are at $t_k = k\pi/\omega_d$ (every 50 ns), with $y(t_k) = 1 - (-1)^k e^{-k\pi\zeta/\sqrt{1 - \zeta^2}}$. The first peak:

$$
\begin{aligned}
t_p &= \frac{\pi}{\omega_d} = \frac{\pi}{6.275\times10^7\ \mathrm{rad/s}} = 50.1\ \mathrm{ns},\\
M_p &= e^{-\pi\zeta/\sqrt{1 - \zeta^2}} = e^{-\pi(0.05)/0.99875} = e^{-0.1573} = 0.854 ,
\end{aligned}
$$

an overshoot of **85 %** of the step.

| $t$ (ns) | 0 | 25 | 50 | 100 | 150 | 200 | 250 | 300 | 500 | 1000 | 1500 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $y(t)$ | 0 | 0.95 | 1.85 | 0.27 | 1.62 | 0.47 | 1.46 | 0.61 | 0.79 | 0.96 | 0.99 |

(The 500, 1000 and 1500 ns entries are samples of the ringing waveform, not envelope values.)

**Settling.** The output stays within $\pm\epsilon$ once the envelope $1.0013\,e^{-t/\tau}$ drops below $\epsilon$:

$$t_s = \tau\ln\frac{1.0013}{\epsilon}.$$

- 5 % settling: $t_s = (318\ \mathrm{ns})\ln(20.03) = (318\ \mathrm{ns})(3.00) = 0.95\ \mu\mathrm{s}$.
- 1 % settling: $t_s = (318\ \mathrm{ns})\ln(100.1) = (318\ \mathrm{ns})(4.61) = 1.47\ \mu\mathrm{s}$.

With a 100-ns ringing period, that is roughly 15 cycles of ringing before the output is within 1 %. The output reaches the target in about 25 ns, peaks at 1.85 times the step at 50 ns, swings to 0.27 at 100 ns, and keeps ringing at about 10 MHz with an envelope that shrinks by $e$ every 318 ns. Raising $\zeta$ to about 0.7 would need $\omega_{LPF}/(K_{PD}K_{VCO}) = 4\zeta^2 \approx 2$, i.e. a filter about 200 times wider (more ripple) or a loop gain about 200 times smaller.

### Result

$$\omega_n = 2\pi\times10\ \mathrm{MHz} = 6.28\times10^7\ \mathrm{rad/s}, \qquad \zeta = 0.05,$$

$$\Delta\omega_{out}(t) = \Delta\omega\left[1 - \frac{1}{\sqrt{1 - \zeta^2}}e^{-\zeta\omega_nt}\sin\!\left(\omega_n\sqrt{1 - \zeta^2}\,t + \cos^{-1}\zeta\right)\right]u(t) \approx \Delta\omega\left[1 - 1.001\,e^{-t/318\ \mathrm{ns}}\cos(2\pi\cdot9.99\ \mathrm{MHz}\cdot t - 2.9^\circ)\right]$$

(the same shape for an input phase step). The response is strongly underdamped: decay time constant $2/\omega_{LPF} = 318$ ns, ringing at 9.99 MHz (100-ns period), first peak at 50 ns with about 85 % overshoot, settling within 5 % after about 0.95 µs and within 1 % after about 1.47 µs (about 15 ringing cycles). The phase margin is only about 5.7°.

**Common mistake.** Using $K_{VCO} = 10^8$ rad/s/V, i.e. forgetting the $2\pi$ in 100 MHz/V. That gives $\omega_n = 2.5\times10^7$ rad/s and $\zeta = 0.126$, both wrong.

**Common mistake.** Inverting the damping formula, e.g. $\zeta = \frac12\sqrt{K_{PD}K_{VCO}/\omega_{LPF}} = 5$, and concluding the response is overdamped. From $2\zeta\omega_n = \omega_{LPF}$, a *large* loop gain gives a *small* $\zeta$.

**Common mistake.** Describing the response as a single exponential with time constant $1/\omega_{LPF}$ or $1/(K_{PD}K_{VCO})$. With the filter pole the loop is second order, and with $\zeta = 0.05$ its step response is dominated by ringing.
