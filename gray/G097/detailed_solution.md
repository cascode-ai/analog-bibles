# Detailed solution - G097

Differentiate $V_{OUT}=V_{BE(\text{on})}+MV_T$ with respect to temperature. The derivative of $V_{BE(\text{on})}$ contains three pieces: $V_{BE}/T$ from $V_T$, the temperature coefficient of the bias current $I_1$, and the strong temperature dependence of $I_S$. Setting the total to zero gives the output voltage directly, without needing $M$ or $I_S$ explicitly. The temperature coefficient of $I_1$ enters through the exponent $\alpha=T\cdot TC_F$.

### Step 1 — Temperature coefficient of the bias current

Over a small range near $T_0$, a current with fractional temperature coefficient $TC_F$ behaves as $I_1\propto T^{\alpha}$ with

$$
\frac1{I_1}\frac{dI_1}{dT}=\frac{\alpha}T\quad\Rightarrow\quad\alpha=T_0\cdot TC_F=(298\ \mathrm K)(-1500\times10^{-6}\ \mathrm{K^{-1}})=-0.447 .
$$

A PTAT current would have $\alpha=1$. The diffused-resistor current falls with temperature, so $\alpha<0$.

### Step 2 — Temperature derivative of $V_{BE(\text{on})}$

From $V_{BE(\text{on})}=V_T\ln(I_1/I_S)$ with $V_T=kT/q$:

$$
\frac{dV_{BE(\text{on})}}{dT}=\frac{V_{BE(\text{on})}}T+V_T\left[\frac1{I_1}\frac{dI_1}{dT}-\frac1{I_S}\frac{dI_S}{dT}\right].
$$

$I_S\propto T^{\gamma}\exp(-V_{G0}/V_T)$ gives $\frac1{I_S}\frac{dI_S}{dT}=\frac{\gamma}T+\frac{V_{G0}}{V_TT}$. Substituting this and $\alpha/T$ for the current term,

$$
\frac{dV_{BE(\text{on})}}{dT}=\frac{V_{BE(\text{on})}-V_{G0}-(\gamma-\alpha)V_T}T .
$$

### Step 3 — Zero temperature coefficient of $V_{OUT}$

$M$ is temperature-independent, so $d(MV_T)/dT=MV_T/T$. Setting the derivative of the output to zero at $T_0$,

$$
\frac{dV_{OUT}}{dT}=\frac{V_{BE(\text{on})}+MV_T-V_{G0}-(\gamma-\alpha)V_T}{T_0}=0
\quad\Rightarrow\quad
V_{OUT}(T_0)=V_{G0}+(\gamma-\alpha)V_{T0}.
$$

The reference must sit above the extrapolated bandgap voltage by $(\gamma-\alpha)V_T$. Whatever $M$ is chosen, it only has to make the output equal this value.

### Step 4 — Value

$$
V_{OUT}=1.205\ \mathrm V+(3.2+0.447)(25.7\ \mathrm{mV})=1.205\ \mathrm V+0.094\ \mathrm V=1.299\ \mathrm V\approx1.30\ \mathrm V .
$$

For a PTAT bias current ($\alpha=1$), the same formula gives $1.205\ \mathrm V+(2.2)(25.7\ \mathrm{mV})=1.262$ V. The negative TC of the resistor-derived current makes $V_{BE(\text{on})}$ fall faster with temperature. A larger PTAT term is needed to cancel it, which raises the zero-TC output by 37 mV.
