# Golden Solution - A531

## Reference answer

Folding and interpolating ADC: 23 comparators (7 coarse + 16 fine); 7-bit flash ADC: $2^7 - 1 = 127$ comparators.

- Coarse quantizer: $N_1 = 3$ bits, a flash of $2^{N_1} - 1 = 7$ comparators.
- Fine path: $2^{N_2} = 16$ equally spaced zero crossings per folding period, each detected by one comparator (1-bit quantizer). Without interpolation this needs 16 folders. With interpolation by 4, only 16/4 = 4 folders are needed, and the other 12 crossing signals are interpolated (resistively or with currents) between adjacent folder outputs. Interpolation reduces the folders/preamplifiers, not the latches: still 16 comparators.
- Total 7 + 16 = 23 comparators, about 5.5 times fewer than the 127 of a 7-bit flash.
- (Counting the fine quantizer as a $2^{N_2} - 1 = 15$-comparator flash, as in the generic count $2^{N_1} - 1 + 2^{N_2} - 1$, gives 22.)

## Grading notes

+2: 127 for the flash and 22–23 for the folding/interpolating ADC (7 coarse + 15 or 16 fine), with the explanation that interpolation by 4 reduces the folders (16 → 4) while every interpolated crossing still needs a comparator. +1: correct counts with no explanation of the role of interpolation. 0: flash count right but the folding count wrong through dividing the fine comparators by 4 (11 comparators) while reasoning otherwise sound. −2 (asserted as fact): flash count other than 127 (e.g., 128 or 7), or a folding count from multiplying instead of adding the coarse and fine counts.
