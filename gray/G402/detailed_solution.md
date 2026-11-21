# Detailed solution - G402

Only the part of the tail that the CMC input drives contributes to the CMC transconductance. Express the CMC unity-gain frequency in terms of $g_{m52}$, set it equal to the DM unity-gain frequency, and convert the required $g_{m52}$ into a current at the given overdrive.

### Step 1 — DM unity-gain frequency (target)

The DM half circuit is unchanged by splitting the tail, because the tail node is an ac ground for differential signals. With $g_{m1}=2I_{D1}/V_{ov}=2(100\ \mu\mathrm A)/0.25\ \mathrm V=0.8\ \mathrm{mA/V}$,

$$
\omega_{u,dm}=\frac{g_{m1}}{C_{Ld}}=\frac{0.8\ \mathrm{mA/V}}{4\ \mathrm{pF}}=2.0\times10^{8}\ \mathrm{rad/s}.
$$

Without the split, $\omega_{u,cmc}=g_{m5h}/C_{Lc}=(0.8\ \mathrm{mA/V})/(2\ \mathrm{pF})=4.0\times10^{8}$ rad/s, twice this value.

### Step 2 — CMC unity-gain frequency with the split tail

$M_{51}$ has its gate at a fixed bias, so it contributes only its output resistance to the tail node and no signal current. In the CM half circuit only half of $M_{52}$ converts $v_{cmc}$ into current, which passes through the cascoding $M_1$ to the output node loaded by $C_{Lc}$. As before, the dc CMC gain is much larger than 1, so

$$
\omega_{u,cmc}\approx\frac{g_{m52h}}{C_{Lc}}=\frac{g_{m52}/2}{C_{Lc}}.
$$

### Step 3 — Required transconductance and current of $M_{52}$

Setting $\omega_{u,cmc}=\omega_{u,dm}$:

$$
\frac{g_{m52}}{2C_{Lc}}=\frac{g_{m1}}{C_{Ld}}
\;\Rightarrow\;
g_{m52}=2g_{m1}\frac{C_{Lc}}{C_{Ld}}=2(0.8\ \mathrm{mA/V})\frac{2\ \mathrm{pF}}{4\ \mathrm{pF}}=0.8\ \mathrm{mA/V}.
$$

With $g_{m52}=2I_{D52}/V_{ov52}$ in saturation,

$$
I_{D52}=\frac{g_{m52}V_{ov52}}{2}=\frac{(0.8\ \mathrm{mA/V})(0.25\ \mathrm V)}{2}=100\ \mu\mathrm A,
\qquad I_{D51}=200\ \mu\mathrm A-100\ \mu\mathrm A=100\ \mu\mathrm A.
$$

### Step 4 — Result and its cost

Split the tail current equally: $I_{D51}=I_{D52}=100\ \mu\mathrm A$. Both halves keep $V_{ov}=0.25$ V and the total tail current is unchanged, so the bias point and CM input range are unaffected. Because only half of the tail now responds to $v_{cmc}$ while the output resistance is the same, the low-frequency CMC gain is halved (to about $-99$).
