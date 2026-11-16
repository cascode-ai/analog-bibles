# Golden Solution - A443

## Reference answer

$v_{OUT} = \dfrac{2C}{2C + C_L}\left(\dfrac{b_0}{2} + \dfrac{b_1}{4} + \cdots + \dfrac{b_{N-1}}{2^N}\right)V_{REF} = \dfrac{1}{1 + C_L/2C}\sum_{i=0}^{N-1} b_i 2^{-(i+1)}V_{REF}$.

Charge conservation on the top-plate node (zero charge after φ1): $C_{eq}(V_{REF} - v_{OUT}) = (2C - C_{eq} + C_L)v_{OUT}$ with $C_{eq} = \sum b_i C/2^i$, so $v_{OUT} = C_{eq}V_{REF}/(2C + C_L)$.

## Grading notes

+2: the expression above or an equivalent ($C_{eq}V_{REF}/(2C + C_L)$ with $C_{eq}$ defined). +1: correct form with a slip in the bit weights. 0: correct method with $C_L$ added to the wrong side of the divider in a way that changes the result slightly. −2 (asserted as fact): $C_L$ in the numerator, $v_{OUT}$ unaffected by $C_L$, or the array total taken as $C$ instead of 2C.
