# Detailed solution - G400

Each gain is that of a single-pole half circuit: a transconductance driving the output resistance in parallel with the load capacitance. For a single pole with dc gain $a_0\gg1$, $|a(j\omega)|=1$ occurs at $\omega\approx G_m/C$. Find $G_m$, $R$ and $a_0$ for the DM half circuit (input $M_1$) and for the CMC half circuit (input: half of $M_5$).

### Step 1 — Small-signal parameters

$M_1$–$M_4$ carry $I_{D5}/2=100\ \mu\mathrm A$, $M_5$ carries 200 μA, all with $|V_{ov}|=0.25$ V. With $g_m=2I_D/|V_{ov}|$ and $r_o=|V_A|/|I_D|$:

$$
\begin{aligned}
g_{m1}&=\frac{2(100\ \mu\mathrm A)}{0.25\ \mathrm V}=0.8\ \mathrm{mA/V},\qquad
g_{m5}=\frac{2(200\ \mu\mathrm A)}{0.25\ \mathrm V}=1.6\ \mathrm{mA/V},\\
r_{o1}&=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{25\ \mathrm V}{100\ \mu\mathrm A}=250\ \mathrm{k\Omega},\qquad
r_{o5}=\frac{20\ \mathrm V}{200\ \mu\mathrm A}=100\ \mathrm{k\Omega}.
\end{aligned}
$$

In the CM half circuit the tail transistor splits into two parallel halves, each carrying 100 μA, with $g_{m5h}=g_{m5}/2=0.8\ \mathrm{mA/V}$ and $r_{o5h}=2r_{o5}=200\ \mathrm{k\Omega}$.

### Step 2 — DM gain and its unity-gain frequency

For a differential input the tail node is an ac ground, and the gates of $M_3$, $M_4$ are at the fixed $V_{BIAS}$. The DM half circuit is a common-source stage with load $R=r_{o1}\parallel r_{o3}$ and $C_{Ld}$:

$$
a_{dm}(s)=-\frac{g_{m1}R}{1+sRC_{Ld}},\qquad
R=200\ \mathrm{k\Omega}\parallel250\ \mathrm{k\Omega}=111\ \mathrm{k\Omega},\qquad
a_{dm0}=-(0.8\ \mathrm{mA/V})(111\ \mathrm{k\Omega})=-88.9.
$$

Setting $|a_{dm}(j\omega)|=|a_{dm0}|/\sqrt{1+(\omega RC_{Ld})^2}=1$ gives $\omega=\sqrt{a_{dm0}^2-1}/(RC_{Ld})$, which for $|a_{dm0}|\gg1$ reduces to

$$
\omega_{u,dm}\approx\frac{g_{m1}}{C_{Ld}}=\frac{0.8\ \mathrm{mA/V}}{2\ \mathrm{pF}}=4.0\times10^{8}\ \mathrm{rad/s}\quad(64\ \mathrm{MHz}).
$$

### Step 3 — CMC gain and its unity-gain frequency

The CMC input drives the gate of $M_5$, with the input pair gates held at the fixed $V_{IC}$. In the CM half circuit, $M_{5h}$ is a transconductor whose drain current $g_{m5h}v_{cmc}$ enters the source of $M_1$, which acts as a common-gate (cascode) device; the output node sees $r_{o3}$ in parallel with the cascoded resistance looking down:

$$
R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=200\ \mathrm{k\Omega}(1+160)+200\ \mathrm{k\Omega}=32.4\ \mathrm{M\Omega},
\qquad R_c=R_{o(\mathrm{down})}\parallel r_{o3}=248\ \mathrm{k\Omega}.
$$

Almost all of $g_{m5h}v_{cmc}$ passes through $M_1$ (the source of $M_1$ has conductance $\approx g_{m1}$, far above $1/r_{o5h}$), so

$$
a_{cmc}(s)\approx-\frac{g_{m5h}R_c}{1+sR_cC_{Lc}},\qquad
a_{cmc0}\approx-(0.8\ \mathrm{mA/V})(248\ \mathrm{k\Omega})=-198.
$$

Again $|a_{cmc0}|\gg1$, so

$$
\omega_{u,cmc}\approx\frac{g_{m5h}}{C_{Lc}}=\frac{0.8\ \mathrm{mA/V}}{2\ \mathrm{pF}}=4.0\times10^{8}\ \mathrm{rad/s}\quad(64\ \mathrm{MHz}).
$$

### Step 4 — Why the two are equal

Each half of $M_5$ carries the same 100 μA as $M_1$ at the same overdrive, so $g_{m5h}=g_{m1}$; with $C_{Lc}=C_{Ld}$ the two unity-gain frequencies coincide at about $4.0\times10^{8}$ rad/s. The pole frequencies themselves ($1/(RC_{Ld})=4.5\times10^{6}$ rad/s and $1/(R_cC_{Lc})=2.0\times10^{6}$ rad/s) differ, because the dc gains differ.
