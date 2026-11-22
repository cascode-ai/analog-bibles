# Detailed solution - A530

To first order, each comparator input is a single RC node: its capacitance $C$ charges through the Thevenin resistance seen from that input back into the resistor network. Because the amplifier outputs are ideal voltage sources, $V_2$, $V_1$ and ground are ac grounds for this calculation. Compute the Thevenin resistance at each of the eight comparator inputs and compare the time constants.

### Step 1 — Model of each path

A step at $V_1$ or $V_2$ reaches comparator $k$ through its Thevenin resistance $R_{th,k}$, so its input responds with time constant

$$
\tau_k=R_{th,k}\,C .
$$

$R_{th,k}$ is the resistance looking from the comparator input into the series resistor and the tap, with $V_2$, $V_1$ and ground shorted.

### Step 2 — Thevenin resistance at each input

- **Comparator 8:** series $R$ from $V_2$ (an ac ground), so $R_{th}=R$. **Comparator 4:** series $R$ from $V_1$, so $R_{th}=R$.
- **Comparator 7** (tap $V_{2a}$): the tap sees $R$ up to $V_2$ in parallel with $3R$ down to $V_1$; adding the series $R/4$,
$$
R_{th}=R\parallel3R+\frac R4=\frac{3R}4+\frac R4=R .
$$
Comparator 5 (tap $V_{2c}$) is the mirror image: $3R\parallel R+R/4=R$.
- **Comparator 6** (tap $V_{2b}$, no series resistor): $2R\parallel2R=R$.
- **Comparators 3, 2, 1** (taps $V_{1a}$, $V_{1b}$, $V_{1c}$): the lower group lies between $V_1$ and ground, both ac grounds, so the same results hold: $R\parallel3R+R/4=R$ for comparators 3 and 1, and $2R\parallel2R=R$ for comparator 2.

| Comparator | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
|---|---|---|---|---|---|---|---|---|
| Tap resistance | 0 | $3R/4$ | $R$ | $3R/4$ | 0 | $3R/4$ | $R$ | $3R/4$ |
| Series resistor | $R$ | $R/4$ | 0 | $R/4$ | $R$ | $R/4$ | 0 | $R/4$ |
| $R_{th}$ | $R$ | $R$ | $R$ | $R$ | $R$ | $R$ | $R$ | $R$ |

### Step 3 — Relative delays

Every comparator input has the same time constant,

$$
\tau_1=\tau_2=\dots=\tau_8=RC ,
$$

so the relative delays are $1:1:\dots:1$. The added series resistors are chosen for exactly this purpose: without them the tap resistances alone, 0, $3R/4$, $R$, $3R/4$, …, would give unequal delays, and the comparators fed directly from $V_1$ and $V_2$ would be fastest.

This is the first-order, single-node estimate. The comparator capacitances also load one another through the shared string, so a full RC analysis gives somewhat different but comparable delays.
