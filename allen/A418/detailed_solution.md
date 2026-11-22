# Detailed solution - A418

A small DNL with a large INL means the error builds up slowly but steadily, code after code. Since each DNL is the change in INL between neighbouring codes, the DNL limit caps how fast the INL can move, and a 3-bit DAC has only seven transitions. Counting them shows the combination is possible only if the characteristic is offset at code 000; then one example is constructed and plotted.

### Step 1 — Relation between DNL and INL

With output $V_k$ (in LSB) for code $k$ and ideal output $k$:

$$
\mathrm{INL}_k=V_k-k,\qquad
\mathrm{DNL}_{k\to k+1}=(V_{k+1}-V_k)-1=\mathrm{INL}_{k+1}-\mathrm{INL}_k .
$$

### Step 2 — How fast the INL can change

With $|\mathrm{DNL}|\le0.5$ LSB, the INL changes by at most 0.5 LSB per transition. Reaching both $+1.5$ and $-1.5$ LSB requires a change of 3 LSB between the two extreme codes, so they must be at least

$$
\frac{3\ \mathrm{LSB}}{0.5\ \mathrm{LSB}}=6
$$

transitions apart. A 3-bit DAC has only 7 transitions (codes 000 to 111), so the extremes must sit at codes (000, 110), (000, 111) or (001, 111), or the same pairs with the signs swapped.

### Step 3 — An offset at code 000 is required

In every one of these placements, code 000 is either an extreme itself ($|\mathrm{INL}_0|=1.5$ LSB) or next to one at code 001, in which case $|\mathrm{INL}_0|\ge1.5-0.5=1$ LSB. So the output at code 000 must deviate from its ideal value by at least 1 LSB. If the output at 000 were fixed at zero, the specification could not be met; with an offset it can.

### Step 4 — Construct the characteristic

Place $+1.5$ LSB at code 001 and $-1.5$ LSB at code 111, with the INL falling by exactly 0.5 LSB per code in between, and start at $\mathrm{INL}_0=+1$:

| Code | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|---|---|---|---|---|---|---|---|---|
| Output (LSB) | 1 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 |
| INL (LSB) | +1 | +1.5 | +1 | +0.5 | 0 | −0.5 | −1 | −1.5 |

The steps are 1.5, then 0.5 six times, so the DNLs are $+0.5$, then $-0.5$ six times. Check: largest INL $+1.5$ LSB (code 001), smallest $-1.5$ LSB (code 111); largest DNL $+0.5$ LSB, smallest $-0.5$ LSB, all exactly as specified.

### Step 5 — Plot

![Example 3-bit DAC with an offset of 1 LSB at code 000 and half-LSB steps, giving INL of plus and minus 1.5 LSB and DNL of plus and minus 0.5 LSB](/q/A418/solution-curves.svg)

The output is in LSB, so any full-scale value can be assumed. The characteristic is essentially a straight line with a positive offset and a slope of only 0.5 LSB per code, i.e. a large gain error. This is the typical way a large INL arises with a small DNL: no single step is badly wrong, but the errors accumulate. Another valid example is 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 6 LSB, with the extremes at codes 000 and 110.
