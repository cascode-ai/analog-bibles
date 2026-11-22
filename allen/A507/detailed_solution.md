# Detailed solution - A507

Each pipeline stage resolves one bit by the sign of its input and passes on the doubled residue with $V_{REF}$ removed or added. Apply the stage rule six times starting from $0.8V_{REF}$, then check the word by reconstructing its analog value.

### Step 1 — Stage rule

For stage $i$,

$$
b_{i-1}=\begin{cases}+1\ (\text{bit }1), & V_{i-1}>0\\ -1\ (\text{bit }0), & V_{i-1}\le0\end{cases},\qquad
V_i=2V_{i-1}-b_{i-1}V_{REF}.
$$

A positive input is doubled and $V_{REF}$ subtracted; a negative input is doubled and $V_{REF}$ added, so a residue within $\pm V_{REF}$ stays within $\pm V_{REF}$.

### Step 2 — Six stages

Representative stage 4, in units of $V_{REF}$: its input is $V_3=2(0.2)-1=-0.6\le0$, so the bit is 0 and

$$
V_4=2(-0.6)+1=-0.2 .
$$

| Stage | Input $V_{i-1}/V_{REF}$ | Input (V) | Bit |
|---|---|---|---|
| 1 | 0.8 | 4 | 1 |
| 2 | $1.6-1=0.6$ | 3 | 1 |
| 3 | $1.2-1=0.2$ | 1 | 1 |
| 4 | $0.4-1=-0.6$ | −3 | 0 |
| 5 | $-1.2+1=-0.2$ | −1 | 0 |
| 6 | $-0.4+1=0.6$ | 3 | 1 |

The 6-bit output word, MSB first, is

$$
111001 .
$$

### Step 3 — Check by reconstruction

With bits mapped to $b_i=\pm1$, the word represents

$$
V_{analog}=V_{REF}\left(\tfrac12+\tfrac14+\tfrac18-\tfrac1{16}-\tfrac1{32}+\tfrac1{64}\right)=0.796875\,V_{REF}=3.984\ \mathrm V,
$$

within one 6-bit step of the 4-V input. The word is not the straight binary code of 0.8 (110011): the ±1 bit weights of this algorithm give a different code for the same input.
