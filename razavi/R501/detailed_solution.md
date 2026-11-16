# Detailed solution - R501

**Approach.** Follow the large-signal chain of events around the loop: the input node falls, $M_1$ turns off, its drain rises, and the PMOS output device $M_2$ turns off. KCL at the output then leaves only the current source $I_2$ acting on the output capacitance, which sets the slope.

### Step 1 — The circuit at rest

Call the input node (gate of $M_1$) A and the drain of $M_1$ (gate of $M_2$) B. At rest ($I_{in} = 0$), $M_1$ and $M_2$ each carry 1 mA, $M_3$ carries 10 µA, and $V_{out} = V_{GS3}$. With typical device data for this circuit ($V_{TH} \approx 0.7$ V, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$), $M_3$ needs an overdrive of only about 0.12 V, so $V_{out} \approx 0.82$ V; these numbers are for orientation only, since the slew rate does not depend on them.

KCL at the output at any time:

$$C_L\frac{dV_{out}}{dt} = I_{D2} - I_2 ,$$

where $I_{D2} \ge 0$ is the current that $M_2$ pushes into the output.

### Step 2 — $M_1$ turns off, B rises, and $M_2$ turns off

A large negative $I_{in}$ pulls current out of A faster than $I_3$ and the feedback can supply it, so A falls below $V_{TH1}$ and **$M_1$ turns off** ($I_{D1} = 0$).

Nothing then sinks $I_1$ at B, so $I_1$ charges B up toward $V_{DD}$. (A compensation capacitor across $M_1$, if present, takes part of $I_1$ and only slows this rise.) $M_2$ has its source at $V_{DD}$, so $V_{SG2} = V_{DD} - V_B$ shrinks; once it falls below $|V_{THP}|$, **$M_2$ turns off** and $I_{D2} = 0$.

### Step 3 — Output slope

With $I_{D2} = 0$:

$$C_L\frac{dV_{out}}{dt} = 0 - I_2 \quad\Longrightarrow\quad \frac{dV_{out}}{dt} = -\frac{I_2}{C_L} = -\frac{1\ \mathrm{mA}}{C_L} .$$

The output ramps **down** linearly; the slew rate is $I_2/C_L$. For example, with $C_L = 0.5$ pF:

$$SR = \frac{1\ \mathrm{mA}}{0.5\ \mathrm{pF}} = 2\times10^9\ \mathrm{V/s} = 2\ \mathrm{V/ns}.$$

$M_2$ can push almost any current *up* into the load, but only the fixed source $I_2$ can pull the output *down*.

### Step 4 — What the feedback does meanwhile

$M_3$, whose gate is the output, starts with $V_{GS3} \approx 0.82$ V and turns off once $V_{out}$ falls below about $V_{TH} = 0.7$ V, so the loop is open during this event and cannot speed up recovery. The output can fall only about 0.8 V before reaching ground, where $I_2$ (a real current source) leaves saturation. When the input current returns to normal, $M_1$ turns back on, B falls, $M_2$ turns on again, and the loop regains control.

### Result

$$\frac{dV_{out}}{dt} = -\frac{I_2}{C_L} = -\frac{1\ \mathrm{mA}}{C_L}$$

(for example, −2 V/ns for $C_L = 0.5$ pF). The chain is: $M_1$ off → its drain rises toward $V_{DD}$ → the PMOS $M_2$ turns off → $I_2$ alone discharges $C_L$.

**Common mistake.** Using $I_1/C_L$ or $I_3/C_L$. $I_1$ only charges node B (the gate of $M_2$) and $I_3$ feeds the input node; once $M_2$ is off, the only current at the output is $I_2$.

**Common mistake.** Concluding that the output *rises*. Turning $M_1$ off makes B rise, which turns the PMOS $M_2$ *off*, so the output loses its pull-up and falls.

**Common mistake.** Treating $M_2$ as an NMOS source follower that keeps conducting. It is a PMOS common-source device, which carries no current once its gate rises to within $|V_{THP}|$ of $V_{DD}$.
