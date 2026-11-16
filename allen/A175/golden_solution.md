# Golden Solution - A175

## Reference answer

Circuits 1 and 5 (both ≈ $r_{dsP} = 1/(2\lambda_NI)$).

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

+2: Circuits 1 and 5: their output resistance is set by the simple p-channel current source, $r_{dsP}$, which is half of $r_{dsN}$ (C2, C6) because $\lambda_P = 2\lambda_N$. +1: only one of the two named (Circuit 5 alone without acknowledging the leading-order tie is +1). 0: correct expressions without a clear choice. −2 (asserted as fact): Circuits 2 or 6 claimed lower than 1/5, or a fully cascoded circuit named. Stating that Circuits 1 and 5 tie at leading order (both ≈ $r_{dsP}$) and adding that, with the $O(1/(g_mr_{ds}))$ terms kept, Circuit 5 is marginally lower is correct (+2): its cascode source node sees $r_{dsN}(2I)\|r_{dsP} = r_{dsN}/4$, so $R_{out5} \approx r_{dsP}/(1+2/(g_{mN}r_{dsN}))$ versus $R_{out1} \approx r_{dsP}/(1+1/(2g_{mN}r_{dsN}))$.
