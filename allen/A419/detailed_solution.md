# Detailed solution - A419

Read the actual output level for each code from [Fig. 1], then compare each level with its ideal value (INL) and each step with 1 LSB (DNL). A step smaller than zero, i.e. a DNL below $-1$ LSB, means the output decreases as the code increases, which is non-monotonic.

### Step 1 — Definitions

With the output in LSB (1 LSB $=$ 1/16 of full scale), level $V_k$ for code $k$ and ideal level $k$:

$$
\mathrm{INL}_k=V_k-k,\qquad
\mathrm{DNL}_{k\to k+1}=(V_{k+1}-V_k)-1 .
$$

### Step 2 — Levels and INL

Each code's output is the horizontal segment starting at that code; the level for 1111 is given as 14/16.

| Code | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 |
|---|---|---|---|---|---|---|---|---|
| Actual (LSB) | 0 | 1 | 2.5 | 2.5 | 4 | 6 | 7 | 7.5 |
| Ideal (LSB) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| INL (LSB) | 0 | 0 | +0.5 | −0.5 | 0 | +1 | +1 | +0.5 |

| Code | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |
|---|---|---|---|---|---|---|---|---|
| Actual (LSB) | 7 | 8 | 10.5 | 9.5 | 11.5 | 14 | 14 | 14 |
| Ideal (LSB) | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| INL (LSB) | −1 | −1 | +0.5 | −1.5 | −0.5 | +1 | 0 | −1 |

So $+\mathrm{INL}=+1$ LSB (codes 0101, 0110, 1101) and $-\mathrm{INL}=-1.5$ LSB (code 1011, where the level 9.5 lies below the ideal 11).

### Step 3 — Steps and DNL

| Transition | Step (LSB) | DNL (LSB) |
|---|---|---|
| 0000→0001 | 1 | 0 |
| 0001→0010 | 1.5 | +0.5 |
| 0010→0011 | 0 | −1 |
| 0011→0100 | 1.5 | +0.5 |
| 0100→0101 | 2 | +1 |
| 0101→0110 | 1 | 0 |
| 0110→0111 | 0.5 | −0.5 |
| 0111→1000 | −0.5 | −1.5 |
| 1000→1001 | 1 | 0 |
| 1001→1010 | 2.5 | +1.5 |
| 1010→1011 | −1 | −2 |
| 1011→1100 | 2 | +1 |
| 1100→1101 | 2.5 | +1.5 |
| 1101→1110 | 0 | −1 |
| 1110→1111 | 0 | −1 |

So $+\mathrm{DNL}=+1.5$ LSB (1001→1010 and 1100→1101) and $-\mathrm{DNL}=-2$ LSB (1010→1011). As a check, each DNL equals the difference of neighbouring INLs, e.g. $\mathrm{INL}_{1011}-\mathrm{INL}_{1010}=-1.5-0.5=-2$ LSB.

### Step 4 — Monotonicity

A DAC is monotonic if its output never decreases as the code increases, i.e. every step is $\ge0$, or $\mathrm{DNL}\ge-1$ LSB. Two steps are negative: 0111→1000 (7.5 to 7 LSB, DNL $=-1.5$) and 1010→1011 (10.5 to 9.5 LSB, DNL $=-2$). The converter is therefore not monotonic. The flat steps (DNL $=-1$) do not by themselves violate monotonicity.

In summary: $+\mathrm{INL}=+1$ LSB, $-\mathrm{INL}=-1.5$ LSB, $+\mathrm{DNL}=+1.5$ LSB, $-\mathrm{DNL}=-2$ LSB, and the DAC is non-monotonic.
