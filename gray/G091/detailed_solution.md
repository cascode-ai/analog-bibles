# Detailed solution - G091

[Fig. 1] is a Widlar current source. Diode-connected $Q_1$ and the 20-kΩ resistor set the input current. $Q_2$ shares the base voltage, and its 10-kΩ emitter resistor absorbs the difference in base–emitter voltages. Find $I_{IN}$ first. KVL around the base–emitter loop then gives a transcendental equation in $I_{OUT}$, which is solved by iteration.

### Step 1 — Input current

$$
I_{IN}=\frac{V_{CC}-V_{BE1}}{20\ \mathrm{k\Omega}},\qquad V_{BE1}=V_T\ln\frac{I_{IN}}{I_S}.
$$

Starting from 0.7 V and iterating once or twice:

$$
V_{BE1}=(26\ \mathrm{mV})\ln\frac{0.717\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.668\ \mathrm V,\qquad
I_{IN}=\frac{15\ \mathrm V-0.668\ \mathrm V}{20\ \mathrm{k\Omega}}=0.717\ \mathrm{mA}.
$$

### Step 2 — The Widlar equation

The bases are joined and the emitter of $Q_1$ is grounded. With base currents neglected, $V_{BE1}=V_{BE2}+I_{OUT}R_2$. Since $V_{BE}=V_T\ln(I_C/I_S)$ for each identical transistor, $I_S$ cancels:

$$
V_T\ln\frac{I_{IN}}{I_{OUT}}=I_{OUT}R_2,\qquad R_2=10\ \mathrm{k\Omega}.
$$

The left side falls slowly (logarithmically) as $I_{OUT}$ rises, while the right side rises linearly, so there is exactly one solution.

### Step 3 — Solve by iteration

Evaluate both sides for trial values of $I_{OUT}$:

| $I_{OUT}$ (µA) | $V_T\ln(I_{IN}/I_{OUT})$ (mV) | $I_{OUT}R_2$ (mV) |
|---|---|---|
| 10.0 | 111.1 | 100.0 |
| 10.9 | 108.8 | 109.0 |
| 11.0 | 108.6 | 110.0 |

The two sides cross at

$$
I_{OUT}=10.9\ \mu\mathrm A,
$$

where $R_2$ drops $V_{BE1}-V_{BE2}=109$ mV. Including base currents ($I_{C1}$ slightly below $I_{IN}$, and an emitter current $(\beta_F+1)I_{OUT}/\beta_F$ in $R_2$) lowers the result to 10.8 µA. The current is reduced by a factor of 66 from $I_{IN}$.
