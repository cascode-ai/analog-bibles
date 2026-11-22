# Detailed solution - A465

Write all output levels in LSBs of the 6-bit DAC as functions of $x$. There are only two kinds of steps, inside a group of eight codes and at a group transition, so the DNL is the larger of two simple functions of $x$; set it to 1 LSB and pick the largest root.

### Step 1 — Output in LSBs

With $1\,\mathrm{LSB}=V_{REF}/64$ and the code $k=8m+n$ ($m$ the MSB-subDAC value, $n$ the LSB-subDAC value, each 0–7):

$$
v_{OUT}=\frac m8V_{REF}+\frac n8\cdot\frac{V_{REF}}{x}=8m+\frac{8n}{x}\ \mathrm{LSB}.
$$

For $x=8$ this is $k$ LSB, the ideal characteristic.

### Step 2 — DNL of the two kinds of steps

$$
\begin{aligned}
\text{inside a group }(n\to n+1):&\quad \text{step}=\frac8x,\qquad \mathrm{DNL}_g=\frac8x-1,\\
\text{group transition }(n=7\to0,\ m\to m+1):&\quad \text{step}=8-\frac{56}{x},\qquad \mathrm{DNL}_t=7-\frac{56}{x}.
\end{aligned}
$$

### Step 3 — Where the DNL reaches 1 LSB

Both expressions vanish at $x=8$. For $x>8$ the transition DNL is positive and increases with $x$, while $|\mathrm{DNL}_g|<1$ for all $x>4$. The transition DNL reaches $+1$ LSB at

$$
7-\frac{56}{x}=1\quad\Longrightarrow\quad x=\frac{56}{6}=\frac{28}{3}=9.33 ,
$$

where the in-group DNL is only $8/9.33-1=-0.14$ LSB. For $x<8$ the transition DNL becomes negative and reaches $-1$ LSB at $7-56/x=-1$, i.e. $x=7$. Thus $|\mathrm{DNL}|\le1$ LSB for $7\le x\le9.33$.

| $x$ | $\mathrm{DNL}_g$ (LSB) | $\mathrm{DNL}_t$ (LSB) |
|---|---|---|
| 7 | +0.14 | −1 |
| 8 | 0 | 0 |
| 9.33 | −0.14 | +1 |

The largest divisor that causes a 1 LSB DNL is $x=28/3\approx9.33$; any larger $x$ makes the DNL exceed 1 LSB at the group transitions.
