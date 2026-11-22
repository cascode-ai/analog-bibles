# Detailed solution - grsim-07-40

Find the common bias point and transconductance of the four identical transistors, then compute the zero-value resistance seen by every capacitor in the small-signal circuit with the input current source open and the output shorted. The sum of the $RC$ products estimates the dominant pole, which is compared with $f_T$. Finally, an ngspice ac analysis of the same linear circuit gives the actual bandwidth at 50, 100 and 200 µA.

### Step 1 — Bias point and small-signal parameters

All four devices carry $I_D=I_{\text{IN}}=100\ \mu$A in saturation ($M_1$, $M_2$ mirror $M_3$, $M_4$, and the output is held at $V_{GS3}+V_{GS4}$, so $V_{DS}$ values match). The square law $I_D=\tfrac12\mu_nC_{ox}(W/L)(V_{GS}-V_t)^2$ gives

$$
V_{GS}=V_t+\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}}=0.7+\sqrt{\frac{2(100\ \mu\mathrm{A})}{(60\ \mu\mathrm{A/V^2})(10)}}=1.277\ \mathrm{V},
$$

so $V_{\text{OUT}}=2V_{GS}=2.555$ V. With $\gamma=0$ and $\lambda=0$ each device is a pure transconductance:

$$
g_m=\sqrt{2\mu_nC_{ox}(W/L)I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm{A})}=0.3464\ \mathrm{mA/V},\qquad \frac{1}{g_m}=2.887\ \mathrm{k\Omega}.
$$

### Step 2 — Nodes and capacitor placement

Name the small-signal nodes:

- **A**: input node, the drain and gate of $M_4$ and the gate of $M_2$;
- **B**: the drain and gate of $M_3$, the source of $M_4$ and the gate of $M_1$;
- **C**: the drain of $M_1$ and the source of $M_2$;
- the output (drain of $M_2$) is an ac ground because the load impedance is zero, and all bodies are grounded.

Each capacitor is then assigned to a node pair:

| Capacitor(s) | Between | $C$ |
|---|---|---|
| $C_{gs3}$, $C_{db3}$, $C_{sb4}$, $C_{gs1}$ | B – ground | 60 fF |
| $C_{gs4}$ | A – B | 20 fF |
| $C_{db4}$ | A – ground | 10 fF |
| $C_{gs2}$ | A – C | 20 fF |
| $C_{gd2}$ | A – ground (output) | 3 fF |
| $C_{gd1}$ | B – C | 3 fF |
| $C_{db1}$, $C_{sb2}$ | C – ground | 20 fF |

$C_{gd4}$ and $C_{gd3}$ connect a node to itself (diode connections) and $C_{db2}$ is shorted by the zero load, so they drop out. $C_{sb3}$ and $C_{sb1}$ have both ends grounded.

### Step 3 — Zero-value resistances

With all capacitors open, the input source open (its impedance is infinite) and a test current $i_x$ applied across one capacitor's terminals, the node equations use only the $g_m v_{gs}$ sources:

$$
\begin{aligned}
\text{A:}&\quad i_{A}=g_m(v_A-v_B)\\
\text{B:}&\quad i_{B}=-g_m(v_A-v_B)+g_m v_B\\
\text{C:}&\quad i_{C}=-g_m(v_A-v_C)+g_m v_B
\end{aligned}
$$

where $i_A$, $i_B$, $i_C$ are the test currents injected into each node.

- **B to ground** ($i_B=i_x$): node A has no other path, so $M_4$ carries no signal current, $v_A=v_B$, and $v_B=i_x/g_m$. $R=1/g_m$.
- **A to B** ($i_A=i_x$, $i_B=-i_x$): $M_4$ carries $i_x$, so $v_A-v_B=i_x/g_m$. $R=1/g_m$.
- **A to ground** ($i_A=i_x$): $i_x$ flows through the two diode-connected devices in series, $v_B=i_x/g_m$ and $v_A=2i_x/g_m$. $R=2/g_m$.
- **A to C** ($i_A=i_x$, $i_C=-i_x$): $v_B=i_x/g_m$, $v_A=2i_x/g_m$, and at C, $g_m(v_A-v_C)=g_mv_B+i_x=2i_x$, so $v_A-v_C=2i_x/g_m$. $R=2/g_m$.
- **B to C** ($i_B=i_x$, $i_C=-i_x$): $v_A=v_B=i_x/g_m$; at C, $g_m(v_A-v_C)=2i_x$ gives $v_C=-i_x/g_m$, so $v_B-v_C=2i_x/g_m$. $R=2/g_m$.
- **C to ground** ($i_C=i_x$): $v_A=v_B=0$, so $i_x=g_mv_C$. $R=1/g_m$.

### Step 4 — Sum of time constants and dominant pole

| Capacitor(s) | $C$ | $R$ | $RC$ |
|---|---|---|---|
| node B to ground | 60 fF | $1/g_m=2.887\ \mathrm{k\Omega}$ | 173.2 ps |
| $C_{gs4}$ (A–B) | 20 fF | $1/g_m$ | 57.7 ps |
| $C_{db4}$ (A–ground) | 10 fF | $2/g_m=5.774\ \mathrm{k\Omega}$ | 57.7 ps |
| $C_{gs2}$ (A–C) | 20 fF | $2/g_m$ | 115.5 ps |
| $C_{gd2}$ (A–ground) | 3 fF | $2/g_m$ | 17.3 ps |
| $C_{gd1}$ (B–C) | 3 fF | $2/g_m$ | 17.3 ps |
| node C to ground | 20 fF | $1/g_m$ | 57.7 ps |
| $T_0$ | | | 496.5 ps |

The zero-value method takes the dominant pole as the reciprocal of the sum:

$$
\omega_{p1}\approx\frac{1}{T_0}=\frac{1}{0.4965\ \mathrm{ns}}=2.01\times10^{9}\ \mathrm{rad/s},\qquad f_{p1}\approx\frac{\omega_{p1}}{2\pi}=321\ \mathrm{MHz}.
$$

### Step 5 — Comparison with $f_T$

$$
f_T=\frac{g_m}{2\pi(C_{gs}+C_{gd})}=\frac{0.3464\ \mathrm{mA/V}}{2\pi(23\ \mathrm{fF})}=2.40\ \mathrm{GHz}.
$$

The estimate is $f_T/7.5$. The mirror is slower than one transistor because the signal passes through several nodes, each loaded by more than one $C_{gs}$ plus junction capacitance, and node A is driven through $2/g_m$. Since every $R$ is a multiple of $1/g_m$ and the capacitances are fixed, $T_0\propto1/g_m\propto1/\sqrt{I_{\text{IN}}}$: the estimate is 227 MHz at 50 µA and 453 MHz at 200 µA.

### Step 6 — SPICE simulation

The deck uses a level-1 model with the given $\mu_nC_{ox}$, $V_t$, $\lambda=0$ and $\gamma=0$, no intrinsic capacitances, and the bias-point capacitances added as fixed capacitors. The input is an ac current source in parallel with the dc $I_{\text{IN}}$, and a 0-V-ac source holds the output at $2V_{GS}$ and measures $i_{\text{out}}$. For the other currents, `iin` and `vo` $=2V_{GS}$ are changed (2.2165 V at 50 µA, 3.0330 V at 200 µA).

```spice
* grsim-07-40 cascode mirror current gain
.param iin=100u
.param vo=2.5547
.model nm nmos level=1 kp=60u vto=0.7 lambda=0 gamma=0
VDD vdd 0 5
Iin vdd a dc {iin} ac 1
M4 a a b 0 nm w=10u l=1u
M3 b b 0 0 nm w=10u l=1u
M2 o a c 0 nm w=10u l=1u
M1 c b 0 0 nm w=10u l=1u
Vout o 0 dc {vo}
Cgs4 a b 20f
Cdb4 a 0 10f
Csb4 b 0 10f
Cgs3 b 0 20f
Cdb3 b 0 10f
Cgs2 a c 20f
Cgd2 a o 3f
Csb2 c 0 10f
Cgs1 b 0 20f
Cgd1 b c 3f
Cdb1 c 0 10f
.ac dec 400 1Meg 20G
.pz a 0 o 0 cur pz
.end
```

The low-frequency gain $|i_{\text{out}}/i_{\text{in}}|$ is 1.000 at every current. The −3-dB frequency is read where the gain falls to $1/\sqrt2$:

| $I_{\text{IN}}$ | $g_m$ (mA/V) | Zero-value estimate | Simulated −3 dB | Poles (simulation) |
|---|---|---|---|---|
| 50 µA | 0.245 | 227 MHz | 349 MHz | 370 MHz; $(1.01\pm j0.40)$ GHz |
| 100 µA | 0.346 | 321 MHz | 494 MHz | 524 MHz; $(1.43\pm j0.57)$ GHz |
| 200 µA | 0.490 | 453 MHz | 698 MHz | 741 MHz; $(2.02\pm j0.80)$ GHz |

![Current-gain magnitude in dB versus log frequency for IIN = 50, 100 and 200 µA, with −3-dB points at 349, 494 and 698 MHz](/q/grsim-07-40/solution-magnitude.svg)

At 100 µA the circuit has one real pole at 524 MHz and a complex pair at about 1.5 GHz magnitude. The pair pulls the −3-dB point slightly below the real pole, to 494 MHz. The zero-value estimate (321 MHz) is conservative by a factor of about 1.5, because the non-dominant capacitances are not small compared with the dominant ones, so the poles are not widely split and the sum of time constants also counts the higher poles' contributions. Still, the bandwidth is well below $f_T$ (about $f_T/5$).

The bandwidth scales as $\sqrt{I_{\text{IN}}}$: halving the current reduces it by $349/494=0.71$, and doubling it raises it by $698/494=1.41$, both $\approx\sqrt2$, as expected for square-law devices with fixed capacitances. A full device model would also change the capacitances slightly with bias.
