# Detailed solution - R037

**Approach.** Identify every element connected to node X and ask whether any of them can carry current into or out of X. Node X is the gate of $M_1$ and one plate of $C_1$, so no DC path exists: the charge on $C_1$ is trapped. The capacitor voltage therefore stays at 3 V forever, and $V_X$ simply rides on the input voltage.

### Step 1 — Reading the circuit

From the figure:

- the drain of $M_1$ is at $V_{DD} = 3$ V;
- the gate of $M_1$ is node X (the output terminal);
- the source of $M_1$ is the $V_{in}$ node, driven by the step source (0 → 3 V at $t = 0$);
- $C_1$ connects X ("+") to the $V_{in}$ node ("−") and holds 3 V, i.e. it sits across the gate and source of $M_1$;
- the bulk is grounded.

So at every instant

$$V_X = V_{in} + V_{C1}.$$

### Step 2 — Node X has no current path

The elements connected to node X are:

1. **The gate of $M_1$.** The gate is insulated by the oxide, so it draws **no DC current**.
2. **The plate of $C_1$.** The current into it is $C_1\,dV_{C1}/dt$.
3. **The output terminal**, which is open (no load).

KCL at X therefore gives

$$C_1\frac{dV_{C1}}{dt} = 0 \quad\Longrightarrow\quad V_{C1}(t) = 3\ \mathrm{V} \ \text{ for all } t .$$

The charge on $C_1$ is trapped between an ideal voltage source (the $V_{in}$ node) and an insulated gate, so the capacitor neither charges nor discharges, whatever $M_1$ does.

### Step 3 — $V_X$ before and after the step

$$
\begin{aligned}
t < 0:&\quad V_X = V_{in} + V_{C1} = 0 + 3 = 3\ \mathrm{V},\\
t > 0:&\quad V_X = V_{in} + V_{C1} = 3 + 3 = 6\ \mathrm{V}.
\end{aligned}
$$

**$V_X$ jumps from 3 V to 6 V at $t = 0$ and stays there.** This is "bootstrapping": the capacitor lifts the gate together with the source, so that the gate–source voltage stays at 3 V.

### Step 4 — What does $M_1$ do?

$M_1$'s channel current flows only between $V_{DD}$ (drain) and the ideal source $V_{in}$ (source). An ideal voltage source absorbs or supplies any current without changing its voltage, so this current never affects node X.

- **Before the step:** $V_{GS} = V_{C1} = 3$ V and $V_{DS} = 3 - 0 = 3$ V, so $M_1$ conducts $\tfrac12\beta(3 - V_{TH})^2$ from $V_{DD}$ into the $V_{in}$ source (with $V_{TH} = 0.7$ V at $V_{SB} = 0$). This does not touch $C_1$.
- **After the step:** $V_{GS}$ is still 3 V, but $V_{DS} = 3 - 3 = 0$, so the channel is on but carries **no current**.

Either way, $M_1$ has no influence on $V_X$.

### Result

$$V_X = 3\ \mathrm{V} \ (t < 0), \qquad V_X = 6\ \mathrm{V} \ (t > 0), \ \text{constant thereafter}.$$

- Node X is the gate of $M_1$ and the top plate of $C_1$, so no current can flow into or out of it. $C_1$ keeps its 3 V and $V_X = V_{in} + 3$ V.
- $M_1$'s current only flows between $V_{DD}$ and the ideal source $V_{in}$; after the step its $V_{DS} = 0$ anyway.
- The sketch is a step from 3 V to 6 V at $t = 0$, flat on both sides.

**Common mistake.** Letting $V_X$ decay after the jump "through $M_1$". The transistor's channel is between its drain and source, and neither of those is node X; the gate is insulated. There is simply no path for $C_1$'s charge to leave.

**Common mistake.** Predicting a final value such as $V_{DD} + V_{TH}$, as if $M_1$ clamped the gate. A MOSFET can limit the voltage of its *source* (as a follower), not of its gate; nothing in this circuit limits the gate voltage.

**Common mistake.** Forgetting the jump. At the instant of the step a capacitor keeps its voltage, so the plate at X moves up by the same 3 V as the plate at $V_{in}$.
