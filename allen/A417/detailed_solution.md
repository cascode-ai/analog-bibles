# Detailed solution - A417

Before drawing, check whether the two specifications can hold together. INL and DNL are measured against the same ideal staircase, so each DNL is a difference of two INLs; that bounds the DNL by twice the largest INL. Here the bound rules out the requested DNL, so no such DAC characteristic exists, and the plot can only show the limitation.

### Step 1 — Relation between DNL and INL

With output $V_k$ (in LSB) for code $k$ and ideal output $k$:

$$
\mathrm{INL}_k=V_k-k,\qquad
\mathrm{DNL}_{k\to k+1}=(V_{k+1}-V_k)-1=\mathrm{INL}_{k+1}-\mathrm{INL}_k .
$$

### Step 2 — Bound on the DNL

By the triangle inequality,

$$
|\mathrm{DNL}_{k\to k+1}|\le|\mathrm{INL}_{k+1}|+|\mathrm{INL}_k|\le2\,|\mathrm{INL}|_{max}.
$$

With $|\mathrm{INL}|\le0.5$ LSB at every code, $|\mathrm{DNL}|\le1$ LSB at every transition.

### Step 3 — The specification is contradictory

A DNL of $+1.5$ LSB would need $\mathrm{INL}_{k+1}-\mathrm{INL}_k=1.5$ LSB, a step of 2.5 LSB. Since the two INL values sum in magnitude to at least 1.5 LSB, at least one of them is 0.75 LSB or more, which violates the ±0.5-LSB INL limit. The same argument applies to $-1.5$ LSB, which would need a step of $-0.5$ LSB. Therefore no 3-bit DAC can have ±1.5 LSB DNL together with ±0.5 LSB INL, and no characteristic can be plotted for it.

### Step 4 — What is attainable

The largest DNL compatible with ±0.5 LSB INL is ±1 LSB, reached when the INL swings from one limit to the other between neighbouring codes. One example:

| Code | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|---|---|---|---|---|---|---|---|---|
| Output (LSB) | 0 | 0.5 | 2.5 | 2.5 | 4 | 5 | 6 | 7 |
| INL (LSB) | 0 | −0.5 | +0.5 | −0.5 | 0 | 0 | 0 | 0 |

Its DNLs are $-0.5$, $+1$, $-1$, $+0.5$, 0, 0, 0 LSB.

![INL limits of plus and minus 0.5 LSB at each code, with an example reaching DNL of plus and minus 1 LSB](/q/A417/solution-curves.svg)

In the figure each output must stay within its ±0.5-LSB bar. The steepest possible step goes from the bottom of one bar to the top of the next, 2 LSB, i.e. DNL $=+1$; the flattest goes from the top of one bar to the bottom of the next, 0 LSB, i.e. DNL $=-1$. A 2.5-LSB step, or a step of $-0.5$ LSB, cannot fit between neighbouring bars.
