# Golden Solution - G412

## Reference answer

DM load $C_{Ld} = C_2 = 0.5$ pF; CM load $C_{Lc} = 0$.

- With $\phi_1$ on, $C_1$ is connected between $V_{CM}$ and $V_{CSBIAS}$ and is disconnected from the outputs (switches $S_4$–$S_6$ open), so only the two $C_2$ capacitors load the outputs: $V_{o1}$–$C_2$–node $V_{cmc}$–$C_2$–$V_{o2}$.
- DM: node $V_{cmc}$ lies on the axis of symmetry and is an ac ground, so each output sees $C_2 = 0.5$ pF.
- CM: node $V_{cmc}$ has no other path (the CMC input draws no current), so it simply follows $v_{oc}$ and $C_2$ carries no CM current: $C_{Lc} = 0$.

## Grading notes

+2: DM 0.5 pF and CM 0. +1: DM right and CM given as ≈ $C_2$ through a Miller argument with $|a_{cmc}| \gg 1$, clearly explained (a different load definition than the one stated), or vice versa a correct CM with DM slip. 0: only one mode right. −2 (asserted as fact): $C_1$ included in the φ1 load (0.6 pF), DM load 0.25 pF (two $C_2$ in series treated as the DM half-circuit load), or CM load 0.5 pF claimed from the passive network.
