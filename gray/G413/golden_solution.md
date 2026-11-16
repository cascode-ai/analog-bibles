# Golden Solution - G413

## Reference answer

DM load $C_{Ld} = C_1 + C_2 = 0.6$ pF; CM load $C_{Lc} = 0$.

- With $\phi_2$ on, $S_4$ and $S_6$ connect the top plates of the $C_1$ capacitors to $V_{o1}$ and $V_{o2}$, and $S_5$ connects their common node to $V_{cmc}$. So each $C_1$ is in parallel with the corresponding $C_2$ between an output and the $V_{cmc}$ node.
- DM: $V_{cmc}$ node is an ac ground → each output sees $C_1 + C_2 = 0.6$ pF.
- CM: the $V_{cmc}$ node floats with $v_{oc}$ (no other connection), so no CM current flows: $C_{Lc} = 0$.
- The larger DM load in φ2 is why increasing $C_1$ (to reduce switch charge-injection offset) costs extra output loading.

## Grading notes

+2: DM 0.6 pF and CM 0. +1: DM right and CM ≈ 0.6 pF via a clearly explained Miller argument (different load definition), or a slip in one value. 0: only one mode right. −2 (asserted as fact): DM 0.5 pF (C1 omitted although connected), C1 placed in series with C2, or CM 0.6 pF claimed from the passive network.
