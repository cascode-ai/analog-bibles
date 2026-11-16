# Detailed solution - R030

**Approach.** Look carefully at where $C_1$ is connected: between the drain (X) and the source (S) of $M_1$, not to ground. Write KCL at X and at S to find what $C_2$ does. It turns out $C_2$ receives no net current, so the source stays at ground and the problem reduces to $M_1$ discharging $C_1$ with a fixed $V_{GS} = 2$ V: a constant-current ramp in saturation followed by a triode decay.

### Step 1 — Reading the circuit

From the figure:

- the gate of $M_1$ is at $+2$ V; the bulk is grounded;
- the drain is node X; $I_X$ is the current flowing from node X into the drain; the $V_X$ terminal is just an output probe (no current);
- the source is node S;
- $C_1$ is connected between X and S, and initially $V_X - V_S = 3$ V;
- $C_2$ is connected from S to ground, and initially $V_S = 0$.

Let $i_{C1} = C_1\,d(V_X - V_S)/dt$ be the current flowing *into* $C_1$ at its X plate (and out at its S plate).

### Step 2 — KCL shows that $C_2$ is idle

**KCL at X.** The only connections are the drain of $M_1$ and the top plate of $C_1$:

$$I_X + i_{C1} = 0 \quad\Longrightarrow\quad i_{C1} = -I_X .$$

**KCL at S.** Current arrives from the source of $M_1$ ($I_X$) and from the bottom plate of $C_1$ ($i_{C1}$), and goes into $C_2$:

$$C_2\frac{dV_S}{dt} = I_X + i_{C1} = I_X - I_X = 0 .$$

So $dV_S/dt = 0$ at all times, and

$$V_S(t) = 0, \qquad V_X(t) = V_{C1}(t).$$

**Interpretation.** $C_1$ is connected straight across the channel of $M_1$, so it discharges through $M_1$ in a **local loop**: charge leaves the top plate of $C_1$, passes through the channel, and lands on the bottom plate of $C_1$. None of it goes to $C_2$, so there is no charge sharing between the capacitors. $C_2$ only matters if something injects a net current into node S, and nothing does.

### Step 3 — Phase 1: saturation, constant current, linear ramp

With $V_S = 0$: $V_{GS} = 2$ V, $V_{DS} = V_X$, $V_{SB} = 0$ (so $V_{TH} = 0.7$ V, no body effect). The overdrive is constant:

$$V_{ov} = V_{GS} - V_{TH} = 2 - 0.7 = 1.3\ \mathrm{V}.$$

$M_1$ is saturated while $V_{DS} = V_X \ge 1.3$ V; at $t = 0$, $V_X = 3$ V, so it starts saturated. With $\beta = \mu_nC_{ox}W/L$:

$$I_X = \tfrac12\beta\,(1.3\ \mathrm{V})^2 = 0.845\,\beta\ \mathrm{V^2} \quad(\text{constant}).$$

Since $I_X = -i_{C1} = -C_1\,dV_X/dt$:

$$V_X(t) = 3\ \mathrm{V} - \frac{0.845\beta}{C_1}\,t .$$

Phase 1 ends when $V_X = 1.3$ V:

$$t_1 = \frac{C_1\,(3 - 1.3)\ \mathrm{V}}{0.845\beta\ \mathrm{V^2}} = \frac{2.01\,C_1}{\beta\ \mathrm{V}} .$$

### Step 4 — Phase 2: triode decay to zero

For $V_X < 1.3$ V, $M_1$ is in triode:

$$C_1\frac{dV_X}{dt} = -I_X = -\beta\left[1.3V_X - \tfrac12V_X^2\right].$$

This is the same equation as for any MOSFET discharging a capacitor in triode. Separating variables and using partial fractions, $\dfrac{1}{V_X(1.3 - V_X/2)} = \dfrac{1}{1.3}\left(\dfrac{1}{V_X} + \dfrac{1}{2.6 - V_X}\right)$, and integrating from $t_1$ (where $V_X = 1.3$ V) gives

$$V_X(t) = \frac{2.6\ \mathrm{V}\cdot E}{1 + E}, \qquad I_X(t) = \frac{2\beta\,(1.3\ \mathrm{V})^2\,E}{(1 + E)^2}, \qquad E = e^{-(t - t_1)/\tau},$$

with

$$\tau = R_{on}C_1, \qquad R_{on} = \frac{1}{\beta\,(2 - 0.7)} = \frac{1}{1.3\beta} .$$

Checks: at $t = t_1$ ($E = 1$), $V_X = 1.3$ V and $I_X = \tfrac12\beta(1.3)^2 = 0.845\beta$, so the current is continuous. For $t - t_1 \gg \tau$, $V_X \approx 2.6\,e^{-(t - t_1)/\tau}$: an exponential tail to **0 V**, with $M_1$ acting as the resistor $R_{on}$.

### Step 5 — Numerical example

With $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF:

$$
\begin{aligned}
I_X &= 0.845\ \mathrm{mA}, \quad \frac{dV_X}{dt} = -\frac{0.845\ \mathrm{mA}}{1\ \mathrm{pF}} = -0.845\ \mathrm{V/ns},\\
t_1 &= \frac{1.7\ \mathrm{V}}{0.845\ \mathrm{V/ns}} = 2.01\ \mathrm{ns},\\
\tau &= \frac{1\ \mathrm{pF}}{1.3\ \mathrm{mS}} = 0.77\ \mathrm{ns}.
\end{aligned}
$$

| $t$ (ns) | $V_X$ (V) | $I_X$ (mA) | $V_S$ (V) | $M_1$ |
|---|---|---|---|---|
| 0 | 3.00 | 0.845 | 0 | sat. |
| 1.0 | 2.16 | 0.845 | 0 | sat. |
| 2.01 | 1.30 | 0.845 | 0 | edge |
| 2.78 | 0.70 | 0.66 | 0 | triode |
| 3.55 | 0.31 | 0.35 | 0 | triode |
| 4.32 | 0.12 | 0.15 | 0 | triode |
| 5.86 | 0.017 | 0.02 | 0 | triode |

### Result

- **$C_2$ plays no role.** $C_1$ is connected directly between drain and source of $M_1$, so it discharges through $M_1$ in a local loop and no net current enters $C_2$: KCL gives $C_2\,dV_S/dt = I_X + C_1\,d(V_X - V_S)/dt = 0$, so **$V_S = 0$ for all $t$** and $V_X$ equals the voltage of $C_1$.
- **Phase 1:** $V_X$ **ramps down linearly** with constant $I_X = \tfrac12\beta(2 - 0.7)^2 = 0.845\beta$ until $V_X = 1.3$ V, which takes $t_1 = C_1(3 - 1.3)/(0.845\beta)$.
- **Phase 2:** $M_1$ is in triode and $V_X$ decays roughly exponentially to 0, with time constant $C_1/(1.3\beta)$ ($R_{on} = 1/(1.3\beta)$), while $I_X$ decays to 0.
- $I_X(t)$: flat at $0.845\beta$, then decaying smoothly to zero.

**Common mistake.** Treating the circuit as charge sharing between $C_1$ and $C_2$ (with $V_S$ rising, as when $C_1$ is grounded). Here $C_1$ is not connected to ground but across the transistor, so the current it delivers to the drain comes straight back to its own bottom plate and $C_2$ never charges.

**Common mistake.** Letting $V_X$ settle at a nonzero value such as $2 - V_{TH} = 1.3$ V. That voltage only marks the change from saturation to triode. Since $V_{GS} = 2$ V stays above $V_{TH}$, the channel remains on and discharges $C_1$ completely.

**Common mistake.** Drawing a pure exponential from $t = 0$. While $V_X > 1.3$ V the device is saturated and acts as a current source, so the first part of the discharge is a straight line.
