# Detailed solution - A230

Short-circuit protection is local negative feedback that acts only under overload: sense the current in each output transistor, and when it exceeds a chosen limit, use a clamp transistor to take gate drive away from that output transistor. M3 is overloaded when the output is shorted to ground (it sources $i_{OUT}$ with its full $V_{SD}$), and M2 when the output is shorted to $V_{DD}$; each needs its own sensor and clamp.

### Step 1 — Sensing the sourcing current (M3)

Insert a small sense resistor $R_{S3}$ between $V_{DD}$ and the source of M3, so the voltage across it is $I_{M3}R_{S3}$. Add a p-channel clamp M5 with its source at $V_{DD}$, its gate at the source of M3, and its drain at the gate of M3 (the top of $V_{BIAS}$). Its source–gate voltage is the sense voltage:

$$
V_{SG5}=I_{M3}R_{S3}.
$$

In normal operation $I_{M3}R_{S3}<|V_{TP}|$ and M5 is off, so the amplifier is unchanged apart from a small loss of swing.

### Step 2 — Sensing the sinking current (M2)

Symmetrically, insert $R_{S2}$ between the source of M2 and ground, and add an n-channel clamp M4 with its source at ground, its gate at the source of M2 and its drain at the gate of M2 (the drain of M1, bottom of $V_{BIAS}$), so that $V_{GS4}=I_{M2}R_{S2}$. M4 is off as long as $I_{M2}R_{S2}<V_{TN}$.

The protected stage: $R_{S3}$ from $V_{DD}$ to the source of M3, M5 from $V_{DD}$ to the gate of M3 with its gate on the source of M3; $R_{S2}$ from the source of M2 to ground, M4 from the gate of M2 to ground with its gate on the source of M2.

<!-- diagram: diagram-01.cir -->

### Step 3 — How the clamps limit the current

Output shorted to ground: the dangerous input is a high $v_{IN}$, for which M1 pulls both gate nodes down, turning M3 on hard (and M2 off). $I_{M3}$ rises until $I_{M3}R_{S3}$ reaches about $|V_{TP}|$. M5 then turns on and injects current into the gate node of M3, pulling that gate up toward the source of M3 and reducing $V_{SG3}$. This is negative feedback: more output current gives more clamp current and less gate drive. $R_1$ (or the active load that replaces it) and M1 set the current M5 must supply. The loop settles at

$$
I_{M3,\max}\approx\frac{|V_{TP}|+V_{ON5}}{R_{S3}}\approx\frac{|V_{TP}|}{R_{S3}},
$$

where $V_{ON5}$ is the small overdrive M5 needs to conduct the required clamp current.

Output shorted to $V_{DD}$: when $I_{M2}R_{S2}\approx V_{TN}$, M4 turns on in parallel with M1 and pulls the gate of M2 down, limiting

$$
I_{M2,\max}\approx\frac{V_{TN}+V_{ON4}}{R_{S2}}\approx\frac{V_{TN}}{R_{S2}} .
$$

The battery moves both gate nodes together, so clamping one output device momentarily increases the drive of the other; that device is harmless because the short leaves it with $V_{DS}\approx0$.

### Step 4 — Choosing the limit and trade-offs

The limit is set by the sense resistors: for example, a 10-mA limit with $|V_{TP}|\approx V_{TN}\approx0.7$ V needs $R_{S}\approx70\ \Omega$. Choose the limit below the safe current of M2 and M3 (and of the metal), and make the clamps fast enough to act before damage.

Series sensing costs output swing (up to about one threshold at the limit current) and adds $R_S$ to the output resistance. A variant without series resistors uses small replica transistors that share gate and source with M3 (and with M2), scaled 1:N, so they carry $I_{OUT}/N$. Each replica current is compared with a reference current $I_{lim}/N$ from an opposite-type current source at a common node, and that node drives a clamp that pulls the corresponding output gate back once the limit is exceeded. This keeps the full swing but depends on device matching.
