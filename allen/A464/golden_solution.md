# Golden Solution - A464

## Reference answer

$x = 2^M = 8$.

With LSB-subDAC reference $V_{REF}/x$, $v_{OUT} = \left(\frac{b_0}{2} + \frac{b_1}{4} + \frac{b_2}{8}\right)V_{REF} + \left(\frac{b_3}{2} + \frac{b_4}{4} + \frac{b_5}{8}\right)\frac{V_{REF}}{x}$. For a 6-bit binary DAC the LSB-subDAC terms must be $b_3/16 + b_4/32 + b_5/64$, so $1/x = 1/8$: the full scale of the LSB subDAC must equal one LSB of the MSB subDAC ($V_{REF}/8$).

## Grading notes

+2: $x = 8$ with a correct justification (LSB-subDAC full scale equals one MSB-subDAC LSB, or matching the binary weights). +1: $x = 8$ with no or a muddled justification. 0: not applicable beyond that. −2 (asserted as fact): any other value (e.g. 4 or 64).
