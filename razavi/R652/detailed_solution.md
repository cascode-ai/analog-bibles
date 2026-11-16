# Detailed solution - R652

**Approach.** Describe the averaged XOR output as a periodic triangle $F(\Delta\phi)$ and write the loop as one differential equation for the phase error, $d\Delta\phi/dt = \omega_{in} - \omega_{out}$. Then find its equilibria (there is one on every slope), test the stability of each by linearizing, follow what happens to a phase error that starts on the "wrong" slope, and show that reversing the polarity only swaps the roles of the two slopes.

### Step 1 — The phase-detector characteristic

Reading the figure: $V_1$ and $V_2$ are square waves with the same frequency and 50 % duty cycle. The XOR output is high whenever the two inputs differ.

- $\Delta\phi \approx 0$: the inputs almost never differ, so $V_{out}$ shows only narrow glitches and its average is about 0.
- $\Delta\phi = \pi/2$: after each edge of $V_1$ (two per period) the inputs differ for a quarter period, so $V_{out}$ is high half of the time and its average is $V_0/2$.
- $\Delta\phi = \pi$: the inputs are complementary, $V_{out}$ is always high, and its average is $V_0$.
- $\Delta\phi = 3\pi/2$: high half of the time again, average $V_0/2$.

In general, after each of the two edges of $V_1$ per period the inputs differ for a fraction $|\Delta\phi|/(2\pi)$ of the period, so the output is high for a fraction $2\cdot|\Delta\phi|/(2\pi) = |\Delta\phi|/\pi$ of the time. The average output is therefore

$$F(\Delta\phi) \equiv \overline{V_{out}} = V_0\,\frac{|\Delta\phi|}{\pi}, \qquad -\pi \le \Delta\phi \le \pi,$$

repeated with period $2\pi$. This is the triangle at the bottom of the figure. Its slope is

$$F'(\Delta\phi) = \begin{cases} +V_0/\pi & \text{on } (0,\pi),\ (2\pi,3\pi),\ (-2\pi,-\pi),\ \dots \quad\text{(rising segments)}\\ -V_0/\pi & \text{on } (\pi,2\pi),\ (-\pi,0),\ \dots \quad\text{(falling segments)} \end{cases}$$

**Key property.** The characteristic is *periodic*, and every period contains one rising and one falling segment with slopes of equal size. The sign of the phase-detector gain is therefore not fixed: it depends on where on the curve the loop operates.

### Step 2 — The loop equation for the phase error

Let $\phi_{in}$ and $\phi_{out}$ be the total phases of the input and of the VCO output, and define the phase error

$$\Delta\phi = \phi_{in} - \phi_{out}.$$

Frequency is the time derivative of phase, $d\phi_{in}/dt = \omega_{in}$ and $d\phi_{out}/dt = \omega_{out}$, so

$$\frac{d\Delta\phi}{dt} = \omega_{in} - \omega_{out}.$$

**VCO.** $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$, where $\omega_0$ is the free-running frequency and $K_{VCO}$ the VCO gain. Take $K_{VCO} > 0$ for now (frequency rises with control voltage).

**Low-pass filter.** The LPF removes the switching ripple of the XOR output and passes its average. If the phase error changes slowly compared with the filter time constant (the slow-loop approximation; the filter dynamics are added back in Step 7), then $V_{cont} \approx F(\Delta\phi)$.

Substituting both:

$$\frac{d\Delta\phi}{dt} = \omega_{in} - \omega_0 - K_{VCO}F(\Delta\phi).$$

Define $V_1 \equiv (\omega_{in} - \omega_0)/K_{VCO}$, the control voltage at which the VCO would run exactly at $\omega_{in}$. Factoring out $K_{VCO}$:

$$\frac{d\Delta\phi}{dt} = K_{VCO}\left[V_1 - F(\Delta\phi)\right].$$

This single first-order equation describes the whole loop. The "polarity" of the feedback around an operating point is the sign of the product $K_{VCO}F'(\Delta\phi)$.

### Step 3 — Equilibria: one on each slope

The loop is locked when $\omega_{out} = \omega_{in}$, i.e. $d\Delta\phi/dt = 0$. From Step 2 this requires

$$F(\Delta\phi^*) = V_1 .$$

A solution exists only if $0 \le V_1 \le V_0$, i.e. $\omega_0 \le \omega_{in} \le \omega_0 + K_{VCO}V_0$; this is the range of input frequencies the detector output can command. Take $0 < V_1 < V_0$ (the generic case). In the period $[0, 2\pi)$ there are two solutions.

**On the rising segment** ($0 \le \Delta\phi \le \pi$, where $F = V_0\Delta\phi/\pi$):

$$
\begin{aligned}
V_0\,\frac{\Delta\phi_r}{\pi} &= V_1\\
\Delta\phi_r &= \pi\,\frac{V_1}{V_0}.
\end{aligned}
$$

**On the falling segment** ($\pi \le \Delta\phi \le 2\pi$, where $F = V_0(2\pi - \Delta\phi)/\pi$):

$$
\begin{aligned}
V_0\,\frac{2\pi - \Delta\phi_f}{\pi} &= V_1\\
2\pi - \Delta\phi_f &= \pi\,\frac{V_1}{V_0}\\
\Delta\phi_f &= 2\pi - \pi\,\frac{V_1}{V_0}.
\end{aligned}
$$

Every shift by a multiple of $2\pi$ is also a solution. **Example:** for $V_1 = V_0/2$, $\Delta\phi_r = \pi/2$ and $\Delta\phi_f = 3\pi/2$, exactly the two waveform cases in the figure that give an average of $V_0/2$.

Both points produce the same average detector output, so both satisfy the static lock condition. That condition is necessary but not sufficient: the lock point must also be *stable*.

### Step 4 — Stability of each equilibrium

Write $\Delta\phi = \Delta\phi^* + \delta$ with a small deviation $\delta$. A first-order Taylor expansion of the characteristic gives

$$F(\Delta\phi^* + \delta) \approx F(\Delta\phi^*) + F'(\Delta\phi^*)\,\delta = V_1 + F'(\Delta\phi^*)\,\delta .$$

Substitute into the loop equation (and note $d\Delta\phi^*/dt = 0$):

$$
\begin{aligned}
\frac{d\delta}{dt} &= K_{VCO}\left[V_1 - V_1 - F'(\Delta\phi^*)\,\delta\right]\\
\frac{d\delta}{dt} &= -K_{VCO}F'(\Delta\phi^*)\,\delta\\
\delta(t) &= \delta(0)\,\exp\!\left[-K_{VCO}F'(\Delta\phi^*)\,t\right].
\end{aligned}
$$

- **Rising segment**, $F' = +V_0/\pi$: the exponent is $-K_{VCO}V_0t/\pi$, so $\delta$ decays with time constant $\pi/(K_{VCO}V_0)$. **Stable lock.**
- **Falling segment**, $F' = -V_0/\pi$: the exponent is $+K_{VCO}V_0t/\pi$, so any deviation grows. **Unstable equilibrium.**

**Physical picture.** Suppose the output falls slightly behind, so $\Delta\phi$ grows. On a rising segment the average detector output rises, $V_{cont}$ rises, the VCO speeds up and the output catches up: the error is corrected (negative feedback). On a falling segment the same lag *lowers* the detector output, the VCO slows down and the output falls further behind: the error is amplified (positive feedback). So for a given sign of $K_{VCO}$, one slope gives negative feedback and the other gives positive feedback.

### Step 5 — A start on the "wrong" slope still ends in lock

Now follow large phase errors with the full nonlinear equation $d\Delta\phi/dt = K_{VCO}[V_1 - F(\Delta\phi)]$, still with $K_{VCO} > 0$. The direction of motion is set only by whether $F$ is above or below $V_1$. Over one period, from $\Delta\phi_r$ to $\Delta\phi_r + 2\pi$:

| Interval of $\Delta\phi$ | Segment | $F$ vs. $V_1$ | Sign of $d\Delta\phi/dt$ | Where $\Delta\phi$ goes |
|---|---|---|---|---|
| $\Delta\phi_r < \Delta\phi < \pi$ | rising | $F > V_1$ | $-$ | down to $\Delta\phi_r$ |
| $\pi < \Delta\phi < \Delta\phi_f$ | falling | $F > V_1$ | $-$ | down, across the peak at $\pi$, then to $\Delta\phi_r$ |
| $\Delta\phi_f < \Delta\phi < 2\pi$ | falling | $F < V_1$ | $+$ | up, across the valley at $2\pi$, then to $\Delta\phi_r + 2\pi$ |
| $2\pi < \Delta\phi < \Delta\phi_r + 2\pi$ | rising | $F < V_1$ | $+$ | up to $\Delta\phi_r + 2\pi$ |

So:

- A phase error that starts on a **positive-slope** segment settles on that segment directly.
- A phase error that starts on a **negative-slope** segment is pushed *away* from $\Delta\phi_f$ (the positive feedback there acts like a repeller). It moves in one direction or the other, crosses the peak at $\pi$ or the valley at $2\pi$ into an adjacent positive-slope segment, and settles at $\Delta\phi_r$ or at $\Delta\phi_r + 2\pi$.
- $\Delta\phi_r + 2\pi$ is physically the same locked state as $\Delta\phi_r$. The output has simply slipped one cycle relative to the input (a "cycle slip").
- Only a start *exactly* at $\Delta\phi_f$ would stay there, and the slightest noise pushes it off.

Hence the loop locks whichever slope the initial phase difference falls on.

### Step 6 — Reversing the polarity only swaps the two slopes

Reverse the feedback polarity, for example by inserting an inverter in one detector input. Inverting a square wave shifts it by $\pi$, which turns the XOR into an XNOR, whose average output is

$$G(\Delta\phi) = V_0 - F(\Delta\phi).$$

This is the same triangle shifted by $\pi$. To check, for $0 \le \Delta\phi \le \pi$ the point $\Delta\phi + \pi$ lies on a falling segment, so

$$
\begin{aligned}
F(\Delta\phi + \pi) &= V_0\,\frac{2\pi - (\Delta\phi + \pi)}{\pi} = V_0\,\frac{\pi - \Delta\phi}{\pi}\\
&= V_0 - V_0\,\frac{\Delta\phi}{\pi} = V_0 - F(\Delta\phi) = G(\Delta\phi).
\end{aligned}
$$

The loop equation becomes $d\Delta\phi/dt = K_{VCO}[V_1 - F(\Delta\phi + \pi)]$. This is the equation of Steps 2–5 with $\Delta\phi$ replaced by $\Delta\phi + \pi$, so every conclusion carries over with a shift of $\pi$:

- stable lock now requires $G' > 0$, i.e. $F'(\Delta\phi) < 0$: the loop locks on a **falling** segment of the original characteristic, at $\Delta\phi = \pi V_1/V_0 - \pi$ (mod $2\pi$);
- the rising segments now give positive feedback, and a phase error starting there drifts to an adjacent falling segment.

With $V_1 = V_0/2$, the normal loop locks at $\Delta\phi = +\pi/2$ and the reversed loop at $\Delta\phi = -\pi/2 \equiv 3\pi/2$. **Both lock.** The polarity only decides the static phase offset, not whether lock occurs.

Two side remarks:

- Swapping the two XOR inputs changes nothing, because $F$ is even: $F(-\Delta\phi) = F(\Delta\phi)$.
- Making $K_{VCO}$ negative (with the same $\omega_0$) also moves the stable points to the falling slope, since stability needs $K_{VCO}F' > 0$. But then $V_1 = (\omega_{in} - \omega_0)/K_{VCO}$ must still lie between 0 and $V_0$, which now requires $\omega_{in} \le \omega_0$. Whether an equilibrium exists at all is a tuning-range question, not a polarity question.

### Step 7 — Including the low-pass filter

With the first-order LPF, $V_{cont}$ follows $F(\Delta\phi)$ with a lag:

$$\frac{1}{\omega_{LPF}}\frac{dV_{cont}}{dt} + V_{cont} = F(\Delta\phi).$$

Linearize around a lock point: $\delta = \Delta\phi - \Delta\phi^*$ and $v = V_{cont} - V_1$. Then

$$\frac{d\delta}{dt} = -K_{VCO}\,v, \qquad \frac{1}{\omega_{LPF}}\frac{dv}{dt} + v = F'\,\delta .$$

In the Laplace domain the second equation gives $v = F'\delta/(1 + s/\omega_{LPF})$. Substituting into the first:

$$
\begin{aligned}
s\,\delta &= -\frac{K_{VCO}F'}{1 + s/\omega_{LPF}}\,\delta\\
s\left(1 + \frac{s}{\omega_{LPF}}\right) + K_{VCO}F' &= 0\\
\frac{s^2}{\omega_{LPF}} + s + K_{VCO}F' &= 0 .
\end{aligned}
$$

- If $K_{VCO}F' > 0$, all three coefficients are positive, and a second-order polynomial with positive coefficients has both roots in the left half plane: **stable** (it may ring, but it settles).
- If $K_{VCO}F' < 0$, the product of the roots, $\omega_{LPF}K_{VCO}F'$, is negative, so one root is real and positive: **unstable**.

The filter changes how the loop settles, not which slope is stable, so the conclusions of Steps 4–6 still hold.

### Step 8 — Why frequency detection makes polarity matter

The argument relies on the phase detector's characteristic being periodic with both slopes in every period: a wrong sign is "repaired" by the phase error sliding to the other slope. A frequency detector has a monotonic characteristic: its output has the sign of $\omega_{in} - \omega_{out}$ and never reverses. If such a loop has the wrong polarity, it drives $\omega_{out}$ *away* from $\omega_{in}$, and there is no other slope to slide to, so it never locks. That is why the problem specifies a PLL without frequency detection.

### Result

The XOR characteristic is periodic and has a rising slope ($0 < \Delta\phi < \pi$) and a falling slope ($\pi < \Delta\phi < 2\pi$) in every period. With $d\Delta\phi/dt = K_{VCO}[V_1 - F(\Delta\phi)]$:

- equilibria $F(\Delta\phi^*) = V_1$ exist on both slopes: $\Delta\phi_r = \pi V_1/V_0$ and $\Delta\phi_f = 2\pi - \pi V_1/V_0$;
- a deviation obeys $\dot\delta = -K_{VCO}F'\delta$, so for $K_{VCO} > 0$ the rising-slope points are stable (negative feedback) and the falling-slope points are unstable (positive feedback);
- a phase error starting on the negative slope drifts away, crosses the peak or valley into an adjacent positive-slope segment, and locks there (possibly after one cycle slip);
- reversing the polarity (e.g. XOR → XNOR, $F \to F(\Delta\phi + \pi)$) only swaps which slope is stable, so the loop then locks on the other slope, e.g. at $-\pi/2$ instead of $+\pi/2$;
- the first-order LPF does not change this: $s^2/\omega_{LPF} + s + K_{VCO}F' = 0$ is stable exactly when $K_{VCO}F' > 0$.

The polarity therefore decides only the lock point, never whether lock occurs. With a frequency detector (monotonic characteristic) the polarity does matter.

**Common mistake.** Claiming that the loop can lock stably on *both* slopes because $F(\Delta\phi) = V_1$ has a solution on each. The static condition is necessary but not sufficient: on the slope where $K_{VCO}F' < 0$ any small disturbance grows, so those points are never observed as lock points.

**Common mistake.** Concluding that a loop with the "wrong" polarity never locks. That treats the detector as monotonic, like a frequency detector. Because the XOR characteristic is periodic, the phase error simply moves to the next segment of opposite slope, where the feedback is negative.

**Common mistake.** Analysing only the case $\omega_{in} = \omega_0$, where the lock point sits at the cusp $\Delta\phi = 0$ and the slope is undefined. The general case $0 < V_1 < V_0$ shows the stable/unstable pairing clearly.
