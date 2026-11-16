# Detailed solution - R022

**Approach.** Decide which diffusion terminal of $M_1$ acts as the source, show that $M_1$ is then always saturated, and write Kirchhoff's current law (KCL) at $V_{out}$ using the square law. $V_{in}$ enters only through the body effect: the bulk acts as a second ("back") gate. We solve the resulting equation point by point, find the slope and curvature, and finally note where the source–bulk junction becomes forward-biased.

### Step 1 — Which terminal is the source?

Reading the figure:

- The gate of $M_1$ is held at $+2$ V.
- One diffusion terminal (the one drawn with the arrow) is held at $+2$ V by a battery.
- The other diffusion terminal is $V_{out}$, connected to ground through $R_1$.
- The bulk is driven by $V_{in}$ (dashed line), which sweeps from 0 to 3 V.

A MOSFET is a symmetric device. In an NMOS the **source** is the diffusion terminal at the *lower* potential, because that is where electrons enter the channel. The arrow in the symbol is only a drawing convention and does not decide this.

$R_1$ pulls $V_{out}$ toward ground. The only path that can supply current to $R_1$ (as long as the junctions are off) is the channel, fed from the 2-V terminal. So $V_{out} < 2$ V, and:

- the $V_{out}$ terminal is the **source** ($V_S = V_{out}$);
- the $+2$-V terminal is the **drain** ($V_D = 2$ V).

*Consistency check of the other choice.* Suppose the 2-V terminal were the source. Then $V_{GS} = 2 - 2 = 0 < V_{TH}$, the channel would be off, and $R_1$ would pull $V_{out}$ to 0 V. But then the $V_{out}$ terminal would be the lower one, with $V_{GS} = 2\ \mathrm{V} > V_{TH}$, so the channel *would* conduct. That contradiction shows the 2-V terminal cannot be the source.

### Step 2 — Terminal voltages and region of operation

With $V_G = 2$ V, $V_D = 2$ V, $V_S = V_{out}$ and $V_B = V_{in}$:

$$
\begin{aligned}
V_{GS} &= 2 - V_{out},\\
V_{DS} &= 2 - V_{out},\\
V_{SB} &= V_{out} - V_{in}.
\end{aligned}
$$

Here $V_{SB}$ is the source–bulk voltage. Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$, where $V_{TH}$ is the threshold voltage. Since $V_{DS} = V_{GS}$ (gate and drain are both at 2 V), the condition holds automatically whenever $V_{TH} > 0$. So **$M_1$ is saturated whenever it conducts**: it is a source follower with gate and drain at the same potential.

Is $V_{TH}$ always positive? Its smallest value in the range where the formula below still applies occurs at $V_{SB} = -0.9$ V:

$$V_{TH} = 0.7 + 0.45(0 - 0.9487) = 0.27\ \mathrm{V} > 0 .$$

So the saturation argument holds throughout.

### Step 3 — The governing equation

**Threshold voltage with the body effect:**

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out} - V_{in}} - 0.9487\right).$$

Here $V_{TH0} = 0.7$ V is the threshold at $V_{SB} = 0$, $\gamma$ is the body-effect coefficient, and $2|\phi_F| = 0.9$ V. When the bulk is raised ($V_{in}\uparrow$), $V_{SB}$ falls and **the threshold falls**: the bulk behaves like a weak second gate.

**Square-law saturation current** (take $\lambda = 0$, since it is not given):

$$I_D = \frac12\,\beta\,(V_{GS} - V_{TH})^2 = \frac12\,\beta\,(2 - V_{out} - V_{TH})^2, \qquad \beta = \mu_nC_{ox}\frac{W}{L}.$$

**KCL at the output node.** The channel current flows into $R_1$, and the bulk-junction current is negligible while that junction is off:

$$\frac{V_{out}}{R_1} = \frac12\,\beta\,(2 - V_{out} - V_{TH})^2 .$$

Take the positive square root (the overdrive $V_{ov} = V_{GS} - V_{TH}$ is positive for a conducting device):

$$2 - V_{out} - V_{TH} = \sqrt{\frac{2V_{out}}{\beta R_1}} .$$

Solve for $V_{out}$:

$$V_{out} = 2 - V_{TH}(V_{out} - V_{in}) - \sqrt{\frac{2V_{out}}{\beta R_1}} .$$

Neither $\beta$ nor $R_1$ is given, so the result depends on the product $\beta R_1$ (unit $\mathrm{V^{-1}}$). We first take the **light-load limit** $\beta R_1 \to \infty$, where the overdrive term vanishes, and then show how a finite $\beta R_1$ shifts the curve (Step 6).

### Step 4 — Light-load curve: solving $V_{out} + V_{TH} = 2$ V

With $\beta R_1 \to \infty$ the equation becomes $V_{out} + V_{TH}(V_{out} - V_{in}) = 2$. Write it out:

$$V_{out} + 0.7 + 0.45\sqrt{0.9 + V_{out} - V_{in}} - 0.45(0.9487) = 2 .$$

Substitute $u = \sqrt{0.9 + V_{out} - V_{in}}$, so that $V_{out} = u^2 - 0.9 + V_{in}$:

$$
\begin{aligned}
u^2 - 0.9 + V_{in} + 0.7 + 0.45u - 0.4269 &= 2\\
u^2 + 0.45u + (V_{in} - 0.9 + 0.7 - 0.4269 - 2) &= 0\\
u^2 + 0.45u - (2.6269 - V_{in}) &= 0 .
\end{aligned}
$$

This is a quadratic in $u$. Since $u$ is a square root it must be positive, so take the "+" root of the quadratic formula:

$$u = \frac{-0.45 + \sqrt{0.45^2 + 4\,(2.6269 - V_{in})}}{2} = \frac{-0.45 + \sqrt{0.2025 + 4\,(2.6269 - V_{in})}}{2}.$$

Evaluate point by point:

- $V_{in} = 0$: $\sqrt{0.2025 + 10.5076} = 3.2726$, so $u = (3.2726 - 0.45)/2 = 1.4113$ and $u^2 = 1.9918$. Then $V_{out} = 1.9918 - 0.9 + 0 = 1.092$ V, with $V_{SB} = 1.092$ V and $V_{TH} = 2 - 1.092 = 0.908$ V.
- $V_{in} = 0.5$ V: $\sqrt{0.2025 + 8.5076} = 2.9513$, so $u = 1.2506$ and $u^2 = 1.5641$. Then $V_{out} = 1.5641 - 0.9 + 0.5 = 1.164$ V.
- $V_{in} = 1.0$ V: $\sqrt{0.2025 + 6.5076} = 2.5904$, so $u = 1.0702$ and $u^2 = 1.1453$. Then $V_{out} = 1.245$ V.
- $V_{in} = 1.3$ V: $\sqrt{0.2025 + 5.3076} = 2.3474$, so $u = 0.9487$ and $u^2 = 0.9000$. Then $V_{out} = 1.300$ V. Here $V_{SB} = 0$ and $V_{TH} = V_{TH0} = 0.7$ V.
- $V_{in} = 1.5$ V: $\sqrt{0.2025 + 4.5076} = 2.1703$, so $u = 0.8601$ and $u^2 = 0.7398$. Then $V_{out} = 1.340$ V, with $V_{SB} = -0.16$ V (bulk slightly above the source).
- $V_{in} = 2.0$ V: $\sqrt{0.2025 + 2.5076} = 1.6462$, so $u = 0.5981$ and $u^2 = 0.3578$. Then $V_{out} = 1.458$ V, with $V_{SB} = -0.54$ V.

**Physical intuition.** The device carries (almost) no current at light load, so it sits right at the edge of conduction: $V_{GS} = V_{TH}$, i.e. $V_{out} = 2\ \mathrm{V} - V_{TH}$. Raising the bulk lowers $V_{TH}$, and the source must rise by the same amount to keep $V_{GS} = V_{TH}$. Hence $V_{out}$ *increases* with $V_{in}$.

### Step 5 — Slope and curvature

Define $\eta = \partial V_{TH}/\partial V_{SB} = \gamma/\left(2\sqrt{2|\phi_F| + V_{SB}}\right)$, the change in threshold per volt of $V_{SB}$.

**Light load.** Differentiate $V_{out} + V_{TH} = 2$, remembering that $V_{SB} = V_{out} - V_{in}$:

$$
\begin{aligned}
dV_{out} + \eta\,(dV_{out} - dV_{in}) &= 0\\
dV_{out}\,(1 + \eta) &= \eta\,dV_{in}\\
\frac{dV_{out}}{dV_{in}} &= \frac{\eta}{1 + \eta}.
\end{aligned}
$$

**Finite load.** Differentiate both sides of $V_{out}/R_1 = \tfrac12\beta V_{ov}^2$, with $V_{ov} = 2 - V_{out} - V_{TH}$. The change in overdrive is $dV_{ov} = -dV_{out} - \eta\,(dV_{out} - dV_{in})$, and $g_m = \beta V_{ov}$ is the transconductance:

$$
\begin{aligned}
\frac{dV_{out}}{R_1} &= \beta V_{ov}\,dV_{ov} = g_m\,dV_{ov}\\
\frac{dV_{out}}{R_1} &= g_m\left[-dV_{out}(1 + \eta) + \eta\,dV_{in}\right]\\
dV_{out}\left[\frac{1}{R_1} + g_m(1 + \eta)\right] &= g_m\eta\,dV_{in}\\
\frac{dV_{out}}{dV_{in}} &= \frac{g_m\eta}{1/R_1 + g_m(1 + \eta)} = \frac{\eta}{1 + \eta + 1/(g_mR_1)} = \frac{g_{mb}}{g_m + g_{mb} + 1/R_1},
\end{aligned}
$$

where $g_{mb} = \eta g_m$ is the body transconductance. This is the gain of a source follower driven from its *bulk*.

Numbers in the light-load case:

- $V_{in} = 0$: $\eta = 0.45/(2\times1.4113) = 0.159$, so the slope is $0.159/1.159 = 0.14$.
- $V_{in} = 1.3$ V: $\eta = 0.45/(2\times0.9487) = 0.237$, so the slope is $0.237/1.237 = 0.19$.
- $V_{in} = 2.0$ V: $\eta = 0.45/(2\times0.5981) = 0.376$, so the slope is $0.376/1.376 = 0.27$.

The slope is well below 1, because the back gate is much weaker than the front gate ($\eta < 1$). It grows as $V_{SB}$ falls, because $\eta \propto 1/\sqrt{0.9 + V_{SB}}$. **The curve is therefore rising and concave up.**

### Step 6 — Effect of a finite $\beta R_1$

With a finite load, the transistor must carry the current $V_{out}/R_1$, which needs an overdrive $V_{ov} = \sqrt{2V_{out}/(\beta R_1)}$. That overdrive pushes $V_{out}$ further below $2 - V_{TH}$. The equation is solved by iteration.

**Example: $\beta R_1 = 10\ \mathrm{V^{-1}}$, $V_{in} = 0$.** Start from the light-load value (1.09 V), which is too high because it leaves no overdrive. Lower the guess until $\tfrac12\beta R_1V_{ov}^2$ equals $V_{out}$; a few trials (or a bisection) give $V_{out} \approx 0.758$ V. Check:

$$
\begin{aligned}
V_{SB} &= V_{out} - V_{in} = 0.758\ \mathrm{V},\\
V_{TH} &= 0.7 + 0.45(\sqrt{0.9 + 0.758} - 0.9487) = 0.7 + 0.45(1.2876 - 0.9487) = 0.7 + 0.1525 = 0.8525\ \mathrm{V},\\
V_{ov} &= 2 - V_{out} - V_{TH} = 2 - 0.758 - 0.8525 = 0.3895\ \mathrm{V},\\
\tfrac12\beta R_1V_{ov}^2 &= \tfrac12(10\ \mathrm{V^{-1}})(0.3895\ \mathrm{V})^2 = 5\times0.1517\ \mathrm{V} = 0.758\ \mathrm{V} = V_{out}.\ \checkmark
\end{aligned}
$$

The overdrive (0.39 V), partly offset by a threshold that is 0.06 V lower because $V_{SB}$ is smaller, pulls $V_{out}$ about 0.33 V below its light-load value. Results for three loads:

| $V_{in}$ (V) | $V_{out}$, $\beta R_1\to\infty$ | $V_{out}$, $\beta R_1 = 100\ \mathrm{V^{-1}}$ | $V_{out}$, $\beta R_1 = 10\ \mathrm{V^{-1}}$ |
|---|---|---|---|
| 0 | 1.09 V | 0.97 V | 0.76 V |
| 0.5 | 1.16 V | 1.04 V | 0.82 V |
| 1.0 | 1.25 V | 1.12 V | 0.90 V |
| 1.5 | 1.34 V | 1.22 V | 1.00 V |
| 2.0 | 1.46 V | 1.34 V (junction turning on) | (junction already on) |

A heavier load (smaller $\beta R_1$) lowers the whole curve but keeps its rising, concave-up shape.

### Step 7 — The top of the range: forward-biased source–bulk junction

Once $V_{in} > V_{out}$, $V_{SB}$ is negative. The p-type bulk is then higher than the n+ source, so the source–bulk pn junction is **forward biased**.

- For a forward bias up to about 0.4–0.5 V the junction current is negligible, and the body-effect formula still describes the (lowered) threshold.
- When $V_{in} - V_{out}$ reaches about 0.6–0.7 V, the junction conducts significantly. It then feeds $R_1$ directly from $V_{in}$, acting like a diode from $V_{in}$ to $V_{out}$, so $V_{out} \approx V_{in} - 0.7$ V and the slope approaches 1.
  - At light load this happens at about $V_{in} \approx 2.1$ V (at $V_{in} = 2.1$ V, $V_{in} - V_{out} = 0.61$ V).
  - For $\beta R_1 = 10\ \mathrm{V^{-1}}$ it happens earlier, around $V_{in} \approx 1.6$–$1.7$ V, because there the forward bias is already 0.50 V at $V_{in} = 1.5$ V.
- As $V_{out} = V_{in} - 0.7$ approaches 2 V (near $V_{in} \approx 2.7$ V), $V_{GS} = 2 - V_{out} \to 0$ and the channel current fades away.
- For $V_{in} \gtrsim 2.6$ V the bulk is also about 0.6 V above the 2-V terminal, so that junction conducts into the 2-V battery as well, and parasitic lateral-bipolar action is possible. $V_{out}$ keeps roughly tracking $V_{in} - 0.7$ V, but the device is now a pair of forward-biased diodes rather than a MOSFET. This upper end lies outside the square-law/body-effect model and is avoided in practice.

### Result

$M_1$ works as a **source follower whose input is its bulk**: gate and drain sit at 2 V, the $V_{out}$ terminal is the source, and the device is always saturated. Then

$$\frac{V_{out}}{R_1} = \tfrac12\beta\,(2 - V_{out} - V_{TH})^2, \qquad V_{TH} = 0.7 + 0.45\left(\sqrt{0.9 + V_{out} - V_{in}} - \sqrt{0.9}\right).$$

Description of the curve:

- **Start.** $V_{out}$ starts near $2\ \mathrm{V} - V_{TH}$: about 1.09 V at $V_{in} = 0$ for a light load, and lower for a finite $\beta R_1$ (0.97 V for $\beta R_1 = 100\ \mathrm{V^{-1}}$, 0.76 V for $\beta R_1 = 10\ \mathrm{V^{-1}}$).
- **Follower region.** $V_{out}$ rises with $V_{in}$ because raising the bulk lowers $V_{TH}$. The slope is $g_{mb}/(g_m + g_{mb} + 1/R_1)$, well below 1: about 0.14 at $V_{in} = 0$, increasing to about 0.27 at $V_{in} = 2$ V, so the curve is concave up. At light load it passes through 1.16 V (at $V_{in} = 0.5$ V), 1.25 V (1 V), 1.30 V (1.3 V, where $V_{SB} = 0$) and 1.46 V (2 V).
- **Junction region.** When $V_{in}$ exceeds $V_{out}$ by about 0.6–0.7 V (from about $V_{in} \approx 2.1$ V at light load, earlier for heavy loads), the source–bulk junction conducts and $V_{out} \approx V_{in} - 0.7$ V. Above about 2.6 V the bulk–drain junction also conducts, and the simple MOS model no longer applies.

**Common mistake.** Taking the terminal with the arrow (at +2 V) as the source. That gives $V_{GS} = 0$ and a channel that "never conducts", with $V_{out} = 0$ until a junction turns on. As Step 1 shows, this state is self-contradictory: the source of an NMOS is always its lower-potential terminal, here $V_{out}$.

**Common mistake.** Drawing $V_{out}$ *decreasing* with $V_{in}$. Raising the bulk of an NMOS *reduces* $V_{SB}$ and hence $V_{TH}$, so the follower's output goes *up*. Also note that $V_{out}$ cannot exceed 2 V through MOS conduction: the channel can only deliver current from the 2-V drain to a lower-potential source.

**Common mistake.** Ignoring the source–bulk junction at the top of the range. Driving the bulk above the source by more than about 0.6 V forward-biases a pn junction, which then dominates and clamps $V_{out}$ near $V_{in} - 0.7$ V.
