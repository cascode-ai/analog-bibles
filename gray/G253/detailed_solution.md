# Detailed solution - G253

The 10-kΩ resistor $R_F$ samples the output voltage and returns a current to the input node, so this is shunt–shunt (transresistance) feedback. Represent $R_F$ by its $y$-parameters: $y_{12f}$ gives the feedback factor, and $y_{11f}$, $y_{22f}$ load the basic amplifier's input and output with $R_F$ to ground. Three inverting stages give an overall inverting forward path, so the feedback is negative.

### Step 1 — Device parameters

In saturation $g_m=\sqrt{2k'(W/L)I_D}$ and $r_o=1/(\lambda I_D)$:

$$
g_m=\sqrt{2\left(60\ \mu\mathrm{A/V^2}\right)(100)(1\ \mathrm{mA})}=3.464\ \mathrm{mA/V},\qquad r_o=\frac{50\ \mathrm V}{1\ \mathrm{mA}}=50\ \mathrm{k\Omega}.
$$

### Step 2 — Feedback network and loaded basic amplifier

For the series resistor $R_F$, $y_{11f}=y_{22f}=1/R_F$ and $y_{12f}=-1/R_F$, so

$$
f=y_{12f}=-\frac1{R_F}=-10^{-4}\ \mathrm S .
$$

At the input, the ideal current source sees only $R_F$ to ground (the gate draws no current), so the input current develops $v_{g1}=i\,R_F$. Each stage is a common-source amplifier with gain $-g_m$ times its total drain resistance:

| Stage | Drain load | Load (Ω) | Gain |
|---|---|---|---|
| $M_1$, $M_2$ | $5\ \mathrm{k\Omega}\parallel r_o$ | 4545 | −15.75 |
| $M_3$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel R_F$ | 3125 | −10.83 |

For example, $-g_m(4545\ \Omega)=-(3.464\ \mathrm{mA/V})(4545\ \Omega)=-15.75$. The open-loop transresistance is

$$
a=\frac{v_o}{i}=R_F\,(-15.75)^2(-10.83)=(10\ \mathrm{k\Omega})(-2684)=-26.84\ \mathrm{M\Omega}.
$$

### Step 3 — Loop gain and closed-loop transresistance

$$
T=af=(-26.84\ \mathrm{M\Omega})(-10^{-4}\ \mathrm S)=2684 .
$$

$$
\frac{v_o}{i_i}=\frac{a}{1+T}=\frac{-26.84\ \mathrm{M\Omega}}{2685}=-9996\ \Omega,
$$

which is the ideal $1/f=-R_F=-10$ kΩ to within $1/(1+T)=0.04\%$.

### Step 4 — Input and output impedance

The loaded basic amplifier has input impedance $z_{ia}=R_F=10\ \mathrm{k\Omega}$ and output impedance $z_{oa}=5\ \mathrm{k\Omega}\parallel r_o\parallel R_F=3125\ \Omega$. Shunt connection at each port divides by $1+T$:

$$
Z_{in}=\frac{10\ \mathrm{k\Omega}}{2685}=3.72\ \Omega,\qquad Z_{out}=\frac{3125\ \Omega}{2685}=1.16\ \Omega .
$$

A direct nodal analysis of the circuit gives the same values ($-9996$ Ω, 3.72 Ω, 1.16 Ω). Neglecting $r_o$ would overstate the loop gain by about 30%.
