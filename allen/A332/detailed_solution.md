# Detailed solution - A332

During slewing the input pair is fully switched: one input device carries the whole tail current $I_{SS}$ and the other none. The slew rate is the largest current available to the capacitor that must charge, divided by that capacitance, $SR=I_{\max}/C$. For each topology, identify which capacitor limits the output ($C_c$ in the Miller designs, $C_L$ in the single-stage designs) and how much of the switched current reaches it. Single-ended outputs move in opposite directions, so the differential slew rate is twice the single-ended one.

### Step 1 — Two-stage Miller op amps, [Fig. 1] and [Fig. 2]

The first-stage loads M3 and M4 are current sources carrying $I_{SS}/2$. When M1 takes all of $I_{SS}$ (or none), the net current at its drain is $\pm I_{SS}/2$, and it flows into the compensation capacitor, because the second-stage gate draws no current and the Miller-connected $C_c$ keeps that node nearly fixed. The output therefore moves at

$$
SR_{\text{single}}=\frac{I_{SS}/2}{C_c},\qquad SR_{\text{diff}}=\frac{I_{SS}}{C_c}.
$$

This assumes the second stage can supply the extra current for $C_L$. In [Fig. 1] the falling edge is drawn by the sink M8/M9 with current $J$; during that edge it must supply both the $C_c$ current and the $C_L$ current at the rate $I_{SS}/(2C_c)$:

$$
J\ge(C_c+C_L)\frac{I_{SS}}{2C_c}.
$$

If $J$ is smaller, the falling edge is load-limited: the p-channel driver cuts off, its gate clamps, and the output falls at about $J/(C_c+C_L)$. The push–pull drivers of [Fig. 2] can sink and source large currents, so they drive $C_L$ freely and the $C_c$-limited value holds for both edges.

### Step 2 — Folded-cascode op amp, [Fig. 3]

There is no compensation capacitor; the load capacitors $C_L$ compensate the amplifier. At each folding node the current of the folding source M4 (M5) is fixed, so when the input device's current changes from $I_{SS}/2$ to $0$ or $I_{SS}$, the current through the cascode into the output changes by $\pm I_{SS}/2$, which charges $C_L$:

$$
SR_{\text{single}}=\frac{I_{SS}/2}{C_L},\qquad SR_{\text{diff}}=\frac{I_{SS}}{C_L}.
$$

This requires the folding sources to carry more than $I_{SS}$, so the cascodes M6/M7 never cut off when an input device takes the full tail current.

### Step 3 — Class B folded-cascode push–pull op amp, [Fig. 4]

The push–pull paths (mirrors M10–M13 and M18–M21) only redirect the current steered by the input pair; no path delivers more than the switched input current $I_{SS}/2$ to an output. The slew rate is therefore the same as in [Fig. 3]:

$$
SR_{\text{diff}}=\frac{I_{SS}}{C_L}.
$$

### Step 4 — Class AB op amp with cross-coupled input, [Fig. 5]

Each output is driven from both cross-coupled branches: M9 mirrors M7, which carries the M1 branch current $I_1$, and M11 mirrors M5, which carries the M3 branch current $I_2$ (M10 and M12 do the same for the other output). With mirror ratio $b$ the output current is the full difference $b(I_1-I_2)$, not half of it as in [Fig. 3]/[Fig. 4]:

$$
SR_{\text{diff}}=\frac{2b\,|I_1-I_2|_{\max}}{C_L}.
$$

If the largest differential current is taken as $I_{SS}$ and the mirrors are 1:1, each output slews at $I_{SS}/C_L$ and

$$
SR_{\text{diff}}=\frac{2I_{SS}}{C_L},
$$

twice [Fig. 3]/[Fig. 4]. Because the class AB input has no tail-current limit, $|I_1-I_2|$ grows with the input drive and is not bounded by the quiescent current; the actual slew rate is therefore not limited by $I_{SS}$ at all.

### Step 5 — Comparison

| Op amp | Differential slew rate | Limiting capacitor |
|---|---|---|
| [Fig. 1] | $I_{SS}/C_c$ (if $J\ge(C_c+C_L)I_{SS}/2C_c$) | $C_c$ |
| [Fig. 2] | $I_{SS}/C_c$ | $C_c$ |
| [Fig. 3] | $I_{SS}/C_L$ | $C_L$ |
| [Fig. 4] | $I_{SS}/C_L$ | $C_L$ |
| [Fig. 5] | $2I_{SS}/C_L$, not bounded by $I_{SS}$ | $C_L$ |

[Fig. 5] is clearly faster than [Fig. 3] and [Fig. 4]. Against the Miller designs, the normalized values compare as $2/C_L$ versus $1/C_c$, so in this model [Fig. 5] wins for $C_L<2C_c$; since its large-signal current grows beyond the quiescent $I_{SS}$, it has the highest slew capability in practice.
