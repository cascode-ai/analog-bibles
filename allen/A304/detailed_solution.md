# Detailed solution - A304

Treat each gain-enhanced cascode as a regulated cascode: the enhancement amplifier multiplies the cascode's output resistance by its gain $A$, and makes the cascode source a very low impedance. The output resistance is then the regulated p-channel cascode (M9 over M11) in parallel with the regulated n-channel cascode (M7 over the folding node), the gain is the short-circuit transconductance times $R_{out}$, and the dominant pole and GB follow from $R_{out}$ and $C_L$. The gates of M10/M11 are treated as an ac ground, as in the textbook's regulated-cascode treatment that the stated upper-amplifier gain presumes.

### Step 1 — Enhancement gains

$$
A_{up}=0.5g_{mN}r_{dsN}=0.5(100\ \mu\mathrm S)(2\ \mathrm{M\Omega})=100,\qquad
A_{low}=0.5g_{mP}r_{dsP}=0.5(25\ \mu\mathrm S)(0.5\ \mathrm{M\Omega})=6.25 .
$$

### Step 2 — Output resistance

Looking up: M9 (p) over M11 (p). Looking down: M7 (n) over the folding node, where the drain of M1 ($r_{ds1}$, p-channel) and the sink M5 ($r_{ds5}$, n-channel) are in parallel:

$$
\begin{aligned}
R_{up}&\approx A_{up}g_{m9}r_{ds9}r_{ds11}=100(25\ \mu\mathrm S)(0.5\ \mathrm{M\Omega})(0.5\ \mathrm{M\Omega})=0.625\ \mathrm{G\Omega},\\
R_{down}&\approx A_{low}g_{m7}r_{ds7}(r_{ds1}\parallel r_{ds5})=6.25(100\ \mu\mathrm S)(2\ \mathrm{M\Omega})(0.4\ \mathrm{M\Omega})=0.50\ \mathrm{G\Omega},\\
R_{out}&=0.625\parallel0.50=0.278\ \mathrm{G\Omega}.
\end{aligned}
$$

### Step 3 — Differential gain

With the output shorted, the regulated cascode source seen from each folding node is about $1/[g_{mN}(1+A_{low})]=1.4$ kΩ, far below $r_{ds1}\parallel r_{ds5}=0.4$ MΩ, so essentially all of each input half-current reaches the output (M1's through M6 and the M8–M11 mirror, M2's through M7). The short-circuit transconductance is therefore $g_{m1}=g_{mP}$ (p-channel input pair):

$$
A_v=g_{mP}R_{out}=(25\ \mu\mathrm S)(0.278\ \mathrm{G\Omega})=6.9\times10^3\ \mathrm{V/V}.
$$

### Step 4 — Dominant pole and GB

The output is the only high-impedance node:

$$
p_{dom}=-\frac1{R_{out}C_L}=-\frac1{(0.278\ \mathrm{G\Omega})(10\ \mathrm{pF})}=-360\ \mathrm{rad/s}\ (57\ \mathrm{Hz}),
$$
$$
GB=A_v|p_{dom}|=\frac{g_{mP}}{C_L}=\frac{25\ \mu\mathrm S}{10\ \mathrm{pF}}=2.5\times10^6\ \mathrm{rad/s}\ (0.40\ \mathrm{MHz}).
$$

Using $1+A$ in place of $A$ gives $R_{out}\approx0.30$ GΩ, $A_v\approx7.6\times10^3$ and $p_{dom}\approx-330$ rad/s; GB is unchanged.

### Step 5 — The connection as drawn

The result above assumes the gates of M10/M11 are an ac ground. As drawn, the single upper amplifier drives both M8 and M9, and the M10/M11 gates are tied to the M8 drain. When the output moves, the amplifier also moves M8's gate; since the left-branch current is fixed, the mirror gate shifts and raises the effective output conductance of M11 by about $1+A_{up}$, cancelling the upper enhancement. An exact small-signal analysis of that connection gives $R_{out}\approx7.2$ MΩ, $A_v\approx180$ and $p_{dom}\approx-1.4\times10^4$ rad/s (2.2 kHz), with the same GB of 2.5 Mrad/s; with M8's gate on a fixed bias it returns to the values above.
