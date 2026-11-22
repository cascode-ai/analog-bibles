# Detailed solution - A084

Both circuits are a 2/1 transistor M2 with an impedance between its source and ground. Their output resistances have the same form, so equal output resistance requires the diode-connected M1 to present the same small-signal resistance as the 100 kΩ resistor. Size M1 for that resistance at 10 µA.

### Step 1 — Output resistance of a source-degenerated transistor

For M2 with a small-signal resistance $R_S$ from its source to ground and its gate at ac ground (body effect ignored), a test voltage at the drain gives $v_{gs2}=-i_{out}R_S$ and

$$
r_{out}=R_S+r_{ds2}\big(1+g_{m2}R_S\big).
$$

In [Fig. 2], $R_S=100\ \mathrm{k\Omega}$; with $g_{m2}=66.3\ \mu$S and $r_{ds2}=2.5\ \mathrm{M\Omega}$ this gives about 19.2 MΩ. M2 carries the same 10 µA in both circuits, so $g_{m2}$ and $r_{ds2}$ are the same, and equal $r_{out}$ requires the same $R_S=100\ \mathrm{k\Omega}$.

### Step 2 — Small-signal resistance of the diode-connected M1

With its gate tied to its drain, M1 has $v_{gs1}=v_{ds1}=v$, so its small-signal current is $i=g_{m1}v+g_{ds1}v$:

$$
R_S=\frac{1}{g_{m1}+g_{ds1}}\approx\frac{1}{g_{m1}},
$$

since $g_{ds1}=\lambda I\approx0.4\ \mu$S is small. The condition $R_S=100\ \mathrm{k\Omega}$ thus requires

$$
g_{m1}=\frac{1}{100\ \mathrm{k\Omega}}=10\ \mu\mathrm S .
$$

### Step 3 — Size of M1

With $g_{m1}=\sqrt{2K'(W/L)_1I}$ and $I=10\ \mu$A:

$$
\Big(\frac WL\Big)_1=\frac{g_{m1}^2}{2K'I}=\frac{(10\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)}=0.0455=\frac{1}{22},
$$

for example $W_1=1\ \mu$m and $L_1=22\ \mu$m. Keeping $g_{ds1}$ ($g_{m1}=9.6\ \mu$S) gives $(W/L)_1\approx1/24$, and also keeping the $(1+\lambda v_{DS})$ factor in M1's bias equation gives about 1/26; all are equivalent within the accuracy of the model.

The price of this small $W/L$ is a large overdrive: $V_{ON1}=\sqrt{2I/[K'(W/L)_1]}=2.0$ V, so M1 drops $V_{GS1}=2.7$ V, compared with the 1 V across the 100 kΩ resistor.
