# Golden Solution - R089

## Reference answer

$V_{out}$ first rises along the resistive divider line, peaks just after $M_1$ turns on, and then falls (inverting), with $M_1$ going from saturation into triode.

- $V_{in} < 0.7$ V: $M_1$ off; $R_F$ connects the input source to the output: $V_{out} = \dfrac{R_FV_{DD} + R_DV_{in}}{R_D+R_F}$, starting at $V_{DD}R_F/(R_D+R_F)$, slope $R_D/(R_D+R_F) > 0$.
- $V_{in} > 0.7$ V, $M_1$ saturated ($V_{out} > V_{in} - 0.7$): $(V_{DD} - V_{out})/R_D + (V_{in} - V_{out})/R_F = \tfrac12\beta(V_{in} - 0.7)^2$; slope $= (1/R_F - g_m)(R_D\|R_F)$: still positive just above 0.7 V, zero where $g_m = 1/R_F$, i.e. at $V_{in} = 0.7 + 1/(\beta R_F)$ (maximum of $V_{out}$), negative beyond, tending to $-g_m(R_D\|R_F)$ once $g_m \gg 1/R_F$.
- $M_1$ enters triode at $V_{out} = V_{in} - 0.7$; the fall continues with a decreasing slope; at $V_{in} = V_{DD}$, $V_{out}$ is low, set by $(3 - V_{out})(1/R_D + 1/R_F) = \beta[2.3V_{out} - V_{out}^2/2]$.
- The current in $R_F$ reverses (flows from input to output) once $V_{in} > V_{out}$.
- Transition points: turn-on at $V_{in} = 0.7$ V ($V_{out} = (R_FV_{DD} + 0.7R_D)/(R_D+R_F)$), peak at $g_m = 1/R_F$, triode entry at $V_{out} = V_{in} - 0.7$ V.

## Grading notes

+2: rising divider line below 0.7 V, turn-on at 0.7 V, a maximum where $g_m = 1/R_F$ (or at least the statement that the feedforward through $R_F$ keeps $V_{out}$ rising briefly before it falls), then an inverting fall with triode entry at $V_{out} = V_{in} - 0.7$ V and a low final value. +1: the peak missed (fall starting right at 0.7 V) but otherwise correct. 0: $V_{out}$ taken as $V_{DD}$ below 0.7 V (ignoring $R_F$) with a correct falling part. -2 (asserted as fact): non-inverting overall, saturation and triode regions swapped, or $R_F$ treated as feedback through a source resistance so that the gain is set by $R_F$ alone.
