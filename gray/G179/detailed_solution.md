# Detailed solution - G179

Carry the common-mode input $V_{IC}$ through the two p-channel level shifts (follower, then input pair) to the common source node, and require every transistor to stay in the active (saturation) region, $|V_{DS}|\ge|V_{ov}|=0.1$ V. Every conducting device has $|V_{GS}|=|V_t|+|V_{ov}|=0.6$ V. The two halves are symmetric, so the left half represents both.

### Step 1 — Node voltages for a common-mode input

The p-channel follower $M_6$ has its source, which is the gate of $M_1$, one $|V_{GS}|$ above its gate, and $M_1$'s source is one $|V_{GS}|$ higher still:

$$
V_{G1}=V_{IC}+0.6\ \mathrm V,\qquad V_{S1}=V_{IC}+1.2\ \mathrm V .
$$

The diode-connected $M_3$ fixes the drain of $M_1$ at $V_{GS3}=V_t+V_{ov}=0.6$ V, and with equal currents the drain of $M_2$ is at the same voltage. The drains of $M_6$, $M_7$ are at $-V_{EE}=0$.

### Step 2 — Lower limit

$M_1$ stays saturated while $V_{SD1}\ge|V_{ov}|$:

$$
(V_{IC}+1.2\ \mathrm V)-0.6\ \mathrm V\ge0.1\ \mathrm V\;\Rightarrow\;V_{IC}\ge-0.5\ \mathrm V .
$$

$M_6$ needs $V_{SD6}=(V_{IC}+0.6\ \mathrm V)-0\ge0.1$ V, which gives the same $V_{IC}\ge-0.5$ V. $M_3$, $M_4$ remain saturated ($V_{DS}=0.6$ V).

### Step 3 — Upper limit

The tail source $M_5$ has its source at $V_{CC}$ and its drain at $V_{S1}$:

$$
V_{CC}-(V_{IC}+1.2\ \mathrm V)\ge0.1\ \mathrm V\;\Rightarrow\;V_{IC}\le V_{CC}-1.3\ \mathrm V .
$$

The follower sources $M_8$, $M_9$ (drains at $V_{G1}$) need $V_{CC}-(V_{IC}+0.6\ \mathrm V)\ge0.1$ V, i.e. $V_{IC}\le V_{CC}-0.7$ V, which is less restrictive.

### Step 4 — Common-mode input range

$$
-0.5\ \mathrm V\le V_{IC}\le V_{CC}-1.3\ \mathrm V,
$$

so the range includes the negative supply with 0.5 V to spare. The MOS version follows the bipolar one, with $|V_t|+|V_{ov}|=0.6$ V in place of $|V_{BE(on)}|=0.7$ V and $|V_{ov}|=0.1$ V in place of $|V_{CE(sat)}|$.
