# Detailed solution - A531

A folding and interpolating converter splits the conversion into a coarse flash that finds which folding period the input is in and a fine quantizer that resolves the position within that period. Count the comparators of each path, noting that interpolation reduces the number of folding amplifiers but not the number of comparators, and compare with a 7-bit flash.

### Step 1 — Coarse quantizer

The $N_1=3$ coarse bits come from a flash converter:

$$
2^{N_1}-1=2^3-1=7\ \text{comparators}.
$$

### Step 2 — Fine quantizer and the role of interpolation

The $N_2=4$ fine bits require $2^{N_2}=16$ equally spaced zero crossings per folding period. Each crossing is detected by one comparator acting as a 1-bit quantizer, so the fine path has 16 comparators.

Without interpolation, each crossing signal would come from its own folder, i.e. 16 folders. With an interpolation factor of 4, only $16/4=4$ folders are needed; the other 12 crossing signals are interpolated, resistively or with currents, between adjacent folder outputs. Interpolation therefore reduces the folders and preamplifiers, but every interpolated crossing still needs its own comparator.

### Step 3 — Totals

$$
\text{folding and interpolating ADC: } 7+16=23\ \text{comparators},\qquad
\text{7-bit flash: } 2^7-1=127\ \text{comparators}.
$$

The folding and interpolating converter needs about 5.5 times fewer comparators. If the fine quantizer is counted as a $2^{N_2}-1=15$-comparator flash, as in the generic count $(2^{N_1}-1)+(2^{N_2}-1)$, the total is 22, which leads to the same comparison.
