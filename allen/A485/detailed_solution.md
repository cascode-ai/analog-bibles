# Detailed solution - A485

Each conversion step averages the voltage on $C_1$ with the running result on $C_2$. A bit of 1 loads $C_1$ with only $0.9V_{REF}$, so the error is largest when every bit is 1. Track the actual and ideal outputs for that code, bit by bit, and compare the error with ½ LSB of an $n$-bit converter.

### Step 1 — Recursion for the output

After $C_2$ is discharged ($v_0=0$), bit $n$ sets $C_1$ to $V_n$ (0 for a bit of 0; $V_{REF}$ ideally, $0.9V_{REF}$ actually, for a bit of 1) and $S_1$ averages ($C_1=C_2$):

$$
v_n=\frac{V_n+v_{n-1}}{2}.
$$

### Step 2 — Worst case: all bits equal to 1

A 0 bit is exact, so the error grows only with the number of 1s; the worst case is all ones. Then

$$
v_n=\frac{0.9+v_{n-1}}{2}\ \mathrm V\quad\Longrightarrow\quad v_n=0.9\left(1-2^{-n}\right)\ \mathrm V,
$$

while the ideal output is $1-2^{-n}$ V, so

$$
\text{error}_n=0.1\left(1-2^{-n}\right)\ \mathrm V .
$$

### Step 3 — Compare with ½ LSB

With $\tfrac12\,\mathrm{LSB}=V_{REF}/2^{n+1}$:

| $n$ | Error (V) | ½ LSB (V) | Within? |
|---|---|---|---|
| 1 | 0.050 | 0.250 | yes |
| 2 | 0.075 | 0.125 | yes |
| 3 | 0.0875 | 0.0625 | no |

The DAC converts **2 bits** correctly; under worst-case conditions an error occurs when the third bit is converted.
