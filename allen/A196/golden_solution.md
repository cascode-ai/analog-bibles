# Golden Solution - A196

## Reference answer

Implementation: bias the input with a dc current source $I_{BIAS}$ from $V_{DD}$ into the drain/gate of M4 and apply the signal $i_{in}$ at that node ($I_I = I_{BIAS}+i_{in}$); feed $I_{REG}$ from a current source; take the output current at the drain of M3, with a dc current source from $V_{DD}$ (equal to the quiescent $I_O$) supplying the bias so that only the signal $i_{out}$ flows in the load. Current gain $A_i = (W_2/L_2)/(W_4/L_4)$.

- Input resistance: the input node is the diode-connected M4 (only gates of M2 attached): $R_{in} = 1/(g_{m4}+g_{ds4}) \approx 1/g_{m4}$.
- Output resistance (input at ac ground): a test current $i_x$ into the drain of M3 flows into M2, so the drain of M2 moves by $v_s = i_xr_{ds2}$; M1 amplifies this to the gate of M3, $v_{g3} = -g_{m1}r_{ds1}v_s$ (ideal $I_{REG}$). From $i_x = g_{m3}(v_{g3}-v_s) + (v_x - v_s)/r_{ds3}$:
  $R_{out} = r_{ds2} + r_{ds3} + g_{m3}r_{ds3}r_{ds2}(1+g_{m1}r_{ds1}) \approx g_{m1}r_{ds1}\,g_{m3}r_{ds3}\,r_{ds2}$,
  i.e. the cascode output resistance boosted by the gain $g_{m1}r_{ds1}$ of the regulating amplifier (order $g_m^2r_{ds}^3$).

## Grading notes

+2: a workable single-ended current amplifier (input at the diode M4 with a bias source, output at M3's drain with its bias handled), $R_{in} \approx 1/g_{m4}$ and $R_{out} \approx g_{m1}r_{ds1}g_{m3}r_{ds3}r_{ds2}$ (exact form or equivalent). +1: both expressions right but the implementation sketched loosely (bias sources missing), or the exact $R_{out}$ with a slip. 0: only one of the two resistances right. −2 (asserted as fact): the input resistance given as $g_{m1}r_{ds1}g_{m3}r_{ds3}r_{ds2}$ (or any large value), $R_{out}$ of the simple cascode ($g_mr_{ds}^2$) claimed for the regulated version, or the input applied at the $I_{REG}$ node.
