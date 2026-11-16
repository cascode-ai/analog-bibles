# Golden Solution - A496

## Reference answer

+INL = +2 LSB, −INL = −1 LSB; +DNL = +1 LSB, −DNL = −2 LSB.

Reading the figure with the input in units of $V_{REF}/16$ (all transitions fall on these points); the ideal code steps up by one at each multiple of $V_{REF}/8$:
- Actual codes: 000 (0–1), 001 (1–3), 011 (3–6), 100 (6–7), 101 (7–9), 100 (9–12), 110 (12–13), 111 (13–16).
- Actual minus ideal on the sixteen intervals: 0, +1, 0, +2, +1, +1, +1, +2, +1, 0, −1, −1, 0, +1, 0, 0 → INL from +2 LSB (at 3/16–4/16 and 7/16–8/16) to −1 LSB (at 10/16–12/16).
- Vertical steps: +1 at 1/16 (DNL 0), +2 at 3/16 (DNL +1, code 010 missing), +1 at 6/16 (0), +1 at 7/16 (0), −1 at 9/16 (DNL −2), +2 at 12/16 (+1), +1 at 13/16 (0) → DNL from +1 LSB to −2 LSB.

## Grading notes

+2: all four values right (INL +2 and −1 LSB, DNL +1 and −2 LSB). +1: three of the four right, the fourth wrong by a misread step. 0: two of the four right, or the right method with the INL measured against the infinite-resolution line instead of the ideal staircase. Answers that measure along the analog axis instead of the stated digital-code convention (e.g., INL +1/−1.5 LSB, DNL +0.5/−1.5 LSB) are at most 0 when internally consistent. −2 (asserted as fact): a misread characteristic (e.g., no downward step, or the gray staircase taken as the actual one) leading to wrong values, or INL/DNL values that are all wrong.
