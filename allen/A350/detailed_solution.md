# Detailed solution - A350

The folded cascode is a single-stage amplifier: its gain is $G_mR_{out}$, its GB is $G_m/C_L$, and its slew rate is the largest current available to $C_L$. In weak inversion only the transconductance formula changes, $g_m=I_D/(nV_t)$, which is proportional to current instead of to its square root. Find the branch currents, then $g_m$ and $r_{ds}$ of the relevant devices, and assemble the four quantities.

### Step 1 — Branch currents

The tail M3 carries $I_3=2(50\ \mathrm{nA})=100$ nA. The current sources M4 and M5 each carry 150 nA, of which 50 nA flows into the input device, so each cascode branch M6–M8–M10 and M7–M9–M11 carries

$$
I_6=I_7=150\ \mathrm{nA}-50\ \mathrm{nA}=100\ \mathrm{nA}.
$$

### Step 2 — Transconductances and output resistances

Differentiating $i_D=(W/L)I_{DO}e^{v_{GS}/(nV_t)}$ gives $g_m=I_D/(nV_t)$; with $V_t=26$ mV:

$$
g_{m1}=\frac{50\ \mathrm{nA}}{(2.5)(26\ \mathrm{mV})}=0.769\ \mu\mathrm S,\qquad
g_{m7}=\frac{100\ \mathrm{nA}}{(1.5)(26\ \mathrm{mV})}=2.56\ \mu\mathrm S,\qquad
g_{m9}=\frac{100\ \mathrm{nA}}{(2.5)(26\ \mathrm{mV})}=1.54\ \mu\mathrm S .
$$

With $r_{ds}=1/(\lambda I_D)$, for example $r_{ds1}=1/[(0.04\ \mathrm{V^{-1}})(50\ \mathrm{nA})]=500\ \mathrm{M\Omega}$:

| Devices | $I_D$ | $\lambda$ (V⁻¹) | $r_{ds}$ |
|---|---|---|---|
| M1, M2 | 50 nA | 0.04 | 500 MΩ |
| M4, M5 | 150 nA | 0.05 | 133 MΩ |
| M6, M7 | 100 nA | 0.05 | 200 MΩ |
| M8–M11 | 100 nA | 0.04 | 250 MΩ |

### Step 3 — Output resistance and gain

Looking down from $v_{OUT}$, the cascode M9 over M11; looking up, the cascode M7 over the folding node, which is loaded by $r_{ds2}\parallel r_{ds5}=105.3$ MΩ. With $R\approx g_mr_{ds}R_S$:

$$
R_{dn}=g_{m9}r_{ds9}r_{ds11}=(1.54\ \mu\mathrm S)(250\ \mathrm{M\Omega})(250\ \mathrm{M\Omega})=96.2\ \mathrm{G\Omega},
$$
$$
R_{up}=g_{m7}r_{ds7}(r_{ds2}\parallel r_{ds5})=(2.56\ \mu\mathrm S)(200\ \mathrm{M\Omega})(105.3\ \mathrm{M\Omega})=54.0\ \mathrm{G\Omega},
$$
$$
R_{out}=R_{dn}\parallel R_{up}=34.6\ \mathrm{G\Omega}.
$$

With the output short-circuited, the source of M7 presents about $1/g_{m7}=0.39\ \mathrm{M\Omega}\ll r_{ds2}\parallel r_{ds5}$, so practically all of M2's signal current enters M7. M1's signal current reaches the output through M6 and the mirror M8–M11, which inverts it and adds it at $v_{OUT}$. Hence $G_m\approx g_{m1}$ and

$$
A_v=g_{m1}R_{out}=(0.769\ \mu\mathrm S)(34.6\ \mathrm{G\Omega})\approx2.66\times10^4\ \mathrm{V/V}\ (88.5\ \mathrm{dB}).
$$

A full nodal analysis of the small-signal circuit gives 26,640.

### Step 4 — Gain–bandwidth, slew rate and power

The dominant pole is at the output, $1/(R_{out}C_L)$, so

$$
GB=\frac{g_{m1}}{C_L}=\frac{0.769\ \mu\mathrm S}{2\ \mathrm{pF}}=3.85\times10^5\ \mathrm{rad/s}\quad(61.2\ \mathrm{kHz}).
$$

During slewing the whole tail current $I_3$ is steered to one side; since $I_4=I_5=150\ \mathrm{nA}>I_3$, the cascode currents never reach zero, and the output current is limited to $I_3$:

$$
SR=\frac{I_3}{C_L}=\frac{100\ \mathrm{nA}}{2\ \mathrm{pF}}=0.05\ \mathrm{V/\mu s}.
$$

All supply current enters through M4 and M5; $I_3$ and the 100 nA cascode currents are parts of it, not additional currents. Therefore

$$
P_{diss}=(V_{DD}-V_{SS})(I_4+I_5)=(3\ \mathrm V)(300\ \mathrm{nA})=0.9\ \mu\mathrm W.
$$

| Quantity | Value |
|---|---|
| $A_v$ | ≈ $2.7\times10^4$ V/V (88.5 dB) |
| GB | $3.85\times10^5$ rad/s ≈ 61 kHz |
| SR | 0.05 V/µs |
| $P_{diss}$ | 0.9 µW |
