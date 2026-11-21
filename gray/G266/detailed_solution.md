# Detailed solution - G266

$R_E$ senses the emitter current of $Q_2$ and $R_F$ returns a current to the base of $Q_1$: shunt–series feedback (a current amplifier). Use the $g$-parameters of the network $R_F$, $R_E$, with $g_{11f}$ and $g_{22f}$ loading the basic amplifier and $g_{12f}$, referred to the collector current, as $f$. The output impedance is limited by the base current of $Q_2$, which the loop does not sense.

### Step 1 — Small-signal parameters

$g_m=I_C/V_T=38.46$ mA/V, $r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$, $r_o=V_A/I_C=100\ \mathrm{k\Omega}$ for both devices; $\alpha_2=200/201$.

### Step 2 — Feedback network

$$
g_{11f}=\frac1{R_E+R_F}=\frac1{5.2\ \mathrm{k\Omega}},\qquad g_{22f}=R_E\parallel R_F=192.3\ \Omega,
$$

$$
f=-\frac{R_E}{R_E+R_F}\cdot\frac1{\alpha_2}=-\frac{200}{5200}\cdot\frac{201}{200}=-0.0387,\qquad \frac1f=-25.9 .
$$

The sign is negative because the emitter current of $Q_2$ flowing down through $R_E$ draws current out of the input node; $1/\alpha_2$ refers the sensed emitter current to $i_o$.

### Step 3 — Basic amplifier

With an ideal current-source drive ($y_S=0$), the input node sees $(R_E+R_F)\parallel r_{\pi1}=5.2\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}=2.6\ \mathrm{k\Omega}$. $Q_2$, with $g_{22f}$ in its emitter, presents

$$
R_{in2}=r_{\pi2}+(\beta+1)(192.3\ \Omega)=43.9\ \mathrm{k\Omega},
$$

so the collector of $Q_1$ sees $R_{L1}\parallel r_{o1}\parallel R_{in2}=10\ \mathrm{k\Omega}\parallel100\ \mathrm{k\Omega}\parallel43.9\ \mathrm{k\Omega}=7.53\ \mathrm{k\Omega}$. Following the signal ($v_{be1}=i(2.6\ \mathrm{k\Omega})$, $v_{c1}=-g_{m1}v_{be1}(7.53\ \mathrm{k\Omega})$, $i_o=\beta v_{c1}/R_{in2}$):

$$
a=-(2.6\ \mathrm{k\Omega})(38.46\ \mathrm{mA/V})(7.53\ \mathrm{k\Omega})\frac{200}{43.9\ \mathrm{k\Omega}}=-3434 .
$$

### Step 4 — Loop transmission and current gain

$$
T=af=(-3434)(-0.0387)=133,\qquad \frac{i_o}{i_s}=\frac{a}{1+T}=\frac{-3434}{133.7}=-25.7 .
$$

The return ratios of the controlled sources give similar loop transmissions (131 for $g_{m1}$, 142 for $g_{m2}$), and a direct nodal solution gives $i_o/i_s=-25.68$. The negative sign reflects the reference direction of $i_o$ (into the collector of $Q_2$).

### Step 5 — Input impedance

$$
Z_{in}=\frac{2.6\ \mathrm{k\Omega}}{1+T}=\frac{2600\ \Omega}{133.7}=19.4\ \Omega .
$$

### Step 6 — Output impedance

Without feedback, the collector of $Q_2$ (emitter resistance $192.3\ \Omega$, base driven from $R_{L1}\parallel r_{o1}$) presents

$$
z_{oa}\approx r_{o2}\left[1+\frac{g_{m2}(192.3\ \Omega)\,r_{\pi2}}{r_{\pi2}+R_{L1}\parallel r_{o1}+192.3\ \Omega}\right]=366\ \mathrm{k\Omega}.
$$

The two-port result $(1+T)z_{oa}=49$ MΩ is not achievable. The loop holds the emitter current of $Q_2$ constant; then a collector voltage $v$ sends $v/r_{o2}$ through $r_{o2}$, the loop cancels it in the emitter by changing $g_{m2}v_{be2}(1+1/\beta)$, and only the part $v/[(\beta+1)r_{o2}]$ that flows as base current reaches the collector terminal. Hence $Z_{out}<(\beta+1)r_{o2}=20.1$ MΩ even for infinite loop gain. With $T\approx133$ an exact nodal solution gives

$$
Z_{out}\approx14.3\ \mathrm{M\Omega}.
$$

Summary: $i_o/i_s\approx-25.7$, $T\approx133$, $Z_{in}\approx19.4\ \Omega$, $Z_{out}\approx14$ MΩ.
