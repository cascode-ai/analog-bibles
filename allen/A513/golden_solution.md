# Golden Solution - A513

## Reference answer

Ideal: 1000. With the 0.1-V comparator offsets the output is still 1000: no error occurs.

- Stage inputs: $V_0$ = 0.5 V → 1; $V_1 = 1 - 5 = -4$ V → 0; $V_2 = -8 + 5 = -3$ V → 0; $V_3 = -6 + 5 = -1$ V → 0.
- The comparator offset only moves the decision threshold; the residues depend only on the bits. The smallest stage input magnitude is 0.5 V (first stage), so a 0.1-V threshold shift (of either sign) changes no decision. An error would need an offset above +0.5 V (first bit) or below −1 V (fourth bit).
- ($V_{analog} = 5(\frac12 - \frac14 - \frac18 - \frac1{16})$ = 0.3125 V; the 4-bit resolution is coarse, but the code is the correct one.)

## Grading notes

+2: 1000 in both cases, with the stage inputs (0.5, −4, −3, −1 V) showing that 0.1 V is smaller than every distance to the threshold. +1: both words right with a weak justification. 0: ideal word right but an error claimed with the offset through a sign or residue slip, while the method (threshold shift) is right. −2 (asserted as fact): an ideal word other than 1000, or the offset added into the residue and doubled by later stages (contrary to the stated comparator-only offset), giving a claimed error such as 1001.
