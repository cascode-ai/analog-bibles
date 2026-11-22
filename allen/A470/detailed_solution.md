# Detailed solution - A470

With $R_{10}=R$ the upper nibble is exact, and $R_9$ only scales the lower nibble. Write the INL as a function of $R_9$ and the lower-nibble value, find the worst code, and solve the ±0.5 LSB condition for $R_9$.

### Step 1 — Output with general $R_9$

From the three inverting stages (summer, inverter and output summer, all with feedback $R$),

$$
v_{out}=\frac{R}{R_{10}}V_{REF}\left(\frac{b_0}{2}+\cdots+\frac{b_3}{16}\right)+\frac{R}{R_9}V_{REF}\left(\frac{b_4}{2}+\cdots+\frac{b_7}{16}\right).
$$

Let $m$ (bits $b_0$–$b_3$) and $n$ (bits $b_4$–$b_7$) be the nibble values, each 0–15. With $R_{10}=R$:

$$
v_{out}=V_{REF}\left[\frac{m}{16}+\frac{R}{R_9}\cdot\frac{n}{16}\right],\qquad
v_{out,ideal}=V_{REF}\left[\frac{m}{16}+\frac{n}{256}\right].
$$

### Step 2 — INL in LSBs

With $1\,\mathrm{LSB}=V_{REF}/256$:

$$
\mathrm{INL}=\frac{v_{out}-v_{out,ideal}}{V_{REF}/256}=16n\frac{R}{R_9}-n=n\left(\frac{16R}{R_9}-1\right)\ \mathrm{LSB}.
$$

It is independent of $m$ and largest in magnitude for $n=15$ (all four LSBs equal to 1).

### Step 3 — Range of $R_9$

$$
15\left|\frac{16R}{R_9}-1\right|\le0.5
\;\Longrightarrow\;
\frac{29}{30}\le\frac{16R}{R_9}\le\frac{31}{30}
\;\Longrightarrow\;
\frac{480}{31}R\le R_9\le\frac{480}{29}R .
$$

$$
15.48R\le R_9\le16.55R\qquad(\text{nominal }16R,\ \text{about }-3.2\%/+3.4\%).
$$
