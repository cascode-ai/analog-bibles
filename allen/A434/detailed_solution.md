# Detailed solution - A434

The op amp with feedback resistor $R$ is a transimpedance amplifier: the selected current sinks draw their total current out of the virtual-ground node, and that current must come from the output through $R$. Write the output as a function of the code, identify the full-scale range, and solve for $I$.

### Step 1 — Output voltage

The noninverting input is grounded, so the inverting input is a virtual ground and the unselected sinks, switched to ground, do not affect the output. The selected sinks draw

$$
I_{sum}=I\Bigl(b_0+\frac{b_1}2+\frac{b_2}4+\cdots+\frac{b_7}{128}\Bigr)
$$

out of the summing node. This current flows from $v_{out}$ through $R$ into the node, so

$$
v_{out}=R\,I_{sum}=2RI\,D,\qquad D=\sum_{i=0}^{7}\frac{b_i}{2^{i+1}}=\frac k{256},
$$

which is positive for every code.

### Step 2 — Full-scale range

As for any $N$-bit DAC, the full-scale range is the output that $D$ approaches as it tends to 1, i.e. $2^N$ LSB:

$$
\mathrm{FSR}=2RI ,\qquad \mathrm{LSB}=\frac{\mathrm{FSR}}{256}=\frac{RI}{128} .
$$

The largest output actually produced, at code 11111111, is $\mathrm{FSR}(255/256)$.

### Step 3 — Solve for $I$

$$
2RI=1\ \mathrm V
\quad\Rightarrow\quad
I=\frac{1\ \mathrm V}{2(1\ \mathrm{k\Omega})}=0.5\ \mathrm{mA}.
$$

The sinks are then 0.5 mA, 0.25 mA, … down to $0.5\ \mathrm{mA}/128=3.9\ \mu$A, and 1 LSB is $1\ \mathrm V/256=3.9$ mV. If instead the all-ones output is required to be exactly 1 V, then $2RI(255/256)=1$ V and $I=0.502$ mA.
