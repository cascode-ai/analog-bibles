# Golden Solution - R019

## Reference answer

$V_{out} = 0$ until $V_{in} \approx 1.98$ V; above that the PMOS (source at $V_{in}$, gate at 1 V) conducts in saturation and $V_{out} = \tfrac12\beta_pR_1(V_{in} - 1 - |V_{TH}|)^2$ rises quadratically; if $\beta_pR_1$ is large enough that $V_{out}$ exceeds $1 + |V_{TH}| \approx 1.8$ V, $M_1$ enters triode and $V_{out}$ approaches $V_{in}$.
- The source is the $V_{in}$ node (higher potential), $V_{SG} = V_{in} - 1$, $V_{BS} = 3 - V_{in}$, $|V_{TH}| = 0.8 + 0.4(\sqrt{3.8 - V_{in}} - \sqrt{0.8})$.
- Turn-on: $V_{in} - 1 = |V_{TH}|$ gives $V_{in} \approx 1.98$ V ($|V_{TH}| \approx 0.98$ V there; 1.8 V without body effect).
- Saturation while $V_{out} < 1 + |V_{TH}|$ (drain at most $|V_{TH}|$ above the gate): $V_{out} = \tfrac12\beta_pR_1(V_{in} - 1 - |V_{TH}|)^2$. At $V_{in} = 3$ V the overdrive is 1.2 V ($|V_{TH}| = 0.8$ V), so $V_{out} = 0.72\beta_pR_1$ (in V when $\beta_p$ in A/V², $R_1$ in Ω), unless triode limits it.
- Always $V_{out} \le V_{in}$.

## Grading notes

+2: PMOS with source at $V_{in}$, zero output until $V_{in} \approx 1.98$ V (body effect from the bulk at 3 V; ±0.05 V), quadratic rise in saturation afterwards, possible triode with $V_{out} \to V_{in}$ for large $\beta_pR_1$. +1: turn-on at 1.8 V (body effect ignored), otherwise right. 0: correct turn-on but wrong region description above it. -2 (asserted as fact): output nonzero at small $V_{in}$, the device treated as an NMOS, or the source taken at the $V_{out}$ node.
