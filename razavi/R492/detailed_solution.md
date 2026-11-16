# Detailed solution - R492

**Approach.** Under a large differential input the tail current $I_{SS}$ is steered entirely to one input transistor. Because each Miller capacitor $C_C$ is connected around an inverting second stage, nodes X and Y barely move (they act as virtual grounds), so whatever current the first stage cannot balance must flow through $C_C$. KCL at X and Y gives that current; the output then ramps at (current)/$C_C$. Finally, check that the second stage can supply the currents this ramp requires.

### Step 1 — The circuit

- **First stage.** NMOS pair $M_1$–$M_2$ with tail current $I_{SS} = 0.25$ mA. PMOS current sources $M_3$ (into X) and $M_4$ (into Y) each deliver a *constant* $I_{SS}/2 = 0.125$ mA.
- **Second stage.** PMOS common-source devices $M_5$ (gate X, output $V_{out1}$) and $M_6$ (gate Y, output $V_{out2}$), each with an NMOS current-source load ($M_7$, $M_8$) sinking a constant 1 mA.
- **Compensation and load.** $C_C = 0.9$ pF from X to $V_{out1}$ and from Y to $V_{out2}$; $C_L = 1$ pF at each output.

### Step 2 — Why X and Y stay (almost) fixed during slewing

$M_5$ with $C_C$ between its gate and drain is a Miller integrator: $C_C$ closes a local negative-feedback loop around the inverting second stage. $V_X$ only has to change by the small amount needed to adjust $M_5$'s current, which changes only modestly during the transient (Step 5), so $V_X$ stays nearly constant. Compared with the volts-per-nanosecond swing at the output, $dV_X/dt$ is negligible. Node X has no other capacitance, so it cannot store charge: every bit of current imbalance at X must pass through $C_C$. The same holds for Y.

The current through $C_C$ from the output to X is then

$$i_{C1} = C_C\frac{d(V_{out1} - V_X)}{dt} \approx C_C\frac{dV_{out1}}{dt}.$$

### Step 3 — KCL at X and Y with the pair fully switched

Suppose a large positive differential input turns $M_1$ fully on and $M_2$ off: $I_{D1} = I_{SS}$, $I_{D2} = 0$.

**Node X.** Currents entering X: $I_{SS}/2$ from $M_3$ and $i_{C1}$ through $C_C$ from $V_{out1}$. Current leaving: $I_{D1} = I_{SS}$ through $M_1$. KCL:

$$
\begin{aligned}
\frac{I_{SS}}{2} + i_{C1} &= I_{SS}\\
i_{C1} &= \frac{I_{SS}}{2} .
\end{aligned}
$$

The capacitor must supply the net $I_{SS}/2$ that $M_1$ pulls beyond what $M_3$ provides. Hence

$$C_C\frac{dV_{out1}}{dt} = \frac{I_{SS}}{2} \quad\Longrightarrow\quad \frac{dV_{out1}}{dt} = +\frac{I_{SS}}{2C_C}.$$

$V_{out1}$ rises, as expected: X tends to fall, and the inverting second stage drives $V_{out1}$ up.

**Node Y.** $M_4$ still delivers $I_{SS}/2$ into Y, but $M_2$ is off. The only path for that current is through $C_C$ toward $V_{out2}$:

$$C_C\frac{d(V_Y - V_{out2})}{dt} = \frac{I_{SS}}{2} \quad\Longrightarrow\quad \frac{dV_{out2}}{dt} = -\frac{I_{SS}}{2C_C}.$$

For the opposite input polarity the roles of the two sides swap.

**Intuition.** In this circuit each $C_C$ is charged only by the *difference* between the input-device current and the constant load current, which is at most $I_{SS}/2$. (In a single-ended two-stage op amp with a current-mirror load, one $C_C$ receives the full $I_{SS}$.)

### Step 4 — Numbers

Per output:

$$SR = \frac{I_{SS}/2}{C_C} = \frac{0.125\ \mathrm{mA}}{0.9\ \mathrm{pF}} = 0.139\times10^9\ \mathrm{V/s} = 0.139\ \mathrm{V/ns} \approx 139\ \mathrm{V/\mu s}.$$

The two outputs move in opposite directions, so the differential output $V_{out1} - V_{out2}$ slews twice as fast:

$$SR_{diff} = 2\times0.139\ \mathrm{V/ns} = 0.278\ \mathrm{V/ns} \approx 278\ \mathrm{V/\mu s} \;\left(= \frac{I_{SS}}{C_C}\right).$$

### Step 5 — Is the output stage fast enough?

At each output node, while it ramps at $SR = 0.139$ V/ns, the second stage must provide the current for $C_L$ and for $C_C$:

$$
\begin{aligned}
C_L\cdot SR &= (1\ \mathrm{pF})(0.139\ \mathrm{V/ns}) = 0.139\ \mathrm{mA},\\
C_C\cdot SR &= (0.9\ \mathrm{pF})(0.139\ \mathrm{V/ns}) = 0.125\ \mathrm{mA}\ (= I_{SS}/2),\\
\text{total} &= 0.264\ \mathrm{mA}.
\end{aligned}
$$

- **Rising output** ($V_{out1}$): $M_5$ must carry $1 + 0.264 = 1.26$ mA while $M_7$ sinks 1 mA. $M_5$ can do this: its gate (X) falls slightly to raise its current.
- **Falling output** ($V_{out2}$): $M_6$ reduces its current to $1 - 0.264 = 0.74$ mA, while $M_8$ keeps sinking 1 mA. Since $0.264\ \mathrm{mA} < 1\ \mathrm{mA}$, $M_6$ stays on and the output stage is not the bottleneck. (The output stage alone could pull an output down at up to $1\ \mathrm{mA}/(C_L + C_C) = 0.53$ V/ns.)

So the slew rate is set by the first stage and $C_C$.

### Result

$$SR = \frac{I_{SS}/2}{C_C} = \frac{0.125\ \mathrm{mA}}{0.9\ \mathrm{pF}} \approx 0.14\ \mathrm{V/ns}\ (139\ \mathrm{V/\mu s})\ \text{at each output},$$

i.e. ≈ 0.28 V/ns (278 V/µs) for the differential output $V_{out1} - V_{out2}$. The output stages, with 1 mA of bias, are not limiting.

**Common mistake.** Using $I_{SS}/C_C$ (0.28 V/ns) for each output, as if the full tail current charged one Miller capacitor. The PMOS load of the "on" side still supplies $I_{SS}/2$, so the net current through that $C_C$ is only $I_{SS} - I_{SS}/2 = I_{SS}/2$; on the "off" side it is the load's $I_{SS}/2$.

**Common mistake.** Limiting the slew rate by $(C_L + C_C)$ or by the 1-mA output current. The 1-mA branch can sink up to 1 mA, far more than the 0.26 mA needed; the bottleneck is the first stage charging $C_C$.

**Common mistake.** Writing $I_{SS}/C_L$. The tail current never reaches $C_L$ directly: it is steered through $C_C$ by the virtual ground at X and Y, and the second stage then supplies $C_L$ from its own bias current.
