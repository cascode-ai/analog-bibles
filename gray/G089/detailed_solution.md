# Detailed solution - G089

In a Widlar source, $R_2$ absorbs the difference between the two base–emitter voltages. Find the input current from $R_1$, then use KVL around the base–emitter loop with the exponential law to size $R_2$ for 5 µA. $Q_2$ is a transistor with emitter degeneration whose base is driven from the low impedance of diode-connected $Q_1$, so its output resistance is $r_{o2}$ multiplied by $1+g_{m2}(R_2\|r_{\pi2})$.

### Step 1 — Input current

$Q_1$ is diode-connected, so $I_{IN}=(V_{CC}-V_{BE1})/R_1$ with $V_{BE1}=V_T\ln(I_{IN}/I_S)$. Iterating from 0.7 V:

$$
V_{BE1}=(26\ \mathrm{mV})\ln\frac{0.977\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.676\ \mathrm V,\qquad
I_{IN}=\frac{30\ \mathrm V-0.676\ \mathrm V}{30\ \mathrm{k\Omega}}=0.977\ \mathrm{mA}.
$$

$V_{BE1}$ is much smaller than $V_{CC}$, so its exact value hardly matters: 0.7 V gives the same 0.977 mA.

### Step 2 — Size $R_2$

The bases are common and the emitter of $Q_1$ is grounded, so KVL from the common base node to ground through the two emitters gives (neglecting base currents)

$$
V_{BE1}=V_{BE2}+I_{OUT}R_2\quad\Rightarrow\quad
R_2=\frac{V_{BE1}-V_{BE2}}{I_{OUT}}=\frac{V_T}{I_{OUT}}\ln\frac{I_{IN}}{I_{OUT}},
$$

using $V_{BE}=V_T\ln(I_C/I_S)$ for each identical device. Numerically,

$$
R_2=\frac{26\ \mathrm{mV}}{5\ \mu\mathrm A}\ln\frac{0.977\ \mathrm{mA}}{5\ \mu\mathrm A}=(5.2\ \mathrm{k\Omega})\ln(195.5)=(5.2\ \mathrm{k\Omega})(5.276)=27.4\ \mathrm{k\Omega}.
$$

Including base currents ($I_{C1}=0.973$ mA and an emitter current of $I_{OUT}(\beta_F+1)/\beta_F$ in $R_2$) gives 27.3 kΩ. A 195-fold current reduction thus needs only 27.4 kΩ, because $R_2$ drops just $V_T\ln(195.5)=137$ mV.

### Step 3 — Output resistance

$Q_2$ has emitter degeneration $R_2$, and its base sees only the diode resistance of $Q_1$ ($\approx1/g_{m1}=27\ \Omega$), effectively an ac ground. The output resistance of such a degenerated stage is

$$
R_o\approx r_{o2}\left[1+g_{m2}\left(R_2\,\|\,r_{\pi2}\right)\right],
$$

where $r_{\pi2}$ appears in parallel with $R_2$ because part of the signal current returns through the base. At $I_C=5\ \mu\mathrm A$:

$$
g_{m2}=\frac{5\ \mu\mathrm A}{26\ \mathrm{mV}}=0.192\ \mathrm{mA/V},\qquad
r_{\pi2}=\frac{\beta_0}{g_{m2}}=1.04\ \mathrm{M\Omega},\qquad
r_{o2}=\frac{V_A}{I_{OUT}}=\frac{130\ \mathrm V}{5\ \mu\mathrm A}=26\ \mathrm{M\Omega},
$$

$$
R_2\|r_{\pi2}=26.7\ \mathrm{k\Omega},\qquad
R_o=(26\ \mathrm{M\Omega})\left[1+(0.192\ \mathrm{mA/V})(26.7\ \mathrm{k\Omega})\right]=(26\ \mathrm{M\Omega})(6.14)=160\ \mathrm{M\Omega}.
$$

Neglecting $r_{\pi2}$ gives 163 MΩ. The degeneration raises the output resistance about six times above $r_{o2}$, since $g_{m2}R_2=\ln(I_{IN}/I_{OUT})=5.3$.
