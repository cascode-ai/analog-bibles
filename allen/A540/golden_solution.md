# Golden Solution - A540

## Reference answer

INL = +1 LSB and −1 LSB; DNL = +1 LSB and −2 LSB; the converter is not monotonic (no codes are missing).

- Within each subrange $m$ (4m to 4m + 4 LSB) the second stage would ideally output 00, 01, 10, 11. With its bits swapped the outputs are 00, 10, 01, 11.
- Output codes in order: 0, 2, 1, 3, 4, 6, 5, 7, 8, 10, 9, 11, 12, 14, 13, 15, each 1 LSB wide (0000, 0010, 0001, 0011, 0100, 0110, 0101, 0111, …).
- Vertical difference from the ideal: 0, +1, −1, 0 in each subrange, so INL = ±1 LSB.
- Steps: +2 (DNL = +1), −1 (DNL = −2), +2 (DNL = +1), +1 (DNL = 0), repeating.
- The negative step (e.g., 0010 → 0001 at 2 LSB) makes the converter nonmonotonic.

## Grading notes

+2: the sequence 0, 2, 1, 3 repeating in every subrange, INL = ±1 LSB, DNL = +1 LSB and −2 LSB, nonmonotonic. +1: correct characteristic and nonmonotonicity with one INL/DNL value off. 0: characteristic correct but INL/DNL wrong and monotonicity not addressed, or the swap applied to the wrong bits with consistent reasoning. −2 (asserted as fact): claims the converter is monotonic, or claims missing codes.
