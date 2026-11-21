# Detailed solution - A208

The slew rate is the largest $dv_{OUT}/dt$, set by the current available to charge the load capacitor. For a rising output the p-channel follower M1 can only turn off, so the charging current comes entirely from the 200-µA source; find how much of it reaches $C_L$ at $v_{OUT}=0$.

### Step 1 — State of M1 during a positive step

A large positive step on $v_{IN}$ makes $V_{SG1}=v_{OUT}-v_{IN}$ negative, so M1 turns off and sinks no current. It cannot help raise the output, since a p-channel follower only removes current from its source node.

### Step 2 — Current into $C_L$

KCL at the output: the 200-µA source current divides between $R_L$ and $C_L$. At $v_{OUT}=0$ the resistor carries $v_{OUT}/R_L=0$, so the whole 200 µA charges the capacitor:

$$
SR^+=\frac{dv_{OUT}}{dt}=\frac{I}{C_L}=\frac{200\ \mu\mathrm A}{50\ \mathrm{pF}}=4\times10^{6}\ \mathrm{V/s}=+4\ \mathrm{V/\mu s}.
$$

The positive slew rate is limited by the bias current source, not by the large device M1.
