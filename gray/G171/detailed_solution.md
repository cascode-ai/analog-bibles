# Detailed solution - G171

The input common-mode voltage $V_{IC}$ moves only the common-source node of the p-channel pair; the folding nodes are held fixed by $M_{11}$ and $M_{12}$. The range follows from keeping the tail device $M_5$ and the input devices $M_1$, $M_2$ in the active region, $|V_{DS}|\ge|V_{ov}|$. The two sides are symmetric, so $M_1$ represents both input devices.

### Step 1 — Common-source node

With both inputs at $V_{IC}$, each p-channel input device conducts half of the tail current with $|V_{ov}|=0.2$ V, so its source sits $|V_{GS}|=|V_t|+|V_{ov}|$ above its gate:

$$
V_S=V_{IC}+|V_t|+|V_{ov}|=V_{IC}+1.2\ \mathrm V .
$$

### Step 2 — Upper limit set by $M_5$

The tail device $M_5$ has its source at $V_{DD}$ and its drain at $V_S$; it stays active while $V_{SD5}\ge|V_{ov}|$:

$$
V_{DD}-(V_{IC}+1.2\ \mathrm V)\ge0.2\ \mathrm V
\;\Rightarrow\;
V_{IC}\le V_{DD}-|V_t|-2|V_{ov}|=V_{DD}-1.4\ \mathrm V .
$$

### Step 3 — Lower limit set by $M_1$, $M_2$

The drains of $M_1$ and $M_2$ are the folding nodes, i.e. the drains of the current sinks $M_{11}$, $M_{12}$ (and the sources of $M_{1A}$, $M_{2A}$). With $M_{11}$, $M_{12}$ biased at the edge of the active region, $V_{DS11}=V_{ov}$, so

$$
V_{D1}=-V_{SS}+V_{ov}=-V_{SS}+0.2\ \mathrm V,
$$

independent of $V_{IC}$. As $V_{IC}$ falls, $V_S$ approaches this fixed drain voltage. $M_1$ stays active while $V_{SD1}=V_S-V_{D1}\ge|V_{ov}|$:

$$
(V_{IC}+1.2\ \mathrm V)-(-V_{SS}+0.2\ \mathrm V)\ge0.2\ \mathrm V
\;\Rightarrow\;
V_{IC}\ge -V_{SS}+V_{ov}-|V_t|=-V_{SS}-0.8\ \mathrm V .
$$

The cascodes $M_{1A}$, $M_{2A}$ and the mirror $M_3$–$M_{4A}$ are not in series with the input pair's source-drain path, so they do not enter the input range.

### Step 4 — Common-mode input range

$$
-V_{SS}-0.8\ \mathrm V\le V_{IC}\le V_{DD}-1.4\ \mathrm V,
$$

or $-V_{SS}+V_{ov}-|V_t|\le V_{IC}\le V_{DD}-|V_t|-2|V_{ov}|$. The range extends 0.8 V below the negative supply. Folding places the drains of the input pair only one overdrive above $-V_{SS}$, instead of one diode drop (two-stage op amp) or two diode drops (telescopic cascode) above it, which is why the lower end improves so much.
