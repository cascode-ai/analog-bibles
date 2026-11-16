# Detailed solution - R034

**Approach.** $C_1$ is connected between node X (the drain of $M_1$) and the $V_{in}$ node (the other channel terminal), so $V_X = V_{in} + V_{C1}$. Find $V_X$ before the step and check that $M_1$ is off. At the step, X follows the input down because the capacitor voltage cannot change instantly. After the step $M_1$ turns on with $V_{GS} = 3$ V and discharges $C_1$ in a local loop: a constant-current ramp in saturation, then a triode decay to zero.

### Step 1 — Before the step ($t < 0$)

With $V_X = V_{in} + V_{C1}$ at all times,

$$V_X = 3\ \mathrm{V} + 3\ \mathrm{V} = 6\ \mathrm{V}.$$

The lower-potential channel terminal, the $V_{in}$ node at 3 V, is the source, so

$$V_{GS} = V_{DD} - V_{in} = 3 - 3 = 0\ \mathrm{V} < V_{TH} .$$

**$M_1$ is off** (the body effect from the 3-V source-to-bulk voltage only raises $V_{TH}$ further), nothing discharges $C_1$, and $V_X$ stays at **6 V**.

### Step 2 — The step at $t = 0$

$V_{in}$ falls from 3 V to 0, and $C_1$ cannot change its voltage instantaneously (only a finite current can flow), so

$$V_X(0^+) = V_{in}(0^+) + V_{C1}(0^+) = 0 + 3 = 3\ \mathrm{V}.$$

$V_X$ **drops with the input, from 6 V to 3 V**.

### Step 3 — Phase 1: $M_1$ on and saturated, linear ramp

For $t > 0$ the source is the $V_{in}$ node at 0 V, so $V_{SB} = 0$ and $V_{TH} = 0.7$ V:

$$
\begin{aligned}
V_{GS} &= 3 - 0 = 3\ \mathrm{V}, \qquad V_{ov} = 3 - 0.7 = 2.3\ \mathrm{V},\\
V_{DS} &= V_X - 0 = 3\ \mathrm{V} > 2.3\ \mathrm{V} \quad\Longrightarrow\quad \text{saturated},
\end{aligned}
$$

$$I_D = \tfrac12\beta\,(2.3\ \mathrm{V})^2 = 2.645\,\beta\ \mathrm{V^2} \approx 2.65\beta .$$

$C_1$ sits directly across drain and source, so this current leaves its X plate, flows through the channel and returns to its other plate: $C_1$ discharges in a local loop, and the input source carries no net current. With $V_{in} = 0$ constant, $V_{C1} = V_X$, so

$$C_1\frac{dV_X}{dt} = -I_D \quad\Longrightarrow\quad V_X(t) = 3\ \mathrm{V} - \frac{2.65\,\beta}{C_1}\,t .$$

**$V_X$ ramps down linearly** until it reaches the saturation edge $V_X = V_{GS} - V_{TH} = 2.3$ V, at

$$t_1 = \frac{C_1\,(3 - 2.3)\ \mathrm{V}}{2.645\,\beta\ \mathrm{V^2}} = \frac{0.265\,C_1}{\beta\ \mathrm{V}} .$$

### Step 4 — Phase 2: triode decay to zero

For $V_X < 2.3$ V, $M_1$ is in triode:

$$C_1\frac{dV_X}{dt} = -\beta\left[2.3V_X - \tfrac12V_X^2\right].$$

Its solution from 2.3 V at $t_1$ (separation of variables with partial fractions) is

$$V_X(t) = \frac{4.6\ \mathrm{V}\cdot E}{1 + E}, \qquad E = e^{-(t - t_1)/\tau}, \qquad \tau = R_{on}C_1 = \frac{C_1}{2.3\,\beta},$$

with $R_{on} = 1/[\beta(3 - 0.7)]$. For $t - t_1 \gg \tau$, $V_X \approx 4.6\,e^{-(t - t_1)/\tau}$: **an exponential-like decay to 0 V**. The gate stays 3 V above the source, so the channel never turns off and $C_1$ is discharged completely.

### Step 5 — Numerical example

With $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF: $I_D = 2.65$ mA, ramp slope $-2.65$ V/ns, $t_1 = 0.7\ \mathrm{V}/(2.65\ \mathrm{V/ns}) = 0.26$ ns, and $\tau = 0.43$ ns.

| $t$ | $V_X$ (V) | $M_1$ |
|---|---|---|
| $t < 0$ | 6.0 | off |
| $0^+$ | 3.0 | saturated |
| 0.26 ns | 2.30 | edge |
| $t_1 + \tau$ ≈ 0.70 ns | 1.24 | triode |
| $t_1 + 2\tau$ ≈ 1.13 ns | 0.55 | triode |
| $t_1 + 4\tau$ ≈ 2.0 ns | 0.08 | triode |
| ∞ | 0 | triode, no current |

### Result

- **$t < 0$:** $V_X = 6$ V ($V_{in} = 3$ V plus 3 V on $C_1$). $M_1$ is off because its gate, at $V_{DD} = 3$ V, equals its source voltage.
- **$t = 0$:** $V_X$ **drops with the input to 3 V**.
- **Phase 1:** now $V_{GS} = 3$ V and $V_{DS} = 3$ V, so $M_1$ is saturated. It discharges $C_1$ (connected between its drain and source) with a constant current $\tfrac12\beta(2.3)^2 = 2.65\beta$, and $V_X$ **ramps down linearly** at $2.65\beta/C_1$ to 2.3 V.
- **Phase 2:** $M_1$ is in triode and $V_X$ **decays roughly exponentially to 0 V** (time constant ≈ $C_1/(2.3\beta)$).

**Common mistake.** Leaving $V_X$ at 3 V after the step because "the capacitor holds 3 V". It does at the instant of the step, but afterwards $M_1$ is on with $V_{GS} = 3$ V and its channel is right across $C_1$, so the capacitor is discharged.

**Common mistake.** Claiming $M_1$ is off after the step. Before the step its source was at 3 V (equal to its gate); after it the source is at 0 V, so $V_{GS} = 3$ V.

**Common mistake.** Ending at a nonzero voltage such as 2.3 V. That only marks the change from saturation to triode; with the gate 3 V above the source, the channel conducts until $V_{DS} = 0$.
