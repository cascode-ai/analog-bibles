# Golden Solution - R122

## Reference answer

$A_v = -\dfrac{g_{m1}}{g_{m3} + \left(\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}}\right)\left(1 + \dfrac{1}{g_{m2}r_{O2}}\right)} = -\dfrac{g_{m1}g_{m2}r_{O1}r_{O2}r_{O3}}{g_{m2}g_{m3}r_{O1}r_{O2}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m2}r_{O2}r_{O3} + r_{O1} + r_{O3}} \approx -\dfrac{g_{m1}}{g_{m3}}$.

- $M_1$ (CS) drives node $A$ = drain of $M_3$ = gate of the follower $M_2$; $M_2$'s source is the output, loaded only by the ideal $I_1$; the output drives the gate of the PMOS $M_3$ (negative feedback around $A$).
- Follower: zero small-signal current in $M_2$ → $v_{out} = v_A\,g_{m2}r_{O2}/(1 + g_{m2}r_{O2})$.
- Node $A$: $-g_{m3}v_{out} - v_A/r_{O3} = g_{m1}v_{in} + v_A/r_{O1}$; substituting $v_A = v_{out}(1 + 1/(g_{m2}r_{O2}))$ gives the result. The load seen by $M_1$ is essentially $1/g_{m3}$ (like a diode-connected PMOS, closed through the follower).

## Grading notes

+2: the exact expression or an equivalent form, or $\approx -g_{m1}/g_{m3}$ with the exact form or a clear statement of the neglected terms. +1: $-g_{m1}/g_{m3}$ with correct reasoning but no mention of the approximation, or one slip. 0: correct node equations with an unfinished or wrongly simplified solution. -2 (asserted as fact): the feedback through $M_3$ ignored (gain $-g_{m1}(r_{O1}\|r_{O3})$), gate of $M_3$ read as connected to $A$ or to a fixed bias, $M_2$ read as a PMOS, output read at node $A$ with a different result, or positive gain.
