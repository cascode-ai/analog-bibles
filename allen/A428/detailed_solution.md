# Detailed solution - A428

The inverting summer weights each bit by $R_0/R_{i+1}$. Two of the input resistors are wrong, so two bit weights deviate from their binary values; the output for every code is the sum of the weights of the bits that are on. Tabulating the 16 levels against the ideal staircase gives the INL and DNL directly, and any negative step shows non-monotonicity.

### Step 1 — Bit weights

With an ideal op amp the inverting input is a virtual ground, so

$$
v_{out}=-R_0V_{REF}\sum_{i=0}^{3}\frac{b_i}{R_{i+1}} .
$$

In units of $\mathrm{LSB}=V_{REF}/16$, bit $b_i$ contributes $16R_0/R_{i+1}$ LSB:

| Bit | Resistor | Weight $16R_0/R_{i+1}$ | Ideal |
|---|---|---|---|
| $b_0$ (MSB) | $2R$ | 8 LSB | 8 LSB |
| $b_1$ | $16R/3$ | 3 LSB | 4 LSB |
| $b_2$ | $32R/5$ | 2.5 LSB | 2 LSB |
| $b_3$ (LSB) | $16R$ | 1 LSB | 1 LSB |

So $|v_{out}|=(8b_0+3b_1+2.5b_2+b_3)\,V_{REF}/16$, negative for positive $V_{REF}$. Bit $b_1$ is 1 LSB too small and $b_2$ is 0.5 LSB too large.

### Step 2 — Levels and INL

With INL $=|v_{out}|/\mathrm{LSB}-k$:

| Code | 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 |
|---|---|---|---|---|---|---|---|---|
| $|v_{out}|$ (LSB) | 0 | 1 | 2.5 | 3.5 | 3 | 4 | 5.5 | 6.5 |
| INL (LSB) | 0 | 0 | +0.5 | +0.5 | −1 | −1 | −0.5 | −0.5 |

| Code | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |
|---|---|---|---|---|---|---|---|---|
| $|v_{out}|$ (LSB) | 8 | 9 | 10.5 | 11.5 | 11 | 12 | 13.5 | 14.5 |
| INL (LSB) | 0 | 0 | +0.5 | +0.5 | −1 | −1 | −0.5 | −0.5 |

The INL depends only on $b_1$ and $b_2$: $+0.5$ LSB when only $b_2$ is on, $-1$ LSB when only $b_1$ is on, $-0.5$ LSB when both are on. Hence $+\mathrm{INL}=+0.5$ LSB and $-\mathrm{INL}=-1.0$ LSB. (Measured on the signed, negative output, all INL signs reverse; the magnitudes are the same.)

![Actual 4-bit DAC staircase with bit weights 8, 3, 2.5 and 1 LSB against the ideal staircase, showing two falling steps](/q/A428/solution-curves.svg)

### Step 3 — DNL

The steps (in LSB) between successive codes are

$$
1,\ 1.5,\ 1,\ -0.5,\ 1,\ 1.5,\ 1,\ 1.5,\ 1,\ 1.5,\ 1,\ -0.5,\ 1,\ 1.5,\ 1,
$$

so the DNL ($=$ step $-1$) takes the values 0, $+0.5$ and $-1.5$ LSB. $+\mathrm{DNL}=+0.5$ LSB (at 0001→0010, 0101→0110, 0111→1000, 1001→1010 and 1101→1110) and $-\mathrm{DNL}=-1.5$ LSB (at 0011→0100 and 1011→1100). Each DNL equals the change in INL, e.g. $-1-0.5=-1.5$ LSB at 0011→0100.

### Step 4 — Monotonicity

At 0011→0100 the output magnitude falls from 3.5 to 3 LSB, and at 1011→1100 from 11.5 to 11 LSB: in both cases $b_1$ turns on (worth only 3 LSB) while $b_2$ and $b_3$ turn off (together 3.5 LSB). A DNL below $-1$ LSB means a decreasing output, so the DAC is not monotonic.
