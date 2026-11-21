# Detailed solution - G276

$R_F$ samples the collector (output) voltage and returns a current to the base (input) node: shunt–shunt feedback with a transresistance gain. Use the $y$-parameters of $R_F$: it loads both the input and the output of the basic amplifier, and $f=y_{12f}=-1/R_F$. Unlike the MOS version, the base draws current through $r_\pi$, so $r_\pi$ loads the input node.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=38.46\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega},\qquad r_o=\frac{V_A}{I_C}=100\ \mathrm{k\Omega}.
$$

### Step 2 — Loaded basic amplifier

At the input, the current source sees $R_F$ (from $y_{11f}$) in parallel with $r_\pi$; at the output, $R_L$, $R_F$ (from $y_{22f}$) and $r_o$ are in parallel:

$$
R_i=R_F\parallel r_\pi=2\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}=1444\ \Omega,\qquad
R_o=R_L\parallel R_F\parallel r_o=990\ \Omega .
$$

A current $i$ develops $v_{be}=iR_i$, and the collector current $g_mv_{be}$ flows out of the output node:

$$
a=\frac{v_o}{i}=-R_i\,g_m\,R_o=-(1444\ \Omega)(38.46\ \mathrm{mA/V})(990\ \Omega)=-55.0\ \mathrm{k\Omega}.
$$

### Step 3 — Loop gain and transresistance

$$
T=af=(-55.0\ \mathrm{k\Omega})\left(-\frac1{2\ \mathrm{k\Omega}}\right)=27.5,\qquad
\frac{v_o}{i_i}=\frac{a}{1+T}=\frac{-55.0\ \mathrm{k\Omega}}{28.5}=-1.93\ \mathrm{k\Omega}.
$$

With $T=27.5$ the result is 3.5% below the ideal $-R_F=-2$ kΩ.

### Step 4 — Input and output resistances

Shunt connections at both ports divide the loaded resistances by $1+T$:

$$
R_{in}=\frac{1444\ \Omega}{28.5}=50.7\ \Omega,\qquad R_{out}=\frac{990\ \Omega}{28.5}=34.7\ \Omega .
$$

A direct nodal solution gives −1.93 kΩ, 51.3 Ω and 35.2 Ω; the small differences come from the feedforward through $R_F$, which the two-port method neglects. Neglecting $r_\pi$ at the input would overstate $T$ by about 40%.
