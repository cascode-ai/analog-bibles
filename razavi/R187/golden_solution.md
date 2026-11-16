# Golden Solution - R187

## Reference answer

An inverting S-curve, $V_{out} = -R_1(I_{D1} - I_{D2})$, going from $+I_{SS}R_1$ to $-I_{SS}R_1$ (if $I_{SS}R_1/2 < |V_{THP}|$), with central slope $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}R_1$; the output CM level stays constant.
- The gates of $M_3$, $M_4$ sit at the midpoint N of $R_1$–$R_2$, so both PMOS have the same $V_{SG}$ and carry the same current; KCL then forces that current to $I_{SS}/2$ each, and $V_N = V_{DD} - |V_{GS3}(I_{SS}/2)|$ for the whole sweep (self-biased loads).
- KCL at the left output: $V_X - V_N = R_1(I_{SS}/2 - I_{D1})$, and the opposite on the right, so $V_{out} = -R_1(I_{D1} - I_{D2})$; with full steering ($|V_{in1} - V_{in2}| > \sqrt{2I_{SS}/\beta_n}$) $V_{out} = \pm I_{SS}R_1$.
- Validity: the PMOS on the high side stays saturated only while $V_X - V_N \le |V_{THP}|$. If $I_{SS}R_1/2 > 0.8$ V, that PMOS enters triode before full steering and $V_{out}$ saturates at a smaller magnitude.

## Grading notes

+2: inverting S-curve, levels ±$I_{SS}R_1$ (or the stated triode limit), slope $-g_{m1}R_1$, and constant output CM level because the loads are biased from the output midpoint. +1: shape right with a factor-2 slip (±$I_{SS}R_1/2$ or slope $g_{m1}R_1/2$). 0: shape only. -2 (asserted as fact): $M_3$/$M_4$ treated as diode-connected (gain $g_{m1}/g_{m3}$), a non-inverting curve, or outputs to the rails.
