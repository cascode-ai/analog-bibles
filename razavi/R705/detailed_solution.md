# Detailed solution - R705

**Approach.** A design rule is a minimum width, spacing or enclosure that guarantees the drawn shapes survive the fabrication tolerances: lithographic resolution, mask misalignment, etch bias and lateral diffusion. Violating a rule therefore risks a specific physical failure (a short, an open, a leakage path or an ill-defined device). For each rule we (1) locate it in the layout, (2) name the nodes involved, and (3) state the physical failure and its effect on the differential amplifier.

### Step 1 — Reading the layout

Name the devices: PMOS loads $M_3$ (left) and $M_4$ (right) in the n-well; NMOS input pair $M_1$ (left) and $M_2$ (right); tail current source $M_5$ at the bottom.

- **PMOS loads (top, in the hatched n-well).** One horizontal poly bar forms both gates and is contacted at the left to a metal line carrying the load bias. The top contacts (sources) are joined by a metal "T" to $V_{DD}$, which also reaches the darker n+ well contact at the top right.
- **Output nodes.** The bottom contacts of the PMOS (drains) connect through vertical metal strips to the top contacts of the NMOS input pair (drains). These two nodes are the differential outputs, $V_{out1}$ (left) and $V_{out2}$ (right).
- **Input pair (middle row).** The gate of $M_1$ is brought in by poly from the left and contacted to the input metal line $V_{in1}$; the gate of $M_2$ is brought out by poly to the right and contacted to $V_{in2}$. The two gate poly lines end facing each other in the middle. The bottom contacts (sources) are joined by a metal "T" to the top contact (drain) of the tail transistor: the common-source node P.
- **Tail transistor (bottom).** Its gate poly is contacted on the left to a horizontal metal line carrying the tail bias $V_b$. Its bottom contact (source) is connected to a second horizontal metal line, the ground line, which also reaches the darker p+ substrate contact at the left.

### Step 2 — $A_1$: active–active spacing (between $M_1$ and $M_2$)

**Location.** The field-oxide gap between the active areas of $M_1$ and $M_2$, drawn at the height of their drain contacts.

**Failure.** Too small a gap may not be resolved: the two n+ regions can merge, or the field region between them can be too short to isolate them (punch-through between the two depletion regions, or a parasitic field transistor turned on by a line passing over it).

**Effect.** The drains of $M_1$ and $M_2$ are the two outputs. A short or resistive leak between them ties $V_{out1}$ to $V_{out2}$, so the **differential gain collapses** (the sources, which are also adjacent, are already connected to each other, so only the drain side matters).

### Step 3 — $A_2$: metal width (input line to $M_1$'s gate)

**Location.** The metal line that brings $V_{in1}$ to the gate contact of $M_1$.

**Failure.** A line narrower than the minimum may be broken or "necked" during lithography and etching: an **open circuit** or a high, unreliable resistance (and, for lines that carry DC current, early electromigration failure).

**Effect.** The gate of $M_1$ is disconnected from the input and **floats**, or is reached through a large resistance. The amplifier does not receive its input and does not work (or its bandwidth and noise degrade).

### Step 4 — $A_3$: metal–metal spacing (tail bias line vs. ground line)

**Location.** The two parallel horizontal metal lines at the bottom left: the upper one carries the tail gate bias $V_b$, the lower one is ground (it connects the tail source and the substrate contact).

**Failure.** Lines closer than the minimum spacing can be **bridged** by unresolved or residual metal: a short.

**Effect.** The tail gate is shorted to ground, so $V_{GS5} = 0$ and the **tail current vanishes**: the amplifier turns off. A partial bridge (leakage) shifts the bias. Even without a short, the closer spacing raises the coupling capacitance, injecting ground noise into the tail bias.

### Step 5 — $A_4$: enclosure of contact by active (tail transistor contact)

**Location.** The margin between the edge of the tail's active area and its bottom contact (the source contact).

**Failure.** With too little enclosure, a misaligned contact can land partly off the n+ diffusion: on the field oxide or on the junction edge. The effective contact area shrinks, so the **contact resistance becomes large or unreliable** (in the extreme, an open). The contact etch may also reach the p-substrate at the junction edge, so the metal touches the substrate.

**Effect.** A high source-contact resistance acts as unwanted degeneration in series with the tail source: the source potential rises, the tail current drops (or disappears for an open), and the bias of the whole amplifier is wrong. For this contact, a metal-to-substrate touch is electrically harmless because both source and substrate are at ground (at most it adds leakage). If the same violation occurred at the tail's **drain** contact, the metal reaching the substrate would short node P to ground, bypassing the current source.

### Step 6 — $A_5$: poly–active spacing (gate pad of $M_2$ vs. its active area)

**Location.** The gap between the right edge of $M_2$'s active area and the wide poly pad where $M_2$'s gate is contacted.

**Failure.** With misalignment the poly pad may land on the active area. Poly over active is separated from the silicon by the thin gate oxide, so:

- the poly **blocks the source/drain implant** under it, leaving an undoped region next to the channel;
- an **extra, ill-defined gate region** (a parasitic transistor whose width and length depend on the misalignment) is formed at the edge of the device;
- gate–source and gate–drain overlap capacitances increase.

**Effect.** $M_2$ no longer matches $M_1$: its effective $W/L$, threshold behaviour and capacitances differ, producing **input offset** and asymmetric behaviour; if the parasitic region interrupts the source or drain, $M_2$ can malfunction altogether.

### Step 7 — $A_6$: active–well spacing (NMOS active vs. n-well edge)

**Location.** The gap between the bottom edge of the n-well and the drain end of $M_2$'s active area.

**Failure.** The n-well diffuses laterally during its drive-in, and both junctions have depletion regions. If the n+ drain is too close, the well may touch it, or the two depletion regions may merge (**punch-through**), connecting the n+ drain to the n-well.

**Effect.** The n-well is tied to $V_{DD}$, so the output $V_{out2}$ is **leaking to, or shorted to, $V_{DD}$**: the output is pinned high, the gain collapses and the pair is unbalanced. The narrow p-region between the n+ region and the n-well also forms a lateral npn transistor with a thin base, increasing **latch-up** susceptibility.

### Step 8 — $A_7$: enclosure of active by well (PMOS active inside the n-well)

**Location.** The margin between the left edge of the n-well and the left edge of the PMOS active area.

**Failure.** With too little enclosure, misalignment or lateral diffusion can let the p+ source/drain extend **beyond the well edge into the p-substrate** (or leave only a thin, punch-through-prone n layer between them). A p+ region touching the p-substrate is not a junction at all: it is an ohmic connection to the substrate.

**Effect.** The PMOS source is at $V_{DD}$ and the substrate at ground, so a p+ source touching the substrate creates a **direct supply-to-ground short**; a p+ drain touching it **shorts the output to ground**. Either way the amplifier fails. Even a marginal enclosure increases leakage and latch-up susceptibility.

### Step 9 — $A_8$: poly–poly spacing (gate ends of $M_1$ and $M_2$)

**Location.** The gap between the end of $M_1$'s gate poly and the end of $M_2$'s gate poly in the middle of the input pair.

**Failure.** The two poly lines can be **bridged** if they are closer than the lithography and etch can resolve.

**Effect.** The two gates, i.e. the two inputs $V_{in1}$ and $V_{in2}$, are shorted together. The **differential input is lost** (the pair sees only the common-mode average), and the two stages driving the inputs are shorted to each other. Even without a short, the coupling capacitance between the inputs increases.

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

**Common mistake.** Treating spacing rules ($A_1$, $A_3$, $A_6$, $A_7$, $A_8$) as matters of area or "slightly worse matching". Each one guards against a short between two nodes at different potentials (outputs, bias and ground, output and $V_{DD}$, supply and substrate, the two inputs); violating it can make the circuit fail completely.

**Common mistake.** Claiming that poly landing on the active area ($A_5$) directly shorts the gate to the diffusion. The poly is still insulated by the gate oxide; the real problems are the blocked source/drain implant, a parasitic and ill-defined gate region, extra capacitance and the resulting mismatch.

**Common mistake.** Claiming that a violation can improve performance, e.g. that bringing the two input gates closer ($A_8$) improves matching. Matching depends on device geometry and environment, not on how close the gate ends are; violating the spacing only risks shorting the two inputs.
