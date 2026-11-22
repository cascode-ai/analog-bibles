# Detailed solution - A512

Run the ideal pipeline recursion for eight stages, first with $V_{REF}=5$ V and then with $V_{REF}=5.2$ V, keeping the 1.5-V input. Changing the reference changes every residue; the difference grows from stage to stage until a residue changes sign, and that stage's bit is the first error.

### Step 1 — Stage rule

$$
b_{i-1}=\begin{cases}+1\ (\text{bit }1), & V_{i-1}>0\\ -1\ (\text{bit }0), & V_{i-1}\le0\end{cases},\qquad
V_i=2V_{i-1}-b_{i-1}V_{REF}.
$$

### Step 2 — Eight stages for both references

Representative stage 3 with $V_{REF}=5.2$ V: its input is $V_2=2(-2.2)+5.2=0.8$ V $>0$, so the bit is 1 and $V_3=1.6-5.2=-3.6$ V.

| Stage | Input, $V_{REF}=5$ V (V) | Bit | Input, $V_{REF}=5.2$ V (V) | Bit |
|---|---|---|---|---|
| 1 | 1.5 | 1 | 1.5 | 1 |
| 2 | $3-5=-2$ | 0 | $3-5.2=-2.2$ | 0 |
| 3 | $-4+5=1$ | 1 | $-4.4+5.2=0.8$ | 1 |
| 4 | $2-5=-3$ | 0 | $1.6-5.2=-3.6$ | 0 |
| 5 | $-6+5=-1$ | 0 | $-7.2+5.2=-2.0$ | 0 |
| 6 | $-2+5=3$ | 1 | $-4+5.2=1.2$ | 1 |
| 7 | $6-5=1$ | 1 | $2.4-5.2=-2.8$ | **0** |
| 8 | $2-5=-3$ | 0 | $-5.6+5.2=-0.4$ | 0 |

### Step 3 — Words and the first error

With $V_{REF}=5$ V the 8-bit word is

$$
10100110 ,
$$

and with $V_{REF}=5.2$ V it is 10100100. The first bit that differs is the **7th**: the 7th-stage input falls from $+1$ V to $-2.8$ V.

The reason is the growth of the residue difference $\Delta_i$ between the two cases. While the bits agree, $\Delta_i=2\Delta_{i-1}-b_{i-1}(0.2\ \mathrm V)$, so the 0.2-V reference change enters each stage and the earlier differences are doubled: $\Delta=-0.2,-0.2,-0.6,-1.0,-1.8,-3.8$ V for stages 2 to 7. At stage 7 the difference exceeds the 1-V margin of the ideal input and the decision flips.
