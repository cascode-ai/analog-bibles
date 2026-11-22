# Detailed solution - G101

Write the output as $V_{BE1}$ plus a PTAT-like term minus $V_{OS}$. With $V_{OS}=0$, the zero-TC output is the usual $V_{G0}+(\gamma-1)V_T$. With the offset present, the output contains a temperature-independent $-V_{OS}$. Trimming $R_2$ restores the voltage at 25 °C by adding extra PTAT voltage, and that extra PTAT voltage now has a slope. The first-order slope is $+V_{OS}/T$. A second-order effect, the current ratio drifting with temperature, adds to it, so the exact circuit equations are solved as well.

### Step 1 — Circuit equations

$Q_1$ is diode-connected, so its collector and the common base node sit at $V_{BE1}$; this is the non-inverting input. The offset source lies between the collector of $Q_2$ and the inverting input, so a virtual short puts the collector of $Q_2$ at $V_{BE1}-V_{OS}$. With $\beta_F\to\infty$, $R_1$ carries $I_1$ (through $Q_1$) and $R_2$ carries $I_2$ (through $Q_2$ and $R_3$):

$$
I_1R_1=V_{OUT}-V_{BE1},\qquad I_2R_2=V_{OUT}-V_{BE1}+V_{OS},\qquad
I_2R_3=V_{BE1}-V_{BE2}=V_T\ln\frac{8I_1}{I_2},
$$

using $I_{S2}=8I_{S1}$. Eliminating $I_2$ from the second equation gives

$$
V_{OUT}=V_{BE1}+\frac{R_2}{R_3}\Delta V_{BE}-V_{OS},\qquad \frac{I_1}{I_2}=\frac{R_2}{R_1}-\frac{V_{OS}}{I_2R_1}.
$$

### Step 2 — Target voltage ($V_{OS}=0$)

With $V_{OS}=0$, $I_1/I_2=R_2/R_1$ is fixed, so $\Delta V_{BE}=V_T\ln(8R_2/R_1)$ is PTAT, and both currents are PTAT ($\alpha=1$). The zero-TC condition for $V_{BE}+$PTAT with PTAT bias is

$$
V_{\text{target}}=V_{G0}+(\gamma-1)V_T=1.205\ \mathrm V+(2.2)(25.7\ \mathrm{mV})=1.2615\ \mathrm V .
$$

Solving the equations of Step 1 for zero slope gives $R_2=5.75\ \mathrm{k\Omega}$, with $I_1=0.566$ mA, $I_2=98.4\ \mu\mathrm A$ and $V_{BE1}=0.695$ V.

### Step 3 — Trim with $V_{OS}=30$ mV: first-order slope

The output now contains $-V_{OS}=-30$ mV. To restore 1.2615 V, $R_2$ is raised so that $(R_2/R_3)\Delta V_{BE}$ grows by 30 mV; the exact trim is $R_2=6.06\ \mathrm{k\Omega}$. At 25 °C, the currents and $V_{BE1}$ then equal their nominal values. Relative to the nominal design, the output contains an extra term that is PTAT to first order, $+V_{OS}(T/T_0)$, and a constant $-V_{OS}$. The nominal part has zero slope, so

$$
\frac{dV_{OUT}}{dT}\approx\frac{V_{OS}}{T}=\frac{30\ \mathrm{mV}}{298\ \mathrm K}=+0.10\ \mathrm{mV/°C}.
$$

Trimming the voltage does not restore zero TC, because the error it cancels, $-V_{OS}$, has no temperature dependence, while the correction it adds does.

### Step 4 — Second-order effect and exact result

With the offset, $I_1/I_2=R_2/R_1-V_{OS}/(I_2R_1)$, and $V_{OS}/(I_2R_1)=30\ \mathrm{mV}/(98.4\ \mu\mathrm A\cdot1\ \mathrm{k\Omega})=0.305$. Because $I_2$ rises with $T$, this subtracted term shrinks, so $I_1/I_2$ (5.75 at 25 °C) and $\Delta V_{BE}$ rise slightly faster than PTAT. The extra slope of $\ln(I_1/I_2)$ is about $(0.305/5.75)/T$, multiplied by $(R_2/R_3)V_T=156$ mV:

$$
\Delta\frac{dV_{OUT}}{dT}\approx\frac{(156\ \mathrm{mV})(0.053)}{298\ \mathrm K}\approx+0.03\ \mathrm{mV/°C}.
$$

Solving the equations of Step 1 exactly with the given $I_S(T)$ model, with $R_2=6.06\ \mathrm{k\Omega}$, and differentiating numerically at 298 K gives

$$
\frac{dV_{OUT}}{dT}=+0.134\ \mathrm{mV/°C}\approx+0.13\ \mathrm{mV/°C}.
$$

The output now rises with temperature, at about $+106$ ppm/°C of 1.26 V, even though its value at 25 °C is exactly the target.
