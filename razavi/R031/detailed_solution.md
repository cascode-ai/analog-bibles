# Detailed solution - R031

**Approach.** $M_1$ is a source follower (drain at $V_{DD}$, output at the source) driving $C_1$. Before the step it is off. After the step its gate is at 3 V and it charges $C_1$ upward. Because gate and drain are at the same potential, $M_1$ is always saturated, which gives a nonlinear differential equation. The charging stops when $V_{GS}$ falls to $V_{TH}$, and the body effect (source rising above the grounded bulk) sets that final value. Find the initial current, the final value and the shape of the approach.

### Step 1 — Before the step ($t < 0$)

From the figure:

- the drain of $M_1$ is at $V_{DD} = 3$ V;
- the gate is driven by $V_{in}$, which is 0 for $t < 0$ and 3 V for $t > 0$;
- the source is node X, loaded by $C_1$ to ground, with $V_X = 1$ V just before the step;
- the bulk is grounded.

For $t < 0$: $V_{GS} = 0 - 1 = -1\ \mathrm{V} < V_{TH}$, so **$M_1$ is off** and $V_X$ stays at 1 V.

### Step 2 — After the step: terminal voltages and region

For $t > 0$:

$$
\begin{aligned}
V_{GS} &= 3 - V_X,\\
V_{DS} &= 3 - V_X,\\
V_{SB} &= V_X .
\end{aligned}
$$

Since $V_{DS} = V_{GS}$, the saturation condition $V_{DS} \ge V_{GS} - V_{TH}$ always holds: **$M_1$ is saturated whenever it conducts**.

Threshold with body effect ($V_{TH0} = 0.7$ V, $\gamma = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V):

$$V_{TH}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.9487\right)\ \mathrm{V}.$$

**Governing equation.** All the drain current charges $C_1$; with $\beta = \mu_nC_{ox}W/L$:

$$C_1\frac{dV_X}{dt} = \tfrac12\beta\left[3 - V_X - V_{TH}(V_X)\right]^2 .$$

### Step 3 — Initial current and slope

At $t = 0^+$, $V_X = 1$ V (a capacitor voltage cannot jump):

$$
\begin{aligned}
V_{TH} &= 0.7 + 0.45\left(\sqrt{1.9} - 0.9487\right) = 0.7 + 0.45\times0.4297 = 0.893\ \mathrm{V},\\
V_{ov} &= V_{GS} - V_{TH} = 2 - 0.893 = 1.107\ \mathrm{V},\\
I_D(0^+) &= \tfrac12\beta\,(1.107\ \mathrm{V})^2 = 0.61\,\beta\ \mathrm{V^2},\\
\left.\frac{dV_X}{dt}\right|_{0^+} &= \frac{0.61\,\beta}{C_1}\ (\mathrm{V^2}) .
\end{aligned}
$$

So $V_X$ starts rising immediately from 1 V with a finite slope. There is no jump: $V_X$ is a capacitor voltage.

### Step 4 — Final value

The current, and therefore the charging, stops when the overdrive reaches zero:

$$3 - V_X = V_{TH}(V_X) = 0.7 + 0.45\sqrt{0.9 + V_X} - 0.4269 .$$

Substitute $u = \sqrt{0.9 + V_X}$ ($V_X = u^2 - 0.9$):

$$
\begin{aligned}
3 - u^2 + 0.9 &= 0.2731 + 0.45u\\
u^2 + 0.45u - 3.6269 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 14.5076}}{2} = \frac{-0.45 + 3.8354}{2} = 1.6927\\
V_{X,\infty} &= u^2 - 0.9 = 2.8652 - 0.9 = 1.965\ \mathrm{V}.
\end{aligned}
$$

Check: $V_{TH}(1.965\ \mathrm{V}) = 0.7 + 0.45(1.6927 - 0.9487) = 1.035$ V and $3 - 1.965 = 1.035$ V. ✓

So $V_X \to$ **≈ 1.97 V**. Without body effect the limit would be $3 - 0.7 = 2.3$ V. Raising the source by about 2 V above the grounded bulk raises the threshold to about 1.03 V and costs about 0.33 V of output.

### Step 5 — Shape of the approach

Let $u_{ov} = 3 - V_X - V_{TH}(V_X)$ be the overdrive and $\eta = dV_{TH}/dV_X = \gamma/(2\sqrt{0.9 + V_X})$ (about 0.13–0.16 here). Then

$$\frac{du_{ov}}{dt} = -(1 + \eta)\frac{dV_X}{dt} = -(1 + \eta)\frac{\beta}{2C_1}\,u_{ov}^2 .$$

With $\eta$ nearly constant, this is the same equation as for a diode-connected device discharging a capacitor. Its solution is

$$u_{ov}(t) \approx \frac{u_{ov}(0)}{1 + (1 + \eta)\dfrac{\beta\,u_{ov}(0)}{2C_1}\,t},$$

so the remaining distance to the final value falls as **$1/t$ (hyperbolic), not exponentially**. The reason: the follower's current is proportional to the *square* of the remaining overdrive, so the charging current collapses as the output approaches its final value, and $M_1$ stays saturated all along. In a real device subthreshold conduction would keep pushing $V_X$ up very slowly beyond this value.

### Step 6 — Numerical example

With $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF (initial current 0.61 mA, initial slope 0.61 V/ns), numerical integration of the equation gives:

| $t$ (ns) | $V_X$ (V) | overdrive (V) | $I_D$ (mA) | $V_X$ without body effect (V) |
|---|---|---|---|---|
| $0^-$ | 1.00 | — (off) | 0 | 1.00 |
| $0^+$ | 1.00 | 1.107 | 0.61 | 1.00 |
| 0.5 | 1.23 | 0.84 | 0.35 | 1.32 |
| 1 | 1.37 | 0.68 | 0.23 | 1.51 |
| 2 | 1.54 | 0.49 | 0.12 | 1.74 |
| 5 | 1.73 | 0.27 | 0.035 | 1.99 |
| 10 | 1.83 | 0.15 | 0.011 | 2.13 |
| 50 | 1.94 | 0.034 | 0.0006 | 2.26 |
| ∞ | 1.965 | 0 | 0 | 2.30 |

(The last column uses the exact no-body-effect solution $V_X = 2.3 - 1.3/(1 + 1.3\beta t/2C_1)$.)

### Result

- **$t < 0$:** $V_X = 1$ V ($M_1$ off, $V_{GS} = -1$ V).
- **$t > 0$:** the source follower charges $C_1$. $M_1$ is always saturated ($V_{DS} = V_{GS}$), with $C_1\,dV_X/dt = \tfrac12\beta[3 - V_X - V_{TH}(V_X)]^2$.
  - At $t = 0^+$: $V_{GS} = 2$ V, $V_{TH}(V_{SB} = 1\ \mathrm{V}) = 0.89$ V, initial current $\tfrac12\beta(1.11)^2 = 0.61\beta$ and initial slope $0.61\beta/C_1$.
  - $V_X$ rises from 1 V, fast at first and then ever more slowly, approaching **≈ 1.97 V** asymptotically. This is where $3 - V_X = V_{TH}(V_X)$, i.e. $V_X + 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9}) = 3$, giving $V_X \approx 1.965$ V with $V_{TH} \approx 1.03$ V. Without body effect the limit would be 2.3 V.
  - The approach is hyperbolic ($\propto 1/t$), not exponential, because the overdrive shrinks to zero.

**Common mistake.** Letting $V_X$ jump with the input, or settle at 3 V. $V_X$ is a capacitor voltage and can only change as current flows. The follower can raise its source only to one threshold below the gate, never to the gate or drain potential.

**Common mistake.** Using $V_{TH} = 0.7$ V for the final value, which gives 2.3 V. With the bulk grounded and the source near 2 V, the threshold is about 1.03 V, so the output stops near 1.97 V.

**Common mistake.** Drawing an $RC$-like exponential approach. The device never enters triode, and its current falls as the square of the remaining overdrive, so the final value is approached much more slowly, as $1/t$.
