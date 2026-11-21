# Detailed solution - G170

Build the complementary version of the first stage, then find the output limits by requiring the two devices stacked on each side of the output node to stay active, $|V_{DS}|\ge|V_{ov}|$. The lower limit depends on $V_{IC}$, so the swing is maximized by putting $V_{IC}$ as low as the tail device allows.

### Step 1 — The circuit

- Tail: n-channel $M_5$ from $-V_{SS}$ to the common-source node S, biased as a current source.
- Input pair: n-channel $M_1$, $M_2$ with sources at S and gates at the two inputs.
- Cascodes: n-channel $M_{1A}$, $M_{2A}$ on the drains of $M_1$, $M_2$. Their common gate GA is the drain of the diode-connected n-channel $M_9$, whose source is at S and which is fed by $I_C$ from $V_{DD}$, so $V_{GA}=V_S+V_{GS9}$.
- Load: p-channel high-swing cascode mirror at $V_{DD}$. $M_3$, $M_4$ (sources at $V_{DD}$) have their gates at the mirror input node X (the drain of $M_{3A}$ and $M_{1A}$); $M_{3A}$, $M_{4A}$ have their gates at a separate bias $V_{BP}$ chosen so that $M_3$, $M_4$ sit at $V_{SD}=|V_{ov}|$.
- Output: the node joining the drains of $M_{2A}$ and $M_{4A}$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Upper output limit

The high-swing bias puts the source of $M_{4A}$ at $V_{DD}-|V_{ov}|$. $M_{4A}$ stays active while $V_{SD,4A}\ge|V_{ov}|$:

$$
V_O\le V_{DD}-|V_{ov}|-|V_{ov}|=V_{DD}-2|V_{ov}|=V_{DD}-0.4\ \mathrm V .
$$

No threshold appears, because the mirror's gate-source drop is not in the output path; this limit is independent of $V_{IC}$.

### Step 3 — Lower output limit as a function of $V_{IC}$

With both inputs at $V_{IC}$, each input device conducts with $V_{GS}=V_t+V_{ov}=1.2$ V, so

$$
V_S=V_{IC}-V_t-V_{ov}=V_{IC}-1.2\ \mathrm V .
$$

$M_9$ and $I_C$ hold $M_2$ at the edge of the active region for any $V_{IC}$, so the source of $M_{2A}$ is $V_{D2}=V_S+V_{ov}=V_{IC}-1.0$ V. $M_{2A}$ stays active while $V_{DS,2A}\ge V_{ov}$:

$$
V_O\ge V_{IC}-1.0\ \mathrm V+0.2\ \mathrm V=V_{IC}-V_t+V_{ov}=V_{IC}-0.8\ \mathrm V .
$$

The output range is therefore $V_{IC}-0.8\ \mathrm V\le V_O\le V_{DD}-0.4$ V, a swing of $V_{DD}-V_{IC}+0.4$ V, which grows as $V_{IC}$ falls.

### Step 4 — Optimum common-mode input and resulting swing

$V_{IC}$ cannot fall indefinitely: the tail device $M_5$ needs $V_{DS5}=V_S+V_{SS}\ge V_{ov}$, i.e.

$$
V_{IC}-V_t-V_{ov}+V_{SS}\ge V_{ov}
\;\Rightarrow\;
V_{IC}\ge -V_{SS}+V_t+2V_{ov}=-V_{SS}+1.4\ \mathrm V .
$$

The upper bound on $V_{IC}$ (set by $M_{1A}$ against node X near $V_{DD}$) is far above this and plays no role. The optimum is the lowest allowed value, $V_{IC}=-V_{SS}+1.4$ V. Then the minimum output is

$$
V_{O,\min}=-V_{SS}+1.4\ \mathrm V-0.8\ \mathrm V=-V_{SS}+0.6\ \mathrm V,
$$

which is just one overdrive across each of $M_5$, $M_2$ and $M_{2A}$. The output range is $-V_{SS}+0.6\ \mathrm V\le V_O\le V_{DD}-0.4$ V, a peak-to-peak swing of

$$
(V_{DD}-0.4\ \mathrm V)-(-V_{SS}+0.6\ \mathrm V)=V_{DD}+V_{SS}-1.0\ \mathrm V,
$$

five overdrives less than the total supply. For example, ±1.5 V supplies give 2.0 V peak-to-peak.
