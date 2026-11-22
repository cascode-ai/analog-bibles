# Detailed solution - A429

Read the actual level of every code from [Fig. 1], then compare each level with its ideal value (INL) and each step with 1 LSB (DNL). Fitting the levels to bit weights explains the pattern of the errors.

### Step 1 — Definitions

With output in LSB (1 LSB $=$ 1/16 of full scale), level $V_k$ for code $k$, and ideal level $k$:

$$
\mathrm{INL}_k=V_k-k,\qquad
\mathrm{DNL}_{k\to k+1}=(V_{k+1}-V_k)-1 .
$$

### Step 2 — Levels and INL

Each code's output is the horizontal segment that starts at its position; code 1111 is given as 14.5/16.

| Code | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 |
|---|---|---|---|---|---|---|---|---|
| Actual (LSB) | 0 | 1 | 2.5 | 3.5 | 3 | 4 | 5.5 | 6.5 |
| INL (LSB) | 0 | 0 | +0.5 | +0.5 | −1 | −1 | −0.5 | −0.5 |

| Code | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |
|---|---|---|---|---|---|---|---|---|
| Actual (LSB) | 8 | 9 | 10.5 | 11.5 | 11 | 12 | 13.5 | 14.5 |
| INL (LSB) | 0 | 0 | +0.5 | +0.5 | −1 | −1 | −0.5 | −0.5 |

So $+\mathrm{INL}=+0.5$ LSB and $-\mathrm{INL}=-1.0$ LSB. Note that each level must be compared with the ideal value of its own code, e.g. the level 3 LSB of code 0100 with the ideal 4 LSB.

### Step 3 — Steps and DNL

| Transition | 0000→0001 | 0001→0010 | 0010→0011 | 0011→0100 | 0100→0101 | 0101→0110 | 0110→0111 | 0111→1000 |
|---|---|---|---|---|---|---|---|---|
| Step (LSB) | 1 | 1.5 | 1 | −0.5 | 1 | 1.5 | 1 | 1.5 |
| DNL (LSB) | 0 | +0.5 | 0 | −1.5 | 0 | +0.5 | 0 | +0.5 |

| Transition | 1000→1001 | 1001→1010 | 1010→1011 | 1011→1100 | 1100→1101 | 1101→1110 | 1110→1111 |
|---|---|---|---|---|---|---|---|
| Step (LSB) | 1 | 1.5 | 1 | −0.5 | 1 | 1.5 | 1 |
| DNL (LSB) | 0 | +0.5 | 0 | −1.5 | 0 | +0.5 | 0 |

So $+\mathrm{DNL}=+0.5$ LSB and $-\mathrm{DNL}=-1.5$ LSB. The two steps of $-0.5$ LSB (0011→0100 and 1011→1100) mean that the output falls as the code increases: the converter is also non-monotonic.

### Step 4 — Interpretation

The levels are reproduced exactly by bit weights of 8, 3, 2.5 and 1 LSB for b1 to b4: $V_k=8b_1+3b_2+2.5b_3+b_4$. The second bit is 1 LSB too small and the third 0.5 LSB too large, so the INL is $+0.5$ LSB when only b3 is on, $-1$ LSB when only b2 is on, and $-0.5$ LSB when both are on; it repeats identically in the upper half, because the MSB weight is correct. At the major transitions where b2 turns on and b3, b4 turn off, the 3-LSB gain is smaller than the 3.5 LSB lost, which produces the two negative steps.
