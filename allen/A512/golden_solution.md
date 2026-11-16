# Golden Solution - A512

## Reference answer

$V_{REF}$ = 5 V: 10100110. With $V_{REF}$ = 5.2 V the word becomes 10100100: the error occurs at the 7th bit.

- 5 V (stage inputs in V): 1.5 → 1; 3 − 5 = −2 → 0; −4 + 5 = 1 → 1; 2 − 5 = −3 → 0; −6 + 5 = −1 → 0; −2 + 5 = 3 → 1; 6 − 5 = 1 → 1; 2 − 5 = −3 → 0.
- 5.2 V: 1.5 → 1; 3 − 5.2 = −2.2 → 0; −4.4 + 5.2 = 0.8 → 1; 1.6 − 5.2 = −3.6 → 0; −7.2 + 5.2 = −2.0 → 0; −4 + 5.2 = 1.2 → 1; 2.4 − 5.2 = −2.8 → 0 (was 1); −5.6 + 5.2 = −0.4 → 0.
- The 7th-stage input changes sign because the 4 % reference error is doubled at every stage (the 7th-stage input is 2^6 times more sensitive than the input).

## Grading notes

+2: 10100110 for 5 V and the 7th bit as the first bit that changes with 5.2 V (word 10100100), with the residues. +1: both results right with no residues, or one displayed residue slip that changes no bit. 0: 5-V word right but the 5.2-V sequence miscomputed, or the reverse. −2 (asserted as fact): a 5-V word from another algorithm (e.g., straight binary 01001100), or the claim that no bit changes.
