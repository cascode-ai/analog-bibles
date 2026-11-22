# Detailed solution - G103

The diode-connected transistor is saturated, and its gate–source voltage is $V_t$ plus the overdrive needed to carry $I$. The two parts drift in opposite directions. $V_t$ falls with temperature. The overdrive rises, because the mobility falls and a larger overdrive is needed for the same current. Express the overdrive's temperature coefficient in terms of $V_{ov}$ itself, set the sum of the two drifts to zero, and size $W/L$ to give that overdrive.

### Step 1 — Temperature dependence of the overdrive

With the gate tied to the drain, $V_{DS}=V_{GS}>V_{GS}-V_t$, so the device is saturated. From the square law,

$$
I=\frac{k'}2\frac WLV_{ov}^2\quad\Rightarrow\quad V_{ov}=\sqrt{\frac{2I}{k'(W/L)}},\qquad V_{GS}=V_t+V_{ov}.
$$

$I$ and $W/L$ are fixed, and $k'\propto\mu\propto T^{-n}$, so $V_{ov}\propto(k')^{-1/2}\propto T^{n/2}$, and

$$
\frac{dV_{ov}}{dT}=\frac n2\frac{V_{ov}}T .
$$

### Step 2 — Zero-TC condition

$$
\frac{dV_{GS}}{dT}=\frac{dV_t}{dT}+\frac n2\frac{V_{ov}}T=0
\quad\Rightarrow\quad
V_{ov}=-\frac{2T}n\frac{dV_t}{dT}=\frac{2(298\ \mathrm K)(2\ \mathrm{mV/K})}{1.5}=0.795\ \mathrm V .
$$

A larger overdrive makes its positive drift larger, so a single value balances the $-2$ mV/°C of the threshold.

### Step 3 — Required $W/L$

$$
\frac WL=\frac{2I}{k'V_{ov}^2}=\frac{2(200\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.795\ \mathrm V)^2}=\frac{400\ \mu\mathrm A}{122.5\ \mu\mathrm A}=3.26\approx3.3 .
$$

The resulting gate–source voltage is $V_{GS}=0.6\ \mathrm V+0.795\ \mathrm V=1.40$ V. Using $T=300$ K instead gives $W/L=3.22$.
