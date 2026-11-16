# Detailed solution - R272

**Approach.** Apply a small test voltage $v_{in}$ at the input, compute the small-signal current $i_{in}$ it draws, and form $Z_{in} = v_{in}/i_{in}$. The signal travels around a loop: the input drives $M_1$, whose current develops a voltage at node Y (loaded by the diode $M_3$ and $C_1$), and $M_2$ converts that voltage back into a current at the input. We first neglect channel-length modulation, then add the $r_O$ terms.

### Step 1 — Reading the circuit

Call the input node X. From the figure:

- **Node X (input):** drain of the PMOS $M_2$, gate of the NMOS $M_1$, and the ideal current source $I_1$ to ground.
- **$M_1$** (NMOS): gate at X, source grounded, drain at node Y.
- **$M_3$** (PMOS): source at $V_{DD}$, gate and drain tied together at Y. It is **diode-connected**.
- **$M_2$** (PMOS): source at $V_{DD}$, gate at Y, drain at X. It mirrors $M_3$.
- **$C_1$** connects Y to ground.

### Step 2 — The small-signal model

For small signals $V_{DD}$ and ground are both ac ground, and the ideal current source $I_1$ is an open circuit (its current cannot change). Neglecting channel-length modulation ($r_O \to \infty$):

- **$M_1$** is a voltage-controlled current source $g_{m1}v_{in}$ flowing from Y to ground (its $v_{gs} = v_{in}$).
- **$M_3$**, diode-connected with its source at ac ground, behaves like a resistor $1/g_{m3}$ from Y to ac ground: its drain current is $g_{m3}v_Y$, flowing out of Y.
- **$C_1$** is an admittance $sC_1$ from Y to ground.
- **$M_2$** has $v_{gs} = v_Y$ (source at ac ground). It is a current source $g_{m2}v_Y$ flowing **out of** X toward ac ground (the same small-signal model as an NMOS: $g_mv_{gs}$ from drain to source).
- The gate of $M_1$ draws no current.

<!-- diagram: diagram-01.cir -->

### Step 3 — Voltage at node Y

KCL at Y: the currents leaving Y through $M_1$, $M_3$ and $C_1$ must add up to zero:

$$g_{m1}v_{in} + g_{m3}v_Y + sC_1v_Y = 0 .$$

Solve for $v_Y$:

$$v_Y = -\frac{g_{m1}}{g_{m3} + sC_1}\,v_{in}.$$

At low frequency this is the gain of a common-source stage with a diode load, $-g_{m1}/g_{m3}$. At higher frequencies $C_1$ shunts node Y and the gain falls.

### Step 4 — Input current

KCL at X. The test source supplies $i_{in}$ into X; current leaves X only through $M_2$ ($g_{m2}v_Y$). $I_1$ is ideal and the gate of $M_1$ draws nothing. So

$$i_{in} = g_{m2}v_Y .$$

Substitute $v_Y$ from Step 3:

$$i_{in} = -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1}\,v_{in}.$$

The input admittance is **negative**:

$$Y_{in} = \frac{i_{in}}{v_{in}} = -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1}.$$

**Why negative?** Raise $v_{in}$: $M_1$ pulls more current from Y, so $v_Y$ falls; $M_2$'s gate falls, so this PMOS pushes **more** current *into* X. The circuit then supplies current to whatever drives the input instead of drawing it: positive feedback, which appears as a negative resistance.

### Step 5 — Input impedance and the inductive term

Invert the admittance:

$$Z_{in} = \frac{1}{Y_{in}} = -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}} .$$

Split it into its two terms:

$$Z_{in} = \underbrace{-\frac{g_{m3}}{g_{m1}g_{m2}}}_{R_{eq}} + s\underbrace{\left(-\frac{C_1}{g_{m1}g_{m2}}\right)}_{L_{eq}} .$$

An impedance of the form $R + sL$ is a resistor in series with an inductor. Here:

- **Negative resistance:** $R_{eq} = -\dfrac{g_{m3}}{g_{m1}g_{m2}}$. If $M_2$ and $M_3$ are identical ($g_{m2} = g_{m3}$), this is simply $-1/g_{m1}$.
- **Negative inductance:** $L_{eq} = -\dfrac{C_1}{g_{m1}g_{m2}}$.

The capacitor at Y produces an inductance at X because the loop through $M_1$ and $M_2$ acts as a **gyrator**: it converts an admittance $sC_1$ at one node into an impedance proportional to $sC_1$ at the other. A plain gyrator would give a positive inductance; the extra sign inversion of this loop (positive feedback) makes it negative.

Check the units: $C_1/(g_{m1}g_{m2})$ has units $\mathrm{F}/\mathrm{S^2} = \mathrm{F\,\Omega^2} = \mathrm{s\,\Omega} = \mathrm{H}$. ✓

### Step 6 — Including channel-length modulation

With finite output resistances:

- At node Y, $r_{O1}$ and $r_{O3}$ add conductance in parallel with $g_{m3}$ and $sC_1$:
$$v_Y = -\frac{g_{m1}}{g_{m3} + 1/r_{O1} + 1/r_{O3} + sC_1}\,v_{in}.$$
- At node X, $r_{O2}$ appears from X to ac ground, in parallel with the feedback path. It adds a conductance $1/r_{O2}$ to $Y_{in}$.

Hence

$$Z_{in} = r_{O2}\ \Big\|\ \left[-\frac{g_{m3} + 1/r_{O1} + 1/r_{O3} + sC_1}{g_{m1}g_{m2}}\right].$$

The inductive part, $-C_1/(g_{m1}g_{m2})$, is unchanged. Only the series negative resistance picks up small $1/r_O$ corrections, and the whole branch is shunted by the large $r_{O2}$.

### Result

Neglecting channel-length modulation:

$$Z_{in} = -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}} = -\frac{g_{m3}}{g_{m1}g_{m2}} - s\,\frac{C_1}{g_{m1}g_{m2}},$$

i.e. a **negative resistance** $-g_{m3}/(g_{m1}g_{m2})$ ($= -1/g_{m1}$ if $M_2$ and $M_3$ are identical) in series with a **negative inductance**

$$L = -\frac{C_1}{g_{m1}g_{m2}}.$$

With $r_O$ included: $Z_{in} = r_{O2}\,\|\,[-(g_{m3} + 1/r_{O1} + 1/r_{O3} + sC_1)/(g_{m1}g_{m2})]$, with the same inductive term.

**Common mistake.** Losing a sign around the loop and reporting a positive inductance $C_1/(g_{m1}g_{m2})$. Count the inversions: $M_1$ inverts ($v_Y$ falls when $v_{in}$ rises), and the PMOS $M_2$ turns a *falling* gate voltage into *more* current *into* X. The input current is therefore opposite to $v_{in}$, so both $R$ and $L$ are negative.

**Common mistake.** Writing $Z_{in} = 1/g_{m1}$ or looking only at "what is connected to the input". The input node itself has no resistive path to ground (ideal $I_1$, a gate, and the high-impedance drain of $M_2$). All of its small-signal current comes from the feedback through $M_1$ and $M_2$.

**Common mistake.** Concluding that $Z_{in}$ is capacitive because the only reactive element is a capacitor. The capacitor sits in the *denominator* of the admittance, $Y_{in} \propto 1/(g_{m3} + sC_1)$, so in the impedance it appears in the numerator as $sC_1$: an inductive term.
