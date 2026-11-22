# Detailed solution - A514

Apply the ideal stage rule eight times from $0.1V_{REF}$: each stage takes its bit from the sign of its input and passes on twice the input with $V_{REF}$ subtracted (bit 1) or added (bit 0). Then check the word by reconstructing its analog value.

### Step 1 — Stage rule

$$
b_{i-1}=\begin{cases}+1\ (\text{bit }1), & V_{i-1}>0\\ -1\ (\text{bit }0), & V_{i-1}\le0\end{cases},\qquad
V_i=2V_{i-1}-b_{i-1}V_{REF}.
$$

### Step 2 — Eight stages

Representative stage 5, in units of $V_{REF}$: its input is $V_4=2(-0.2)+1=0.6>0$, so the bit is 1 and the next input is $V_5=1.2-1=0.2$.

| Stage | Input $V_{i-1}/V_{REF}$ | Bit |
|---|---|---|
| 1 | 0.1 | 1 |
| 2 | $0.2-1=-0.8$ | 0 |
| 3 | $-1.6+1=-0.6$ | 0 |
| 4 | $-1.2+1=-0.2$ | 0 |
| 5 | $-0.4+1=0.6$ | 1 |
| 6 | $1.2-1=0.2$ | 1 |
| 7 | $0.4-1=-0.6$ | 0 |
| 8 | $-1.2+1=-0.2$ | 0 |

The digital output, MSB first, is

$$
10001100 .
$$

### Step 3 — Check by reconstruction

With $b_i=\pm1$,

$$
\frac{V_{analog}}{V_{REF}}=\tfrac12-\tfrac14-\tfrac18-\tfrac1{16}+\tfrac1{32}+\tfrac1{64}-\tfrac1{128}-\tfrac1{256}=0.09766 .
$$

The next residue would be $V_8=2(-0.2)+1=0.6$, and the input is recovered exactly as $0.09766+0.6/256=0.1$, so the remaining difference is the final residue scaled by $2^{-8}$. This word differs from the straight binary code of 0.1 (00011001) because the algorithm uses $\pm1$ bit weights.
