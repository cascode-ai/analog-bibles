# Detailed solution - A515

The offset moves every decision threshold to $+0.3V_{REF}$, while the residues still follow $V_i=2V_{i-1}-b_{i-1}V_{REF}$. Here the first decision already lands on the wrong side; the wrong correction then pushes the residue outside $\pm V_{REF}$, and from there on it only grows. Trace the eight stages and compare with the ideal word 10001100.

### Step 1 — First stage

The comparator outputs 1 only when its input exceeds $0.3V_{REF}$. The input $0.1V_{REF}$ is below this, so the MSB is 0 (ideally 1), $b_0=-1$, and the stage adds $V_{REF}$:

$$
V_1=2(0.1V_{REF})+V_{REF}=1.2\,V_{REF},
$$

which lies outside the $\pm V_{REF}$ range the following stages are meant to handle.

### Step 2 — Later stages

Once $V_{i-1}>V_{REF}$, the bit is 1 and $V_i=2V_{i-1}-V_{REF}>V_{i-1}$, so every following input is above the threshold and keeps growing. In units of $V_{REF}$:

| Stage | Input $V_{i-1}/V_{REF}$ | $>0.3$? | Bit | Ideal bit |
|---|---|---|---|---|
| 1 | 0.1 | no | 0 | 1 |
| 2 | $0.2+1=1.2$ | yes | 1 | 0 |
| 3 | $2.4-1=1.4$ | yes | 1 | 0 |
| 4 | $2.8-1=1.8$ | yes | 1 | 0 |
| 5 | $3.6-1=2.6$ | yes | 1 | 1 |
| 6 | $5.2-1=4.2$ | yes | 1 | 1 |
| 7 | $8.4-1=7.4$ | yes | 1 | 0 |
| 8 | $14.8-1=13.8$ | yes | 1 | 0 |

In a real circuit the residue would clip at the positive output limit, which still gives a 1 in every later stage.

### Step 3 — Output word and errors

The digital output is

$$
01111111 ,
$$

against the ideal 10001100. The MSB is already wrong, and every later bit except the 5th and 6th differs from the ideal word: bits 1, 2, 3, 4, 7 and 8 are in error. The word reconstructs to

$$
\frac{V_{analog}}{V_{REF}}=-\tfrac12+\left(\tfrac14+\tfrac18+\cdots+\tfrac1{256}\right)=-\tfrac12+\left(\tfrac12-\tfrac1{256}\right)=-0.0039,
$$

instead of $0.1$. An offset larger than the input's distance from the threshold corrupts the very first decision, and the pipeline cannot recover because the residue leaves its valid range.
