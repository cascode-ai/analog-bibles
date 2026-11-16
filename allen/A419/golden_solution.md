# Golden Solution - A419

## Reference answer

+INL = +1 LSB, −INL = −1.5 LSB; +DNL = +1.5 LSB, −DNL = −2 LSB; the converter is not monotonic.

Actual levels (in LSB) for codes 0000 … 1111: 0, 1, 2.5, 2.5, 4, 6, 7, 7.5, 7, 8, 10.5, 9.5, 11.5, 14, 14, 14.
- INL (actual − ideal): 0, 0, +0.5, −0.5, 0, +1, +1, +0.5, −1, −1, +0.5, −1.5, −0.5, +1, 0, −1. Maximum +1 LSB (0101, 0110, 1101), minimum −1.5 LSB (1011).
- DNL (step − 1): 0, +0.5, −1, +0.5, +1, 0, −0.5, −1.5, 0, +1.5, −2, +1, +1.5, −1, −1. Maximum +1.5 LSB (1001→1010 and 1100→1101), minimum −2 LSB (1010→1011).
- The output decreases at 0111→1000 (7.5 → 7) and 1010→1011 (10.5 → 9.5), so the DAC is nonmonotonic.

## Grading notes

+2: all four values (+1, −1.5, +1.5, −2 LSB) and "not monotonic". +1: one of the four values off by 0.5 LSB because of a misread level, everything else correct. 0: −INL given as −2.5 LSB (a level compared with the ideal value of the next code) with the rest correct, or about half of the values right. −2 (asserted as fact): the converter called monotonic, DNL computed as the deviation of levels from the ideal (confusing DNL with INL), or most values wrong.
