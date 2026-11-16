# Detailed solution - R652

**Approach.** Write the loop as one differential equation for the phase error, with the averaged XOR output as a periodic triangle $F(\Delta\phi)$. Find its equilibria (one on every slope), test each for stability by linearizing, follow a phase error that starts on the "wrong" slope, and show that reversing the polarity only swaps the roles of the two slopes.

### Step 1 — The phase-detector characteristic

For square-wave inputs with 50 % duty cycle, after each of the two edges of $V_1$ per period the inputs differ for a fraction $|\Delta\phi|/(2\pi)$ of the period, so the output is high for a fraction $2\cdot|\Delta\phi|/(2\pi) = |\Delta\phi|/\pi$ of the time (average about 0 at $\Delta\phi \approx 0$, $V_0/2$ at $\pi/2$ and $3\pi/2$, $V_0$ at $\pi$):

$$F(\Delta\phi) \equiv \overline{V_{out}} = V_0\,\frac{|\Delta\phi|}{\pi}, \qquad -\pi \le \Delta\phi \le \pi,$$

repeated with period $2\pi$. Its slope is

$$F'(\Delta\phi) = \begin{cases} +V_0/\pi & \text{on } (0,\pi),\ (2\pi,3\pi),\ (-2\pi,-\pi),\ \dots \quad\text{(rising segments)}\\ -V_0/\pi & \text{on } (\pi,2\pi),\ (-\pi,0),\ \dots \quad\text{(falling segments)} \end{cases}$$

**Key property.** Every period contains one rising and one falling segment of equal slope magnitude, so the sign of the phase-detector gain is not fixed: it depends on where on the curve the loop operates.

### Step 2 — The loop equation for the phase error

With $\Delta\phi = \phi_{in} - \phi_{out}$, $d\Delta\phi/dt = \omega_{in} - \omega_{out}$. The VCO gives $\omega_{out} = \omega_0 + K_{VCO}V_{cont}$; take $K_{VCO} > 0$ for now. If the phase error changes slowly compared with the LPF time constant (slow-loop approximation; the filter is added back in Step 7), the LPF passes only the average, $V_{cont} \approx F(\Delta\phi)$. Then

$$\frac{d\Delta\phi}{dt} = \omega_{in} - \omega_0 - K_{VCO}F(\Delta\phi) = K_{VCO}\left[V_c^{\ast} - F(\Delta\phi)\right],$$

where $V_c^{\ast} \equiv (\omega_{in} - \omega_0)/K_{VCO}$ is the control voltage at which the VCO would run exactly at $\omega_{in}$. The "polarity" of the feedback around an operating point is the sign of $K_{VCO}F'(\Delta\phi)$.

### Step 3 — Equilibria: one on each slope

Lock ($d\Delta\phi/dt = 0$) requires

$$F(\Delta\phi^{\ast}) = V_c^{\ast} ,$$

which has a solution only if $0 \le V_c^{\ast} \le V_0$, i.e. $\omega_0 \le \omega_{in} \le \omega_0 + K_{VCO}V_0$, the range of input frequencies the detector output can command. In the generic case $0 < V_c^{\ast} < V_0$ there are two solutions in $[0, 2\pi)$.

**On the rising segment** ($0 \le \Delta\phi \le \pi$, where $F = V_0\Delta\phi/\pi$):

$$V_0\,\frac{\Delta\phi_r}{\pi} = V_c^{\ast} \quad\Longrightarrow\quad \Delta\phi_r = \pi\,\frac{V_c^{\ast}}{V_0}.$$

**On the falling segment** ($\pi \le \Delta\phi \le 2\pi$, where $F = V_0(2\pi - \Delta\phi)/\pi$):

$$
\begin{aligned}
V_0\,\frac{2\pi - \Delta\phi_f}{\pi} &= V_c^{\ast}\\
\Delta\phi_f &= 2\pi - \pi\,\frac{V_c^{\ast}}{V_0}.
\end{aligned}
$$

Every shift by a multiple of $2\pi$ is also a solution. **Example:** for $V_c^{\ast} = V_0/2$, $\Delta\phi_r = \pi/2$ and $\Delta\phi_f = 3\pi/2$, exactly the two waveform cases in the figure with an average of $V_0/2$. Both points satisfy the static lock condition, which is necessary but not sufficient: the lock point must also be *stable*.

### Step 4 — Stability of each equilibrium

Write $\Delta\phi = \Delta\phi^{\ast} + \delta$ and linearize, $F(\Delta\phi^{\ast} + \delta) \approx V_c^{\ast} + F'(\Delta\phi^{\ast})\,\delta$:

$$
\begin{aligned}
\frac{d\delta}{dt} &= K_{VCO}\left[V_c^{\ast} - V_c^{\ast} - F'(\Delta\phi^{\ast})\,\delta\right] = -K_{VCO}F'(\Delta\phi^{\ast})\,\delta\\
\delta(t) &= \delta(0)\,\exp\!\left[-K_{VCO}F'(\Delta\phi^{\ast})\,t\right].
\end{aligned}
$$

- **Rising segment**, $F' = +V_0/\pi$: the exponent is $-K_{VCO}V_0t/\pi$, so $\delta$ decays with time constant $\pi/(K_{VCO}V_0)$. **Stable lock.**
- **Falling segment**, $F' = -V_0/\pi$: the exponent is $+K_{VCO}V_0t/\pi$, so any deviation grows. **Unstable equilibrium.**

Physically, if the output falls slightly behind ($\Delta\phi$ grows), a rising segment raises $V_{cont}$ and the VCO catches up (negative feedback), whereas a falling segment lowers $V_{cont}$ and the output falls further behind (positive feedback).

### Step 5 — A start on the "wrong" slope still ends in lock

For large phase errors the direction of $d\Delta\phi/dt = K_{VCO}[V_c^{\ast} - F(\Delta\phi)]$ ($K_{VCO} > 0$) is set only by whether $F$ is above or below $V_c^{\ast}$. Over one period, from $\Delta\phi_r$ to $\Delta\phi_r + 2\pi$:

| Interval of $\Delta\phi$ | Segment | $F$ vs. $V_c^{\ast}$ | Sign of $d\Delta\phi/dt$ | Where $\Delta\phi$ goes |
|---|---|---|---|---|
| $\Delta\phi_r < \Delta\phi < \pi$ | rising | $F > V_c^{\ast}$ | $-$ | down to $\Delta\phi_r$ |
| $\pi < \Delta\phi < \Delta\phi_f$ | falling | $F > V_c^{\ast}$ | $-$ | down, across the peak at $\pi$, then to $\Delta\phi_r$ |
| $\Delta\phi_f < \Delta\phi < 2\pi$ | falling | $F < V_c^{\ast}$ | $+$ | up, across the valley at $2\pi$, then to $\Delta\phi_r + 2\pi$ |
| $2\pi < \Delta\phi < \Delta\phi_r + 2\pi$ | rising | $F < V_c^{\ast}$ | $+$ | up to $\Delta\phi_r + 2\pi$ |

- A phase error that starts on a **positive-slope** segment settles on that segment directly.
- One that starts on a **negative-slope** segment is pushed *away* from the repelling point $\Delta\phi_f$, crosses the peak at $\pi$ or the valley at $2\pi$ into an adjacent positive-slope segment, and settles at $\Delta\phi_r$ or at $\Delta\phi_r + 2\pi$, which is the same locked state after one cycle slip.
- Only a start *exactly* at $\Delta\phi_f$ would stay there, and the slightest noise pushes it off.

Hence the loop locks whichever slope the initial phase difference falls on.

### Step 6 — Reversing the polarity only swaps the two slopes

Reverse the feedback polarity, for example by inverting one detector input. That shifts the input by $\pi$ and turns the XOR into an XNOR, whose average output is $G(\Delta\phi) = V_0 - F(\Delta\phi)$, the same triangle shifted by $\pi$. Check: for $0 \le \Delta\phi \le \pi$, $\Delta\phi + \pi$ lies on a falling segment, so

$$
\begin{aligned}
F(\Delta\phi + \pi) &= V_0\,\frac{2\pi - (\Delta\phi + \pi)}{\pi} = V_0\,\frac{\pi - \Delta\phi}{\pi}\\
&= V_0 - V_0\,\frac{\Delta\phi}{\pi} = V_0 - F(\Delta\phi) = G(\Delta\phi).
\end{aligned}
$$

The loop equation $d\Delta\phi/dt = K_{VCO}[V_c^{\ast} - F(\Delta\phi + \pi)]$ is that of Steps 2–5 with $\Delta\phi$ replaced by $\Delta\phi + \pi$, so every conclusion carries over with a shift of $\pi$:

- stable lock now requires $G' > 0$, i.e. $F'(\Delta\phi) < 0$: the loop locks on a **falling** segment of the original characteristic, at $\Delta\phi = \pi V_c^{\ast}/V_0 - \pi$ (mod $2\pi$);
- the rising segments now give positive feedback, and a phase error starting there drifts to an adjacent falling segment.

With $V_c^{\ast} = V_0/2$, the normal loop locks at $\Delta\phi = +\pi/2$ and the reversed loop at $\Delta\phi = -\pi/2 \equiv 3\pi/2$. **Both lock.** The polarity only decides the static phase offset, not whether lock occurs.

Two side remarks:

- Swapping the two XOR inputs changes nothing, because $F$ is even: $F(-\Delta\phi) = F(\Delta\phi)$.
- Making $K_{VCO}$ negative (with the same $\omega_0$) also moves the stable points to the falling slope, since stability needs $K_{VCO}F' > 0$. But $V_c^{\ast} = (\omega_{in} - \omega_0)/K_{VCO}$ must still lie between 0 and $V_0$, which now requires $\omega_{in} \le \omega_0$: whether an equilibrium exists at all is a tuning-range question, not a polarity question.

### Step 7 — Including the low-pass filter

With the first-order LPF, $V_{cont}$ follows $F(\Delta\phi)$ with a lag:

$$\frac{1}{\omega_{LPF}}\frac{dV_{cont}}{dt} + V_{cont} = F(\Delta\phi).$$

Linearize around a lock point with $\delta = \Delta\phi - \Delta\phi^{\ast}$ and $v = V_{cont} - V_c^{\ast}$:

$$\frac{d\delta}{dt} = -K_{VCO}\,v, \qquad \frac{1}{\omega_{LPF}}\frac{dv}{dt} + v = F'\,\delta .$$

In the Laplace domain the second equation gives $v = F'\delta/(1 + s/\omega_{LPF})$; substituting into the first,

$$
\begin{aligned}
s\,\delta &= -\frac{K_{VCO}F'}{1 + s/\omega_{LPF}}\,\delta\\
s\left(1 + \frac{s}{\omega_{LPF}}\right) + K_{VCO}F' &= 0\\
\frac{s^2}{\omega_{LPF}} + s + K_{VCO}F' &= 0 .
\end{aligned}
$$

- If $K_{VCO}F' > 0$, all three coefficients are positive, so both roots lie in the left half plane: **stable** (it may ring, but it settles).
- If $K_{VCO}F' < 0$, the product of the roots, $\omega_{LPF}K_{VCO}F'$, is negative, so one root is real and positive: **unstable**.

The filter changes how the loop settles, not which slope is stable, so the conclusions of Steps 4–6 still hold.

### Step 8 — Why frequency detection makes polarity matter

The argument relies on a phase-detector characteristic that is periodic with both slopes in every period: a wrong sign is "repaired" by the phase error sliding to the other slope. A frequency detector's output has the sign of $\omega_{in} - \omega_{out}$ and never reverses, so with the wrong polarity it drives $\omega_{out}$ *away* from $\omega_{in}$, there is no other slope to slide to, and the loop never locks. That is why the problem specifies a PLL without frequency detection.

### Result

The XOR characteristic is periodic and has a rising slope ($0 < \Delta\phi < \pi$) and a falling slope ($\pi < \Delta\phi < 2\pi$) in every period. With $d\Delta\phi/dt = K_{VCO}[V_c^{\ast} - F(\Delta\phi)]$:

- equilibria $F(\Delta\phi^{\ast}) = V_c^{\ast}$ exist on both slopes: $\Delta\phi_r = \pi V_c^{\ast}/V_0$ and $\Delta\phi_f = 2\pi - \pi V_c^{\ast}/V_0$;
- a deviation obeys $\dot\delta = -K_{VCO}F'\delta$, so for $K_{VCO} > 0$ the rising-slope points are stable (negative feedback) and the falling-slope points are unstable (positive feedback);
- a phase error starting on the negative slope drifts away, crosses the peak or valley into an adjacent positive-slope segment, and locks there (possibly after one cycle slip);
- reversing the polarity (e.g. XOR → XNOR, $F \to F(\Delta\phi + \pi)$) only swaps which slope is stable, so the loop then locks on the other slope, e.g. at $-\pi/2$ instead of $+\pi/2$;
- the first-order LPF does not change this: $s^2/\omega_{LPF} + s + K_{VCO}F' = 0$ is stable exactly when $K_{VCO}F' > 0$.

The polarity therefore decides only the lock point, never whether lock occurs. With a frequency detector (monotonic characteristic) the polarity does matter.

**Common mistake.** Claiming stable lock on *both* slopes because $F(\Delta\phi) = V_c^{\ast}$ has a solution on each. On the slope where $K_{VCO}F' < 0$ any small disturbance grows, so those points are never observed as lock points.

**Common mistake.** Concluding that a loop with the "wrong" polarity never locks, which treats the detector as monotonic, like a frequency detector. Because the XOR characteristic is periodic, the phase error simply moves to the next segment of opposite slope.

**Common mistake.** Analysing only $\omega_{in} = \omega_0$, where the lock point sits at the cusp $\Delta\phi = 0$ and the slope is undefined. The general case $0 < V_c^{\ast} < V_0$ shows the stable/unstable pairing clearly.
