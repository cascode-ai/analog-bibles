# Detailed solution - A469

The circuit has three ideal inverting op-amp stages. Write the output of each with the virtual-ground summing rule, combine them into $v_{out}$, and choose $R_9$ and $R_{10}$ so that the two 4-bit groups get the binary weights of an 8-bit DAC.

### Step 1 — Upper-left summer (bits $b_4$–$b_7$)

Each closed switch connects $V_{REF}$ through its resistor to a virtual ground; the currents add in the feedback resistor $R$:

$$
V_A=-R\,V_{REF}\left(\frac{b_4}{2R}+\frac{b_5}{4R}+\frac{b_6}{8R}+\frac{b_7}{16R}\right)
=-V_{REF}\left(\frac{b_4}{2}+\frac{b_5}{4}+\frac{b_6}{8}+\frac{b_7}{16}\right).
$$

### Step 2 — Lower inverting amplifier

With input resistor $R_{10}$ from $V_{REF}$ and feedback $R$,

$$
V_B=-\frac{R}{R_{10}}V_{REF},
$$

and this voltage drives switches $b_0$–$b_3$ and resistors $R_1$–$R_4$.

### Step 3 — Output summer

The right op amp sums $V_A$ through $R_9$ and $V_B$ through the selected $R_1$–$R_4$, with feedback $R$:

$$
\begin{aligned}
v_{out}&=-R\left[\frac{V_A}{R_9}+V_B\left(\frac{b_0}{2R}+\frac{b_1}{4R}+\frac{b_2}{8R}+\frac{b_3}{16R}\right)\right]\\
&=\frac{R}{R_{10}}V_{REF}\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}+\frac{b_3}{16}\right)+\frac{R}{R_9}V_{REF}\left(\frac{b_4}{2}+\frac{b_5}{4}+\frac{b_6}{8}+\frac{b_7}{16}\right).
\end{aligned}
$$

### Step 4 — Values for an ideal 8-bit DAC

An ideal 8-bit DAC requires $v_{out}=V_{REF}\sum_{i=0}^{7}b_i/2^{i+1}$, i.e.

$$
\frac{R}{R_{10}}=1,\qquad \frac{R}{R_9}=\frac1{16}
\quad\Longrightarrow\quad
R_{10}=R,\qquad R_9=16R .
$$

Binary weighting by itself only requires the lower nibble to be weighted $1/16$ of the upper one, $R_9=16R_{10}$; the choice $R_{10}=R$ sets the full-scale range equal to $V_{REF}$.
