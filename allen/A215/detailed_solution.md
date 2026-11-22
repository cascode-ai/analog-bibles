# Detailed solution - A215

Find the quiescent current of M1 at $v_{OUT}=0$, compute its small-signal parameters, and evaluate the conductance seen looking into the output node with the input held at ac ground.

### Step 1 — Operating point

At $v_{OUT}=0$ the resistor carries no current, so KCL at the output sets M1's drain current equal to the sink current:

$$
I_{D1}=I_Q+\frac{v_{OUT}}{R_L}=200\ \mu\mathrm A.
$$

M1 is saturated: its drain is at $+2.5$ V, so $V_{DS1}=2.5$ V, well above the overdrive $\sqrt{2I_{D1}/\beta_1}\approx0.19$ V, with $\beta_1=K'_N(W/L)=11\ \mathrm{mA/V^2}$.

### Step 2 — Small-signal parameters

With the square-law model,

$$
g_{m1}=\sqrt{2K'_N\frac WL I_{D1}}=\sqrt{2(110\ \mu\mathrm{A/V^2})(100)(200\ \mu\mathrm A)}=2.098\ \mathrm{mS},
$$

$$
g_{ds1}=\lambda I_{D1}=(0.04\ \mathrm{V^{-1}})(200\ \mu\mathrm A)=8\ \mu\mathrm S.
$$

The bulk effect is ignored ($g_{mbs1}=0$), and the ideal sink adds no conductance.

### Step 3 — Output resistance

Set $v_{in}=0$ and apply a test voltage $v_t$ at the output. The gate is at ac ground, so $v_{gs1}=-v_t$, and the current drawn from the test source is

$$
i_t=-g_{m1}v_{gs1}+g_{ds1}v_t=(g_{m1}+g_{ds1})v_t .
$$

Hence, looking into the source of M1,

$$
R_{out}=\frac{1}{g_{m1}+g_{ds1}}=\frac{1}{2.106\ \mathrm{mS}}=475\ \Omega\approx\frac1{g_{m1}}=477\ \Omega .
$$

The output resistance is set by $1/g_{m1}$; $g_{ds1}$ changes it by less than 0.5%. If the 10-kΩ load is counted as part of the output node,

$$
R_{out}=\frac{1}{g_{m1}+g_{ds1}+1/R_L}=\frac{1}{2.206\ \mathrm{mS}}\approx453\ \Omega .
$$
