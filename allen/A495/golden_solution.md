# Golden Solution - A495

## Reference answer

Maximum DNL = +2 LSB: one vertical step of 3 LSB (two codes skipped).

- Across an ideal code transition the ideal code goes from $k-1$ to $k$. With |INL| ≤ 1 LSB the actual code can be $k-2$ just below the transition and $k+1$ just above it, a step of 3 LSB, so DNL = 3 − 1 = +2 LSB. A larger step would put one side more than 1 LSB away from the ideal staircase; away from an ideal transition the largest upward step is 2 LSB (DNL = +1 LSB).
- Example characteristic (reaches +2 LSB twice): output 000 for $v_{in}/V_{REF} < 3/16$ (INL 0, then −1 LSB on 1/16–3/16); jump to 011 at 3/16 (INL +1, 0, −1 LSB over 3/16–9/16); jump to 110 at 9/16 (INL +1, 0, −1 LSB over 9/16–15/16); 111 above 15/16. The steps at 3/16 and 9/16 are 3 LSB high (DNL = +2 LSB), the step at 15/16 is 1 LSB (DNL = 0); codes 001, 010, 100 and 101 are missing.
- Negative side, for completeness: a downward 1-LSB step at an ideal transition gives DNL = −2 LSB, and a downward 2-LSB step inside an ideal code (from $k+1$ to $k-1$) gives −3 LSB; both make the converter nonmonotonic.

## Grading notes

+2: maximum DNL = +2 LSB, explained as a 3-LSB step from 1 LSB below to 1 LSB above the ideal staircase across an ideal transition, with a sketch or description of a characteristic whose INL stays within ±1 LSB and contains such a step. Quoting the result as "±2 LSB", or adding a most-negative value of −2 LSB or −3 LSB, is fine. An answer that reads "largest" as largest magnitude and gives |DNL| = 3 LSB (a 2-LSB downward step inside a code, nonmonotonic) is +2 if it also identifies +2 LSB as the largest positive value, +1 if it gives only the −3 LSB case with a valid sketch. +1: +2 LSB correct but no sketch/description of the characteristic, or a sketch that breaks the ±1 LSB INL limit somewhere. 0: right idea (step bounded by the INL limit on both sides) with a slip giving +1 or +3 LSB; or +2 LSB obtained from the horizontal width of a 3-LSB-wide code (DNL = (3q − q)/q) instead of the vertical-step definition the question gives, with a sketch whose vertical steps are all 1 LSB (so under the stated definition the sketch shows DNL = 0 everywhere and does not exhibit the maximum). A remark that the largest DNL magnitude is 2 LSB is a minor slip, not a separate deduction. −2 (asserted as fact): a maximum DNL of +1 LSB (e.g., from claiming that ±1 LSB INL forces |DNL| ≤ 1 LSB), or of +3 LSB or more (ignoring the INL limit on one side of the step).
