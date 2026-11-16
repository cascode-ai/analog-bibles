# Detailed solution - R624

**Approach.** Model the amplifier as an ideal gain $A_v$ with its offset $V_{OS}$ in series with input X. Solve the unity-gain loop of the cancellation phase for the voltage stored between X and Y. In the amplification phase X and Y float, so charge conservation gives how much of $V_{in}$ reaches X–Y; then find the input that makes the output zero.

### Step 1 — Amplifier model and sign convention

As in Fig. 2, $V_{OS}$ is in series with input X ($+$ terminal at X), so the internal differential input is $V_{XY} - V_{OS}$, with $V_{XY} = V_X - V_Y$. The output that $S_3$ returns to X is the inverting one; defining $V_{out}$ as that output minus the one $S_4$ returns to Y,

$$V_{out} = -A_v\left(V_{XY} - V_{OS}\right).$$

### Step 2 — Offset-cancellation phase: the stored voltage

$S_3$ and $S_4$ make $V_{XY} = V_{out}$, so

$$V_{XY} = -A_v\left(V_{XY} - V_{OS}\right) \quad\Longrightarrow\quad V_{XY}\,(1 + A_v) = A_vV_{OS} \quad\Longrightarrow\quad V_{XY,0} = \frac{A_v}{1 + A_v}V_{OS}.$$

The internal input is left at $V_{XY} - V_{OS} = -V_{OS}/(1 + A_v)$: nearly, but not exactly, zero, since a finite gain needs a nonzero input to hold its output. With the left plates of $C_1$ and $C_2$ both at $V_{CM}$, the charges on $C_1$, $C_2$ and $C_{in}$ record this state.

### Step 3 — Amplification phase: how much of $V_{in}$ reaches X–Y

Call the left plates of $C_1$ and $C_2$ nodes A and B. After the switch-over their voltages change by $\Delta V_A$ and $\Delta V_B$, with $\Delta V_A - \Delta V_B = V_{in}$ (before it, $V_{AB} = 0$). X and Y now float (they connect only to capacitor plates and gate inputs), so their charges are conserved:

**At X** ($C_1$ to A, $C_{in}$ to Y):

$$C\left(\Delta V_X - \Delta V_A\right) + C_{in}\left(\Delta V_X - \Delta V_Y\right) = 0 .$$

**At Y** ($C_2$ to B, $C_{in}$ to X):

$$C\left(\Delta V_Y - \Delta V_B\right) + C_{in}\left(\Delta V_Y - \Delta V_X\right) = 0 .$$

Subtracting the second from the first:

$$C\left(\Delta V_X - \Delta V_Y\right) - C\left(\Delta V_A - \Delta V_B\right) + 2C_{in}\left(\Delta V_X - \Delta V_Y\right) = 0 .$$

With $\Delta V_{XY} = \Delta V_X - \Delta V_Y$ and $\Delta V_A - \Delta V_B = V_{in}$:

$$\Delta V_{XY}\,(C + 2C_{in}) = C\,V_{in} \quad\Longrightarrow\quad \Delta V_{XY} = \frac{C}{C + 2C_{in}}\,V_{in}.$$

For a differential signal, $C_1$ and $C_2$ are in series ($C/2$) and form a divider with $C_{in}$, $\frac{C/2}{C/2 + C_{in}} = \frac{C}{C + 2C_{in}}$; a common-mode input change moves X and Y together and does not affect $V_{XY}$.

<!-- diagram: diagram-01.cir -->

The circuit above shows this phase: $V_{in}$ drives $C_1$ and $C_2$, $C_{in}$ sits between X and Y, and the amplifier is the offset source $V_{OS}$ followed by an ideal gain $-A_v$. The capacitors start the phase with the charges stored in Step 2.

### Step 4 — Output in the amplification phase

$$V_{XY} = V_{XY,0} + \Delta V_{XY} = \frac{A_v}{1 + A_v}V_{OS} + \frac{C}{C + 2C_{in}}V_{in}.$$

Substituting into $V_{out} = -A_v(V_{XY} - V_{OS})$:

$$
\begin{aligned}
V_{out} &= -A_v\left[\frac{A_v}{1 + A_v}V_{OS} - V_{OS} + \frac{C}{C + 2C_{in}}V_{in}\right]\\
&= -A_v\left[\frac{A_v - (1 + A_v)}{1 + A_v}V_{OS} + \frac{C}{C + 2C_{in}}V_{in}\right]\\
&= -A_v\left[-\frac{V_{OS}}{1 + A_v} + \frac{C}{C + 2C_{in}}V_{in}\right].
\end{aligned}
$$

### Step 5 — Input-referred offset of the whole circuit

$V_{out} = 0$ when the bracket vanishes:

$$\frac{C}{C + 2C_{in}}V_{in} = \frac{V_{OS}}{1 + A_v} \quad\Longrightarrow\quad V_{OS,tot} = \frac{V_{OS}}{1 + A_v}\cdot\frac{C + 2C_{in}}{C} = \frac{V_{OS}}{1 + A_v}\left(1 + \frac{2C_{in}}{C}\right).$$

**Check.** With $V_{in} = 0$ the output offset is $A_vV_{OS}/(1 + A_v)$, and the gain from $V_{in}$ is $-A_vC/(C + 2C_{in})$; their ratio gives the same $V_{OS,tot}$.

The residual $-V_{OS}/(1 + A_v)$ sits directly at the amplifier input, while the signal is attenuated by $C/(C + 2C_{in})$ on its way there, so referred to $V_{in}$ the residual grows by $(C + 2C_{in})/C$. Keeping this penalty small requires $C \gg 2C_{in}$.

### Result

$$V_{OS,tot} = \frac{V_{OS}}{1 + A_v}\left(1 + \frac{2C_{in}}{C}\right) \approx \frac{V_{OS}}{A_v}\cdot\frac{C + 2C_{in}}{C}\quad(A_v \gg 1).$$

The cancellation phase stores $A_vV_{OS}/(1 + A_v)$ across X–Y, leaving a residual $V_{OS}/(1 + A_v)$ at the amplifier's internal input. In the amplification phase the input reaches X–Y only through the divider $C/(C + 2C_{in})$, which raises the input-referred residual by $1 + 2C_{in}/C$. For $C_{in} = 0$ the familiar result $V_{OS}/(1 + A_v)$ is recovered.

**Common mistake.** Using the divider $C/(C + C_{in})$. For a differential input $C_1$ and $C_2$ are in series ($C/2$) against $C_{in}$, which gives $C/(C + 2C_{in})$ and the factor $1 + 2C_{in}/C$.

**Common mistake.** Applying the divider to the residual error instead of the input, e.g. $V_{OS,tot} = [V_{OS}/(1 + A_v)]\cdot C/(C + 2C_{in})$, which makes $C_{in}$ appear to *reduce* the offset. The stored voltage and the residual act directly at X–Y; only the newly applied $V_{in}$ passes through the divider.

**Common mistake.** Assuming offset storage removes the offset completely, or that $C_{in}$ has no effect. With finite gain $V_{OS}/(1 + A_v)$ remains, and the attenuation of the signal magnifies its input-referred value.
