# Detailed solution - G090

For a fixed $I_{OUT}$, the only free design choice is the input current $I_{IN}$. A larger $I_{IN}$ lets $R_1$ shrink, but it widens the current ratio and so needs a larger $R_2$. Write both resistors as functions of $I_{IN}$, add them, and set the derivative of the total to zero.

### Step 1 — Both resistors as functions of $I_{IN}$

$Q_1$ is diode-connected, so $R_1$ carries $I_{IN}$ and drops $V_{CC}-V_{BE1}$. With base currents neglected, KVL around the base–emitter loop gives $V_{BE1}-V_{BE2}=I_{OUT}R_2$. With $V_{BE}=V_T\ln(I_C/I_S)$ for identical devices,

$$
R_1=\frac{V_{CC}-V_{BE}}{I_{IN}},\qquad R_2=\frac{V_T}{I_{OUT}}\ln\frac{I_{IN}}{I_{OUT}} .
$$

$V_{BE}$ changes only logarithmically with $I_{IN}$, so treat $V_{CC}-V_{BE}$ as a constant.

### Step 2 — Minimize the total resistance

$$
R_T(I_{IN})=\frac{V_{CC}-V_{BE}}{I_{IN}}+\frac{V_T}{I_{OUT}}\ln\frac{I_{IN}}{I_{OUT}},
$$

$$
\frac{dR_T}{dI_{IN}}=-\frac{V_{CC}-V_{BE}}{I_{IN}^2}+\frac{V_T}{I_{OUT}I_{IN}}=0
\quad\Rightarrow\quad
I_{IN}=\frac{(V_{CC}-V_{BE})\,I_{OUT}}{V_T}.
$$

At this point $d^2R_T/dI_{IN}^2=2(V_{CC}-V_{BE})/I_{IN}^3-V_T/(I_{OUT}I_{IN}^2)=V_T/(I_{OUT}I_{IN}^2)>0$, so it is a minimum. Substituting back,

$$
R_1=\frac{V_T}{I_{OUT}},\qquad R_2=\frac{V_T}{I_{OUT}}\ln\frac{V_{CC}-V_{BE}}{V_T}\approx\frac{V_T}{I_{OUT}}\ln\frac{V_{CC}}{V_T}\quad(V_{BE}\ll V_{CC}).
$$

At the optimum, $R_1$ drops $V_{CC}-V_{BE}$ while carrying $I_{IN}$. That makes $R_1$ equal to $V_T/I_{OUT}$, the small-signal resistance $1/g_m$ of the output transistor.

### Step 3 — Values for $V_{CC}=30$ V, $I_{OUT}=5\ \mu\mathrm A$

$$
R_1=\frac{26\ \mathrm{mV}}{5\ \mu\mathrm A}=5.2\ \mathrm{k\Omega},\qquad
R_2=(5.2\ \mathrm{k\Omega})\ln\frac{30\ \mathrm V}{26\ \mathrm{mV}}=(5.2\ \mathrm{k\Omega})\ln(1154)=(5.2\ \mathrm{k\Omega})(7.05)=36.7\ \mathrm{k\Omega},
$$

$$
I_{IN}=\frac{(30\ \mathrm V)(5\ \mu\mathrm A)}{26\ \mathrm{mV}}=5.8\ \mathrm{mA}.
$$

The total is $R_1+R_2\approx42\ \mathrm{k\Omega}$. Keeping $V_{BE}=0.7$ V gives $R_2=36.5\ \mathrm{k\Omega}$ and $I_{IN}=5.6$ mA, with $R_1$ unchanged.

### Step 4 — Practicality

These values are not practical. The reference branch draws about 5.8 mA, more than 1000 times the 5-µA output, and dissipates $(30\ \mathrm V)(5.8\ \mathrm{mA})\approx0.17$ W. The point of a Widlar source is to make a small current without large resistors or large power. The saving is also small: the design of a 30-kΩ $R_1$ with a 27.4-kΩ $R_2$ ($I_{IN}\approx1$ mA, total 57 kΩ) uses only about 15 kΩ more resistance at one-sixth of the power. In practice, $I_{IN}$ is chosen from a power or area budget well below this "optimum".
