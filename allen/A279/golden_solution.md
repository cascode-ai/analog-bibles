# Golden Solution - A279

## Reference answer

$A_v = \dfrac{v_{out}}{v_{id}} = \dfrac{g_{m1}g_{m6}}{(g_{ds2} + g_{ds4})(g_{ds6} + g_{ds7})} = \dfrac{2g_{m1}}{I_5(\lambda_2 + \lambda_4)}\cdot\dfrac{g_{m6}}{I_6(\lambda_6 + \lambda_7)}$ (with $v_{id}$ the + input minus the − input, gates of M2 and M1).

- First stage: a differential input $v_{id}$ gives $\pm g_{m1}v_{id}/2$ in M1 and M2; the M1 current is mirrored by M3–M4 and adds to the M2 current at the M2/M4 drains, so the current into the first-stage output node is $g_{m1}v_{id}$ ($g_{m1} = g_{m2}$).
- Resistance at that node: $r_{ds2}\|r_{ds4}$ → $v_1 = g_{m1}v_{id}/(g_{ds2} + g_{ds4})$ (inverting with respect to the + input).
- Second stage: M6 converts $v_1$ into $g_{m6}v_1$ flowing into $r_{ds6}\|r_{ds7}$ → $v_{out} = -g_{m6}v_1/(g_{ds6} + g_{ds7})$; the two inversions make the gain from the + input positive.

## Grading notes

+2: the product formula with the mirror doubling (full $g_{m1}v_{id}$ into the first node) and the parallel output conductances at each node, obtained by the intuitive current × resistance reasoning. +1: correct formula with the sign or the role of the mirror not explained. 0: one stage right. −2 (asserted as fact): first-stage current $g_{m1}v_{id}/2$ (mirror ignored, gain off by 2) presented as the result, or output resistances taken as single $r_{ds}$ values or as series sums.
