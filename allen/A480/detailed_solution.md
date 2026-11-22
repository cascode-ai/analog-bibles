# Detailed solution - A480

Substitute $\Delta R/R=0.01$ and $\Delta C/C=0.001$ into the formulas of each combination, find the largest $N$ for which a split $N=M+K$ keeps both INL and DNL at or below 1 LSB, and compare the two combinations.

### Step 1 — Charge-scaling MSBs, voltage-scaling LSBs

$$
\mathrm{INL}=2^{K-1}(0.01)+2^{N-1}(0.001),\qquad
\mathrm{DNL}=0.01+\left(2^{N}-1\right)(0.001)\quad(\mathrm{LSB}).
$$

The DNL depends only on $N$:

$$
0.01+\left(2^{N}-1\right)(0.001)\le1\ \Longrightarrow\ 2^N\le991\ \Longrightarrow\ N\le9 ,
$$

with $\mathrm{DNL}=0.521$ LSB at $N=9$ and $1.033$ LSB at $N=10$ (fails). For $N=9$ the INL condition limits the resistor-string bits:

$$
2^{K-1}(0.01)+256(0.001)\le1\ \Longrightarrow\ 2^{K-1}\le74.4\ \Longrightarrow\ K\le7 .
$$

For example $M=7$ (charge) and $K=2$ (voltage):

$$
\mathrm{INL}=2(0.01)+0.256=0.276\ \mathrm{LSB},\qquad \mathrm{DNL}=0.521\ \mathrm{LSB},
$$

using only 4 resistors and a capacitor spread of $2^{6}=64$. Any split with $2\le M\le8$ ($K\le7$) meets both specifications.

### Step 2 — Voltage-scaling MSBs, charge-scaling LSBs

$$
\mathrm{INL}=2^{N-1}(0.01)+2^{K-1}(0.001),\qquad
\mathrm{DNL}=2^{K}(0.01)+\left(2^{K}-1\right)(0.001)=0.011\cdot2^{K}-0.001\quad(\mathrm{LSB}).
$$

The resistor term of the INL alone requires $2^{N-1}(0.01)\le1$, i.e. $2^{N-1}\le100$ and $N\le7$ ($N=8$ already gives 1.28 LSB). The DNL requires $2^K\le91$, i.e. $K\le6$. At $N=7$, e.g. $M=1$, $K=6$: $\mathrm{INL}=0.64+0.032=0.672$ LSB and $\mathrm{DNL}=0.703$ LSB. This combination reaches at most 7 bits.

### Step 3 — Choice

| Combination | Largest $N$ | Example split | INL (LSB) | DNL (LSB) |
|---|---|---|---|---|
| Charge MSB / voltage LSB | 9 | $M=7$, $K=2$ | 0.276 | 0.521 |
| Voltage MSB / charge LSB | 7 | $M=1$, $K=6$ | 0.672 | 0.703 |

The best choice is a **charge-scaling MSB array with a voltage-scaling LSB array**, giving $N=9$ bits, for example $M=7$ and $K=2$. Putting the more accurate capacitors (0.1%) on the high-weight bits and the less accurate resistors (1%) on the low-weight bits is what allows the extra two bits.
