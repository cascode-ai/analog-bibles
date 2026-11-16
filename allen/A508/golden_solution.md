# Golden Solution - A508

## Reference answer

10101001.

Stage inputs (units of $V_{REF}$) and bits: $V_0 = 0.3215$ → 1; $V_1 = -0.357$ → 0; $V_2 = 0.286$ → 1; $V_3 = -0.428$ → 0; $V_4 = 0.144$ → 1; $V_5 = -0.712$ → 0; $V_6 = -0.424$ → 0; $V_7 = 0.152$ → 1.

Check: $V_{analog} = V_{REF}\sum b_i2^{-(i+1)} = 0.32422V_{REF}$ (1.621 V), within the 8-bit resolution of the input $0.3215V_{REF}$ (1.6075 V).

## Grading notes

+2: 10101001 with the residues (±0.002 $V_{REF}$). +1: correct word without residues, or a displayed-value slip that changes no bit. 0: correct method with one arithmetic slip changing a later bit. −2 (asserted as fact): a word from another algorithm (e.g., straight binary of 0.3215, 01010010) or with the add/subtract rule reversed.
