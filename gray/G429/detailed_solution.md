# Detailed solution - G429

The DM return ratio has a single pole and a dc value far above 1, so its unity-gain frequency is $\omega_r\approx g_{m1}f/C_{L\mathrm{eff}}$, where $f$ is the capacitive feedback factor and $C_{L\mathrm{eff}}$ the total capacitance on the output node with the loop broken. Solve for the required $C_{L\mathrm{eff}}$, then subtract the part contributed by the feedback network.

### Step 1 — Feedback factor and unity-gain frequency

Breaking the loop at the controlled source $g_{m1}v_{in}$, the output voltage returns to the input node through the divider $C_2$ versus $C_1+C_{ia}$:

$$
f=\frac{C_2}{C_2+C_1+C_{ia}}=\frac{4\ \mathrm{pF}}{10.58\ \mathrm{pF}}=0.378 .
$$

The return ratio is $\mathcal R_{dm}(j\omega)=g_{m1}R_{odh}f/(1+j\omega R_{odh}C_{L\mathrm{eff}})$. Its dc value $a_{dm0}f=484\gg1$, so it reaches unity far above its pole, where

$$
\omega_r\approx\frac{g_{m1}f}{C_{L\mathrm{eff}}}.
$$

### Step 2 — Required output-node capacitance

For $\omega_r=1.0\times10^{9}$ rad/s:

$$
C_{L\mathrm{eff}}=\frac{g_{m1}f}{\omega_r}=\frac{(30\ \mathrm{mA/V})(0.378)}{1.0\times10^{9}\ \mathrm{rad/s}}=11.34\ \mathrm{pF}.
$$

### Step 3 — Subtract the feedback-network loading

With the loop broken, the output node sees $C_L$ plus $C_2$ in series with $C_1+C_{ia}$:

$$
C_{L\mathrm{eff}}=C_L+\frac{C_2(C_1+C_{ia})}{C_2+C_1+C_{ia}}=C_L+\frac{(4)(6.58)}{10.58}\ \mathrm{pF}=C_L+2.49\ \mathrm{pF}.
$$

Hence

$$
C_L=11.34\ \mathrm{pF}-2.49\ \mathrm{pF}=8.85\ \mathrm{pF}.
$$

This is larger than the 6 pF that gives $\omega_r=1.34\times10^{9}$ rad/s, consistent with $\omega_r\propto1/C_{L\mathrm{eff}}$.
