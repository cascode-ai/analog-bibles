# Golden Solution - A444

## Reference answer

A gain error.

$C_L$ adds to the total capacitance at the top-plate node, so $v_{OUT} = \dfrac{1}{1 + C_L/2C}\,D\,V_{REF}$ ($D = \sum b_i 2^{-(i+1)}$): every output is scaled by the same factor. There is no offset (code 0 still gives 0 V) and no nonlinearity; the characteristic stays linear and monotonic, and the error, $\approx -(C_L/2C)D\,V_{REF}$, is proportional to the output and largest at full scale.

## Grading notes

+2: gain error, with the reason (uniform scaling by $2C/(2C + C_L)$, zero offset, linearity preserved). +1: "gain error" without a reason. 0: describes the attenuation correctly but names it ambiguously (e.g. "attenuation error" without saying it is proportional). −2 (asserted as fact): offset error, INL/DNL nonlinearity, or nonmonotonicity attributed to $C_L$.
