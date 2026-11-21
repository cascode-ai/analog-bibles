# Detailed solution - G379

Each output node connects the drain of an NMOS input transistor ($M_1$ or $M_2$) to the drain of a PMOS current-source load ($M_3$ or $M_4$). The output can move until either transistor leaves saturation. Find the node voltages fixed by the input common-mode level, derive both limits, check the tail transistor, and centre the common-mode output between the limits.

### Step 1 — Common source voltage of the pair

With $V_{ic}=0$ and the differential input held near zero by the feedback loop, both gates sit at about 0 V and the pair splits the tail current equally. Each input transistor has $V_{GS}=V_{tn}+V_{ov}=0.6+0.2=0.8$ V, so the common source node is at

$$
V_S=0-0.8\ \mathrm V=-0.8\ \mathrm V .
$$

### Step 2 — Lower limit of each output

$M_1$ stays saturated while $V_{DS1}\ge V_{ov}$, i.e. its drain stays above its source by at least 0.2 V; equivalently $V_{GD1}\le V_{tn}$:

$$
V_{o1(\min)}=V_S+V_{ov}=-0.8+0.2=-0.6\ \mathrm V=V_{i1}-V_{tn}.
$$

Below this, $M_1$ enters the triode region and the gain collapses.

### Step 3 — Upper limit of each output

The PMOS load $M_3$ has its source at $V_{DD}=2.5$ V and stays saturated while $V_{SD3}\ge|V_{ov}|$:

$$
V_{o1(\max)}=V_{DD}-|V_{ov}|=2.5-0.2=2.3\ \mathrm V .
$$

By symmetry $V_{o2}$ has the same limits, set by $M_2$ and $M_4$.

### Step 4 — Tail transistor

$M_5$ has its source at $-V_{SS}=-2.5$ V and its drain at $V_S=-0.8$ V, so $V_{DS5}=1.7\ \mathrm V\gg V_{ov}=0.2$ V. It stays saturated and does not limit the swing; the CMFB circuit driving $V_{cmc}$ is assumed not to limit it either.

### Step 5 — Best common-mode output and peak differential output

Each output swings between $-0.6$ V and $+2.3$ V. In a fully differential output the two sides move in opposite directions by equal amounts, so the largest symmetric swing is obtained with $V_{OC}$ midway between the limits:

$$
V_{OC}=\frac{2.3\ \mathrm V+(-0.6\ \mathrm V)}{2}=0.85\ \mathrm V,
$$

which allows each output $\pm1.45$ V about 0.85 V. The peak differential output occurs when one output is at its maximum and the other at its minimum:

$$
V_{od(\mathrm{peak})}=V_{o1(\max)}-V_{o2(\min)}=2.3-(-0.6)=2.9\ \mathrm V,
$$

so $V_{od}$ can swing between $-2.9$ V and $+2.9$ V (5.8 V peak to peak), twice the single-ended swing amplitude.
