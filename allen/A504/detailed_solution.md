# Detailed solution - A504

A successive-approximation converter is a binary search: starting from the MSB, it sets one trial bit at a time, compares the DAC output with the held input, and keeps the bit only if the input is larger. After eight trials the word is the largest code whose DAC output does not exceed the input.

### Step 1 — Trial rule

With the code $D$ the DAC produces $V_{DAC}=D\,V_{REF}/2^8$. In trial $k$ the bit $2^{8-k}$ is added to the bits already kept; the bit is kept if

$$
0.7\,V_{REF}>V_{DAC}=\frac{D_{trial}}{256}\,V_{REF},
$$

and cleared otherwise. Working in units of $V_{REF}$, the threshold is $0.7$.

### Step 2 — Eight trials

Representative trial 5: the bits kept so far are 1011 0000 ($D=176$, $0.6875$); adding bit 3 gives 1011 1000, $D=184$, $V_{DAC}=184/256=0.71875>0.7$, so the bit is cleared.

| Trial | Trial word | $D$ | $V_{DAC}/V_{REF}$ | $0.7>V_{DAC}$? | Bit |
|---|---|---|---|---|---|
| 1 | 1000 0000 | 128 | 0.5 | yes | 1 |
| 2 | 1100 0000 | 192 | 0.75 | no | 0 |
| 3 | 1010 0000 | 160 | 0.625 | yes | 1 |
| 4 | 1011 0000 | 176 | 0.6875 | yes | 1 |
| 5 | 1011 1000 | 184 | 0.71875 | no | 0 |
| 6 | 1011 0100 | 180 | 0.703125 | no | 0 |
| 7 | 1011 0010 | 178 | 0.6953125 | yes | 1 |
| 8 | 1011 0011 | 179 | 0.69921875 | yes | 1 |

### Step 3 — Output word

The output digital word is

$$
10110011_2=179,\qquad \frac{179}{256}V_{REF}=0.6992\,V_{REF}.
$$

Check: $0.7\times256=179.2$, and the search truncates to the largest integer below it, 179. Rounding to 180 (10110100) would contradict trial 6, where the DAC output $0.703125\,V_{REF}$ exceeds the input.
