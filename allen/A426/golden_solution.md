# Golden Solution - A426

## Reference answer

$v_{out} = -\dfrac{7}{8}\left(\dfrac{b_0}{2} + \dfrac{b_1}{4} + \dfrac{b_2}{8} + \dfrac{b_3}{16}\right)V_{REF} = -\dfrac{7k}{128}V_{REF}$ for code k: 7/8 of the ideal characteristic.

- Inverting summer: $v_{out} = -R_0 V_{REF}\sum b_i/R_{i+1}$ with $R_0/R_1 = 7/16$, $R_0/R_2 = 7/32$, $R_0/R_3 = 7/64$, $R_0/R_4 = 7/128$.
- A uniform, monotonic staircase through the origin (no offset) with steps of 7/8 LSB (LSB = $V_{REF}/16$): |v_out| = 0, 0.0547, 0.109, … , 0.820 $V_{REF}$ at 1111 instead of the ideal 0.9375 $V_{REF}$.
- Pure gain error of −12.5 %: the deviation grows linearly with the code, reaching −1.875 LSB at 1111 (each step has DNL = −0.125 LSB). The output is negative for positive $V_{REF}$ (magnitude plotted against code).

## Grading notes

+2: a linear staircase through zero with slope 7/8 of the ideal (|v_out| = 7k/128 $V_{REF}$, ≈ 0.82 $V_{REF}$ at 1111), with the inverting sign noted or the magnitude explicitly plotted. The question asks only for the curve, so naming it a gain error with no offset is welcome but not required. +1: correct values and shape with the sign silently ignored, or one minor slip in the listed values. 0: right method (inverting summer with $R_0 = 7R/8$) but the values wrong throughout by a slip. −2 (asserted as fact): slope 8/7 (ratio inverted), an offset or nonlinearity/nonmonotonicity claimed, or the ideal characteristic.
