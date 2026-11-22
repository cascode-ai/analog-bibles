# Detailed solution - A061

With the same bias, the circuit remains a first-order RC low-pass: M1, carrying no dc current, is a nonsaturated resistor, and M2, with its channel inverted and all other terminals grounded, is a gate capacitor. Fix the required $RC$ product from the −3 dB frequency, keep M1 as given, and size M2 to supply the capacitance.

### Step 1 — Required time constant

From the transfer function $v_{out}/v_{in}=1/(1+sR_{on1}C)$, the −3 dB frequency is $f_{-3dB}=1/(2\pi R_{on1}C)$. For 100 kHz:

$$
R_{on1}C=\frac{1}{2\pi(100\ \mathrm{kHz})}=1.59\ \mu\mathrm s .
$$

The original circuit has $R_{on1}C\approx81$ ps (about 2 GHz), so $R_{on1}C$ must grow by a factor of about $2\times10^4$.

### Step 2 — Resistance of M1

At the 2 V input level M1 has $V_{GS1}=3$ V, $V_{SB1}=2$ V and $V_{DS1}=0$. Its body-effect threshold and on-resistance are

$$
V_{T1}=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V,
\qquad
R_{on1}=\frac{1}{K'(W/L)_1(V_{GS1}-V_{T1})}.
$$

Keeping $(W/L)_1=2\ \mu\mathrm m/0.8\ \mu\mathrm m=2.5$:

$$
R_{on1}=\frac{1}{(110\ \mu\mathrm{A/V^2})(2.5)(1.977\ \mathrm V)}=1.84\ \mathrm{k\Omega}.
$$

### Step 3 — Size of M2

The capacitance needed is

$$
C=\frac{1.59\ \mu\mathrm s}{1.84\ \mathrm{k\Omega}}=865\ \mathrm{pF}.
$$

For a large gate the channel-area term dominates, $C\approx C_{ox}W_2L_2$, so

$$
W_2L_2=\frac{865\ \mathrm{pF}}{24.7\times10^{-4}\ \mathrm{F/m^2}}=3.50\times10^{5}\ \mu\mathrm m^2,
\qquad W_2=L_2\approx592\ \mu\mathrm m
$$

for a square gate. The overlap terms $2\,\mathrm{CGSO}\cdot W_2+\mathrm{CGBO}\cdot L_2\approx0.7$ pF change this by less than 0.1%. M2 stays inverted ($V_{GS2}=2\ \mathrm V>V_{T0}$), so this full capacitance is present.

### Step 4 — Design and check

Design: M1 = 2 µm/0.8 µm, M2 = 592 µm/592 µm. Check:

$$
f_{-3dB}=\frac{1}{2\pi(1.84\ \mathrm{k\Omega})(24.7\times10^{-4}\ \mathrm{F/m^2})(592\ \mu\mathrm m)^2}=100\ \mathrm{kHz}.
$$

Any sizing with $R_{on1}C=1.59\ \mu$s works; the designer trades resistance against capacitance. A long, narrow M1 reduces the area of M2: for example, M1 = 2 µm/80 µm gives $R_{on1}=184\ \mathrm{k\Omega}$ and requires only $C=8.65$ pF, i.e. M2 ≈ 59 µm × 59 µm. In either case M1's resistance depends on the input level through $V_{GS1}-V_{T1}$, so the corner holds at the 2 V bias.
