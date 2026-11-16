# Golden Solution - A514

## Reference answer

10001100.

Stage inputs (units of $V_{REF}$): 0.1 → 1; −0.8 → 0; −0.6 → 0; −0.2 → 0; 0.6 → 1; 0.2 → 1; −0.6 → 0; −0.2 → 0 (the next residue would be 0.6).
Check: $V_{analog} = V_{REF}(\frac12 - \frac14 - \frac18 - \frac1{16} + \frac1{32} + \frac1{64} - \frac1{128} - \frac1{256}) = 0.09766V_{REF}$, and $0.1 = 0.09766 + 0.6/256$ exactly.

## Grading notes

+2: 10001100 with the residues. +1: correct word without residues. 0: correct method with a slip in the last bits (e.g., 10001101). −2 (asserted as fact): a word from another algorithm (e.g., straight binary of 0.1, 00011001) or with the add/subtract rule reversed.
