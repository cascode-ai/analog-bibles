# Golden Solution - A509

## Reference answer

Word 10110110, $V_{analog}$ = 2.129 V (0.42578$V_{REF}$). With ideal gains the word is 10110011 ($V_{analog}$ = 2.012 V); the first wrong bit is the 6th.

Stage inputs with $A = 2.1$ (V): $V_0 = 2.000$ → 1; $V_1 = 4.2 - 5 = -0.800$ → 0; $V_2 = -1.68 + 5 = 3.320$ → 1; $V_3 = 6.972 - 5 = 1.972$ → 1; $V_4 = 4.141 - 5 = -0.859$ → 0; $V_5 = -1.803 + 5 = 3.197$ → 1; $V_6 = 6.713 - 5 = 1.713$ → 1; $V_7 = 3.597 - 5 = -1.403$ → 0.
Ideal ($A = 2$): 2, −1, 3, 1, −3, −1, 3, 1 V → 10110011.
$V_{analog}$ with 2.1: $5(\frac12 - \frac14 + \frac18 + \frac1{16} - \frac1{32} + \frac1{64} + \frac1{128} - \frac1{256}) = 5(0.42578) = 2.129$ V, an error of +0.129 V (≈ 3.3 LSB of $2V_{REF}/2^8$) against the 2-V input.

## Grading notes

+2: 10110110 and $V_{analog}$ ≈ 2.13 V (±0.005 V), with the residues computed using the 2.1 gain in every stage, and the comparison with the ideal 10110011 (bits differ from the 6th on). +1: word right and analog value missing or with a slip, or the ideal comparison missing. 0: gain error applied to the first stage only (10110101, 2.090 V) with an otherwise correct method, or one arithmetic slip that changes a later bit. −2 (asserted as fact): the book's 10100111, the ideal word presented as the result, or the gain applied to the reference term only.
