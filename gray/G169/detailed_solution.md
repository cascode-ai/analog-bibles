# Detailed solution - G169

Express every node voltage along the input path in terms of the input common-mode voltage $V_{IC}$, then require each device in that path to stay in the active (saturation) region, $|V_{DS}|\ge|V_{ov}|$. By symmetry, $M_2$ and $M_{2A}$ give the same limits as $M_1$ and $M_{1A}$, so only the left side is analysed.

### Step 1 — Node voltages of the input stage

With both inputs at $V_{IC}$, each p-channel input device carries half of the tail current with $|V_{ov}|=0.2$ V, so its source-gate voltage is $|V_{GS}|=|V_t|+|V_{ov}|=1.2$ V. The common source node of $M_1$–$M_2$ is therefore

$$
V_S=V_{IC}+|V_t|+|V_{ov}|=V_{IC}+1.2\ \mathrm V.
$$

$M_9$ has its source at $V_S$ and is diode-connected, so the cascode gate voltage $V_{G,A}=V_S-|V_{GS9}|$ moves with $V_S$. $I_C$ and the size of $M_9$ are chosen so that $M_1$ sits at the edge of the active region, $|V_{DS1}|=|V_{ov}|$. The drain of $M_1$ (the source of $M_{1A}$) is then

$$
V_{D1}=V_S-|V_{ov}|=V_{IC}+1.0\ \mathrm V .
$$

Because $V_{G,A}$ and hence $V_{D1}$ track $V_S$, this condition holds for every $V_{IC}$; $M_1$ never limits the range by itself. (Consistency: $|V_{GS1A}|=1.2$ V puts $V_{G,A}=V_S-1.4$ V, so $M_9$ runs at $|V_{GS9}|=1.4$ V, i.e. its own overdrive is 0.4 V, which the problem allows.)

The drain of $M_{1A}$ is the top of the diode-connected stack $M_3$–$M_{3A}$. Each n-channel diode carries the same current with $V_{GS}=V_t+V_{ov}=1.2$ V, so

$$
V_{D1A}=-V_{SS}+2(V_t+V_{ov})=-V_{SS}+2.4\ \mathrm V .
$$

This node does not depend on $V_{IC}$.

### Step 2 — Upper limit set by the tail device $M_5$

$M_5$ has its source at $V_{DD}$ and its drain at $V_S$. It stays active while $V_{SD5}\ge|V_{ov}|$:

$$
V_{DD}-(V_{IC}+|V_t|+|V_{ov}|)\ge|V_{ov}|
\;\Rightarrow\;
V_{IC}\le V_{DD}-|V_t|-2|V_{ov}|=V_{DD}-1.4\ \mathrm V .
$$

### Step 3 — Lower limit set by the cascode device $M_{1A}$

As $V_{IC}$ falls, the source of $M_{1A}$ ($V_{D1}=V_{IC}+1.0$ V) falls toward its fixed drain voltage. $M_{1A}$ stays active while $V_{SD,1A}\ge|V_{ov}|$:

$$
(V_{IC}+1.0\ \mathrm V)-(-V_{SS}+2.4\ \mathrm V)\ge0.2\ \mathrm V
\;\Rightarrow\;
V_{IC}\ge -V_{SS}+1.6\ \mathrm V .
$$

Symbolically, $V_{IC}\ge -V_{SS}+2(V_t+V_{ov})+|V_{ov}|-|V_t|=-V_{SS}+|V_t|+3|V_{ov}|$ with $V_t=|V_t|$. The mirror devices $M_3$, $M_{3A}$ are diode-connected and always saturated; $M_4$, $M_{4A}$ concern the output node, not the input range.

### Step 4 — Common-mode input range

Combining the two limits:

$$
-V_{SS}+1.6\ \mathrm V\le V_{IC}\le V_{DD}-1.4\ \mathrm V,
$$

or $-V_{SS}+|V_t|+3|V_{ov}|\le V_{IC}\le V_{DD}-|V_t|-2|V_{ov}|$. The range is $V_{DD}+V_{SS}-3.0$ V wide. For comparison, in the uncascoded two-stage op amp the drain of $M_1$ sits one diode drop above $-V_{SS}$, and $V_{SD1}\ge|V_{ov}|$ gives $V_{IC}\ge -V_{SS}+V_t-|V_t|+|V_{ov}|=-V_{SS}+0.2$ V. The cascode in series with the input pair raises the lower limit by 1.4 V, because the drain of $M_{1A}$ must sit two diode drops above $-V_{SS}$ while $M_1$ and $M_{1A}$ each need $|V_{ov}|$ across them.
