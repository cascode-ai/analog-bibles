# Golden Solution - A206

## Reference answer

$v_{OUT}(\max)$ = +2.0 V.

When $v_{IN}$ is high, M1 is cut off and the whole 200 µA flows into the 10-kΩ resistor: $v_{OUT}$ = 200 µA × 10 kΩ = 2.0 V. Check: with $v_{IN}$ = +2.5 V, $V_{SG1}$ = 2.0 − 2.5 < 0, so M1 is indeed off (it stays off for any $v_{IN} > v_{OUT} - 0.7$ V). The ideal current source has 0.5 V of headroom left.

## Grading notes

+2: 2.0 V from M1 off and $I\cdot R_L$. +1: right value with a weak justification. 0: method right with an arithmetic slip. −2 (asserted as fact): $v_{OUT}(\max) = v_{IN}+|V_T|$ = 3.2 V or +2.5 V (the rail), or M1 assumed conducting at the maximum.
