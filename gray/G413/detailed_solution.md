# Detailed solution - G413

Identify which capacitors are connected to the outputs in phase $\phi_2$, then evaluate the network in the DM and CM half circuits. The node $V_{cmc}$ lies on the axis of symmetry and has no other connection, because the CMC input draws no current.

### Step 1 — Network connected to the outputs in $\phi_2$

With $\phi_2$ on, $S_4$ and $S_6$ connect the outer plates of the two $C_1$ capacitors to $V_{o1}$ and $V_{o2}$, and $S_5$ connects their common node to the $V_{cmc}$ node; $S_1$–$S_3$ are open. Each $C_1$ is then in parallel with the corresponding $C_2$, between an output and the $V_{cmc}$ node:

$$
V_{o1}\;-\;(C_1\parallel C_2)\;-\;V_{cmc}\ \text{node}\;-\;(C_1\parallel C_2)\;-\;V_{o2}.
$$

### Step 2 — DM load

For a DM output the symmetric $V_{cmc}$ node is an ac ground, so each output sees the parallel combination to ground:

$$
C_{Ld}=C_1+C_2=0.1\ \mathrm{pF}+0.5\ \mathrm{pF}=0.6\ \mathrm{pF}.
$$

### Step 3 — CM load

For a CM output the $V_{cmc}$ node has no path to ground (the CMC input is an open circuit for the passive load), so it floats and follows $v_{oc}$. No CM current flows through either capacitor:

$$
C_{Lc}=0.
$$

### Step 4 — Result and design implication

In phase $\phi_2$: $C_{Ld}=0.6$ pF and $C_{Lc}=0$. Compared with $\phi_1$ (0.5 pF), the DM load is larger by $C_1$. Making $C_1$ larger, for example to reduce the CM offset caused by switch charge injection, therefore increases the DM load the op amp must drive in this phase.
