# Detailed solution - A288

Use the standard inspection result for the resistance looking into the source of a common-gate (cascode) transistor whose drain is loaded by $R_D$, and identify $R_D$ for each cascode device. The port is the usual one: each cascode source is driven alone with M1/M2 removed, the MC1/MC2 gates at ac ground, body effect neglected and $g_mr_{ds}\gg1$.

### Step 1 — Source resistance of a cascode device

Drive the source with a test voltage $v_x$ and current $i_x$. The same current flows through the drain load, so the drain voltage is $i_xR_D$. KCL at the drain, with $v_{gs}=-v_x$:

$$
i_x=g_mv_x+\frac{v_x-i_xR_D}{r_{ds}}\;\Rightarrow\;
R_s=\frac{v_x}{i_x}=\frac{r_{ds}+R_D}{1+g_mr_{ds}} .
$$

A small $R_D$ gives $R_s\approx1/g_m$; a drain load of order $g_mr_{ds}^2$ gives $R_s$ of order $r_{ds}$.

### Step 2 — MC1

MC1's drain is the input of the p-channel cascode mirror: the gates of M3/M4 are tied to the MC3 drain, so this node behaves like a diode-connected load, $R_D\approx1/g_{m3}$. Then

$$
R_{s,C1}=\frac{r_{dsC1}+1/g_{m3}}{1+g_{mC1}r_{dsC1}}\approx\frac1{g_{mC1}} .
$$

### Step 3 — MC2

With $v_{o1}$ open, MC2's drain sees only the output resistance of the p-channel cascode MC4 over M4, $R_D\approx g_{mC4}r_{dsC4}r_{ds4}$. Then

$$
R_{s,C2}\approx\frac{g_{mC4}r_{dsC4}r_{ds4}}{g_{mC2}r_{dsC2}}=r_{ds4}\cdot\frac{g_{mC4}r_{dsC4}}{g_{mC2}r_{dsC2}}\approx r_{ds},
$$

that is, $r_{ds4}$ scaled by the ratio of the two cascode devices' intrinsic gains. Looking into MC2's source therefore gives a high resistance, of the order of one drain resistance, not $1/g_m$: the open, high-impedance output node is reflected back through MC2 divided only by its intrinsic gain.
