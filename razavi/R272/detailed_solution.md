# Detailed solution - R272

**Approach.** Apply a small test voltage $v_{in}$ at the input, compute the current $i_{in}$ it draws, and form $Z_{in} = v_{in}/i_{in}$. The signal travels around a loop: the input drives $M_1$, whose current develops a voltage at node Y (loaded by the diode $M_3$ and $C_1$), and $M_2$ converts that voltage back into a current at the input. We first neglect channel-length modulation, then add the $r_O$ terms.

### Step 1 — The small-signal model

Call the input node X. The ideal $I_1$ is an open circuit for small signals. Neglecting channel-length modulation:

- $M_1$ draws $g_{m1}v_{in}$ from Y to ground;
- the diode-connected $M_3$ is a resistor $1/g_{m3}$ from Y to ac ground, in parallel with $C_1$;
- $M_2$ ($v_{gs} = v_Y$) is a current source $g_{m2}v_Y$ flowing **out of** X toward ac ground;
- the gate of $M_1$ draws no current.

<!-- diagram: diagram-01.cir -->

### Step 2 — Voltage at node Y

KCL at Y:

$$g_{m1}v_{in} + g_{m3}v_Y + sC_1v_Y = 0 \quad\Longrightarrow\quad v_Y = -\frac{g_{m1}}{g_{m3} + sC_1}\,v_{in},$$

the diode-loaded common-source gain $-g_{m1}/g_{m3}$ at low frequency, shunted by $C_1$ at higher frequencies.

### Step 3 — Input current

Current leaves X only through $M_2$ ($I_1$ is ideal and the gate of $M_1$ draws nothing), so

$$i_{in} = g_{m2}v_Y = -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1}\,v_{in}.$$

The input admittance is **negative**:

$$Y_{in} = \frac{i_{in}}{v_{in}} = -\frac{g_{m1}g_{m2}}{g_{m3} + sC_1}.$$

Raising $v_{in}$ makes $M_1$ pull $v_Y$ down, so the PMOS $M_2$ pushes **more** current *into* X: positive feedback, which appears as a negative resistance.

### Step 4 — Input impedance and the inductive term

Inverting the admittance:

$$Z_{in} = \frac{1}{Y_{in}} = -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}} = \underbrace{-\frac{g_{m3}}{g_{m1}g_{m2}}}_{R_{eq}} + s\underbrace{\left(-\frac{C_1}{g_{m1}g_{m2}}\right)}_{L_{eq}} ,$$

a resistor in series with an inductor:

- **Negative resistance:** $R_{eq} = -\dfrac{g_{m3}}{g_{m1}g_{m2}}$, which is $-1/g_{m1}$ if $M_2$ and $M_3$ are identical ($g_{m2} = g_{m3}$).
- **Negative inductance:** $L_{eq} = -\dfrac{C_1}{g_{m1}g_{m2}}$.

The loop through $M_1$ and $M_2$ acts as a gyrator, turning the admittance $sC_1$ at Y into an impedance proportional to $sC_1$ at X; its extra sign inversion makes the inductance negative. Units: $C_1/(g_{m1}g_{m2})$ has units $\mathrm{F}/\mathrm{S^2} = \mathrm{F\,\Omega^2} = \mathrm{s\,\Omega} = \mathrm{H}$ ✓.

### Step 5 — Including channel-length modulation

At node Y, $r_{O1}$ and $r_{O3}$ add conductance in parallel with $g_{m3}$ and $sC_1$:

$$v_Y = -\frac{g_{m1}}{g_{m3} + 1/r_{O1} + 1/r_{O3} + sC_1}\,v_{in}.$$

At node X, $r_{O2}$ adds a conductance $1/r_{O2}$ to $Y_{in}$, in parallel with the feedback path. Hence

$$Z_{in} = r_{O2}\ \Big\|\ \left[-\frac{g_{m3} + 1/r_{O1} + 1/r_{O3} + sC_1}{g_{m1}g_{m2}}\right].$$

The inductive part, $-C_1/(g_{m1}g_{m2})$, is unchanged; only the series negative resistance picks up small $1/r_O$ corrections, and the whole branch is shunted by the large $r_{O2}$.

### Result

Neglecting channel-length modulation:

$$Z_{in} = -\frac{g_{m3} + sC_1}{g_{m1}g_{m2}} = -\frac{g_{m3}}{g_{m1}g_{m2}} - s\,\frac{C_1}{g_{m1}g_{m2}},$$

i.e. a **negative resistance** $-g_{m3}/(g_{m1}g_{m2})$ ($= -1/g_{m1}$ if $M_2$ and $M_3$ are identical) in series with a **negative inductance**

$$L = -\frac{C_1}{g_{m1}g_{m2}}.$$

With $r_O$ included: $Z_{in} = r_{O2}\,\|\,[-(g_{m3} + 1/r_{O1} + 1/r_{O3} + sC_1)/(g_{m1}g_{m2})]$, with the same inductive term.

**Common mistake.** Losing a sign around the loop and reporting a positive inductance $C_1/(g_{m1}g_{m2})$. $M_1$ inverts, and the PMOS $M_2$ turns a *falling* gate voltage into *more* current *into* X, so the input current is opposite to $v_{in}$ and both $R$ and $L$ are negative.

**Common mistake.** Writing $Z_{in} = 1/g_{m1}$ from "what is connected to the input". The input node has no resistive path to ground (ideal $I_1$, a gate, and the high-impedance drain of $M_2$); all of its small-signal current comes from the feedback through $M_1$ and $M_2$.

**Common mistake.** Concluding that $Z_{in}$ is capacitive because the only reactive element is a capacitor. $C_1$ sits in the *denominator* of the admittance, so it appears in the impedance as $sC_1$ in the numerator: an inductive term.
