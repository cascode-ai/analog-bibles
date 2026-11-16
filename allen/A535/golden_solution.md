# Golden Solution - A535

## Reference answer

+INL = 0 LSB, −INL = −2 LSB; +DNL = +2 LSB, −DNL = 0 LSB; eight codes (0010, 0011, 0110, 0111, 1010, 1011, 1110, 1111) are missing; monotonic.

- Stage 1 is ideal: subrange $m$ covers $4m$ to $4m+4$ LSB. The residue is only $2[v_{in}(1) - 4m\ \mathrm{LSB}]$, reaching at most $V_{REF}/2$, so stage 2 produces only 00 and 01. It switches to 01 when the residue reaches $V_{REF}/4$, i.e. at $4m + 2$ LSB.
- Staircase (2 LSB per code): 0 on 0–2, 1 on 2–4, 4 on 4–6, 5 on 6–8, 8 on 8–10, 9 on 10–12, 12 on 12–14, 13 on 14–16 LSB.
- Vertical difference from the ideal: 0 at the start of each 2-LSB code, −1 and then −2 as the ideal keeps counting (e.g., on 3–4 LSB actual 1, ideal 3). Never positive: +INL = 0, −INL = −2 LSB.
- Steps: 0 → 1 (1 LSB, DNL 0) and 1 → 4, 5 → 8, 9 → 12 (3 LSB, DNL = +2). All steps upward: monotonic.

## Grading notes

+2: the 2-LSB-wide staircase with only codes 0, 1, 4, 5, 8, 9, 12, 13; −INL = −2 LSB, +INL = 0; +DNL = +2 LSB, −DNL = 0; monotonic; the eight missing codes. +1: correct characteristic and monotonicity with one INL/DNL value off by 1 LSB (e.g., INL quoted as −3 from a half-LSB-offset ideal). 0: correct qualitative picture (gain too low, codes 2 and 3 of each subrange missing) without correct INL/DNL numbers. −2 (asserted as fact): claims the converter is nonmonotonic, that no codes are missing, or that a low inter-stage gain only causes a gain error with DNL = 0.
