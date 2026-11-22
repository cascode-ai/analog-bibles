# Detailed solution - G312

This is a two-stage CMOS op amp: a PMOS differential pair $M_1$–$M_2$ with mirror load $M_3$–$M_4$, then a common-source stage $M_6$ with current-source load $M_7$, and Miller compensation $C_c$ through the zero-cancelling resistor $M_9$. Find the bias currents from the mirrors, compute $L_{\text{eff}}$, $\lambda$, $g_m$ and $r_o$, and multiply the two stage gains. With the zero cancelled, the unity-gain bandwidth is $g_{m1}/C_c$ and the slew rate is the tail current over $C_c$.

### Step 1 — Effective length and $\lambda$

All drawn lengths are 1 μm, so for every device in the active region
$$
L_{\text{eff}}=L_{\text{drwn}}-2L_d-X_d=1-2(0.09)-0.1=0.72\ \mu\mathrm m .
$$
With $\lambda=(dX_d/dV_{DS})/L_{\text{eff}}$:
$$
\lambda_n=\frac{0.02\ \mu\mathrm{m/V}}{0.72\ \mu\mathrm m}=0.0278\ \mathrm{V^{-1}},\qquad
\lambda_p=\frac{0.04\ \mu\mathrm{m/V}}{0.72\ \mu\mathrm m}=0.0556\ \mathrm{V^{-1}}.
$$

### Step 2 — Bias currents

$M_8$ is diode-connected and carries the 200-μA reference. $M_5$ and $M_7$ have the same size and the same $V_{GS}$, so each also carries 200 μA, neglecting channel-length modulation in the mirrors.

- The tail current $I_{D5}=200$ μA splits equally: $I_{D1}=I_{D2}=I_{D3}=I_{D4}=100$ μA.
- At balance, the drain of $M_4$ sits at the same voltage as the drain of the diode $M_3$, so $V_{GS6}=V_{GS3}$. $M_6$ (100/1) is twice $M_3$ (50/1), so $I_{D6}=200$ μA. This matches the 200 μA that $M_7$ supplies, so the output is consistently biased.

### Step 3 — First-stage gain

With $I_D=\frac{k'}{2}\frac{W}{L_{\text{eff}}}V_{ov}^2$, the transconductance is $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$. For $M_1$, $W/L_{\text{eff}}=150/0.72=208.3$:
$$
g_{m1}=\sqrt{2\left(64.7\ \mu\mathrm{A/V^2}\right)(208.3)(100\ \mu\mathrm A)}=1.642\ \mathrm{mA/V},\qquad |V_{ov1}|=\frac{2I_{D1}}{g_{m1}}=0.122\ \mathrm V .
$$
With the mirror load, the first stage is a transconductance $g_{m1}$ driving the resistance at the drains of $M_2$ and $M_4$:
$$
r_{o2}=\frac1{\lambda_pI_{D2}}=\frac1{(0.0556\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=180\ \mathrm{k\Omega},\qquad
r_{o4}=\frac1{\lambda_nI_{D4}}=360\ \mathrm{k\Omega},
$$
$$
R_1=r_{o2}\,\|\,r_{o4}=120\ \mathrm{k\Omega},\qquad a_1=g_{m1}R_1=(1.642\ \mathrm{mA/V})(120\ \mathrm{k\Omega})=197 .
$$

### Step 4 — Second-stage gain and total gain

For $M_6$, $W/L_{\text{eff}}=100/0.72=138.9$ at 200 μA:
$$
g_{m6}=\sqrt{2\left(194\ \mu\mathrm{A/V^2}\right)(138.9)(200\ \mu\mathrm A)}=3.283\ \mathrm{mA/V}.
$$
The output resistance is
$$
r_{o6}=\frac1{(0.0278\ \mathrm{V^{-1}})(200\ \mu\mathrm A)}=180\ \mathrm{k\Omega},\qquad
r_{o7}=\frac1{(0.0556\ \mathrm{V^{-1}})(200\ \mu\mathrm A)}=90\ \mathrm{k\Omega},\qquad
R_2=60\ \mathrm{k\Omega},
$$
so $a_2=g_{m6}R_2=(3.283\ \mathrm{mA/V})(60\ \mathrm{k\Omega})=197$. The low-frequency gain magnitude is
$$
|a_0|=a_1a_2=197\times197=3.88\times10^4\quad(91.8\ \mathrm{dB}).
$$
As for sign: the input marked + drives $M_1$ on the diode side of the mirror, so the first stage is noninverting from that input, and $M_6$ inverts. The gain from the + terminal is therefore $-3.88\times10^4$.

### Step 5 — Unity-gain bandwidth

$M_9$, with its gate at $V_{DD}$, operates as a triode resistor $R_z$. Choosing $R_z=1/g_{m6}$ moves the zero of $C_c$ to infinity. The response is then dominated by the Miller pole at the first-stage output, and above that pole
$$
a(j\omega)\approx\frac{g_{m1}}{j\omega C_c}.
$$
Setting the magnitude to 1:
$$
\omega_u=\frac{g_{m1}}{C_c}=\frac{1.642\ \mathrm{mA/V}}{5\ \mathrm{pF}}=3.28\times10^8\ \mathrm{rad/s},\qquad f_u=52.3\ \mathrm{MHz}.
$$

### Step 6 — Slew rate

A large input switches all of $I_{D5}$ to one side of the pair, and through the mirror the first stage delivers $\pm I_{D5}$ into $C_c$. Meanwhile the second stage holds its input nearly fixed, so $dV_o/dt=I_{D5}/C_c$:
$$
SR=\frac{I_{D5}}{C_c}=\frac{200\ \mu\mathrm A}{5\ \mathrm{pF}}=40\ \mathrm{V/\mu s}.
$$
The output stage can support this rate. A rising output needs $C_c\,dV_o/dt=200$ μA from $M_7$, which supplies exactly 200 μA, and a falling output is supplied by $M_6$, which can sink more.
