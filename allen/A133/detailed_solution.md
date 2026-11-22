# Detailed solution - A133

For each inverter, write the gain in terms of the input transconductance and the output conductance, solve for the $g_{m1}$ that gives $|A_v|=100$, and convert it to $(W/L)_1$ with $g_{m1}=\sqrt{2K'_N(W/L)_1I_D}$. With $L=1$ µm, the area of each device in µm² equals its $W/L$, and M2 contributes 1 µm² in every case.

### Step 1 — Common quantities at 10 µA

$$
g_{m2}=\sqrt{2K'_P(W/L)_2I_D}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(10\ \mu\mathrm A)}=31.6\ \mu\mathrm S,
$$

$$
g_{ds1}+g_{ds2}=(\lambda_N+\lambda_P)I_D=(0.09\ \mathrm{V^{-1}})(10\ \mu\mathrm A)=0.9\ \mu\mathrm S,
\qquad
(W/L)_1=\frac{g_{m1}^2}{2K'_NI_D}=\frac{g_{m1}^2}{2.2\times10^{-9}\ \mathrm{A^2/V^2}} .
$$

### Step 2 — Diode-connected (active-resistor) load

The diode-connected M2 loads the output with $g_{m2}\gg g_{ds}$, so

$$
|A_v|\approx\frac{g_{m1}}{g_{m2}}=\sqrt{\frac{K'_N(W/L)_1}{K'_P(W/L)_2}}=100
\quad\Rightarrow\quad
(W/L)_1=10^4\cdot\frac{50}{110}=4545 .
$$

The active area is $4545+1\approx4546\ \mu\mathrm m^2$. Keeping $g_{ds1}+g_{ds2}$ in the denominator requires $g_{m1}=100(32.5\ \mu\mathrm S)=3.25$ mS and raises the area to about 4808 µm². Such a device would have an overdrive of only $2I_D/g_{m1}\approx6$ mV, so it would actually operate in weak inversion: the diode load cannot reach this gain at a reasonable size.

### Step 3 — Current-source load

With M2 as a current source, only the output conductances load the output:

$$
|A_v|=\frac{g_{m1}}{g_{ds1}+g_{ds2}}=100
\quad\Rightarrow\quad
g_{m1}=100(0.9\ \mu\mathrm S)=90\ \mu\mathrm S,
\qquad
(W/L)_1=\frac{(90\ \mu\mathrm S)^2}{2.2\times10^{-9}}=3.68 .
$$

The active area is $3.68+1=4.68\ \mu\mathrm m^2$.

### Step 4 — Push–pull

Both devices are driven by the input, so their transconductances add while the output conductance stays $g_{ds1}+g_{ds2}$:

$$
|A_v|=\frac{g_{m1}+g_{m2}}{g_{ds1}+g_{ds2}}=100
\quad\Rightarrow\quad
g_{m1}=90-31.6\ \mu\mathrm S=58.4\ \mu\mathrm S,
\qquad
(W/L)_1=\frac{(58.4\ \mu\mathrm S)^2}{2.2\times10^{-9}}=1.55 .
$$

The active area is $1.55+1=2.55\ \mu\mathrm m^2$.

### Step 5 — Comparison

| Inverter | Gain expression | $(W/L)_1$ | Area $W_1L_1+W_2L_2$ |
|---|---|---|---|
| Diode-connected load | $g_{m1}/g_{m2}$ | 4545 | ≈ 4546 µm² |
| Current-source load | $g_{m1}/(g_{ds1}+g_{ds2})$ | 3.68 | ≈ 4.7 µm² |
| Push–pull | $(g_{m1}+g_{m2})/(g_{ds1}+g_{ds2})$ | 1.55 | ≈ 2.55 µm² |

The areas are roughly in the ratio 1800 : 1.8 : 1. The diode load's gain depends only on the square root of a size ratio, so a gain of 100 needs an enormous input device. The two loads with $g_{ds}$-limited output conductance reach it with small devices, and the push–pull inverter needs the least area because M2's transconductance also contributes to the gain.
