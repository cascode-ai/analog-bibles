# Golden Solution - A417

## Reference answer

No such characteristic exists.

- Both quantities are measured against the same ideal staircase, so for every transition DNL(k→k+1) = (step − 1) = INL(k+1) − INL(k).
- With |INL| ≤ 0.5 LSB at every code, |DNL| ≤ |INL(k+1)| + |INL(k)| ≤ 1 LSB. A DNL of +1.5 LSB would need INL(k+1) − INL(k) = 1.5 LSB, so at least one of the two codes would deviate by ≥ 0.75 LSB, violating the ±0.5 LSB INL; the same holds for −1.5 LSB.
- In general |DNL|max ≤ 2·|INL|max. With ±0.5 LSB INL the largest attainable DNL is ±1 LSB, e.g. outputs 0, 0.5, 2.5, 2.5, 4, 5, 6, 7 LSB (INL 0, −0.5, +0.5, −0.5, 0, 0, 0, 0; DNL −0.5, +1, −1, +0.5, 0, 0, 0).

## Grading notes

+2: concludes that the combination is impossible and proves it with DNL(k→k+1) = INL(k+1) − INL(k), hence |DNL| ≤ 1 LSB when |INL| ≤ 0.5 LSB (or an equivalent general argument). An example of the attainable ±1 LSB case is optional. +1: correct impossibility conclusion with an incomplete argument (e.g. shown only for one sign, or only by failed attempts plus a qualitative remark). 0: notices the conflict but does not commit, or claims impossibility for an incorrect reason. −2 (asserted as fact): a characteristic presented as having ±1.5 LSB DNL and ±0.5 LSB INL (any such plot necessarily violates one of them), or a statement that the combination is achievable.
