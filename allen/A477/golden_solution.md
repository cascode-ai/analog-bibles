# Golden Solution - A477

## Reference answer

$v_{OUT}(\phi_2) = V_{REF}\left(\frac{b_0}{2} + \frac{b_1}{4}\right) + \frac{V_{REF}}{k}\left(\frac{b_2}{2} + \frac{b_3}{4}\right)$ (ideal 4-bit DAC for $k = 4$).
For $k = 2$: $v_{OUT} = V_{REF}\left(\frac{b_0}{2} + \frac{b_1}{4} + \frac{b_2}{4} + \frac{b_3}{8}\right)$; INL $= +3$ LSB and 0 LSB; DNL $= +1$ LSB and $-3$ LSB; the converter is not monotonic.

Derivation:
- $\phi_1$: the left plates of the $C/2$ and $C/4$ capacitors of the upper 2-bit DAC are at $V_{REF}$ (of the lower DAC at $V_{REF}/k$), their right plates are grounded, and the feedback capacitor $C$ is shorted ($v_{OUT} = 0$).
- $\phi_2$: the left plates go to ground and the bus is connected to the virtual ground. A capacitor whose bit switch is closed goes from $V_{ref,i}$ (the reference of its DAC, $V_{REF}$ or $V_{REF}/k$) to 0 V across it, delivering $C_i V_{ref,i}$ to the feedback capacitor with a sign that makes the output positive: $v_{OUT} = \sum b_i (C_i/C)V_{ref,i}$, i.e. $\frac{1}{2}b_0 V_{REF} + \frac{1}{4}b_1 V_{REF} + \frac{1}{2}b_2\frac{V_{REF}}{k} + \frac{1}{4}b_3\frac{V_{REF}}{k}$.
- $k = 2$ (1 LSB $= V_{REF}/16$, code $= 4m + n$): output $= 4m + 2n$ LSB, error $= n$ = 0 … +3 LSB; steps 2 LSB in a group (DNL +1) and −2 LSB at 0011→0100, 0111→1000, 1011→1100 (DNL −3); the output decreases there, so it is nonmonotonic.

## Grading notes

+2: correct expression (positive sign, $1/k$ on the lower DAC), INL +3/0 LSB, DNL +1/−3 LSB and "nonmonotonic". An output with an overall negative sign is acceptable only if justified by the answer's own (consistent) charge analysis; the INL/DNL magnitudes must still be right. +1: expression correct and INL/DNL right but monotonicity not stated, or one INL/DNL value wrong by a slip. 0: correct expression but INL/DNL wrong, or INL/DNL right with a wrong weight in the expression. −2 (asserted as fact): weights of $b_0$, $b_1$ swapped with $b_2$, $b_3$, the converter called monotonic for k = 2, or $V_{REF}/k$ multiplied instead of divided.
