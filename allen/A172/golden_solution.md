# Golden Solution - A172

## Reference answer

Circuit 3.

Basis (per circuit; $g_{mP}$ = p-channel $g_m$ at $I$, so an n-channel device at $I$ has $g_{mN} = \sqrt2\,g_{mP}$ and a device at $2I$ has $\sqrt2$ times its value at $I$; $r_{dsN} = 1/(\lambda_NI)$, $r_{dsP} = r_{dsN}/2$; saturation voltages $V_{dsat,P} = \sqrt2\,V_{dsat,N}$, ×√2 at $2I$):
- C1: n-input + n-cascode, simple p-source load. $R_{out} \approx r_{dsP}$ = 0.5 $r_{dsN}$; $|A_v| \approx g_{mN}r_{dsP}$ = 0.71 $g_{mP}r_{dsN}$.
- C2: p-input + p-cascode, simple n-sink load. $R_{out} \approx r_{dsN}$; $|A_v| \approx g_{mP}r_{dsN}$ = 1.0 $g_{mP}r_{dsN}$.
- C3: n-input + n-cascode, p-cascode load. $R_{out} = (g_{mP}r_{dsP}^2)\|(g_{mN}r_{dsN}^2) \approx 0.21\,g_{mP}r_{dsN}^2$; $|A_v| \approx 0.30\,(g_{mP}r_{dsN})^2$.
- C4: p-input + p-cascode, n-cascode load. Same $R_{out}$ as C3; $|A_v| \approx 0.21\,(g_{mP}r_{dsN})^2$.
- C5: n-cascode on an n-input carrying $2I$ (extra p-source into the cascode source), simple p-source load. $R_{out} \approx r_{dsP}$; $|A_v| \approx g_{m,in}r_{dsP} = 2g_{mP}\cdot r_{dsN}/2$ = 1.0 $g_{mP}r_{dsN}$.
- C6: p-cascode on a p-input carrying $2I$ (extra n-sink at the cascode source), simple n-sink load. $R_{out} \approx r_{dsN}$; $|A_v| \approx \sqrt2 g_{mP}r_{dsN}$ = 1.41 $g_{mP}r_{dsN}$.
- With $g_{mP}r_{dsN} = 2/(\lambda_NV_{ov,P}) \gg 1$ the fully cascoded C3 and C4 have gains ~ $(g_mr_{ds})^2$, far above the others.

## Grading notes

+2: Circuit 3, with the reason that it is fully cascoded (output resistance ~ $g_mr_{ds}^2$) and has the n-channel (higher-$g_m$) input, so it beats Circuit 4 by $\sqrt2$. +1: Circuits 3 and 4 named together (both fully cascoded) without separating them. 0: correct reasoning about cascoding but no choice made. −2 (asserted as fact): any single-cascode circuit (1, 2, 5, 6) named as highest, or Circuit 4 alone claimed higher than 3.
