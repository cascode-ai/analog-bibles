# Detailed solution - G274

$R_F$ samples the drain (output) voltage and returns a current to the gate (input) node: shunt–shunt feedback, so the closed-loop gain is a transresistance. Represent $R_F$ by its $y$-parameters, load the input and output of the basic amplifier with $R_F$, and take $f=y_{12f}=-1/R_F$.

### Step 1 — Transconductance

In saturation the square law gives $g_m=\sqrt{2k'(W/L)I_D}$:

$$
g_m=\sqrt{2\left(180\ \mu\mathrm{A/V^2}\right)(100)(0.5\ \mathrm{mA})}=4.243\ \mathrm{mA/V}.
$$

### Step 2 — Feedback factor and loaded basic amplifier

For $R_F$ between the two ports, $y_{11f}=y_{22f}=1/R_F$ and

$$
f=y_{12f}=-\frac1{R_F}=-10^{-5}\ \mathrm S .
$$

The ideal current source sees only $R_F$ at the gate (the gate draws no current), so a current $i$ produces $v_{gs}=iR_F$; the drain is loaded by $R_L\parallel R_F=15\ \mathrm{k\Omega}\parallel100\ \mathrm{k\Omega}=13.04\ \mathrm{k\Omega}$ ($r_o=\infty$):

$$
a=\frac{v_o}{i}=-R_F\,g_m\,(R_L\parallel R_F)=-(100\ \mathrm{k\Omega})(4.243\ \mathrm{mA/V})(13.04\ \mathrm{k\Omega})=-5.53\ \mathrm{M\Omega}.
$$

### Step 3 — Loop gain and transresistance

$$
T=af=(-5.53\ \mathrm{M\Omega})(-10^{-5}\ \mathrm S)=55.3,
$$

$$
\frac{v_o}{i_i}=\frac{a}{1+T}=\frac{-5.53\ \mathrm{M\Omega}}{56.3}=-98.2\ \mathrm{k\Omega},
$$

close to the ideal $1/f=-R_F=-100$ kΩ.

### Step 4 — Input and output resistances

Shunt connections at both ports divide the loaded resistances by $1+T$:

$$
R_{in}=\frac{R_F}{1+T}=\frac{100\ \mathrm{k\Omega}}{56.3}=1.78\ \mathrm{k\Omega},\qquad
R_{out}=\frac{R_L\parallel R_F}{1+T}=\frac{13.04\ \mathrm{k\Omega}}{56.3}=232\ \Omega .
$$

A direct nodal solution gives −98.2 kΩ, 1.78 kΩ and 232 Ω; the small differences in the last digit come from the feedforward current through $R_F$, which the two-port approximation neglects.
