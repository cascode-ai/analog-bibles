# Detailed solution - A491

Iterate the conversion with a general feedback gain $A=0.5+\Delta A$ to obtain the final output as a polynomial $f(A)$, determine the output-level spacing that defines 1 LSB, and find the range of $A$ for which $f(A)$ stays within ½ LSB of $19/16$.

### Step 1 — Output as a function of the gain

The word 11001 is applied LSB first, so the bits enter as $1,0,0,1,1$, i.e. $+1,-1,-1,+1,+1$. Starting from $v_0=0$, each period gives $v_n=\pm V_{REF}+A\,v_{n-1}$. In units of $V_{REF}$:

$$
\begin{aligned}
v_1&=1,\qquad v_2=-1+A,\qquad v_3=-1+Av_2=-1-A+A^2,\\
v_4&=1+Av_3=1-A-A^2+A^3,\qquad v_5=1+Av_4,
\end{aligned}
$$

$$
\frac{v_{OUT}}{V_{REF}}=f(A)=1+A-A^2-A^3+A^4 .
$$

For $A=0.5$: $f=1+0.5-0.25-0.125+0.0625=19/16=1.1875$, the ideal value.

### Step 2 — Size of 1 LSB

The possible outputs of this 5-bit converter are $\sum_{i=0}^{4}\pm2^{-i}V_{REF}$. Changing the LSB from $-1$ to $+1$ changes the output by $2\cdot2^{-4}V_{REF}=V_{REF}/8$, so adjacent levels are $V_{REF}/8$ apart and

$$
\pm\tfrac12\,\mathrm{LSB}=\pm\frac{V_{REF}}{16}
\quad\Longrightarrow\quad
1.125\le f(A)\le1.25 .
$$

### Step 3 — Range of $A$

$f(A)$ is not monotonic in $A$: setting $f'(A)=1-2A-3A^2+4A^3=0$ gives a maximum $f=1.202$ at $A\approx0.390$, below the upper limit 1.25, so only the lower limit matters. Solving $f(A)=1.125$ on either side of the maximum:

| $A$ | $f(A)$ |
|---|---|
| 0.151 | 1.125 |
| 0.390 | 1.202 (maximum) |
| 0.500 | 1.1875 (ideal) |
| 0.663 | 1.125 |

$$
0.151\le A\le0.663 .
$$

### Step 4 — Allowed gain error

With $A=0.5+\Delta A$:

$$
-0.349\le\Delta A\le+0.163 .
$$

For this particular word the gain may fall by about 0.35 or rise by about 0.16 before the output leaves the ±½ LSB band; a symmetric tolerance would be $|\Delta A|\le0.16$. The range is wide because the alternating bits make the errors of successive terms partly cancel; other words are more sensitive.
