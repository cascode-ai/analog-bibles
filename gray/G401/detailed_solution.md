# Detailed solution - G401

Each gain is that of a single-pole half circuit: a transconductance driving an output resistance in parallel with a load capacitance. For a single pole with dc gain $|a_0|\gg1$, $|a(j\omega)|=1$ occurs at $\omega\approx G_m/C$. The DM half circuit is driven by $M_1$ and loaded by $C_{Ld}$; the CMC half circuit is driven by half of $M_5$ and loaded by $C_{Lc}$.

### Step 1 — Small-signal parameters

$M_1$–$M_4$ carry $I_{D5}/2=100\ \mu\mathrm A$ and $M_5$ carries 200 μA, all at $|V_{ov}|=0.25$ V. With $g_m=2I_D/|V_{ov}|$ and $r_o=|V_A|/|I_D|$:

| Quantity | Value |
|---|---|
| $g_{m1}=2(100\ \mu\mathrm A)/0.25\ \mathrm V$ | 0.8 mA/V |
| $g_{m5h}=g_{m5}/2=\tfrac12\cdot2(200\ \mu\mathrm A)/0.25\ \mathrm V$ | 0.8 mA/V |
| $r_{o1}=20\ \mathrm V/100\ \mu\mathrm A$ | 200 kΩ |
| $r_{o3}=25\ \mathrm V/100\ \mu\mathrm A$ | 250 kΩ |
| $r_{o5h}=2r_{o5}=2(20\ \mathrm V/200\ \mu\mathrm A)$ | 200 kΩ |

$g_{m5h}$ and $r_{o5h}$ describe one of the two parallel halves of the tail transistor that appear in the CM half circuit.

### Step 2 — DM unity-gain frequency

For a differential input the tail node is an ac ground and the load gates are at fixed bias, so the DM half circuit is a common-source stage:

$$
a_{dm}(s)=-\frac{g_{m1}R}{1+sRC_{Ld}},\qquad R=r_{o1}\parallel r_{o3}=111\ \mathrm{k\Omega},\qquad a_{dm0}=-88.9.
$$

$|a_{dm}(j\omega)|=|a_{dm0}|/\sqrt{1+(\omega RC_{Ld})^2}=1$ gives $\omega=\sqrt{a_{dm0}^2-1}/(RC_{Ld})\approx g_{m1}/C_{Ld}$ because $|a_{dm0}|\gg1$:

$$
\omega_{u,dm}\approx\frac{g_{m1}}{C_{Ld}}=\frac{0.8\ \mathrm{mA/V}}{4\ \mathrm{pF}}=2.0\times10^{8}\ \mathrm{rad/s}\quad(32\ \mathrm{MHz}).
$$

### Step 3 — CMC unity-gain frequency

In the CM half circuit, $M_{5h}$ converts $v_{cmc}$ to a current $g_{m5h}v_{cmc}$ that flows through $M_1$, which acts as a common-gate (cascode) device because its gate is at the fixed input CM level. The output node sees

$$
R_c=r_{o3}\parallel\left[r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}\right]=250\ \mathrm{k\Omega}\parallel32.4\ \mathrm{M\Omega}=248\ \mathrm{k\Omega},
$$

so

$$
a_{cmc}(s)\approx-\frac{g_{m5h}R_c}{1+sR_cC_{Lc}},\qquad a_{cmc0}\approx-198,
\qquad
\omega_{u,cmc}\approx\frac{g_{m5h}}{C_{Lc}}=\frac{0.8\ \mathrm{mA/V}}{2\ \mathrm{pF}}=4.0\times10^{8}\ \mathrm{rad/s}\quad(64\ \mathrm{MHz}).
$$

### Step 4 — Comparison

$g_{m5h}=g_{m1}$ because each tail half carries the same current at the same overdrive as $M_1$. The only difference is the load: $C_{Ld}=2C_{Lc}$, so the DM unity-gain frequency, $2.0\times10^{8}$ rad/s, is half the CMC unity-gain frequency, $4.0\times10^{8}$ rad/s.
