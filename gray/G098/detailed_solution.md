# Detailed solution - G098

The op amp forces equal voltages across $R_1$ and $R_2$, so the ratio of the two currents is set by $R_2/R_1$. The resulting $\Delta V_{BE}$ across $R_3$ is therefore PTAT. First use the specified $I_1$ and $\Delta V_{BE}$ to find $I_2$ and $R_3$. Next show that both bias currents are PTAT, which fixes the zero-TC output voltage. Finally size $R_1$ and $R_2$ to produce that voltage.

### Step 1 — Current ratio and $R_3$

The op amp holds its inputs at the same voltage, and both inputs tie to the bottoms of $R_1$ and $R_2$, whose tops are at $V_{OUT}$. Hence $I_1R_1=I_2R_2$. On the $Q_2$ side the input node is at $V_{BE2}+I_2R_3$, and on the $Q_1$ side it is at $V_{BE1}$, so

$$
I_2R_3=V_{BE1}-V_{BE2}=V_T\ln\frac{I_1}{I_2}=100\ \mathrm{mV}.
$$

$$
\frac{I_1}{I_2}=e^{100\ \mathrm{mV}/25.7\ \mathrm{mV}}=e^{3.891}=49.0,\qquad
I_2=\frac{200\ \mu\mathrm A}{49.0}=4.08\ \mu\mathrm A,\qquad
R_3=\frac{100\ \mathrm{mV}}{4.08\ \mu\mathrm A}=24.5\ \mathrm{k\Omega}.
$$

### Step 2 — The bias currents are PTAT

$I_1/I_2=R_2/R_1$ is fixed by temperature-independent resistors, so $\Delta V_{BE}=V_T\ln(R_2/R_1)\propto T$. Then $I_2=\Delta V_{BE}/R_3\propto T$, and $I_1=(R_2/R_1)I_2\propto T$. With $I_C\propto T^{\alpha}$, these currents have $\alpha=1$.

### Step 3 — Zero-TC output voltage

The output is $V_{OUT}=V_{BE1}+I_1R_1$, a $V_{BE}$ plus a PTAT voltage, which has the form $V_{BE}+MV_T$ with constant $M$. Differentiating $V_{BE}=V_T\ln(I_C/I_S)$ with $I_S\propto T^{\gamma}\exp(-V_{G0}/V_T)$ and $I_C\propto T^{\alpha}$ gives

$$
\frac{dV_{BE}}{dT}=\frac{V_{BE}-V_{G0}-(\gamma-\alpha)V_T}T,\qquad
\frac{dV_{OUT}}{dT}=\frac{V_{OUT}-V_{G0}-(\gamma-\alpha)V_T}T .
$$

Setting this to zero at 298 K with $\alpha=1$:

$$
V_{OUT}=V_{G0}+(\gamma-1)V_T=1.205\ \mathrm V+(2.2)(25.7\ \mathrm{mV})=1.2615\ \mathrm V .
$$

### Step 4 — $R_1$ and $R_2$

$$
V_{BE1}=V_T\ln\frac{I_1}{I_S}=(25.7\ \mathrm{mV})\ln\frac{200\ \mu\mathrm A}{5\times10^{-15}\ \mathrm A}=0.627\ \mathrm V .
$$

The rest of the output appears across $R_1$ and, equally, across $R_2$:

$$
I_1R_1=I_2R_2=1.2615\ \mathrm V-0.627\ \mathrm V=0.634\ \mathrm V,
$$

$$
R_1=\frac{0.634\ \mathrm V}{200\ \mu\mathrm A}=3.17\ \mathrm{k\Omega},\qquad
R_2=\frac{0.634\ \mathrm V}{4.08\ \mu\mathrm A}=155\ \mathrm{k\Omega}.
$$

Check: $R_2/R_3=6.34$, and $V_{OUT}=V_{BE1}+(R_2/R_3)\Delta V_{BE}=0.627\ \mathrm V+(6.34)(100\ \mathrm{mV})=1.2615$ V. Evaluating $V_{OUT}(T)$ numerically from the stated device model, with these fixed resistors, confirms $dV_{OUT}/dT=0$ at 298 K. With $V_T=26$ mV instead, the values become 23.4 kΩ, 3.14 kΩ and 147 kΩ.
