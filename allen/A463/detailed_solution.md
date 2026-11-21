# Detailed solution - A463

Only the LSB subDAC's contribution passes through the divider, so a scaling-factor error $\Delta x$ produces an output error proportional to that contribution. Find the code where it is largest and require it to stay within ½ LSB of the 6-bit DAC.

### Step 1 — Output and its error

$$
v_{OUT}=\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}\right)V_{REF}+x\left(\frac{b_3}{2}+\frac{b_4}{4}+\frac{b_5}{8}\right)V_{REF},\qquad x_{ideal}=\frac18 .
$$

With $x=\tfrac18+\Delta x$, the MSB part is exact and the error is

$$
\Delta v_{OUT}=\Delta x\left(\frac{b_3}{2}+\frac{b_4}{4}+\frac{b_5}{8}\right)V_{REF}.
$$

### Step 2 — Worst-case code

The bracket is largest, $7/8$, for $b_3=b_4=b_5=1$ (for any MSB bits). With $\tfrac12\,\mathrm{LSB}=\tfrac12\cdot V_{REF}/64=V_{REF}/128$, the condition is

$$
|\Delta x|\cdot\frac78V_{REF}\le\frac{V_{REF}}{128}
\quad\Longrightarrow\quad
|\Delta x|\le\frac{8}{7\cdot128}=\frac1{112}=8.93\times10^{-3}.
$$

### Step 3 — Tolerance

Relative to the ideal value $x=1/8$:

$$
\frac{|\Delta x|}{x}\le\frac{1/112}{1/8}=\frac1{14}=7.14\% ,
$$

so $x$ must lie between $13/112$ and $15/112$. Expressed as a division ratio $1/x$, this is $112/15=7.47$ to $112/13=8.62$, i.e. $-6.7\%$ to $+7.7\%$ about 8.

The worst-case tolerance of the divider is therefore $\pm7.14\%$. It is tighter than the $\pm12.5\%$ ($=100\%/2^K$) that a single LSB-subDAC bit would allow, because all three LSB-subDAC bits are scaled by the same factor and their errors add.
