# Detailed solution - G102

Find how the offset enters the output. It turns out to subtract a temperature-independent amount, so the trim must make up for it with extra PTAT voltage. Then compare the slopes. The zero-slope mixture of $V_{BE}$ and PTAT voltage would sit $V_{OS}$ below the target. Pushing the output up to the target with PTAT voltage alone leaves a net positive slope.

### Step 1 — Where the offset enters

$Q_1$ is diode-connected, so the non-inverting input sits at $V_{BE1}$. The offset source is in series with the inverting input, with the polarity shown, so a virtual short puts the collector of $Q_2$ at $V_{BE1}-V_{OS}$. With $\beta_F\to\infty$, $R_2$ carries $I_2$ and $R_3$ carries the same current, with $I_2R_3=\Delta V_{BE}=V_{BE1}-V_{BE2}$. Then

$$
V_{OUT}=(V_{BE1}-V_{OS})+I_2R_2=V_{BE1}+\frac{R_2}{R_3}\Delta V_{BE}-V_{OS}.
$$

A positive $V_{OS}$ lowers the output by a constant 30 mV, which has no temperature dependence.

### Step 2 — What the trim does

With $V_{OS}=0$, the target $V_{G0}+(\gamma-1)V_T\approx1.26$ V is reached when the PTAT term $(R_2/R_3)\Delta V_{BE}$ exactly cancels the negative slope of $V_{BE1}$. With $V_{OS}=+30$ mV present, trimming the output back to the target requires $(R_2/R_3)\Delta V_{BE}$ to grow by about 30 mV, so $R_2$ must be increased (from about 5.75 kΩ to 6.06 kΩ).

### Step 3 — Sign of the slope

The output is now the zero-slope combination $V_{BE1}+(\text{PTAT})$, plus an extra PTAT voltage of about $V_{OS}(T/T_0)$, minus the constant $V_{OS}$. Only the extra PTAT part has a slope:

$$
\frac{dV_{OUT}}{dT}\approx+\frac{V_{OS}}T=+\frac{30\ \mathrm{mV}}{298\ \mathrm K}\approx+0.1\ \mathrm{mV/°C}>0 .
$$

The PTAT term is over-weighted, so $dV_{OUT}/dT$ is **positive**, and the zero-TC point of the trimmed circuit moves well above 25 °C. A second-order effect adds in the same direction. With the offset, $I_1/I_2=R_2/R_1-V_{OS}/(I_2R_1)$; as $I_2$ grows with $T$, the subtracted term shrinks and $\Delta V_{BE}$ rises faster than PTAT. An exact solution of the circuit equations gives $+0.134$ mV/°C.
