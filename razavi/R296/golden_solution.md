# Golden Solution - R296

## Reference answer

Associating a pole with each node (Miller approximation with low-frequency gains $A_1 = -g_{m1}r_{O1}$ from the gate of $M_1$ to node X, the drain of $M_1$, and $A_2 = -g_{m2}r_{O2}$ from X to the output):
$$\omega_{in} \approx \frac{1}{R_S[C_{GS1} + (1 + g_{m1}r_{O1})C_{GD1}]}$$
$$\omega_X \approx \frac{1}{r_{O1}[C_{GD1}(1 + \tfrac{1}{g_{m1}r_{O1}}) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})C_{GD2}]}$$
$$\omega_{out} \approx \frac{1}{r_{O2}[C_{DB2} + C_{GD2}(1 + \tfrac{1}{g_{m2}r_{O2}})]} \approx \frac{1}{r_{O2}(C_{DB2} + C_{GD2})}$$
- Node resistances: input $R_S$ (the gate draws no current); X: $r_{O1}$, since $I_1$ is ideal and the gate of $M_2$ is open; output: $r_{O2}$.
- Sources are grounded, so $C_{SB}$ plays no role.
- Caveat: both stages have large gains ($g_mr_O$), so the Miller estimates are rough. Node X, with the large Miller capacitance $(1 + g_{m2}r_{O2})C_{GD2}$ and resistance $r_{O1}$, is usually the dominant pole; $C_{GD2}$ then splits the X and output poles, so that the actual output pole lies near $g_{m2}C_{GD2}/[C_XC_{out} + (C_X + C_{out})C_{GD2}]$ rather than at $1/[r_{O2}(C_{DB2} + C_{GD2})]$ ($C_X$, $C_{out}$: grounded capacitances at X and the output). There are also right-half-plane zeros at $g_{m1}/C_{GD1}$ and $g_{m2}/C_{GD2}$.

## Grading notes

+2: three poles associated with the input, X and output nodes with the correct resistances ($R_S$, $r_{O1}$, $r_{O2}$) and capacitances, including Miller multiplication of $C_{GD1}$ by $1 + g_{m1}r_{O1}$ at the input and of $C_{GD2}$ by $1 + g_{m2}r_{O2}$ at node X; a more accurate analysis (pole splitting, or an exact nodal analysis with its characteristic cubic) is equally acceptable if its node equations are right. +1: one capacitance term missing (e.g., $C_{DB1}$, $C_{GD1}$ at X, or $C_{GD2}$ at the output) with the rest right; also +1 when an exact nodal analysis drops a term (e.g., the $-sC_{GD1}v_g$ feed-through at node X, which must read $(g_{m1} - sC_{GD1})v_g$), so that the asserted exact cubic is wrong while the dominant-pole estimate is still right. 0: one of the three poles wrong (e.g., Miller factor omitted at one node) or only two poles given. -2 (asserted as fact): wrong node resistances (e.g., $1/g_m$ at X or $R_S\|r_{O}$ at the input), Miller multiplication ignored at both nodes, or claims a single pole.
