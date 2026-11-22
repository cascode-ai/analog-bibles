# Detailed solution - A509

Run the eight-stage recursion twice from the 2.00-V input: once with the actual gain 2.1 in every stage and once with the ideal gain 2. Each stage takes its bit from the sign of its input; the excess gain enlarges every residue, and the error compounds through the later stages until a residue changes sign. Reconstruct the analog value of the resulting word and compare.

### Step 1 — Stage rule with gain error

$$
b_{i-1}=\begin{cases}+1\ (\text{bit }1), & V_{i-1}>0\\ -1\ (\text{bit }0), & V_{i-1}\le0\end{cases},\qquad
V_i=A\,V_{i-1}-b_{i-1}V_{REF},\qquad V_{REF}=5\ \mathrm V .
$$

The ideal design has $A=2$; here every stage has $A=2.1$.

### Step 2 — Residues with $A=2.1$ and with $A=2$

Representative stage 4 with $A=2.1$: its input is $V_3=2.1(3.320)-5=1.972$ V $>0$, so the bit is 1 and $V_4=2.1(1.972)-5=-0.859$ V.

| Stage | Input, $A=2.1$ (V) | Bit | Input, $A=2$ (V) | Bit |
|---|---|---|---|---|
| 1 | 2.000 | 1 | 2 | 1 |
| 2 | $4.2-5=-0.800$ | 0 | $-1$ | 0 |
| 3 | $-1.68+5=3.320$ | 1 | 3 | 1 |
| 4 | $6.972-5=1.972$ | 1 | 1 | 1 |
| 5 | $4.141-5=-0.859$ | 0 | $-3$ | 0 |
| 6 | $-1.803+5=3.197$ | 1 | $-1$ | **0** |
| 7 | $6.713-5=1.713$ | 1 | 3 | 1 |
| 8 | $3.597-5=-1.403$ | **0** | 1 | **1** |

With the gain error the word is 10110110; ideally it is 10110011. The first wrong bit is the 6th: the ideal residue at stage 6 is $-1$ V, but the accumulated gain error has moved it to $+3.197$ V.

### Step 3 — Equivalent analog voltages

With $b_i=\pm1$,

$$
V_{analog}=V_{REF}\sum_{i=0}^{7}b_i\,2^{-(i+1)} .
$$

For the actual word 10110110:

$$
V_{analog}=5\left(\tfrac12-\tfrac14+\tfrac18+\tfrac1{16}-\tfrac1{32}+\tfrac1{64}+\tfrac1{128}-\tfrac1{256}\right)\mathrm V=5(0.42578)\ \mathrm V=2.129\ \mathrm V .
$$

For the ideal word 10110011, the same sum gives $5(0.40234)$ V $=2.012$ V.

| Gain | Word | $V_{analog}$ | Error vs. 2.00 V |
|---|---|---|---|
| 2 (ideal) | 10110011 | 2.012 V | +0.012 V |
| 2.1 | 10110110 | 2.129 V | +0.129 V |

The step between adjacent codes of this $\pm1$-weighted word is $2V_{REF}/2^8=39$ mV, so the 5% gain error produces an output error of about 3.3 steps, whereas the ideal pipeline is within a third of a step.
