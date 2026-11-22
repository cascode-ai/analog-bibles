# Detailed solution - A153

This is a telescopic cascode amplifier: n-channel cascode transistors M3 and M4 (gates at $V_{BN}$) sit above the input pair, and M5–M8 form a p-channel cascode current mirror. The cascodes pass the signal currents through unchanged, so the signal-current argument is the same as for a simple mirror load. Both sides of the output node are now cascoded, so the output resistance is the parallel combination of two cascode resistances.

### Step 1 — Resistance looking down

M4's gate is at the fixed bias $V_{BN}$, and its source sees the drain resistance of M2, about $r_{ds2}$ (M2's source is the common node, an ac ground for the differential signal). Looking into M4's drain:

$$
R_{down}\approx g_{m4}r_{ds4}r_{ds2}=\frac{g_{m4}}{g_{ds2}g_{ds4}} .
$$

### Step 2 — Resistance looking up

M8 (gate on the M7 diode node) presents $r_{ds8}$ at the source of M6, whose gate is held by the M5 diode node:

$$
R_{up}\approx g_{m6}r_{ds6}r_{ds8}=\frac{g_{m6}}{g_{ds6}g_{ds8}} .
$$

### Step 3 — Output resistance

$$
R_{out}\approx R_{down}\,\|\,R_{up}=\frac{1}{g_{ds2}g_{ds4}/g_{m4}+g_{ds6}g_{ds8}/g_{m6}}=\frac{g_{m4}g_{m6}}{g_{m6}g_{ds2}g_{ds4}+g_{m4}g_{ds6}g_{ds8}} .
$$

Each term is a factor $g_mr_{ds}$ larger than the corresponding $r_{ds}$ of the uncascoded stage.

### Step 4 — Signal current and gain

With M1's gate at $+v_{in}/2$ and M2's at $-v_{in}/2$, M1's current rises by $g_{m1}v_{in}/2$; it passes through M3 and is mirrored by the cascode mirror into the output. M2's current falls by $g_{m2}v_{in}/2$ and passes through M4 to the output. Both add, giving $(g_{m1}+g_{m2})v_{in}/2=g_{m1}v_{in}$ into $R_{out}$ for a matched pair and a 1:1 mirror:

$$
\frac{v_{out}}{v_{in}}\approx\frac{(g_{m1}+g_{m2})\,g_{m4}g_{m6}}{2(g_{m6}g_{ds2}g_{ds4}+g_{m4}g_{ds6}g_{ds8})}=g_{m1}R_{out}\quad\text{(noninverting)}.
$$

With similar $g_m$ and $g_{ds}$ values this is of order $(g_mr_{ds})^2/2$, about $g_mr_{ds}$ times the gain of the simple mirror-loaded stage. The price is reduced output swing and input common-mode range, because four devices are stacked between the rails in each branch.
