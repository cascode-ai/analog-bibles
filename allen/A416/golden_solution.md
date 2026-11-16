# Golden Solution - A416

## Reference answer

Many characteristics satisfy the specification; one valid example (outputs in LSB, LSB = FSR/8):

| code | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|---|---|---|---|---|---|---|---|---|
| output | 0 | 1 | 3 | 3 | 4 | 4 | 6 | 7 |
| INL | 0 | 0 | +1 | 0 | 0 | −1 | 0 | 0 |

- Steps between adjacent codes: 1, 2, 0, 1, 0, 2, 1 LSB, so DNL = 0, +1, −1, 0, −1, +1, 0 LSB.
- +INL = +1 LSB (code 010), −INL = −1 LSB (code 101); +DNL = +1 LSB (001→010, 101→110), −DNL = −1 LSB (010→011, 100→101).

Features every valid answer has: a staircase that rises by 2 LSB at some transition (DNL = +1) and stays flat (step 0, DNL = −1) at some transition, and that lies exactly 1 LSB above the ideal staircase at some code and exactly 1 LSB below it at another, never farther. Since both are measured against the same ideal staircase, DNL(k→k+1) = INL(k+1) − INL(k), which is a quick consistency check for any proposed plot.

## Grading notes

Many answers are correct; check the candidate's levels yourself (INL = level − k, DNL = step − 1).
+2: a plotted or tabulated 3-bit characteristic whose INL extremes are exactly +1 and −1 LSB and whose DNL extremes are exactly +1 and −1 LSB, with the INL/DNL values stated or evident. A notation slip in a general formula (e.g. DNL written in volts without dividing by $V_{LSB}$) is trivial when all the stated INL and DNL values are correct, and does not lower +2. +1: a valid characteristic but with a mislabelled INL or DNL value in the explanation, or three of the four extremes exact and the fourth within 0.5 LSB. 0: a plausible non-ideal staircase with no check of INL/DNL, or a characteristic that stays within ±1 LSB but reaches none or only some of the extremes. −2 (asserted as fact): a characteristic claimed to meet the specification that clearly violates it (e.g. an INL of 2 LSB or a 3-LSB step), DNL computed as the deviation of a level from the ideal (confusing DNL with INL), or the ideal staircase itself presented as the answer.
