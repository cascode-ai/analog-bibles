# Golden Solution - R191

## Reference answer

An inverting curve with three regions on each side: a central region of gain $g_{m1}/g_{m3}$, a sharp jump when one diode load turns off, and flat ends at $V_{out} = \pm[\,|V_{THP}| + \sqrt{2(I_{SS} - I_P)/\beta_p}\,]$ (positive for low $V_{in1}$).
- At balance each diode ($M_3$, $M_4$) carries $I_{SS}/2 - I_P$; near $V_{in1} = V_{in2}$ the slope is $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}/g_{m3}$, higher than with plain diode loads because $g_{m3}$ is evaluated at the reduced current.
- When $|I_{D1} - I_{D2}|$ reaches $I_{SS} - 2I_P$, the diode on the low-current side turns off. That node is then driven only by the current source ($M_5$ or $M_6$) against a smaller NMOS current, so it shoots up from $V_{DD} - |V_{THP}| = 2.2$ V toward $V_{DD}$ (the PMOS source entering triode): a near-vertical step in $V_{out}$.
- Full steering (low $V_{in1}$): $M_1$ off, left output = $V_{DD}$; right output: $M_6$ supplies $I_P$, diode $M_4$ carries $I_{SS} - I_P$: $V_{DD} - |V_{THP}| - \sqrt{2(I_{SS} - I_P)/\beta_p}$. So $V_{out} = |V_{THP}| + \sqrt{2(I_{SS} - I_P)/\beta_p}$; the mirror value for high $V_{in1}$.
- (Example with $I_{SS}$ = 1 mA, $I_P$ = 0.4 mA, $W/L$ = 50/0.5: the kink is at $|V_{out}| \approx 0.32$ V and the ends at ±1.36 V.)

## Grading notes

+2: inverting curve centered at $V_{in1} = V_{in2}$ with central slope $-g_{m1}/g_{m3}$ (diodes at reduced current), recognition that a diode load turns off when the current imbalance exceeds $I_{SS} - 2I_P$ with the node then rising steeply toward $V_{DD}$, and asymmetric-node end levels (one output at $V_{DD}$, the other at $V_{DD} - |V_{THP}| - \sqrt{2(I_{SS} - I_P)/\beta_p}$). +1: correct central region and ends, but the diode cut-off step not described. 0: plain diode-load S-curve with ends at ±$\sqrt{2I_{SS}/\beta_p}$ or similar, no role for $M_5$/$M_6$. -2 (asserted as fact): a non-inverting curve, $M_5$/$M_6$ treated as loads that keep both outputs saturated with gain $g_{m1}(r_{O1}\|r_{O5})$, or outputs limited at 2.2 V on the high side.
