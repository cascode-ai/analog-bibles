# Detailed solution - A489

Follow the bits through the pipeline to get the weight of each bit as a product of the stage gains, compute the 16 output levels, and compare them with the infinite-resolution line $v_{OUT}=(\text{code}/16)V_{REF}$. The INL is the vertical distance from that line, and the DNL is each step minus 1 LSB ($V_{REF}/16$).

### Step 1 — Output expression

Bit $b_3$ enters first and passes through all four summer gains ($\tfrac12$, $\tfrac58$, $\tfrac38$, $\tfrac12$ from left to right), $b_2$ through the last three, and so on; the delays only shift the result in time. The final output is

$$
v_{OUT}=\frac12\left[b_0+\frac38\left(b_1+\frac58\left(b_2+\frac12b_3\right)\right)\right]V_{REF}
=\left(\frac{b_0}{2}+\frac{3}{16}b_1+\frac{15}{128}b_2+\frac{15}{256}b_3\right)V_{REF}.
$$

The ideal weights are $\tfrac12,\ \tfrac14,\ \tfrac18,\ \tfrac1{16}$; in units of $V_{REF}/256$ the actual weights are 128, 48, 30, 15 instead of 128, 64, 32, 16.

### Step 2 — Output levels and INL

In units of $V_{REF}/256$ (16 per LSB) the levels for codes 0000 to 1111 are

$$
0,\ 15,\ 30,\ 45,\ 48,\ 63,\ 78,\ 93,\ 128,\ 143,\ 158,\ 173,\ 176,\ 191,\ 206,\ 221,
$$

against the ideal $16\times\text{code}$. The deviation is

$$
\mathrm{INL}=\frac{(48-64)b_1+(30-32)b_2+(15-16)b_3}{16}=-\frac{16b_1+2b_2+b_3}{16}\ \ \mathrm{LSB},
$$

which is never positive: it is 0 at 0000 and 1000 and reaches $-19/16=-1.1875$ LSB at 0111 and 1111.

### Step 3 — Steps and DNL

$$
\begin{aligned}
\text{inside a group of four }(b_2b_3:\ 00\to01\to10\to11):&\quad 15/16\ \mathrm{LSB},\quad \mathrm{DNL}=-0.0625\ \mathrm{LSB},\\
0011\to0100,\ 1011\to1100:&\quad (48-45)/16=3/16\ \mathrm{LSB},\quad \mathrm{DNL}=-0.8125\ \mathrm{LSB},\\
0111\to1000:&\quad (128-93)/16=35/16\ \mathrm{LSB},\quad \mathrm{DNL}=+1.1875\ \mathrm{LSB}.
\end{aligned}
$$

Every step is positive, so the DAC remains monotonic.

### Step 4 — Characteristic

![Transfer characteristic of the 4-bit pipeline DAC with gain errors, compared with the infinite-resolution line](/q/A489/solution-curves.svg)

The staircase lies on or below the infinite-resolution line. Within each group of four codes it falls slightly further behind (steps of 15/16 LSB), it is nearly flat at the $b_1$ transitions (3/16 LSB) and it jumps by 35/16 LSB at the MSB transition, where it returns to the line.

### Step 5 — Results

$$
+\mathrm{INL}=0\ \mathrm{LSB},\quad -\mathrm{INL}=-1.1875\ \mathrm{LSB};\qquad
+\mathrm{DNL}=+1.1875\ \mathrm{LSB},\quad -\mathrm{DNL}=-0.8125\ \mathrm{LSB}.
$$
