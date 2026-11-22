# Detailed solution - G412

Identify which capacitors are connected to the outputs in phase $\phi_1$, then evaluate the network in the DM and CM half circuits. The node $V_{cmc}$ lies on the axis of symmetry and has no other connection, because the CMC input draws no current.

### Step 1 — Network connected to the outputs in $\phi_1$

With $\phi_1$ on, $S_1$, $S_2$, $S_3$ connect the $C_1$ capacitors between $V_{CM}$ and $V_{CSBIAS}$, both ideal dc sources; $S_4$, $S_5$, $S_6$ are open, so $C_1$ is disconnected from the outputs. The only load is the permanent string

$$
V_{o1}\;-\;C_2\;-\;V_{cmc}\ \text{node}\;-\;C_2\;-\;V_{o2}.
$$

### Step 2 — DM load

For a DM output, $v_{o2}=-v_{o1}$, and the symmetric node $V_{cmc}$ between two equal capacitors stays at 0: it is an ac ground. In the DM half circuit each output therefore sees one $C_2$ to ground:

$$
C_{Ld}=C_2=0.5\ \mathrm{pF}.
$$

### Step 3 — CM load

For a CM output, $v_{o1}=v_{o2}=v_{oc}$. The $V_{cmc}$ node is connected only to the two $C_2$ capacitors (the CMC input is an open circuit for the passive load), so in the CM half circuit it is a floating node. No current can flow into it; it simply follows $v_{oc}$, and $C_2$ has no voltage change across it:

$$
C_{Lc}=0.
$$

### Step 4 — Result

In phase $\phi_1$: $C_{Ld}=0.5$ pF and $C_{Lc}=0$. $C_1$ does not load the outputs in this phase.
