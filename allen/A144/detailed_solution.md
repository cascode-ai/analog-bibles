# Detailed solution - A144

Use the differential half circuit: for a purely differential input the common source node is an ac ground, so each side is a common-source stage driven by $\pm v_{id}/2$ and loaded by a diode-connected PMOS of resistance about $1/g_{m3}$. The single-ended gain is half the gain of one such stage, and because both devices carry the same current it reduces to a ratio of process parameters and sizes.

### Step 1 — Half circuit

With $v_{id}=v_1-v_2$ applied symmetrically, M1's gate moves by $+v_{id}/2$ and M2's by $-v_{id}/2$. The drain-current changes are equal and opposite, so no signal current reaches the tail and the common source node stays fixed: it is an ac ground for differential signals. Each side is then a common-source stage whose load is the diode-connected PMOS, of conductance $g_{m3}+g_{ds3}$ to ac ground ($V_{DD}$), in parallel with $g_{ds1}$.

### Step 2 — Single-ended gains

For side 1, KCL at $v_{o1}$:

$$
g_{m1}\frac{v_{id}}{2}+(g_{m3}+g_{ds1}+g_{ds3})v_{o1}=0
\quad\Rightarrow\quad
\frac{v_{o1}}{v_{id}}=-\frac{g_{m1}}{2(g_{m3}+g_{ds1}+g_{ds3})}\approx-\frac{g_{m1}}{2g_{m3}} .
$$

Side 2 receives $-v_{id}/2$, so $v_{o2}/v_{id}=+g_{m2}/(2g_{m4})$ with the same magnitude.

### Step 3 — Express in device parameters

M1 and M3 are in series and both carry $I_{SS}/2$. With $g_m=\sqrt{2K'(W/L)I_D}$ the current cancels:

$$
\frac{v_{o2}}{v_{id}}=\frac{g_{m2}}{2g_{m4}}=\frac12\sqrt{\frac{K'_N(W/L)_1}{K'_P(W/L)_3}}=\frac12\sqrt{\frac{110}{50}}\sqrt{\frac{(W/L)_1}{(W/L)_3}}=0.742\sqrt{\frac{(W/L)_1}{(W/L)_3}} .
$$

For equal $W/L$ of all four transistors the gain is $v_{o2}/v_{id}\approx0.74$ V/V, and $v_{o1}/v_{id}\approx-0.74$ V/V. The value does not depend on $I_{SS}$, as long as all devices stay saturated.

### Step 4 — Effect of the output conductances

With $W/L=1$ and 25 µA per device: $g_{m2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(25\ \mu\mathrm A)}=74.2$ µS, $g_{m4}=\sqrt{2(50\ \mu\mathrm{A/V^2})(25\ \mu\mathrm A)}=50$ µS and $g_{ds2}+g_{ds4}=(0.09\ \mathrm{V^{-1}})(25\ \mu\mathrm A)=2.25$ µS, so

$$
\frac{v_{o2}}{v_{id}}=\frac{74.2\ \mu\mathrm S}{2(50+2.25\ \mu\mathrm S)}=0.71\ \mathrm{V/V}.
$$

The diode loads keep the gain below 1 for equal sizes; a large gain would need $(W/L)_1/(W/L)_3$ to grow quadratically with the desired gain.
