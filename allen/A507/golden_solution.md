# Golden Solution - A507

## Reference answer

111001.

Stage inputs (units of $V_{REF}$) and bits:
- $V_0 = 0.8 > 0$ → 1; $V_1 = 1.6 - 1 = 0.6$ → 1; $V_2 = 1.2 - 1 = 0.2$ → 1; $V_3 = 0.4 - 1 = -0.6$ → 0; $V_4 = -1.2 + 1 = -0.2$ → 0; $V_5 = -0.4 + 1 = 0.6$ → 1.
- In volts: 4, 3, 1, −3, −1, 3 V.
- Check: $V_{analog} = V_{REF}(\frac12 + \frac14 + \frac18 - \frac1{16} - \frac1{32} + \frac1{64}) = 0.796875V_{REF}$ = 3.984 V, close to 4 V.

## Grading notes

+2: 111001 with the stage-by-stage residues. +1: correct word with no residues shown, or residues with a transcription slip that does not change any bit. 0: correct method with one arithmetic slip that changes a later bit. −2 (asserted as fact): a word from a different algorithm (e.g., the straight binary code of 0.8, 110011) or with the add/subtract rule reversed.
