# Detailed solution - A271

The two-stage op amp's low-frequency gain is the product of the first-stage gain (input pair with current-mirror load) and the second-stage gain (common-source M6 with current-sink load M7). Each stage gain is its transconductance times the parallel output resistance at its output node. All devices are saturated; $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$.

### Step 1 — First stage

With the mirror load, the full differential current $g_{m1}v_{id}$ reaches the first-stage output node, where $r_{ds2}\parallel r_{ds4}$ load it. Each input device carries $I_5/2=22.8$ µA:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(22.8\ \mu\mathrm A)}=224\ \mu\mathrm S,\qquad
g_{ds2}+g_{ds4}=(\lambda_N+\lambda_P)\frac{I_5}{2}=(0.09\ \mathrm{V^{-1}})(22.8\ \mu\mathrm A)=2.06\ \mu\mathrm S,
$$
$$
A_{v1}=\frac{g_{m1}}{g_{ds2}+g_{ds4}}=\frac{224\ \mu\mathrm S}{2.06\ \mu\mathrm S}=109 .
$$

### Step 2 — Second stage

M6 (p-channel) and M7 (n-channel) both carry 228 µA:

$$
g_{m6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(100)(228\ \mu\mathrm A)}=1.51\ \mathrm{mS},\qquad
g_{ds6}+g_{ds7}=(0.05+0.04)(228\ \mu\mathrm A)=20.6\ \mu\mathrm S,
$$
$$
A_{v2}=\frac{g_{m6}}{g_{ds6}+g_{ds7}}=\frac{1.51\ \mathrm{mS}}{20.6\ \mu\mathrm S}=73.6 .
$$

### Step 3 — Overall gain

$$
A_{vd}(0)=A_{v1}A_{v2}=\frac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})}=109\times73.6=8.0\times10^3\ \mathrm{V/V}\ (78\ \mathrm{dB}).
$$
