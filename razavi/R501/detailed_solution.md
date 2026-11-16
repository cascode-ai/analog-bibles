# Detailed solution - R501

**Approach.** Follow the large-signal chain of events around the loop: the input node falls, $M_1$ turns off, its drain rises, and the PMOS output device $M_2$ turns off. Then write Kirchhoff's current law (KCL) at the output: only the current source $I_2$ is left to act on the output capacitance, which sets the slope.

### Step 1 — The circuit at rest

Reading the figure:

- Node A (input): fed by $I_3 = 10\ \mu$A and by the input current $I_{in}$; $M_3$ (gate at the output Y, source grounded) sinks current from A.
- $M_1$: NMOS common-source stage, gate at A, source grounded; its drain (node B, the gate of $M_2$) is pulled up by $I_1 = 1$ mA.
- $M_2$: PMOS common-source stage, source at $V_{DD}$, gate at B, drain at the output Y; $I_2 = 1$ mA pulls Y down.
- $C_L$: total capacitance at the output node.

At rest ($I_{in} = 0$): $M_1$ and $M_2$ each carry 1 mA, $M_3$ carries 10 µA, and $V_{out} = V_{GS3}$. With typical device data for this circuit ($V_{TH} \approx 0.7$ V, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$), $M_3$ needs an overdrive of only about 0.12 V, so $V_{out} \approx 0.82$ V. These numbers are used only for orientation; the slew rate does not depend on them.

**KCL at the output** at any time:

$$C_L\frac{dV_{out}}{dt} = I_{D2} - I_2 ,$$

where $I_{D2} \ge 0$ is the current that $M_2$ pushes into the output.

### Step 2 — A large negative input current turns $M_1$ off

A negative $I_{in}$ means current is pulled *out of* node A. If it is larger than what $I_3$ and the feedback can supply, node A falls quickly. When $V_A$ drops below $V_{TH1}$, **$M_1$ turns off** ($I_{D1} = 0$).

### Step 3 — Node B rises and $M_2$ turns off

With $M_1$ off, nothing sinks the current $I_1$ at node B, so $I_1$ charges the capacitance at B and pulls B up toward $V_{DD}$. (If a compensation capacitor is connected across $M_1$, it takes part of $I_1$ and only slows this rise; it does not change what happens next.)

$M_2$ is a PMOS with its source at $V_{DD}$: its source–gate voltage is $V_{SG2} = V_{DD} - V_B$. As B rises, $V_{SG2}$ shrinks; once it falls below $|V_{THP}|$, **$M_2$ turns off** and $I_{D2} = 0$.

### Step 4 — Output slope

Substitute $I_{D2} = 0$ into the KCL of Step 1:

$$C_L\frac{dV_{out}}{dt} = 0 - I_2 \quad\Longrightarrow\quad \frac{dV_{out}}{dt} = -\frac{I_2}{C_L} = -\frac{1\ \mathrm{mA}}{C_L} .$$

The output ramps **down** linearly; the slew rate is $I_2/C_L$. For example, with $C_L = 0.5$ pF:

$$SR = \frac{1\ \mathrm{mA}}{0.5\ \mathrm{pF}} = 2\times10^9\ \mathrm{V/s} = 2\ \mathrm{V/ns}.$$

**Intuition.** The output stage is "push-strong, pull-weak": $M_2$ can push almost any current *up* into the load (its current grows with $V_{SG2}$), but the only thing that can pull the output *down* is the fixed source $I_2$. Once $M_2$ is off, the output can fall no faster than $I_2/C_L$.

### Step 5 — What the feedback does meanwhile

$M_3$, whose gate is the output, starts with $V_{GS3} \approx 0.82$ V. As $V_{out}$ falls below about $V_{TH} = 0.7$ V, $M_3$ also turns off, so the feedback loop is open during this event and cannot speed up recovery. The output can fall only about 0.8 V before reaching ground, where $I_2$ (a real current source) leaves saturation. When the input current returns to normal, $M_1$ turns back on, B falls, $M_2$ turns on again, and the loop regains control.

### Result

$$\frac{dV_{out}}{dt} = -\frac{I_2}{C_L} = -\frac{1\ \mathrm{mA}}{C_L}$$

(for example, −2 V/ns for $C_L = 0.5$ pF). The chain is: $M_1$ off → its drain rises toward $V_{DD}$ → the PMOS $M_2$ turns off → $I_2$ alone discharges $C_L$.

**Common mistake.** Using $I_1/C_L$ or $I_3/C_L$. $I_1$ only charges node B (the gate of $M_2$) and never reaches the output; $I_3$ feeds the input node. The only current left at the output once $M_2$ is off is $I_2$.

**Common mistake.** Concluding that the output *rises*. Turning $M_1$ off makes B rise, which turns the PMOS $M_2$ *off* (its source is at $V_{DD}$), so the output loses its pull-up and falls.

**Common mistake.** Treating $M_2$ as an NMOS source follower that keeps conducting. $M_2$ is a PMOS common-source device; when its gate rises to within $|V_{THP}|$ of $V_{DD}$ it carries no current at all.
