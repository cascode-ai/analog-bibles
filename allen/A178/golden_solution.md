# Golden Solution - A178

## Reference answer

Circuit 6: $v_o(\max) = V_{DD} - V_{dsat}(\text{input, }2I) - V_{dsat}(\text{cascode}) = V_{DD} - (1+\sqrt2)V_{dsat,P}$, below the $V_{DD} - 2V_{dsat,P}$ of Circuits 2, 3 and 4.

Basis (per circuit; $g_{mP}$ = p-channel $g_m$ at $I$, so an n-channel device at $I$ has $g_{mN} = \sqrt2\,g_{mP}$ and a device at $2I$ has $\sqrt2$ times its value at $I$; $r_{dsN} = 1/(\lambda_NI)$, $r_{dsP} = r_{dsN}/2$; saturation voltages $V_{dsat,P} = \sqrt2\,V_{dsat,N}$, ×√2 at $2I$):
- C1: n-input + n-cascode, simple p-source load. $R_{out} \approx r_{dsP}$ = 0.5 $r_{dsN}$; $|A_v| \approx g_{mN}r_{dsP}$ = 0.71 $g_{mP}r_{dsN}$.
- C2: p-input + p-cascode, simple n-sink load. $R_{out} \approx r_{dsN}$; $|A_v| \approx g_{mP}r_{dsN}$ = 1.0 $g_{mP}r_{dsN}$.
- C3: n-input + n-cascode, p-cascode load. $R_{out} = (g_{mP}r_{dsP}^2)\|(g_{mN}r_{dsN}^2) \approx 0.21\,g_{mP}r_{dsN}^2$; $|A_v| \approx 0.30\,(g_{mP}r_{dsN})^2$.
- C4: p-input + p-cascode, n-cascode load. Same $R_{out}$ as C3; $|A_v| \approx 0.21\,(g_{mP}r_{dsN})^2$.
- C5: n-cascode on an n-input carrying $2I$ (extra p-source into the cascode source), simple p-source load. $R_{out} \approx r_{dsP}$; $|A_v| \approx g_{m,in}r_{dsP} = 2g_{mP}\cdot r_{dsN}/2$ = 1.0 $g_{mP}r_{dsN}$.
- C6: p-cascode on a p-input carrying $2I$ (extra n-sink at the cascode source), simple n-sink load. $R_{out} \approx r_{dsN}$; $|A_v| \approx \sqrt2 g_{mP}r_{dsN}$ = 1.41 $g_{mP}r_{dsN}$.
- Supply current: $I$ in C1–C4, $2I$ in C5 and C6.
- Highest output with all devices saturated, $V_{DD} - \sum|V_{DS(sat)}|$ of the devices above the output: C1 and C5 $V_{DD} - V_{dsat,P}$; C2, C3, C4 $V_{DD} - 2V_{dsat,P}$; C6 $V_{DD} - (1+\sqrt2)V_{dsat,P}$.
- Lowest output with all devices saturated: C2 and C6 $V_{dsat,N}$; C1, C3, C4 $2V_{dsat,N}$; C5 $(1+\sqrt2)V_{dsat,N}$ (above ground).
- With $g_{mP}r_{dsN} = 2/(\lambda_NV_{ov,P}) \gg 1$ the fully cascoded C3 and C4 have gains ~ $(g_mr_{ds})^2$, far above the others.

## Grading notes

+2: Circuit 6, with the observation that its p-channel input transistor carries $2I$ and so needs $\sqrt2$ times the saturation voltage. +1: Circuits 2, 3, 4 and 6 named as tied (two p-channel devices above the output) without the $2I$ refinement; or Circuit 6 alone with the $2I$ reason but a misread device stack or wrong $v_o(\max)$ expression in a supporting table (for Circuit 6 or another circuit) that does not change the choice; treat such misreads alike in every answer. 0: stacking argument correct but no choice. −2 (asserted as fact): Circuit 1 or 5 named as lowest, or Circuit 4 alone singled out with a wrong reason.
