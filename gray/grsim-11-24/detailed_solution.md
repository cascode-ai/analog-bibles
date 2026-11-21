# Detailed solution - grsim-11-24

Treat the circuit as a shunt-feedback transimpedance amplifier. Represent the basic amplifier (gate of $M_1$ to $v_o$) by an equivalent input noise voltage $\overline{v_{ia}^2}$; its input noise current is zero because the MOS gate draws no current. Referred to the input current node, the feedback resistor contributes $4kT/R_F$, and $\overline{v_{ia}^2}$ contributes through the total admittance at the input node, $1/R_F+j\omega(C_S+C_{gs1})$. That admittance grows with frequency, so the input noise current rises at high frequency. SPICE checks the bias, bandwidth and noise densities.

### Step 1 — DC operating point

With no gate current, the 30-kΩ resistor carries no dc current, so $V_o=V_{GS1}$. The bias chain sets the base of $Q_1$: with $I\approx0.32$ mA, $V_{BE2}=0.75$ V and $V_{GS2}=0.6+\sqrt{2(0.32\ \mathrm{mA})/(200\ \mu\mathrm{A/V^2}\cdot20)}=1.0$ V, so

$$
I_{bias}=\frac{5-0.75-1.0}{10\ \mathrm{k\Omega}}=0.33\ \mathrm{mA},\qquad V_{B1}=1.75\ \mathrm V,\qquad V_{E1}=1.75-0.75=1.0\ \mathrm V.
$$

$R_{L1}$ then carries $(5-1.0)/1\ \mathrm{k\Omega}=4.0$ mA. $R_{L2}$ carries $(5-1.75)/10\ \mathrm{k\Omega}=0.33$ mA, of which about 10 µA is the base current of $Q_3$, so $I_{C1}\approx0.31$ mA and $I_{D1}=4.0+0.31=4.31$ mA. In saturation,

$$
V_{GS1}=V_t+\sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}}=0.6+\sqrt{\frac{2(4.31\ \mathrm{mA})}{(200\ \mu\mathrm{A/V^2})(300)}}=0.98\ \mathrm V,
\qquad g_{m1}=\frac{2I_{D1}}{V_{GS1}-V_t}=22.7\ \mathrm{mS}.
$$

So $V_o\approx0.98$ V and $I_{C3}\approx0.98\ \mathrm V/1\ \mathrm{k\Omega}=0.98$ mA.

### Step 2 — Forward gain, transimpedance and −3-dB frequency

The drain current of $M_1$ divides between $R_{L1}$ and the emitter of $Q_1$ ($1/g_{m,Q1}=26\ \mathrm{mV}/0.31\ \mathrm{mA}=83\ \Omega$). The collector current of $Q_1$ flows into $R_{L2}$ in parallel with the input resistance of $Q_3$, $(\beta+1)(r_{e3}+R_{L3}\parallel R_F)=100$ kΩ. $Q_3$ then follows with gain $R_{L3}\parallel R_F/(R_{L3}\parallel R_F+r_{e3})=0.973$. Hence

$$
a=\frac{v_o}{v_g}=-g_{m1}\cdot\frac{1\ \mathrm{k\Omega}}{1\ \mathrm{k\Omega}+83\ \Omega}\cdot\alpha\cdot(10\ \mathrm{k\Omega}\parallel100\ \mathrm{k\Omega})\cdot0.973\approx-184.
$$

The forward path is inverting, so the feedback through $R_F$ is negative. Without feedback, the input node has the pole

$$
f_{p}=\frac{1}{2\pi R_F(C_S+C_{gs1})}=\frac{1}{2\pi(30\ \mathrm{k\Omega})(1.5\ \mathrm{pF})}=3.54\ \mathrm{MHz}.
$$

Closing the loop gives the low-frequency transimpedance $R_F|a|/(1+|a|)=29.8$ kΩ and moves the pole to

$$
f_{-3\,\mathrm{dB}}\approx(1+|a|)f_p=185\times3.54\ \mathrm{MHz}\approx650\ \mathrm{MHz}.
$$

### Step 3 — Equivalent input noise voltage of the basic amplifier

Refer each source to the gate of $M_1$:

- Channel noise of $M_1$: $4kT\dfrac{2}{3g_{m1}}=4kT(29.3\ \Omega)$.
- $R_{L1}$: its current $4kT/R_{L1}$ enters the drain node exactly like $g_{m1}v_g$, so $\dfrac{4kT}{R_{L1}g_{m1}^2}=4kT(1.9\ \Omega)$.
- $Q_1$: as a common-base stage fed from 1 kΩ, its collector shot noise reaches the collector reduced by $1+g_{m,Q1}(1\ \mathrm{k\Omega})\approx13$, giving below $4kT(0.1\ \Omega)$. $R_{L2}$ adds about $4kT(0.2\ \Omega)$, and the bias chain, $Q_3$ and $R_{L3}$ add about $4kT(1\ \Omega)$ or less.

$$
\frac{\overline{v_{ia}^2}}{\Delta f}\approx4kT(31\ \Omega)=5.2\times10^{-19}\ \mathrm{V^2/Hz}.
$$

### Step 4 — Equivalent input noise current

A voltage $v_{ia}$ in series with the gate forces a current $v_{ia}[1/R_F+j\omega(C_S+C_{gs1})]$ through the input admittance, so the equivalent input current generator is

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{4kT}{R_F}+\frac{\overline{v_{ia}^2}}{\Delta f}\left|\frac1{R_F}+j\omega(C_S+C_{gs1})\right|^2.
$$

At low frequency the second term is $\overline{v_{ia}^2}/R_F^2=5.8\times10^{-28}$ A²/Hz, negligible, so

$$
\frac{\overline{i_i^2}}{\Delta f}\approx\frac{1.66\times10^{-20}\ \mathrm{V\,C}}{30\ \mathrm{k\Omega}}=5.5\times10^{-25}\ \mathrm{A^2/Hz}\quad(0.74\ \mathrm{pA/\sqrt{Hz}}),
$$

set by the feedback resistor.

At $f_{-3\,\mathrm{dB}}=650$ MHz, $\omega(C_S+C_{gs1})=2\pi(650\ \mathrm{MHz})(1.5\ \mathrm{pF})=6.1$ mS, far larger than $1/R_F=33\ \mu$S:

$$
\frac{\overline{i_i^2}}{\Delta f}=5.5\times10^{-25}+(5.2\times10^{-19})(6.1\ \mathrm{mS})^2=5.5\times10^{-25}+2.0\times10^{-23}\approx2.1\times10^{-23}\ \mathrm{A^2/Hz},
$$

about 4.6 pA/√Hz. Here the channel noise of $M_1$ acting on $C_S+C_{gs1}$ dominates; the density rises as $f^2$ above the corner where $\omega(C_S+C_{gs1})\overline{v_{ia}}$ equals the $R_F$ noise, about 110 MHz.

### Step 5 — SPICE check

The deck uses level-1 MOSFETs ($K_P=200\ \mu$A/V², $V_{TO}=0.6$ V, $\lambda=0$, no intrinsic capacitances, thermal noise $4kT\tfrac23g_m$), NPNs with IS $=10^{-16}$ A and BF $=100$ and no capacitances, explicit $C_S$ and $C_{gs1}$, and a temperature giving $4kT=1.66\times10^{-20}$ V·C. The input is an ac current source at the gate; the simulator's input-referred noise for a current input is $\overline{i_i^2}$.

```spice
* grsim-11-24 BiCMOS TIA noise
VDD vdd 0 5
IIN 0 g dc 0 ac 1
CS g 0 1p
CGS1 g 0 0.5p
M1 d1 g 0 0 nm W=300u L=1u
RL1 vdd d1 1k
Q1 c1 b1 d1 qn
RL2 vdd c1 10k
RB vdd b1 10k
Q2 b1 b1 s2 qn
M2 s2 s2 0 0 nm W=20u L=1u
Q3 vdd c1 out qn
RL3 out 0 1k
RF out g 30k
.model nm nmos level=1 vto=0.6 kp=200u lambda=0
.model qn npn is=1e-16 bf=100
.temp 27.4
.ac dec 50 1e5 1e10
.noise v(out) IIN dec 1 1e3 1e9
.end
```

The operating point is $I_{D1}=4.32$ mA, $g_{m1}=22.7$ mS, $I_{C1}=0.315$ mA, $I_{C3}=0.970$ mA, $V_o=0.979$ V. The ac analysis gives a transimpedance of 29.8 kΩ and $f_{-3\,\mathrm{dB}}=651$ MHz. The noise analysis gives:

| $f$ | 1 kHz | 10 MHz | 100 MHz | 651 MHz (−3 dB) | 1 GHz |
|---|---|---|---|---|---|
| Hand (A²/Hz) | $5.54\times10^{-25}$ | $5.58\times10^{-25}$ | $1.01\times10^{-24}$ | $2.0\times10^{-23}$ | $4.7\times10^{-23}$ |
| SPICE, $r_b=0$ (A²/Hz) | $5.54\times10^{-25}$ | $5.59\times10^{-25}$ | $1.04\times10^{-24}$ | $2.13\times10^{-23}$ | $4.95\times10^{-23}$ |
| SPICE, $r_b=200\ \Omega$ (A²/Hz) | $5.54\times10^{-25}$ | $5.59\times10^{-25}$ | $1.06\times10^{-24}$ | $2.19\times10^{-23}$ | $5.08\times10^{-23}$ |

The simulated high-frequency values are about 6% above the hand estimate, which neglects a few small contributions to $\overline{v_{ia}^2}$.

### Step 6 — Effect of $r_b=200\ \Omega$

Adding RB $=200\ \Omega$ to the bipolar model leaves the bias and the −3-dB frequency essentially unchanged (649 MHz). It adds the thermal noise of $r_b$ at the base of $Q_1$ (and of $Q_3$), which reaches the gate of $M_1$ strongly attenuated: the base voltage of the common-base device is divided by about $g_{m1}(1\ \mathrm{k\Omega}+83\ \Omega)\approx25$ when referred to the gate. The low-frequency density is unchanged, set by $R_F$, and the density at the −3-dB frequency rises by only about 2.5%, from $2.13\times10^{-23}$ to $2.19\times10^{-23}$ A²/Hz.
