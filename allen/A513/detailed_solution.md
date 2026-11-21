# Detailed solution - A513

Compute the four ideal stage inputs and bits. A comparator offset only moves each decision threshold to +0.1 V; the residues depend on the input and the bits alone, so the word changes only if some stage input lies between 0 and +0.1 V.

### Step 1 — Ideal conversion

With $V_{REF}=5$ V and $V_{in}^*=0.1V_{REF}=0.5$ V, the stage rule $V_i=2V_{i-1}-b_{i-1}V_{REF}$ gives:

| Stage | Input $V_{i-1}$ (V) | Bit |
|---|---|---|
| 1 | 0.5 | 1 |
| 2 | $1-5=-4$ | 0 |
| 3 | $-8+5=-3$ | 0 |
| 4 | $-6+5=-1$ | 0 |

The ideal output is

$$
1000 .
$$

### Step 2 — With a 0.1-V comparator offset

Each comparator now outputs 1 only when $V_{i-1}>0.1$ V. As long as the decisions are unchanged, the residues are those of Step 1, since the offset is not in the signal path. Compare each input with the new threshold:

$$
0.5>0.1\ \Rightarrow\ 1,\qquad -4,\ -3,\ -1<0.1\ \Rightarrow\ 0 .
$$

No decision changes, so the output is still

$$
1000 ,
$$

and no error occurs. The smallest distance from any stage input to the ideal threshold is 0.5 V (stage 1); an error would require an offset above +0.5 V (first bit) or below −1 V (fourth bit).

The code itself represents $V_{analog}=5\left(\tfrac12-\tfrac14-\tfrac18-\tfrac1{16}\right)\mathrm V=0.3125$ V; the 4-bit resolution is coarse, but 1000 is the correct code for a 0.5-V input.
