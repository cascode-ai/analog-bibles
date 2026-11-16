# Golden Solution - A492

## Reference answer

Final output $v_{OUT} = +\frac{11}{16}V_{REF} = 0.6875V_{REF}$.

Sequence (bits LSB first: 1, 0, 1, 0, 1):
- $0 \le t/T < 1$: bit 1 → $+V_{REF} + 0$ → $v_{OUT}/V_{REF} = 1$.
- $1 \le t/T < 2$: bit 0 → $-1 + \frac12(1) = -\frac12$.
- $2 \le t/T < 3$: bit 1 → $1 + \frac12(-\frac12) = \frac34$.
- $3 \le t/T < 4$: bit 0 → $-1 + \frac12(\frac34) = -\frac58$.
- $4 \le t/T < 5$: bit 1 (MSB) → $1 + \frac12(-\frac58) = \frac{11}{16}$.
The plot is a staircase alternating in sign: 1, −0.5, 0.75, −0.625, 0.6875, settling toward 11/16. Check: $\sum b_i2^{-i} = 1 - \frac12 + \frac14 - \frac18 + \frac{1}{16} = \frac{11}{16}$ (with ±1 bits the range is $-\frac{31}{16}$ to $+\frac{31}{16}V_{REF}$ in steps of $\frac18V_{REF}$).

## Grading notes

+2: final value 11/16 $V_{REF}$ and the correct five levels in time order. The question does not fix the time origin or whether the S/H updates at the start or the end of each period: a waveform that holds the reset value 0 during 0 ≤ t/T < 1 and shows the levels 1, −1/2, 3/4, −5/8, 11/16 one period later is equally correct (+2). +1: final value right with one intermediate level wrong, or levels right with the final value misstated. 0: method right (iteration with ½ feedback) but the bit order reversed in the waveform while the final value is still computed correctly. −2 (asserted as fact): MSB processed first giving a different final value, unipolar bits (0 instead of −1) giving 21/16 or similar, or a monotonic staircase claimed.
