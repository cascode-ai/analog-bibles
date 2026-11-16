# Golden Solution - A458

## Reference answer

$v_{OUT} = \dfrac{C}{C_F}\left(b_0 + \dfrac{b_1}{2} + \dfrac{b_2}{4} + \dfrac{b_3}{8}\right)V_{REF}$, positive for the battery polarity shown; with $C_F = 2C$, $v_{OUT} = \left(\dfrac{b_0}{2} + \dfrac{b_1}{4} + \dfrac{b_2}{8} + \dfrac{b_3}{16}\right)V_{REF}$.

The ladder node voltages during φ2 are $-V_{REF}$, $-V_{REF}/2$, $-V_{REF}/4$, $-V_{REF}/8$ (each node sees 2C to its right, so each series 2C halves the voltage); the shunt capacitor of each bit that is 1 transfers the charge $-C\,V_{node}$ to the summing node, which the inverting charge amplifier converts to $v_{OUT} = -(C/C_F)\sum b_iV_{node,i}$.

## Grading notes

+2: the expression with the C/C_F factor, binary weights $b_0$ largest, and positive sign. +1: correct weights and factor with the sign wrong (battery polarity misread) or $C_F = 2C$ assumed without saying so. 0: correct ladder division but the charge transfer to $C_F$ wrong by a constant factor. −2 (asserted as fact): equal weights, $b_3$ as the MSB, or weights from a plain binary-weighted array (1, 1/2, 1/4, 1/8 relative to a total capacitance) that ignore the ladder.
