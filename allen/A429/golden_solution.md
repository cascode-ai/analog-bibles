# Golden Solution - A429

## Reference answer

INL = +0.5 LSB and −1.0 LSB; DNL = +0.5 LSB and −1.5 LSB (the converter is also nonmonotonic).

- Actual levels (LSB), codes 0000 … 1111: 0, 1, 2.5, 3.5, 3, 4, 5.5, 6.5, 8, 9, 10.5, 11.5, 11, 12, 13.5, 14.5.
- INL (actual − ideal): 0, 0, +0.5, +0.5, −1, −1, −0.5, −0.5, 0, 0, +0.5, +0.5, −1, −1, −0.5, −0.5 → +0.5 LSB, −1.0 LSB.
- DNL (step − 1): 0, +0.5, 0, −1.5, 0, +0.5, 0, +0.5, 0, +0.5, 0, −1.5, 0, +0.5, 0 → +0.5 LSB, −1.5 LSB (at 0011→0100 and 1011→1100, where the output drops by 0.5 LSB).
- The levels correspond to bit weights 8, 3, 2.5, 1 LSB.

## Grading notes

+2: INL +0.5/−1.0 LSB and DNL +0.5/−1.5 LSB. +1: one value off by 0.5 LSB from a misread level. 0: −INL given as −2 LSB (a level compared with the ideal value of the next code) with the rest correct, or only INL or only DNL right. −2 (asserted as fact): DNL and INL confused, most values wrong, or the characteristic described as having no negative step.
