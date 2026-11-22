# Detailed solution - A111

M1 supplies three branches: the two bandgap branches, whose currents are PTAT, and $R_4$, whose current is $V_{REF}/R_4$. Keep the given bandgap ratio $R_2/R_1=9.39$ so that $V_{REF}$ is temperature independent; then the $R_4$ current falls with temperature because $R_4$ has a positive TC, and that fall can cancel the rise of the PTAT currents. The zero-TC condition fixes $R_4/R_1$, and the level of $I_{REF}$ fixes $R_1$.

### Step 1 — Bandgap branch currents

The top ends of $R_2$ and $R_3$ are both at $V_{REF}$, and the ideal op amp makes their bottom ends equal. With $R_2=R_3$ the two currents are equal, $I_1=I_2$. Q1 and Q2 have grounded bases and collectors and carry the same current, and Q1 has 10 times the area, so the difference of the emitter–base voltages appears across $R_1$:

$$
V_{R1}=V_{EB2}-V_{EB1}=V_t\ln10,\qquad
I_1=I_2=\frac{V_t\ln10}{R_1},\qquad V_{t0}\ln10=59.87\ \mathrm{mV}.
$$

These currents are PTAT for a zero-TC $R_1$.

### Step 2 — Reference voltage

The node $V_{REF}$ lies $I_2R_3=I_1R_2$ above the emitter of Q2:

$$
V_{REF}=V_{EB2}+\frac{R_2}{R_1}V_t\ln10 .
$$

With the given design $R_2/R_1=9.39$, which satisfies the bandgap zero-TC condition $(R_2/R_1)V_{t0}\ln10=V_{G0}+(\gamma-\alpha)V_{t0}-V_{EB2}$,

$$
V_{REF}=0.7\ \mathrm V+9.39(0.05987\ \mathrm V)=1.262\ \mathrm V,\qquad \left.\frac{dV_{REF}}{dT}\right|_{T_0}=0 .
$$

### Step 3 — Total current of M1

M1's drain current flows into the top node and divides among $R_2$, $R_3$ and $R_4$. M2 is identical to M1 with the same gate and source voltages, so

$$
I_{REF}=I_1+I_2+\frac{V_{REF}}{R_4}=\frac{2V_t\ln10}{R_1}+\frac{V_{REF}}{R_4}.
$$

### Step 4 — Zero-TC condition

Write $R_4(T)=R_4(T_0)\left[1+TC_{R4}(T-T_0)\right]$ with $TC_{R4}=1500$ ppm/°C. At $T_0$, $V_{REF}$ has zero slope, so only the resistor changes the $R_4$ current, while the PTAT term grows in proportion to $T$:

$$
\frac{dI_{REF}}{dT}=\frac{2V_{t0}\ln10}{R_1T_0}-\frac{V_{REF}\,TC_{R4}}{R_4}=0
\quad\Rightarrow\quad
\frac{R_4}{R_1}=\frac{V_{REF}\,TC_{R4}\,T_0}{2V_{t0}\ln10}.
$$

Numerically,

$$
\frac{R_4}{R_1}=\frac{(1.262\ \mathrm V)(0.0015\ \mathrm K^{-1})(300\ \mathrm K)}{0.1197\ \mathrm V}=4.74 .
$$

### Step 5 — Resistors in terms of $I_{REF}$

Substituting $R_4=4.74R_1$ into Step 3:

$$
I_{REF}=\frac{1}{R_1}\left(0.1197\ \mathrm V+\frac{1.262\ \mathrm V}{4.74}\right)=\frac{0.1197+0.2661\ \mathrm V}{R_1}=\frac{0.386\ \mathrm V}{R_1}.
$$

Hence

$$
R_1=\frac{0.386\ \mathrm V}{I_{REF}},\qquad
R_2=R_3=9.39R_1=\frac{3.62\ \mathrm V}{I_{REF}},\qquad
R_4=4.74R_1=\frac{1.83\ \mathrm V}{I_{REF}}.
$$

For example, $I_{REF}=100$ µA gives $R_1=3.86$ kΩ, $R_2=R_3=36.2$ kΩ and $R_4=18.3$ kΩ.

With the full $V_{EB}(T)$ model and the linear TC of $R_4$, this design gives $I_{REF}$ 0.10% above its room-temperature value at 0 °C and 0.24% above it at 70 °C; only second-order curvature remains.

Other combinations are also valid. If $R_2/R_1$ is changed, $V_{REF}$ acquires a TC, and the general condition becomes $2V_{t0}\ln10\,(R_4/R_1)=V_{G0}+(\gamma-\alpha)V_{t0}-V_{REF}(1-TC_{R4}T_0)$ with $V_{REF}=V_{EB2}+(R_2/R_1)V_{t0}\ln10$.
