# Detailed solution - R036

**Approach.** $C_1$ connects the input node (the gate of $M_1$) to node X (the source of $M_1$). At the step, X is carried up by the full 3 V. After the step, $M_1$ (drain at $V_{DD}$, gate at 3 V) is a source follower that charges X, with the other plate of $C_1$ held by the input source. Find the jump, the initial current, the final value including the body effect, and the shape of the approach.

### Step 1 — The state before the step

With the gate side positive, $V_X = V_{in} - V_{C1}$, so just before the step

$$V_X(0^-) = 0 - 3 = -3\ \mathrm{V}.$$

(The problem gives the capacitor voltage at that instant; we take it as the initial condition.)

### Step 2 — The jump at $t = 0$

$M_1$ can supply only a finite current, so the capacitor voltage cannot change instantly:

$$V_X(0^+) = V_{in}(0^+) - V_{C1}(0^+) = 3 - 3 = 0\ \mathrm{V}.$$

**$V_X$ jumps by +3 V, from −3 V to 0 V.**

### Step 3 — After the step: region and initial current

For $t > 0$:

$$
\begin{aligned}
V_{GS} &= 3 - V_X,\\
V_{DS} &= 3 - V_X = V_{GS},\\
V_{SB} &= V_X ,
\end{aligned}
$$

so **$M_1$ is saturated whenever it conducts**. With the body effect,

$$V_{TH}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.9487\right)\ \mathrm{V}.$$

The drain current flows from $V_{DD}$ into X, whose only other connection is the lower plate of $C_1$; the upper plate is now held at 3 V by $V_{in}$, so the current raises $V_X$:

$$C_1\frac{dV_X}{dt} = \tfrac12\beta\left[3 - V_X - V_{TH}(V_X)\right]^2 .$$

**At $t = 0^+$:** $V_X = 0$, so $V_{SB} = 0$, $V_{TH} = 0.7$ V and the overdrive is $3 - 0 - 0.7 = 2.3$ V:

$$I_D(0^+) = \tfrac12\beta\,(2.3\ \mathrm{V})^2 = 2.65\,\beta\ \mathrm{V^2}, \qquad \left.\frac{dV_X}{dt}\right|_{0^+} = \frac{2.65\,\beta}{C_1}\ (\mathrm{V^2}).$$

### Step 4 — Final value

Charging stops when the overdrive vanishes:

$$3 - V_X = V_{TH}(V_X) = 0.7 + 0.45\sqrt{0.9 + V_X} - 0.4269 .$$

With $u = \sqrt{0.9 + V_X}$:

$$
\begin{aligned}
3 - (u^2 - 0.9) &= 0.2731 + 0.45u\\
u^2 + 0.45u - 3.6269 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 14.5076}}{2} = 1.6927\\
V_{X,\infty} &= 1.6927^2 - 0.9 = 1.965\ \mathrm{V}.
\end{aligned}
$$

There $V_{TH} = 3 - 1.965 = 1.035$ V. So **$V_X \to$ ≈ 1.97 V** (without body effect, $3 - 0.7 = 2.3$ V), and at the end $C_1$ holds $3 - 1.965 = 1.035$ V.

### Step 5 — Shape: hyperbolic approach

With the overdrive $u_{ov} = 3 - V_X - V_{TH}(V_X)$ and $\eta = dV_{TH}/dV_X = \gamma/(2\sqrt{0.9 + V_X})$ (between 0.13 and 0.24 here),

$$\frac{du_{ov}}{dt} = -(1 + \eta)\frac{\beta}{2C_1}\,u_{ov}^2 ,$$

whose solution falls as $1/t$ for large $t$. So $V_X$ rises **fast at first and then ever more slowly**, approaching 1.965 V **asymptotically** (a hyperbolic, not exponential, tail), because the current is proportional to the square of the remaining overdrive; $M_1$ never leaves saturation.

### Step 6 — Numerical example

With $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF (initial current 2.65 mA, initial slope 2.65 V/ns), integrating the equation gives:

| $t$ (ns) | $V_X$ (V) | overdrive (V) | $I_D$ (mA) | $V_X$ without body effect (V) |
|---|---|---|---|---|
| $0^-$ | −3.00 | — | — | −3.00 |
| $0^+$ | 0 | 2.30 | 2.65 | 0 |
| 0.25 | 0.49 | 1.71 | 1.46 | 0.51 |
| 0.5 | 0.78 | 1.36 | 0.93 | 0.84 |
| 1 | 1.11 | 0.98 | 0.48 | 1.23 |
| 2 | 1.42 | 0.62 | 0.20 | 1.60 |
| 5 | 1.70 | 0.30 | 0.046 | 1.96 |
| 10 | 1.82 | 0.16 | 0.013 | 2.12 |
| 50 | 1.93 | 0.035 | 0.0006 | 2.26 |
| ∞ | 1.965 | 0 | 0 | 2.30 |

(The last column is the exact no-body-effect solution $V_X = 2.3 - 2.3/(1 + 2.3\beta t/2C_1)$ V.)

### Result

- **Just before the step** $V_X = 0 - 3 = -3$ V; **at $t = 0$ it jumps by 3 V to 0 V**.
- **Then** $M_1$ (drain at $V_{DD}$, gate at 3 V, source at X) is **saturated** (because $V_{DS} = 3 - V_X \ge V_{GS}$) and charges X, whose capacitor's other plate is held by $V_{in}$.
  - Initial current $\tfrac12\beta(3 - 0.7)^2 = 2.65\beta$, initial slope $2.65\beta/C_1$.
  - $V_X$ rises with decreasing slope toward **≈ 1.97 V**, where $3 - V_X = V_{TH}(V_X)$ (2.3 V without body effect), approaching it asymptotically (hyperbolic tail).

**Common mistake.** Letting $V_X$ rise all the way to 3 V. A source follower raises its output only until $V_{GS}$ drops to $V_{TH}$; with the body effect raising $V_{TH}$ to about 1.03 V, that is about 1.97 V.

**Common mistake.** Missing the jump, or making it go the wrong way. At the instant of the step $C_1$ keeps its 3 V, so X moves exactly with the input: from −3 V up to 0 V.

**Common mistake.** Letting $V_X$ stay at 0 V after the jump, or fall. Right after the step $V_{GS} = V_{DS} = 3$ V, so $M_1$ conducts strongly *into* X and charges it upward.
