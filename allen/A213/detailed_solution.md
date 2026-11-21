# Detailed solution - A213

The positive slew rate is the fastest rise of $v_{OUT}$, reached when a large positive input step drives M1 as hard as possible. Find M1's current at the instant $v_{OUT}=0$, subtract what the sink and resistor take, and divide the rest by $C_L$.

### Step 1 — Drive condition and region of M1

For the largest rate, $v_{IN}$ steps to its maximum, $+2.5$ V. The output cannot jump (it is held by $C_L$), so at $v_{OUT}=0$

$$
V_{GS1}=2.5\ \mathrm V,\qquad V_{DS1}=2.5\ \mathrm V,\qquad V_{GS1}-V_T=1.8\ \mathrm V.
$$

Because $V_{DS1}\ge V_{GS1}-V_T$, M1 is saturated.

### Step 2 — Drain current of M1

The square-law saturation current (bulk effect and channel-length modulation ignored) is

$$
I_{D1}=\frac{K'_N}{2}\frac WL(V_{GS1}-V_T)^2
=\frac{110\ \mu\mathrm{A/V^2}}{2}(100)(1.8\ \mathrm V)^2
=(5.5\ \mathrm{mA/V^2})(3.24\ \mathrm{V^2})=17.82\ \mathrm{mA}.
$$

### Step 3 — Current into the capacitor and slew rate

KCL at the output: M1's current goes into the sink ($I_Q=200\ \mu\mathrm A$), the resistor ($v_{OUT}/R_L=0$ at $v_{OUT}=0$) and the capacitor:

$$
C_L\frac{dv_{OUT}}{dt}=I_{D1}-I_Q-\frac{v_{OUT}}{R_L}
=17.82\ \mathrm{mA}-0.2\ \mathrm{mA}-0=17.62\ \mathrm{mA}.
$$

$$
SR^+=\frac{17.62\ \mathrm{mA}}{50\ \mathrm{pF}}=3.52\times10^{8}\ \mathrm{V/s}\approx+352\ \mathrm{V/\mu s}.
$$

The rise is fast because the follower can source a large current; the rate falls as $v_{OUT}$ rises and $V_{GS1}$ shrinks.
