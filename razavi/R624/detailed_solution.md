# Detailed solution - R624

**Approach.** Model the amplifier as an ideal amplifier of gain $A_v$ with its offset $V_{OS}$ in series with input X. In the offset-cancellation phase, solve the unity-gain feedback loop to find the voltage stored between X and Y. In the amplification phase, X and Y float, so charge conservation on the capacitors gives how much of $V_{in}$ reaches X–Y. Combine the two and find the input that makes the output zero.

### Step 1 — Amplifier model and sign convention

Following Fig. 2, the real amplifier is an ideal (offset-free) amplifier with a voltage source $V_{OS}$ in series with input X: the $+$ terminal of the source is at X and the $-$ terminal is at the amplifier's internal input. The internal differential input is therefore $V_X - V_{OS} - V_Y = V_{XY} - V_{OS}$, where $V_{XY} = V_X - V_Y$.

The amplifier's top output (the one $S_3$ returns to X) is its inverting output and the bottom output (returned to Y by $S_4$) its non-inverting output. Define $V_{out}$ as top output minus bottom output. Then

$$V_{out} = -A_v\left(V_{XY} - V_{OS}\right).$$

The amplifier also has an input capacitance $C_{in}$ connected between X and Y.

### Step 2 — Offset-cancellation phase: the stored voltage

$S_3$ and $S_4$ connect the top output to X and the bottom output to Y, so

$$V_{XY} = V_{out}.$$

Substitute into the amplifier equation:

$$V_{XY} = -A_v\left(V_{XY} - V_{OS}\right).$$

Collect the $V_{XY}$ terms:

$$V_{XY}\,(1 + A_v) = A_vV_{OS} \quad\Longrightarrow\quad V_{XY,0} = \frac{A_v}{1 + A_v}V_{OS}.$$

This is **negative feedback**: the loop drives X–Y almost to $V_{OS}$, so the internal input $V_{XY} - V_{OS} = -V_{OS}/(1 + A_v)$ is nearly zero. It is not exactly zero, because a finite gain needs a nonzero input to hold its output.

At the same time $S_1$ and $S_2$ hold the left plates of $C_1$ and $C_2$ at $V_{CM}$. The left plates are thus at equal voltages, while the right plates carry $V_{XY,0}$ between them. The charges stored on $C_1$, $C_2$ and $C_{in}$ record this state.

### Step 3 — Amplification phase: how much of $V_{in}$ reaches X–Y

First $S_3$, $S_4$ open, then $S_1$, $S_2$ open (ideal switches, so no charge is injected), and $V_{in}$ is applied to the left plates. Call the left plates of $C_1$ and $C_2$ nodes A and B. Their voltages change by $\Delta V_A$ and $\Delta V_B$, with $\Delta V_A - \Delta V_B = V_{in}$, because before the switch-over $V_{AB} = 0$.

Nodes X and Y now **float**: they connect only to capacitor plates and to the amplifier's gate inputs, which draw no current. The total charge on each node is therefore conserved, and the changes satisfy:

**Charge conservation at X** ($C_1$ to A, $C_{in}$ to Y):

$$C\left(\Delta V_X - \Delta V_A\right) + C_{in}\left(\Delta V_X - \Delta V_Y\right) = 0 .$$

**Charge conservation at Y** ($C_2$ to B, $C_{in}$ to X):

$$C\left(\Delta V_Y - \Delta V_B\right) + C_{in}\left(\Delta V_Y - \Delta V_X\right) = 0 .$$

Subtract the second equation from the first:

$$C\left(\Delta V_X - \Delta V_Y\right) - C\left(\Delta V_A - \Delta V_B\right) + 2C_{in}\left(\Delta V_X - \Delta V_Y\right) = 0 .$$

With $\Delta V_{XY} = \Delta V_X - \Delta V_Y$ and $\Delta V_A - \Delta V_B = V_{in}$:

$$\Delta V_{XY}\,(C + 2C_{in}) = C\,V_{in} \quad\Longrightarrow\quad \Delta V_{XY} = \frac{C}{C + 2C_{in}}\,V_{in}.$$

**Interpretation.** For a differential signal, $C_1$ and $C_2$ are in series, an equivalent $C/2$, and they form a capacitive divider with $C_{in}$:

$$\frac{C/2}{C/2 + C_{in}} = \frac{C}{C + 2C_{in}} .$$

Any common-mode change of the input moves X and Y together and does not affect $V_{XY}$.

<!-- diagram: diagram-01.cir -->

The circuit above shows this phase: $V_{in}$ drives $C_1$ and $C_2$, $C_{in}$ sits between X and Y, and the amplifier is the offset source $V_{OS}$ followed by an ideal gain $-A_v$. The capacitors start the phase with the charges stored in Step 2.

### Step 4 — Output in the amplification phase

The new X–Y voltage is the stored value plus the coupled input:

$$V_{XY} = V_{XY,0} + \Delta V_{XY} = \frac{A_v}{1 + A_v}V_{OS} + \frac{C}{C + 2C_{in}}V_{in}.$$

Substitute into $V_{out} = -A_v(V_{XY} - V_{OS})$:

$$
\begin{aligned}
V_{out} &= -A_v\left[\frac{A_v}{1 + A_v}V_{OS} - V_{OS} + \frac{C}{C + 2C_{in}}V_{in}\right]\\
&= -A_v\left[\frac{A_v - (1 + A_v)}{1 + A_v}V_{OS} + \frac{C}{C + 2C_{in}}V_{in}\right]\\
&= -A_v\left[-\frac{V_{OS}}{1 + A_v} + \frac{C}{C + 2C_{in}}V_{in}\right].
\end{aligned}
$$

### Step 5 — Input-referred offset of the whole circuit

The input-referred offset is the input that makes $V_{out} = 0$. Set the bracket to zero:

$$\frac{C}{C + 2C_{in}}V_{in} = \frac{V_{OS}}{1 + A_v}.$$

Solve for $V_{in}$:

$$V_{OS,tot} = \frac{V_{OS}}{1 + A_v}\cdot\frac{C + 2C_{in}}{C} = \frac{V_{OS}}{1 + A_v}\left(1 + \frac{2C_{in}}{C}\right).$$

**Check by another route.** With $V_{in} = 0$ the output offset is $A_vV_{OS}/(1 + A_v)$. The gain from $V_{in}$ to $V_{out}$ is $-A_vC/(C + 2C_{in})$. Dividing the output offset by the magnitude of this gain gives the same $V_{OS,tot}$.

**Why $C_{in}$ makes it worse.** The residual error $-V_{OS}/(1 + A_v)$ sits directly at the amplifier's input and is not attenuated. The input signal, however, is attenuated by the divider $C/(C + 2C_{in})$ before it reaches the amplifier. Referred back to $V_{in}$, the residual is therefore magnified by $(C + 2C_{in})/C$. To keep this penalty small, $C$ must be much larger than $2C_{in}$.

### Result

$$V_{OS,tot} = \frac{V_{OS}}{1 + A_v}\left(1 + \frac{2C_{in}}{C}\right) \approx \frac{V_{OS}}{A_v}\cdot\frac{C + 2C_{in}}{C}\quad(A_v \gg 1).$$

The cancellation phase stores $A_vV_{OS}/(1 + A_v)$ across X–Y, leaving a residual $V_{OS}/(1 + A_v)$ at the amplifier's internal input. In the amplification phase the input reaches X–Y only through the divider $C/(C + 2C_{in})$, which raises the input-referred residual by $1 + 2C_{in}/C$. For $C_{in} = 0$ the familiar result $V_{OS}/(1 + A_v)$ is recovered.

**Common mistake.** Using the divider $C/(C + C_{in})$. For a differential input, $C_1$ and $C_2$ appear in series (an equivalent $C/2$) against $C_{in}$, which gives $C/(C + 2C_{in})$ and the factor $1 + 2C_{in}/C$, not $1 + C_{in}/C$.

**Common mistake.** Applying the capacitive divider to the residual error instead of to the input, for example writing $V_{OS,tot} = [V_{OS}/(1 + A_v)]\cdot C/(C + 2C_{in})$, which would make $C_{in}$ appear to *reduce* the offset. The stored voltage and the residual error act directly at X–Y, since the floating nodes keep their charge when the switches open; only the newly applied $V_{in}$ passes through the divider.

**Common mistake.** Assuming that offset storage removes the offset completely (or that $C_{in}$ has no effect). With finite gain, $V_{OS}/(1 + A_v)$ remains at the internal input, and the capacitive attenuation of the signal magnifies its input-referred value.
