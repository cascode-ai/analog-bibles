# Detailed solution - G099

Write $V_{OUT}$ as an emitter–base voltage plus a PTAT term, then ask which pieces a common change of $I_S$ affects. The PTAT term depends only on the ratio of saturation currents, so it is unchanged. Each $V_{EB}$ shifts by the same amount at every temperature, and that shift is itself proportional to $T$. Its derivative is the new temperature coefficient, because the nominal design had zero slope.

### Step 1 — Output voltage of the reference

With $V_{OS}=0$ and an ideal op amp, the two op-amp inputs are at the same voltage. The tops of $R_1$ and $R_2$ are both at $V_{OUT}$, so the voltages across them are equal: $I_1R_1=I_2R_2$, and $I_1/I_2=R_2/R_1$. The input on the $Q_1$ side is at $V_{EB1}$, and the one on the $Q_2$ side is at $V_{EB2}+I_2R_3$. Equating them,

$$
I_2R_3=V_{EB1}-V_{EB2}=V_T\ln\left(\frac{I_1}{I_2}\cdot\frac{I_{S2}}{I_{S1}}\right)=\Delta V_{EB},
$$

$$
V_{OUT}=V_{EB2}+I_2(R_3+R_2)=V_{EB2}+\left(1+\frac{R_2}{R_3}\right)\Delta V_{EB}.
$$

The second term is PTAT, because $\Delta V_{EB}$ depends only on $V_T$ and fixed ratios.

### Step 2 — Effect of doubling both $I_S$

$I_{S2}/I_{S1}$ is unchanged, so $\Delta V_{EB}$, $I_2=\Delta V_{EB}/R_3$ and $I_1$ are all unchanged at every temperature. With the same current, $V_{EB2}=V_T\ln(I_2/I_{S2})$ falls by

$$
V_T\ln\frac{2I_S}{I_S}=V_T\ln2=(25.7\ \mathrm{mV})(0.693)=17.8\ \mathrm{mV}\quad\text{at }298\ \mathrm K .
$$

Hence, at every temperature,

$$
V_{OUT}(T)=V_{OUT,\text{nom}}(T)-\frac{kT}q\ln2 .
$$

### Step 3 — New temperature coefficient

The nominal design has $dV_{OUT,\text{nom}}/dT=0$ at 25 °C, so only the shift contributes:

$$
\frac{dV_{OUT}}{dT}=-\frac kq\ln2=-(86.2\ \mu\mathrm{V/K})(0.693)=-59.7\ \mu\mathrm{V/°C}\approx-0.06\ \mathrm{mV/°C}.
$$

For a band-gap output near 1.26 V this is about $-47$ ppm/°C. The result does not depend on $\gamma$, $V_{G0}$ or the resistor values. Equivalently, the output now sits 17.8 mV below its zero-TC value, and for a band-gap reference $dV_{OUT}/dT\approx\Delta V_{OUT}/T=-17.8\ \mathrm{mV}/298\ \mathrm K$, the same number. This is why band-gap references are often trimmed to their nominal output voltage: restoring the voltage also restores zero TC.
