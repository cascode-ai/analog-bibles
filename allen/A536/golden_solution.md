# Golden Solution - A536

## Reference answer

+INL = +1 LSB, −INL = 0 LSB; DNL = 0 LSB (every vertical step is 1 LSB); no missing codes; monotonic.

- In subrange $m$ (4m to 4m + 4 LSB) the residue $6[v_{in}(1) - 4m\ \mathrm{LSB}]$ reaches the stage-2 thresholds $V_{REF}/4$, $V_{REF}/2$, $3V_{REF}/4$ early, at $v_{in}(1) = 4m + \tfrac23$, $4m + \tfrac43$ and $4m + 2$ LSB (ideal: $4m + 1, 2, 3$).
- From $4m+2$ LSB the residue exceeds $3V_{REF}/4$ and stage 2 saturates at 11.
- Staircase per subrange: codes $4m$, $4m+1$, $4m+2$ each about 0.67 LSB wide, then $4m+3$ for 2 LSB (from $4m+2$ to $4m+4$); all 16 codes appear.
- Vertical difference: +1 on $4m+\tfrac23$ to $4m+1$, $4m+\tfrac43$ to $4m+2$ and $4m+2$ to $4m+3$; 0 elsewhere; never negative. So +INL = +1 LSB, −INL = 0.
- Every step is +1 code: DNL = 0 by the vertical-step definition; monotonic. (Measured as code widths instead, the widths would be 0.67 and 2 LSB.)

## Grading notes

+2: transitions at about 0.67, 1.33, 2 LSB in each subrange with the top code of each subrange 2 LSB wide, +INL = +1 LSB, −INL = 0, DNL = 0 (vertical steps), no missing codes, monotonic. Reporting the code-width DNL (+1 / −0.33 LSB) in addition to the vertical-step values is fine. +1: correct characteristic and conclusions with one value given under a different stated convention (e.g., −INL = −1 from a half-LSB-offset ideal); or values under other conventions given as the main result while the vertical-definition values (+INL = +1, −INL = 0, every step 1 LSB so DNL = 0) are also stated; or one of INL/DNL under the stated definition and the other only under a code-width or transition-point convention. 0: qualitative picture right (high gain makes stage 2 saturate early) without correct INL/DNL numbers; or the correct staircase with INL and DNL both given only under other conventions (transition-point INL 0/−1 LSB, code-width DNL +1/−0.33 LSB) and no vertical-definition values. −2 (asserted as fact): missing codes or nonmonotonicity claimed, or residue saturation overlooked so that codes beyond 11 of stage 2 are invented.
