# Detailed solution - A001

Read off the bits in the stated order, attach to each bit the binary weight the definition assigns to its position, and add the weights of the bits that are 1.

### Step 1 — Assign the weights

In $D=\sum_{i=1}^{N} b_{N-i}2^{-i}$ the most significant bit $b_{N-1}$ (the leftmost) carries $2^{-1}$, and each step to the right halves the weight, down to $2^{-N}$ for $b_0$. For $N=5$ and the word 11010 written as $b_4b_3b_2b_1b_0$:

| Bit | $b_4$ | $b_3$ | $b_2$ | $b_1$ | $b_0$ |
|---|---|---|---|---|---|
| Value | 1 | 1 | 0 | 1 | 0 |
| Weight | $2^{-1}=0.5$ | $2^{-2}=0.25$ | $2^{-3}=0.125$ | $2^{-4}=0.0625$ | $2^{-5}=0.03125$ |

### Step 2 — Sum the weighted bits

Only the bits equal to 1 contribute:

$$
\begin{aligned}
D&=1\cdot2^{-1}+1\cdot2^{-2}+0\cdot2^{-3}+1\cdot2^{-4}+0\cdot2^{-5}\\
&=0.5+0.25+0.0625=0.8125=\frac{13}{16}.
\end{aligned}
$$

As a check, the same word read as an ordinary integer is $16+8+2=26$; the definition divides every weight by $2^N=32$, so $D=26/32=13/16=0.8125$. The result is a fraction of full scale, $0\le D\le1-2^{-5}$, not the integer 26.
