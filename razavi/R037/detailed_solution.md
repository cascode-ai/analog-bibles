# Detailed solution - R037

Approach: Node X is the gate of $M_1$ and one plate of $C_1$, so no current can flow into or out of it: the charge on $C_1$ is trapped. The capacitor voltage therefore stays at 3 V forever, and $V_X$ simply rides on the input voltage.

### Step 1 — Node X has no current path

$C_1$ sits across the gate and source of $M_1$, with X positive, so at every instant

$$V_X = V_{in} + V_{C1}.$$

In the ideal gate model, omit gate parasitic capacitances (including $C_{GD}$ and $C_{GB}$) and gate leakage. The only elements at X are the insulated gate of $M_1$ (no DC current), the plate of $C_1$ and the open output terminal, so KCL at X gives

$$C_1\frac{dV_{C1}}{dt} = 0 \quad\Longrightarrow\quad V_{C1}(t) = 3\ \mathrm{V} \ \text{ for all } t .$$

The charge on $C_1$ is trapped between an ideal voltage source (the $V_{in}$ node) and an insulated gate, so the capacitor neither charges nor discharges, whatever $M_1$ does.

### Step 2 — $V_X$ before and after the step

$$
\begin{aligned}
t < 0:&\quad V_X = V_{in} + V_{C1} = 0 + 3 = 3\ \mathrm{V},\\
t > 0:&\quad V_X = V_{in} + V_{C1} = 3 + 3 = 6\ \mathrm{V}.
\end{aligned}
$$

$V_X$ jumps from 3 V to 6 V at $t = 0$ and stays there. The capacitor lifts the gate together with the source ("bootstrapping"), so $V_{GS}$ stays at 3 V.

### Step 3 — What does $M_1$ do?

The square-law current parameter is $\beta=\mu_n C_{ox}W/L$.

$M_1$'s channel current flows only between $V_{DD}$ (drain) and the ideal source $V_{in}$, which absorbs or supplies any current without changing its voltage, so it never affects node X.

- Before the step: $V_{GS} = V_{C1} = 3$ V and $V_{DS} = 3 - 0 = 3$ V, so $M_1$ conducts $\tfrac12\beta(3\ \mathrm{V} - V_{TH})^2$ from $V_{DD}$ into the $V_{in}$ source (with $V_{TH} = 0.7$ V at $V_{SB} = 0$), without touching $C_1$.
- After the step: $V_{GS}$ is still 3 V, but $V_{DS} = 3 - 3 = 0$, so the channel is on but carries no current.

![Node X voltage waveform](/q/R037/solution-vx.svg)

### Result

$$V_X = 3\ \mathrm{V} \ (t < 0), \qquad V_X = 6\ \mathrm{V} \ (t > 0), \ \text{constant thereafter}.$$

- Node X is the gate of $M_1$ and the top plate of $C_1$, so no current can flow into or out of it. $C_1$ keeps its 3 V and $V_X = V_{in} + 3$ V.
- $M_1$'s current only flows between $V_{DD}$ and the ideal source $V_{in}$; after the step its $V_{DS} = 0$ anyway.
- The sketch is a step from 3 V to 6 V at $t = 0$, flat on both sides.

**Common mistake:** Letting $V_X$ decay after the jump "through $M_1$". The channel runs between drain and source, neither of which is node X, and the gate is insulated, so $C_1$'s charge has no path to leave.

**Common mistake:** Predicting a final value such as $V_{DD} + V_{TH}$, as if $M_1$ clamped the gate. A MOSFET can limit the voltage of its *source* (as a follower), not of its gate.

**Common mistake:** Forgetting the jump. At the instant of the step the capacitor keeps its voltage, so X moves up by the same 3 V as $V_{in}$.
