# Detailed solution - G100

Write $V_{OUT}$ as an emitter–base voltage plus the PTAT voltage across $R_2$. Then find how a 1 % low $R_3$ changes each piece. The resistor ratio $R_2/R_1$ and the $I_S$ values are unchanged, so $\Delta V_{EB}$ is unchanged. The currents and the PTAT term scale up by $R_3/R_3'$. Every resulting change in $V_{OUT}$ is proportional to $T$, and the nominal slope is zero, so the new slope is the change divided by $T$.

### Step 1 — Nominal output and the voltage across $R_2$

With an ideal op amp, $I_1R_1=I_2R_2$, $I_2R_3=\Delta V_{EB}=V_T\ln[(R_2/R_1)(I_{S2}/I_{S1})]$, and

$$
V_{OUT}=V_{EB1}+I_2R_2=V_{EB1}+\frac{R_2}{R_3}\Delta V_{EB}.
$$

The bias currents are PTAT ($\alpha=1$), so the nominal zero-TC output is $V_{OUT}=V_{G0}+(\gamma-1)V_T=1.205\ \mathrm V+(2.2)(25.7\ \mathrm{mV})=1.2615$ V. With $V_{EB1}=0.6$ V, the voltage across $R_2$ (and $R_1$) is

$$
V_{R2}=V_{OUT}-V_{EB1}=1.2615\ \mathrm V-0.6\ \mathrm V=0.6615\ \mathrm V .
$$

### Step 2 — Effect of $R_3$ being 1 % low

$\Delta V_{EB}$ depends on $R_2/R_1$ and the $I_S$ ratio, not on $R_3$, so it is unchanged. With $R_3'=0.99R_3$, both currents and the PTAT term rise by the factor $1/0.99=1.0101$:

$$
\Delta V_{R2}=(0.6615\ \mathrm V)(0.0101)=6.68\ \mathrm{mV}.
$$

The larger current through $Q_1$ also raises its emitter–base voltage:

$$
\Delta V_{EB1}=V_T\ln(1.0101)=(25.7\ \mathrm{mV})(0.01005)=0.26\ \mathrm{mV}.
$$

The output rises by $\Delta V_{OUT}=6.68\ \mathrm{mV}+0.26\ \mathrm{mV}=6.94\ \mathrm{mV}$.

### Step 3 — New temperature coefficient

Both increments are proportional to $T$: $\Delta V_{R2}$ is a fixed fraction of a PTAT voltage, and $\Delta V_{EB1}=V_T\ln(1.0101)$. The nominal output has zero slope at 25 °C, so

$$
\frac{dV_{OUT}}{dT}=\frac{\Delta V_{OUT}}T=\frac{6.94\ \mathrm{mV}}{298\ \mathrm K}=+23\ \mu\mathrm{V/°C}.
$$

Relative to the 1.268-V output, this is $+18$ ppm/°C. The PTAT term is now too large, so the output rises with temperature. A 1 % resistor error produces a TC of tens of ppm/°C, which is why the ratio $R_2/R_3$ is normally trimmed.
