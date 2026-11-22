# Detailed solution - A289

The resistance looking into the source of a cascode transistor depends on what loads its drain. Use the inspection result $R_s=(r_{ds}+R_D)/(1+g_mr_{ds})$ (derived from KCL at the drain with a test source at the source, gate at ac ground, body effect neglected) and identify the drain load $R_D$ of MC1 and MC2 with $v_{o1}$ shorted to ac ground. As usual, each cascode source is driven alone with M1/M2 removed and $g_mr_{ds}\gg1$.

### Step 1 — MC1

The output termination does not affect MC1. Its drain is the input of the p-channel cascode mirror (M3/M4 gates tied to the MC3 drain), a diode-like node with $R_D\approx1/g_{m3}$:

$$
R_{s,C1}=\frac{r_{dsC1}+1/g_{m3}}{1+g_{mC1}r_{dsC1}}\approx\frac1{g_{mC1}} .
$$

### Step 2 — MC2

With $v_{o1}$ shorted to ac ground, MC2's drain load is $R_D=0$:

$$
R_{s,C2}=\frac{r_{dsC2}}{1+g_{mC2}r_{dsC2}}\approx\frac1{g_{mC2}} .
$$

Both cascode sources are now low-impedance nodes. Compared with the open-output case, where $R_{s,C2}$ is of the order of $r_{ds}$, shorting the output removes the large p-channel cascode resistance from MC2's drain.
