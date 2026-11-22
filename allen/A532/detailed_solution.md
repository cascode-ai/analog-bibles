# Detailed solution - A532

A folder is built from differential pairs whose output currents are summed with alternating polarity: each time the input passes a reference tap, one pair switches its tail current and the summed current, and hence the output voltage, toggles between two levels. Six crossings of 2 V need six pairs; an even number makes the output end at the level it started from. Choose the connection pattern so that the start level is the low one, then set the two levels to 1 V and 3 V with the load resistor and a level-setting current source.

### Step 1 — Schematic

<!-- diagram: diagram-01.cir -->

- **Reference taps.** A resistor string from $V_{REF}$ to ground ($R/2$, five $R$, $R/2$) gives six taps $t_1<t_2<\dots<t_6$ at $V_k=\frac{2k-1}{12}V_{REF}$.
- **Six NMOS differential pairs**, $k=1,\dots,6$, each with tail current $I$ from its common source $s_k$ to a negative supply $V_{SS}$ (so the pairs work for inputs down to 0 V). In pair $k$, transistor $M_{ak}$ has its gate at $V_{in}$ and $M_{bk}$ its gate at tap $t_k$.
- **Output node** out: load $R_L$ to $V_{DD}$ and a current source $I_C$ from $V_{DD}$ into out. Connected to out are the drains of the tap-side transistors $M_{b1}$, $M_{b3}$, $M_{b5}$ and of the input-side transistors $M_{a2}$, $M_{a4}$, $M_{a6}$. All other drains go to $V_{DD}$.
- **Values:** $V_{DD}=5$ V, $I=100\ \mu$A, $R_L=20$ kΩ (so $IR_L=2$ V), $I_C=100\ \mu$A.

### Step 2 — Output levels

Let $n$ be the number of tail currents steered into out. Then

$$
v_{out}=V_{DD}-(nI-I_C)R_L=5\ \mathrm V-(n-1)(2\ \mathrm V).
$$

A pair steers its current to the side whose gate is higher. Sweeping $V_{in}$ upward:

| $V_{in}$ range | Pairs switched to the input side | Pairs feeding out | $n$ | $v_{out}$ |
|---|---|---|---|---|
| $<V_1$ | none | 1, 3, 5 (tap side) | 3 | 1 V |
| $V_1$–$V_2$ | 1 | 3, 5 | 2 | 3 V |
| $V_2$–$V_3$ | 1, 2 | 2, 3, 5 | 3 | 1 V |
| $V_3$–$V_4$ | 1, 2, 3 | 2, 5 | 2 | 3 V |
| $V_4$–$V_5$ | 1–4 | 2, 4, 5 | 3 | 1 V |
| $V_5$–$V_6$ | 1–5 | 2, 4 | 2 | 3 V |
| $>V_6$ | all | 2, 4, 6 (input side) | 3 | 1 V |

The output starts at 1 V, alternates between 1 V and 3 V, and ends at 1 V.

### Step 3 — Crossings of 2 V

At $V_{in}=V_k$ pair $k$ is balanced and splits its current $I/2:I/2$, so $n=2.5$ and

$$
v_{out}=5\ \mathrm V-(2.5-1)(2\ \mathrm V)=2\ \mathrm V .
$$

The output therefore passes through 2 V at $V_{in}=V_1,\dots,V_6$: six times. Between taps it settles at 1 V or 3 V; the width of each transition is set by the pairs' overdrive (a pair switches fully for a differential input of $\sqrt2\,V_{ov}$), so the pairs must be sized so that this is well below the tap spacing $V_{REF}/6$.

### Step 4 — Simulation check

An ngspice run with level-1 NMOS ($V_{TO}=0.7$ V, $K'=110\ \mu\mathrm{A/V^2}$, $W/L=1000\ \mu\mathrm m/1\ \mu\mathrm m$, $V_{SS}=-2$ V) and $V_{REF}=1.2$ V gives $v_{out}=1.000$ V at both ends, plateaus at 1.000 V and 3.000 V, and 2-V crossings at $V_{in}=0.100$, 0.298, 0.500, 0.698, 0.900 and 1.098 V, i.e. at the taps (within the 2-mV sweep step).

![Simulated folder output versus input, starting and ending at 1 V and crossing 2 V at the six taps](/q/A532/solution-curves.svg)

Without $I_C$ the same connections give $v_{out}=V_{DD}-3IR_L$ and $V_{DD}-2IR_L$, so $V_{DD}=7$ V with $IR_L=2$ V would also meet the specification.
