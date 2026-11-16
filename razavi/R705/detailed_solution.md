# Detailed solution - R705

**Approach.** A design rule is a minimum width, spacing or enclosure that lets the drawn shapes survive fabrication tolerances (lithographic resolution, misalignment, etch bias, lateral diffusion). Violating it risks a specific physical failure: a short, an open, a leakage path or an ill-defined device. For each rule, locate it in the layout, name the nodes involved, and state the failure and its effect on the amplifier.

### Step 1 — Naming the nodes

Call the PMOS loads $M_3$ (left) and $M_4$ (right), the input pair $M_1$ (left) and $M_2$ (right), and the tail device $M_5$. The PMOS drains connect by vertical metal to the NMOS drains, forming the outputs $V_{out1}$ (left) and $V_{out2}$ (right). The gate poly of $M_1$ comes in from the left to $V_{in1}$ and that of $M_2$ goes out to the right to $V_{in2}$, the two gate ends facing each other in the middle. The input-pair sources join the tail drain at the common-source node P. At the bottom left, the upper horizontal metal line carries the tail bias $V_b$ and the lower one is ground (tail source and p+ substrate contact).

### Step 2 — $A_1$: active–active spacing (between $M_1$ and $M_2$)

**Location.** The field-oxide gap between the active areas of $M_1$ and $M_2$, at the height of their drain contacts.

**Failure.** The two n+ regions can merge, or the field region between them can fail to isolate them (punch-through between the depletion regions, or a parasitic field transistor turned on by a line passing over it).

**Effect.** The drains are the two outputs, so a short or resistive leak ties $V_{out1}$ to $V_{out2}$ and the **differential gain collapses**. (The adjacent sources are already connected to each other, so only the drain side matters.)

### Step 3 — $A_2$: metal width (input line to $M_1$'s gate)

**Location.** The metal line that brings $V_{in1}$ to the gate contact of $M_1$.

**Failure.** A line narrower than the minimum may be broken or "necked": an **open circuit** or a high, unreliable resistance (and, for lines carrying DC current, early electromigration failure).

**Effect.** The gate of $M_1$ **floats**, or is reached through a large resistance, so the amplifier does not receive its input (or its bandwidth and noise degrade).

### Step 4 — $A_3$: metal–metal spacing (tail bias line vs. ground line)

**Location.** The two parallel horizontal metal lines at the bottom left: the tail gate bias $V_b$ above, ground below.

**Failure.** Lines closer than the minimum spacing can be **bridged** by unresolved or residual metal: a short.

**Effect.** The tail gate is shorted to ground, so $V_{GS5} = 0$ and the **tail current vanishes**: the amplifier turns off. A partial bridge (leakage) shifts the bias; even without a short, the larger coupling capacitance injects ground noise into the tail bias.

### Step 5 — $A_4$: enclosure of contact by active (tail transistor contact)

**Location.** The margin between the edge of the tail's active area and its bottom (source) contact.

**Failure.** A misaligned contact can land partly off the n+ diffusion, on the field oxide or the junction edge: the **contact resistance becomes large or unreliable** (in the extreme, an open), and the contact etch may let the metal touch the p-substrate at the junction edge.

**Effect.** A high source-contact resistance acts as unwanted degeneration: the tail source potential rises, the tail current drops (or disappears for an open), and the whole amplifier is mis-biased. For this source contact a metal-to-substrate touch is harmless (both at ground; at most extra leakage). At the tail's **drain** contact, the same violation would short node P to ground, bypassing the current source.

### Step 6 — $A_5$: poly–active spacing (gate pad of $M_2$ vs. its active area)

**Location.** The gap between the right edge of $M_2$'s active area and the wide poly pad where $M_2$'s gate is contacted.

**Failure.** With misalignment the pad may land on the active area, where it sits on thin gate oxide. It then **blocks the source/drain implant** under it, forms an **extra, ill-defined gate region** (a parasitic transistor whose size depends on the misalignment), and increases the gate–source and gate–drain overlap capacitances.

**Effect.** $M_2$ no longer matches $M_1$ (effective $W/L$, threshold behaviour, capacitances), producing **input offset** and asymmetry; if the parasitic region interrupts the source or drain, $M_2$ can malfunction altogether.

### Step 7 — $A_6$: active–well spacing (NMOS active vs. n-well edge)

**Location.** The gap between the bottom edge of the n-well and the drain end of $M_2$'s active area.

**Failure.** The well diffuses laterally during drive-in, so it may touch the n+ drain, or the two depletion regions may merge (**punch-through**).

**Effect.** The n-well is at $V_{DD}$, so $V_{out2}$ is **leaking to, or shorted to, $V_{DD}$**: the output is pinned high, the gain collapses and the pair is unbalanced. The narrow p-region between the n+ region and the well also forms a thin-base lateral npn, increasing **latch-up** susceptibility.

### Step 8 — $A_7$: enclosure of active by well (PMOS active inside the n-well)

**Location.** The margin between the left edge of the n-well and the left edge of the PMOS active area.

**Failure.** The p+ source/drain can extend **beyond the well edge into the p-substrate** (or leave only a thin, punch-through-prone n layer), forming an ohmic connection to the substrate.

**Effect.** A p+ source (at $V_{DD}$) touching the grounded substrate is a **direct supply-to-ground short**; a p+ drain touching it **shorts the output to ground**. Either way the amplifier fails; even a marginal enclosure increases leakage and latch-up susceptibility.

### Step 9 — $A_8$: poly–poly spacing (gate ends of $M_1$ and $M_2$)

**Location.** The gap between the facing ends of the gate poly of $M_1$ and $M_2$ in the middle of the input pair.

**Failure.** The two poly lines can be **bridged**.

**Effect.** The two inputs $V_{in1}$ and $V_{in2}$ are shorted together: the **differential input is lost** (the pair sees only the common-mode average) and the two driving stages are shorted to each other. Even without a short, the coupling capacitance between the inputs increases.

### Result

| Rule | Nodes involved | Physical failure | Effect on the amplifier |
|---|---|---|---|
| $A_1$ active–active | drains of $M_1$, $M_2$ (outputs) | merged diffusions / field leakage | outputs shorted, differential gain lost |
| $A_2$ metal width | input line to $M_1$'s gate | open or high-resistance line | input gate floats, amplifier dead |
| $A_3$ metal–metal | tail bias line and ground line | lines bridged | tail gate grounded, no tail current |
| $A_4$ contact enclosure | tail contact | contact partly off active: high-$R$/open; metal may touch substrate | tail current reduced or zero; (at a drain contact, node P to ground) |
| $A_5$ poly–active | gate pad of $M_2$ and its active | poly over active blocks S/D implant, parasitic gate, more overlap $C$ | mismatch/offset, possible malfunction |
| $A_6$ active–well | NMOS drain and n-well ($V_{DD}$) | punch-through or well touching n+ | output leaks/shorted to $V_{DD}$; latch-up risk |
| $A_7$ well enclosure | PMOS p+ regions and p-substrate | p+ extends into substrate | $V_{DD}$ shorted to ground, or output to ground |
| $A_8$ poly–poly | gates of $M_1$, $M_2$ | gate lines bridged | inputs shorted, differential input lost |

**Common mistake.** Treating spacing rules ($A_1$, $A_3$, $A_6$, $A_7$, $A_8$) as matters of area or "slightly worse matching". Each guards against a short between nodes at different potentials, and violating it can make the circuit fail completely.

**Common mistake.** Claiming that poly landing on the active area ($A_5$) shorts the gate to the diffusion. The poly is still insulated by the gate oxide; the problems are the blocked implant, a parasitic gate region, extra capacitance and mismatch.

**Common mistake.** Claiming that a violation can help, e.g. that closer input gate ends ($A_8$) improve matching. Matching depends on device geometry and environment; violating the spacing only risks shorting the inputs.
