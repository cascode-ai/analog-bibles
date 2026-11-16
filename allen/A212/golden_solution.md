# Golden Solution - A212

## Reference answer

$v_{OUT}(\min)$ = −2.0 V.

For low $v_{IN}$ M1 is cut off and the 200-µA sink pulls its full current through the 10-kΩ resistor: $v_{OUT}$ = −200 µA × 10 kΩ = −2.0 V. M1 is off because $V_{GS1} = v_{IN} - v_{OUT}$ = −2.5 + 2.0 < 0.7 V.

## Grading notes

+2: −2.0 V with M1 off. +1: right value, weak justification. 0: slip. −2 (asserted as fact): −1.58 V (the p-channel circuit's maximum-current case), −2.5 V, or M1 assumed conducting.
