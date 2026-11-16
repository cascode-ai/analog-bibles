# Golden Solution - A498

## Reference answer

INL = +3 LSB and −3 LSB; DNL = +2 LSB and −3 LSB.

Reading the figure with the input in units of $V_{REF}/16$; the ideal code steps up by one at each multiple of $V_{REF}/8$:
- Actual codes: 000 (0–1), 001 (1–2), 100 (2–5), 010 (5–7), 101 (7–10), 011 (10–13), 110 (13–14), 111 (14–16).
- Actual minus ideal on the sixteen intervals: 0, +1, +3, +3, +2, 0, −1, +2, +1, +1, −2, −2, −3, 0, 0, 0 → INL from +3 LSB (at 2/16–4/16, code 100 where 001 is ideal) to −3 LSB (at 12/16–13/16, code 011 where 110 is ideal).
- Vertical steps: +1 at 1/16 (DNL 0), +3 at 2/16 (+2), −2 at 5/16 (−3), +3 at 7/16 (+2), −2 at 10/16 (−3), +3 at 13/16 (+2), +1 at 14/16 (0) → DNL from +2 LSB to −3 LSB (the converter is also nonmonotonic).

## Grading notes

+2: INL +3/−3 LSB and DNL +2/−3 LSB. +1: three of the four values right, the fourth wrong by a misread step. 0: two of the four right, or the right method with the INL measured against the infinite-resolution line instead of the ideal staircase. Answers that measure along the analog axis instead of the stated digital-code convention are at most 0 when internally consistent. −2 (asserted as fact): a misread characteristic (e.g., the downward steps missed, or DNL taken as the step size without subtracting 1 LSB throughout) giving wrong values, or all four values wrong.
