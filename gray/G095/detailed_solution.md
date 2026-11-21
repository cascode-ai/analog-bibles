# Detailed solution - G095

The two diode-connected transistors $Q_1$ and $Q_2$ hold the base of $Q_3$ at two base–emitter drops above ground. $Q_3$ uses one of those drops for its own $V_{BE}$, so the other appears across the 700-Ω emitter resistor and sets $I_{OUT}$. Find $I_{IN}$, then solve the KVL equation of the output loop, then compute the output resistance of $Q_3$ with its emitter degeneration.

### Step 1 — Input current

The 13.7-kΩ resistor carries $I_{IN}$ through $Q_2$ and $Q_1$ in series:

$$
I_{IN}=\frac{15\ \mathrm V-2V_{BE}}{13.7\ \mathrm{k\Omega}},\qquad V_{BE}=V_T\ln\frac{I_{IN}}{I_S}.
$$

Iterating from 0.7 V gives $V_{BE}=(26\ \mathrm{mV})\ln(0.996\ \mathrm{mA}/5\times10^{-15}\ \mathrm A)=0.676$ V and

$$
I_{IN}=\frac{15\ \mathrm V-1.353\ \mathrm V}{13.7\ \mathrm{k\Omega}}=0.996\ \mathrm{mA}.
$$

### Step 2 — Output current

KVL from the base of $Q_3$ to ground, through the diode stack on one side and through $Q_3$ and the emitter resistor $R_E=700\ \Omega$ on the other (base currents neglected):

$$
2V_{BE}(I_{IN})=V_{BE3}(I_{OUT})+I_{OUT}R_E
\quad\Rightarrow\quad
I_{OUT}R_E=V_{BE}(I_{IN})+V_T\ln\frac{I_{IN}}{I_{OUT}} .
$$

Since $I_{OUT}\approx I_{IN}$, the logarithm is small. As a first guess, $I_{OUT}\approx0.676\ \mathrm V/700\ \Omega=0.966$ mA. One more pass gives

$$
I_{OUT}=\frac{0.676\ \mathrm V+(26\ \mathrm{mV})\ln(0.996/0.967)}{700\ \Omega}=\frac{0.677\ \mathrm V}{700\ \Omega}=0.967\ \mathrm{mA}.
$$

With the emitter current $(\beta_F+1)I_{OUT}/\beta_F$ in $R_E$, the result is 0.963 mA. Taking every $V_{BE}=0.7$ V gives $I_{OUT}=1.0$ mA.

### Step 3 — Small-signal parameters of $Q_3$

$$
g_{m3}=\frac{0.967\ \mathrm{mA}}{26\ \mathrm{mV}}=37.2\ \mathrm{mA/V},\qquad
r_{\pi3}=\frac{\beta_0}{g_{m3}}=5.37\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{130\ \mathrm V}{0.967\ \mathrm{mA}}=134\ \mathrm{k\Omega}.
$$

The base of $Q_3$ is driven by the diode stack, $2/g_m=52\ \Omega$ in parallel with 13.7 kΩ, so $R_B\approx52\ \Omega$.

### Step 4 — Output resistance

For a transistor with emitter resistance $R_E$ and base resistance $R_B$, a test current into the collector develops $v_e$ across $R_E\|(r_\pi+R_B)$. The base–emitter voltage is then $-v_e\,r_\pi/(r_\pi+R_B)$, and $g_m$ times this adds to the current through $r_o$. To first order,

$$
R_o\approx r_{o3}\left[1+\frac{g_{m3}R_Er_{\pi3}}{r_{\pi3}+R_E+R_B}\right]\approx r_{o3}\left[1+g_{m3}\left(R_E\,\|\,r_{\pi3}\right)\right]\quad(R_B\ll r_{\pi3}).
$$

With $R_E\|r_{\pi3}=700\ \Omega\,\|\,5.37\ \mathrm{k\Omega}=619\ \Omega$:

$$
R_o=(134\ \mathrm{k\Omega})\left[1+(37.2\ \mathrm{mA/V})(619\ \Omega)\right]=(134\ \mathrm{k\Omega})(24.0)=3.2\ \mathrm{M\Omega}.
$$

Including $R_B=52\ \Omega$ changes this by less than 1 % (3.20 MΩ). Part of the emitter signal current returns through the base, which is why $R_E\|r_{\pi3}$, not $R_E$, multiplies $g_{m3}$. Using $R_E$ alone would overestimate $R_o$ as 3.6 MΩ.
