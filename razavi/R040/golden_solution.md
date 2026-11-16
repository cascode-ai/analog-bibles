# Golden Solution - R040

## Reference answer

$f_T$ is independent of $R_G$ because the gate is driven by a current, and every section has the same ratio $g_m/C$.
- Section $k$ has transconductance $g_m/n$, gate capacitance $C/n$ (with $C = C_{GS} + C_{GD}$) to ac ground, and its gate node voltage $V_k$; the gate resistances $R_G/n$ only connect the sections in series (ladder) or connect each gate to the common input. There is no other path for the input current.
- KCL: the input current $I_{in}$ must end up in the capacitors: $I_{in} = \sum_k j\omega(C/n)V_k$, whatever the values of the resistances, so $\sum_k V_k = nI_{in}/(j\omega C)$.
- Drain current (drains in parallel, at ac ground): $I_{out} = \sum_k (g_m/n)V_k = (g_m/n)\cdot nI_{in}/(j\omega C) = g_mI_{in}/(j\omega C)$.
- Hence $|I_{out}/I_{in}| = g_m/[\omega(C_{GS} + C_{GD})]$ and $f_T = g_m/[2\pi(C_{GS} + C_{GD})]$, independent of $R_G$ and $n$. ($R_G$ does matter when the gate is driven from a voltage source, e.g., for $f_{max}$ and noise, but not for the current-gain-based $f_T$.)

## Grading notes

+2: argument that with current drive all input current flows into the gate capacitances regardless of the series resistances, and that the drain current is $g_m/C$ times the total capacitor charge current because every section has the same $g_m/C$ ratio; conclusion $f_T$ unchanged. A lumped single-$R_G$ proof extended convincingly to n sections is fine. +1: correct for a single lumped $R_G$ but the distributed case only asserted. 0: correct conclusion with a hand-waving argument. -2 (asserted as fact): $f_T$ reduced by $R_G$ (e.g., an extra pole at $1/(R_GC)$ in the current gain), or $f_T$ depending on n.
