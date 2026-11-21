# Detailed solution - grsim-07-38

The bias chain fixes the gate voltages of the 100/2 mirror devices, so $M_5$ must absorb the leftover voltage and $M_1$ must level-shift from 2.5 V down to $V_{GS2}$, with its body effect included. With both widths set, the gain is the follower gain times the common-source gain. The bandwidth follows from zero-value time constants, dominated by the Miller capacitance $C_{gd2}$, and a level-1 ngspice model verifies both. $\lambda$ is neglected in the bias design but kept in the small-signal analysis.

### Step 1 — Size $M_5$

All 100/2 devices carry 100 µA. With $V_{ov}=\sqrt{2I_D/(k'W/L)}$:

$$
V_{GS6}=0.7+\sqrt{\frac{2(100\ \mu\mathrm A)}{(60\ \mu\mathrm{A/V^2})(50)}}=0.958\ \mathrm V,\qquad
|V_{GS4}|=0.7+\sqrt{\frac{2(100\ \mu\mathrm A)}{(30\ \mu\mathrm{A/V^2})(50)}}=1.065\ \mathrm V.
$$

$M_5$ (body tied to its source, so no body effect) takes the rest of the 5 V:

$$
|V_{GS5}|=5-0.958-1.065=2.977\ \mathrm V,\quad |V_{ov5}|=2.277\ \mathrm V,\quad
\left(\frac WL\right)_5=\frac{2(100\ \mu\mathrm A)}{(30\ \mu\mathrm{A/V^2})(2.277\ \mathrm V)^2}=1.29 .
$$

With the 2-µm minimum, $W_5=2.6\ \mu$m and $L_5=2\ \mu$m.

### Step 2 — Size $M_1$

$M_2$ (100/2 at 100 µA) needs $V_{GS2}=0.958$ V, so $M_1$'s source sits at 0.958 V while its gate is at 2.5 V. Its body is grounded, so $V_{SB1}=0.958$ V:

$$
V_{t1}=0.7+0.4\left(\sqrt{0.6+0.958}-\sqrt{0.6}\right)=0.889\ \mathrm V,\qquad V_{ov1}=2.5-0.958-0.889=0.652\ \mathrm V,
$$

$$
\left(\frac WL\right)_1=\frac{2(100\ \mu\mathrm A)}{(60\ \mu\mathrm{A/V^2})(0.652\ \mathrm V)^2}=7.83\quad(W_1=15.7\ \mu\mathrm m,\ L_1=2\ \mu\mathrm m).
$$

Ignoring the body effect would give about 4.2, and $V_O$ would then not sit at 2.5 V for $V_i=2.5$ V.

### Step 3 — Low-frequency gain

$r_o=1/(\lambda I_D)=333\ \mathrm{k\Omega}$ for every device.

$$
g_{m1}=\frac{2I_D}{V_{ov1}}=0.307\ \mathrm{mA/V},\quad g_{mb1}=\frac{\gamma g_{m1}}{2\sqrt{0.6+0.958}}=0.049\ \mathrm{mA/V},\quad g_{m2}=\frac{2I_D}{0.258\ \mathrm V}=0.775\ \mathrm{mA/V}.
$$

The follower (loaded by $r_{o1}\parallel r_{o7}$) and the common-source stage (loaded by $r_{o2}\parallel r_{o3}=167\ \mathrm{k\Omega}$):

$$
A_1=\frac{g_{m1}}{g_{m1}+g_{mb1}+2/r_o}=0.848,\qquad R_{o1}=\frac{1}{g_{m1}+g_{mb1}+2/r_o}=2.76\ \mathrm{k\Omega},
$$

$$
A_2=-g_{m2}(r_{o2}\parallel r_{o3})=-129,\qquad A_v=A_1A_2=-109 .
$$

### Step 4 — Zero-value time constants

Capacitances (100-µm devices: $C_{gs}=\tfrac23(100)(2)(1.73)+30=261$ fF, $C_{gd}=30$ fF; drain/source junctions $80\ \mathrm{fF}/\sqrt{1+V_R/0.6}$). The node resistances are: output $R_{out}=167\ \mathrm{k\Omega}$; $M_2$ gate $R_{o1}=2.76\ \mathrm{k\Omega}$; $M_3$/$M_4$ gate node $1/g_{m4}\parallel(1/g_{m5}+1/g_{m6})=1.6\ \mathrm{k\Omega}$; $M_6$/$M_7$ gate node 1.18 kΩ.

| Capacitor(s) | Resistance seen | $RC$ (ns) |
|---|---|---|
| $C_{gd2}$ (30 fF), output–$M_2$ gate | $2.76+167+g_{m2}(167)(2.76)=526\ \mathrm{k\Omega}$ | 15.8 |
| $C_{gd3}$ (30 fF), output–$M_3$ gate | $1.6+167+g_{m3}(167)(1.6)=314\ \mathrm{k\Omega}$ ($g_{m3}=0.548$ mA/V) | 9.4 |
| $C_{db2}+C_{db3}$ (35.2 fF each at 2.5 V) | $R_{out}$ | 11.7 |
| $M_3$/$M_4$ gate node ($C_{gs3}+C_{gs4}+C_{db4}+C_{gs5}\approx570$ fF) | 1.6 kΩ | 0.9 |
| $M_2$ gate ($C_{gs2}+C_{db7}+C_{sb1}+C_{gs1}\approx360$ fF) | 2.76 kΩ | 1.0 |
| $M_6$/$M_7$ gate node, $C_{gd7}$ | ≈ 1.2 kΩ, 6.5 kΩ | 0.9 |
| Sum $T_0$ | | ≈ 40 |

$$
f_{-3\text{dB}}\approx\frac{1}{2\pi T_0}\approx4.0\ \mathrm{MHz}.
$$

The Miller capacitance $C_{gd2}$ dominates, followed by the output-node capacitances and the coupling of the output to the $M_3$ gate through $C_{gd3}$.

### Step 5 — SPICE verification

The level-1 models carry the given parameters ($\lambda=0.03\ \mathrm{V^{-1}}$, $\gamma=0.4\ \mathrm{V^{1/2}}$ for the NMOS). Junction capacitance is entered as a sidewall value of 0.8 fF/µm with perimeter equal to the width. Because $\lambda$ makes the dc output sensitive to small current mismatches, the dc input is first adjusted to put $V_O$ at 2.5 V.

```spice
* grsim-07-38 CMOS amplifier stage
.model nm nmos level=1 kp=60u vto=0.7 gamma=0.4 phi=0.6 lambda=0.03 tox=20n
+ cgso=0.3n cgdo=0.3n cj=0 cjsw=0.8n mjsw=0.5 pb=0.6
.model pm pmos level=1 kp=30u vto=-0.7 gamma=0.4 phi=0.6 lambda=0.03 tox=20n
+ cgso=0.3n cgdo=0.3n cj=0 cjsw=0.8n mjsw=0.5 pb=0.6
VDD vdd 0 5
Vi i 0 dc 2.49425 ac 1
M4 g4 g4 vdd vdd pm w=100u   l=2u pd=100u   ps=100u
M5 g6 g6 g4  g4  pm w=2.58u  l=2u pd=2.58u  ps=2.58u
M6 g6 g6 0   0   nm w=100u   l=2u pd=100u   ps=100u
M7 s1 g6 0   0   nm w=100u   l=2u pd=100u   ps=100u
M1 vdd i s1  0   nm w=15.66u l=2u pd=15.66u ps=15.66u
M2 o  s1 0   0   nm w=100u   l=2u pd=100u   ps=100u
M3 o  g4 vdd vdd pm w=100u   l=2u pd=100u   ps=100u
.ac dec 200 1k 10G
.pz i 0 o 0 vol pol
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $V_i$ for $V_O=2.5$ V | 2.5 V | 2.501 V ($\lambda=0$); 2.494 V ($\lambda=0.03$) |
| Drain currents | 100 µA | 108–112 µA |
| $V_{GS2}$ ($M_1$ source) | 0.958 V | 0.964 V |
| Gain | −109 | 41.2 dB (−115) |
| −3-dB frequency | ≈ 4.0 MHz | 4.61 MHz |
| Dominant pole | — | $2.91\times10^7$ rad/s (4.63 MHz) |
| Next poles | — | 128 MHz, then a complex pair near 290 MHz |

With $\lambda=0$ the design puts $V_O=2.5$ V at $V_i=2.501$ V, confirming the sizes. With $\lambda=0.03\ \mathrm{V^{-1}}$ the currents rise by 8–12 % through $1+\lambda V_{DS}$, raising $g_{m2}$ and hence the gain by about 5 %. The bandwidth is about 15 % above the zero-value estimate, which as usual is slightly pessimistic.
