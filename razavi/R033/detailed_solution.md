# Detailed solution - R033

**Approach.** $C_1$ connects the input node to node X, and X has no other path to a fixed voltage except the drain of $M_1$. So when $V_{in}$ steps, the capacitor carries X up by the full step. The same step turns $M_1$ on, and $M_1$ then discharges X: first with a constant saturation current (linear ramp), then in triode (exponential-like tail) down to 0 V.

### Step 1 — Before the step ($t < 0$)

$C_1$ holds 2 V with X positive, so $V_X = V_{in} + V_{C1}$. For $t < 0$, $V_{in} = 0$ and

$$V_X = 0 + 2 = 2\ \mathrm{V}.$$

$M_1$ is off ($V_{GS} = 0 < V_{TH}$), so nothing discharges $C_1$ and $V_X$ stays at 2 V.

### Step 2 — The jump at $t = 0$

$M_1$ can only supply a finite current, which moves no charge in zero time, so right after the step $V_{C1}$ is still 2 V and

$$V_X(0^+) = V_{in}(0^+) + V_{C1}(0^+) = 3 + 2 = 5\ \mathrm{V}.$$

The jump is the full 3 V: node X sees only $C_1$ (whose other plate is held by $V_{in}$) and the drain of $M_1$, so there is no capacitive divider to attenuate the step.

### Step 3 — Phase 1: $M_1$ saturated, linear ramp down

For $t > 0$: $V_{GS} = 3$ V and (no body effect) $V_{TH} = 0.7$ V, so $V_{ov} = 3 - 0.7 = 2.3$ V, and $V_{DS} = V_X = 5$ V $> 2.3$ V: **$M_1$ is saturated**, with

$$I_D = \tfrac12\beta\,(2.3\ \mathrm{V})^2 = 2.645\,\beta\ \mathrm{V^2} \approx 2.65\beta \quad(\text{constant}).$$

This current leaves X through the drain and is supplied through $C_1$ from the input source. With $V_{in}$ now constant, $dV_{C1}/dt = dV_X/dt$, and KCL at X gives

$$C_1\frac{dV_X}{dt} = -I_D \quad\Longrightarrow\quad V_X(t) = 5\ \mathrm{V} - \frac{2.65\,\beta}{C_1}\,t .$$

**$V_X$ ramps down linearly** until it reaches the saturation edge, $V_X = V_{GS} - V_{TH} = 2.3$ V, at

$$t_1 = \frac{C_1\,(5 - 2.3)\ \mathrm{V}}{2.645\,\beta\ \mathrm{V^2}} = \frac{1.02\,C_1}{\beta\ \mathrm{V}} .$$

### Step 4 — Phase 2: triode, decay to zero

For $V_X < 2.3$ V, $M_1$ is in triode:

$$C_1\frac{dV_X}{dt} = -\beta\left[2.3V_X - \tfrac12V_X^2\right].$$

Separating variables (partial fractions) and starting from $V_X = 2.3$ V at $t_1$:

$$V_X(t) = \frac{4.6\ \mathrm{V}\cdot E}{1 + E}, \qquad E = e^{-(t - t_1)/\tau}, \qquad \tau = R_{on}C_1 = \frac{C_1}{2.3\,\beta},$$

with $R_{on} = 1/[\beta(3 - 0.7)]$ the deep-triode on-resistance. At $t_1$, $E = 1$ and $V_X = 2.3$ V; for $t - t_1 \gg \tau$, $V_X \approx 4.6\,e^{-(t - t_1)/\tau}$. **$V_X$ decays roughly exponentially to 0 V**, with a continuous slope at $t_1$ (the triode current at $V_X = 2.3$ V equals the saturation current).

**Final state.** $V_X = 0$ and $V_{in} = 3$ V, so $C_1$ ends up holding $0 - 3 = -3$ V: X is now 3 V *below* the other plate. In total $M_1$ removed a charge $C_1\times5$ V from node X.

### Step 5 — Numerical example

With $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF: $I_D = 2.65$ mA, the ramp slope is $-2.65$ V/ns, $t_1 = 2.7\ \mathrm{V}/(2.65\ \mathrm{V/ns}) = 1.02$ ns, and $\tau = 1\ \mathrm{pF}/2.3\ \mathrm{mS} = 0.43$ ns.

| $t$ | $V_X$ (V) | $M_1$ |
|---|---|---|
| $t < 0$ | 2.0 | off |
| $0^+$ | 5.0 | saturated |
| 0.5 ns | 3.68 | saturated |
| 1.02 ns | 2.30 | edge |
| $t_1 + \tau$ = 1.45 ns | 1.24 | triode |
| $t_1 + 2\tau$ = 1.89 ns | 0.55 | triode |
| $t_1 + 4\tau$ = 2.76 ns | 0.08 | triode |
| ∞ | 0 | triode, no current |

(Triode values from $V_X = 4.6E/(1 + E)$: $E = e^{-1} = 0.368$ gives $1.69/1.368 = 1.24$ V, and so on.)

### Result

- **$t < 0$:** $V_X = 2$ V ($M_1$ off, $V_{in} = 0$).
- **$t = 0$:** the step couples through $C_1$ and **$V_X$ jumps to 3 + 2 = 5 V**. Node X sees only $C_1$ (whose other plate is held by $V_{in}$) and the drain of $M_1$, so the jump is the full 3 V.
- **Phase 1:** $M_1$ (now $V_{GS} = 3$ V) is saturated and discharges X with a constant current $\tfrac12\beta(2.3)^2 = 2.65\beta$. $V_X$ **ramps down linearly** at $2.65\beta/C_1$ until it reaches 2.3 V, at $t_1 \approx 1.02\,C_1/\beta$.
- **Phase 2:** $M_1$ is in triode and $V_X$ **decays roughly exponentially to 0** (time constant ≈ $C_1/(2.3\beta)$).
- **Final** $C_1$ voltage: −3 V (X at 0, the other plate at 3 V).

**Common mistake.** Leaving $V_X$ at 2 V at the step, or letting it rise only gradually. The capacitor holds its voltage at the instant of the step, so X jumps by the full 3 V.

**Common mistake.** Letting $V_X$ settle at 5 V or at 2.3 V. With the gate at 3 V, $M_1$ conducts until its drain reaches ground; 2.3 V is only the boundary between the constant-current and triode phases.

**Common mistake.** Making the jump go the wrong way, thinking that the gate "pulls the drain down" at the step. At $t = 0^+$ the transistor has had no time to move any charge; the only instantaneous effect is the capacitive coupling, which raises X.
