# Detailed solution - R492

**Approach.** Under a large differential input the tail current $I_{SS}$ is steered entirely to one input transistor. Each Miller capacitor $C_C$ wraps an inverting second stage, so X and Y barely move (virtual grounds), and whatever current the first stage cannot balance must flow through $C_C$. KCL at X and Y gives that current, the output ramps at (current)/$C_C$, and a final check confirms that the second stage can supply the currents this ramp requires.

### Step 1 — Why X and Y stay (almost) fixed during slewing

$M_5$ with $C_C$ from gate to drain is a Miller integrator: $C_C$ closes a local negative-feedback loop around the inverting second stage, and $V_X$ only has to change by the small amount needed to adjust $M_5$'s current, which changes only modestly (Step 4). So $dV_X/dt$ is negligible next to the output's volts per nanosecond. X has no other capacitance, so every bit of current imbalance at X must pass through $C_C$; the same holds for Y. The current through $C_C$ from the output to X is then

$$i_{C1} = C_C\frac{d(V_{out1} - V_X)}{dt} \approx C_C\frac{dV_{out1}}{dt}.$$

### Step 2 — KCL at X and Y with the pair fully switched

Let a large positive differential input turn $M_1$ fully on and $M_2$ off: $I_{D1} = I_{SS}$, $I_{D2} = 0$, while $M_3$ and $M_4$ each still deliver a constant $I_{SS}/2 = 0.125$ mA.

**Node X.** $I_{SS}/2$ enters from $M_3$ and $i_{C1}$ through $C_C$ from $V_{out1}$; $I_{D1} = I_{SS}$ leaves through $M_1$:

$$
\begin{aligned}
\frac{I_{SS}}{2} + i_{C1} &= I_{SS}\\
i_{C1} &= \frac{I_{SS}}{2} ,
\end{aligned}
$$

so

$$C_C\frac{dV_{out1}}{dt} = \frac{I_{SS}}{2} \quad\Longrightarrow\quad \frac{dV_{out1}}{dt} = +\frac{I_{SS}}{2C_C}.$$

$V_{out1}$ rises: X tends to fall, and the inverting second stage drives $V_{out1}$ up.

**Node Y.** $M_4$ still delivers $I_{SS}/2$ into Y, but $M_2$ is off, so that current can only flow through $C_C$ toward $V_{out2}$:

$$C_C\frac{d(V_Y - V_{out2})}{dt} = \frac{I_{SS}}{2} \quad\Longrightarrow\quad \frac{dV_{out2}}{dt} = -\frac{I_{SS}}{2C_C}.$$

For the opposite input polarity the two sides swap. Each $C_C$ is charged only by the *difference* between the input-device current and the constant load current, at most $I_{SS}/2$ (unlike a single-ended two-stage op amp with a current-mirror load, where one $C_C$ receives the full $I_{SS}$).

### Step 3 — Numbers

Per output:

$$SR = \frac{I_{SS}/2}{C_C} = \frac{0.125\ \mathrm{mA}}{0.9\ \mathrm{pF}} = 0.139\times10^9\ \mathrm{V/s} = 0.139\ \mathrm{V/ns} \approx 139\ \mathrm{V/\mu s}.$$

The outputs move in opposite directions, so the differential output slews twice as fast:

$$SR_{diff} = 2\times0.139\ \mathrm{V/ns} = 0.278\ \mathrm{V/ns} \approx 278\ \mathrm{V/\mu s} \;\left(= \frac{I_{SS}}{C_C}\right).$$

### Step 4 — Is the output stage fast enough?

While an output ramps at $SR = 0.139$ V/ns, the second stage must supply the current for $C_L$ and $C_C$:

$$
\begin{aligned}
C_L\cdot SR &= (1\ \mathrm{pF})(0.139\ \mathrm{V/ns}) = 0.139\ \mathrm{mA},\\
C_C\cdot SR &= (0.9\ \mathrm{pF})(0.139\ \mathrm{V/ns}) = 0.125\ \mathrm{mA}\ (= I_{SS}/2),\\
\text{total} &= 0.264\ \mathrm{mA}.
\end{aligned}
$$

- **Rising output** ($V_{out1}$): $M_5$ carries $1 + 0.264 = 1.26$ mA while $M_7$ sinks 1 mA; its gate (X) falls slightly to provide this.
- **Falling output** ($V_{out2}$): $M_6$ reduces its current to $1 - 0.264 = 0.74$ mA while $M_8$ keeps sinking 1 mA, so $M_6$ stays on. (The output stage alone could pull an output down at up to $1\ \mathrm{mA}/(C_L + C_C) = 0.53$ V/ns.)

So the slew rate is set by the first stage and $C_C$.

### Result

$$SR = \frac{I_{SS}/2}{C_C} = \frac{0.125\ \mathrm{mA}}{0.9\ \mathrm{pF}} \approx 0.14\ \mathrm{V/ns}\ (139\ \mathrm{V/\mu s})\ \text{at each output},$$

i.e. ≈ 0.28 V/ns (278 V/µs) for the differential output $V_{out1} - V_{out2}$. The output stages, with 1 mA of bias, are not limiting.

**Common mistake.** Using $I_{SS}/C_C$ (0.28 V/ns) for each output, as if the full tail current charged one Miller capacitor. The PMOS load of the "on" side still supplies $I_{SS}/2$, so the net current through that $C_C$ is only $I_{SS} - I_{SS}/2 = I_{SS}/2$; on the "off" side it is the load's $I_{SS}/2$.

**Common mistake.** Limiting the slew rate by $(C_L + C_C)$ or by the 1-mA output current. The 1-mA branch can sink far more than the 0.26 mA needed; the bottleneck is the first stage charging $C_C$.

**Common mistake.** Writing $I_{SS}/C_L$. The tail current never reaches $C_L$ directly: it is steered through $C_C$ by the virtual grounds at X and Y, and the second stage supplies $C_L$ from its own bias current.
