# Detailed solution - R024

**Approach.** $M_1$ is diode-connected (gate tied to drain) with its source grounded, so it is always in saturation and its current depends only on $V_X$. The capacitor supplies that current, which gives a first-order nonlinear differential equation. Solve it exactly, then describe $V_X(t)$ and $I_X(t)$ and compare the decay with an ordinary exponential.

### Step 1 — Set-up

From the figure:

- node X is the top plate of $C_1$, and it is also the drain *and* the gate of $M_1$;
- the source and bulk of $M_1$ are grounded, so $V_{TH} = V_{TH0} = 0.7$ V (no body effect);
- $I_X$ flows from node X into $M_1$;
- $V_X(0) = 3$ V.

So $V_{GS} = V_{DS} = V_X$.

**Region.** Since $V_{DS} = V_{GS}$, the saturation condition $V_{DS} \ge V_{GS} - V_{TH}$ is always met: **a diode-connected MOSFET is saturated whenever it conducts**. It conducts while $V_X > 0.7$ V.

**Current.** With $\beta = \mu_nC_{ox}W/L$ and channel-length modulation neglected:

$$I_X = \tfrac12\beta\,(V_X - 0.7\ \mathrm{V})^2 .$$

**Capacitor equation.** The only source of $I_X$ is the capacitor, so

$$I_X = -C_1\frac{dV_X}{dt} \quad\Longrightarrow\quad C_1\frac{dV_X}{dt} = -\tfrac12\beta\,(V_X - 0.7)^2 .$$

### Step 2 — Solving the differential equation

Let $u = V_X - 0.7$ V be the overdrive; $du/dt = dV_X/dt$. Then

$$\frac{du}{dt} = -\frac{\beta}{2C_1}\,u^2 .$$

Separate the variables:

$$-\frac{du}{u^2} = \frac{\beta}{2C_1}\,dt .$$

Integrate from $t = 0$ (where $u = u_0$) to $t$:

$$
\begin{aligned}
\left[\frac{1}{u}\right]_{u_0}^{u} &= \frac{\beta}{2C_1}\,t\\
\frac{1}{u} - \frac{1}{u_0} &= \frac{\beta}{2C_1}\,t\\
u(t) &= \frac{u_0}{1 + \dfrac{\beta u_0}{2C_1}\,t} .
\end{aligned}
$$

The initial overdrive is $u_0 = 3 - 0.7 = 2.3$ V. Define the characteristic time

$$T = \frac{2C_1}{\beta u_0} = \frac{2C_1}{\beta\,(2.3\ \mathrm{V})} .$$

Then

$$V_X(t) = 0.7\ \mathrm{V} + \frac{2.3\ \mathrm{V}}{1 + t/T} .$$

### Step 3 — The current

$$I_X(t) = \tfrac12\beta\,u(t)^2 = \frac{\tfrac12\beta\,(2.3\ \mathrm{V})^2}{(1 + t/T)^2} = \frac{2.645\,\beta\ \mathrm{V^2}}{(1 + t/T)^2} .$$

The initial current is $I_X(0) = \tfrac12\beta(2.3\ \mathrm{V})^2 = 2.645\beta$ (V²); for example 2.65 mA for $\beta = 1\ \mathrm{mA/V^2}$.

Check by differentiating $V_X$: $dV_X/dt = -2.3/[T(1 + t/T)^2]$, so $-C_1\,dV_X/dt = 2.3C_1/[T(1 + t/T)^2] = 2.3C_1\beta(2.3)/[2C_1(1 + t/T)^2] = \tfrac12\beta(2.3)^2/(1 + t/T)^2$. ✓

### Step 4 — Shape of the curves

| $t/T$ | $V_X$ (V) | $I_X/\beta$ (V²) |
|---|---|---|
| 0 | 3.00 | 2.65 |
| 0.5 | 2.23 | 1.18 |
| 1 | 1.85 | 0.66 |
| 2 | 1.47 | 0.29 |
| 4 | 1.16 | 0.106 |
| 9 | 0.93 | 0.026 |
| 19 | 0.815 | 0.0066 |
| 99 | 0.723 | 0.0003 |

- **$V_X$** falls quickly at first and then ever more slowly toward **0.7 V** ($V_{TH}$), never reaching it in finite time. It does **not** go to zero.
- **$I_X$** starts at $2.65\beta$ and decays toward zero as $1/(1 + t/T)^2$.

**Hyperbolic, not exponential.** For $t \gg T$, $V_X - 0.7 \approx 2.3\,T/t$: the remaining overdrive falls only as $1/t$. An exponential would shrink by the same factor in each equal time interval; here the overdrive halves between $t = 0$ and $T$, but halving again takes until $3T$, and again until $7T$. The discharge keeps slowing because the device's conductance $I_X/u = \tfrac12\beta u$ shrinks along with the overdrive. A resistor would keep a constant conductance and give an exponential.

**Physical intuition.** A diode-connected transistor carries current only while $V_{GS} > V_{TH}$, and the current falls as the *square* of the remaining overdrive. As $V_X$ approaches $V_{TH}$, the discharge current collapses faster than the voltage, so $V_X$ creeps toward 0.7 V. In a real device, subthreshold conduction would continue to lower $V_X$ very slowly below 0.7 V (roughly logarithmically in time), but in the square-law model the final value is $V_{TH}$.

### Result

$M_1$ is diode-connected and therefore **always saturated**:

$$C_1\frac{dV_X}{dt} = -\tfrac12\beta\,(V_X - 0.7)^2 .$$

With $u = V_X - 0.7$ V, this gives $1/u = 1/u_0 + \beta t/(2C_1)$ with $u_0 = 2.3$ V, so

$$V_X(t) = 0.7 + \frac{2.3}{1 + 2.3\beta t/(2C_1)}\ \mathrm{V}, \qquad I_X(t) = \tfrac12\beta\,(V_X - 0.7)^2 = \frac{2.65\,\beta}{\left[1 + 2.3\beta t/(2C_1)\right]^2}.$$

- $V_X$ decays **hyperbolically** from 3 V toward $V_{TH} = 0.7$ V without reaching it (an approach $\propto 1/t$, slower than exponential).
- $I_X$ decays from $\tfrac12\beta(2.3\ \mathrm{V})^2 = 2.65\beta$ toward zero.
- In reality subthreshold conduction keeps lowering $V_X$ slowly below 0.7 V.

**Common mistake.** Letting $V_X$ discharge to 0 V. Once $V_X = V_{GS}$ falls to $V_{TH}$, the diode-connected device turns off; in the square-law model nothing can pull the capacitor below 0.7 V.

**Common mistake.** Treating $M_1$ as being in triode near the end, or as a fixed resistor, and drawing an exponential decay. Its drain is tied to its gate, so it is saturated throughout; its current is quadratic in $V_X - V_{TH}$, which gives the slower hyperbolic tail.

**Common mistake.** Writing the characteristic time as $2C_1u_0/\beta$ instead of $2C_1/(\beta u_0)$. A larger initial overdrive means a larger initial current and therefore a *shorter* characteristic time; a quick dimension check ($\beta$ in A/V², $u_0$ in V, so $\beta u_0$ in A/V = S, and $C_1/S$ = seconds) confirms the correct form.
