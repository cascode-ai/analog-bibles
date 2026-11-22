# Detailed solution - A205

In the source follower the output is M1's source. Its small-signal model at that node contains $g_{m1}v_{gs}$, the body transconductance $g_{mbs1}v_{bs}$ (the bulk is at $V_{SS}$, ac ground, while the source moves), and the conductances $g_{ds1}$ and $g_{ds2}$ of M1 and the sink M2. KCL at the output gives both the gain and the output resistance; the body effect is evaluated at $V_{SB1}=6$ V.

### Step 1 — Small-signal parameters

At $I_D=50\ \mu$A and $W/L=2$:

$$
g_{m1}=\sqrt{2K'_N(W/L)I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S .
$$

M1's source is at $V_{OUT}=1$ V and its bulk at $-5$ V, so $V_{SB1}=6$ V and

$$
g_{mbs1}=\frac{g_{m1}\gamma}{2\sqrt{2|\phi_F|+V_{SB1}}}=\frac{(148.3\ \mu\mathrm S)(0.4)}{2\sqrt{6.7}}=11.5\ \mu\mathrm S .
$$

$$
g_{ds1}=g_{ds2}=\lambda I_D=(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2\ \mu\mathrm S .
$$

### Step 2 — Voltage gain

M1's drain is at $V_{DD}$ (ac ground), its gate at $v_{in}$ and its source at $v_{out}$; the bulk is at ac ground, so $v_{bs}=-v_{out}$. M2's gate is fixed. With the output unloaded, the current M1 pushes into the output must leave through $g_{ds2}$:

$$
g_{m1}(v_{in}-v_{out})-g_{mbs1}v_{out}-g_{ds1}v_{out}=g_{ds2}v_{out},
$$

$$
A_v=\frac{v_{out}}{v_{in}}=\frac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}=\frac{148.3}{148.3+11.5+2+2}=\frac{148.3}{163.8}=0.906\ \mathrm{V/V}.
$$

The body effect is what costs most of the gain: without it the result would be 0.974.

### Step 3 — Output resistance

With $v_{in}=0$, all four terms in the denominator act as conductances from the output to ac ground:

$$
R_{out}=\frac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}=\frac{1}{163.8\ \mu\mathrm S}=6.1\ \mathrm{k\Omega}.
$$

These use $g_m=\sqrt{2K'(W/L)I_D}$ with λ left out of the bias. If the $(1+\lambda V_{DS})$ factor is kept ($V_{DS1}=4$ V), $g_{m1}$ rises to about 160 µS and $R_{out}$ falls to about 5.7 kΩ, with the gain essentially unchanged at 0.91.
