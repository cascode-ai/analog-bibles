# Detailed solution - A473

The coupling capacitor $C_x$ must attenuate the 3-bit LSB section by exactly $2^3=8$ relative to the MSB section. Choose $C_x$ so that the LSB side, seen through $C_x$, acts as one unit capacitor terminating the MSB array, then confirm the result by solving the two-node charge balance.

### Step 1 — The two sections

- MSB side (buffer input node, voltage $v_{OUT}$): $4C$ ($b_0$), $2C$ ($b_1$), $C$ ($b_2$); total $7C$.
- LSB side (node $v_L$): $4C$ ($b_3$), $2C$ ($b_4$), $C$ ($b_5$) and the terminating $C$ to ground; total $8C$.

Define the section codes $A=4b_0+2b_1+b_2$ and $B=4b_3+2b_4+b_5$ (each 0–7).

### Step 2 — Required $C_x$

A terminated 3-bit array of total $8C$ produces $(A/8)V_{REF}$. For the MSB node to see $8C$ in total, the LSB side must add an effective unit capacitor $C$, so $C_x$ in series with the $8C$ of the LSB side must equal $C$:

$$
\frac1{C_x}+\frac1{8C}=\frac1C
\quad\Longrightarrow\quad
C_x=\frac87C\approx1.143C .
$$

The LSB array alone would set its node to $V_L=(B/8)V_{REF}$ behind $8C$; through the effective coupling $C$ it then adds $V_L\cdot C/8C=(B/64)V_{REF}$ to the MSB node, which is the required $1/8$ scaling.

### Step 3 — Check by charge balance

With all capacitors initially discharged and the buffer drawing no charge, the charge on each floating node is zero:

$$
\begin{aligned}
\text{MSB node:}&\quad 7C\,v_{OUT}+C_x\left(v_{OUT}-v_L\right)=C\,V_{REF}A,\\
\text{LSB node:}&\quad 8C\,v_L+C_x\left(v_L-v_{OUT}\right)=C\,V_{REF}B .
\end{aligned}
$$

Eliminating $v_L$:

$$
v_{OUT}=V_{REF}\,\frac{A\left(8C+C_x\right)+C_xB}{56C+15C_x}.
$$

For $C_x=8C/7$ the numerator is $(64A+8B)C/7$ and the denominator $512C/7$, so

$$
v_{OUT}=V_{REF}\left(\frac{A}{8}+\frac{B}{64}\right)=V_{REF}\sum_{i=0}^{5}\frac{b_i}{2^{i+1}},
$$

the output of an ideal 6-bit DAC.
