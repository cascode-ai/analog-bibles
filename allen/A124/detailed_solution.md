# Detailed solution - A124

M1, the p-channel device, is the input transistor; M2, with its gate at the dc voltage $V_{GG}$, is a current-sink load whose controlled source is inactive for small signals. The gain is the transconductance of M1 divided by the total conductance at the output, which is only the two output conductances.

### Step 1 — Small-signal parameters

Both devices carry 100 µA in saturation. The input device is M1, so its transconductance uses the p-channel $K'_P$ and its size:

$$
g_{m1}=\sqrt{2K'_P\frac{W_1}{L_1}I_D}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=223.6\ \mu\mathrm S .
$$

With $g_{ds}=\lambda I_D$:

$$
g_{ds1}=(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=5\ \mu\mathrm S,\qquad
g_{ds2}=(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=4\ \mu\mathrm S .
$$

### Step 2 — Gain

M1's source is at $V_{DD}$ (ac ground), so $v_{sg1}=-v_{in}$ and M1 supplies $g_{m1}v_{sg1}=-g_{m1}v_{in}$ to the output. M2 has $v_{gs2}=0$ and contributes only $g_{ds2}$. KCL at the output:

$$
-g_{m1}v_{in}=(g_{ds1}+g_{ds2})v_{out}
\quad\Rightarrow\quad
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}}{g_{ds1}+g_{ds2}}=-\frac{223.6\ \mu\mathrm S}{9\ \mu\mathrm S}=-24.8\ \mathrm{V/V}.
$$

The output resistance is $1/(9\ \mu\mathrm S)=111$ kΩ. The gain is inverting, and its magnitude is set by the two $\lambda$ values: at fixed current, $|A_v|=\sqrt{2K'_P(W_1/L_1)}/[(\lambda_P+\lambda_N)\sqrt{I_D}]$.
