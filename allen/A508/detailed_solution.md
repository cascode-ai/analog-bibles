# Detailed solution - A508

Each pipeline stage resolves one bit from the sign of its input and passes the doubled residue, with $V_{REF}$ subtracted for a positive input or added for a negative one, to the next stage. Apply the rule eight times from $0.3215V_{REF}$ and check the word by reconstruction.

### Step 1 — Stage rule

$$
b_{i-1}=\begin{cases}+1\ (\text{bit }1), & V_{i-1}>0\\ -1\ (\text{bit }0), & V_{i-1}\le0\end{cases},\qquad
V_i=2V_{i-1}-b_{i-1}V_{REF}.
$$

### Step 2 — Eight stages

Representative stage 6, in units of $V_{REF}$: its input is $V_5=2(0.144)-1=-0.712\le0$, so the bit is 0 and the next input is $V_6=2(-0.712)+1=-0.424$.

| Stage | Input $V_{i-1}/V_{REF}$ | Bit |
|---|---|---|
| 1 | 0.3215 | 1 |
| 2 | $0.643-1=-0.357$ | 0 |
| 3 | $-0.714+1=0.286$ | 1 |
| 4 | $0.572-1=-0.428$ | 0 |
| 5 | $-0.856+1=0.144$ | 1 |
| 6 | $0.288-1=-0.712$ | 0 |
| 7 | $-1.424+1=-0.424$ | 0 |
| 8 | $-0.848+1=0.152$ | 1 |

The 8-bit output word, MSB first, is

$$
10101001 .
$$

### Step 3 — Check by reconstruction

With $b_i=\pm1$,

$$
\frac{V_{analog}}{V_{REF}}=\tfrac12-\tfrac14+\tfrac18-\tfrac1{16}+\tfrac1{32}-\tfrac1{64}-\tfrac1{128}+\tfrac1{256}=0.32422,
$$

i.e. 1.621 V against the 1.6075-V input; the difference, $0.0027V_{REF}$, is within one 8-bit step of this code ($2V_{REF}/2^8=0.0078V_{REF}$). The straight binary code of 0.3215 (01010010) is a different code because this algorithm uses $\pm1$ bit weights.
