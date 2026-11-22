# Detailed solution - A493

Run the converter recursion twice, once with the ideal feedback gain 0.5 and once with the actual gain 0.7, and compare the two outputs after every conversion with the half-LSB tolerance for that number of bits. The first conversion where the deviation exceeds the tolerance is where the error occurs.

### Step 1 — Recursion, bit sequence and tolerance

With $v_0=0$ and $b_k\in\{0,1\}$ the $k$-th bit applied, a bit 1 adds $+V_{REF}$ and a bit 0 adds $-V_{REF}$ to the amplified previous output:

$$
v_k=A\,v_{k-1}+(2b_k-1)V_{REF},\qquad A_{ideal}=0.5,\quad A_{actual}=0.7 .
$$

The word 11001 (MSB to LSB) is applied LSB first, so $b_1,\dots,b_5=1,0,0,1,1$ and the signed values are $+1,-1,-1,+1,+1$.

After $k$ ideal conversions, $v_k=\sum_{j=1}^{k}2^{j-k}(2b_j-1)V_{REF}$. The smallest weight is $2^{1-k}$ (the first bit applied), and flipping that bit changes the output by twice its weight, so adjacent output levels are spaced

$$
1\ \text{LSB}=2^{2-k}V_{REF},\qquad \pm\tfrac12\ \text{LSB}=\pm2^{1-k}V_{REF}.
$$

The tolerances are therefore $1$, $0.5$, $0.25$, $0.125$ and $0.0625\,V_{REF}$ for $k=1$ to $5$.

### Step 2 — Iterate with the ideal and actual gains

Representative step, $k=3$ with a bit 0, in units of $V_{REF}$:

$$
v_3^{ideal}=-1+0.5(-0.5)=-1.25,\qquad
v_3^{actual}=-1+0.7(-0.3)=-1.21 .
$$

The full iteration is:

| $k$ | Bit | Ideal $v_k/V_{REF}$ | Actual $v_k/V_{REF}$ | Deviation | Tolerance $\pm2^{1-k}$ | Within? |
|---|---|---|---|---|---|---|
| 1 | 1 | 1 | 1 | 0 | 1 | yes |
| 2 | 0 | −0.5 | −0.3 | +0.2 | 0.5 | yes |
| 3 | 0 | −1.25 | −1.21 | +0.04 | 0.25 | yes |
| 4 | 1 | 0.375 | 0.153 | −0.222 | 0.125 | **no** |
| 5 | 1 | 1.1875 | 1.1071 | −0.0804 | 0.0625 | no |

The $k=4$ actual value is $1+0.7(-1.21)=1-0.847=0.153$, and the $k=5$ value is $1+0.7(0.153)=1.1071$.

### Step 3 — Locate the error

The deviation first exceeds half an LSB at the **4th bit conversion**: $|0.153-0.375|=0.222\,V_{REF}>0.125\,V_{REF}$. The error then persists, and the final 5-bit output $1.107\,V_{REF}$ differs from the ideal $\tfrac{19}{16}V_{REF}=1.1875\,V_{REF}$ by more than $\tfrac12$ LSB.

The gain error grows in importance because the deviation at step $k$ is $0.7\,\varepsilon_{k-1}+0.2\,v_{k-1}^{ideal}$: the extra $0.2$ of the previous ideal output enters every step, while the tolerance halves each step. At $k=4$ the large previous output $-1.25\,V_{REF}$ contributes about $-0.25\,V_{REF}$, which exceeds the 0.125 limit.
