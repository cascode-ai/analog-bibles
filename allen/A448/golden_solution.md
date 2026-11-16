# Golden Solution - A448

## Reference answer

DNL = ±1.275 LSB, at the MSB (midscale) transition 0111 1111 ↔ 1000 0000.

- 1 LSB = $V_{REF}/256$. Take the MSB capacitor $C(1 + \delta)$ and all others (including the terminating capacitor) $(1 - \delta)$ times nominal; the total stays 2C.
- $v_{OUT}(10000000) = C(1 + \delta)V_{REF}/2C$; $v_{OUT}(01111111) = C(1 - 2^{-7})(1 - \delta)V_{REF}/2C$.
- Step = $[1 + (2^8 - 1)\delta]$ LSB, so DNL = $(2^N - 1)\delta = 255 \times 0.005 = +1.275$ LSB; with the signs reversed the step is $1 - 1.275 = -0.275$ LSB, DNL = −1.275 LSB (the DAC is then nonmonotonic at that transition).
- An exhaustive check of all ±0.5 % corner combinations gives the same extremes at that transition.

## Grading notes

+2: ±1.275 LSB (±0.02, so a rounded 1.28 is fine) at the 01111111 ↔ 10000000 (MSB) transition; an optional extra-precision refinement (e.g. including the terminating capacitor's tolerance) that differs only in the fifth or sixth digit is not an error. +1: correct value and transition with only one sign given. 0: correct transition with the value from a different formula (e.g. 0.64 LSB, the INL expression). −2 (asserted as fact): an LSB or other minor transition named as the worst case, or a worst-case DNL below 0.5 LSB.
