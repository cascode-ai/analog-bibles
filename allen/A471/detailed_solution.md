# Detailed solution - A471

With $R_9=16R$ the lower nibble is exact, while $R_{10}$ sets the gain $g=R/R_{10}$ of the upper nibble. Steps inside a group of 16 codes are then always 1 LSB; only the major-carry steps, where the lower nibble rolls over from 15 to 0, depend on $g$. Monotonicity requires those steps to be non-negative.

### Step 1 — Output in LSBs

From the three inverting stages,

$$
v_{out}=\frac{R}{R_{10}}V_{REF}\left(\frac{b_0}{2}+\cdots+\frac{b_3}{16}\right)+\frac{R}{R_9}V_{REF}\left(\frac{b_4}{2}+\cdots+\frac{b_7}{16}\right).
$$

With $R_9=16R$, $g=R/R_{10}$, $1\,\mathrm{LSB}=V_{REF}/256$ and nibble values $m$ (upper) and $n$ (lower), each 0–15:

$$
v_{out}=V_{REF}\left[g\frac{m}{16}+\frac{n}{256}\right]=16g\,m+n\ \ \mathrm{LSB}.
$$

### Step 2 — Step sizes

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad 1\ \mathrm{LSB},\\
\text{major transition }(n=15\to0,\ m\to m+1):&\quad 16g-15\ \mathrm{LSB}.
\end{aligned}
$$

For the ideal $g=1$ the major step is 1 LSB.

### Step 3 — Monotonicity condition

The output never decreases if the major step is non-negative:

$$
16g-15\ge0\;\Longrightarrow\;g=\frac{R}{R_{10}}\ge\frac{15}{16}\;\Longrightarrow\;R_{10}\le\frac{16}{15}R=1.067R .
$$

At $R_{10}=16R/15$ the major step is exactly zero (two codes share an output level), so strict monotonicity requires $R_{10}<16R/15$. A smaller $R_{10}$ ($g>1$) only enlarges the major steps, giving positive DNL (missing levels) but never a decrease, so there is no lower limit on $R_{10}$ for monotonicity. The converter stays monotonic for

$$
R_{10}\le\frac{16}{15}R\approx1.067R .
$$
