# Detailed solution - A115

The same 100 µA flows through M1 and the diode-connected load M2. M1's square law gives the input voltage; M2's square law gives the output bias, which confirms that M1 is saturated. The small-signal model then has M1 as a transconductor $g_{m1}$ driving the output node, which is loaded by the diode conductance $g_{m2}$ in parallel with the two output conductances.

### Step 1 — Input voltage for 100 µA

M1 (source grounded, gate at $V_{in}$) is saturated. Neglecting the $(1+\lambda v_{DS})$ factor in the bias calculation,

$$
I_D=\frac{K'_N}{2}\frac{W_1}{L_1}(V_{in}-V_{TN})^2
\quad\Rightarrow\quad
V_{in}-0.7\ \mathrm V=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(5)}}=0.603\ \mathrm V,
$$

$$
V_{in}=1.303\ \mathrm V\approx1.30\ \mathrm V .
$$

### Step 2 — Output bias and saturation check

M2 is diode-connected ($v_{SD2}=v_{SG2}$), so it is saturated. Its source–gate voltage at 100 µA is

$$
V_{SG2}=|V_{TP}|+\sqrt{\frac{2I_D}{K'_P(W_2/L_2)}}=0.7\ \mathrm V+\sqrt{\frac{2(100\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(2)}}=0.7+1.414\ \mathrm V=2.114\ \mathrm V,
$$

so $V_{OUT}=5-2.114=2.89$ V. M1 is saturated because $V_{DS1}=2.89$ V exceeds $V_{in}-V_{TN}=0.603$ V.

Keeping $(1+\lambda_Nv_{DS1})$ at $v_{DS1}=2.89$ V lowers the required overdrive to $0.603\ \mathrm V/\sqrt{1.1154}$, giving $V_{in}\approx1.27$ V; the difference is small.

### Step 3 — Small-signal parameters

With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(2)(100\ \mu\mathrm A)}=141.4\ \mu\mathrm S,
$$

$$
g_{ds1}=(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=4\ \mu\mathrm S,\qquad
g_{ds2}=(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=5\ \mu\mathrm S .
$$

### Step 4 — Voltage gain

KCL at the output: M1 sinks $g_{m1}v_{in}$, and the node is loaded by the diode-connected M2 (its gate is tied to the output, so it acts as a conductance $g_{m2}$ to ac ground) and by $g_{ds1}$ and $g_{ds2}$:

$$
g_{m1}v_{in}+(g_{m2}+g_{ds1}+g_{ds2})v_{out}=0
\quad\Rightarrow\quad
A_v=-\frac{g_{m1}}{g_{m2}+g_{ds1}+g_{ds2}}=-\frac{331.7}{150.4}=-2.20\ \mathrm{V/V}.
$$

Neglecting the output conductances, $A_v\approx-g_{m1}/g_{m2}=-2.35$ V/V.

### Step 5 — Output resistance

With $v_{in}=0$, the same three conductances are in parallel at the output:

$$
R_{out}=\frac1{g_{m2}+g_{ds1}+g_{ds2}}=\frac1{150.4\ \mu\mathrm S}=6.65\ \mathrm{k\Omega},
$$

or $1/g_{m2}=7.07$ kΩ if $g_{ds}$ is neglected. The diode-connected load dominates both results, which is why the gain is small.
