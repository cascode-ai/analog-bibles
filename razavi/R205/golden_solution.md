# Golden Solution - R205

## Reference answer

For the intended sizing $W_{3,4} < W_{5,6}$: an inverting, high-gain S-curve centered at $V_{in1} = V_{in2}$, central slope $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}/(g_{m5} - g_{m3})$, saturating at $V_{out} = \pm(|V_{THP}| + \sqrt{2I_{SS}/\beta_5})$ (positive for low $V_{in1}$), with no hysteresis.
- Per side the load is the diode $M_5$ ($+g_{m5}$) in parallel with the negative conductance $-g_{m3}$ of the cross-coupled device, so the net load conductance $g_{m5} - g_{m3}$ is small but positive: high gain without regeneration (the feedback loop gain $(\beta_3/\beta_5)^2 < 1$ for all bias points with all devices saturated).
- Full steering, low $V_{in1}$ ($I_{D1} = 0$, $I_{D2} = I_{SS}$): the left node rises to $V_{DD}$ ($M_3$, drain at the left node and gate at the low right node, is on but must carry no current; $M_5$ is off); $M_4$ (gate at the left node, now $V_{DD}$) is off, so diode $M_6$ alone carries $I_{SS}$: right output $V_{DD} - |V_{THP}| - \sqrt{2I_{SS}/\beta_5}$. Hence $V_{out} = |V_{THP}| + \sqrt{2I_{SS}/\beta_5}$; the mirror value at high $V_{in1}$.
- If instead $W_{3,4} > W_{5,6}$, the net load conductance is negative and the circuit latches with hysteresis.

## Grading notes

+2: inverting S-curve with a high central gain $g_{m1}/(g_{m5} - g_{m3})$, ends at ±($|V_{THP}| + \sqrt{2I_{SS}/\beta_5}$) or an equivalent description (one output at $V_{DD}$, the other set by the diode carrying $I_{SS}$), and the dependence on $W_3$ vs $W_5$ (latch if $W_3 > W_5$) noted. +1: correct for $W_3 < W_5$ without mentioning the other case, or ends misdescribed. 0: generic diode-load S-curve with gain $g_{m1}/g_{m5}$. -2 (asserted as fact): hysteresis claimed for $W_3 < W_5$, gain $g_{m1}/(g_{m5} + g_{m3})$ (cross-coupled pair treated as extra diodes), or a non-inverting curve.
