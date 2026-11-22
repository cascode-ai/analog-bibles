# Detailed solution - G426

Compute the return ratio of the controlled source $g_{m1}v_{in}$ in the DM half circuit: set the independent sources to zero, replace the controlled source by an independent test current, find the voltage that the circuit returns to the controlling node $v_{in}$, and take the ratio. At low frequency the output node is set by $R_{odh}$, and the input node by a purely capacitive divider whose ratio does not depend on frequency.

### Step 1 — DM half circuit during $\phi_1$

With $\phi_1$ high, the DM half circuit is: the source (zero for the return-ratio calculation, hence ground) through $C_1$ to the op-amp input node; $C_2$ from the input node to the output; $C_{ia}$ from the input node to ground; and at the output, the controlled current $g_{m1}v_{in}$ in parallel with $R_{odh}$ and $C_L$. The op-amp DM gain is $a_{dm0}=g_{m1}R_{odh}=1280$, inverting, so

$$
R_{odh}=\frac{a_{dm0}}{g_{m1}}=\frac{1280}{30\ \mathrm{mA/V}}=42.7\ \mathrm{k\Omega}.
$$

### Step 2 — Break the loop at the controlled source

Replace $g_{m1}v_{in}$ by a test current $i_t$ flowing out of the output node. At low frequency the capacitive branch draws negligible current compared with $R_{odh}$, so

$$
v_o=-i_tR_{odh}.
$$

### Step 3 — Return path to the input node

The input node draws no resistive current, so it is set by the capacitive divider between $C_2$ (to $v_o$) and $C_1+C_{ia}$ (to ground):

$$
v_{in}=\frac{C_2}{C_2+C_1+C_{ia}}\,v_o=\frac{4\ \mathrm{pF}}{4\ \mathrm{pF}+4\ \mathrm{pF}+2.58\ \mathrm{pF}}\,v_o=0.378\,v_o .
$$

$C_L$ is in parallel with the output and does not affect this ratio.

### Step 4 — Return ratio

The controlled source would deliver $g_{m1}v_{in}$; the return ratio is the negative of the returned signal over the test signal:

$$
\mathcal R_{dm0}=-\frac{g_{m1}v_{in}}{i_t}
=g_{m1}R_{odh}\frac{C_2}{C_2+C_1+C_{ia}}
=a_{dm0}\frac{C_2}{C_1+C_2+C_{ia}}=(1280)(0.378)=484 .
$$

This is the op-amp DM gain times the feedback factor; including $C_{ia}$ lowers the feedback factor from $0.5$ to $0.378$.
