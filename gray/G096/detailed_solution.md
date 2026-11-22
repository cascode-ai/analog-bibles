# Detailed solution - G096

This is a $V_{BE}$-referenced current source. The base–emitter junction of $Q_1$ is connected directly across $R_2$, so the output current is $V_{BE1}/R_2$. The supply affects $I_{OUT}$ only through $I_{C1}$, and $V_{BE1}$ depends on $I_{C1}$ only logarithmically, which makes $S$ small. Find the operating point, then differentiate the loop equations.

### Step 1 — Circuit equations

$R_2$ connects the emitter of $Q_2$ to ground and carries the emitter current of $Q_2$; its top is also the base of $Q_1$. With base currents neglected,

$$
I_{OUT}=\frac{V_{BE1}}{R_2},\qquad V_{BE1}=V_T\ln\frac{I_{C1}}{I_S}.
$$

$R_1$ feeds the collector of $Q_1$, which is also the base of $Q_2$, at $V_{BE1}+V_{BE2}$ above ground:

$$
I_{C1}=\frac{V_{CC}-V_{BE1}-V_{BE2}}{R_1},\qquad V_{BE2}=V_T\ln\frac{I_{OUT}}{I_S}.
$$

The loop $Q_1\to R_2\to Q_2$ is a negative-feedback loop that fixes $V_{BE1}$ across $R_2$.

### Step 2 — Operating point

Iterating from $V_{BE}\approx0.7$ V:

$$
I_{C1}=\frac{15\ \mathrm V-0.685\ \mathrm V-0.667\ \mathrm V}{10\ \mathrm{k\Omega}}=1.365\ \mathrm{mA},\qquad
V_{BE1}=(26\ \mathrm{mV})\ln\frac{1.365\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.685\ \mathrm V,
$$

$$
I_{OUT}=\frac{0.685\ \mathrm V}{1\ \mathrm{k\Omega}}=0.685\ \mathrm{mA},\qquad
V_{BE2}=(26\ \mathrm{mV})\ln\frac{0.685\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.667\ \mathrm V .
$$

### Step 3 — Differentiate

A change $dV_{CC}$ changes $I_{C1}$ by $dI_{C1}$, which changes $V_{BE1}$ by $dV_{BE1}=V_T\,dI_{C1}/I_{C1}$ and hence $I_{OUT}$ by $dV_{BE1}/R_2$. Neglecting the much smaller changes of the two $V_{BE}$ terms in the $I_{C1}$ equation, $dI_{C1}=dV_{CC}/R_1$, so

$$
\frac{\partial I_{OUT}}{\partial V_{CC}}=\frac1{R_2}\cdot\frac{V_T}{I_{C1}}\cdot\frac1{R_1}=\frac{V_T}{R_2\,I_{C1}R_1}.
$$

Multiplying by $V_{CC}/I_{OUT}=V_{CC}R_2/V_{BE1}$ and using $I_{C1}R_1=V_{CC}-V_{BE1}-V_{BE2}$:

$$
S=\frac{V_{CC}}{I_{OUT}}\frac{\partial I_{OUT}}{\partial V_{CC}}=\frac{V_T}{V_{BE1}}\cdot\frac{V_{CC}}{V_{CC}-V_{BE1}-V_{BE2}} .
$$

### Step 4 — Value

$$
S=\frac{26\ \mathrm{mV}}{0.685\ \mathrm V}\cdot\frac{15\ \mathrm V}{13.65\ \mathrm V}=(0.0380)(1.099)=0.042 .
$$

Keeping the $V_{BE}$ changes in the $I_{C1}$ equation, or differentiating the full equations numerically, also gives 0.042. A 1 % change in $V_{CC}$ therefore moves $I_{OUT}$ by only 0.04 %. A simple resistor-fed mirror, where $I_{OUT}\approx(V_{CC}-V_{BE})/R$, has $S\approx1$. The improvement comes from referencing the output to $V_{BE1}$, which changes only by $V_T$ per factor $e$ in $I_{C1}$.
