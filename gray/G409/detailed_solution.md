# Detailed solution - G409

During slewing the input pair is fully switched, so each output node is charged or discharged by a fixed current equal to the difference between the current sources at its two ends. Find that current from KCL at the folding nodes and outputs, find the capacitance on each output from [Fig. 1], and add the two opposite single-ended slopes.

### Step 1 — Load capacitance on each output

During slewing the op amp is not in linear operation, so its inputs are not virtual grounds. Each op-amp input node carries no capacitance other than the 1.5-pF and 1-pF capacitors, and the ideal source is an ac ground, so the two are in series:

$$
C_L=0.5\ \mathrm{pF}+\frac{(1.5\ \mathrm{pF})(1\ \mathrm{pF})}{1.5\ \mathrm{pF}+1\ \mathrm{pF}}=0.5\ \mathrm{pF}+0.6\ \mathrm{pF}=1.1\ \mathrm{pF}.
$$

### Step 2 — Quiescent currents

The pair splits $|I_{D5}|=200\ \mu\mathrm A$ equally, so each input transistor delivers 100 μA into its folding node. Each NMOS source $M_{11}$, $M_{12}$ sinks 200 μA from its folding node, so the NMOS cascodes $M_{1A}$, $M_{2A}$ carry $200-100=100\ \mu\mathrm A$, exactly matching the 100 μA supplied from above by $M_3$/$M_{3A}$ and $M_4$/$M_{4A}$. No net current flows into either output.

### Step 3 — Currents during slewing

For a large differential input step, one input transistor takes all 200 μA and the other turns off.

| Folding node | Current from pair | NMOS cascode current | PMOS cascode current | Net into output |
|---|---|---|---|---|
| fed by the conducting device | 200 μA | $200-200=0$ | 100 μA | +100 μA (charges up) |
| fed by the off device | 0 | $200-0=200\ \mu\mathrm A$ | 100 μA | −100 μA (discharges) |

With all current sources still active, each output therefore moves at

$$
\left|\frac{dV_{o}}{dt}\right|=\frac{100\ \mu\mathrm A}{1.1\ \mathrm{pF}}=91\ \mathrm{V/\mu s},
$$

one up and one down. The slewing current per output is $|I_{D5}|/2$, limited by the PMOS sources $M_3$, $M_4$ on the rising side and by the folding-node balance on the falling side.

### Step 4 — Differential slew rate

The outputs move in opposite directions, so the slopes add:

$$
\left|\frac{dV_{od}}{dt}\right|=2\times\frac{100\ \mu\mathrm A}{1.1\ \mathrm{pF}}=\frac{100\ \mu\mathrm A}{0.55\ \mathrm{pF}}=182\ \mathrm{V/\mu s}\quad(0.18\ \mathrm{V/ns}).
$$
