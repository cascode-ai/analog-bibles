# Detailed solution - grsim-09-21

This is the standard two-stage CMOS op amp. A $p$-channel pair $M_1$–$M_2$ with a current-mirror load $M_3$–$M_4$ drives the common-source stage $M_6$, whose load is the current source $M_7$. $C_c$ is in series with $M_9$, a triode resistor that cancels the right-half-plane zero. First turn the process data into effective lengths and $\lambda$ values. Then find the currents, transconductances and output resistances, from which the gain, the dominant pole, the unity-gain frequency and the slew rate follow. Size $M_9$ for the simulation, and compare everything with ngspice.

### Step 1 — Effective length and channel-length modulation

All devices have $L_{\text{drwn}}=8\ \mu$m, so

$$
L_{\text{eff}}=L_{\text{drwn}}-2L_d-X_d=8-0.6-1=6.4\ \mu\mathrm{m},\qquad \lambda_n=\frac{0.2\ \mu\mathrm{m/V}}{6.4\ \mu\mathrm{m}}=0.031\ \mathrm{V^{-1}},\qquad \lambda_p=\frac{0.1}{6.4}=0.0156\ \mathrm{V^{-1}}.
$$

The 100/8 devices have $(W/L)_{\text{eff}}=15.6$, and the 50/8 devices 7.8.

### Step 2 — Bias currents

$M_8$ carries the 20-µA reference. $M_5$ and $M_7$ have the same size and $V_{SG}$, so $I_{D5}=I_{D7}=20\ \mu$A. The pair splits $M_5$'s current: $I_{D1}=I_{D2}=10\ \mu$A. $M_6$ has twice the $W/L$ of $M_4$ and, in balance, the same $V_{GS}$ (the drain of $M_4$ sits at the gate voltage of $M_3$), so it carries $2I_{D4}=20\ \mu$A, exactly what $M_7$ supplies. Every device is saturated.

### Step 3 — Small-signal parameters and gain

With $g_m=\sqrt{2k'(W/L)I_D}$ and $r_o=1/(\lambda I_D)$:

| Quantity | Value |
|---|---|
| $g_{m1}=\sqrt{2(30.2\ \mu\mathrm{A/V^2})(15.6)(10\ \mu\mathrm{A})}$ | 97.1 µA/V |
| $g_{m6}=\sqrt{2(60.4\ \mu\mathrm{A/V^2})(15.6)(20\ \mu\mathrm{A})}$ | 194 µA/V |
| $r_{o2}$ (p, 10 µA) / $r_{o4}$ (n, 10 µA) | 6.4 MΩ / 3.2 MΩ |
| $r_{o6}$ (n, 20 µA) / $r_{o7}$ (p, 20 µA) | 1.6 MΩ / 3.2 MΩ |

The first stage, with its mirror load, has transconductance $g_{m1}$ and output resistance $R_1=r_{o2}\parallel r_{o4}=2.13\ \mathrm{M\Omega}$. The second stage has $R_2=r_{o6}\parallel r_{o7}=1.07\ \mathrm{M\Omega}$. Hence

$$
a_0=(g_{m1}R_1)(g_{m6}R_2)=(207)(207)=4.3\times10^{4}\ (92.7\ \mathrm{dB}).
$$

### Step 4 — Dominant pole, unity-gain frequency and slew rate

$C_c$ is Miller-multiplied across the second stage, so the first-stage output node has the dominant pole

$$
|p_1|\approx\frac{1}{g_{m6}R_2R_1C_c}=\frac{1}{(194\ \mu\mathrm{A/V})(1.07\ \mathrm{M\Omega})(2.13\ \mathrm{M\Omega})(5\ \mathrm{pF})}=452\ \mathrm{rad/s}\ (72\ \mathrm{Hz}).
$$

The gain-bandwidth product is

$$
\omega_u=a_0|p_1|=\frac{g_{m1}}{C_c}=\frac{97.1\ \mu\mathrm{A/V}}{5\ \mathrm{pF}}=1.94\times10^{7}\ \mathrm{rad/s},\qquad f_u=3.1\ \mathrm{MHz}.
$$

During slewing the pair switches all of $M_5$'s current to one side, and that current charges $C_c$:

$$
SR=\frac{I_{D5}}{C_c}=\frac{20\ \mu\mathrm{A}}{5\ \mathrm{pF}}=4\ \mathrm{V/\mu s}.
$$

### Step 5 — Sizing $M_9$ to cancel the zero

The zero of the compensation network lies at $1/[C_c(1/g_{m6}-R_z)]$; it moves to infinity when $R_z=1/g_{m6}=5.15\ \mathrm{k\Omega}$. $M_9$ operates at $V_{DS}\approx0$ (no dc current flows through $C_c$), with its gate at +5 V and its source at the gate of $M_6$, i.e. $V_{GS6}=0.7+\sqrt{2(20\ \mu\mathrm{A})/[(60.4\ \mu\mathrm{A/V^2})(15.6)]}=0.906$ V above −5 V. So $V_{GS9}=9.09$ V and $V_{SB9}=0.906$ V. The body-effect coefficient for $N_A=10^{15}\ \mathrm{cm^{-3}}$ is $\gamma_n=\sqrt{2q\epsilon_sN_A}/C_{ox}=0.21\ \mathrm{V^{1/2}}$, with $2\phi_f=0.58$ V, so

$$
V_{t9}=0.7+0.21\left(\sqrt{0.58+0.906}-\sqrt{0.58}\right)=0.80\ \mathrm{V},
$$

$$
\left(\frac{W}{L}\right)_9=\frac{1}{R_zk_n'(V_{GS9}-V_{t9})}=\frac{1}{(5.15\ \mathrm{k\Omega})(60.4\ \mu\mathrm{A/V^2})(8.3\ \mathrm{V})}=0.39 ,
$$

for example $W=4\ \mu$m and $L_{\text{eff}}=10.3\ \mu$m.

### Step 6 — SPICE comparison

The models are level 1 with the given $k'$, $V_t$, the $\lambda$ values of Step 1, $t_{ox}=40$ nm, the overlap and junction capacitance data, and body effect ($\gamma_n=0.21$, $2\phi_f=0.58$ V; $\gamma_p=0.67$, $2\phi_f=0.70$ V for $N_D=10^{16}\ \mathrm{cm^{-3}}$). Effective lengths are entered directly. NMOS bodies go to −5 V and PMOS bodies to +5 V. No load capacitance is specified, so none is added.

```spice
* grsim-09-21 two-stage CMOS op amp (effective dimensions)
.model nm nmos level=1 kp=60.4u vto=0.7 lambda=0.03125 gamma=0.21 phi=0.58 tox=40n
+ cgso=0.35n cgdo=0.35n cj=0.08m cjsw=0.5n mj=0.5 mjsw=0.5 pb=0.65
.model pm pmos level=1 kp=30.2u vto=-0.7 lambda=0.015625 gamma=0.67 phi=0.70 tox=40n
+ cgso=0.35n cgdo=0.35n cj=0.20m cjsw=1.5n mj=0.5 mjsw=0.5 pb=0.65
VDD vdd 0 5
VSS vss 0 -5
IB g8 vss 20u
M8 g8 g8 vdd vdd pm w=100u l=6.4u
M5 s g8 vdd vdd pm w=100u l=6.4u
M7 o g8 vdd vdd pm w=100u l=6.4u
M1 d1 inp s vdd pm w=100u l=6.4u
M2 d2 inn s vdd pm w=100u l=6.4u
M3 d1 d1 vss vss nm w=50u l=6.4u
M4 d2 d1 vss vss nm w=50u l=6.4u
M6 o d2 vss vss nm w=100u l=6.4u
M9 d2 vdd z vss nm w=4u l=10.3u
CC z o 5p
* open loop: Lf o inp 1e9 / Cf inp 0 1 / Vn inn 0 ac 1
* slew test: Vfb inp o 0 / Vn inn 0 pulse(-2 2 1u 1n 1n 5u 10u)
.end
```

Raising $M_1$'s gate reduces its current, so $M_4$ sinks less while $M_2$ supplies more. The gate of $M_6$ rises and the output falls. $M_1$'s gate is therefore the inverting input with respect to $v_o$. For the open-loop run the output is returned to it through a 1-GH inductor (1-F capacitor to ground for ac) and the ac signal is applied to $M_2$'s gate; the follower for the slew test uses the same connection.

| Quantity | Hand | ngspice |
|---|---|---|
| $I_{D5}$ / $I_{D1}=I_{D2}$ / $I_{D6}=I_{D7}$ | 20 / 10 / 20 µA | 20.7 / 10.36 / 21.2 µA |
| $g_{m1}$ / $g_{m6}$ | 97.1 / 194 µA/V | 103 / 215 µA/V |
| $R_{M9}$ vs $1/g_{m6}$ | 5.15 kΩ | 5.13 kΩ vs 4.65 kΩ |
| DC gain | $4.3\times10^{4}$ (92.7 dB) | $5.43\times10^{4}$ (94.7 dB) |
| Dominant pole | 72 Hz | 59.5 Hz |
| Unity-gain frequency | 3.1 MHz | 3.24 MHz |
| Phase margin | — | 86° |
| Slew rate rise / fall | 4 V/µs | 4.23 / 4.19 V/µs |

The simulated currents are a few percent high, because the mirror outputs $M_5$, $M_6$, $M_7$ run at larger $|V_{DS}|$ than the diode-connected devices, and the level-1 model multiplies the current by $1+\lambda V_{DS}$. This raises $g_{m1}$ and $g_{m6}$, so $f_u$ and the slew rate are 3–6 % above the hand values. The model's output conductance $\lambda I_D/(1+\lambda V_{DS})$ is also lower than $\lambda I_D$; with the simulated values $g_{m1}(r_{o2}\parallel r_{o4})=223$ and $g_{m6}(r_{o6}\parallel r_{o7})=245$, which reproduces the 94.7-dB gain. The phase margin of 86° shows that $M_9$ removes the right-half-plane zero: its 5.13-kΩ resistance slightly exceeds the simulated $1/g_{m6}$, which moves the zero into the left half-plane. The slew rates in both directions match $I_{D5}/C_c$.
