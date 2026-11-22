# Detailed solution - A426

The circuit is an inverting summing amplifier: each closed switch drives a current $V_{REF}/R_{i+1}$ into the virtual ground, and all of it flows through the feedback resistor $R_0$. With the binary-weighted input resistors the bit weights stay exactly binary, so a feedback resistor smaller than the ideal $R$ only scales the whole characteristic, which is a pure gain error.

### Step 1 — Output of the inverting summer

With $V_{OS}=0$ the inverting input is a virtual ground, so the input currents add and flow through $R_0$:

$$
v_{out}=-R_0V_{REF}\left(\frac{b_0}{R_1}+\frac{b_1}{R_2}+\frac{b_2}{R_3}+\frac{b_3}{R_4}\right).
$$

### Step 2 — Substitute the resistor values

With $R_1=2R$, $R_2=4R$, $R_3=8R$, $R_4=16R$ and $R_0=7R/8$:

$$
v_{out}=-\frac78\left(\frac{b_0}2+\frac{b_1}4+\frac{b_2}8+\frac{b_3}{16}\right)V_{REF}
=-\frac78\cdot\frac{k}{16}V_{REF}=-\frac{7k}{128}V_{REF},
$$

where $k$ is the code value 0 to 15. The ideal DAC, with $R_0=R$, gives $-kV_{REF}/16$.

### Step 3 — Characteristic

| Code | 0000 | 0001 | 0010 | 0100 | 1000 | 1111 |
|---|---|---|---|---|---|---|
| $k$ | 0 | 1 | 2 | 4 | 8 | 15 |
| Actual $|v_{out}|/V_{REF}$ | 0 | 0.0547 | 0.109 | 0.219 | 0.438 | 0.820 |
| Ideal $|v_{out}|/V_{REF}$ | 0 | 0.0625 | 0.125 | 0.25 | 0.5 | 0.9375 |

![4-bit DAC staircase with R0 = 7R/8 compared with the ideal staircase, plotted as output magnitude](/q/A426/solution-curves.svg)

The curve is a uniform, monotonic staircase through the origin; for positive $V_{REF}$ the output is negative, and its magnitude is plotted. Every step is $7/8$ LSB (LSB $=V_{REF}/16$) instead of 1 LSB, so the DNL is $-0.125$ LSB at every transition and the deviation from the ideal grows linearly with the code, reaching $15\times(-0.125)=-1.875$ LSB at 1111. There is no offset and no nonlinearity: the error is purely a $-12.5$ % gain error, which could be removed by restoring $R_0=R$.
