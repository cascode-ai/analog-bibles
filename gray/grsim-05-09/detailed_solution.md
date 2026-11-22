# Detailed solution - grsim-05-09

Equate the drain currents of the two saturated devices to get the large-signal transfer function $V_o(V_i)$. Because both transistors have the same $k'W/L$, the square laws cancel except for the body effect of $M_2$, which makes $V_o$ an exact quadratic in $V_i$. Its Taylor coefficients give $HD_2$, and a level-1 ngspice transient with Fourier analysis confirms it.

### Step 1 — Transfer function from equal drain currents

In saturation $I_D=\frac12k'\frac WL(V_{GS}-V_t)^2$ (with $\lambda=0$). For $M_1$, $V_{GS1}=V_i$ and $V_{SB1}=0$. For $M_2$, the gate is tied to the source, so $V_{GS2}=0$, but its source sits at $V_o$ above the grounded body, so $V_{SB2}=V_o$:

$$
V_{t2}=-0.6\ \mathrm V+\gamma\left(\sqrt{2\phi_f+V_o}-\sqrt{2\phi_f}\right),\qquad
I_{D2}=\tfrac12k'\tfrac WL\,V_{t2}^2 .
$$

The two currents are equal and the $k'W/L$ factors cancel, so $V_i-V_{t1}=-V_{t2}$ (both overdrives positive):

$$
V_i=0.6\ \mathrm V+0.6\ \mathrm V-0.5\left(\sqrt{0.6\ \mathrm V+V_o}-\sqrt{0.6\ \mathrm V}\right).
$$

Without the body effect, $V_{t2}$ would be constant and $V_i$ would be fixed: the gain would be infinite. The body effect is what sets both the gain and the nonlinearity.

### Step 2 — DC operating point

At $V_o=1$ V,

$$
V_{t2}=-0.6+0.5\left(\sqrt{1.6}-\sqrt{0.6}\right)=-0.6+0.5(1.26491-0.77460)=-0.35484\ \mathrm V,
$$

$$
I_D=\tfrac12(200\ \mu\mathrm{A/V^2})(100)(0.35484\ \mathrm V)^2=1.259\ \mathrm{mA},\qquad V_I=0.6+0.35484=0.95484\ \mathrm V.
$$

Both devices are saturated: $V_{DS1}=1\ \mathrm V>V_{ov1}=0.355$ V and $V_{DS2}=2\ \mathrm V>V_{ov2}=0.355$ V.

### Step 3 — Invert to an exact quadratic

Collect the constants as $C=1.2\ \mathrm V+0.5\sqrt{0.6\ \mathrm V}=1.58730$ V. Then $\sqrt{0.6+V_o}=2(C-V_i)$, and squaring,

$$
V_o=4\left(C-V_i\right)^2-0.6\ \mathrm V
$$

(with $V_i$ in volts, the coefficient 4 has units $\mathrm{V^{-1}}$). Expanding about $V_I$ with $v_i=V_i-V_I$ and $C-V_I=0.5\sqrt{1.6}=0.63246$ V:

$$
v_o=a_1v_i+a_2v_i^2,\qquad a_1=-8(C-V_I)=-5.0596,\qquad a_2=4\ \mathrm{V^{-1}},\qquad a_3=0.
$$

The small-signal gain is $-5.06$; there is no cubic term.

### Step 4 — Second-harmonic distortion

For $v_i=\hat v_i\sin\omega t$, the $v_i^2$ term gives $a_2\hat v_i^2/2$ at dc and $a_2\hat v_i^2/2$ at $2\omega$, so

$$
HD_2=\frac{|a_2|\hat v_i^2/2}{|a_1|\hat v_i}=\frac12\left|\frac{a_2}{a_1}\right|\hat v_i=\frac12\cdot\frac{4\ \mathrm{V^{-1}}}{5.0596}\cdot0.01\ \mathrm V=3.95\times10^{-3}\approx0.40\ \%.
$$

Since $a_3=0$, the third harmonic is zero as long as both devices remain saturated, which holds easily for a 50-mV output swing.

### Step 5 — SPICE verification

The level-1 models carry the given parameters; the dc input is found from $V_o=1$ V, then a 10-mV, 1-kHz sine is added and `fourier` analyses the last period.

```spice
* grsim-05-09 CS amplifier with depletion load
.model nen nmos level=1 kp=200u vto=0.6  gamma=0.5 phi=0.6 lambda=0
.model nde nmos level=1 kp=200u vto=-0.6 gamma=0.5 phi=0.6 lambda=0
VDD vdd 0 3
Vi  in  0 dc 0.954842 sin(0.954842 0.01 1k)
M1 out in  0   0 nen w=100u l=1u
M2 vdd out out 0 nde w=100u l=1u
.dc Vi 0.94 0.97 0.0001
.tran 2u 5m 3m 1u
.four 1k v(out)
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $V_I$ for $V_O=1$ V | 0.95484 V | 0.95484 V |
| Small-signal gain | −5.060 | −5.060 |
| Fundamental of $v_o$ | 50.6 mV | 50.60 mV |
| Second harmonic | 0.200 mV | 0.200 mV |
| $HD_2$ | 0.395 % | 0.395 % |
| $HD_3$ | 0 | ≈ $10^{-13}$ (numerical noise) |

The dc output also rises by $a_2\hat v_i^2/2=0.2$ mV, which the simulation shows (1.0002 V). The simulation agrees with the hand result because the level-1 model is exactly the square law with the same body-effect expression: $HD_2\approx0.40\ \%$, and $HD_3$ is negligible.
