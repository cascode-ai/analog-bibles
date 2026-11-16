# Golden Solution - A418

## Reference answer

It is possible, but only if the output at code 000 (and at 111) is itself offset from the ideal by at least 1 LSB. Example (outputs in LSB):

| code | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|---|---|---|---|---|---|---|---|---|
| output | 1 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 |
| INL | +1 | +1.5 | +1 | +0.5 | 0 | −0.5 | −1 | −1.5 |

Steps 1.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 LSB, so DNL = +0.5, −0.5, …, −0.5: +DNL = +0.5 LSB, −DNL = −0.5 LSB; +INL = +1.5 LSB (001), −INL = −1.5 LSB (111). The characteristic is an offset of about +1 LSB combined with a large gain error (half-LSB steps). Another valid example: 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 6 LSB.

Why the offset is required: DNL(k→k+1) = INL(k+1) − INL(k), so with |DNL| ≤ 0.5 LSB the INL changes by at most 0.5 LSB per code. Going from +1.5 to −1.5 LSB (3 LSB) takes at least 6 transitions, and a 3-bit DAC has only 7. The two extremes must therefore sit at codes (000, 110), (000, 111) or (001, 111), which forces |INL(000)| ≥ 1 LSB. With the output at 000 fixed at zero the combination is impossible.

## Grading notes

Check any candidate characteristic yourself (INL = level − k, DNL = step − 1).
+2: a characteristic whose extremes are exactly INL ±1.5 LSB and DNL ±0.5 LSB (necessarily with an offset of at least 1 LSB at code 000), or a complete analysis stating that it is possible only with such an offset and impossible with zero output at code 000. +1: a correct proof of impossibility under an explicitly stated assumption that the output at 000 is zero (without noting that an offset makes it possible), or a valid characteristic with a slip in the reported INL/DNL values. 0: an unqualified "impossible" backed by the correct per-code counting argument (the zero-start assumption left implicit), or a characteristic that stays within the limits without reaching the extremes. −2 (asserted as fact): a characteristic claimed to meet the specification that violates it (e.g. one starting at 0 LSB and claiming both +1.5 and −1.5 LSB INL with only half-LSB DNL), or DNL and INL confused.
