# Detailed solution - R147

**Approach.** Treat the structure as a box with seven terminals (top, middle, bottom, two gates, two bulks). Apply the basic rules of MOS amplifiers: an NMOS conducts from drain to source, its source is the lower-potential diffusion, a signal can enter at a gate, a source or a bulk, and the output must be taken at a drain or a source. With these rules we list every arrangement that can be biased and gives gain, grouped by the orientation of the two devices. The total depends on how variants are counted, so the counting convention is stated explicitly.

### Step 1 — Terminals, notation and ground rules

Label the structure as drawn:

- $T$: the top terminal (drain of $M_2$);
- $X$: the middle node (source of $M_2$ and drain of $M_1$);
- $Y$: the bottom terminal (source of $M_1$);
- $G_1$, $G_2$: the gates; $B_1$, $B_2$: the bulks. Because the bulks are separate terminals, each one can be grounded, tied to its own source (removing the body effect) or even driven by a signal.

Symbols: $g_m$ is the transconductance, $g_{mb}$ the body (back-gate) transconductance, i.e. the drain current produced per volt of bulk–source voltage, and $r_O$ the output resistance due to channel-length modulation. $V_b$ denotes a fixed bias voltage, which is an AC ground. Added non-transistor elements (resistors, capacitors, voltage and current sources) are allowed; a third transistor is not.

**Rule 1 — DC path.** An NMOS carries current from drain to source, and its source is whichever diffusion terminal sits at the lower potential. Every device's bias current needs a complete path from the supply to ground, through the other device or through added elements.

**Rule 2 — inputs.** A signal may enter at a gate (common-source or source-follower action, via $g_m$), at a source (common-gate action) or at a bulk (via $g_{mb}$).

**Rule 3 — outputs.** The output must be a drain or a source, i.e. a node where a signal current is turned into a voltage. A gate or bulk that is not tied to a drain or source carries no current and cannot be an output.

**Rule 4 — what an NMOS "load" really is.** Its small-signal drain-to-source current is $i_d = g_mv_{gs} + g_{mb}v_{bs} + v_{ds}/r_O$. Consider a device whose gate and drain are at AC ground (fixed voltages), with bulk grounded, and apply a test voltage $v_x$ to its **source**. Then $v_{gs} = -v_x$, $v_{bs} = -v_x$, $v_{ds} = -v_x$, so

$$
\begin{aligned}
i_d &= -g_mv_x - g_{mb}v_x - \frac{v_x}{r_O},\\
i_x = -i_d &= \left(g_m + g_{mb} + \frac{1}{r_O}\right)v_x,\\
R_{source} = \frac{v_x}{i_x} &= \frac{1}{g_m + g_{mb}}\parallel r_O .
\end{aligned}
$$

So an NMOS whose **source** is the output node is a *low-impedance, follower-type* load (the same as a diode-connected device). It is a high-impedance current source ($r_O$) only when its source sits on a fixed potential and its drain is the output. If the gate is driven so high that the device is in triode, it is a linear resistor $R_{on} = 1/[\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})]$.

### Step 2 — The possible orientations of the two devices

Since source and drain may be swapped, each device can be used either way round:

| Case | $M_2$ | $M_1$ | Current flow | Character |
|---|---|---|---|---|
| A (as drawn) | D = $T$, S = $X$ | D = $X$, S = $Y$ | $T\to X\to Y$ | series stack, $T$ highest |
| A′ (both swapped) | S = $T$, D = $X$ | S = $X$, D = $Y$ | $Y\to X\to T$ | the same stack upside down |
| B ($M_1$ swapped) | D = $T$, S = $X$ | S = $X$, D = $Y$ | $T\to X$ and $Y\to X$ | sources joined at $X$ |
| C ($M_2$ swapped) | S = $T$, D = $X$ | D = $X$, S = $Y$ | $X\to T$ and $X\to Y$ | drains joined at $X$ |

- **A′** is case A with the names $M_1$ and $M_2$ exchanged. The devices are both NMOS, so it yields exactly the same list and is not counted again.
- **B**: both device currents flow *into* $X$, so $X$ needs a pull-down element (a tail current source or a resistor to ground), and the two drains $T$ and $Y$ need pull-ups.
- **C**: both currents flow *out of* $X$, so $X$ needs a pull-up element (resistor or current source to $V_{DD}$); $T$ and $Y$ are now sources at low potential.

In case A the same DC current flows through both devices (unless an added element feeds $X$). This is what makes one device usable as the load, bias source, cascode or degeneration of the other.

### Step 3 — Series stack (case A): common-source amplifiers

In all of these, $T$ connects to $V_{DD}$ (directly or through a load) and $Y$ to ground.

**(1) CS with a follower-type NMOS load.** Input $G_1$; output $X$; $M_1$ is the common-source amplifying device; $M_2$ is the load, with its drain at $V_{DD}$ and its gate either tied to $V_{DD}$ (diode-connected, since its drain is at $V_{DD}$) or held at a fixed $V_b$. By Rule 4, $M_2$ presents $1/(g_{m2} + g_{mb2})\parallel r_{O2}$. KCL at $X$, summing the small-signal currents leaving the node (through $M_1$ to ground and into the source of $M_2$):

$$
\begin{aligned}
g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \left(g_{m2} + g_{mb2} + \frac{1}{r_{O2}}\right)v_{out} &= 0\\
\frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2} + g_{mb2} + 1/r_{O1} + 1/r_{O2}} \approx -\frac{g_{m1}}{g_{m2} + g_{mb2}} ,
\end{aligned}
$$

using $g_mr_O \gg 1$. Both devices carry the same current and $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, so with $B_2$ tied to $X$ (no body effect) the gain is $-\sqrt{(W/L)_1/(W/L)_2}$. *Variant:* with $G_2$ above $V_{DD} + V_{TH2}$, $M_2$ is in triode and the load is $R_{on2}$, giving $A_v \approx -g_{m1}(R_{on2}\parallel r_{O1})$.

**(2) Cascode amplifier.** Input $G_1$; output $T$, with an external load $R_D$ from $V_{DD}$ to $T$; $G_2$ at $V_b$. $M_1$ is the CS transconductor; $M_2$ is the common-gate cascode device. The node $X$ sees only $1/(g_{m2} + g_{mb2}) \ll r_{O1}$, so almost all of $g_{m1}v_{in}$ flows through $M_2$ to $T$ (transconductance $\approx g_{m1}$). The resistance looking into $T$ is that of $M_2$ degenerated by $r_{O1}$:

$$R_{out} = r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2} \approx (g_{m2} + g_{mb2})r_{O1}r_{O2},$$

so $A_v \approx -g_{m1}(R_D\parallel R_{out}) \approx -g_{m1}R_D$ for $R_D \ll R_{out}$. $M_2$ shields $M_1$'s drain, raises the output resistance and suppresses the Miller effect on $C_{GD1}$.

**(3) Degenerated CS.** Input $G_2$; output $T$ with $R_D$ to $V_{DD}$; $M_1$ is a degeneration resistor $R_S$ between $X$ and ground: in triode ($G_1$ at a high fixed voltage, $R_S = R_{on1}$) or diode-connected ($G_1$ tied to $X$, $R_S \approx 1/g_{m1}$). With $v_X$ the small-signal voltage at $X$ and the bulk grounded ($v_{bs2} = -v_X$), the drain current of $M_2$ is

$$
\begin{aligned}
i &= g_{m2}(v_{in} - v_X) - g_{mb2}v_X, \qquad v_X = iR_S\\
i\left[1 + (g_{m2} + g_{mb2})R_S\right] &= g_{m2}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} = \frac{-iR_D}{v_{in}} &= -\frac{g_{m2}R_D}{1 + (g_{m2} + g_{mb2})R_S}
\end{aligned}
$$

($r_{O2}$ neglected). If $G_1$ is instead held at a moderate fixed voltage, $M_1$ is saturated and $R_S = r_{O1}$; the gain then collapses to about $R_D/r_{O1} \ll 1$ unless $X$ is bypassed by a capacitor. *Variant (self-cascode):* tie $G_1$ to $G_2$ as the input. $M_1$ is then forced into triode, and the pair acts like one transistor of length $L_1 + L_2$ with a higher output resistance.

### Step 4 — Series stack (case A): source followers

**(4) Source follower with a current-source bias.** Input $G_2$; output $X$; $T$ at $V_{DD}$; $G_1$ at $V_b$, $Y$ grounded. $M_2$ is the follower; $M_1$, whose source is on a fixed potential, is a true current source of resistance $r_{O1}$. KCL at $X$ (current delivered by $M_2$ = current taken by $M_1$):

$$
\begin{aligned}
g_{m2}(v_{in} - v_{out}) - g_{mb2}v_{out} - \frac{v_{out}}{r_{O2}} &= \frac{v_{out}}{r_{O1}}\\
\frac{v_{out}}{v_{in}} &= \frac{g_{m2}}{g_{m2} + g_{mb2} + 1/r_{O1} + 1/r_{O2}} \approx \frac{g_{m2}}{g_{m2} + g_{mb2}} .
\end{aligned}
$$

With $B_2$ tied to $X$ the gain approaches 1.

**(5) Source follower with a resistive (diode or triode) load.** Same as (4), but $G_1$ is tied to $X$ (diode-connected $M_1$, which takes $g_{m1}v_{out}$) or held high (triode, $1/R_{on1}$). Replacing $1/r_{O1}$ by $g_{m1}$ in the KCL above gives

$$\frac{v_{out}}{v_{in}} \approx \frac{g_{m2}}{g_{m2} + g_{mb2} + g_{m1}},$$

about 1/2 for equal devices without body effect: an attenuating level shifter.

**(6) Drain-shielded ("cascoded") source follower.** Input $G_1$; output $Y$, with a resistor $R_S$ (or another bias path) to ground; $G_2$ at $V_b$, $T$ at $V_{DD}$. $M_1$ is the follower. $M_2$ is a common-gate device in $M_1$'s drain; it holds $X$ at a low impedance $1/(g_{m2} + g_{mb2})$, so $M_1$'s drain is still close to an AC ground and the follower works normally:

$$A_v \approx \frac{g_{m1}R_S}{1 + (g_{m1} + g_{mb1})R_S}.$$

$M_2$ isolates $M_1$'s drain from $V_{DD}$ at the cost of some headroom.

### Step 5 — Series stack (case A): common-gate amplifiers

**(7) Common gate with $M_2$.** Input at $X$ (through a coupling capacitor or a source with series resistance); output $T$ with $R_D$ to $V_{DD}$; $G_2$ at $V_b$. $M_1$ ($G_1$ at a bias, $Y$ grounded) is the current source that supplies the DC bias current of $M_2$ at its source. With $v_g = v_b = 0$ and $v_s = v_{in}$, the drain current of $M_2$ is $i_{d2} = -(g_{m2} + g_{mb2})v_{in}$ ($r_{O2}$ neglected), so

$$v_{out} = -i_{d2}R_D = (g_{m2} + g_{mb2})R_Dv_{in}, \qquad A_v = (g_{m2} + g_{mb2})R_D,$$

non-inverting, with an input resistance of about $1/(g_{m2} + g_{mb2})$.

**(8) Common gate with $M_1$.** Input at $Y$ (the source of $M_1$; the input source must also carry $M_1$'s DC current to ground); output $X$; $G_1$ at $V_b$. $M_2$ ($T$ at $V_{DD}$, gate at $V_{DD}$ or at a bias) is the follower-type load $1/(g_{m2} + g_{mb2})$. The drain current of $M_1$ flowing down out of $X$ is $-(g_{m1} + g_{mb1})v_{in}$, and the current flowing from $X$ into $M_2$ is $(g_{m2} + g_{mb2})v_{out}$. KCL at $X$:

$$
\begin{aligned}
-(g_{m1} + g_{mb1})v_{in} + (g_{m2} + g_{mb2})v_{out} &= 0\\
A_v &= \frac{g_{m1} + g_{mb1}}{g_{m2} + g_{mb2}} .
\end{aligned}
$$

### Step 6 — Bulk-driven versions

**(9) Bulk-driven family.** Because each bulk is a separate terminal, any of (1)–(8) can be driven at a bulk instead of a gate, with the gate held at a fixed bias. The bulk acts as a weak second gate: replacing $g_m$ of the input device by its $g_{mb} = \eta g_m$, where $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$ is typically 0.2–0.4. For example, the bulk-driven version of (1) (input $B_1$, $G_1$ at $V_b$, output $X$) has

$$A_v = -\frac{g_{mb1}}{g_{m2} + g_{mb2}} .$$

The gain is smaller, but the input can be biased at levels where the gate could not. The source–bulk junction must stay reverse-biased (or only slightly forward-biased).

### Step 7 — Swapped orientations (cases B and C)

**(10) Source-coupled (differential) pair, case B.** Turn $M_1$ around: both sources meet at $X$, and $Y$ becomes the drain of $M_1$. Connect a tail current source $I_{SS}$ (or a resistor) from $X$ to ground, and load resistors $R_D$ from $V_{DD}$ to $T$ and to $Y$. Inputs: $G_1$ and $G_2$. Outputs: $Y$ and $T$. $M_1$ and $M_2$ are the two halves of the pair, and $X$ is a virtual ground for differential signals, so $|A_v| = g_mR_D$ for the differential output.

<!-- diagram: diagram-01.cir -->

The structure redrawn for this case: $M_2$ from $T$ (drain) to $X$ (source), $M_1$ from $Y$ (drain) to $X$ (source), $R_D$ from $V_{DD}$ to each of $T$ and $Y$, and $I_{SS}$ from $X$ to ground.

**(11) Source follower driving a common-gate stage (case B).** Same orientation, but $T$ at $V_{DD}$, input at $G_2$, $G_1$ at $V_b$, output at $Y$ with $R_D$, tail source from $X$ to ground, and both bulks tied to $X$. $M_2$ is a follower driving the source of $M_1$, which works in common gate. KCL at $X$ (ideal tail, so the signal currents of the two devices cancel):

$$
\begin{aligned}
g_{m2}(v_{in} - v_X) + g_{m1}(0 - v_X) &= 0 \;\;\Rightarrow\;\; v_X = \frac{g_{m2}}{g_{m1} + g_{m2}}v_{in},\\
v_{out} &= -R_D\,i_{d1} = -R_D\left[g_{m1}(0 - v_X)\right] = g_{m1}R_Dv_X,\\
A_v &= \frac{g_{m1}g_{m2}}{g_{m1} + g_{m2}}R_D = \frac{g_mR_D}{2}\ \text{(equal devices)},
\end{aligned}
$$

a non-inverting amplifier.

**(12) Two-input (summing) common-source stage, case C.** Turn $M_2$ around: both drains meet at $X$, and $T$ and $Y$ are sources, both grounded. A load $R_D$ from $V_{DD}$ to $X$ supplies both currents. Inputs: $G_1$ and $G_2$; output: $X$. Both devices are CS transconductors:

$$v_{out} = -R_D\left(g_{m1}v_{in1} + g_{m2}v_{in2}\right).$$

### Step 8 — Arrangements that do not work, and the count

**Configurations to reject:**

- Case C without the pull-up at $X$ (or case B without the pull-down): both devices sink (or source) current at the same node and nothing supplies it, so no DC current can flow.
- The output taken at an isolated gate or bulk (Rule 3).
- A follower whose output current is forced by an ideal current source in its drain path, e.g. (6) with $T$ fed by an ideal current source. The current in $R_S$ is then fixed, so the output cannot move and the gain is zero.
- Describing $M_2$ in (1) as a "current-source load". Its source is the output node, so it is a low-impedance load $1/(g_{m2} + g_{mb2})$ (Rule 4).

**Counting convention.** A topology is a distinct combination of input terminal, output terminal and device roles. Load or degeneration variants of the same stage (diode-connected, gate-biased, triode) are grouped together, the bulk-driven versions form one family, and case A′ is not counted because it only relabels case A. This gives:

- 8 gate- or source-driven single stages in the stack, (1)–(8);
- 1 bulk-driven family, (9);
- 3 swapped arrangements, (10)–(12).

That is about a dozen. Counting only the classic single-stage stacks gives about 8. Counting every load variant and every bulk-driven version separately gives more than 20.

### Result

There is no unique number. With the convention above there are **about 12 topologies** (8 classic single-stage stack configurations, a bulk-driven family and 3 swapped arrangements):

| # | Topology | Input | Output | $M_1$ | $M_2$ |
|---|---|---|---|---|---|
| 1 | CS, NMOS load | $G_1$ | $X$ | CS device | load $\approx 1/(g_{m2} + g_{mb2})$ (gate at $V_{DD}$/bias), or triode resistor |
| 2 | Cascode | $G_1$ | $T$ (load $R_D$) | CS device | common-gate cascode |
| 3 | Degenerated CS | $G_2$ | $T$ (load $R_D$) | degeneration (triode or diode) | CS device |
| 4 | Source follower | $G_2$ | $X$ | current-source bias | follower |
| 5 | Source follower, resistive load | $G_2$ | $X$ | diode or triode load | follower |
| 6 | Drain-shielded follower | $G_1$ | $Y$ (to ground via $R_S$) | follower | common-gate drain shield |
| 7 | Common gate | $X$ | $T$ (load $R_D$) | bias current source | CG device |
| 8 | Common gate | $Y$ | $X$ | CG device | load $\approx 1/(g_{m2} + g_{mb2})$ |
| 9 | Bulk-driven versions of 1–8 | $B_1$ or $B_2$ | as above | as above | as above |
| 10 | Differential pair ($M_1$ swapped) | $G_1$, $G_2$ | $Y$, $T$ | half of pair | half of pair |
| 11 | CD → CG ($M_1$ swapped) | $G_2$ | $Y$ | common gate | follower |
| 12 | Summing CS ($M_2$ swapped) | $G_1$, $G_2$ | $X$ | CS device | CS device |

The most important gains are $-g_{m1}/(g_{m2} + g_{mb2})$ for (1), $\approx -g_{m1}R_D$ for the cascode, $g_{m2}/(g_{m2} + g_{mb2})$ for the follower and $(g_m + g_{mb})R_D$ for the common gate.

**Common mistake.** Calling the top NMOS in (1) a "current-source load". Its source is the output node, so its $V_{GS}$ changes with the output and it behaves like a diode: the load is $1/(g_{m2} + g_{mb2})$, not $r_{O2}$. An NMOS acts as a current source only when its source is on a fixed potential.

**Common mistake.** Listing arrangements that cannot be biased, for example two NMOS devices that both sink current from the output node with no pull-up, or an output taken at a gate or bulk. Every device needs a DC current path, and the output must be a drain or a source.

**Common mistake.** Feeding a source follower's drain from an ideal current source and taking the output across a resistor at its source. The output current is then fixed by the drain source, so the "follower" has zero gain. The device at the follower's drain must present a low impedance (a supply or a common-gate device), not a fixed current.
