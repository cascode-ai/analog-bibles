# Detailed solution - A060

Find the dc operating point first: it shows that M1 carries no dc current and acts as a resistor, and that M2, with source, drain and bulk grounded, acts as a capacitor. The circuit is then a first-order RC low-pass, whose resistance and capacitance follow from the device models at that bias.

### Step 1 — DC operating point

The only load on $v_{out}$ is the gate of M2, which draws no dc current. M1 therefore carries $I_{D1}=0$, which in a conducting MOSFET requires $V_{DS1}=0$:

$$
V_{OUT}=V_{IN}=2\ \mathrm V .
$$

M1 (gate at 5 V, source and drain at 2 V, bulk at 0 V) has $V_{GS1}=3$ V and $V_{SB1}=2$ V. Its threshold, raised by the body effect, is

$$
V_{T1}=V_{T0}+\gamma\Big(\sqrt{2|\phi_F|+V_{SB1}}-\sqrt{2|\phi_F|}\Big)=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V .
$$

Since $V_{GS1}-V_{T1}=1.977\ \mathrm V>V_{DS1}=0$, M1 is on and in nonsaturation, at the $V_{DS}=0$ edge of that region. M2 has $V_{GS2}=2\ \mathrm V>V_{T0}$ with $V_{DS2}=0$ and $V_{SB2}=0$, so its channel is inverted and connected to its grounded source and drain.

### Step 2 — Small-signal resistance of M1

In nonsaturation $i_D=K'(W/L)[(v_{GS}-V_T)v_{DS}-v_{DS}^2/2]$, so at $V_{DS}=0$

$$
g_m=K'\frac WL V_{DS}=0,\qquad g_{mbs}\propto V_{DS}=0,\qquad
g_{ds}=K'\frac WL\big(V_{GS}-V_T-V_{DS}\big).
$$

The small-signal M1 is a pure conductance between $v_{in}$ and $v_{out}$:

$$
R_{on1}=\frac1{g_{ds1}}=\frac{1}{(110\ \mu\mathrm{A/V^2})(2\ \mu\mathrm m/0.8\ \mu\mathrm m)(1.977\ \mathrm V)}=\frac{1}{543.8\ \mu\mathrm S}=1.84\ \mathrm{k\Omega}.
$$

### Step 3 — Capacitance of M2

With the channel inverted and source, drain and bulk all at ground, every gate capacitance of M2 goes from $v_{out}$ to ground: the channel-area oxide capacitance (split between source and drain, both grounded), the two overlaps and the gate–bulk overlap:

$$
C=C_{ox}W_2L_2+2\,\mathrm{CGSO}\cdot W_2+\mathrm{CGBO}\cdot L_2
=39.5\ \mathrm{fF}+1.76\ \mathrm{fF}+2.8\ \mathrm{fF}=44.1\ \mathrm{fF},
$$

with $C_{ox}W_2L_2=(24.7\times10^{-4}\ \mathrm{F/m^2})(4\ \mu\mathrm m)(4\ \mu\mathrm m)$. The source/drain junctions of M1 are neglected as instructed.

### Step 4 — Transfer function

The small-signal circuit is $R_{on1}$ in series from $v_{in}$ to $v_{out}$, with $C$ from $v_{out}$ to ground. KCL at $v_{out}$, $(v_{in}-v_{out})/R_{on1}=sCv_{out}$, gives

$$
\frac{v_{out}(s)}{v_{in}(s)}=\frac{1}{1+sR_{on1}C}=\frac{1}{1+s/\omega_p},
\qquad
\omega_p=\frac{1}{(1.84\ \mathrm{k\Omega})(44.1\ \mathrm{fF})}=1.23\times10^{10}\ \mathrm{rad/s}\ (1.96\ \mathrm{GHz}).
$$

The circuit is a single-pole low-pass with unity dc gain. Counting only the oxide capacitance of M2 (39.5 fF) gives $1.38\times10^{10}$ rad/s (2.19 GHz). M1's own gate–drain capacitance, about 2.4 fF to its gate (an ac ground), would lower $\omega_p$ by about 5%.
