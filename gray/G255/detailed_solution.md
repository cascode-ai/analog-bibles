# Detailed solution - G255

As in the MOS version, $R_F$ samples the output voltage and returns a current to the input node: shunt–shunt feedback with $f=y_{12f}=-1/R_F$, and $R_F$ loading both the input and the output to ground. The difference is that each base draws current through $r_\pi$, so $r_\pi$ loads the input node and the collector of each preceding stage.

### Step 1 — Hybrid-π parameters

At $I_C=1$ mA in the forward-active region:

$$
g_m=\frac{I_C}{V_T}=38.46\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega},\qquad r_o=\frac{V_A}{I_C}=50\ \mathrm{k\Omega}.
$$

### Step 2 — Loaded basic amplifier

The input current flows into $R_F$ (from $y_{11f}$) in parallel with $r_{\pi1}$, so $v_{be1}=i\,(R_F\parallel r_\pi)=(3421\ \Omega)\,i$. Each common-emitter stage has gain $-g_m$ times its total collector load:

| Stage | Collector load | Load (Ω) | Gain |
|---|---|---|---|
| $Q_1$, $Q_2$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel r_\pi$ (next base) | 2425 | −93.3 |
| $Q_3$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel R_F$ | 3125 | −120.2 |

For example, $-g_m(2425\ \Omega)=-(38.46\ \mathrm{mA/V})(2425\ \Omega)=-93.3$. The open-loop transresistance is

$$
a=\frac{v_o}{i}=(3421\ \Omega)(-93.3)^2(-120.2)=-3.58\times10^{9}\ \Omega .
$$

### Step 3 — Loop gain and transresistance

$$
T=af=(-3.58\times10^{9}\ \Omega)\left(-\frac1{10\ \mathrm{k\Omega}}\right)=3.58\times10^{5},
$$

$$
\frac{v_o}{i_i}=\frac{a}{1+T}=-9999.97\ \Omega\approx-10.0\ \mathrm{k\Omega}.
$$

The bipolar stages have much higher $g_m$ at the same current, so the loop gain is about 130 times that of the MOS version and the gain equals $-R_F$ to within 3 ppm.

### Step 4 — Input and output impedances

Shunt connections at both ports divide the loaded impedances by $1+T$:

$$
Z_{in}=\frac{R_F\parallel r_\pi}{1+T}=\frac{3421\ \Omega}{3.58\times10^{5}}=9.56\ \mathrm{m\Omega},\qquad
Z_{out}=\frac{5\ \mathrm{k\Omega}\parallel r_o\parallel R_F}{1+T}=\frac{3125\ \Omega}{3.58\times10^{5}}=8.73\ \mathrm{m\Omega}.
$$

A direct nodal analysis gives the same values.
