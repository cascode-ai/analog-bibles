# Detailed solution - G131

The diode-connected $Q_3$ and $Q_4$ bias $Q_1$ and $Q_2$ slightly on. Three relations fix every current: KVL around the loop of four base-emitter junctions, KCL at the base of $Q_1$ (whose base current is taken from $I_Q$), and KCL at the output. Once $|I_{c2}|$ is known, $V_i$ follows from the emitter-base voltage of $Q_2$, since the base of $Q_2$ is the input.

### Step 1 — Circuit equations

Use $I_C=I_Se^{V_{BE}/V_T}$ for every junction, including the diode-connected $Q_3$ and $Q_4$ (whose small internal base current is neglected), with all $I_S$ equal.

- **Diode current.** $I_Q$ feeds both the diodes and the base of $Q_1$, so $I_D=I_Q-I_{c1}/\beta_F$.
- **KVL around the loop.** The voltage across $Q_3$ and $Q_4$ equals $V_{BE1}+V_{EB2}$:

$$
2V_T\ln\frac{I_D}{I_S}=V_T\ln\frac{I_{c1}}{I_S}+V_T\ln\frac{|I_{c2}|}{I_S}\ \Rightarrow\ I_{c1}|I_{c2}|=I_D^2 .
$$

- **KCL at the output.** The emitter currents differ by the load current:

$$
\left(I_{c1}-|I_{c2}|\right)\left(1+\frac1{\beta_F}\right)=\frac{V_o}{R_L}.
$$

- **Input.** $V_i$ is the base of $Q_2$, so $V_i=V_o-V_{EB2}$ with $V_{EB2}=V_T\ln(|I_{c2}|/I_S)$.

Substituting $I_D=I_Q-I_{c1}/\beta_F$ and $|I_{c2}|=I_D^2/I_{c1}$ into the output KCL leaves one equation in $I_{c1}$ for each $V_o$.

### Step 2 — Quiescent point, $V_o=0$

By symmetry $I_{c1}=|I_{c2}|$, and then $I_{c1}|I_{c2}|=I_D^2$ gives $I_{c1}=I_D$. With $I_D=I_Q-I_{c1}/\beta_F$,

$$
I_{c1}=|I_{c2}|=I_D=\frac{I_Q}{1+1/\beta_F}=\frac{100\ \mu\mathrm A}{1.00667}=99.3\ \mu\mathrm A,
$$
$$
V_i=-V_{EB2}=-(26\ \mathrm{mV})\ln\frac{99.3\ \mu\mathrm A}{10^{-15}\ \mathrm A}=-0.658\ \mathrm V.
$$

### Step 3 — A representative swing point, $V_o=+5$ V

$Q_1$ supplies almost all of the 5 mA load current, so $I_{c1}\approx(5\ \mathrm{mA})/(1+1/150)=4.967$ mA. Its base current, $4.97\ \mathrm{mA}/150=33.1\ \mu$A, is taken from $I_Q$, leaving

$$
I_D=100\ \mu\mathrm A-33.1\ \mu\mathrm A=66.9\ \mu\mathrm A,\qquad |I_{c2}|=\frac{I_D^2}{I_{c1}}=\frac{(66.9\ \mu\mathrm A)^2}{4.968\ \mathrm{mA}}=0.90\ \mu\mathrm A .
$$

This small $|I_{c2}|$ barely changes $I_{c1}$ (now 4.968 mA), so one pass suffices. Then

$$
V_{EB2}=(26\ \mathrm{mV})\ln\frac{0.90\ \mu\mathrm A}{10^{-15}\ \mathrm A}=0.536\ \mathrm V,\qquad V_i=5\ \mathrm V-0.536\ \mathrm V=4.464\ \mathrm V.
$$

For negative outputs the roles swap: $Q_2$ sinks the load current, $Q_1$'s base current becomes negligible, so $I_D\approx I_Q$ and $I_{c1}=I_D^2/|I_{c2}|$. Solving the same equations at every point (numerically, to keep the small currents accurate):

| $V_o$ | $I_{c1}$ | $I_{b1}$ | $I_D$ ($Q_3$, $Q_4$) | $\lvert I_{c2}\rvert$ | $V_{EB2}$ | $V_i$ |
|---|---|---|---|---|---|---|
| +10 V | 9.93 mA | 66.2 µA | 33.8 µA | 0.115 µA | 0.483 V | +9.518 V |
| +5 V | 4.97 mA | 33.1 µA | 66.9 µA | 0.900 µA | 0.536 V | +4.464 V |
| 0 | 99.3 µA | 0.66 µA | 99.3 µA | 99.3 µA | 0.658 V | −0.658 V |
| −5 V | 2.01 µA | 0.013 µA | 100 µA | 4.97 mA | 0.760 V | −5.760 V |
| −10 V | 1.01 µA | 0.007 µA | 100 µA | 9.93 mA | 0.778 V | −10.778 V |

At positive outputs the diode current falls, because $Q_1$'s base current comes out of $I_Q$; this is why $Q_2$ is turned further off at $+V_o$ than $Q_1$ is at $-V_o$.

### Step 4 — Transfer characteristic

![Transfer characteristic Vo versus Vi from -10 V to +10 V: nearly a unit-slope line offset by about 0.66 V, with the five computed points marked](/q/G131/solution-curves.svg)

The characteristic is almost a straight line of slope close to 1, displaced so that $V_i-V_o$ goes from $-0.48$ V at $V_o=+10$ V through $-0.66$ V at the origin to $-0.78$ V at $V_o=-10$ V. There is **no dead band**, since both output transistors already conduct at $V_o=0$. Chord slopes between the computed points are 0.989, 0.976, 0.980 and 0.996 (from $+10$ V down to $-10$ V).

The incremental slope does dip near the origin. There $Q_1$ and $Q_2$ both conduct about 99 µA, so the output resistance is their two $1/g_m$ values in parallel:

$$
R_o=\frac12\cdot\frac{26\ \mathrm{mV}}{99.3\ \mu\mathrm A}=131\ \Omega,\qquad \frac{dV_o}{dV_i}\bigg|_{V_o=0}=\frac{R_L}{R_L+R_o}=\frac{1000}{1131}=0.88 .
$$

The slope recovers to 0.95 by $|V_o|=0.5$ V and approaches 0.99–1.0 at the ends of the range, where one transistor carries several milliamperes. With $I_Q=0.1$ mA the quiescent current is small compared with the load current, so the residual crossover nonlinearity is confined to a few hundred millivolts around zero.
