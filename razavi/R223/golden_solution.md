# Golden Solution - R223

## Reference answer

$V_{out1}/V_{in} = -g_{m1}r_{O1}$ and $V_{out2}/V_{in} = 0$.
- The drain of $M_1$ connects only to the ideal source $I_1$, so the small-signal drain current of $M_1$ must be zero: $i_1 = 0$.
- The ideal tail forces $i_1 + i_2 = 0$, so $i_2 = 0$ and $v_{out2} = -R_1i_2 = 0$.
- For $M_2$ (gate at ac ground, drain at $v_{out2} = 0$): $i_2 = -(g_{m2} + g_{mb2})v_P - v_P/r_{O2} = 0$, so $v_P = 0$.
- For $M_1$: $i_1 = g_{m1}v_{in} - (g_{m1} + g_{mb1})v_P + (v_{out1} - v_P)/r_{O1} = g_{m1}v_{in} + v_{out1}/r_{O1} = 0$, giving $v_{out1} = -g_{m1}r_{O1}v_{in}$ (the intrinsic gain). Body effect plays no role because P does not move.

## Grading notes

Two results, equal weight. +2: $-g_{m1}r_{O1}$ and 0, with the zero-current reasoning. +1: both right with incomplete reasoning, or $V_{out1}/V_{in}$ written as $-(1 + g_{m1}r_{O1})$ type slip with $V_{out2} = 0$. 0: one of the two right. -2 (asserted as fact): $V_{out2}/V_{in} = g_mR_1/2$ (or another nonzero value from a standard differential-pair analysis), $V_{out1}/V_{in}$ infinite, or P treated as a virtual ground giving $-g_{m1}r_{O1}/2$-type results with a nonzero $V_{out2}$.
