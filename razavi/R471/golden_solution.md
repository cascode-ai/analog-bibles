# Golden Solution - R471

## Reference answer

Each output slews at $I_{SS}/(2C_L)$ (one up, one down), so the differential output slews at $I_{SS}/C_L$, provided $I_P \ge I_{SS}$. If $I_P < I_{SS}$, one cascode device turns off: that output slews at only $(I_P - I_{SS}/2)/C_L$, the differential slew rate becomes $I_P/C_L$, and the folding node of the starved side collapses (slow recovery).

- Large step: one input transistor (say $M_1$) takes all of $I_{SS}$, the other is off.
- Side 1: the folding node receives $I_P$ and loses $I_{SS}$ to $M_1$, so the cascode carries $I_P - I_{SS}$ to the output, while the output-side source still carries $I_P - I_{SS}/2$. Net current at output 1: $-(I_{SS}/2)$ → falls at $I_{SS}/(2C_L)$.
- Side 2: the cascode carries the full $I_P$ to output 2, against the fixed $I_P - I_{SS}/2$. Net $+I_{SS}/2$ → rises at $I_{SS}/(2C_L)$.
- Differential output: $d(V_{out1} - V_{out2})/dt = I_{SS}/C_L$ in magnitude; the output CM level stays constant, so the CMFB is not disturbed.
- Requirement $I_P \ge I_{SS}$ keeps the side-1 cascode on ($I_P - I_{SS} \ge 0$).

## Grading notes

+2: single-ended slew rate $I_{SS}/(2C_L)$ and differential $I_{SS}/C_L$ (either clearly stated with which output it refers to), with the condition $I_P \ge I_{SS}$ (or the $I_P < I_{SS}$ case treated correctly). +1: correct value(s) without the condition, or only the differential value given with a correct derivation. 0: slewing current right but the capacitance bookkeeping off by a factor of 2 (e.g., $I_{SS}/C_L$ per output). -2 (asserted as fact): slew rate set by $I_P/C_L$ independent of $I_{SS}$ for $I_P > I_{SS}$, slew rate claimed infinite or set by small-signal bandwidth, or the cascode current claimed to stay constant during slewing.
