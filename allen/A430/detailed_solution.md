# Detailed solution - A430

In the inverting summer each closed switch contributes $V_{REF}R_0/R_{i+1}$ to the output magnitude, independently of the other bits. The codes with a single bit on therefore read out each ratio $R_0/R_{i+1}$ directly from [Fig. 1]; the remaining codes serve as a check.

### Step 1 — Output of the summer

With an ideal op amp and $V_{OS}=0$, the inverting input is a virtual ground and

$$
|v_{out}|=V_{REF}\left(b_0\frac{R_0}{R_1}+b_1\frac{R_0}{R_2}+b_2\frac{R_0}{R_3}+b_3\frac{R_0}{R_4}\right),
$$

where switches $b_0\ldots b_3$ are driven by the plot's bits b1 … b4.

### Step 2 — Single-bit codes

| Code (b1 b2 b3 b4) | Level in [Fig. 1] | Ratio | Resistor |
|---|---|---|---|
| 1000 | 8/16 | $R_0/R_1=1/2$ | $R_1=2R_0$ |
| 0100 | 3/16 | $R_0/R_2=3/16$ | $R_2=16R_0/3\approx5.33R_0$ |
| 0010 | 2.5/16 | $R_0/R_3=5/32$ | $R_3=32R_0/5=6.4R_0$ |
| 0001 | 1/16 | $R_0/R_4=1/16$ | $R_4=16R_0$ |

### Step 3 — Check with the other codes

These weights are 8, 3, 2.5 and 1 LSB. Their sums reproduce every level of [Fig. 1], for example code 0011: $2.5+1=3.5$ LSB; code 0111: $3+2.5+1=6.5$ LSB; code 1111: $8+3+2.5+1=14.5$ LSB, the given value.

So $R_1=2R_0$, $R_2=16R_0/3$, $R_3=32R_0/5$ and $R_4=16R_0$. Compared with the ideal binary set $2R_0$, $4R_0$, $8R_0$, $16R_0$, $R_2$ is 33 % too large (the second bit is 1 LSB too weak) and $R_3$ is 20 % too small (the third bit is 0.5 LSB too strong), which is what produces the INL, DNL and non-monotonic steps of this characteristic.
