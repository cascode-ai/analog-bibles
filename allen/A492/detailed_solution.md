# Detailed solution - A492

The converter is a first-order recursion: each period the held output is halved and one bipolar reference is added. Iterate it over the five bits, taken LSB first, then check the final value against the closed-form weighted sum.

### Step 1 — Recursion and bit mapping

Let $v_k$ be the held output after the $k$-th conversion, with $v_0=0$ from the reset. Switch $A$ (bit 1) adds $+V_{REF}$ and switch $B$ (bit 0) adds $-V_{REF}$, so with $b_k\in\{0,1\}$ the $k$-th bit applied,

$$
v_k=\tfrac12 v_{k-1}+(2b_k-1)V_{REF},\qquad k=1,\dots,5 .
$$

The word 10101 (MSB to LSB) is applied LSB first, so the applied sequence $b_1,\dots,b_5$ is $1,0,1,0,1$ and the signed values $2b_k-1$ are $+1,-1,+1,-1,+1$. Here the last bit applied ($k=5$) is the MSB.

### Step 2 — Iterate over the five periods

Take the S/H output during $k-1\le t/T<k$ to be $v_k$ (the sum is formed and held at the start of each period). In units of $V_{REF}$:

$$
\begin{aligned}
v_1/V_{REF}&=+1+\tfrac12(0)=1,\\
v_2/V_{REF}&=-1+\tfrac12(1)=-\tfrac12,\\
v_3/V_{REF}&=+1+\tfrac12\left(-\tfrac12\right)=\tfrac34,\\
v_4/V_{REF}&=-1+\tfrac12\left(\tfrac34\right)=-\tfrac58,\\
v_5/V_{REF}&=+1+\tfrac12\left(-\tfrac58\right)=\tfrac{11}{16}.
\end{aligned}
$$

| Interval of $t/T$ | Bit applied | $v_{OUT}/V_{REF}$ |
|---|---|---|
| 0 – 1 | 1 (LSB) | 1 |
| 1 – 2 | 0 | −0.5 |
| 2 – 3 | 1 | 0.75 |
| 3 – 4 | 0 | −0.625 |
| 4 – 5 | 1 (MSB) | 0.6875 |

The converted output is therefore

$$
v_{OUT}=\tfrac{11}{16}V_{REF}=0.6875\,V_{REF}.
$$

### Step 3 — Closed-form check

Unrolling the recursion from $v_0=0$ gives each bit a weight that halves once per later period:

$$
v_5=\sum_{k=1}^{5}2^{k-5}(2b_k-1)V_{REF}.
$$

The MSB ($k=5$) has weight 1 and the LSB ($k=1$) weight $1/16$:

$$
\frac{v_5}{V_{REF}}=1-\tfrac12+\tfrac14-\tfrac18+\tfrac1{16}=\frac{16-8+4-2+1}{16}=\frac{11}{16},
$$

which agrees with Step 2. With bipolar bits, the five-bit outputs span $-\tfrac{31}{16}V_{REF}$ to $+\tfrac{31}{16}V_{REF}$ in steps of $\tfrac18V_{REF}$ (changing one bit changes its term by 2 times its weight, and the smallest weight is $1/16$).

### Step 4 — Waveform

The output is a piecewise-constant staircase that alternates in sign because the bits alternate, and the swings shrink as the halving reduces the influence of earlier bits: 1, −0.5, 0.75, −0.625 and finally 0.6875.

![Held DAC output versus normalized time for the word 10101 applied LSB first](/q/A492/solution-waveforms.svg)

If the S/H is instead taken to update at the end of each period, the same five levels appear shifted one period later, with the reset value 0 held during $0\le t/T<1$; the final value is unchanged.
