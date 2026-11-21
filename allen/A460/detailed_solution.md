# Detailed solution - A460

Write every output level in LSBs of the 4-bit DAC as an MSB part plus a scaled LSB part, list the 16 levels for each divisor, and read the INL (output minus ideal) and DNL (step minus 1 LSB) directly from the list.

### Step 1 — Output in LSBs

Let $1\,\mathrm{LSB}=V_{REF}/16$ and write the code as $k=4m+n$ with $m=2b_0+b_1$ and $n=2b_2+b_3$, each from 0 to 3.

- The MSB subDAC outputs $(m/4)V_{REF}=4m$ LSB.
- The LSB subDAC outputs $(n/4)V_{REF}=4n$ LSB, which is divided by the divisor $d$: $4n/d$ LSB.

$$
v_{OUT}=4m+\frac{4n}{d}\ \ \mathrm{LSB},\qquad
\mathrm{INL}(k)=v_{OUT}-k=\left(\frac4d-1\right)n\ \ \mathrm{LSB}.
$$

For the ideal $d=4$ this gives $v_{OUT}=k$ LSB. The INL depends only on $n$, and the steps take two forms: within a group ($n\to n+1$) the step is $4/d$ LSB; at a group transition ($n=3\to0$, $m\to m+1$) it is $4-3(4/d)$ LSB.

### Step 2 — Divisor $d=2$

The LSB part is $2n$ LSB:

| Codes | 0000–0011 | 0100–0111 | 1000–1011 | 1100–1111 |
|---|---|---|---|---|
| $v_{OUT}$ (LSB) | 0, 2, 4, 6 | 4, 6, 8, 10 | 8, 10, 12, 14 | 12, 14, 16, 18 |

$$
\mathrm{INL}=n=0\ \text{to}\ {+3}\ \mathrm{LSB},\qquad
\text{steps: }2\ \mathrm{LSB}\ (\mathrm{DNL}=+1),\quad 4-6=-2\ \mathrm{LSB}\ (\mathrm{DNL}=-3).
$$

So $+\mathrm{INL}=+3$ LSB, $-\mathrm{INL}=0$ LSB, $+\mathrm{DNL}=+1$ LSB, $-\mathrm{DNL}=-3$ LSB. The output falls by 2 LSB at $0011\to0100$, $0111\to1000$ and $1011\to1100$, so the DAC is **nonmonotonic**.

### Step 3 — Divisor $d=6$

The LSB part is $2n/3$ LSB:

| Codes | 0000–0011 | 0100–0111 | 1000–1011 | 1100–1111 |
|---|---|---|---|---|
| $v_{OUT}$ (LSB) | 0, 2/3, 4/3, 2 | 4, 14/3, 16/3, 6 | 8, 26/3, 28/3, 10 | 12, 38/3, 40/3, 14 |

$$
\mathrm{INL}=-\frac n3=0,\ -\tfrac13,\ -\tfrac23,\ -1\ \mathrm{LSB},\qquad
\text{steps: }\tfrac23\ \mathrm{LSB}\ (\mathrm{DNL}=-\tfrac13),\quad 4-2=2\ \mathrm{LSB}\ (\mathrm{DNL}=+1).
$$

So $+\mathrm{INL}=0$ LSB, $-\mathrm{INL}=-1$ LSB, $+\mathrm{DNL}=+1$ LSB, $-\mathrm{DNL}=-1/3$ LSB $\approx-0.33$ LSB. Every step is positive, so the DAC is **monotonic**, although the DNL of +1 LSB at the group transitions means one output level is skipped there.
